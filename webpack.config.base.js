const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    build: "./app/src/app.jsx"
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js",
    publicPath: "/",
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app/src")
        ],
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["es2015", "react"]
        }
      },
     /*  {
        test: /\.html$/, 
        use: [
          // apply multiple loaders and options
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
            }
          }
        ]
      }, */
    ]
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used
/* 
    alias: {
      // a list of module name aliases

      "module": "new-module",
      // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"

      "only-module$": "new-module",
      // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"

      "module": path.resolve(__dirname, "app/third/module.js"),
      // alias "module" -> "./app/third/module.js" and "module/file" results in error
      // modules aliases are imported relative to the current context
    }, */
    /* alternative alias syntax (click to show) */

    /* Advanced resolve configuration (click to show) */
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Electron-With-React',
      filename: 'index.html',
      template: './app/index.html'
    })
  ],
  // list of additional plugins


  /* Advanced configuration (click to show) */
}