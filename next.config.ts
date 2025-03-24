import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PUBLIC_API_URL: "https://api.aviationstack.com/v1",
    PUBLIC_API_KEY: "319039af6d7e286402faa09a57aa49f3",
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
