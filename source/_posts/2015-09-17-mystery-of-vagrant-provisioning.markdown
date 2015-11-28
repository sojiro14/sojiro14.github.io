---
layout: post
title: "Vagrant provisioning の謎"
date: 2015-09-17 05:21:08 +0900
comments: true
categories: [Vagrant, RVM]
---

Vagrant で立てた CentOS の仮想環境にちょっとした環境構築をしようと、provision ファイルを作って `vagrant provision` で実行しようとしたところ RVM のインストールから先が上手くいかなかった。

（ ` vagrant provision ` に関しては [過去のエントリ](http://blog.sojiro.me/blog/2015/05/03/the-first-step-for-vagrant/) に記載があります）

provision ファイルの該当箇所は以下

```bash
# ruby and rails
curl -L https://get.rvm.io | bash -s
source ~/.profile

rvm requirements
rvm install 2.0.0 --with-openssl-dir=$HOME/.rvm/usr
```

上記コマンドのうち、

```bash
curl -L https://get.rvm.io | bash -s
```

だけが実行できているが、このコマンドの結果も意図したものとなっていない。
それ以降のコマンドは失敗する。

まだ原因は良くわかっていない。

* RVM のインストール自体はできている
* どのユーザー（vagrant? root?）で実行されているのか分からない
* vagrant ユーザーに対しては `rvm` コマンドの path が通っているが、root ユーザーには通っていない
* provision 実行のログ的には root で実行しているように見える
* `vagrant ssh` して手動でコマンドを実行すると意図した結果になる
