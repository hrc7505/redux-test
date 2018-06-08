const path = require("path");
const env = process.env.NODE_ENV;
var HtmlWebpackPlugin = require("html-webpack-plugin");

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
        createChunksJs(["app"], "index.html"),
        createChunksJs(["chrome"], "./chrome/index.html"),
        createChunksJs(["dashboard"], "./dashboard/index.html"),
        createChunksJs(["sites"], "./test/sites/index.html")
    ],
    devServer: {
        compress: true,
        disableHostCheck: true,
        historyApiFallback: true
    },
    mode: env || "development"
}

function createChunksJs(chunks, filename, template = "index.html") {
    return new HtmlWebpackPlugin({ template, chunks, filename });
}