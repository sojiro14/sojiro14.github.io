---
layout: Layout
title: "Webからデバイスのカメラを起動する"
date: 2015-05-13 18:58:45 +0900
comments: true
categories: [HTML5, WebRTC]
---

Web からデバイスのカメラを起動してみたいと思いたち、少し調べて見たことのメモ


## 準備

以前のエントリ [Node.jsを使ってWeb Serverを作ってみました](http://blog.sojiro.me/blog/2015/01/07/making-a-web-server-with-node-dot-js/) で立てたサーバーで実験してみます

## ベースとなるコード

このコードに手を入れていきます

```javascript web.js
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<title>Hello World</title>');
    response.end();
});
server.listen(****, 'xxx.xx.x.xxx');
console.log('server listening...');
```

## コードの全体像

最終的なコードはこちら。かなり手抜きしてます

[こちら](http://python-gazo.blog.jp/html5/javascript/webcamera) を参考にさせていただきました

```javascript web_camera.js
var http = require('http');
var server = http.createServer();
var _html = (function () {/*
<!doctype html>
<html>
<head>
  <title>Web Camera</title>
  <script type="text/javascript">
function capCamera(){
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
    window.URL = window.URL || window.webkitURL;

  var video = document.getElementById("camera");
  var localStream = null;
  navigator.getUserMedia({video: true, audio: false},
  function(stream) {
    console.log(stream);
    video.src = window.URL.createObjectURL(stream);
  },
  function(err) {
    console.log(err);
  }
  );
} 
  </script>
</head>
<body>
   <input type="button"  value="Web Camera" onClick="capCamera()">
   <br>
   <video id="camera" width="640" height="480" autoplay="1" ></video>

</body>
</html>
*/}).toString().replace(/(\n)/g, '').split('*')[1];

server.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(_html);
    response.end();
});
server.listen(****, 'xxx.xx.x.xxx');
console.log('server listening...');
```

## HTML 部分

HTML の部分をみてみます

```html
<body>
   <input type="button"  value="Web Camera" onClick="capCamera()">
   <br>
   <video id="camera" width="640" height="480" autoplay="1" ></video>
</body>
```

構成はボタンと、カメラからの映像をキャプチャする範囲の2つだけ

ボタンには ``` capCamera() ``` という関数が紐づけられています

## JavaScript 部分

次に JavaScript の部分をみてみます

```javascript
function capCamera(){
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
    window.URL = window.URL || window.webkitURL;

  var video = document.getElementById("camera");
  var localStream = null;
  navigator.getUserMedia({video: true, audio: false},
  function(stream) {
    console.log(stream);
    video.src = window.URL.createObjectURL(stream);
  },
  function(err) {
    console.log(err);
  }
  );
} 
```

ここで ``` navigator ``` インターフェースの ``` getUserMedia() ``` メソッドを使用しているのがわかります

### getUserMedia の構文

```javascript
navigator.getUserMedia ( constraints, successCallback, errorCallback );
```


|引数           |必須 / オプショナル            | 説明                                                                                 |
|---------------|-------------------------------|--------------------------------------------------------------------------------------|
|constraints    |必須                           | successCallback に渡されるLocalMediaStream オブジェクトがサポートするメディアタイプ。|
|successCallback|必須                           | LocalMediaStream オブジェクトが取得できた場合、呼び出されるコールバック関数。        |
|errorCallback  |オプショナル (Firefox では必須)| 呼び出しが失敗した際に実行されるコールバック関数。最近の Firefox では必須となっています。省略された場合、 NS_ERROR_XPC_NOT_ENOUGH_ARGS error がスローされます。|

### constraints
video, audio の二つの属性に対して真偽値を指定する

### successcallback
[LocalMediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_API#LocalMediaStream) が引数として渡されるので ``` window.URL.createObjectURL() ``` メソッドにそのまま渡してオブジェクトの URL を取得する

このように取得したビデオストリームの URL を ``` video ``` の DOM に渡すことで ``` video ``` 領域にビデオを表示します

## JavaScript 内のヒアドキュメント

今回は横着して ``` web_camera.js ``` の中に HTML をすべてヒアドキュメントで記述しました JavaScript 内のヒアドキュメントに関してはちょっとしたテクニックがあるようなのでそれはまた次の機会に書こうと思います。


Web からデバイスのカメラを操作できるというのはとても面白いのですが、今回扱ったメソッドはまだまだ一部のブラウザでしかサポートされていないので、特にモバイルで使えるようになったらもっと面白くなるのに、という感想をもってこのエントリを終わります。

## 参照
* [Navigator.getUserMedia](https://developer.mozilla.org/ja/docs/Web/API/Navigator/getUserMedia)
* [WebRTCでカメラの起動とキャプチャ](http://python-gazo.blog.jp/html5/javascript/webcamera)
* [SafariでもエラーにならないJavascriptのヒアドキュメントの書き方](http://qiita.com/ampersand/items/c6c773ba7ae9115856d0)
