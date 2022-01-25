---
layout: Layout
title: "Amazon Linux AMIにagをインストールした手順"
date: 2014-08-25 23:38:16 +0900
comments: true
categories: [Linux]
---
AWSでWebサーバーを借りた。このサーバーに```ag```をインストールした際の手順。

## agとは
ソースコードから特定のwordを検索する際に使うコマンド```grep```がより賢く改良されたのが```ack```コマンド。

この```ack```をさらに改良し、検索を高速化させたのが```ag```コマンド（正式名称:The Silver Searcher）である。

## Amazon Linux AMIへのインストール
MacにはHomebrewを使って```brew install the_silver_searcher```とするだけで簡単に入れることができた。

AWSで借りたサーバーはAmazon Linux AMIという独自のイメージだったが、```yum```が使えるのでCentOSと同じ以下の手順で入れることができた。

### ディレクトリの作成とソースのダウンロード
ソースをダウンロード、インストールするディレクトリを作成し、gitから```ag```のソースを持ってくる
```bash
$ mkdir -p $HOME/local/source
$ cd $HOME/local/source
$ git clone https://github.com/ggreer/the_silver_searcher
```

### ソースをmakeするための準備
対象のサーバーはまっさらな状態でコンパイラなどもなかったため、それぞれインストールする。

前述の通りAmazon Linux AMIではyumを使うことができる
```bash
$ sudo su -
yum -y groupinstall "Development Tools"
yum -y install pcre-devel xz-devel
exit
```

### インストール
コンパイルしてインストールする
```bash
$ cd $HOME/local/source/the_silver_searcher
$ ./build.sh
$ sudo make install
```

### パスを通す
```bash
$ cd
$ vim .bashrc
$ cat .bashrc
...
export PATH=$HOME/local/bin:$PATH
...
$ source .bashrc
```
これで```ag```が使えるようになった

## 参考
* [the_silver_searcher](https://github.com/ggreer/the_silver_searcher)
* [grepやackよりも速いコード検索ツールのagをローカルビルドインストールする](http://qiita.com/sifue/items/55d0c5c11a0571af3b8e)
