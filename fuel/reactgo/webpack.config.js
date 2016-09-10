var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var postcssPartialImport = require('postcss-partial-import');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var PathRewriterPlugin = require('webpack-path-rewriter');
var git = require('git-rev-sync');

var ver = '?' + git.short();
var __DEVELOPMENT__ = process.env.NODE_ENV === 'development';

var opts = {
    baseUrl: path.resolve(__dirname, 'app'),
    bundle : __DEVELOPMENT__ ? 'js/bundle.js?dev' : 'js/bundle.js' + ver,
    vendor : __DEVELOPMENT__ ? 'js/vendor.js?dev' : 'js/vendor.js' + ver,
    css    : __DEVELOPMENT__ ? 'css/main.css?dev' : 'css/main.css' + ver,
    font   : __DEVELOPMENT__ ? '[path][name].[ext]?dev' : '[path][name].[ext]',
    img    : __DEVELOPMENT__ ? '[path][name].[ext]?dev' : '[path][name].[ext]'
};

var config = {
    entry: {
        app: ['index.jade', 'js/index.jsx', 'css/main.scss'],
        vendor: []
    },
    resolve: {
        root: [opts.baseUrl],
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    output: {
        path: path.resolve(__dirname, 'deploy'),
        filename: opts.bundle,
        publicPath: ''
    },
    devtool: __DEVELOPMENT__ ? 'source-map' : false,
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.scss$/i,
                loader: ExtractTextPlugin.extract(['css!postcss', 'sass'])
            }, {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }, {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9-]+)?$/,
                loader: 'file?name=' + opts.font
            }, {
                test: /\.jade$/,
                loader: PathRewriterPlugin.rewriteAndEmit({
                    name: '[name].html',
                    loader: 'jade-html?' + JSON.stringify({
                        pretty: true,
                        git: ver,
                        rev: (new Date()).getTime()
                    })
                })
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)(\?[a-z0-9-]+)?$/,
                loader: 'file?name=' + opts.img
            }
        ]
    },
    postcss: function () {
        return [
            postcssPartialImport({
                extension: 'scss',
                addDependencyTo: webpack
            }),
            precss,
            autoprefixer({
                browsers: ['> 5%']
            })
        ];
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            __DEVELOPMENT__: JSON.stringify(JSON.parse(__DEVELOPMENT__))
        }),
        // 分離第三方套件與專案內部程式碼，生成vender
        new webpack.optimize.CommonsChunkPlugin('vendor', opts.vendor),
        // 將CSS抽出(原為行內樣式)
        new ExtractTextPlugin(opts.css, {allChunks: true}),
        // 將jade輸出html
        new PathRewriterPlugin({emitStats: false})
    ]
};

module.exports = config;
