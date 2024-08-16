---
layout: Layout
title: "パーフェクトJava読書メモ chapter 2 文字と文字列"
slug: study-of-perfect-java-chapter-2
date: 2016-07-12
comments: true
categories: [Java]
---

Javaを使うために[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)を読んだメモ


## 文字列
"（ダブルクォート）で囲んで文字数リテラル

### String クラス
* 文字列リテラルから `String` オブジェクトが自動生成
* 配列のように1文字ごとにindexが振られる

### StringBuilder クラス
* オブジェクトに対して破壊的
* `String` オブジェクトは read only

### 文字列の結合
* `+=` と `StringBuilder` の関係
* `join` メソッド

### 文字列の比較
* `==` 演算子じゃなくて `equals` メソッド
    * `==` 比較は同一のオブジェクトへの参照かどうかの比較
* 同じ文字列リテラルは同じ `String` オブジェクト
* ただし `String` と `StringBuilder` では文字列の内容が同じでも違うオブジェクト
    * そんなときは `contentEquals` メソッド
* `StringBuilder` 同士の文字列の内容比較もできないので、 `toString` で `String` に変換してから `contentEquals` 使うこと

### 文字列と数値の変換
#### 数値から文字列への変換
`valueOf` メソッド
```java
String s = String.valueOf(255);
// s: "255"
```

`toString` メソッドで10進数以外に直接変換する
```java
String s = Integer.toString(255, 16);
// s: "ff"
```

### 文字列から数値への変換
`parseInt` メソッド
```java
int i = Integer.parseInt("255");
// i: 255
```
基数を与えて10進数以外の処理
```java
int i = Integer.parseint("ff", 16);
// i: 255
```

## 文字
* '（シングルクォート）で囲んで文字リテラル
* Javaの世界ではUTF-16
    * 文字を16bitの数値で表す `char` 型
* 文字リテラルは `char` 型の数値
* `String` オブジェクトは文字（ `char` 型）の配列

## バイト
* 歴史的に文字とバイトは同一視されがち
* Javaではバイトを文字と区別する
* 8bit長の `byte` 型
* バイト列は `byte` 型の配列

### バイト列と文字列の変換
#### バイト列から文字列への変換
`byte` の配列を渡して `String` オブジェクトを生成
```java
byte[] bytes = new byte[]{0x61, 0x62, 0x63};
String s = new String(bytes);
// s: abc
```

#### 文字列からバイト列への変換
`getBytes` メソッドを使う
```java
String s = "abc";
byte[] bytes = s.getBytes();
```

## 参照
[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)
