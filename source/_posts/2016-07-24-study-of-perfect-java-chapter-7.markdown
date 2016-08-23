---
layout: post
title: "パーフェクトJava読書メモ chapter 7 インターフェース"
date: 2016-07-24 02:29:32 +0900
comments: true
categories: [Java]
---

Javaを使うために[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)を読んだメモ

## クラスとインターフェースの違い
* インターフェースは雛形としての役割を持たない
* インターフェースは実体化できず、型定義に特化している
* インターフェースの継承の目的は多様性のみ（クラスの拡張継承には実装コードの共有という側面もある）

## インターフェース宣言
```java
[修飾子] interface インターフェース名 {
    メンバ宣言
}
```

### インターフェースの修飾子
| modifier | description |
| -------- | ----------- |
| `public` | グローバルにアクセス可（書かないとパッケージ内に限定） |
| `abstract` | インターフェースは暗黙的に abstract なので書かなくても同じ |
| `strictfp` | インターフェース内に記述した浮動小数点演算を厳密に評価 |
| アノテーション | 省略 |

### インターフェースのメンバ
* 抽象メソッド（実装なし）
* default メソッド
* static メソッド
* 定数フィールド
* static なネストしたクラス
* static なネストしたインターフェース

### メソッド宣言
| modifier | description |
| -------- | ----------- |
| `public` | 暗黙的に public なので書かなくても同じ|
| `default` | デフォルトメソッド |
| `static` | static メソッド |
| `abstract` | 暗黙的に abstract なので書かなくても同じ |

* `default` メソッドはインスタンスメソッド
* インターフェースを継承した具象クラスのインスタンスメソッドになる
* フィールド変数は暗黙的に `public` `static` `final`

## インターフェースと実装クラス
### インターフェース継承
```java
[修飾子] class クラス名 implements インターフェース名 {
    クラス本体
}
```

複数のインターフェースを同時に継承することができる

```java
[修飾子] class クラス名 implements インターフェース名, インターフェース名 {
    クラス本体
}
```

* クラスの拡張継承とインターフェースの継承を同時にできる
* このとき `implements` は `extends` より後に書く

```java
[修飾子] class クラス名 extends 親クラス名 implements インターフェース名 {
    クラス本体
}
```

* インターフェースを継承したクラスはインターフェースの抽象メソッドをすべてオーバーライドする必要がある
* インターフェースから継承したメソッドのアクセス制御は `public` 修飾子がないとコンパイルエラー
* メソッドのオーバーライドはクラスの拡張継承と同様に行う

### ネストしたインターフェース
* クラス内のネストしたインターフェース
    * `public` `protected` 無指定 `private` のいずれかを指定する
* インターフェース内のネストしたインターフェース
    * 常に `public`
* インターフェース内のネストしたクラス
    * 常に `public` かつ `static`
* ネストして宣言されたインターフェースは常に `static`

### インターフェース自体の拡張継承
* インターフェースも拡張継承できる
* インターフェースは複数の親インターフェースを指定可能

```java
interface Parent {
    void print();
}

interface Child extends Parent {
    // void print() を継承
}

interface Father {
    void print();
}

interface Mother {
    void exec();
}

interface Child2 extends Father, Mother {
    // void print(), void exec() を継承
}
```

## 参照
[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)
