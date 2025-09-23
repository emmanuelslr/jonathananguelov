import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1yei2z3i6k35z.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
