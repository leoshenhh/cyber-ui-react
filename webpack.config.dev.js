const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({},base,{
    mode: 'development', // production压缩代码 development不压缩代码
    entry: {
      example: './example.tsx'
    },
    plugins: [new HtmlWebpackPlugin({
        title: "CyberUI"
    })]
})
