const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return {
    entry: "./index.tsx",
    mode: "development",
    devtool: "inline-source-map",
    output: {
      path: path.resolve(__dirname, "../app/static/"),
      filename: "[name][hash].js",
      publicPath: "/",
    },
    target: "web",
    devServer: {
      port: "3000",
      historyApiFallback: true,
      static: { directory: path.join(__dirname, "public") },
      open: true,
      hot: true,
      liveReload: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".tsx", ".ts"],
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/styles": path.resolve(__dirname, "src/styles"),
        "@/utils": path.resolve(__dirname, "src/utils"),
        "@/consts": path.resolve(__dirname, "src/consts"),
        "@/pages": path.resolve(__dirname, "src/pages"),
        "@/hooks": path.resolve(__dirname, "src/hooks"),
        "@/context": path.resolve(__dirname, "src/context"),
        "@/firebase": path.resolve(__dirname, "src/firebase"),
        "@/Routes": path.resolve(__dirname, "src/Routes"),
      },
    },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "../app/views", "index.html"),
      }),
      new TsconfigPathsPlugin({
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      }),
      envKeys && new webpack.DefinePlugin(envKeys),
    ],
  };
};
