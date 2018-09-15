const path = require('path');

module.exports = {
  entry: path.resolve('./public/src'),
  output: {
    path: path.resolve('./public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development'
}