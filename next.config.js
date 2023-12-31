/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    domains: ["loremflickr.com", "localhost"],
  },
  distDir: "build",
};

module.exports = nextConfig;
