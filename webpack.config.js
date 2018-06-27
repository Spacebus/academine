const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    devServer: {
        contentBase: "./docs"
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "docs/scripts")
    }
}