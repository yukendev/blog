/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { resolve } = require("path");
const CopyFilePlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = nextConfig;

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.plugins.push(
      new CopyFilePlugin({
        patterns: [
          {
            context: "posts",
            from: "**/*.{jpg,png}",
            to: resolve(__dirname, "public/assets/images/posts"),
          },
        ],
      }),
      new WriteFilePlugin()
    );

    return config;
  },
};
