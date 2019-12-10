const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production', // 模式
    entry: {// 整个程序的入口
        index: './lib/index.tsx',
    },
    output:{// 配置输出目录路径
        path: path.resolve(__dirname,'dist/lib'), // path 必须是绝对路径
        library: 'GCM', // 库名
        libraryTarget: 'umd', // 库的输出格式
    },
    module: {
        rules: [
            {// 对tsx ts 进行转义
                test: /\.tsx?$/, 
                loader: 'awesome-typescript-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}