const webpack = require('webpack');
const path = require('path');


const config = {
  entry: path.resolve(__dirname, 'scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

module.exports = config;