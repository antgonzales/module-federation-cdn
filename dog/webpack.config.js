const path = require("path");
const { camelCase } = require("camel-case");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const pkg = require("./package.json");

const baseConfig = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

const name = camelCase(pkg.name);

// The modules you want to expose
const exposes = {
  './Dogme': './src/Dogme.jsx'
};

const deps = require("./package.json").dependencies;
const shared = {
  ...deps,
  react: {
    singleton: true,
    requiredVersion: deps.react,
  },
};

const browserConfig = {
  output: {
    path: path.resolve("./dist"),
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name,
      filename: "remote-entry.js",
      exposes,
      shared,
    }),
  ],
};


module.exports = [
  merge(baseConfig, browserConfig),
];
