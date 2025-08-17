import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        protocol: "https",
        hostname: "s.wordpress.com",
      },
      {
        protocol: "https",
        hostname: "v1.screenshot.11ty.dev",
      },
    ],
  },
};

export default nextConfig;
