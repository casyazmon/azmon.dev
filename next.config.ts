// next.config.js
const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX(nextConfig);
