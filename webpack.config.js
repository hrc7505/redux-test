const path = require("path");
const env = process.env.NODE_ENV

module.exports = {
    entry: "./client/index.tsx",
    output: {
        path: path.resolve("dist"),
        publicPath: "/dist/",
        filename: "centerpointSource.js"
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
    plugins: [],
    devServer: {
        compress: true,
        disableHostCheck: true,
        historyApiFallback: true
    },
    mode: env || "development"
}