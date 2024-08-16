---
layout: Layout
title: "screenを使ってみる"
slug: screen-introduction
date: 2014-12-01
comments: true
categories: [screen, Shell]
---
デタッチ/アタッチという強力な機能をもった仮想端末管理アプリケーションであるscreenを使ってみた。

## screenの設定ファイルを編集する
screenの操作に使うほとんどのコマンドはプレフィックスを用いる。
このプレフィクスがデフォルトでは ```ctrl + a``` のため、Shellの行頭移動と被ってしまうので設定を編集する。

ついでに色々編集してみた。（ ```ctrl +``` を ```^``` で表す）
``` bash
escape ^j^j
startup_message off
defkanji utf-8
defencoding utf-8
encoding utf-8 utf-8
caption always "%{= wb} %-w%{=bu dr}%n %t%{-}%+w %= %{=b wk} [%l] %{=b wb}%y/%m/%d(%D) %{=b wm}%c"
autodetach on
bell_msg "^G"
defscrollback 10000
vbell off
bind n screen
bind h prev
bind j next
bind l windowlist
```

<!-- more -->

* escape
    * escape keyの設定（ここでは ```^j``` をescape keyとして登録）
* startup_message
    * 起動時に表示されるメッセージをoff
* encoding関連の設定
* caption
    * 画面下部に表示されるcaptionの設定
* autodetach
    * 起動時に自動でデタッチ（後述）
* bell_msg
    * バックグラウンドで出力されたベル文字をscreenに出力する（ ```^G``` はベル文字に置換される）
* defscrollback
    * スクロールバックバッファの行数を設定
* vbell
    * 可視ベルの設定
* windowlist
    * 全ウィンドウをリスト表示し、使用するウィンドウを選択できるようにする

## screenを立ち上げてみる
``` bash
$ screen
```
名前を付けて立ち上げる
``` bash
$ screen -t test
```
ウィンドウが複数立ち上がると用途に合わせて移動が必要になる。上記 ```.screenrc``` の設定がなされた状態で以下のように移動できる。
``` bash
$ ^j + [number]  # [number]に指定した番号のウィンドウに移動
$ ^j + h         # 1つ前のウィンドウに移動
$ ^j + j         # 1つ後のウィンドウに移動
$ ^j + l         # 表示されるウィンドウリストから移動先のウィンドウを選択
```

## ウィンドウの分割
ウィンドウを上下に分割する（縦方向の分割はscreenのバージョンを変えないといけないようなので割愛）
``` bash
$ ^j + S
```
分割された領域間の移動
``` bash
$ ^j + [tab]
```
領域の破棄
``` bash
$ ^j + X  # 現在の領域を破棄
$ ^j + Q  # 現在の領域以外の全ての領域を破棄
```

## デタッチとアタッチ
* デタッチ（detach）
    * screen上での作業をセッションという形で保存しておくこと
* アタッチ（attach）
    * デタッチによって保存されたセッションから作業に復帰すること

デタッチする
``` bash
$ ^j + d
```
セッションを確認する
``` bash
$ screen -ls
There is a screen on:
    72181.ttys010.your-pc   (Detached)
1 Socket in /var/folders/56/dlftkv4d4191qwj6r_gxs_shmspdv_/T/.screen.
```
アタッチ
``` bash
$ screen -r [session_number | session_name]
# 上の例では 72181 もしくは ttys010 を指定する
```

## 参照
* [screenコマンド一覧 3.9.13対応 ](http://www.limy.org/program/screen.html)
* [SCREEN](http://linuxjm.sourceforge.jp/html/GNU_screen/man1/screen.1.html)
* [screenのデタッチ/アタッチ](http://sixeight.hatenablog.com/entry/20090730/1248973178)
