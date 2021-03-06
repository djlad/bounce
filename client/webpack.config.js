var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");
var pathToPhaser = path.join(__dirname, "/node_modules/phaser/");
var phaser = path.join(pathToPhaser, "dist/phaser.js");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {from:'assets', to: 'assets'}
      ]
    })
  ],
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader", exclude: "/node_modules/" },
      { test: /phaser\.js$/, use: "expose-loader?Phaser" }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    host: "127.0.0.1",
    port: 8080,
    open: true
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      phaser: phaser
    }
  }
};