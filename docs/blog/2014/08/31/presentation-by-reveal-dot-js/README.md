---
layout: Layout
title: "reveal.jsを使ったプレゼンテーションの作成"
date: 2014-08-31 19:17:21 +0900
comments: true
categories: [reveal.js]
---
[YAPC::Asia 2014](http://yapcasia.org/2014/)のLTに登壇させていただいた。その際、サクッとオシャレなプレゼンテーションを作ることができるということでreveal.jsを使って作ったのでメモ。

* [実際のプレゼンテーション](http://sojiro14.github.io/presentation/2014/08/30/YAPC-Asia-LT/)（一部の画像を削除したもの）

## reveal.jsとは
htmlやmarkdown形式で簡単にリッチなプレゼンテーションを書くことができるjsやcssを中心としたライブラリ

* [reveal.jsの実体](https://github.com/hakimel/reveal.js/)
* [本家Demo](http://lab.hakim.se/reveal-js/#/)

## reveal.jsの入手
[GitHubのreveal.jsリポジトリ](https://github.com/hakimel/reveal.js)からzipをダウンロードする。右下の```Download ZIP```ボタンを押すだけで完了。

## プレゼンテーションの作成
基本的に``` index.html ```を編集していく。特に以下の部分を編集していけば良い。

```html
<div class="slides">
<!---...
ここを編集
...-->
</div>
```
デフォルトでは[本家Demo](http://lab.hakim.se/reveal-js/#/)の仕様となっている。

## ページの追加
 ``` <section></section> ```タグを追加することで新しいページを追加することができる。新しいページは右側に追加されていく。

さらに``` <section></section> ```タグの中に``` <section></section> ```タグをネストすることで、縦方向にスライドを追加することができる。

## スライドの動きの設定
 ``` <section> ```タグに``` data-transition ```や``` data-background-transition ```を指定することでスライドの動きを設定できる。

デフォルトではスライドが回転するように動いていくが、例えば以下のように設定することで横方向にスライドが流れるようになる。

```html
<section data-transition="linear" data-background-transition="slide">
```
* data-transition
    * スライドに載っているコンテンツの動きを指定
* data-background-transition
    * スライド自体の動きを指定

## 背景の設定
 ``` <section> ```タグに```data-background```を指定することでスライドの背景を設定できる。

```html
<section data-background="#000000">  <!--背景色を指定-->
<section data-background="img.jpg">  <!--背景画像をパスで指定-->
```

## コードブロックを設定
コードブロックを挿入するには```<pre><code></code></pre>```タグを挿入する。

 ``` <code> ```タグのclassに言語を指定することで適切なハイライトが適用される。

```html
<section>
    <pre><code class="html">
        <body>
            <div class="example">
                test
            </div>
        </body>
    </code></pre>
</section>
```

## スライド内コンテンツの動きの設定
スライドのページ内でいくつかの動きを設定したいときは

* ```section```タグのidに``` fragments ```を指定する。
* ページ内のコンテンツのclassに``` fragment ```を指定する。

```html
<section id="fragments">
    <h2>example</h2>
    <ol>
        <li class="fragment">test1</li>
        <li class="fragment">test2</li>
        <li class="fragment">test3</li>
    </ol>
</section>
```
上記のように設定するとリストの要素が一つずつ出現する。

 ``` fragment ```classにはオプションを設定することができ、オプションによって動作をが変わる。

* ```class="fragment current-visible"```: 要素が出現する（デフォルト）
* ```class="fragment grow"```: 要素が大きくなる
* ```class="fragment shrink"```: 要素が小さくなる
* ```class="fragment roll-in"```: 要素が回転しながら出現
* ```class="fragment fade-out"```: 要素が消える
* ```class="fragment highlight-green"```: 要素が指定した色になる(red, blueなども指定可能)
* ```class="fragment highlight-current-blue"```: 要素が指定した色で出現する(red, greenなども指定可能)

## マークダウンでの記述
reveal.jsではプレゼンテーションをマークダウンで記述することもできる

* ``` section ```タグに``` data-markdown ```を指定
* ``` <script type="text/template"></script> ```ブロック内に記述

```html
<section data-markdown>
<script type="text/template">
    # ここにmarkdown形式で記述
    ```
    echo "you can also write code.";
    ````
</script>
</section>
```
コードブロック内でも``` </script> ```タグが出現するとマークダウンの終了と誤解されるので注意

## 参考
* [GitHub](https://github.com/hakimel/reveal.js)
* [Reveal.js、Markdown、Githubでスライドを作成する。](http://qiita.com/budougumi0617/items/19b19019bbe01f86e251)
* [なんかかっこいいプレゼンテーションテンプレートを探しているならreveal.js使ってみろって](http://qiita.com/ryurock/items/9c6de36b9d6a716e7992)
