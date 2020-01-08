const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [{
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|jpg|png|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};