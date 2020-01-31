const base = require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = Object.assign({},base,{
    mode: 'production', // 模式
    entry: {// 整个程序的入口
        ...base.entry,
        example: './example.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'doc'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'gcmui',
            template: 'example.html',
            filename:'example.html'
        })
    ],

})