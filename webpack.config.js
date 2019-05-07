const path = require('path');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const __uiRoot = path.resolve(__dirname, './app');

const isProduction = process.env.NODE_ENV === 'production';

const webpackConfig = {
  entry: {
    app: [
      `${__uiRoot}/index.entry.js`
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },

  mode: isProduction ? 'production' : 'development',

  devtool: !isProduction ? 'sourcemap' : false,

  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [ 'node_modules', 'app' ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.pcss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, 'svg-transform-loader/encode-query', 'postcss-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'static/[name].[hash].[ext]',
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg(\?.*)?$/,
        use: [
          'url-loader',
          'svg-transform-loader'
        ],
      },
      {
        test: /\.json$/,
        loader: 'file-loader',
        options: {
          name: 'static/[name].[hash].[ext]',
        },
      },
    ]
  },
  stats: 'errors-only',
  plugins: [

    new CopyWebpackPlugin([ {
      from: path.resolve(__dirname, './app/static'),
      to: path.resolve(__dirname, './build/static')
    }]),
    new Webpack.DefinePlugin({
      __DEV__: !isProduction,
      __PROD__: isProduction
    }),

    new HtmlWebpackPlugin({
      title: 'Main app',
      template: './app/pages/index.html',
    }),

    new HtmlWebpackPlugin({
      title: 'Main app',
      template: './app/pages/landing.html',
      filename: 'landing.html',
    }),

    new HtmlWebpackPlugin({
      title: 'Layout docs',
      template: './app/pages/layout-docs.html',
      filename: 'layout-docs.html',
    }),

  ],

  devServer: {
    disableHostCheck: true
  }
};

module.exports = webpackConfig;


