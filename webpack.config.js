const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve('./public/src'),
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0', 'react']
        }
      },
      {
        test: [/\.css$/, /\.scss$/],
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, 
        loader: 'url-loader?limit=100000' 
      },
      {
        test: /\.(gif|png|jpe?g|svg|pdf)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: false, // webpack@2.x and newer
              mozjpeg: {
                progressive: true,
                quality: 75
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: true,
                optimizationLevel: 2,
              },
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'production',
  plugins: [
    new Dotenv(),
    // new webpack.DefinePlugin({
    //   DEBUG: process.env.NODE_ENV !== 'production',
    //       'process.env': {
    //           'NODE_ENV': JSON.stringify(process.env.NODE_ENV || "development"),
    //           'API_KEY': JSON.stringify(process.env.API_KEY)}}),
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      // copys the content of the existing index.html to the new /build index.html
      template:  path.resolve('./public/dist/index.html'),
    }),
  ],
  optimization: {
    minimize: true
  },
  // node: {
  //   fs: 'empty'
  // }
}