const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        },
        'my-loader'
      ]
    }]
  },

  resolveLoader: {
    // 这里用到的babel-loader在node_modules里面
    modules: [path.join(__dirname, './src/loaders'), 'node_modules']
  }
};
