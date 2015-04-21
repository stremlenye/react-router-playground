/*eslint no-var:0*/
var path = require('path')
var webpack = require('webpack')

module.exports = {

  devtool: 'inline-source-map',

  debug: true,

  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'), // absolute path
    filename: 'bundle.js',
    publicPath: '/dist/',
    pathinfo: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // will stop assets compilation if there are errors
    new webpack.NoErrorsPlugin(),
    // will define free variables (e.g.: global constants, )
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
        JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],

  resolve: {
    root: path.join(__dirname, '/src'),
    // Allow to omit extensions when requiring these files
    extensions: [ '', '.js' ]
  },

  module: {
    loaders: [
                {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  loaders: [ 'react-hot', 'babel-loader' ]
                }
              ]
  }
}
