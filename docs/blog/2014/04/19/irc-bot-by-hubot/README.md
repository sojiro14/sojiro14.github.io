---
layout: Layout
title: "HUBOTを使ったirc-bot作成メモ"
date: 2014-04-19 21:05:49+0900
comments: true
categories: [HUBOT, IRC]
---

## ①HUBOTを動かすために必要な諸々のインストール
### 準備として以下をインストールする
* node.js（サーバー）
* npm（パッケージ管理コマンド）
* Redis（KVS）

### 上記をインストールするためにHomebrewのインストールから始める

```bash
$ ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"
```

これでHomebrewが入るはず

### 次にHomebrewを使ってそれぞれインストールする
まずnode.jsとnpm

```bash
$ brew install node
```

このコマンド一発でnode.jsとnpmが入るはず

```bash
$ node -v
v0.10.26
$ npm -v
1.4.6
```

### Redisもインストール

```bash
$ brew install redis
```

### Redisを起動しておく

```bash
$ redis-server &
```

## ②HUBOTをインストールする
### GitHubからリポジトリをクローンしてインストール

```bash
$ cd git/
$ git clone git://github.com/github/hubot.git
$ cd hubot/
$ npm install -g hubot coffee-script

```

### 動くか確認

```bash
$ hubot
Hubot> 
```

OK

## ③HUBOTをircと連携させる
### 自分用のHUBOTを作る

```bash
$ hubot --create myhubot
```

myhubotの部分は自由に変更可。この名前のディレクトリが作られる

### 自分用HUBOTにhubot-ircをインストール

```bash
$ cd myhubot/
$ npm install hubot-irc --save && npm install
```

### irc連携のためのスクリプトを書く

```bash
$ vim runhubot
```

中身はこんな感じ

```bash
$ cat runhubot
#!/bin/bash

export HUBOT_IRC_NICK="bot_kun"
export HUBOT_IRC_ROOMS="#target_channel"
export HUBOT_IRC_SERVER="irc.hogehoge.local"
#export HUBOT_IRC_PASSWORD="hoge"

bin/hubot -a irc --name myhubot
```

### スクリプトの実行権限追加

```bash
$ chmod u+x runhubot 
```

### 起動スクリプト実行！

```bash
$ ./runhubot &
```

### irc上でbotがいるか確認する
bot_kunがいたのでOK

## ④botにさせたいことを設定する
### HUBOTにさせたいことはscriptsディレクトリ以下にCoffeeScriptもしくはJavaScriptで記述する
最初からいくつかのスクリプトが存在するので、それを参考に書けばOK

```bash
$ vim scripts/tell_fuga.coffee
$ cat scripts/tell_fuga.coffee
module.exports = (robot) ->

	robot.hear /hoge/, (msg) ->
		msg.send "fuga"
```

### スクリプトを書いたら、再起動すると読み込んでくれる

```bash
$ ./runhubot &
```

## ⑤cronが使えるようにする
### node-cronをインストール

```bash
$ npm install cron
```

### cronを使ったスクリプトを書く

```bash
$ vim scripts/mention_hoge.coffee
```

### 今回は2時間おきに発言するスクリプトを書いてみた

```bash
$ cat scripts/mention_hoge.coffee 
cron = require('cron').CronJob
module.exports = (robot) ->
  robot.enter ->
  new cron
    cronTime: "0 0 */2 * * *"
    start: true
    timeZone: "Asia/Tokyo"
    onTick: ->
      robot.send {room: "#target_channel"}, "hoge"
```


## 参考資料
* [5分で終了。node.jsの環境構築が拍子抜けするほど簡単だったのでサンプルプログラム付きでまとめてみました【Mac編】](http://www.tettori.net/post/293/)
* [Homebrewでnode.jsとnpmをインストール](http://bulblub.com/2013/04/20/install_nodejs_with_homebrew/)
* [GitHubがOpsツールの中心として活用しているHubotを使ってみる](http://tech-sketch.jp/2013/12/hubot-install-heroku.html)
* [github社製ボットフレームワーク、hubotをIRCボットとして導入した話](http://d.hatena.ne.jp/anatoo/20120204/1328368042)
* [Redis 入門](http://mayo.hatenablog.com/entry/2013/10/15/074237)
* GitHub
    * https://github.com/nandub/hubot-irc
    * https://github.com/ncb000gt/node-cron
* [Node.jsをバックグラウンドでプロセスとして動かしたものを停止させる](http://com4tis.net/2013/05/30/node-js-background-pid-stop/)
    * →もっといい方法あるはず。。。
