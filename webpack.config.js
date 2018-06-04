const path = require("path");
const env = process.env.NODE_ENV;
var HtmlWebpackPlugin = require("html-webpack-plugin");
var package = require("./package.json");

module.exports = {
    entry: {
        chrome: "./client/index.tsx",
        content: "./client/contentIndex.tsx"
    },
    output: {
        path: path.resolve("dist"),
        filename: "[name].js"
    },
    devtool: "source-map",
    resolve: {
        //Add ".ts" and ".tsx" as resolvable extenstions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts|.tsx$/, loader: "awesome-typescript-loader" },
            {
                test: /\.css|scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: { url: false }
                    },
                    {
                        loader: "sass-loader",
                        options: { url: false }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "index.html",
            chunks: ["chrome", "content"],
            filename: "index.html" //relative to root of the application
        })
    ],
    devServer: {
        compress: true,
        disableHostCheck: true,
        historyApiFallback: true
    },
    mode: env || "development"
}