var webpack = require('webpack');

module.exports = {
  entry: './components/app.js',
  output: { path: 'dist', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
};