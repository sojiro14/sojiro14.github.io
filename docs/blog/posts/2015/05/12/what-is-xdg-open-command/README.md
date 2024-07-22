---
layout: Layout
title: "xdg-open コマンドとは"
date: 2015-05-12
comments: true
categories: [Linux]
---

以前 [初めてのYeoman (Grunt/Bowerを使ってみる)](http://blog.sojiro.me/blog/2015/05/10/the-second-step-of-yeoman/) というエントリで Grunt を実行したときに

```bash
Warning: Command failed: /home/sojiro/yeoman/angular_fullstack/node_modules/open/vendor/xdg-open: line 584: xdg-mime: コマンドが見つかりません
```

と怒られたことがあったので ``` xdg-open ``` コマンドについて少し調べてみます

## xdg-open コマンドのインストール

xdg-open の実体はシェルスクリプトである

すんなりインストールできるかと思いきや普段の CentOS に入れるのに手こずってしまった

どうやら Ubuntu との相性が良いようなので Vagrant で Ubuntu を立ち上げてそこでインストールしてみる

### Ubuntu のセットアップ

Vagrant で Ubuntu 環境をセットアップする

まずは box のインストールから

```bash
$ vagrant box add ubuntu http://goo.gl/8kWkm
==> box: Adding box 'ubuntu' (v0) for provider: 
   box: Downloading: http://goo.gl/8kWkm
==> box: Successfully added box 'ubuntu' (v0) for 'virtualbox'!
```

```bash
$ vagrant box list
centos64 (virtualbox, 0)
ubuntu   (virtualbox, 0)
```

box がセットアップできたら立ち上げまで行ってしまう

```bash
$ mkdir ubuntu
$ cd ubuntu/
$ vagrant init ubuntu
A `Vagrantfile` has been placed in this directory. You are now
ready to `vagrant up` your first virtual environment! Please read
the comments in the Vagrantfile as well as documentation on
`vagrantup.com` for more information on using Vagrant.
$ ls
Vagrantfile
$ vagrant up
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Importing base box 'ubuntu'...
==> default: Matching MAC address for NAT networking...
==> default: Setting the name of the VM: ubuntu_default_1432117537476_54763
==> default: Fixed port collision for 22 => 2222. Now on port 2200.
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
   default: Adapter 1: nat
==> default: Forwarding ports...
   default: 22 => 2200 (adapter 1)
==> default: Booting VM...
==> default: Waiting for machine to boot. This may take a few minutes...
```

立ち上がったら以下のコマンドで Ubuntu 環境に入り、インストールの準備が完了する

```bash
$ vagrant ssh
Welcome to Ubuntu 12.04.1 LTS (GNU/Linux 3.2.0-32-generic x86_64)

* Documentation:  https://help.ubuntu.com/

 System information as of Wed May 20 07:30:10 BRT 2015

 System load:  0.0               Processes:           73
 Usage of /:   11.7% of 7.87GB   Users logged in:     0
 Memory usage: 1%                IP address for eth0: 10.0.2.15
 Swap usage:   0%

 Graph this data and manage this system at https://landscape.canonical.com/

New release '14.04.2 LTS' available.
Run 'do-release-upgrade' to upgrade to it.
```

### インストール

ここからいよいよ Ubuntu に ``` xdg-open ``` をインストールしていく

最初から入ってたらラッキーだなーと思いつつ打ってみる

```bash
$ xdg-open
The program 'xdg-open' is currently not installed.  You can install it by typing:
sudo apt-get install xdg-utils
```

思いがけず大ヒントが返ってきたので従う

xdg-utils は ``` xdg-open ``` を内包するパッケージである

```bash
$ sudo apt-get install xdg-utils
Reading package lists... Done
Building dependency tree
...
E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?
```

エラーになってしまった

しかしまたヒントがあるので従う

```bash
$ sudo apt-get install xdg-utils --fix-missing
Reading package lists... Done
Building dependency tree
...
Extracting templates from packages: 100%
Preconfiguring packages ...
Selecting previously unselected package ttf-dejavu-core.
```

晴れてインストール完了

## 使ってみる

* テキストファイル: 普通に開ける
* 画像ファイル: 開けるメソッドがなくエラー（環境立ち上げたばかりなので）

### ディレクトリを指定

```bash
$ mkdir test
$ touch test/file
$ xdg-open test/
```

{% img /images/xdg_open/directory.png %}

### URL を指定してみる

```bash
$ xdg-open http://blog.sojiro.me
```

{% img /images/xdg_open/blog.png %}

```bash
$ xdg-open http://google.com
```

{% img /images/xdg_open/google.png %}

ブラウザはないが URL を指定すると CUI 上で Web ページが開ける

## 参照

* [初めてのVagrant](http://blog.sojiro.me/blog/2015/05/03/the-first-step-for-vagrant/)

