---
layout: post
title: "初めてのMongoDB"
date: 2015-01-02 02:20:55 +0900
comments: true
categories: [MongoDB]
---
NoSQLの流れを汲むMongoDBを初めて使ってみるにあたり、基本的な操作をまとめてみる。

# 基本的な用語
* データベース(database)
* コレクション(collection)
* ドキュメント(document)

## データベース
MySQLなどのRDBMSにおけるデータベース、という言葉とほぼ同じ意味として使われる。
データ管理の大元となる単位。
## コレクション
RDBMSにおけるテーブル(table)に相当するもの。
MongoDBはスキーマレスなので、テーブルのように厳格なスキーマが決まっている訳ではなく、特定の対象に対するデータの集まり(正にコレクション)と言える。
## ドキュメント
RDBMSにおけるレコード(record)に相当するもの。
各コレクションを構成する要素であり、BSONと呼ばれるJSONライクな形式で記述される。

<!-- more -->

## MongoDBの起動
MongoDBの起動、停止には ```service mongod``` コマンドを使う

``` bash
$ sudo service mongod status
mongod is stopped
$ sudo service mongod start
Starting mongod:                                           [  OK  ]
$ sudo service mongod status
mongod (pid xxxx) is running...
```
停止させる時には以下のようにする

``` bash
$ sudo service mongod stop
Stopping mongod:                                           [  OK  ]
$ sudo service mongod status
mongod is stopped
```

## DBの作成と選択
MongoDBを起動したら、早速コンソールを立ち上げて操作してみる。

``` bash
$ mongo testdb
MongoDB shell version: 2.6.6
connecting to: testdb
>
```
 ```mongo``` の後にDB名を指定してコンソールに入る。
このとき、存在しないDB名を指定すると新規でDBが作られる。

``` bash
> show dbs;
admin   (empty)
local   0.078GB
mydb    0.078GB
testdb  (empty)
```
上記コマンドで既存のDBを確認することができる。 ```testdb``` は新規で作成された。

使用するDBを変更するときは以下のようにする。今回は既に作ってある ```mydb``` を使うことにする。

``` bash
> use mydb
switched to db mydb
```
これで ```mydb``` に操作対象が移った

# コレクションの操作
## コレクションの確認
まず対象DBに存在するコレクションを確認してみる

``` bash
> show collections;
system.indexes
users
```
いま ```system.indexes``` と ```users``` というコレクションが存在することがわかる。

 ```system.indexes``` は各DBのインデックス情報を管理するコレクションで、各DBにそれぞれ1つ作成されるもの

## コレクションの作成
次に新たにコレクションを作成してみる

``` bash
> db.createCollection('items');
{ "ok" : 1 }
> show collections;
items
system.indexes
users
```
 ```items``` という新たなコレクションが作成された

## コレクションの名前の変更
 ```items``` コレクションの名前を ```weapons``` に変更する

``` bash
> db.items.renameCollection('weapons');
{ "ok" : 1 }
> show collections;
system.indexes
users
weapons
```
コレクションの名前が変わったことが確認できる

## コレクションの削除
 ```weapons``` コレクションを削除する

``` bash
> db.weapons.drop();
true
> show collections;
system.indexes
users
```
 ```weapons``` コレクションが削除された

# ドキュメントの操作
## ドキュメントの検索(find)
コレクションの操作の次はドキュメントの操作について見ていく。
ドキュメントの検索には ```find``` メソッドを使う

``` bash
> db.users.find();
{ "_id" : ObjectId("54a3fd93ce8a5464641af4eb"), "name" : "sojiro", "score" : 10 }
{ "_id" : ObjectId("54a3fee1ce8a5464641af4ec"), "name" : "sojiro_1", "score" : 20 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ed"), "name" : "sojiro_2", "score" : 67 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ee"), "name" : "sojiro_3", "score" : 51 }
```
対象のコレクションを指定して ```find``` を引数無しで実行すると全件検索となる

## 条件を指定して検索
 ```{key:value}``` を指定して検索も可能

``` bash
> db.users.find({name:"sojiro"});
{ "_id" : ObjectId("54a3fd93ce8a5464641af4eb"), "name" : "sojiro", "score" : 10 }
```
 ```{key:value}``` の指定には正規表現を用いることもできる

``` bash
> db.users.find({name:/sojiro_[12]/});
{ "_id" : ObjectId("54a3fee1ce8a5464641af4ec"), "name" : "sojiro_1", "score" : 20 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ed"), "name" : "sojiro_2", "score" : 67 }
```

## ANDとOR
検索で複数の条件を組み合わせるには ```$and``` や ```$or``` を使う

``` bash
> db.users.find({
    $and: [
        {name:/sojiro_[12]/},
        {score: {$lt: 60}},
    ]
});
{ "_id" : ObjectId("54a3fee1ce8a5464641af4ec"), "name" : "sojiro_1", "score" : 20 }
```
ここで ```$lt``` は「〜より小さい」を表す演算子

``` bash
> db.users.find({
    $or: [
        {name:/sojiro_[12]/},
        {score: {$gt: 50}},
    ]
});
{ "_id" : ObjectId("54a3fee1ce8a5464641af4ec"), "name" : "sojiro_1", "score" : 20 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ed"), "name" : "sojiro_2", "score" : 67 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ee"), "name" : "sojiro_3", "score" : 51 }
```
ここで ```$gt``` は「〜より大きい」を表す演算子

## 検索結果の限定
検索結果に特定のkeyだけを指定したい場合や、 ```_id``` を非表示にしたい場合がある

