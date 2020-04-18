const path = require('path');

module.exports = {
  entry: './src/js.js',
  output: {
    filename: 'bundle.js',//输出文件
    path: path.resolve(__dirname, 'dist'),//输出文件地址
  },
  devtool: 'eval-source-map',//用于让代码报错的时候，能指向原始错误文件
  devServer: {
     hot: true,
     contentBase: './dist',
   },
  module: {//添加新的规则的时候，如果loader解析有问题，可以试试用npm webpack重新打包（来自url-loader的坑）
     rules: [//规则添加
       {//添加对于css样式文件的识别和解析
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
       ,
       {//添加对于less样式文件的识别和解析
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        }

        ,
        {
          test: /\.(png|jpg)$/,
          use: { loader: 'url-loader', options: { limit: 10000000 } },
        }
        
        ,
        {
          test: /worker\.js$/,
          use: { loader: 'worker-loader'}
        }
        
     ]
   }
};