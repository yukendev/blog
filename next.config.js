/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
};

const { resolve } = require('path');
const CopyFilePlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  ...nextConfig,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(
      new CopyFilePlugin({
        patterns: [
          {
            context: 'posts',
            from: '**/*.{jpg,png,gif}',
            to: resolve(__dirname, 'public/assets/images/posts'),
          },
        ],
      }),
      new WriteFilePlugin(),
    );

    return config;
  },
};
