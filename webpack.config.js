const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
    // './src/no-react.js'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'hlj-img-url-loader',
        {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      ]
    }]
  },

  resolveLoader: {
    // 这里用到的babel-loader在node_modules里面
    modules: [path.join(__dirname, './src/loaders'), 'node_modules']
  }
};
