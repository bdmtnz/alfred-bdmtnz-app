import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PUBLIC_API_URL: "https://api.aviationstack.com/v1",
    PUBLIC_API_KEY: "c65da17a1a923daa75234c31040b525a",
    PUBLIC_MAPS_API_KEY: "AIzaSyBjD3wO_UKFT-PJ8IHJjix9EK1QCyVmxZc"
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
