const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'calculator-app.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'babel-loader' },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ],
  },
  devServer: {
    client: {
      overlay: { warnings: false },
    },
  },
};





