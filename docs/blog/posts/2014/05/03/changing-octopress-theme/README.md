---
layout: Layout
title: "Octopressのテーマを変える"
date: 2014-05-03
comments: true
categories: [Octopress]
---

Octopressのテーマを変更する

* [Octopressの公式ドキュメント](http://octopress.org/docs/theme/)

今回は既に作られ、公開されているテーマを拝借する

## 好みのテーマを探す
[3rd Party Octopress Themes](https://github.com/imathis/octopress/wiki/3rd-Party-Octopress-Themes)にテーマリストが公開されている。ここから使いたいテーマを探す。

[Octopress Themes](http://opthemes.com/)にPreviewが見やすくまとめられている

今回使用するテーマ

* [Whitespace](https://github.com/lucaslew/whitespace)

## テーマのインストール
### テーマをダウンロード
テーマ毎にclone元とclone先のpathを指定する

```bash
$ cd git/octopress
$ git clone GIT_URL .themes/THEME_NAME
```

テーマ: Whitespaceの場合

```bash
$ git clone git://github.com/lucaslew/whitespace.git .themes/whitespace
```

### テーマをインストール
テーマを指定して ```rake install```

```bash
$ rake install['THEME_NAME']
$ rake generate
```

テーマ: Whitespaceの場合

```bash
$ rake install['whitespace']
A theme is already installed, proceeding will overwrite existing files. Are you sure? [y/n] y
## Copying whitespace theme into ./source and ./sass
mkdir -p source
cp -r .themes/whitespace/source/. source
mkdir -p sass
cp -r .themes/whitespace/sass/. sass
mkdir -p source/_posts
mkdir -p public
```
テーマを上書きするか？と聞かれたので ```y``` で答える

```bash
$ rake generate
## Generating Site with Jekyll
overwrite source/stylesheets/screen.css 
Configuration from /Users/user.name/git/octopress/_config.yml
Building site: source -> public
Successfully generated site: source -> public
```

## デプロイ
テーマをインストールしたらデプロイ

```bash
$ rake deploy
```
ページにアクセスしてテーマが変更されていることを確認できればok


## テーマがアップデートされたら
テーマが開発者によってアップデートされたら手元のファイルもアップデートする

```bash
$ cd octopress/.themes/THEME_NAME
$ git pull
$ rake install['THEME_NAME']
$ rake generate
```

テーマ: Whitespaceの場合

```bash
$ cd octopress/.themes/whitespace
$ git pull
$ rake install['whitespace']
$ rake generate
```

デプロイしてアップデート完了

```bash
$ rake deploy
```
