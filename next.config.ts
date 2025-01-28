import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  target: 'serverless',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
