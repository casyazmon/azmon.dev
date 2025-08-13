// next.config.js
const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX(nextConfig);
