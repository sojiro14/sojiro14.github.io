---
layout: Layout
title: "ステートフル ステートレスとはどういうことか"
date: 2014-09-13
comments: true
categories: [Web]
---
コンポーネント間のやり取りにはステートフル/ステートレスという考え方がある。FTPではステートフルなやり取りが、HTTPではステートレスなやり取りが採用されいるが、それぞれの特徴についてまとめてみる。

## セッション状態（アプリケーション状態）
システムにログインしてからログアウトするまでの一連の操作をセッションと呼ぶ。その一連の操作の中のそれぞれの状態をセッション状態と呼ぶ。

## ステートフル
ステートフルなやり取りではサーバーはクライアントのセッション状態を保持している。

* メリット
    * やり取りが完結に済む
    * それによりネットワークの帯域を節約できる
* デメリット
    * クライアントの状態を都度把握しておかなければいけないのでクライアントが増えると負荷も増える
    * サーバーを複数台設置する場合にはそれぞれのサーバー間でクライアントの状態を同期しなければいけない
    * これらの理由によりスケールアウトには向かない

## ステートレス
ステートレスなやり取りではサーバーはクライアントのセッション情報を保持しない。

* メリット
    * クライアントのリクエストは状態に依存せず、常にリソースに対する操作に必要十分な情報となる
    * よってサーバーが増えてもそのままのリクエストでいつも同じリソースに対する操作ができる
    * このためスケールアウトに向いている
    * また処理がクライアントの状態に依らないので処理がシンプルになる
* デメリット
    * やり取りが冗長になりがちである
    * またリソースへの操作が必要になる度にそのやり取りを繰り返す必要がある
    * これによりネットワークの帯域を消費し、処理も遅くなる
    * サーバーが状態を保持していないのでエラーが起きたときのハンドリングが複雑になりがちである

## 参考
[Webを支える技術 -HTTP、URI、HTML、そしてREST (WEB+DB PRESS plus)](http://www.amazon.co.jp/gp/product/4774142042/ref=as_li_tf_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4774142042&linkCode=as2&tag=sojiro14-22)