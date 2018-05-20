import webpack from 'webpack'
import path from 'path'

export default {
  devtool: 'inline-source-map',

  entry: [
    path.resolve(__dirname, 'src/index.js') 
  ],

  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module:{
    rules:[
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
             },
             {
              test: /\.(svg)$/,
              use: [{
                loader: 'url-loader',
                options: { limit: 10000 } // Convert images < 10k to base64 strings
              }]
             },
             {
              test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
              use: [{
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/',    // where the fonts will go
                }
              }]
            }
     ]
  },
}