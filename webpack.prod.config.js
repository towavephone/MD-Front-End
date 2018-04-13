var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
module.exports = {
    entry: {
        app: [
            './src/app.jsx'
        ],
        vendor1: ['react-dom', 'react'],
        vendor2: ['react-select', 'lazysizes', 'bootstrap-growl-ifightcrime']
    },
    resolve: {extensions: ['', '.js', '.jsx']},
    output: {
        path: __dirname + '/build',
        filename: '[name].[chunkhash].js',
        publicPath: '/build/',
        chunkFilename: '[name].chunk.[chunkhash].js'
    },
    module: {
        preLoaders: [{
            test: /\.(jsx|js)?$/,
            exclude: [/node_modules/, /build/],
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.(jsx|js)?$/,
            loader: 'babel-loader',
            include: [/src/, /dist/]
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.ejs$/,
            loader: 'ejs-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'url-loader?limit=10240&name=images/[name]-[hash:6].[ext]'
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?.*$|$)/,
            loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
            // In case you imported plugins individually, you must also require them here:
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.prod.ejs'
        }),
        // 打包的时候删除重复或者相似的文件
        new webpack.optimize.DedupePlugin(),
        // 压缩js
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {warnings: false},
            output: {comments: false}
        }),
        // // 根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            // 不知道为什么不能加 manifest
            name: ['common', 'vendor1', 'vendor2'],
            minChunks: Infinity
        }),
        new InlineManifestWebpackPlugin({name: 'webpackManifest'}),
        // 优化代码，合并相似部分，提取公共部分
        new webpack.optimize.AggressiveMergingPlugin(),
        // 把多个小模块进行合并，以减少文件的大小
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 30000}),
        // 抽离css
        new ExtractTextPlugin('[name].[contenthash:6].css', {allChunks: false})
    ]
};