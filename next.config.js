/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["loremflickr.com"],
  },
  removeImports,
};

module.exports = nextConfig
