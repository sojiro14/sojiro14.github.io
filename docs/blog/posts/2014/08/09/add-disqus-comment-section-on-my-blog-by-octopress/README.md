---
layout: Layout
title: "OctopressにDISQUSのコメント欄を導入する"
date: 2014-08-09
comments: true
categories: [Octopress, Disqus]
---
## ブログにコメント欄を追加したい
本ブログにコメント欄を追加しようと思い立った。

[DISQUS](https://disqus.com/)というコミュニケーションサービスが好評のようなので導入してみる。

* DISQUSを使うための準備
* OctopressでのDISQUS導入方法

## DISQUSを使うための準備
### DISQUSのアカウントを作成する
[DISQUS](https://disqus.com/)のWebサイトからアカウントを作成。登録に必要なのはメールアドレスのみ。

### 自分のWebサイトをDISQUSに登録する
DISQUSの[サイト登録ページ](https://disqus.com/admin/create/)から自分のサイトを登録する

登録が完了すると設定ページが表示されるので、ここで設定をしつつ、ページ中段に表示されている```Shortname```の文字列を確認する

## OctopressでのDISQUS導入方法
### configファイルへの記載
OctopressでのDISQUS導入はconfigファイルに先ほどDISQUSで取得したShortnameを記載するのみで完了する。

 ```_config.yml``` の```disqus_short_name```に自分のサイトのShortnameを指定する。

``` yml _config.yml
# Disqus Comments
disqus_short_name: yoursitesshortname
disqus_show_comment_count: false
```

これでブログの各ページの下部にDISQUSのコメント欄が表示されるようになる。

### disqus_show_comment_count

```disqus_show_comment_count``` はDISQUSコメント欄を導入するページのヘッダにコメント欄へのリンクを表示させるかどうかを指定する項目。

#### trueのとき
{% img /images/disqus/header_with_comment_link.png %}

#### falseのとき
{% img /images/disqus/header_without_comment_link.png %}
