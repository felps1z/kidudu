const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: 'production',
    entry: './src/assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
        }),
      ],
    devtool: 'source-map'
}