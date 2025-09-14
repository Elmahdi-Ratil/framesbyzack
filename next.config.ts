import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};

module.exports = {
  experimental: {
    turbo: {
      rules: {}, // optional if you want turbo customization
    },
  },
};

export default nextConfig;
