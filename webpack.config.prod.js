const base = require('./webpack.config')
module.exports = Object.assign({},base,{
    mode: 'production', // production压缩代码 development不压缩代码
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
})
