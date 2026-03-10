const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // File đầu vào
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Dùng babel để xử lý file js
        },
      },
    ],
  },
};