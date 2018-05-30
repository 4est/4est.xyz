import webpack from 'webpack'
import path from 'path'

export default {
  devtool: 'inline-source-map',

  entry: [
    path.resolve(__dirname, 'src/index.js') 
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
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
               test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
     ],
  },
}
