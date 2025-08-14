import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    BUILD_PHASE: process.env.BUILD_PHASE,
  },
  // other config options here
};

export default nextConfig;
