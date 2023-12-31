/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

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
  output: "export",
  distDir: "build",
  removeImports,
};

module.exports = nextConfig;
