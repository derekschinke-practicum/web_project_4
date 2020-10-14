const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src') + '/pages/index/index.js',
  output: {
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader?name=./images/[contenthash].[ext]',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'file-loader?name=./vendor/[contenthash].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin(),
  ],
};
