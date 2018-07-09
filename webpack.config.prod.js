const path = require('path');
const ChunkHashReplacePlugin  = require('chunkhash-replace-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'etherbot.[chunkhash].js',
    publicPath: 'docs/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['docs/etherbot*.js']),
    new UglifyJsPlugin({
      comments: false,
    }),
    new ChunkHashReplacePlugin({
      src: 'src/index.html',
      dest: 'docs/index.html',
    }),
  ],
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
