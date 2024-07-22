---
layout: Layout
title: "Replyを試してみる"
date: 2015-05-09
comments: true
categories: [Perl, REPL, Reply]
---

Perl の REPL 環境である Reply というツールを教えてもらったので使ってみます。

## REPL とは？

REPL とは **R**ead-**E**val-**P**rint **L**oop の頭文字を取った言葉であり、

プログラムを読み(Read)、評価し(Evaluate)、結果を出力(Print)することを繰り返す(Loop)という意味である。

この環境があればファイルにプログラムを書いて保存し、実行する、という手続きを踏まなくてもスクリプトを実行できる

この REPL の Perl 版が Reply と言うことだそう


## Reply のインストール

Reply は CPAN からインストールする

```bash
$ cpanm Reply
--> Working on Reply
Fetching http://cpan.metacpan.org/authors/id/D/DO/DOY/Reply-0.37.tar.gz ... OK
Configuring Reply-0.37 ... OK
...
```

インストールできたら早速実行してみる

```bash
$ reply
/Users/sojiro/.replyrc not found. Generating a default...
0> 
```

コンソールが立ち上がった

早速なにかプログラムを入力してみよう

```bash
0> print 'Hello Reply';
Hello Reply$res[0] = 1
```

```bash
1> 12 * 12
$res[1] = 144
```

なるほど単純なプログラムの動作が確認できた。今度は ``` use ``` してみる。

```bash
2> use UUID::Tiny;
3> my $id = create_UUID_as_string(UUID_V4);
$res[2] = '87b16a6b-c712-41b4-bf46-965eeb01d3f1'

4> print $id;
87b16a6b-c712-41b4-bf46-965eeb01d3f1$res[3] = 1
```

このように実行結果は記憶された状態で進むので簡単にプログラムの実行結果を知りたいときに重宝しそうである。

## 参照

* [Replyでお手軽にPerlのコードを動かす話](http://papix.hatenablog.com/entry/2014/12/15/233800)
* [小飼弾のコードなエッセイ ~我々は本当に世界を理解してコードしているのだろうか? ](http://www.amazon.co.jp/gp/product/4774156647/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774156647&linkCode=as2&tag=sojiro14-22)

