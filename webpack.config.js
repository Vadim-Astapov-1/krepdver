const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const CompressionPlugin = require('compression-webpack-plugin');

const paths = [
  '/',
  '/cart/',
  '/product/1/',
  '/product/2/',
  '/product/3/',
  '/product/4/',
  '/product/5/',
  '/product/6/',
  '/product/7/',
];

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}
const production = mode === 'production';

module.exports = {
  mode: production ? 'production' : 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: production ? '[name].[contenthash].js' : '[name].js',
    clean: true,
    publicPath: '/',
  },
  devtool: production ? 'source-map' : 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true,
    compress: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: production ? 'asset' : 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.css'],
  },
  optimization: {
    runtimeChunk: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: production ? '[name].[contenthash].css' : '[name].css',
    }),
    new CompressionPlugin({
      test: /\.(js|css)$/i,
      exclude: /node_modules/,
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.ids.HashedModuleIdsPlugin({
      hashFunction: 'md4',
      hashDigest: 'base64',
      hashDigestLength: 8,
    }),
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
    }),
    new RobotstxtPlugin({
      filePath: 'robots.txt',
    }),
    new SitemapPlugin({ base: 'https://крепдвер.рф', paths: paths }),
  ],
};
