  const path = require('path');
  // const HtmlWebpackPlugin = require('html-webpack-plugin');
  // const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      main: ['./src/main.js']
    },
   mode: "development",
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },   
    devServer: {
    contentBase: './dist'
   },
   module:{
   	rules: [
   	{
   		test: /\.css$/,

  use: [
{ 
	loader: "style-loader"
},
{ 
	loader: "css-loader"
}
       ]
     	},
      {
        test: /\.html$/,
        use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].html"
              }
            },
            {
              loader: "extract-loader"
            },
             {
              loader: "html-loader",
              options: {
                attrs: ["img:src"]
              }
            }
        ]
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [
         {
          loader: "file-loader",
          options: {
            name: "images/[name]-[hash:8].[ext]"
          }
         }
        ]
      }
   	]
   }
  };