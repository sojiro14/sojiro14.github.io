---
layout: Layout
title: "Ruby on Railsで初めてアプリを作ってみる #1 -railsのセットアップ-"
date: 2014-11-10 03:27:49 +0900
comments: true
categories: [Ruby, Ruby on Rails, Git, GitHub]
---
Ruby on Railsで初めてアプリを作ってみます。
今回はRailsの立ち上がりを確認するところまで。

## アプリのセットアップ（rails new）
railsのアプリ作成は ```rails new``` コマンドで始まる。
``` bash
$ mkdir rails_projects
$ cd rails_projects
```
今回のアプリ作成の為にディレクトリを作成し、早速コマンドを実行。
``` bash
$ rails new first_app
...
An error occurred while installing sqlite3 (1.3.10), and Bundler cannot continue.
...
```
いくつかのディレクトリやファイルが作成されるが、最後にこのようなエラーが出てbundle失敗。
そこでGemfileを編集してbundleをやり直す。

``` bash
$ cd first_app/
```
Gemfileを編集。内容は[Ruby on Rails #Bundler](http://railstutorial.jp/chapters/beginning?version=4.0#sec-bundler)を参照。
``` bash
$ bundle update
...
Building native extensions.  This could take a while...
ERROR:  Error installing sqlite3:
    ERROR: Failed to build gem native extension.

    /home/sojiro/.rvm/rubies/ruby-2.0.0-p594/bin/ruby extconf.rb
checking for sqlite3.h... no
sqlite3.h is missing. Try 'port install sqlite3 +universal'
or 'yum install sqlite-devel' and check your shared library search path (the
location where your sqlite3 shared library is located).
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.  You may
need configuration options.
...
```
またも失敗。よく見るとsqlite-develが足りていないらしい
``` bash
$ sudo yum install sqlite-devel
```
sqlite-develをインストール後再度bundleによるgemのインストールを試みる
``` bash
$ bundle update
Installing sqlite3 1.3.8
Installing turbolinks 1.1.1
Installing uglifier 2.1.1
Your bundle is updated!
$ bundle install
Your bundle is complete!
Use `bundle show [gemname]` to see where a bundled gem is installed.
```
インストール成功。

## サーバーの立ち上げ（rails server）
ローカルでrailsを立ち上げるコマンド ```rails server``` を実行。
``` bash
$ rails server
...
Could not find a JavaScript runtime. See https://github.com/sstephenson/execjs for a list of available runtimes. (ExecJS::RuntimeUnavailable)
...
```
### Node.jsのインストール
 ```rails server``` コマンド実行でエラーが出てしまう。JavaScript runtimeがインストールされていないことが原因のよう。メッセージ通り https://github.com/sstephenson/execjs に行ってみるとJavaScript runtimeとしてNode.jsが有効と書いてあるのでNode.jsをインストールする。

``` bash
$ sudo rpm -ivh http://ftp.riken.jp/Linux/fedora/epel/6/x86_64/epel-release-6-8.noarch.rpm
$ sudo yum install nodejs npm --enablerepo=epel
```
今回はyumでインストールした。そして再度 ```rails server```
``` bash
$ rails server
=> Booting WEBrick
=> Rails 4.0.5 application starting in development on http://0.0.0.0:3000
=> Run `rails server -h` for more startup options
=> Ctrl-C to shutdown server
```
ローカルでサーバーが立ち上がる。
今回はAWS上で作業しているので、AWS該当インスタンスのSecurity Groupで3000番portを空ける。

http://xx.xxx.xxx.xxx:3000

にブラウザでアクセスして以下の画面が見えればOK

{% img /images/rails/rails_starting.png %}

## GitHubに上げておく
``` bash
$ git init
$ git remote add origin https://github.com/sojiro14/first_app.git
```
GitHubでリポジトリ作成
``` bash
$ git add .
$ git commit -m 'Initialize repository'
$ git push -u origin master
```

## 参照
* [node.jsをyumでインストールする(centos6.5)](http://qiita.com/you21979@github/items/4efd9fc4363573191b5c)
* [Ruby on Rails チュートリアル](http://railstutorial.jp)
