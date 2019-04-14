const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app:'./src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录 path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
    filename:'[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(),//默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
  ],
}




