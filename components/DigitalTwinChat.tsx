"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "digitalTwinChat:v1";

const STARTERS: Array<{ title: string; prompt: string }> = [
  {
    title: "Career through-line",
    prompt: "What’s the through-line of your career and what patterns stand out?",
  },
  {
    title: "Impact highlights",
    prompt: "What are 5 career highlights with measurable outcomes (where possible)?",
  },
  {
    title: "Data mesh POV",
    prompt: "What’s your point of view on data mesh and data products in 2026?",
  },
  {
    title: "Best next roles",
    prompt: "What roles fit you best next, and why?",
  },
];

export function DigitalTwinChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "I’m Andy’s digital twin. Ask me about my career journey, GTM leadership, publications, or how I approach data + AI in enterprise environments.",
    },
  ]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) return;
      const safe = parsed
        .filter(
          (m): m is ChatMessage =>
            !!m &&
            (m.role === "user" || m.role === "assistant") &&
            typeof m.content === "string",
        )
        .slice(-50);
      if (safe.length > 0) setMessages(safe);
    } catch {
      // ignore
    }
  }, []);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const canSend = input.trim().length > 0 && !isSending;

  const payloadMessages = useMemo(
    () =>
      messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    [messages],
  );

  const lastAssistantMessage = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i]?.role === "assistant") return messages[i]?.content ?? "";
    }
    return "";
  }, [messages]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-50)));
    } catch {
      // ignore
    }
  }, [messages]);

  async function copyLastAnswer() {
    if (!lastAssistantMessage) return;
    try {
      await navigator.clipboard.writeText(lastAssistantMessage);
    } catch {
      // ignore
    }
  }

  function newChat() {
    setError(null);
    setInput("");
    abortRef.current?.abort();
    abortRef.current = null;
    setMessages([
      {
        role: "assistant",
        content:
          "I’m Andy’s digital twin. Ask me about my career journey, GTM leadership, publications, or how I approach data + AI in enterprise environments.",
      },
    ]);
  }

  async function send(text: string) {
    const content = text.trim();
    if (!content) return;

    setError(null);
    setIsSending(true);
    setInput("");

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    // We’ll optimistically add the user message and an empty assistant message
    // that we can fill as tokens stream in.
    setMessages((prev) => [
      ...prev,
      { role: "user", content },
      { role: "assistant", content: "" },
    ]);

    try {
      const res = await fetch("/api/digital-twin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: [...payloadMessages, { role: "user", content }],
          stream: true,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { message?: string; error?: string }
          | null;
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      if (!res.body) throw new Error("No response stream.");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const delta = decoder.decode(value, { stream: true });
        if (!delta) continue;
        setMessages((prev) => {
          const next = [...prev];
          for (let i = next.length - 1; i >= 0; i--) {
            if (next[i]?.role === "assistant") {
              next[i] = {
                role: "assistant",
                content: `${next[i]!.content}${delta}`,
              };
              break;
            }
          }
          return next;
        });
      }

      queueMicrotask(() => {
        listRef.current?.scrollTo({
          top: listRef.current.scrollHeight,
          behavior: "smooth",
        });
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setError(msg);
      setMessages((prev) => {
        const next = [...prev];
        // If the last message is an empty assistant placeholder, remove it.
        if (next.length > 0 && next[next.length - 1]?.role === "assistant") {
          const last = next[next.length - 1]!;
          if (!last.content) next.pop();
        }
        return next;
      });
    } finally {
      setIsSending(false);
      abortRef.current = null;
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur">
      <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 p-[1px]">
            <div className="grid h-full w-full place-items-center rounded-2xl bg-black/60 text-sm font-semibold text-white">
              AM
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Digital Twin</h2>
            <div className="mt-0.5 flex items-center gap-2 text-xs text-zinc-400">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/80" />
              <span>Live via OpenRouter</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={newChat}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-white/20 hover:bg-black/40"
          >
            New chat
          </button>
          <button
            type="button"
            onClick={() => void copyLastAnswer()}
            disabled={!lastAssistantMessage}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-white/20 hover:bg-black/40 disabled:opacity-50"
          >
            Copy last answer
          </button>
          <div className="hidden rounded-full border border-cyan-300/25 bg-cyan-950/20 px-3 py-1.5 text-xs text-cyan-200 md:block">
            arcee-ai/trinity-large-preview:free
          </div>
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-5">
        <aside className="border-b border-white/10 bg-black/20 p-5 md:col-span-2 md:border-b-0 md:border-r md:border-white/10">
          <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Start here
          </div>
          <div className="mt-3 grid gap-2">
            {STARTERS.map((s) => (
              <button
                key={s.title}
                type="button"
                onClick={() => void send(s.prompt)}
                disabled={isSending}
                className="group rounded-2xl border border-white/10 bg-black/30 p-4 text-left transition hover:border-cyan-300/25 hover:bg-cyan-950/10 disabled:opacity-50"
              >
                <div className="text-sm font-semibold text-white">{s.title}</div>
                <div className="mt-1 text-xs leading-relaxed text-zinc-400">
                  {s.prompt}
                </div>
                <div className="mt-3 text-xs text-cyan-200/0 transition group-hover:text-cyan-200/90">
                  Ask →
                </div>
              </button>
            ))}
          </div>
        </aside>

        <section className="p-5 md:col-span-3">
          <div
            ref={listRef}
            className="h-[420px] overflow-auto rounded-2xl border border-white/10 bg-black/30 p-4"
            role="log"
            aria-label="Digital twin chat messages"
            aria-live="polite"
          >
            <div className="space-y-3">
              {messages.map((m, idx) => (
                <div key={idx} className="flex gap-3">
                  <div
                    className={[
                      "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl text-xs font-semibold",
                      m.role === "user"
                        ? "bg-white/10 text-zinc-100"
                        : "bg-gradient-to-r from-cyan-300/30 to-fuchsia-300/30 text-white",
                    ].join(" ")}
                  >
                    {m.role === "user" ? "You" : "AM"}
                  </div>
                  <div
                    className={[
                      "w-full rounded-2xl border px-4 py-3 text-sm leading-relaxed",
                      m.role === "user"
                        ? "border-white/10 bg-zinc-950/40 text-zinc-100"
                        : "border-cyan-300/15 bg-cyan-950/15 text-zinc-100",
                    ].join(" ")}
                  >
                    <pre className="whitespace-pre-wrap font-sans">{m.content}</pre>
                  </div>
                </div>
              ))}

              {isSending ? null : null}
            </div>
          </div>

          {error ? (
            <div className="mt-3 rounded-2xl border border-red-400/30 bg-red-950/30 px-4 py-3 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          <form
            className="mt-4 flex items-end gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
          >
            <div className="flex-1">
              <label className="sr-only" htmlFor="digital-twin-input">
                Ask a question
              </label>
              <textarea
                id="digital-twin-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                    e.preventDefault();
                    void send(input);
                  }
                }}
                placeholder="Ask about roles, achievements, publications, GTM strategy, partner motions…"
                rows={2}
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-300/40 focus:outline-none"
              />
              <div className="mt-2 text-xs text-zinc-500">
                Tip: press <span className="text-zinc-300">⌘/Ctrl</span>+
                <span className="text-zinc-300">Enter</span> to send. Ask for a
                structured answer (bullets, timeline, or “3 options +
                recommendation”).
              </div>
            </div>
            <button
              type="submit"
              disabled={!canSend}
              className="h-11 rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-5 text-sm font-semibold text-black transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? "Sending…" : "Send"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

