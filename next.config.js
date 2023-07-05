/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["loremflickr.com", "localhost"],
  },
  distDir : 'build',
  removeImports,
};

module.exports = nextConfig
