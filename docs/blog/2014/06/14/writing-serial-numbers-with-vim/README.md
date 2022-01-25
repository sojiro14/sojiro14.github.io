---
layout: Layout
title: "vimで連番を振る方法"
date: 2014-06-14 02:01:05+0900
comments: true
categories: [Vim]
---

大量のvalueに連番を振りたくなったのでvimの機能を調べて使ってみた。
目標は以下のようにurlのリストをPerlのハッシュ化すること。

```
example_1.com
example_2.com
example_3.com
~
example_254.com
example_255.com
example_256.com
```


```perl
my %urls = (
    1   => 'example_1.com',
    2   => 'example_2.com',
    3   => 'example_3.com',
~
    254 => 'example_254.com',
    255 => 'example_255.com',
    256 => 'example_256.com',
);
```

## 使うvimの機能
* 数字のインクリメント/デクリメント
* 操作の記録（complex repeat）


## ①数字のインクリメント/デクリメント
### 数字のインクリメント
数字にカーソルを合わせて
```
Ctrl + a
```

### 数字のデクリメント
数字にカーソルを合わせて
```
Ctrl + x
```

## ②操作の記録（complex repeat）
操作の記録は以下の順序で行う

1. 準備
2. 一連の操作に名前をつけて記録を開始
3. 一連の操作を行う
4. 記録を終了
5. 記録した操作を繰り返し実行

### 1. 準備
```perl
1 => example_1.com
example_2.com
example_3.com
~
```
最初のキーである1だけ用意しておく。

### 2. 一連の操作に名前をつけて記録を開始
```
q
```
```
a
```
操作を開始する位置（キー1の上）にカーソルを合わせ、q, aの順でキーを押すと、'a'という名前で操作が記録される。

操作の名前は'a'の大文字、小文字のアルファベット、もしくは数字から1字を選んで付けることができる。

### 3. 一連の操作を行う
```
v (visual mode)
```
```
llllll (=> までを選択)
```
```
y (yank)
```
```
j P (1行下がってpaste)
```
```
0 (行頭へカーソルを移動)
```
```
Ctrl + a (インクリメント)
```
```
0 (行頭へカーソルを移動)
```

### 4. 記録を終了
```
q
```
qを押して記録を終了

### 5. 記録した操作を繰り返し実行
```
254 (繰り返す回数)
```
```
@a ('a'と名付けた操作を指定)
```

ここまで完了時点で以下のようになる。
```perl
1   => example_1.com
2   => example_2.com
3   => example_3.com
~
254 => example_254.com
255 => example_255.com
256 => example_256.com
```

## Perlの記法に合わせて整形
vimの矩形選択( ```Ctrl + v``` )などをつかって正しいハッシュの文法に整形する
