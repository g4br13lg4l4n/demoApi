const path = require('path')
//var fs = require('fs');

module.exports = {
  entry: './src/app/main.js',
  output: {
    path: path.resolve(__dirname, 'src/public/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|sass)$/,
        use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            },
            {
                loader: "sass-loader",
                options: {
                    includePaths: ["node_modules"]
                }
            }
        ],
    },
    ]
  }
}