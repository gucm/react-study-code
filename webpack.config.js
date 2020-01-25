const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // mode: 'development', // 模式
    entry: {// 整个程序的入口
        index: './lib/index.tsx',
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx']
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
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.s([ac])ss$/,
                // use: [
                //     devMode ? 'style-loader' : {
                //         loader: MiniCssExtractPlugin.loader,
                //         options : {
                //             // publicPath: '../'
                //         }
                //     },
                //     'css-loader',
                //     {
                //         loader:'sass-loader',
                //         options: {
                //             includePaths: [path.resolve(__dirname,'stylesheets', 'include')]
                //         }
                //     }
                // ]
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: 'index.html',
    //     })
    // ],
    // externals: { // 告诉webpack这是外部的库 不是内部的库
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React',
    //     },
    //     'react-dom': {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'ReactDom'
    //     },
    // }

}
