// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'production';
console.log('Running for: ', NODE_ENV);
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  __DEV__: false,
};

export default {
  resolve: {
    modules: [
      './main',
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: 'source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: [path.resolve(__dirname, 'index.js')],
  // target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  plugins: [

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),

    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: false,
      allChunks: true,
    }),

    // Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    new HtmlWebpackPlugin({
      filename: NODE_ENV === 'staging' ? '200.html' : 'index.html',
      template: 'index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      // Note that you can add custom options here if you need to handle other custom logic in index.html
      // To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
      trackJSToken: '',
    }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      // compress: {
      //   warnings: true,
      // },
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
            'stage-2',
          ],
          plugins: [
            'transform-react-constant-elements',
            'transform-react-remove-prop-types',
          ],
        },

      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?name=assets/icons/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/icons/[name].[ext]' },
      { test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=assets/icons/[name].[ext]' },
      { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=assets/icons/[name]-[hash].[ext]' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=assets/images/[name]-[hash].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract([
          'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!!',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  autoprefixer,
                ];
              },
            },
          },
          'less-loader',
        ]),
      },
    ],
  },
};
