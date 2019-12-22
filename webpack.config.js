const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: __dirname + "/dist/index.html"
    })
  ]
};
