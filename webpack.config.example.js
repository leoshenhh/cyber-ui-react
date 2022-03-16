const base = require('./webpack.config')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = Object.assign({},base,{
    mode: 'production', // production压缩代码 development不压缩代码
    entry: {
        example: './example.tsx'
    },
    output: {
        path: path.resolve(__dirname, "/docs"),
    },
    plugins: [new HtmlWebpackPlugin({
        title: "CyberUI",
        template: 'example.html',
        filename: "example.html"
    })]
})
