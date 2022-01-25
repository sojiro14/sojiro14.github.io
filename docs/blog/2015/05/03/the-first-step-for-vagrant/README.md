---
layout: Layout
title: "初めてのVagrant"
date: 2015-05-03 22:18:11 +0900
comments: true
categories: [Vagrant]
---
仮想環境構築ツールのVagrantが便利らしいという噂を聞いて使ってみたところ確かに便利でした。

以前VirtualBox上での環境構築に手間取った経験があったのでこれは今後も積極的に使って行きたいと思い、最初の手順をメモします。

前提として今回仮想化ソフトとしてはVirtualBoxを使うのでインストールされているという前提で以下を書きます。

## Vagrantのインストール
まずはVagrantをインストールする

https://www.vagrantup.com/downloads.html

こちらのダウンロードフォームから使っているOSに合ったものをダウンロードすればOK

ダウンロードしたファイルをポチポチやってインストールが完了するので以下のコマンドで確かめる

```bash
$ vagrant --version
Vagrant 1.7.2
```

## boxの追加
Vagrantでは仮想環境それぞれの設定をboxという単位で管理する

現在管理しているboxの情報は ``` vagrant box list ``` で確認できる

```bash
$ vagrant box list
There are no installed boxes! Use `vagrant box add` to add some.
```

最初はboxが何もインストールされていないのでこのような結果

boxは自分で作成することもできるが、既に誰かが作ってくれたものを取り込むこともできる

http://www.vagrantbox.es/

こちらのサイトでは有志が様々なboxを提供してくれているので今回はこちらを使わせていただくことにする

リストからインストールするboxを決めたら、以下のコマンドで追加する

```bash
$ vagrant box add 名前 boxファイル
```

今回はインストールするboxをcentos64という名前で管理するために以下のようにした

```bash
$ vagrant box add centos64 http://developer.nrel.gov/downloads/vagrant-boxes/CentOS-6.4-x86_64-v20131103.box
==> box: Adding box 'centos64' (v0) for provider: 
   box: Downloading: http://developer.nrel.gov/downloads/vagrant-boxes/CentOS-6.4-x86_64-v20131103.box
==> box: Successfully added box 'centos64' (v0) for 'virtualbox'!
```

 ``` vagrant box list ``` コマンドで確認するとcentos64という名前でboxがインストールされたことがわかる

```bash
$ vagrant box list
centos64 (virtualbox, 0)
```

## 仮想環境を立ち上げる
boxを追加したら早速そのboxを使って仮想環境を立ち上げる

今回は ``` ~/virtual_machines/centos64/ ``` というディレクトリでこの仮想環境を管理することにする

まずは ``` vagrant init ``` コマンドで環境立ち上げの準備をする

```bash
$ cd ~/virtual_machines/centos64
$ vagrant init centos64
A `Vagrantfile` has been placed in this directory. You are now
ready to `vagrant up` your first virtual environment! Please read
the comments in the Vagrantfile as well as documentation on
`vagrantup.com` for more information on using Vagrant.
```

このinitコマンドを打つことで ``` Vagrantfile ``` が作られ、VirtualBox上にも仮想環境が現れる

 ``` Vagrantfile ``` ではこの仮想環境の設定を規定している

ここまで準備が完了したらいよいよ環境を立ち上げる ``` vagrant up ``` コマンドを使う

```bash
$ vagrant up
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Importing base box 'centos64'...
==> default: Matching MAC address for NAT networking...
...
```

VirtualBox上で仮想環境が立ち上がっていることを確認できたら成功

仮想環境の状態は ``` vagrant status ``` コマンドでも確認できる

```bash
$ vagrant status
Current machine states:

default                   running (virtualbox)

The VM is running. To stop this VM, you can run `vagrant halt` to
shut it down forcefully, or you can run `vagrant suspend` to simply
suspend the virtual machine. In either case, to restart it again,
simply run `vagrant up`.
```


## 立ち上げた仮想環境に入る
立ち上げた仮想環境に入るのは非常に簡単で、管理ディレクトリ上で ``` vagrant ssh ``` コマンドを打てばよい

```bash
$ vagrant ssh
Welcome to your Vagrant-built virtual machine.
```

後は通常通り好きなように仮想環境を使える


## ネットワークの設定をする
今回立ち上げた環境では主にWebサービスの開発を行いたいのでローカルからこの環境にアクセスするための設定をする

ネットワークの設定は ``` Vagrantfile ``` に規定されているのでこのファイルを変更する

```bash
$ vim Vagrantfile
$ cat Vagrantfile
...
config.vm.network "private_network", ip: "192.168.33.10"
...
```

private_networkの設定をしている行のコメントアウトを外すことでIP ``` 192.168.33.10 ``` でアクセス可能になる

 ``` Vagrantfile ``` の設定を変更したら ``` vagrant reload ``` コマンドで設定をリロードしてやる必要がある

```bash
$ vagrant reload
==> default: Attempting graceful shutdown of VM...
==> default: Clearing any previously set forwarded ports...
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
...
```


## 決まった操作の設定
仮想環境を立ち上げた後、Webサーバーの設定など毎回やる操作がある場合はそれらを予め記述しておいてVagrant側で実行することができる(provisioning)

まずは ``` Vagrantfile ``` に設定を追加する。設定する行は ```config.vm.provision ``` の行。

元々コメントアウトで記述があるようにインラインで ``` Vagrantfile ``` 内に直接書くこともできるが、以下のように設定することで外部ファイルに書き出すこともできる

```
config.vm.provision :shell, :path => "provision.sh"
```

```bash provision.sh
sudo yum -y install httpd
sudo service httpd start
sudo chkconfig httpd on
...
```

 ``` Vagrantfile ``` を設定したら忘れず ``` vagrant reload ```

その後provisionの実行は以下のコマンド

```bash
$ vagrant provision
```

## 参照
* [Vagrant入門](http://dotinstall.com/lessons/basic_vagrant)
