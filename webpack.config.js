var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
  contentBase: "./client",
  hot: true,
  historyApiFallback: true
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    },
    {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}