``` bash
> db.users.find({}, {name:1});
{ "_id" : ObjectId("54a3fd93ce8a5464641af4eb"), "name" : "sojiro" }
{ "_id" : ObjectId("54a3fee1ce8a5464641af4ec"), "name" : "sojiro_1" }
{ "_id" : ObjectId("54a40181ce8a5464641af4ed"), "name" : "sojiro_2" }
{ "_id" : ObjectId("54a40181ce8a5464641af4ee"), "name" : "sojiro_3" }
> db.users.find({}, {name:0});
{ "_id" : ObjectId("54a3fd93ce8a5464641af4eb"), "score" : 10 }
{ "_id" : ObjectId("54a3fee1ce8a5464641af4ec"), "score" : 20 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ed"), "score" : 67 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ee"), "score" : 51 }
```
 ```find()``` の第二引数にkeyの表示、非表示を設定することができる

``` bash
> db.users.find({}, {name:1, score:1});
```
のように複数のkeyに対して表示非表示の設定ができるが、

``` bash
> db.users.find({}, {name:1, score:0});
error: {
	"$err" : "Can't canonicalize query: BadValue Projection cannot have a mix of inclusion and exclusion.",
	"code" : 17287
}
```
key毎に表示非表示を別々に設定しようとすると怒られる

ただし、 ```_id``` だけは例外である

``` bash
> db.users.find({}, {name:1, _id:0});
{ "name" : "sojiro" }
{ "name" : "sojiro_1" }
{ "name" : "sojiro_2" }
{ "name" : "sojiro_3" }
```

## ドキュメントの挿入(insert)
これまで見てきた ```users``` コレクションに新たなドキュメントを追加してみる

``` bash
> db.users.insert({name:"sojiro_4", score:40});
WriteResult({ "nInserted" : 1 })
> db.users.find({name:"sojiro_4"});
{ "_id" : ObjectId("54a777d7a49abc8e743c71ac"), "name" : "sojiro_4", "score" : 40 }
```
JavaScriptの使用も可能

``` bash
> db.users.insert({name:"sojiro_5", score: Math.floor(Math.random() * 100)});
WriteResult({ "nInserted" : 1 })
> db.users.find({name:"sojiro_5"});
{ "_id" : ObjectId("54a77886a49abc8e743c71ad"), "name" : "sojiro_5", "score" : 38 }
```

## ドキュメントの更新(update)
MongoDBのupdateには少し癖がある。

更新するドキュメントが属するコレクションと、対象ドキュメントの条件を指定するところは直感的だが、特定のkeyのみupdateする場合は ```$set``` を使う必要がある。

``` bash
> db.users.find({name:"sojiro_4"});
{ "_id" : ObjectId("54a777d7a49abc8e743c71ac"), "name" : "sojiro_4", "score" : 40 }
> db.users.update({name:"sojiro_4"}, {$set: {score:44}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.find({name:"sojiro_4"});
{ "_id" : ObjectId("54a777d7a49abc8e743c71ac"), "name" : "sojiro_4", "score" : 44 }
```
 ```$set``` を使わずにupdateを実行すると、対象ドキュメントの内容全てが書き変わる

``` bash
> db.users.find({name:"sojiro_4"});
{ "_id" : ObjectId("54a777d7a49abc8e743c71ac"), "name" : "sojiro_4", "score" : 44 }
> db.users.update({name:"sojiro_4"}, {score:100});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.find({name:"sojiro_4"});
```
 ```{name: "sojiro_4"}``` に該当するドキュメントが ```{score:100}``` に書き換えられたため、 ```{name:"sojiro_4"}``` では検索結果に出てこない

``` bash
> db.users.find();
{ "_id" : ObjectId("54a3fd93ce8a5464641af4eb"), "name" : "sojiro", "score" : 10 }
{ "_id" : ObjectId("54a3fee1ce8a5464641af4ec"), "name" : "sojiro_1", "score" : 20 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ed"), "name" : "sojiro_2", "score" : 67 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ee"), "name" : "sojiro_3", "score" : 51 }
{ "_id" : ObjectId("54a777d7a49abc8e743c71ac"), "score" : 100 }
{ "_id" : ObjectId("54a77886a49abc8e743c71ad"), "name" : "sojiro_5", "score" : 38 }
```

## ドキュメントの削除(remove)

``` bash
> db.users.find();
{ "_id" : ObjectId("54a3fd93ce8a5464641af4eb"), "name" : "sojiro", "score" : 10 }
{ "_id" : ObjectId("54a3fee1ce8a5464641af4ec"), "name" : "sojiro_1", "score" : 20 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ed"), "name" : "sojiro_2", "score" : 67 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ee"), "name" : "sojiro_3", "score" : 51 }
{ "_id" : ObjectId("54a777d7a49abc8e743c71ac"), "score" : 100 }
{ "_id" : ObjectId("54a77886a49abc8e743c71ad"), "name" : "sojiro_5", "score" : 38 }
```
ドキュメントの削除には ```remove``` メソッドを使い、このメソッドには ```find``` メソッドと同じように条件を指定することができる

``` bash
> db.users.remove({name:"sojiro_5"});
WriteResult({ "nRemoved" : 1 })
> db.users.find();
{ "_id" : ObjectId("54a3fd93ce8a5464641af4eb"), "name" : "sojiro", "score" : 10 }
{ "_id" : ObjectId("54a3fee1ce8a5464641af4ec"), "name" : "sojiro_1", "score" : 20 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ed"), "name" : "sojiro_2", "score" : 67 }
{ "_id" : ObjectId("54a40181ce8a5464641af4ee"), "name" : "sojiro_3", "score" : 51 }
{ "_id" : ObjectId("54a777d7a49abc8e743c71ac"), "score" : 100 }
```

以上MongoDBの基本的な操作

## 参照
[ドットインストール](http://dotinstall.com/lessons/basic_mongodb_v2)
