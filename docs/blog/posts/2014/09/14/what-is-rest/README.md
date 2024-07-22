---
layout: Layout
title: "RESTとはなにか"
date: 2014-09-14
comments: true
categories: [Web]
---
APIを実装することになり、今更ながらWebのアーキテクチャスタイルであるRESTとはなにか理解するためにまとめてみた。

## Webのアーキテクチャスタイル
Webのアーキテクチャスタイルはクライアント/サーバーというスタイルを中心に、いくつかの制限（アーキテクチャ）を複合的に組み合わせたREST(Representational State Transfer)を理想としている

## RESTはどのようなスタイルなのか
RESTは以下のスタイルを複合的に組み合わせたアーキテクチャである

* クライアント/サーバー
* ステートレスサーバー
* キャッシュ
* 統一インターフェース
* 階層化システム
* コードオンデマンド

### クライアント/サーバー
WebではHTTPでクライアントとサーバーが通信する、クライアント/サーバーアーキテクチャを採用している。クライアントはサーバーにリクエストを送り、サーバーはそれに対してレスポンスを返す。

ユーザーインターフェースはクライアントに任せればよく、サーバーは処理に専念できるので様々なデバイス（PC・携帯電話・ゲーム機）に対応でき、サーバーの冗長化も容易である。

### ステートレスサーバー
ステートフル/ステートレスという考え方があるが、サーバーがステートレスなやり取りを前提としていること。

ステートフル/ステートレスに関しては以下のエントリを参照

* [ステートフル/ステートレスとはどういうことか](http://sojiro14.github.io/blog/2014/09/13/stateful-and-stateless/)

### キャッシュ
一度取得したリソースをクライアント側である程度の期間保持して使い回すこと。

* メリット
    * 同じリソースを取得するためにその都度クライアント/サーバー間で通信する必要がなくなる
    * これによりネットワークの帯域節約や処理の高速化を実現できる
* デメリット
    * 適切に制御しないと意図せず古いリソースを参照してしまうことがある
    * 特に大規模なシステムではどこで何がキャッシュされているか正確に把握するのは容易ではない

### 統一インターフェース
リソースに対する操作を統一したインターフェースで行う。

HTTP/1.1ではリソースに対するメソッドが8つのみ定義されている。このようにインターフェースを限定することで様々なコンポーネントが生まれても統一された仕様としてリソースへの操作が行われ、それぞれの独立性が保たれることで多様性を受け入れることができる。

### 階層化システム
統一インターフェースを採用することにより、クライアント/サーバー間にプロキシなどのコンポーネントを設置してもクライアントはそのままリクエストを送ることができる。

これにより大規模システムではロードバランサーを導入したり、HTTPインターフェースを持たないコンポーネントに対してHTTPインターフェースをもつサーバーを返して処理をするなどの階層化が可能となる。

このようなアーキテクチャを階層化システムと呼ぶ。

### コードオンデマンド
プログラムをサーバーからクライアントが受け取り、それをクライアント上で実行するアーキテクチャスタイル。JavaScriptやFlashがこれに該当する。

* メリット
    * サーバーと都度通信することなくクライアント側のみで処理できることが増える
    * これによりユーザーのアクションに対する処理の速度が向上する
* デメリット
    * クライアント/サーバー間でやり取りされるリソースが不明確になる
    * クライアント側の裁量が増える分、サーバーとやり取りされるリソースの内容が明確ではなくなる

## RESTful
RESTの思想に忠実に設計されていることをRESTfulである、と言う。

RESTは上記の通り分散ネットワークを効率的に、可用性・冗長性高く利用するための理論であり、Webが理想とするアーキテクチャスタイルである。

この思想に則った設計がされることで多様なシステムの中にも仕様の統一感が生まれ、Webの世界が広がったと言える。

## 参考
[Webを支える技術 -HTTP、URI、HTML、そしてREST (WEB+DB PRESS plus)](http://www.amazon.co.jp/gp/product/4774142042/ref=as_li_tf_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4774142042&linkCode=as2&tag=sojiro14-22)