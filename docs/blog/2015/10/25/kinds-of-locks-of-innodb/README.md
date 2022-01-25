---
layout: Layout
title: "InnoDBにおけるロックの種類"
date: 2015-10-25 23:02:53 +0900
comments: true
categories: [MySQL]
---
MySQL でよく使う InnoDB のロックについて研修時代に書いたメモ。


## 種類
* レコードロック: **インデックスレコードの** ロック
* ギャップロック: インデックスレコード間にあるギャップのロック、先頭のインデックスレコードの前や末尾のインデックスレコードの後にあるギャップのロック、のいずれか
* ネクストキーロック: インデックスレコードに対するレコードロックと、そのインデックスレコードの前、または後ろにあるギャップに対するギャップロックとを組み合わせたもの

## InnoDBの行ロック（レコードロック）
InnoDBは行ロックができる、とよく言いますが、
正確には **インデックスレコード** にロックをかけているので、
primary key や、unique key といったレコードを一意に特定できるインデックスを使用せずにロックをかけるとテーブルロックの様な挙動を示します。（実際には隠しクラスタインデックスが生成、使用される。）

## ギャップロック、ネクストキーロック
ギャップロック、ネクストキーロックは

* 範囲を指定して（複数のレコードにまたがって）ロックを獲得しようとしたとき
* 存在しないレコードに対してロックを獲得しようとしたとき

のみ起こりうる。

また、 **ギャップロックは常に共有ロックと同じ挙動** を示す


## 例
前提：id(primary key)が10, 20, 30のレコードが入っているテーブル

```sql
select from table where id = 15 for update;    #id 11~19にギャップロック
```
```sql
select from table where id < 15 for update;    #id ~20にネクストキーロック
```
```sql
select from table where id < 20 for update;    #id ~20にネクストキーロック
```
```sql
select from table where id <= 20 for update;   #id ~30にネクストキーロック
```
```sql
select from table where id > 15 for update;    #id 11~にギャップロック
```
```sql
select from table where id = 35 for update;    #id 31~にギャップロック
```

## 参照
[実践ハイパフォーマンスMySQL 第3版](http://www.amazon.co.jp/gp/product/4873116384/ref=as_li_tf_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4873116384&linkCode=as2&tag=sojiro14-22)
