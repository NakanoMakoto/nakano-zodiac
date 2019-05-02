// npx webpackだけだとpathが通らないと言われるので、グローバルに宣言
var path = require('path');

module.exports = {
    mode: "development",
    // ここで読み込むファイル名を指定する
    entry: "./src/js/zodiac.js",
    // 出力先を指定する
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public/js')
    },
    module: {
      rules: [
        {
          // 対象となるファイルの拡張子(cssのみ)
          test: /\.css$/,
          // Sassファイルの読み込みとコンパイル
          use: [
            // スタイルシートをJSからlinkタグに展開する機能
            "style-loader",
            // CSSをバンドルするための機能
            "css-loader"
          ]
        }
      ]
    }
  };