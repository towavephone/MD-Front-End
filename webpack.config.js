var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devTool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            './src/app.jsx'
        ],
        vendor: ['react-select', 'bootstrap-growl-ifightcrime', 'react-dom', 'react', 'lazysizes']
    },
    resolve: {extensions: ['', '.js', '.jsx']},
    output: {
        path: __dirname + '/build/',
        filename: '[name].js',
        publicPath: '/build/',
        chunkFilename: '[name].chunk.js'
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
            exclude: [/node_modules/, /build/]
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
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
            loader: 'url-loader',
            query: {
                limit: 10240, // 10KB 以下使用 base64
                name: 'images/[name]-[hash:6].[ext]'
            }
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?.*$|$)/,
            loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({React: 'react'}),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.html'
        }),
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        })
    ]
};