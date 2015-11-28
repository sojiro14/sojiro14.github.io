---
layout: post
title: "AWSに複数のユーザーを設定した手順"
date: 2014-08-22 00:58:55 +0900
comments: true
categories: [Linux, AWS]
---
AWSでサーバーを借りて複数人で共同開発することになった。
それに伴い、借りたサーバーに各々がアクセスできるようユーザーの設定をした際の手順メモ。

## AWSでWEBサーバーを借りる
AWSのWebサーバーレンタルサービスはEC2と呼ばれる。
サーバーをレンタルするには様々あるサービス群からEC2を選択し、```Launch Instance``` ボタンを押してInstanceの立ち上げを開始する。

* AMI(Amazon Machine Image)の選択
    * 借りるマシンの種類を選ぶ。用途によって様々な種類がある（WordPressが既に設定されているものなど）
* Instance Typeの選択
    * マシンのスペックを選ぶ。メモリやストレージのサイズなど
* Instanceの詳細設定
* Storageの設定
* Instanceへのtag付け
* Security Groupの選択
    * アクセスを許可するプロトコルやIPなどを指定してその設定をグループとして扱う

上記のほとんどの設定は後から変更できる。AMIの選択がしっかりできれば問題なさそう。

最後まで完了すると秘密鍵(hogehoge.pem)が発行される。これは絶対になくしてはいけない。

## 立ち上げたInstanceに複数ユーザーを設定する
立ち上げたInstanceにアクセスする。
今回はWebサーバーとして立ち上げるのでSecurity GroupにはHTTPとSSHでのアクセスを許可するよう設定しておく。

### 秘密鍵でアクセスする
まずはInstance立ち上げ時に発行された秘密鍵でアクセスする
```bash
[sojiro@local ~]$ chmod 600 hogehoge.pem  # 秘密鍵の権限を設定（厳しすぎても甘過ぎても使えない）
[sojiro@local ~]$ ssh -i hogehoge.pem ec2-user@xx.xx.xx.xxx  # ec2-userでログイン
```
* ダウンロード直後の秘密鍵は権限が適切ではない可能性がある。その場合は600に設定する。
* ```ssh```の```-i```オプションを使って秘密鍵を指定してログイン（秘密鍵を指定しないと~/.ssh/id_rsaが使われる）
    * 最初は初期設定されているec2-userというユーザーでログインする
    * コマンドはEC2のメニューバーからInstancesページに行き、Instanceを選択してページ上部の```Connect```ボタンを押すと表示される

### ユーザーの作成
Instanceにログインできたら早速ユーザーを作成していく
```bash
[ec2-user@ip-hogehoge ~]$ sudo su -  # rootユーザーになる
[root@ip-hogehoge ~] adduser sojiro  # ユーザー(sojiro)を作成
[root@ip-hogehoge ~] passwd sojiro   # sojiroにパスワードを設定
[root@ip-hogehoge ~] vim /etc/sudoers  # sojiroに権限を設定
```
ユーザーを作り、ユーザーに権限を付与する。今回は大雑把にrootと同じことができる権限を付与。
```bash
[root@ip-hogehoge ~] cat /etc/sudors
...
root    ALL=(ALL)       ALL
sojiro  ALL=(ALL)       ALL
...
```

### 公開鍵の登録
作成したユーザーにlocalからアクセスするための公開鍵を設定する。
（鍵のペアはlocalで予め```ssh-keygen -t rsa```で作成しておく）
```bash
[root@ip-hogehoge ~] su sojiro
[sojiro@ip-hogehoge root]$ cd  # sojiroのホームディレクトリに移動
[sojiro@ip-hogehoge ~]$ mkdir .ssh
[sojiro@ip-hogehoge ~]$ vim .ssh/authorized_keys  # 公開鍵を置く（今回はlocalのid_rsa.pubをコピペした）
[sojiro@ip-hogehoge ~]$ chmod 700 .ssh
[sojiro@ip-hogehoge ~]$ chmod 600 .ssh/authorized_keys
```
* 公開鍵を置くファイルの名前は```.ssh```ディレクトリ配下の```authorized_keys```と決まっている
* ```.ssh```ディレクトリと```authorized_keys```の権限にも気をつける

### 作成したユーザーでInstanceにログインできることを確認
```bash
[sojiro@local ~]$ ssh sojiro@xx.xx.xx.xxx  # ログインできればOK
```
localのrsa鍵でログインできることを確認できれば完了。

この操作で必要なユーザーを適宜作成する。

## 参考
[新規に作成した鍵でEC2インスタンスにSSH接続する](http://d.hatena.ne.jp/torazuka/20110420/ssh)
