---
layout: Layout
title: "Node.jsを使ってWeb Serverを作ってみました"
date: 2015-01-07 00:55:25 +0900
comments: true
categories: [Node.js]
---
Node.jsを使って簡単なWeb Serverを作ってみた際のメモ。

今回使うNode.jsのバージョン
``` bash
$ node -v
v0.10.32
```

## Web Serverオブジェクトの準備
Node.jsにはWeb Serverの機能を備えたオブジェクトが用意されている
``` javascript
var http = require('http');
var server = http.createServer();
```
Nodeの ```http``` モジュールを読み込んだ後、 ```createServer()``` メソッドでWeb Serverオブジェクトを取得できる

<!-- more -->

## requestイベントの追加
取得したServerオブジェクトのリスナーとして、requestを受けたときに発火するrequestイベントを追加する

リスナーの追加には ```emitter.on(event, listener)``` という形式のメソッドを使う。今回はeventに ```'request'``` を指定する。
``` javascript
server.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World.');
    response.end();
});
```
ここでリスナーとして指定するコールバック関数は以下の2つの引数を受ける

* requestの内容をもつ ```http.IncomingMessage``` クラスのインスタンス
* responseの内容となる ```http.ServerResponse``` クラスのインスタンス

### response.writeHead(statusCode, [reasonPhrase], [headers])
responseのHeadを規定するメソッド

### response.write(chunk, [encoding])
responseのbodyを規定するメソッド。 ```chunk``` に文字列を指定した場合は第二引数にencodingを指定することができる。デフォルトはUTF-8。

### response.end([data], [encoding])
serverにresponseの完了を通知するメソッド。responseの終了時に必ず呼ばなければならない。

## 接続を受け入れる
ポートとホスト名を指定してWeb Serverへの接続を受け付ける
``` javascript
server.listen(1337, 'xx.xxx.xxx.xxx');
```

## コードの全体像
``` javascript web.js
var http = require('http');
var server = http.createServer();
server.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World.');
    response.end();
});
server.listen(1337, 'xx.xxx.xxx.xxx');
console.log('server listening...');  //起動時のメッセージ
```

## Web Serverの起動と確認
``` bash
$ node web.js 
server listening...
```
Web Serverを起動したらブラウザで確認する

{% img /images/nodejs/web_server/hello_world.png %}

簡単なWeb Serverの完成

## 参照
* [Node.js v0.10.35 Manual & Documentation#HTTP](http://nodejs.org/api/http.html#http_http)
* [Node.js v0.10.35 Manual & Documentation#Events](http://nodejs.org/api/events.html#events_events)
* [ドットインストール](http://dotinstall.com/lessons/basic_nodejs/26205)
