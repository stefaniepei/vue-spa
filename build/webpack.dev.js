const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const { VueLoaderPlugin } = require('vue-loader') 
let path = require('path');

// 存储的是当前模块执行所在的绝对路径(!==__dirname)
let dirname = path.resolve();

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // html, css, js 图片等资源文件的输出路径，将所有资源文件放在 dist 目录
    publicPath: '/',                       // html, css, js 图片等资源文件的 server 上的路径
    filename: 'js/[name].[hash].js'        // 每个入口 js 文件的生成配置
  },
  resolve: {
    extensions: ['.vue','.js', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js', //完整版本的vue
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './img/[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './media/[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './font/[name].[ext]?[hash:7]'
        }
      },  
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.css$/,
        loaders: ['vue-style-loader', "css-loader"] 
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};