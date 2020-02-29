const path = require('path');

module.exports = {
  entry: './src/js.js',//入口文件
  output: {
    filename: 'bundle.js',//输出文件
    path: path.resolve(__dirname, 'dist')//输出文件地址
  },
  devtool: 'inline-source-map',//用于让代码报错的时候，能指向原始错误文件
  devServer: {
     contentBase: './dist'
   },
  module: {//添加对于css样式文件的识别和解析
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   }
};