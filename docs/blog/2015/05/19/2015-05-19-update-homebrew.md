---
layout: Layout
title: "Homebrewをupdateしよう"
date: 2015-05-19 23:39:53 +0900
comments: true
categories: [Homebrew]
---

以前の記事で Homebrew を使って Docker のもろもろをインストールしたが、実はそのときインストールされたツールのバージョンが古く、それが原因で作業が少し詰まった。

そんなときは Homebrew の update である。

## Homebrew を update する

おもむろに

```bash
$ brew update
```

新しい FORMULA 、更新された FORMULA 、削除された FORMULA の一覧が表示されて Homebrew の update が完了する

## 古いモジュールの upgrade

Homebrew を update しただけでは、すでにインストールされているモジュールは新しくならない

```bash
$ brew upgrade [FORMULA]
```

で最新バージョンに upgrade する


今後 Homebrew を使うときは参照する FORMULA のバージョンも気にしたい
