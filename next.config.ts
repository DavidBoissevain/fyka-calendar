import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-hosted in Docker (see Dockerfile): `standalone` emits a minimal
  // server.js with only the node_modules it needs, so we can run on any EU
  // host without Vercel-specific features.
  output: "standalone",
  poweredByHeader: false,
  experimental: {
    // The root layout lives under app/[lang], so unmatched URLs need
    // app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
