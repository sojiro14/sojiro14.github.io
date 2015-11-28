---
layout: post
title: "MacにNode.jsとMongoDBをインストールしたメモ"
date: 2014-12-07 18:30:01 +0900
comments: true
categories: [Node.js, MongoDB]
---
某勉強会でNode.jsとMongoDBを使うということがあったので、インストールした際のメモを残しておく。

## Homebrewのインストール
[HUBOTを使ったirc-bot作成メモ](http://sojiro14.github.io/blog/2014/04/19/irc-bot-by-hubot/)でも触れた通り、以下の方法でインストールを試みる。
``` bash
$ ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"
Whoops, the Homebrew installer has moved! Please instead run:

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Also, please ask wherever you got this link from to update it to the above.
Thanks!
```
どうやらHomebrewのインストーラーの場所があれから変わったようで、以下のパスで再度実行。

コマンドのレスポンスとして新しいパスをメッセージに残してくれるのはありがたい。
``` bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
これでHomebrewのインストールは完了したのであとはサクサク必要なものをインストールするのみ。

<!-- more -->

## Node.jsのインストール
``` bash
$ brew install node
```
これで完了。
``` bash
$ node -v
v0.10.33
```
npmもばっちり入っている
``` bash
$ npm -v
2.1.10
```

## MongoDBのインストール
これも以下を実行するだけ。
``` bash
$ brew install mongodb
```
``` bash
$ mongo --version
MongoDB shell version: 2.6.5
```
おしまい。

## 参照
* [HUBOTを使ったirc-bot作成メモ](http://sojiro14.github.io/blog/2014/04/19/irc-bot-by-hubot/)
* [Macにhomebrewを使ってmongodbをインストール](http://qiita.com/hajimeni/items/3c93fd981e92f66a20ce)
