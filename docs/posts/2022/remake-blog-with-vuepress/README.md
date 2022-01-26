---
layout: Layout
title: "VuePressでブログを再開するよ"
date: 2022-01-25 20:03:49+0900
comments: true
categories: [VuePress]
---

# VuePressでブログを再開するよ
びっくりすることに最後にこのブログに投稿してから4年以上が経過している。

どうやらその間にもブログをいじろうとした形跡が見つかったが何かしらの理由で断念したらしい。

おそらくその当時の自分と似たような動機（Octopressから移行したい）で Hugo に移行させようと GitHub から clone してきたら VuePress に移行しようとした痕跡が残っていて VuePress というものの存在を思い出し、Vue ベースなら扱いやすそうだと昔の自分に乗っかることにした。

## VuePress は v2 の時代
今は VuePress v2 なるものがあるらしい。特に気づいてなかったけどセットアップを進めていたら最新版の `2.0.0-beta.35` をインストールしていた。

まぁとにかく [ガイド](https://v2.vuepress.vuejs.org/) が分かりやすいので読んでいけばなんとかなる。昔の自分が何にハマったのかよくわからん。

### Archive ページを作るのがちょっと面倒い
[ここ](https://github.com/vuepress/awesome-vuepress) に VuePress 向けの theme がまとまっているけどいまいちイケてるのがない。

というかデフォルトの theme が Vue 感強くて結構良い感じなのでそのまま使う。

ただ VuePress は別にブログに特化してるわけではないので過去の記事一覧みたいなページをサクッと設定できない。

なので自分でサクッと書いてみようと思いきやしれっと「`$site.pages` はもう使えないよ」って[書いてあって](https://v2.vuepress.vuejs.org/guide/migration.html#for-plugin-authors)戦意を失う。

> For scalability concern, `$site.pages` is not available any more.

そんなわけで [vuepress-plugin-use-pages](https://github.com/monsat/vuepress-plugin-use-pages) を使わせていただきました。

## 今後は
久々にブログをいじったら色々分かりやすく便利になっていて楽しくなったのでちょくちょく投稿するかも。

あとはタグを収集できる機能が欲しいから時間があったら見てみようかな。

昔の記事をちょろっと見ると恥ずかしいこと書いてるのでこの記事もいずれ恥ずかしい記事になるでしょう。
