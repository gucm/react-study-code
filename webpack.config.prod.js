const base = require('./webpack.config.js')
module.exports = Object.assign({},base,{
    mode: 'production', // 模式
    externals: { // 告诉webpack这是外部的库 不是内部的库
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDom'
        },
    }

})