---
layout: Layout
title: "Slack BotをHeroku上で動かす"
date: 2015-05-04
comments: true
categories: [Heroku]
---
[HUBOTを使ったSlack Bot作成メモ](http://blog.sojiro.me/blog/2014/12/15/slack-bot-by-hubot/)で作ったSlack Botをローカル以外の環境で動かしたくなったのでHeroku上で動かせるようにしてみます。

あらかじめ[Heroku](https://www.heroku.com)にSign upしておきます。

## Heroku Toolbelt のインストール

HerokuのCLIツールであるHeroku Toolbeltをインストールします

今回はMacを使っているのでこちらからダウンロード&インストールしました

https://toolbelt.heroku.com/osx

```bash
$ heroku version
heroku-toolbelt/3.34.0 (x86_64-darwin10.8.0) ruby/1.9.3
You have no installed plugins.
```

## コマンドラインからHerokuにログイン

HerokuにSign upしたときのIDとPasswordでコマンドライン上からHerokuにログインする

```bash
$ heroku login
Enter your Heroku credentials.
Email: sojiro@example.com
Password (typing will be hidden): 
Authentication successful.
```

## hubotのディレクトリをGitHubにpush

HerokuにはGitHubを通じてデプロイするようなのでhubotのあるディレクトリをGitHubにpushしておく

```bash
$ cd ~/git/hubot/my_slack_bot/
$ git init
$ git add .
$ git commit -m 'initial commit'
$ git remote add origin git@github.com:your_name/slack_bot_repository  # 自分で用意したslack bot用のGitリポジトリ
$ git push origin master
```

## Herokuにデプロイ

Herokuにアプリケーションを作る

このときstackにcedarを指定する。アプリケーションの名前は指定しないとHerokuが勝手に名前をつけてくれる。

```bash
$ heroku create --stack cedar
Creating random_name... done, stack is cedar-10
https://random_name.herokuapp.com/ | https://git.heroku.com/random_name.git
Git remote heroku added
updating...done. Updated to 3.35.0
```

ここまできたらいよいよデプロイ

```bash
$ git push heroku master
Counting objects: 16, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (13/13), done.
Writing objects: 100% (16/16), 6.58 KiB | 0 bytes/s, done.
Total 16 (delta 0), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
...
```

## Herokuに設定を追加

HerokuにHubotとSlackの設定を追加していく

ここでは[HUBOTを使ったSlack Bot作成メモ](http://blog.sojiro.me/blog/2014/12/15/slack-bot-by-hubot/)で払い出されたものを指定する

```bash
# HUBOT_SLACK_TOKENの設定
$ heroku config:add HUBOT_SLACK_TOKEN=xxxx-123456789-abcdefghijklmnopqrstuvwxyz
Setting config vars and restarting random_name... done, v4
HUBOT_SLACK_TOKEN: xxxx-123456789-abcdefghijklmnopqrstuvwxyz

# SlackのTeam設定
$ heroku config:add HUBOT_SLACK_TEAM=your_team_name
Setting config vars and restarting random_name... done, v5
HUBOT_SLACK_TEAM: your_team_name

# Botの名前の設定
$ heroku config:add HUBOT_SLACK_BOTNAME=your_bot_name
Setting config vars and restarting random_name... done, v6
HUBOT_SLACK_BOTNAME: your_bot_name

# HerokuアプリのURL設定
$ heroku config:add HEROKU_URL=http://random_name.herokuapp.com
Setting config vars and restarting random_name... done, v7
HEROKU_URL: http://random_name.herokuapp.com
```

## HerokuのWebプロセスの起動

最後にHerokuのWebプロセスを起動する

```bash
$ heroku ps:scale web=1
Scaling dynos... done, now running web at 1:1X.
```

SlackにBotが現れれば成功！

今回はRedisを使わなかったのでHerokuのaddon設定やクレジットカードの登録無しでいけました

## 参照
* [Hubotで西木野真姫bot作ってSlackに呼ぶ](http://memo.sanographix.net/post/88371442780)
* [GitHubがOpsツールの中心として活用しているHubotを使ってみる～インストール、スクリプトの作成、Herokuへのデプロイ～](http://tech-sketch.jp/2013/12/hubot-install-heroku.html)

