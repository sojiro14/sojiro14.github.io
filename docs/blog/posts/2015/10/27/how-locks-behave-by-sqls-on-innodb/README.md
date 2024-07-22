---
layout: Layout
title: "InnoDBにおけるSQL別ロックの挙動"
date: 2015-10-27
comments: true
categories: [MySQL]
---

研修時代に書いた InnoDB に関するメモ第二弾。

ロックの挙動に関しては基礎の基礎でちょっと考えれば分かるものの、開発しているとふとしたところで考慮が漏れていたりするので注意したい。


## SELECT ... FROM 
一貫性読み取りであり、データベースのスナップショットを読み取り、トランザクションの遮断レベルが SERIALIZABLE に設定されなければロックは設定しません。SERIALIZABLE レベルの場合、検索時に直面したインデックスレコード上に共有ネクストキーロックが設定されます。

## SELECT ... FROM ... LOCK IN SHARE MODE 
_検索時に直面したすべてのインデックスレコード上_に **共有ネクストキーロック** が設定されます。

## SELECT ... FROM ... FOR UPDATE 
_検索で特定されたインデックスレコード_に対し、 **排他ネクストキーロック** が設定され、ほかのセッションが SELECT ... FROM ... LOCK IN SHARE MODE を実行したり、特定のトランザクション遮断レベルで読み取りを行ったりできないようにします。 **ただし、ギャップロックの部分に関しては共有ロックとなります** 。

## UPDATE ... WHERE ... 
_検索が直面するすべてのレコード上_に **排他ネクストキーロック** を設定します。

## DELETE FROM ... WHERE ... 
_検索が直面するすべてのレコード上_に **排他ネクストキーロック** を設定します。

## INSERT 
**挿入される行に排他ロック** を設定します。このロックはネクストキーロックではなくインデックスレコードロックである (つまりギャップロックが存在しない) ため、ほかのセッションは挿入行の前にあるギャップへの挿入を自由に行えます。


## 参照
* [実践ハイパフォーマンスMySQL 第3版](http://www.amazon.co.jp/gp/product/4873116384/ref=as_li_tf_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4873116384&linkCode=as2&tag=sojiro14-22)
* ftp://ftp.ntu.edu.tw/MySQL/doc/refman/5.1-olh/ja/innodb-locks-set.html
