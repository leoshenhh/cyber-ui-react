const path = require('path')
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, "dist/lib"),
        library: 'CyberUiReact',
        libraryTarget: 'umd'
    },
    resolve: {
        // 解析哪些扩展名结尾的文件。默认值为：['.wasm', '.mjs', '.js', '.json']
        extensions:['.js','.jsx','.ts','.tsx']
    },
    module: {
        rules: [
            {
                //  \. 表示一个实际的. ?表示x是可有可无的 $表示结尾  即匹配到所有以.tsx或.ts 结尾的文件
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 将 JS 字符串生成为 style 节点
                    "css-loader", // 将 CSS 转化成 CommonJS 模块
                    "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
                ]
            }

        ]
    }
}
