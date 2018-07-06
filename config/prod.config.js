const path = require('path')

module.exports = {
  name: 'prod',
  extends: path.join(__dirname, 'base.config.js'),
  mode: 'production',
  devtool: 'source-map',
  stats: 'normal',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}
