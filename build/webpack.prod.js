let path = require('path');
// 将样式提取到单独的 css 文件中，而不是打包到 js 文件或使用 style 标签插入在 head 标签中
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
// css、js压缩、优化插件
let TerserPlugin = require('terser-webpack-plugin');
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 生成自动引用 js 文件的HTML
let HtmlWebpackPlugin = require('html-webpack-plugin');
let glob = require('glob');

let entries = getEntry('./source/**/index.js'); // 获得入口 js 文件
// let chunks = Object.keys(entries);

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  // entry: entries,
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // html, css, js 图片等资源文件的输出路径，将所有资源文件放在 Public 目录
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
        loaders: [ MiniCssExtractPlugin.loader, 'css-loader'] 
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // new HtmlWebpackPlugin({template: './src/index.html'}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
  ],
  optimization: {
    minimizer:[
      new TerserPlugin({ // 压缩js
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({ // 压缩css
        cssProcessorOptions: {
          safe: true
        }
      })
    ]
  }
};

let pages = getEntry('./src/**/*.html');
for (let pathname in pages) {
  // 配置生成的 html 文件，定义路径等
  let conf = {
    filename: pathname + '.html', // html 文件输出路径
    template: pages[pathname], // 模板路径
    inject: true,              // js 插入位置
    minify: {
      removeComments: true,
      collapseWhitespace: false
    }
  };
  if (pathname in module.exports.entry) {
    conf.chunks = ['vendors', pathname];
    conf.hash = false;
  }
  console.log({conf});
  console.log({pages});
  // 需要生成几个 html 文件，就配置几个 HtmlWebpackPlugin 对象
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}

// 根据项目具体需求，输出正确的 js 和 html 路径
function getEntry(globPath) {
  let entries = {},
    pathname;

  glob.sync(globPath).forEach(function (entry) {
    // basename = path.basename(entry, path.extname(entry));
    console.log({entry})
    pathname = entry.substring(entry.lastIndexOf('/'), entry.lastIndexOf('.')); // 正确输出 js 和 html 的路径
    console.log({pathname})
    entries[pathname] = entry;
  });
  return entries;
}