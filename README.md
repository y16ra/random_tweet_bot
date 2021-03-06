# Random tweet bot
ブログの記事をランダムに選んでツイートできます。
対象の記事はサイトマップXMLから取得してきます。

This App has a function that tweet your blog post's URL and Title.
It will be extracted at random from your blog post.

## インストール - Installation
このアプリの動作にはnode.js, npmを利用します。
必要なモジュールをインストールするには以下を実行してください。

Required : node.js, npm

```
$ npm install
```

## 設定 - Getting Started Guide

### Twitter接続情報
以下のページでアプリ登録をして必要なキーを取得してください。
書き込みができる権限が必要です。

https://apps.twitter.com

config/default.json に値を記載するか、環境変数で設定することが可能です。

- default.jsonを利用
```
  "twitter": {
    "CONSUMER_KEY":        "CHANGE_YUOUR_CONSUMER_KEY",
    "CONSUMER_SECRET":     "CHANGE_YUOUR_CONSUMER_SECRET",
    "ACCESS_TOKEN":        "CHANGE_YUOUR_ACCESS_TOKEN",
    "ACCESS_TOKEN_SECRET": "CHANGE_YUOUR_ACCESS_TOKEN_SECRET"
  }
```

- 環境変数を利用
以下のキーで登録してください。
```
TW_CONSUMER_KEY
TW_CONSUMER_SECRET
TW_ACCESS_TOKEN
TW_ACCESS_TOKEN_SECRET
```

### 記事取得先情報
記事を取得するブログのサイトマップxmlが置かれているURLを設定してください。
こちらも、config/default.json に値を記載するか、環境変数で設定することが可能です。
- default.jsonを利用
```
  "sitemap": {
    "url": "CHANGE_YOUR_URL"
  }
```

- 環境変数を利用
以下のキーで登録してください。
```
SITEMAP_URL
```

## 使い方 - How to USE
binの下にあるindex.jsを実行するとランダムに抽出したURLと記事のタイトルをつぶやきます。

```
$ node bin/index.js
```

- 例
このアプリを利用してつぶやいた例

https://twitter.com/monasan2002/status/591518641230745600

## ライセンス - LICENSE
The module is licensed under [MIT](./MIT-LICENSE.txt). 
