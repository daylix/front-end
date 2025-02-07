//@ts-check

const { composePlugins, withNx } = require('@nx/next');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  output: 'export',  // Enable static export
  experimental: {
    serverComponentsExternalPackages: ["graphql"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fra1.digitaloceanspaces.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'production' 
      ? 'https://strapi.daylix.pro/graphql'
      : 'http://localhost:1337/graphql'
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withNextIntl,
];

module.exports = composePlugins(...plugins)(nextConfig);
