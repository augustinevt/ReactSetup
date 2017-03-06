var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-maps',
  entry: './source/react/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: 'node_modules',
        loader: 'babel-loader',
      },
    ],
  },
};
