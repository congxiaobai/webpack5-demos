const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },

  module: {
    rules: [{
      test: /\.png$/,
      type: 'asset/resource',
      generator:{
        filename:'./images/[contenthash][ext]'
      }
    },
    {
      test: /\.css$/,
      use:['style-loader','css-loader']
    }],
  },
  plugins: [new htmlWebpackPlugin()],
};
