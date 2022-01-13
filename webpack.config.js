const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production', // production压缩代码 development不压缩代码
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, "dist/lib"),
        library: 'CyberUiReact',
        libraryTarget: 'umd'
    },
    resolve: {
        // 自动解析确定的扩展。默认值为：['.wasm', '.mjs', '.js', '.json']
        extensions:['.js','.jsx','.ts','.tsx']
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
    externals: {
        // 外部扩展 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDom'
        }
    }
}
