---
layout: Layout
title: "GAE Datastore について"
date: 2016-08-07
comments: true
categories: [GAE, Datastore]
---

GAE の Datastore についてざっくり

## Overview
* スキーマのないオブジェクトデータベース
* オートスケーリング
* ディスクへの書き込み時に自動で暗号化、読み出し時に自動で復号
* 計画的ダウンタイムなし

| Concept                   | Cloud Datastore | Relational database |
| ------------------------- | --------------- | ------------------- |
| オブジェクトが所属するカテゴリ | Kind            | Table               |
| オブジェクト                | Entity          | Row                 |
| オブジェクトがもつデータ      | Property        | Field               |
| オブジェクトを特定する ID     | Key             | Primary key         |

* 同一 kind の entity でも違う property を持ちうる
* それぞれの entity は同名の property でも型の違うデータを持ちうる

### Other storages
* 複数の table の join や 複数のカラムに対する不等号比較など、すべての SQL 操作が必要なら Google Cloud SQL
* ACID transaction を必要としないスキーマレスなデータを扱うなら Google Bigtable
* オンラインで分析されるデータを扱うなら Google BigQuery
* 画像や動画などの変更がない大きなデータを扱うなら Google Cloud Storage

## Entities
* ひとつの entity は1つ以上の property をもつ
* property は1つ以上の値を取りうる

## Keys
* key は entity を特定する
* key は以下を含む
    * entity の kind
    * 以下のいずれかの識別子
        * 文字列の key name
        * 数値の ID
    * ancestor path (optional)
* 識別子は entity が生成されたタイミングで設定される
* 一度設定された識別子は変更されない
* 識別子は以下の2つの方法で設定できる
    * アプリケーションで特定の key name を設定する
    * Datastore が自動で発行する数値の ID を使う

## Ancestor paths
* Datastore はファイルシステムのディレクトリ構成に似た階層構造をもつ
* entity 作成時に parent entity を指定することができる
* parent entity が指定されない entity は root entity と呼ぶ
* 一度親子関係ができた entity はその関係が変更されることはない
* 同じ parent をもつ2つの entity に対して Datastore は同一の ID を払い出すことはない
* 同様に2つの root entity に対して同一の ID を払い出すこともない
* parent や parent の更に parent を ancestor と呼ぶ
* 逆に children や children の更に children を descendant と呼ぶ
* root entity とその descendant は同一の entity group に属する
* ancestor path は root entity からたどって該当の entity に到達するまでの親子関係で構成される

## Transactions and entity groups
* entity に対する create, update, delete はトランザクションで管理される
* トランザクションにはこれらの複数の操作が内包される
* トランザクションは一貫性の担保のため、そこに含まれる操作をひとまとまりとして適用する、あるいはいずれかの操作が失敗するとすべての操作を適用しない
* commit を試みてエラーが返ってきたとしても、トランザクションが失敗したとは限らない
    * `DatastoreTimeoutException` や `DatastoreFailureException` といったエラーが返ってきたとしても、 commit は成功している可能性がある
    * このため、 Datastore は可能な限り同一のトランザクションを複数回適用しても最終的な結果が変わらないように設計すべきである
* entity group とトランザクションの関係
    * 1つのトランザクションで扱うデータは 25 の entity group 内に収まっていなければならない
    * トランザクション内でクエリを発行する場合には正しいデータにマッチする ancestor filter を指定できるように entity group 内のデータを設計する必要がある
    * 広域に渡って各 entity group をレプリケーションするために、1つの entity group ごとに1秒あたりの書き込みスループットの上限値が定められている

## Understanding write costs
* 発生する書き込み
    * entity 自身
    * `EntitiesByKind` という index
    * 1つの property value ごとに `EntitiesByProperty` と `EntitiesByPropertyDesc` の各 index

以下のような entity を考える

```
Key: 'Foo:1' (kind = 'Foo', id = 1, no parent)
A: 1, 2
B: null
C: 'this', 'that', 'theOther'
```

このとき発生する書き込み

* 1: entity 自身
* 1: `EntitiesByKind` index
* 4: A property の2つの値にそれぞれ2つの index
* 2: B property の値に2つの index （null でも必要）
* 6: C property の3つの値にそれぞれ2つの index

よって発生する書き込みの合計は 1 + 1 + 4 + 2 + 6 = 14

上記の entity に複合 index を追加することを考える

```
Kind: 'Foo'
A ▲, B ▼, C ▼
```

このとき、各 property の値の組み合わせ分の書き込みが発生する

```
(1, null, 'this') (1, null, 'that') (1, null, 'theOther')
(2, null, 'this') (2, null, 'that') (2, null, 'theOther')
```

したがって発生する書き込みの合計は 1 + 1 + 4 + 2 + 6 + 6 = 20

次にこれまでと同様に ancestor が存在する以下のような entity を考える

```
Key: 'GreatGrandpa:1/Grandpa:1/Dad:1/Foo:1' (kind = 'Foo', id = 1, parent = 'GreatGrandpa:1/Grandpa:1/Dad:1')
A: 1, 2
B: null
C: 'this', 'that', 'theOther'
```

```
Kind: 'Foo'
A ▲, B ▼, C ▼
Ancestor: True
```

このとき各 property の値と各 ancestor 及び自身の entity の組み合わせ分の書き込みを必要とする

```
(1, null, 'this', 'GreatGrandpa') (1, null, 'this', 'Grandpa') (1, null, 'this', 'Dad') (1, null, 'this', 'Foo')
(1, null, 'that', 'GreatGrandpa') (1, null, 'that', 'Grandpa') (1, null, 'that', 'Dad') (1, null, 'that', 'Foo')
(1, null, 'theOther', 'GreatGrandpa') (1, null, 'theOther', 'Grandpa') (1, null, 'theOther', 'Dad') (1, null, 'theOther', 'Foo')
(2, null, 'this', 'GreatGrandpa') (2, null, 'this', 'Grandpa') (2, null, 'this', 'Dad') (2, null, 'this', 'Foo')
(2, null, 'that', 'GreatGrandpa') (2, null, 'that', 'Grandpa') (2, null, 'that', 'Dad') (2, null, 'that', 'Foo')
(2, null, 'theOther', 'GreatGrandpa') (2, null, 'theOther', 'Grandpa') (2, null, 'theOther', 'Dad') (2, null, 'theOther', 'Foo')
```

したがって発生する書き込みの合計は 1 + 1 + 4 + 2 + 6 + 24 = 38

## 参照
* [Cloud Datastore Overview](https://cloud.google.com/appengine/docs/java/datastore/)
* [Entities, Properties, and Keys](https://cloud.google.com/appengine/docs/java/datastore/entities)
