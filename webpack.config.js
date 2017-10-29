const webpack = require('webpack');
const path = require('path');
const client = path.resolve(__dirname, 'client')

/*
  Note: removed webpack html plugin from config
*/

module.exports = {
  entry: './client/index.js',
  output: {
    path: client,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }
};
