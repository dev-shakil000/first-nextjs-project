require("dotenv").config;
const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};
