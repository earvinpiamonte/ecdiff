/*
  Webpack configuration for transpiling Chrome scripts
*/
const path = require('path');
const mode = 'production';

process.env.NODE_ENV = mode;

module.exports = {
  mode,
  entry: {
    background: './src/chrome/background.tsx',
    content: './src/chrome/content.tsx',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build/'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.chrome.webpack.json',
              onlyCompileBundledFiles: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src/index.css'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
