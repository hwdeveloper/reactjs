const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: "./src/main.js",
    plugins: [
         new CleanWebpackPlugin(['public/js'])
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, "public"), // string
        filename: "js/all.js"
        },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }
            }
        ]
    },
    watch:true
}