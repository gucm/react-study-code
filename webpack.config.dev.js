const base = require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({},base,{
    mode: 'development', // 模式
    entry: {// 整个程序的入口
        example: './example.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html',
        })
    ],
})