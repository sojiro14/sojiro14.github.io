---
layout: Layout
title: "GAE Task Queue について"
date: 2016-08-10 21:29:29+0900
comments: true
categories: [GAE, Task Queue]
---

GAE の Task Queue についてざっくり。

具体的な実装に関しては別エントリに書こうと思います。

## Overview
* アプリケーションの処理（task）を Task Queue API に渡す（queue）ことでユーザーからのリクエスト外で非同期に処理させることができる
* task はスケーラブルな GAE の Worker モジュールによってバックグラウンドで処理される

Task Queue には以下の2つのタイプがある

### Push queues
* queue を処理する間隔をあらかじめスケジュールすることができる
* queue は GAE のモジュールへのリクエストとして処理される
* task の処理には期限がある
    * 自動的にスケーリングするモジュールで処理するものは 10 分以内
    * そうでないモジュールで処理するものは 24 時間以内

### Pull queues
* GAE は queue を処理せず、外部の Worker が queue を取得（lease）して処理する
* 外部の Worker で、どのような間隔で queue を処理するか管理する必要がある
* lease のタイミングで外部 Worker に対して queue の処理期限が渡される
* 期限内に queue の処理が完了するか、 queue が削除されない場合は同一 queue に対する他の Worker プロセスからの lease を許可する

queue の処理は非同期で行われるので task を作成したアプリケーションは処理の結果を知ることができないが、処理に失敗した場合は自動でリトライ処理が走る

## Use cases
### Push queues
* SNS メッセージアプリケーションでユーザーがメッセージを送るたびにフォロワーの更新を非同期で行う
* キャンペーン広告の送信をあらかじめスケジュールしておいて決められた時間に送る

### Pull queues
* バッチジョブに効果がある
* task に tag をつけることで外部 worker が lease する時に同じ tag がつく task をまとめて処理することができる
* 実装例としては複数のゲームのリーダーボードが典型的
    * ハイスコアの更新があるたびに game id を tag として、 score と user 名を enqueue する

## Push queue
* Push queue は GAE の Worker モジュールに HTTP リクエストで task を渡す
* このリクエストは一定の間隔で実行され、失敗すると新たなリクエストをもってリトライされる
* タスクの種類ごとにハンドラを書く必要がある
* 1つのモジュールに各種類ごとのハンドラを用意することができる
* task の種類ごとに別々のモジュールを使うこともできる

### Working with push queues
* task を作って push queue に enqueue するプログラムを書く
* task リクエストを受け取って GAE モジュールに渡すハンドラを書く
* quota を気にする必要がある

## Pull queue
* Pull queue を使うことで独自のシステムから GAE の task を処理することができる
* ここでいう独自のシステムには GAE で構成されたシステムも含まれる
* GAE アプリケーションからは `com.google.appengine.api.taskqueue` パッケージを使って task を処理できる
* その他のアプリケーションからは Task Queue REST API を使う
* Push queue では GAE がやってくれる以下の処理を自前で用意する必要がある
* アプリケーション側で worker スケールの管理をする
* アプリケーション側で処理の終わった task を削除する
* Pull queue は `queue.xml` という設定ファイルが必要

### Pull queue による task 処理の流れ
1. アプリケーションが task を lease する
2. GAE が task データを返す
3. アプリケーションが task を処理する
    1. もし lease の期限以内に処理を完了できなかった場合は再度 lease できる
    2. retry できる最大の回数はあらかじめ設定できる
    3. この回数を超えると GAE が task を削除する
4. アプリケーションは task への処理が完了したら必ずその task を削除する

## 参照
* [Task Queue Overview](https://cloud.google.com/appengine/docs/java/taskqueue/)
* [Push Queues in Java](https://cloud.google.com/appengine/docs/java/taskqueue/push/)
* [Using Pull Queues in Java](https://cloud.google.com/appengine/docs/java/taskqueue/overview-pull)
