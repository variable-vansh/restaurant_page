const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'lageRaho.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        })
    ],

    devServer: {
        static: path.join(__dirname, 'public'),
        port: 9000
    }
}
