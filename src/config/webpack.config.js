var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), // 维持构建编译代码
    new webpack.HotModuleReplacementPlugin(), // 热替换和dev-server的hot有什么区别？不用刷新页面，可用于生产环境
    new webpack.NoErrorsPlugin() // 保证编译后的代码永远是对的，因为不对的话会自动停掉
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}