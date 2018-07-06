const path = require('path')

module.exports = {
  name: 'dev',
  extends: path.join(__dirname, 'base.config.js'),
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
  },
}
