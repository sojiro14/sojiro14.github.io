---
layout: Layout
title: "パーフェクトJava読書メモ chapter 10 Javaプログラムの実行と制御構文"
date: 2016-08-31 03:40:04 +0900
comments: true
categories: [Java]
---

Javaを使うために[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)を読んだメモ

## 条件分岐
### if-else文
インデントの取り方に関係なく `else` は最も近い（直近の） `if` にかかる

### switch-case文
```java
switch(式) {
case 定数1:
    0個以上の文
case 定数N:
    0個以上の文
default:
    0個以上の文
}
```

式の評価値は以下

* int 型
* int 型に暗黙に型変換される型
    * char
    * byte
    * short
* 数値ラッパークラス
    * Integer
    * Character   
    * Byte
    * Short
* enum 型
* String 型

式が `null` になると `NullPointerException` が発生する

`break;` 文がない限り処理を続ける

```java
int i = 0;
switch (i) {
    case 0:
        System.out.println(0);
    case 1:
        System.out.println(1);
    default:
        System.out.println("default");
}
```
```java
0
1
default
```

## 繰り返し
### for文
```java
for (初期化式; 条件式; 更新式) {
    文
}
```

条件式は評価値が `boolean` もしくは `Boolean`

初期化式と更新式は複数の式を `,` で区切って書ける

```java
for (int i = 0, j = 0; (i < 10 && j < 10); i++, j++) { 
}
```

異なる型の宣言と初期化を並べるとエラー

```java
for (int i = 0, byte j = 0; (i < 10 && j < 10); i++, j++) { 
}
```

for文の外に出して回避

```java
int i;
byte j;
for (i = 0, j = 0; (i < 10 && j < 10); i++, j++) { 
}
```

## ジャンプ
### break文
* ループを抜ける
* ループがネストしている場合、抜けるのは内側のループのみ

### continue文
* ループ内の文をスキップしてループの条件式の評価に戻る

### ラベル
* 繰り返しにラベルをつける
* break文、continue文にラベルを渡すことでどの繰り返しを対象にするか定める

```java
target_loop:
while (true) {
    while (true) {
        break target_loop;
    }
}
```

* 外側の while ループに `target_loop` というラベルがつく
* `break target_loop` で外側の while ループを抜ける
* （ `continue` の場合は対象のループ内の文をスキップして条件式の評価に戻る）

## 参照
[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)
