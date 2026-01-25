/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = require('next-intl/plugin')('./i18n.ts')(nextConfig);
