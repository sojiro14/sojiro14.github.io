---
layout: Layout
title: "Ruby on Railsで初めてアプリを作ってみる #4 -リソースの生成-"
slug: making-first-app-with-rails-number-4-creating-resources
date: 2014-11-27
comments: true
categories: [Ruby on Rails]
---
[Ruby on Railsで初めてアプリを作ってみる #3 -scaffoldジェネレータ-](http://sojiro14.github.io/blog/2014/11/16/making-first-app-with-rails-number-3-scaffold-generator/) で ```scaffold``` コマンドを使ったリソースの生成を行ったが、このコマンドでは決められた形式でのリソースの生成にしか対応できないため、手動で自由にリソースを作成してみる。

## rails generate model
まずはモデルを作成する。railsの規約に従って、モデルは単数系、最初の文字を大文字で始める。

``` bash
$ rails generate model Stock title:string
```

このコマンドで ```generate``` は ```g``` と省略できる。また、要素の属性はデフォルトが ```string``` なので、 ```string``` も省略することができる。

省略したコマンドが以下。

``` bash
$ rails g model Stock title
```

このコマンドでmodelに加えてmigrateファイルが生成されるのでDBをmigrateする。

``` bash
$ bundle exec rake db:migrate
```

<!-- more -->

## rails db
作成したmodelを確認するため、現在使用しているDBのクライアントを立ち上げてみる。

``` bash
$ rails db
sqlite> .schema
CREATE TABLE "schema_migrations" ("version" varchar(255) NOT NULL);
CREATE UNIQUE INDEX "unique_schema_migrations" ON "schema_migrations" ("version");
CREATE TABLE "users" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(255), "email" varchar(255), "created_at" datetime, "updated_at" datetime);
CREATE TABLE "microposts" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "content" varchar(255), "user_id" integer, "created_at" datetime, "updated_at" datetime);
CREATE TABLE "stocks" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(255), "created_at" datetime, "updated_at" datetime);
```

sqliteのクライアントが立ち上がったら ```.schema``` コマンドでこれまで作成されてきたテーブルが確認できる。
 ```id``` や ```created_at``` 、 ```updated_at``` はrailsが自動で生成する

ちなみにsqliteクライアントから抜けるには ```.exit``` とする。 ```.``` が付くことに注意。

## rails console
railsが用意しているconsoleを立ち上げてリソースを追加したり、確認したりすることもできる。

Stockオブジェクトを生成して保存する

``` bash
$ rails console
2.0.0-p594 :001 > s = Stock.new(title: "stock1")
=> #<Stock id: nil, title: "stock1", created_at: nil, updated_at: nil> 
2.0.0-p594 :002 > s.save
  (0.1ms)  begin transaction
 SQL (2.1ms)  INSERT INTO "stocks" ("created_at", "title", "updated_at") VALUES (?, ?, ?)  [["created_at", Sat, 15 Nov 2014 15:02:39 UTC +00:00], ["title", "stock1"], ["updated_at", Sat, 15 Nov 2014 15:02:39 UTC +00:00]]
  (4.9ms)  commit transaction
=> true 
```
作られたオブジェクトを確認
``` bash
2.0.0-p594 :003 > s
=> #<Stock id: 1, title: "stock1", created_at: "2014-11-15 15:02:39", updated_at: "2014-11-15 15:02:39"> 
```
 ```new``` と ```save``` を一括で行ってくれるコマンドが ```create```
``` bash
2.0.0-p594 :004 > Stock.create(title: "stock2")
  (0.1ms)  begin transaction
 SQL (0.3ms)  INSERT INTO "stocks" ("created_at", "title", "updated_at") VALUES (?, ?, ?)  [["created_at", Sat, 15 Nov 2014 15:03:44 UTC +00:00], ["title", "stock2"], ["updated_at", Sat, 15 Nov 2014 15:03:44 UTC +00:00]]
  (5.8ms)  commit transaction
=> #<Stock id: 2, title: "stock2", created_at: "2014-11-15 15:03:44", updated_at: "2014-11-15 15:03:44"> 
```
作られたオブジェクト全てを確認
``` bash
2.0.0-p594 :005 > Stock.all
 Stock Load (0.2ms)  SELECT "stocks".* FROM "stocks"
=> #<ActiveRecord::Relation [#<Stock id: 1, title: "stock1", created_at: "2014-11-15 15:02:39", updated_at: "2014-11-15 15:02:39">, #<Stock id: 2, title: "stock2", created_at: "2014-11-15 15:03:44", updated_at: "2014-11-15 15:03:44">]> 
2.0.0-p594 :006 > quit
```

## 最後にもう一度 ```rails db``` で直接確認する

``` bash
[sojiro@ip-172-31-2-112 demo_app]$ rails db
SQLite version 3.7.17 2013-05-20 00:56:22
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite> select * from stocks;
1|stock1|2014-11-15 15:02:39.781183|2014-11-15 15:02:39.781183
2|stock2|2014-11-15 15:03:44.294543|2014-11-15 15:03:44.294543
```

## 参照
[ドットインストール](http://dotinstall.com/lessons/basic_rails_v2)
