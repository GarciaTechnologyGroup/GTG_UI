const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    modules: [
      'main',
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      layouts: path.resolve(__dirname, 'src/layouts'),
    },
  },
  devtool: 'eval-source-map',
  entry: [
    './webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), './index.js'),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'main/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // tells React to build in either dev or prod mode. https://facebook.github.io/react/downloads.html
      __DEV__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true,
      options: {
        lessLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'less')],
        },
        context: '/',
      },
    }),
  ],
  module: {
    rules: [
      { test: /\.jsx?$/,
        exclude: /(node_modules|app)/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'es2015',
            'stage-2',
            'react-hmre',
          ],
        },
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'less-loader',
        ],
      },
    ],
  },
};
