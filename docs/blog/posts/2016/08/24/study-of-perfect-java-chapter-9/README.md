---
layout: Layout
title: "パーフェクトJava読書メモ chapter 9 文、式、演算子"
slug: study-of-perfect-java-chapter-9
date: 2016-08-24
comments: true
categories: [Java]
---

Javaを使うために[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)を読んだメモ

## Java の文法と文
Java で扱う文は以下の4種類

* 制御文
* ブロック文
* 宣言文
* 式文

宣言文と式文は終端にセミコロン必要

## Java の演算子と式
* `&&` 、 `||` 、 `?` `:` （三項演算子）を除くすべての演算子は演算前にすべてのオペランドを評価する
* オペランドは左のものから評価する
* メソッド及びコンストラクタ呼び出し式では引数を左から評価する

## 数値の演算
### インクリメント/デクリメント演算の前置後置
前置演算は評価値が演算後の値、後置演算は評価値が演算前の値

```java
int n = 10;
int m = ++n;
// m: 11, n: 11
int n = 10;
int m = n++;
// m: 10, n: 11
```
```java
int n = 0;
while (++n < 10) {
    // ループが回る回数は 9 回
}
```

## 論理演算
### 遅延評価
`&&` 、`||` は遅延評価を行う

* `&&` は左辺の評価値が偽であれば右辺の評価値に関係なく結果が偽になるため右辺を評価しない
* `||` は左辺の評価値が真であれば右辺の評価値に関係なく結果が真になるため右辺の評価をしない

これらの演算子の右辺に副作用のある式を書くと、左辺の評価値により実行さるか否かが変わってくるので注意

## その他の演算
### instanceof 演算子
ダウンキャストを安全に行えるかを事前にチェックする

## 参照
[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)
