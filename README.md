# random tweet

# 設定

## Twitter接続情報
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

## 記事取得先情報
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

# 使い方
binの下にあるindex.jsを実行するとランダムに抽出したURLと記事のタイトルをつぶやきます。

```
$ node bin/index.js
```
