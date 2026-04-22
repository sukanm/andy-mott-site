import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js needs unsafe-inline for runtime scripts/styles.
      // Dev also needs unsafe-eval for React's error-overlay tooling.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      // next/font/google self-hosts fonts; gstatic needed as fallback.
      "font-src 'self' data: https://fonts.gstatic.com",
      // Client only calls its own API route — no direct OpenRouter calls.
      // Dev adds webpack-hmr websocket support.
      `connect-src 'self'${isDev ? " ws://localhost:* wss://localhost:*" : ""}`,
      "img-src 'self' data:",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
