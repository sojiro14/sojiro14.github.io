---
layout: Layout
title: "Ruby on Railsで初めてアプリを作ってみる #3 -scaffoldジェネレータ-"
date: 2014-11-16 23:59:05 +0900
comments: true
categories: [Ruby on Rails]
---
railsには ```scaffold``` という単純なリソースを一気に生成するコマンドが存在する。
今回はこのコマンドを使ってみる。

## Usersリソースの生成
今回は ```scaffold``` コマンドを使ってリソースを生成する。
ここでは以下の要素をもつUsersリソースを生成する。

* id int
* name string
* email string

 ```rails generate``` スクリプトに ```scaffold``` コマンドを指定し、リソースの単数系と要素の情報を渡す
``` bash
$ rails generate scaffold User name:string email:string
```
id要素はRailsが主キーとしてデフォルトで設定する

## DBにusersのセットアップを行う
 ```rake``` コマンドを使ってDBをmigrate（更新）する。
``` bash
$ bundle exec rake db:migrate
== 20141111170736 CreateUsers: migrating ======================================
-- create_table(:users)
   -> 0.0012s
== 20141111170736 CreateUsers: migrated (0.0014s) =============================
```
出力から ```users``` テーブルが作られたことがわかる

## ブラウザで確認
 ```rails server``` コマンドの短縮版である ```rails s``` を使って3000番portにアプリを立ち上げる
``` bash
$ rails s
```

http://xx.xxx.xxx.xxx:3000

にブラウザでアクセスすると ```#1 railsのセットアップ``` で見たデフォルトのRailsページが表示される

次に以下のエンドポイントにアクセスしてみる

http://xx.xxx.xxx.xxx:3000/users

すると既にUser一覧ページができあがっているのがわかる。この他に

* 新規ユーザーを作成するページ
* 特定のidのユーザー情報を表示するページ
* 特定のidのユーザー情報を編集するページ

が作られている。

## Micropostsリソースの生成
Usersリソースと同様に ```scaffold``` コマンドと ```rake``` の ```migrate``` タスクで生成する
``` bash
$ rails generate scaffold Micropost content:string user_id:integer
$ bundle exec rake db:migrate
== 20141112174234 CreateMicroposts: migrating =================================
-- create_table(:microposts)
   -> 0.0029s
== 20141112174234 CreateMicroposts: migrated (0.0031s) ========================
```
 ```config/routes.rb``` にmicropostsリソースの設定が追加された

## 参照
[Ruby on Rails チュートリアル](http://railstutorial.jp)

