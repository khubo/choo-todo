const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        historyApiFallback: true,
        inline: true,
        open: true
    },
    devtool: 'source-map',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.scss$/, // files ending with .scss
                use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'postcss-loader']
                }))
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?context=src/assets/images/&name=images/[path][name].[ext]', { // images loader
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 4
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3
                            }
                        }
                    }
                ],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'output.js'
    },
    plugins: [new ExtractTextWebpackPlugin('styles.css')],
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.scss',
            '.css',
            '.jpeg',
            '.jpg',
            '.gif',
            '.png'
        ],
        alias: {
            images: path.resolve(__dirname, 'src/assets/images')
        }
    }
}

if (process.env.NODE_ENV === 'production') {
    module
        .exports
        .plugins
        .push(
            new webpack.optimize.UglifyJsPlugin(), 
            new OptimizeCSSAssets()
        );
}

module.exports = config;