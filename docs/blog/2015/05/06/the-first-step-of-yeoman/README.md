---
layout: Layout
title: "初めてのYeoman (yoを使った雛形作成)"
date: 2015-05-06 18:55:02+0900
comments: true
categories: [Yeoman, yo]
---

前回 [‘Hubot –create’ は古い](http://blog.sojiro.me/blog/2015/05/05/hubot-create-is-now-old/) というエントリでYeomanを試してみたいと宣言したので試してみます。

Yeoman は以下の3要素で構成されているそうな

* yo: 雛形作成ツール
* Grunt: タスクランナー
* Bower: フロントエンドパッケージマネージャ

今回は前回に引き続き ``` yo ``` を使ってみたいと思います。

前提としては ``` yo ``` をインストール済みであること。

```bash
$ npm install -g yo
```

また、 ``` yo ``` は npm のバージョン2.1.0以上が推奨なので必要に応じて npm もアップデートします。

```bash
npm update -g npm
```

## generator-angular-fullstack を使ってみる
今回 ``` yo ``` で作成する雛形として generator-angular-fullstack を使ってみる

generator-angular-fullstack は MEAN なアプリケーションの雛形で、使い勝手が良いという噂


早速インストール

```bash
$ cd yeoman/angular_fullstack
$ npm install generator-angular-fullstack
```

インストールできたので実行してみる

```bash
$ yo angular-fullstack
     _-----_
    |       |
    |--(o)--|   .--------------------------.
   `---------´  |    Welcome to Yeoman,    |
    ( _´U`_ )   |   ladies and gentlemen!  |
    /___A___\   '__________________________'
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

Out of the box I create an AngularJS app with an Express server.

# Client

? What would you like to write scripts with? JavaScript
? What would you like to write markup with? HTML
? What would you like to write stylesheets with? Sass
? What Angular router would you like to use? uiRouter
? Would you like to include Bootstrap? Yes
? Would you like to include UI Bootstrap? Yes

# Server

? Would you like to use mongoDB with Mongoose for data modeling? Yes
? Would you scaffold out an authentication boilerplate? Yes
? Would you like to include additional oAuth strategies? Google, Facebook, Twitter
? Would you like to use socket.io? Yes
```

雛形作成を実行するといくつかインタラクティブに聞かれるので答える

今回は基本的に Yes と答えてみた

実行が終わると雛形ができていた

```bash
$ ls
Gruntfile.js  bower.json  client  e2e  karma.conf.js  node_modules  package.json  protractor.conf.js  server
```

## つづく
次回は ``` grunt ``` を使って実際にアプリケーションを動かしてみる

## 参照
* [YEOMANを使ってMEAN(MongoDB+Express+AngularJS+Node.js)を作成しよう](http://blog.chat.ac/yeoman%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6meanmongodbexpressangularjsnode-js%E3%82%92%E4%BD%9C%E6%88%90%E3%81%97%E3%82%88%E3%81%86/)

