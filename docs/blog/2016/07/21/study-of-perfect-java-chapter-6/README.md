---
layout: Layout
title: "パーフェクトJava読書メモ chapter 6 コレクションと配列"
date: 2016-07-21 03:27:46+0900
comments: true
categories: [Java]
---

Javaを使うために[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)を読んだメモ

## コレクションフレームワーク

| ----- | Hash Table | Array      | Tree    | Linked List | Hash Table + Linked List |
| ----- | ---------- | ---------- | ------- | ----------- | ------------------------ |
| set   | HashSet    | ---        | TreeSet | ---         | LinkedHashSet            |
| list  | ---        | ArrayList  | ---     | LinkedList  | ---                      |
| deque | ---        | ArrayDeque | ---     | LinkedList  | ---                      |
| map   | HashMap    | ---        | TreeMap | ---         | LinkedHashMap            |

### コレクション型オブジェクトの生成

```java
コレクションのインターフェース型<要素の型> 変数 = new コレクションのインターフェースを実装した具象クラス<>([コンストラクタの引数]);
```

```java
List<String> list = new ArrayList<>();
```

* 上記例で `ArrayList<>` は `ArrayList<String>` の略

```java
List<int> list = new ArrayList<>();
```

* 要素の型に基本型は指定できない

## リスト
### リストの具象クラス
* ArrayList
* LinkedList

### ArrayList
* 良い点
    * インデックスを指定して要素を読み出す速度が速い[get]
    * インデックスを指定して要素を書き換える速度が速い[set]
    * 先頭から順にすべての要素をなめる処理が速い
* 悪い点
    * 要素の挿入が遅いことがある[add]
        * 先頭に近い位置への挿入は遅い
        * 末尾に近い位置への挿入は速いときもあるが遅いときもある
    * 要素の削除が遅いことがある[remove]
        * 先頭に近い位置の削除ほど遅い
        * 末尾に近い位置の削除ほど速い
        * 最末尾の削除は高速
    * 条件に合致した要素の検索があまり速くない[contains, indexOf, lastIndexOf]
* 要素の順序をもつので、順序が入れ替わる要素が多くなる処理は遅い
* 連続したメモリの確保ができない場合、末尾への挿入は遅くなる

### LinkedList
* 良い点
    * 要素の挿入が速い[add]
    * 要素の削除が速い[remove]
* 悪い点
    * インデックスを指定して要素を読み出す速度はあまり速くない[get]
    * インデックスを指定して要素を書き換える速度はあまり速くない[set]
    * 条件に合致した要素を検索する処理の速度はあまり速くない[contains, indexOf, lastIndexOf]
* 要素にたどり着くまでリンクをたどるのでリストの真ん中に近い要素ほどアクセスに時間がかかる

## マップ
```java
Map<String, Integer> map = new HashMap<>();
Map<Integer, List<String>> map = new TreeMap<>();
```

* Map インターフェースはキーと値の両方の型を `<>` の中に指定する
* List インターフェース同様 `<>` に指定できるのは参照型のみ

### マップの具象クラス
* HashMap
* LinkedHashMap
* TreeMap

### HashMap
#### HashMapの内部動作
* HashMap は内部に配列を確保する。これをハッシュ表と呼ぶ。
* ハッシュ表の初期サイズは HashMap のコンストラクタで指定する。
* キーと値のペアを HashMap に追加[put]すると HashMap は内部でキーをハッシュ関数に通す。
* ハッシュ関数の出力がハッシュ表のインデックスになる。
* 得られたインデックスの要素としてキーと値のペアを格納する。

### LinkedHashMap
#### LinkedHashMapの内部動作
* HashMap を拡張継承している
* ハッシュ表に加えて、 LinkedList と同じリンクリストを内部に保持する
* 要素を追加すると内部でハッシュ表とリンクリストの両方に要素を追加する

```java
LinkedHashMap(int initialCapacity, float loadFactor, boolean accessOrder)
```

* 上記コンストラクタの `accessOrder` に `true` を指定するとリンクリストの順序が要素にアクセスした順になる

### TreeMap
二分探索木の一種である赤黒木と呼ばれるアルゴリズムによるツリー構造で要素をもつ

#### NavigableMap
TreeMap がキーの順序をもつことを利用したインターフェース

```java
public class Sample {
    public static void main(String... args) {
        NavigableMap<String, String> map = new TreeMap<>();
        map.put("kanayama", "one");
        map.put("kawai", "four");
        map.put("kushibiki", "five");

        Map.Entry<String, String> entry = map.ceilingEntry("kana");
        if (entry != null) {
            entry.getKey() + ": " + entry.getValue();  // "kanayama: one"
        }
    }
}
```

## セット
* セットは数学の集合の概念
* 要素の重複を許さない
* Set インターフェースを実装した具象クラスは以下の3つ
    * HashSet
    * LinkedHashSet
    * TreeSet
* 要素の重複を許さない点が Map のキーの性質と重なるため、具象クラスも Map と重なる

## スタック、キュー、デック
* スタック: 最新要素から常に取り出し
* キュー: 最古要素から常に取り出し
* デック: 上記どちらにも対応
* スタック構造は Deque クラス（Stack クラスは古い）
* キュー構造は Queue クラス

## イテレータ
### 拡張for構文
```java
for (要素型 ループ変数 : コレクション変数) {
    forループが回るたびにループ変数が要素オブジェクトを順に参照
}
```

### イテレータ
* イテレーションを抽象化したオブジェクト
* Iterator インターフェースは以下のメソッドをもつ
    * `boolean` `hasNext();`
    * `E` `next();`
    * `void` `remove();`
* ListIterator インターフェースは Iterator を継承している
* ListIterator は上記に加えて以下の以下のメソッドをもつ
    * `boolean` `hasPrevious();`
    * `E` `previous();`

### 例
セットに対するイテレーション

```java
// Set<Integer> set
for (Integer n : set) {
    sum += n;
}

for (Iterator<Integer> it = set.iterator(); it.hasNext(); ) {
    Integer n = it.next();
    sum += n;
}
```

マップに対するイテレーション

```java
// Map<String, String> map

// 拡張 for でキーを繰り返す
for (String key : map.keySet()) {
    System.out.println(key);
}

// イテレータで値を繰り返す
for (Iterator<String> it = map.values().iterator(); it.hasNext(); ) {
    String val = it.next();
    System.out.println(val);
}

// 拡張 for でキーと値を繰り返す
for (Map.Entry<String, String> entry : map.entrySet()) {
    System.out.println(entry.getKey());
    System.out.println(entry.getValue());
}
```

リストを逆順になめる

```java
// List<Integer> list
for (ListIterator<Integer> it = list.listIterator(list.size()); it.hasPrevious(); ) {
    Integer i = it.previous();
    System.out.println(i);
}
```

## 配列
```java
int[] arr = new int[3];

int[] arr = { 0, 1, 2 };
```

### 多次元配列の初期化
```java
StringBuilder[][][] arr = {
    {
        { new StringBuilder("000"), new StringBuilder("001") },
        { new StringBuilder("010"), new StringBuilder("011") },
    },
    {
        { new StringBuilder("100"), new StringBuilder("101") },
        { new StringBuilder("110"), new StringBuilder("111") },
    },
};
```

## 参照
[改訂2版 パーフェクトJava](http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22)
