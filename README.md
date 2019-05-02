# 初期設定

1. npm install
2. npx webpack
3. index.htmlを開く

## フォルダ構成

```
root/
　├ node_modules/
　├ public/
　│　├ js/ # webpackでバンドルされたjsファイルがここに入る html側からはここのファイルを指定する
　│　└ index.html
　├ src/
　│　└ local/
　│　　　├ css/ # cssファイルを記載
　│　　　└ js/ # ここにjavascriptファイルを配置
　├ package.json　 
　└ webpack.config.js
```