module.exports = {
    entry: {
        app: './main.js', // 入口文件路径
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    devServer: {
        inline: true,
        port: 3003
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    }
}
