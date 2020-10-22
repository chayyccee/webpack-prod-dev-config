const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
            filename: '[name].[contenthash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
    module: {
        rules: [  
             {
                 test: /\.(js|jsx)$/,
                 exclude: /[\\/]node_modules[\\/]/,
                 use: {
                     loader: 'babel-loader',
                 },
             },
    ]
    }
}