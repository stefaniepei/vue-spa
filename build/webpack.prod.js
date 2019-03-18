const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpack = require('webpack'); // 用于访问内置插件

let fs = require('fs'),
    path = require('path');

// 存储的是当前模块执行所在的绝对路径(!==__dirname)
let dirname = path.resolve();

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;