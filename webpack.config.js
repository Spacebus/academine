const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    mode: "development",
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ "babel-loader" ]
            }
        ]
    },
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "./docs/js"),
        publicPath: "/js/"
    },
    devServer: {
        contentBase: "docs",
        historyApiFallback: true,
        openPage: "/lattes-mining/"
    }
}