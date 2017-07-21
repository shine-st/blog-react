const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');


// path.resolve will always result in an absolute URL

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve('public', 'index.html'),
    filename: 'index.html',
    inject: 'body',
});


module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: path.resolve("public"),
        publicPath: "/",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ]
    },
    devServer: {
        inline: true,
        port: 8008,
        // historyApiFallback:{
        //     index:'/src/index.html'
        // },
    },
    plugins: [HTMLWebpackPluginConfig],
    externals: {
        'Config': JSON.stringify(require('./config.json'))
    },
};
