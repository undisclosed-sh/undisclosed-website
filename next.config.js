/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en-US', 'cs-CZ'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig
