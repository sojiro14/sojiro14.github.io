---
layout: Layout
title: "HUBOTを使ったSlack Bot作成メモ"
date: 2014-12-15 03:02:30+0900
comments: true
categories: [HUBOT, Slack]
---
SlackにBotを入れたいと思い、少し調べてみたところHUBOTがやはり簡単らしいのでやってみた

## HUBOT用のAPI Tokenを取得する
まずはSlackのチームメニューからConfigure Integrationsを選択

{% img /images/slack_hubot/team_menu.png %}

様々な外部サービスとの連携メニューからHUBOTを選択する

{% img /images/slack_hubot/add_hubot.png %}

追加するbotの名前を入力

{% img /images/slack_hubot/set_botname.png %}

ここまでのステップを踏むとAPI Tokenが記されたページが表示される

そしてこの段階でbotがSlackにjoinする

{% img /images/slack_hubot/join_bot.png %}

<!-- more -->

## HUBOTの設定をする
[HUBOTを使ったirc-bot作成メモ](http://sojiro14.github.io/blog/2014/04/19/irc-bot-by-hubot/)にも記したHUBOTのセットアップを進める。

[HUBOTを使ったirc-bot作成メモ](http://sojiro14.github.io/blog/2014/04/19/irc-bot-by-hubot/)の「②HUBOTをインストールする」までを済ませておく。

新たなbotの生成
``` bash
$ hubot --create slack_sojiro_test
```
slack用のpluginをインストール
``` bash
$ cd slack_sojiro_test/
$ npm install hubot-slack --save
```
起動用スクリプトの作成。先ほど取得したAPI Tokenを使用する。
``` bash
$ vim runhubot
$ cat runhubot 
#!/bin/bash

export HUBOT_SLACK_TOKEN=xxxx-123456789-ABCDEFGHIJKLMN
export HUBOT_SLACK_TEAM=Sojiro-test
export HUBOT_SLACK_BOTNAME=test-bot

bin/hubot --adapter slack
$ chmod u+x runhubot
```
botの起動
``` bash
$ ./runhubot
```
これでSlack上のbotがHUBOTのスクリプトに沿って反応するようになったはず

## botを使ってみる
HUBOTではデフォルトでいくつかのスクリプトが用意されているので使って試してみる
### ping
生存確認

{% img /images/slack_hubot/ping.png %}
### image me
画像検索

{% img /images/slack_hubot/image_me.png %}
### animate me
アニメーション検索

{% img /images/slack_hubot/animate_me.png %}
### youtube me
動画検索

{% img /images/slack_hubot/youtube_me.png %}
### translate me
翻訳（日本語から英語）

{% img /images/slack_hubot/translate_me_1.png %}

翻訳（英語から日本語）

{% img /images/slack_hubot/translate_me_2.png %}
### map me
地図検索

{% img /images/slack_hubot/map_me.png %}

## 参照
* [HUBOTを使ったirc-bot作成メモ](http://sojiro14.github.io/blog/2014/04/19/irc-bot-by-hubot/)
* [Hubotで西木野真姫bot作ってSlackに呼ぶ](http://memo.sanographix.net/post/88371442780)
* [slackにHubotを導入(Heroku経由)](http://qiita.com/Katsumata_RYO/items/dc4543aa5827d4c3211c)
