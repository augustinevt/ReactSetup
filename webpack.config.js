var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './source/react/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
