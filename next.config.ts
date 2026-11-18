import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1600],
    imageSizes: [256, 384, 512, 640],
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, nocache" }],
      },
    ];
  },
};

export default nextConfig;
