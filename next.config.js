/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["loremflickr.com", "localhost"],
  },
  removeImports,
};

module.exports = nextConfig
