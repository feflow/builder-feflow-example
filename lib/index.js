'use strict';

const webpack = require('webpack');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');

module.exports = (cmd) => {
  if (cmd === 'dev') {
    webpack(devConfig, (err, stats) => {
        console.log(stats.toString({
          chunks: false,
          colors: true,
          children: false
        }));
      });
  } else if (cmd === 'build') {
    webpack(prodConfig, (err, stats) => {
      console.log(stats.toString({
        chunks: false,
        colors: true,
        children: false
      }));
    });
  }
}
