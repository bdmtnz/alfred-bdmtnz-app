import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PUBLIC_API_URL: "https://api.aviationstack.com/v1",
    PUBLIC_API_KEY: "e7beca7e9da3586c22e17db0542a86a1"
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
