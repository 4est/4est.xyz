'use strict';

const webpack = require('webpack'),

         path = require('path');

let config = {

  entry: ['./server.js','./src/main.js'],
  module: {

    loaders: [

      // CSS: scss, css

      {

        test: /\.s?css$/,

        loaders: ['style', 'css', 'sass', 'postcss-loader']

      },

      // SVGs: svg, svg?something

      {

        test: /\.svg(\?.*$|$)/,

        loader: 'file-loader?name=/img/[name].[ext]'

      },

      // Images: png, gif, jpg, jpeg

      {

        test: /\.(png|gif|jpe?g)$/,

        loader: 'file?name=/img/[name].[ext]'

      },

      // HTML: htm, html

      {

        test: /\.html?$/,

        loader: "file?name=[name].[ext]"

      },

      // Font files: eot, ttf, woff, woff2

      {

        test: /\.(eot|ttf|woff2?)(\?.*$|$)/,

        loader: 'file?name=/fonts/[name].[ext]'

      }

   ]

 },
  output: {

    path: './dist',

    filename: 'bundle.js'

  },

};

module.exports = config;