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
    }
}
