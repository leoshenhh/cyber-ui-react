const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, "dist/lib"),
        library: 'CyberUiReact',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                //  \. 表示一个实际的. ?表示x是可有可无的 $表示结尾  即匹配到所有以.tsx或.ts 结尾的文件
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "CyberUI",
        template: 'index.html'
    })],
}
