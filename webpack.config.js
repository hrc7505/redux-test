const path = require("path");
const env = process.env.NODE_ENV;
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const createChunksJs = (chunks, filename, template = "index.html") => (
    new HtmlWebpackPlugin({ template, chunks, filename })
);

module.exports = {
    entry: {
        app: "./client/index.tsx",
        chrome: "./client/chromeIndex.tsx",
        dashboard: "./client/dashboardIndex.tsx",
        sites: "./client/sitesIndex.tsx"
    },
    output: {
        path: path.resolve("dist"),
        filename: "[name].js"
    },
    devtool: "source-map",
    resolve: {
        //Add ".ts" and ".tsx" as resolvable extenstions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        plugins: [
            new TsConfigPathsPlugin()
        ],
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
        createChunksJs(["app"], "index.html"),
        createChunksJs(["chrome"], "./test/chrome/index.html"),
        createChunksJs(["dashboard"], "./test/dashboard/index.html"),
        createChunksJs(["sites"], "./test/sites/index.html")
    ],
    devServer: {
        compress: true,
        disableHostCheck: true,
        historyApiFallback: true
    },
    mode: env || "development"
}