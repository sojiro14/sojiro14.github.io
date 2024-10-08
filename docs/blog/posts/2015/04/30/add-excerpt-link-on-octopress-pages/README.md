---
layout: Layout
title: "Octopressのページに「もっと見る」を設定する方法"
slug: add-excerpt-link-on-octopress-pages
date: 2015-04-30
comments: true
categories: [Octopress]
---
今回はOctopressで生成したページにいわゆる「もっと見る」リンクを設定する方法をメモします。

## 「もっと見る」の場所を指定する

記事の内容としてトップページで表示させる範囲が決まったら、その直後に「もっと見る」リンクを設置します。

設置方法は以下のコメントを記事内の「もっと見る」リンクを設置する箇所に記述するだけです。

```html
 <!-- more -->
```

「もっと見る」以降の記事内容はトップページ上では省略されます。

「もっと見る」リンクは個別記事ページにリンクしています。

## リンクの文言を変更する

上記で設定したリンクはデフォルトでは「Read on →」と表示されます。

リンクの文言は ```_config.yml``` ファイルの項目 ```excerpt_link``` で管理されています。

従って以下のように設定することでリンクの文言が「もっと見る」となります。
```
excerpt_link: "もっと見る"
```

<!-- more -->

## 参照
* [5分でできる簡単 Octopress セッティング](http://morizyun.github.io/blog/octopress-hatena-disqus-new-tab/)
