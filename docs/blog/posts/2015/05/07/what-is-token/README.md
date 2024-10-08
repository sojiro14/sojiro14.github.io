---
layout: Layout
title: "「トークン」とはなにか"
slug: what-is-token
date: 2015-05-07
comments: true
categories: [Web]
---

半年以上前のある夜、大先輩エンジニアの方に隠れ家的なオシャレな大人のBarに連れて行っていただきました。

その日はそれまでに既に結構飲んでいまして、本当に恥ずかしながらそこでお話した内容のほとんどは覚えていないのですが、一つだけ鮮明に覚えているのは、

** 「トークン」ってなに？ **

と私に説明を求められたことです。なにかを答えはしたのですが、かなり曖昧な答えになっていたと思います。

さらに最悪なのは、その後その大先輩が語られた内容を覚えていないことです。これは最悪です。次の日に「トークンって結局なんでしたっけ？」などとも聞けないのでそれ以来いろいろ考えてきたことを書きます。

## トークンとはなにか
Webの開発をしているとしばしばトークンというものが登場します

* Access Token
* ID Token
* JWT(JSON Web Token)
* etc...

このトークンとはなにか、という話です

そもそもトークンなんて日本語はないのだから、トークンはトークン、という感じなのですが、あえて日本語にすると

** 「証」（しょう） **

という漢字一文字が合うのかな、と思います。

* 通行証
* 身分証
* 免許証
* etc...

## トークンの性質

これらに共通するのは

* 誰かが発行し
* 何かが書いてある

ということではないでしょうか

特に「何かが書いてある」、という部分は様々な内容を持ち得ます

* 通行証には、ある場所を通ること、ある場所に到達することを許可する旨が書かれています
* 身分証には、それを持っている人が誰なのか、それを示す内容が書かれています
* 免許証には、誰に何をすることを許可するのかが書かれています

このように考えると「トークン」という言葉がしっくりくるのでは、と現在思っております。


