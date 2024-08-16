---
layout: Layout
title: "パーフェクトJava読書メモ chapter 3 数値①"
slug: study-of-perfect-java-chapter-3
date: 2016-07-17
comments: true
categories: [Java]
---

Javaを使うために[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)を読んだメモ

## 整数型
以下の5種類

| name   | bit length |  min  |  max  |
| ----- | ----------- | ----- | ----- |
| `byte`  | 8         | -128  |  127  |
| `char`  | 16        | 0     | 65535 |
| `short` | 16        | -32768 | 32767 |
| `int`   | 32        | -2147483648 | 2147483647 |
| `long`  | 64        | -9223372036854775808 | 9223372036854775807 |

### bit値
符号あり整数で最上位ビットが1の値は負の値となる

#### 4bit長の符号なし整数

| type | value | bit |
| ---- | ----- | ---- |
| min  | 0     | 0000 |
| max  | 15    | 1111 |

#### 4bit長の符号あり整数
| type      | value | bit |
| --------- | ----- | ---- |
| min bit   | 0     | 0000 |
| max value | 7     | 0111 |
| min value | -8    | 1000 |
| max bit   | -1    | 1111 |

## 桁あふれ
整数の加算はbit値を進める処理であり、

整数の減算はbit値を戻す処理である

したがってbitの境界値をまたいで整数の加算減算を行うと予期しない結果となる場合がある
```java
int i = Interger.MAX_VALUE;
// i: 2147483647

i++
// i: -2147483648
```

## 整数リテラル
* `L` または `l` で終わる整数リテラルの型は `long` 型
* それ以外の整数リテラルは `int` 型
* `int` 型リテラル値を `byte` 、 `char` 、 `short` の型の変数に代入する場合、値が代入する先の型の範囲内であれば自動的に型が変換されて代入される
    * 代入する先の型の範囲を超えている場合はコンパイルエラーとなる

### 基数
* `0b` から始めると 2 進数
* `0` から始めると 8 進数
* `0x` から始めると 16 進数

## 整数の演算
### 四則演算
| 演算子 | 演算 |
| ----- | ---- |
| +     | 和   |
| -     | 差   |
| *     | 積   |
| /     | 商   |

#### 注意点
* 大きな正の整数の和における桁あふれ
* 小さな負の整数の差における桁あふれ
* 絶対値の大きな整数同士の積の桁あふれ
* 商の結果は切り捨て
* 0 による割り算は `ArithmeticException`

### 剰余
* 剰余演算子は `%`
* 0 による剰余演算は `ArithmeticException`

### 符号反転
単項演算子 `-` は通常単純に符号を反転させる
```java
int n = 10;
// -n: -10
```

しかしここにも桁あふれの問題があるので注意
```java
int n = -2147483648;
// -n: -2147483648
```
[仕様書](http://docs.oracle.com/javase/specs/jls/se8/html/jls-15.html#jls-15.15.4)によると
> -x equals (~x)+1

* `~` は bit 反転演算子
* -2147483648 は bit に変換すると 100...0（0 が 31 個つづく）
* これを反転させると 011...1（1 が 31 個つづく）となり、これは 2147483647 を表す
* 2147483647 + 1 は桁あふれが起こり、 -2147483648 となる

### インクリメント・デクリメント
* `++` でインクリメント
* `--` でデクリメント

## キャスト
`()` 付きで型を書くことで強制的に型変換する
```java
int i = 1;
short si = (short)i;
```

### 代入先の型に収まらないとあふれたbitが切り捨てられる
```java
short si = (short)65536;
// si: 0
```
* 65536 は bit に変換すると 100...0 （0 が 16 個つづく）
* `short` 型は 16 bit なので先頭の 1 があふれる

## ブーリアン（真偽値）
ブーリアン型が取りうる値は `true` か `false` のみ

※ ド・モルガンの法則の説明等

## 参照
* [改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)
* [15.15.4. Unary Minus Operator -](http://docs.oracle.com/javase/specs/jls/se8/html/jls-15.html#jls-15.15.4)
