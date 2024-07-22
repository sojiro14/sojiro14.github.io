---
layout: Layout
title: "HUBOTを使ったirc-bot改修メモ #1 -noticeで発言させる-"
date: 2014-07-31
comments: true
categories: [HUBOT]
---
[こちらの記事](http://sojiro14.github.io/blog/2014/04/19/irc-bot-by-hubot/)でつくったirc-botの発言をnoticeにしたい。（botの発言内容に名前やALLなどの文字列が含まれると当人にmentionが飛んでしまうため）

## HUBOT_IRC_SEND_NOTICE_MODE
環境変数 ```HUBOT_IRC_SEND_NOTICE_MODE``` を ```true``` とすれば良い

実行ファイル(runhubot)に追記

```bash
#!/bin/bash

export HUBOT_IRC_NICK="bot_kun"
export HUBOT_IRC_ROOMS="#target_channel"
export HUBOT_IRC_SERVER="irc.hogehoge.local"
export HUBOT_IRC_SEND_NOTICE_MODE=true
#export HUBOT_IRC_PASSWORD="hoge"

bin/hubot -a irc --name myhubot
```
この実行ファイルからirc-botを起動すると当該irc-botの発言はすべてnoticeとなる。

## 処理の実体
HUBOT_IRC_SEND_NOTICE_MODEフラグが立っている場合は ```bot``` オブジェクトから ```notice``` メソッドが呼ばれる。

* [フラグの確認](https://github.com/nandub/hubot-irc/blob/master/src/irc.coffee#L18)
* [noticeメソッド呼び出し](https://github.com/nandub/hubot-irc/blob/master/src/irc.coffee#L56-76)

```notice``` メソッドが呼ばれている ```bot``` オブジェクトの実体は ```new Irc.Client``` である。

* [botオブジェクトの生成](https://github.com/nandub/hubot-irc/blob/master/src/irc.coffee#L192)

参考: http://node-irc.readthedocs.org/en/latest/API.html
