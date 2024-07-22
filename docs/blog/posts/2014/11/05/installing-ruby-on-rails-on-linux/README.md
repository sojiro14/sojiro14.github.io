---
layout: Layout
title: "LinuxにRuby on Railsをインストールする"
date: 2014-11-05
comments: true
categories: [Ruby, Ruby on Rails, Linux, AWS]
---
Ruby on Railsを使ってみたいと思い、AWSにインストールした手順。

## Ruby version 2.0.0 を RVMを使ってインストール
[Linuxに最新のRubyをインストールする](http://sojiro14.github.io/blog/2014/10/31/installing-latest-ruby-in-linux/)を参照

## gemsetの作成
> Rubyをインストールしたら、Railsのアプリケーションを実行するために必要な他のソフトウェア向けにシステムを構成する必要があります。通常、これはgemのインストールに関連します。gemとは自己完結型のRubyコードのパッケージです。バージョン番号の異なるgem同士がコンフリクトすることがあるため、一連のgemを自己完結的にまとめたgemsetというものを作成してバージョンを使い分けるのが便利です。
（引用: [Ruby on Rails チュートリアル](http://railstutorial.jp/chapters/beginning?version=4.0#top)）

以下のコマンドでgemsetを作成する。
``` bash
$ rvm use 2.0.0@railstutorial_rails_4_0 --create --default
```
> 上のコマンドを実行すると、Ruby 2.0.0に関連付けられたrailstutorial_rails_4_0というgemsetを作成し (--create)、その場でgemsetを有効にし (use)、gemsetをデフォルトに設定 (--default) します。これにより、ターミナルウィンドウを開いたときに2.0.0@railstutorial_rails_4_0というRubyとgemsetの組み合わせが常に選択されるようになります。
（引用: [Ruby on Rails チュートリアル](http://railstutorial.jp/chapters/beginning?version=4.0#top)）

## RubyGemsのインストール
AWSには始めからgemがインストールされていて、PATHは以下。
``` bash
$ which gem
/usr/bin/gem
```
RVMでRubyをインストールするとPATHが上書きされる。
``` bash
$ which gem
~/.rvm/rubies/ruby-2.0.0-p594/bin/gem
```
今回はチュートリアルに合わせてgemのバージョンを更新する
``` bash
$ gem update --system 2.0.3
```
gemの設定ファイルである ```.gemrc``` に自動生成されるドキュメントである ```ri``` と ```rdoc``` の自動生成を抑制する設定をする
``` bash
$ vim .gemrc
$ cat .gemrc
install: --no-rdoc --no-ri
update:  --no-rdoc --no-ri
```

## Railsをインストールする
いよいよRailsをインストールする
``` bash
$ gem install rails --version 4.0.5
```
インストール完了。
以下のコマンドで確認する
``` bash
$ rails -v
Rails 4.0.5
```
Railsがインストールされたことを確認できた

## 参照
[Ruby on Rails チュートリアル](http://railstutorial.jp/chapters/beginning?version=4.0#top)

