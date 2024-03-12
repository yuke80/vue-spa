# Zenplace SPA

> Zenplace SPA web application built with [Nuxt.js](https://nuxtjs.org) ([日本語](https://ja.nuxtjs.org)).


## ポートフォリオとして、static、images、node_modules、.gitファイルを削除し、githubにアップしています。


## 開発環境設置 / How To Setup Development Environment

1. Node.js のバージョン v16.14.2 以上 (LTS) が必要です。ダウンロードは[こちら](https://nodejs.org/en/)。または homebrewを使っている場合 `brew install node` でもインストールできます
2. おすすめの開発ツールは Visual Studio Code (VSCode) です。設定する方法は[こちら](docs/vscode.md)
3. その他関連資料
  - /システム部/チーム/エンジニア/開発ルール/保守/保守対象システム一覧/SPA(Node.js)/node.jsアップデート対応メモ
    https://wiki.zen-jp.info:8443/622739812534c1005075c641

その他のドキュメンテーションは [docsフォルダー](docs/) にあります。

npm run dev実行時、eslintによる構文エラーが発生することがある。
その際はnpm run lintでeslintによる自動ソースコード整形が行われる。
(残ったwarning等は手動で解決する必要あり)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
API_BASE_URL="https://api.zen-jp.info/zenplace/v1/" npm run dev

# build for production and launch server
npm run build
npm run start

# generate static project
npm run generate

# start code formatting
npm run lint

```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

/システム部/チーム/エンジニア/開発ルール/保守/保守対象システム一覧/SPA(Node.js)/node.jsアップデート対応メモ
https://wiki.zen-jp.info:8443/622739812534c1005075c641