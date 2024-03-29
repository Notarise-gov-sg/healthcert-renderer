/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PolyfillWebpackPlugin = require("node-polyfill-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const IS_DEV = process.env.NODE_ENV === "development";
const IS_PROD = !IS_DEV;

module.exports = {
  entry: {
    app: ["./src/index.tsx"],
  },
  context: path.resolve(__dirname),
  mode: IS_DEV ? "development" : "production",
  target: "web",
  output: {
    path: path.resolve(__dirname, "out"),
    filename: "[name].[hash:7].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: "file-loader",
      },
      {
        test: /\.txt$/i,
        use: "raw-loader",
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: `${__dirname}/static/index.html`,
    }),
    new PolyfillWebpackPlugin(),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /\/node_modules\//,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },

  // Using cheap-eval-source-map for build times
  // switch to inline-source-map if detailed debugging needed
  devtool: IS_PROD ? false : "cheap-eval-source-map",

  devServer: {
    compress: true,
    allowedHosts: "all",
    historyApiFallback: true,
    hot: true,
    port: 3000,
    client: {
      progress: true,
    },
  },
  stats: "normal",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  bail: true,
};
