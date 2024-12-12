import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.watchOptions = {
      poll: 300, // Interval (ms) to check for changes
      aggregateTimeout: 300, // Delay before rebuilding
    };
    return config;
  },
};

export default nextConfig;
