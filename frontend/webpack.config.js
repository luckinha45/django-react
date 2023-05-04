const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "./static/frontend"),
        filename: "[name].js",
        chunkFilename: '[name].bundle.js',
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: { static: path.join(__dirname, "src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                exclude: /node_modules/,
                use: ["file-loader"],
            },
        ],
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "templates/frontend", "index.html"),
        }),
    ],
    // plugins: [
    //     new webpack.DefinePlugin({
    //         "process.env": {
    //             NODE_ENV: JSON.stringify("production")
    //         }
    //     })
    // ]
};