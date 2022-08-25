const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildDirectory = "dist";

const outputDirectory = buildDirectory + "/app";

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, outputDirectory),

    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
              },
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },

  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
