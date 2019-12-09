const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.ts'),
  externals: [nodeExternals()],
  mode: 'production',
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node'
};
