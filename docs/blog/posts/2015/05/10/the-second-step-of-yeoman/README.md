---
layout: Layout
title: "初めてのYeoman (Grunt/Bowerを使ってみる)"
slug: the-second-step-of-yeoman
date: 2015-05-10
comments: true
categories: [Yeoman, Grunt, Bower]
---

以前のエントリ [初めてのYeoman (Yoを使った雛形作成)](http://blog.sojiro.me/blog/2015/05/06/the-first-step-of-yeoman/) で ``` yo ``` を使い generator-angular-fullstack の雛形を作りました。

今回はこのとき作った雛形を Grunt を使って実際に動かしてみたいと思います。

Gruntがどんなものかはとりあえず使ってみてからと言うことで。

## Grunt のインストール

 ``` npm ``` でインストールする

```bash
$ npm install -g grunt-cli
```

インストールされたことを確認

```bash
$ grunt --version
grunt-cli v0.1.13
grunt v0.4.5
```

OK.

## Grunt / Bower の実行

インストールできたら早速 Grunt を実行してみる

今回は雛形作成時に生成された Gruntfile.js で規定されている serve タスクを実行する

```bash
$ grunt serve
Running "serve" task

Running "clean:server" (clean) task

Running "env:all" (env) task

Running "injector:sass" (injector) task
Missing option `template`, using `dest` as template instead
Injecting scss files (4 files)

Running "concurrent:server" (concurrent) task
    Warning: Running "sass:server" (sass) task
    Warning: 
    You need to have Ruby and Sass installed and in your PATH for this task to work.
    More info: https://github.com/gruntjs/grunt-contrib-sass
     Use --force to continue.
    
    Aborted due to warnings.
...
```

何やら怒られた

```
You need to have Ruby and Sass installed and in your PATH for this task to work.
```

ということだそうなので Sass をインストールする。

```bash
$ yum install rubygems
$ gem install sass
```

もう一度トライ

```bash
$ grunt serve
Running "serve" task

Running "clean:server" (clean) task

Running "env:all" (env) task

Running "injector:sass" (injector) task
Missing option `template`, using `dest` as template instead
Injecting scss files (4 files)
>> Nothing changed

Running "concurrent:server" (concurrent) task
    Warning: Error: File to import not found or unreadable: bootstrap-sass-official/vendor/assets/stylesheets/bootstrap.
           Load paths:
             /home/sojiro/yeoman/angular_fullstack/client/bower_components
             /home/sojiro/yeoman/angular_fullstack/client/app
             /home/sojiro/yeoman/angular_fullstack/client/components
            on line 4 of client/app/app.scss
      Use --trace for backtrace. Use --force to continue.
        
        Aborted due to warnings.
...
```

また怒られた

```
Warning: Error: File to import not found or unreadable: bootstrap-sass-official/vendor/assets/stylesheets/bootstrap.
```

今回のエラーはよくわからなかったので少し調べると、 Yeoman 三種の神器の三つ目、 Bower が必要らしいのでインストールする

```bash
$ npm install -g bower
$ bower -v
1.4.1
```

雛形作成時に bower.json が生成されているのでここに記述されているパッケージをインストール

```bash
$ bower install
```

そして再度実行

```bash
$ grunt serve
Running "serve" task

...

Running "open:server" (open) task
Warning: Command failed: /home/sojiro/yeoman/angular_fullstack/node_modules/open/vendor/xdg-open: line 584: xdg-mime: コマンドが見つかりません
xdg-open: no method available for opening 'http://localhost:9000'
 Use --force to continue.

Aborted due to warnings.

...
```

また怒られる

```
Warning: Command failed: /home/sojiro/yeoman/angular_fullstack/node_modules/open/vendor/xdg-open: line 584: xdg-mime: コマンドが見つかりません
```

xdg-open は引数に受け取ったものをよしなにアプリケーションを選択して開いてくれるコマンドらしい（未検証）

このコマンドが、指定されたオブジェクトを適切なアプリケーションで開くために mime タイプを取得するとき、 ``` xdg-mime ``` コマンドを使用するようである

今回は ``` xdg-open URL ``` とすることで指定したURL（localhost）をブラウザで開こうとしているようである

そもそもここで使っているサーバーはブラウザが入っていないリモートのサーバーなので、該当タスクをコメントアウトする。また、サーバーのURLもIPアドレスで指定するように設定ファイル(Gruntfile.js)を変更する。

```bash
$ vim Gruntfile.js
```

```javascript
    grunt.task.run([
      'clean:server',
      'env:all',
      'injector:sass', 
      'concurrent:server',
      'injector',
      'wiredep',
      'autoprefixer',
      'express:dev',
      'wait',
//      'open',
      'watch'
    ]);
  });
```

```javascript
    open: {
      server: {
        //url: 'http://localhost:<%= express.options.port %>'
        url: 'http://xx.xxx.xxx.xxx:<%= express.options.port %>'
      }
    },
```

そしてまたまた実行

```bash
$ grunt serve
Running "serve" task

...

Running "watch" task
Waiting...
```

動いた！！

## 雛形の動作確認

watch タスクまで問題なく進んだので早速ブラウザからアクセスしてみる

上記で Gruntfile.js に設定したアドレスにアクセスする。ポートは 9000番。

雛形アプリケーションのトップが表示された

{% img /images/angular_fullstack/top.png %}

Sign up 画面なども用意されている

{% img /images/angular_fullstack/sign_up.png %}

## つづく

今回は何も考えずに Grunt と（はからずも）Bower を使ってみた。

それぞれがどのようなツールなのか次回はまとめてみたい。

## 参照

* [Error sass when build mode product #710](https://github.com/DaftMonk/generator-angular-fullstack/issues/710)
* [yeoman, grunt, bowerで静的サイト構築（第三回）](http://zkohi.hatenablog.com/entry/2013/12/14/021639)

