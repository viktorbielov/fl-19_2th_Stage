const path = require('path');
const miniCssRequirePlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
   name: 'browser',
   mode: 'production',
   entry: './js/index.js',
   output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [
        {
            test:/\.(s*)css$/i,
            use: [
                miniCssRequirePlugin.loader,
                'css-loader',
                'sass-loader',
            ]
        },
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
        }
    ]
   },
   plugins: [
      new miniCssRequirePlugin({
         filename: 'style.css',
      }),
      new HTMLWebpackPlugin({
         template: "index.html"
    }),
      new ESLintPlugin()
   ]
};