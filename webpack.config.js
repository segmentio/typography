
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './index.css',

  // dead output
  output: { filename: '/dev/null' },
  // actual output
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?sourceMap&importLoaders=1'
        )
      },
      {
        test: /\.woff(2)?$/,
        loader: 'url-loader?&minetype=application/font-woff'
      }
    ]
  }
};
