require('dotenv').config();
const path = require('path');
const ChunkHashReplacePlugin  = require('chunkhash-replace-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'etherbot.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    disableHostCheck: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['docs/etherbot*.js']),
    new ChunkHashReplacePlugin({
      src: 'src/index.html',
      dest: 'docs/index.html',
    }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
    ],
  },
};
