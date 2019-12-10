const base = require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({},base,{
    mode: 'development', // 模式
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ],
})