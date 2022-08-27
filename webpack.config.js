const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {
          images: path.resolve(__dirname, 'src/assets/img/'),
        },
      },
    module: {
        rules: [{
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['source-map-loader', 'babel-loader'],
            },
            {
                test: /\.(?:json)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/data/[name][ext]',
                },
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, 'src/assets'),
                to: 'assets',
              },
            ],
          }),
    ],
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
};