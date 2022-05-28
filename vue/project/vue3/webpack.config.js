//导入node中的函数
const path = require('path');
module.exports = {
    //生产环境默认使用压缩
    mode: 'development',
    //指定入口文件路径
    entry: path.join(__dirname, './src/index.js'),
    //指定出口文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    }
}