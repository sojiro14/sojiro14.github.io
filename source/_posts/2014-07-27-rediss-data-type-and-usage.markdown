---
layout: post
title: "Redisに用意されたデータ型とその扱い"
date: 2014-07-27 00:47:21 +0900
comments: true
categories: [Redis]
---
## Redisで扱えるデータ型
* String
* List
* Set
* Sorted Set
* Hash

## String
文字列型

文字列や数値など、Keyに対して1つに定まる値。
### 値のset
```bash
set [key_name] [value]  # 1つのkey-valueをsetする
mset [key_name_1] [value_1] [key_name_2] [value_2]  # key-valueの組を複数setする
```
### 値のget
```bash
get [key_name]  # 1つのkeyに対するvalueをgetする
mget [key_name_1] [key_name_2] [key_name_3]  # 複数のkeyに対するvalueをgetする
```
### 使用例
```bash
redis> set name Steven
OK
redis> get name
"Steven"
redis> mset number 8 color red
OK
redis> mget name number color
1) "Steven"
2) "8"
3) "red"
```

## List
リスト型

順番をもった値の集合。
### 値の追加
```bash
rpush [key_name] [member]  # リストの末尾に値を追加
lpush [key_name] [member]  # リストの先頭に値を追加
```
### 値の削除
```bash
rpop [key_name]  # リストの末尾の値を削除
lpop [key_name]  # リストの先頭の値を削除
```
### 範囲を指定して値を取得
```bash
lrange [key_name] 0 3   # 1番目から4番目まで値を取得
lrange [key_name] 0 -1  # 1番目から最後（最後から1番目）までの値を取得
```
### 位置を指定して値を取得
```bash
lindex [key_name] 2   # 3番目の値を取得
lindex [key_name] -1  # 最後の値を取得
```
### 要素の数を取得
```bash
llen [key]
```
### 使用例
```bash
redis> rpush player Steven
redis> rpush player Michael James
redis> lrange player 0 -1
1) "Steven"
2) "Michael"
3) "James"
redis> lrange player 0 1
1) "Steven"
2) "Michael"
redis> lindex player 1
"Michael"
redis> lindex player -1
"James"
redis> rpop player
"James"
redis> lrange player 0 -1
1) "Steven"
2) "Michael"
redis> llen player
(integer) 2
```

## Set
セット型

順不同の値の集合。値の重複を許さない。

### 値の追加
```bash
sadd [key_name] [member]  # keyに対応するセットに指定した値を追加
```
### 値の削除
```bash
srem [key_name] [member]  # keyに対応するセットから指定した値を削除
```
### 値の参照
```bash
smembers [key_name]  # keyに対応するセットの値を取得
```
### 和集合の取得
```bash
sunion [key_name_1] [key_name_2]  # key1に対応するセットとkey2に対応するセットの値の集合を取得
```
### 差集合の取得
```bash
sdiff [key_name_1] [key_name_2]  # key1に対応するセットとkey2に対応するセットの値の差分の集合を取得
```
### 積集合の取得
```bash
sinter [key_name_1] [key_name_2]  # key1に対応するセットとkey2に対応するセットの値の重複部分の集合を取得
```
### 使用例
```bash
redis> sadd reds Steven
(integer) 1
redis> smembers reds
1) "Steven"
redis> sadd reds Steve
(integer) 1
redis> sadd reds Michael
(integer) 1
redis> smembers reds
1) "Steven"
2) "Michael"
3) "Steve"
redis> srem reds Michael
(integer) 1
redis> smembers reds
1) "Steven"
2) "Steve"
redis> sadd three_lions Steven Michael
(integer) 2
redis> smembers three_lions
1) "Steven"
2) "Michael"
redis> sunion reds three_lions
1) "Steven"
2) "Michael"
3) "Steve"
redis> sdiff reds three_lions
1) "Steve"
redis> sdiff three_lions reds  # sdiffの後のkeyの順番により結果が違うことに注意
1) "Michael"
redis> sinter reds three_lions
1) "Steven"
```

## Sorted Set
ソート済みセット型

セット型と同様の特徴に加えて個々の値がスコアを持つ。

### 値の追加
```bash
zadd [key_name] [score] [member]  # keyに対応するセットにスコア付きで値を追加
```
### 値の削除
```bash
zrem [key_name] [member]  # keyに対応するセットから指定した値を削除
```
### 値の取得
```bash
zrange [key_name] 0 3     # keyに対応するセットからスコアの低い順に1番目から4番目の値を取得
zrevrange [key_name] 0 3  # keyに対応するセットからスコアの高い順に1番目から4番目の値を取得
```
### 値の順位を取得
```bash
zrank [key_name] [member]     # 指定した値の、keyに対応するセット中のランクを取得（スコアの低い順）
zrevrank [key_name] [member]  # 指定した値の、keyに対応するセット中のランクを取得（スコアの高い順）
```
### 使用例
```bash
redis> zadd fifa 1 germany
(integer) 1
redis> zrange fifa 0 0
1) "germany"
redis> zadd fifa 2 argentina
(integer) 1
redis> zadd fifa 3 holland 4 colombia 45 japan
(integer) 3
redis> zrange fifa 0 -1
1) "germany"
2) "argentina"
3) "holland"
4) "colombia"
5) "japan"
redis> zrevrange fifa 0 -1
1) "japan"
2) "colombia"
3) "holland"
4) "argentina"
5) "germany"
redis> zrank fifa japan
(integer) 4                      # 0番目から数えた値が返るので注意
redis> zrevrank fifa argentina
(integer) 3                      # 0番目から数えた値が返るので注意
redis> zrem fifa japan
(integer) 1
redis> zrange fifa 0 -1
1) "germany"
2) "argentina"
3) "holland"
4) "colombia"
```

## Hash
ハッシュ型

field（valueについた名前）とvalueを1セットとする値の集合（ハッシュ）。

### 値のset
```bash
hset [key_name] [field] [value]  # keyにfieldとvalueのハッシュをset
hmset [key_name] [field_1] [value_1] [field_2] [value_2]  # keyにハッシュのfieldとvalueを複数セット
```
### 値のget
```bash
hget [key_name] [field]               # keyに対応するハッシュから指定したfieldのvalueを取得
hmget [key_name] [field_1] [field_2]  # keyに対応するハッシュから指定した複数のfieldのvalueを取得
hkeys [key_name]                      # keyに対応するハッシュのすべてのfieldを取得
hvals [key_name]                      # keyに対応するハッシュのすべてのvalueを取得
```
### 使用例
```bash
redis> hset steven position mf
(integer) 1
redis> hget steven position
"mf"
redis> hmset steven nationality england club reds
OK
redis> hmget steven club position
1) "reds"
2) "mf"
redis> hkeys steven
1) "position"
2) "nationality"
3) "club"
redis> hvals steven
1) "mf"
2) "england"
3) "reds"
```
