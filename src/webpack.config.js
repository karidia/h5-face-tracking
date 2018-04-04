var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendors",
    filename: 'vendors.js',
  }),
  new ExtractTextPlugin("../css/styles.css")
]

module.exports = {
  devtool: false,
  context: path.resolve(__dirname, './public/dev/'),
  entry: {
    face: ['js/app/face.js'],
    faceJq: ['js/app/faceJq.js'],
    index: ['js/app/index.js'],
    vendors: ['main', 'url', 'template', 'templateConfig']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public/dist/js/'),
    chunkFilename: '[name].js'
  },
  plugins,
  // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname, './public/dev')
    ],
    alias: {
      url: 'js/base/url.js',
      template: 'js/base/template.js',
      templateConfig: 'js/base/template.config.js',
      main: 'js/app/main.js'
    }
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
      include: path.join(__dirname, './public/dev/js/app')
    }, {
      test: /\.(txt)$/,
      use: "raw-loader"
    }, {
      test: /\.(less|css)$/,
      use: ExtractTextPlugin.extract({
        use: ["css-loader", "less-loader", "postcss-loader"]
      })
    }, {
      test: /\.(png|jpg|gif|md)$/,
      use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: ['url-loader?limit=10000&mimetype=image/svg+xml']
    }],
  }
};
