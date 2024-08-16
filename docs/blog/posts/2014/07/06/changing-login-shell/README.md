---
layout: Layout
title: "シェルの変更について"
slug: changing-login-shell
date: 2014-07-06
comments: true
categories: [Shell]
---
さくらでレンタルサーバーを借りたが、デフォルトのシェルが使い慣れたbashではなかったので変更した際のメモ。

## 現在のシェルを確認
```csh
% echo $SHELL
/bin/csh
```

環境変数 ```$SHELL``` に現在のシェルのパスが入っている。

## 変更できるシェルの確認
```csh
% cat /etc/shells 
# $FreeBSD: release/9.1.0/etc/shells 59717 2000-04-27 21:58:46Z ache $
#
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/sh
/bin/csh
/bin/tcsh
/usr/local/bin/bash
/usr/local/bin/rbash
/usr/local/bin/zsh
/usr/local/bin/rzsh
/usr/bin/passwd
```
bashが使えることが確認できる。

## シェルを変更する
```csh
% chsh -s /usr/local/bin/bash
```

 ```chsh``` はログインシェルを変更するコマンド。 ```-s``` オプションを付けないとインタラクティブに動作する。

ログインシェルはユーザー毎に設定できるログイン時に起動されるシェルのことで、 ```/etc/passwd``` ファイルで設定されている。

 ```chsh``` はこのファイルを書き換える。

## bashの設定ファイルを書く
ログインシェルをbashに変更したら

* .bash_profile
* .bashrc

など、いつもの設定ファイルを記述する

## 再度サーバーにログイン
設定を終えて再度サーバーにログインするとbashが立ち上がる。

## メモ
```csh
% exec /usr/local/bin/bash -l
```
でbashをログインシェルとして立ち上げることもできるが設定ファイルは変わらないのでログインの度にデフォルトのシェルに戻る。

```exec``` コマンドは引数で渡された処理にプロセスを置き換える。

よって上記コマンドが実行されるとbashがログインシェルとして置き換わる。
