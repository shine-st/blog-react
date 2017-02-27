const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        // path: `${__dirname}/dist`,
        // path: `src`,
        path: `${__dirname}/src`,
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$\\.js$/,
                loader: 'eslint-loader',
                include: `${__dirname}/src`,
                exclude: /bundle\.js$/,
            },
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: [HTMLWebpackPluginConfig],
    externals: {
        'Config': JSON.stringify(require('./config.json'))
    },
};
