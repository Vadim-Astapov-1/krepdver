const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}
const production = mode === 'production';

module.exports = {
  mode,
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: production ? '[name].[contenthash].js' : '[name].js',
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true,
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
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
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf|ico)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.css'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin({
      filename: production ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
};
