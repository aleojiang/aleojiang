const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const ROOT_PATH = path.dirname(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')
const DIST_PATH = path.resolve(ROOT_PATH, 'dist')

module.exports = {
  entry: [path.resolve(APP_PATH, 'app', 'app.js')],
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },
  devServer: {
    contentBase: "./src"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(APP_PATH, 'index.html'),
      filename: 'index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
};