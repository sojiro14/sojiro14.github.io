---
layout: Layout
title: "パーフェクトJava読書メモ chapter 4 変数とオブジェクト"
slug: study-of-perfect-java-chapter-4
date: 2016-07-18
comments: true
categories: [Java]
---

Javaを使うために[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)を読んだメモ

## 変数とオブジェクト
* Javaの変数は以下の二つに分類される
    * 基本型変数
    * 参照型変数
* オブジェクトはある体系にそってデータを表すモノであり、名前を持たない

## 変数
### 参照型変数
* C言語のポインタ型変数の値がメモリ上のアドレス値そのものであるのに対し、Javaの参照型変数の値はオブジェクトの位置情報を指し示す抽象的な「何か」である
* 参照型変数は名前を持ち、オブジェクトを参照することで扱いやすく橋渡しする
* 参照型変数自体に型があり以下の3種類、これは参照しているオブジェクトの型とは別
    * クラス型
    * 配列型
    * インターフェース型

### 基本型変数
* 基本型変数は値をそのまま保持する
* 基本型の種類は以下の8つ
    * `boolean`
    * `byte`
    * `char`
    * `short`
    * `int`
    * `long`
    * `float`
    * `double`

### 変数の宣言
* 変数を使うには最初に変数を宣言する
* 変数宣言は最初に変数の型を書き、続けて変数名を書く
```java
StringBuilder sb;
```
* 基本型変数の宣言時も型名を変数名の前に書く
```java
int i;
```
* 同じスコープで同名の変数は宣言できない
```java
void method(int i) {
    int i;
}
// コンパイルエラー
```

### 変数の初期化
* 変数は宣言時に初期化できる
```java
int i = 1;
```
* 初期化しない場合の変数のデフォルト値は変数の型と種類に依存する

### 変数の修飾子
* 変数の宣言時に修飾子を付けることができる
* 変数に使える修飾子は以下
    * `private`
    * `protected`
    * `public`
    * `transient`
    * `final`
    * `static`
    * `volatile`

## オブジェクト
### オブジェクトの生成
* `new` の後にクラス名を書き、 `()` で引数を指定する
* 引数の定義はクラスごとに決まっている
```java
new StringBuilder("012");
```

### 参照型変数への代入
* 生成したオブジェクトは参照型変数へ参照を渡して扱う
```java
StringBuilder sb = new StringBuilder();
```
* あくまで変数が扱っているのはオブジェクトへの参照なので、以下の例では2つの変数は同じオブジェクトへの参照を持つ
```java
StringBuilder sb = new StringBuilder();
StringBuilder sb2 = sb;
sb.append("012");
sb2.append("345");
// sb: "0123445"
// sb2: "012345"
```

### 基本型変数への代入
* 基本型変数へ代入されるのはオブジェクトの参照ではなく値そのもの
* 値そのものをコピーして代入する
```java
int i = 42;
int j = i + 1;
int K = i;
// i: 42
// j: 43
// k: 42
```

### null参照
* `null` は「何も参照していない」ということを表す
```java
StringBuilder sb = null;
```

#### nullチェック
* 参照先がなく、 `null` を持つ参照型変数にたいする演算は `NullPointerException`
* `Object` クラスに `null` をチェックするためのメソッドがある

| method | description |
| ------ | ----------- |
| `equals` | 引数のどちらかが `null` でも使える比較 |
| `toString` | `null` の場合の文字列を指定可能 |
| `isNull` | 引数が `null` のとき真 |
| `notNull` | 引数が `null` でないとき真 |
| `requireNonNull` | 引数が `null` だと即座に `NullPointerException` |

### Optional型
* `Optional` 型は任意のオブジェクトをくるんで `null` かもしれない状態を表現する
* 基本型変数のための `Optional` 型として以下の 3 つがある
    * `OptionalInt`
    * `OptionalLong`
    * `OptionalDouble`
* `Optional` オブジェクトは `of` または `ofNullable` メソッドを使って任意のオブジェクトから生成できる
```java
StringBuilder sb;
Optional<StringBuilder> osb = Optional.of(sb);
// or
// Oprional<StringBuilder> osb = Optional.ofNullable(sb);
```
* `get` メソッドで `Optional` オブジェクトでくるんだオブジェクトを取得
```java
Optional<StringBuilder> osb;
StringBuilder sb = osb.get();
```
* くるんだオブジェクトが `null` でなければそのまま呼び出し、 `null` であれば引数のオブジェクトを返す例
```java
StringBuilder sb = osb.orElse(new StringBuilder("none"));
```

### 変数を介さないオブジェクトの操作
* 変数に参照を格納しなくてもオブジェクトを操作できる
```java
int len = new StringBuilder("012").length();
```
* 文字列リテラルでも
```java
int len = "abc".length();
```
* ドット演算子でメソッド呼び出しをつなげることをメソッドチェインという
```java
StringBuilder sb = new StringBuilder();
int len = sb.append("012").append("345").length();
// len: 6
```

## 変数と型
* オブジェクトの型はクラスで定義されている
* 変数の型とオブジェクトの型が一致もしくはオブジェクトの型が変数の型の下位型であるとき変数にオブジェクトの参照を代入可能
* 変数が参照するオブジェクトに対して行える操作は変数の型できまる
* 下位型のオブジェクトは上位型の持つメソッドを持つことが保証されている
    * ただし実態が同一とは限らない

## 変数の詳細
### 変数の種類

| type | description |
| ---- | ----------- |
| ローカル変数 | メソッドもしくはコンストラクタ内で宣言される。メソッドやコンストラクタが終わると消滅。 |
| パラメータ変数 | メソッドもしくはコンストラクタに引数として渡る。メソッドやコンストラクタが終わると消滅。 |
| インスタンスフィールド変数 | クラスの構成要素 |
| クラスフィールド変数 | クラスの構成要素 |

### 変数のデフォルト値

| type | default value |
| ---- | --------------|
| 参照型 | `null`      |
| `boolean` | `false`  |
| `char` | "¥u0000"    |
| `byte`, `short`, `int`, `Long` | 0 |
| `float`, `double` | +0.0 |

### 変数のスコープ
#### ローカル変数
* 変数を宣言した行からメソッドもしくはコンストラクタが終わるまで

#### ブロックスコープ
* `{}` で囲ったブロックに閉じたスコープ
* 変数を宣言した行からブロックが終わるまで

#### シャドーイング
* 同一のスコープ内で同じ変数を2度以上宣言

#### パラメータ変数のスコープ
* メソッド及びコンストラクタの中

#### フィールド変数のスコープ
* フィールド変数のスコープはクラス内
* 宣言した行の位置は無関係

## オブジェクトの寿命
オブジェクトへの参照が外れる条件
* ローカル変数及びパラメータ変数のスコープが外れたとき
* オブジェクトが消滅したとき
* クラスが消滅し、クラスフィールド変数の参照が外れたとき
* 変数に別のオブジェクトの参照もしくは `null` が再代入されたとき
* 変数を介さない操作がされていた場合、式の評価が終わったとき

## final変数と不変オブジェクト
* `final` 修飾子を指定した変数を final 変数と呼ぶ
* final 変数は再代入不可
* `final` 修飾子が禁止するのは変数自体の値の変更であって、変数が参照するオブジェクト自体の変更ではない

## 参照
[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)
