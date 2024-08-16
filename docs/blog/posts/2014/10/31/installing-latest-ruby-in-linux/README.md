---
layout: Layout
title: "Linuxに最新のRubyをインストールする"
slug: installing-latest-ruby-in-linux
date: 2014-10-31
comments: true
categories: [Ruby, Ruby on Rails, Linux, AWS]
---

Ruby on Railsを使ってみたいと思い、調べてみるとRails4ではRubyのバージョンは1.9以降が必須のようである。

自分がさくらで借りているサーバーではRubyのバージョンが1.8.7だったのでこれを新しくしてみた。

## RVMのインストール
新しいRubyをインストールする前にRVM(Ruby Version Manager)をインストールする。これはRubyをバージョンごとに管理するツール
```bash 
$ curl -L https://get.rvm.io | bash -s
```

このコマンドで自分のホームディレクトリ以下に ```.rvm/``` が作られ、ここにRVMがインストールされる。

そして ```.profile``` ```.bashrc``` ```.zshrc``` にPATHを通す記述が追加される。

また、 ```.bash_profile``` ```.zlogin``` にRVMをロードする記述が追加される。

RVMのインストールが完了したらロードする。ここではbashを使っているので以下のようにする。
```bash
$ source .bash_profile
```

## Rubyのインストール
### さくらのレンタルサーバーでの失敗
まずはRubyのインストールに必要なパーツを調べ、無ければインストールする。
以下のコマンドで必要なものをピックアップしインストールまで行ってくれる。
```bash
$ rvm requirements
/your/home/directry/.rvm/scripts/functions/support: line 314: rvm_debug: command not found
Checking requirements for freebsd.
Installing requirements for freebsd.
Updating system.
Installing required packages: automake, bison, readline, libyaml...
Error running 'requirements_freebsd_libs_install automake bison readline libyaml',
```
ここでErrorが発生。内容は必要なパッケージがインストールできなかったということ。
そこでFreeBSDのパッケージ管理コマンドである ```pkg``` コマンドを使ってインストールを試みる。

が、サーバーの設定的に自分でパッケージを追加することができなかったのでさくらのサーバーを断念してAWSに移行した。

### AWSに移行
AWSに移行して ```$ rvm requirements``` までを実行する。（AWSは始めからRubyのバージョンが2.0.0だったが構わず実行）
ここでも ```$ rvm requirements``` が転ける。

そこで今度はCentOSだったので ```yum``` を使ってインストールを試みる。以下のコマンドは ```$ rvm requirements``` が教えてくれる。Errorの原因が ```sudo``` で実行していなかったことなので ```sudo``` 付きで実行する。
```bash
sudo yum install -y patch libyaml-devel libffi-devel glibc-headers autoconf gcc-c++ glibc-devel patch readline-devel zlib-devel openssl-devel automake libtool bison
```
これで成功。
```bash
$ rvm requirements
Checking requirements for amazon.
Requirements installation successful.
```
 ```$ rvm requirements```も成功。

このサーバーではすでにバージョン2.0.0のRubyがインストールされていたが、RVMの配下に新たにバージョン2.0.0のRubyをインストールする。
```bash
$ rvm install 2.0.0 --with-openssl-dir=$HOME/.rvm/usr
```
インストール完了。

## 参考
[Ruby on Rails チュートリアル](http://railstutorial.jp/chapters/beginning?version=4.0#top)

