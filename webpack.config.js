const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  output: {
    filename: "[name].[contenthash].js",
    path: __dirname + "/dist/static",
    publicPath: "/static/"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: __dirname + "/dist/index.html"
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: "./src/service-worker.js",
      importWorkboxFrom: "local"
    })
  ]
};
