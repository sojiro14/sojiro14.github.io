---
layout: Layout
title: "HTML5 Canvas #1  -Canvasを初めて使う-"
slug: html5-canvas-number-1
date: 2014-07-17
comments: true
categories: [Canvas]
---
# Canvasとは
* ブラウザ上に図形を描画するためのHTML5の仕様の一つ
* プラグインを使わずにJavaScriptベースで図形を描画することができる。
* アニメーションメソッドはないので動きをつけるためには1コマずつ描画し直す必要がある

今回はCanvasを使った図形の描画とそれを動的に消す操作をしてみる。

# 今回使う要素
* メソッド
    * getContext()
    * fillRect()
    * clearRect()
* プロパティ
    * fillStyle

## getContext()
Canvasはこのメソッドから始まる
```javascript
var targetElement = document.getElementById('target');
ctx = targetElement.getContext('2d');
```
 ```getElementById``` などでCanvasの対象となるDOM要素を取得し、その要素に対して ```getContext()``` メソッドを呼ぶ

引数は ```'2d'``` のみが認められている。（今後'3d'とかつかえるようになるかも）

 ```getContext('2d')``` で取得した ```ctx``` オブジェクトに対してメソッドやプロパティを適用していく

## fillRect()
canvas上の指定した位置に指定した大きさの長方形を描画する
```javascript
ctx.fillRect(80, 100, 40, 40);
```
 ```fillRect()``` メソッドは4つの引数を取る。

* 1つめ: 描画する長方形の左上頂点の**x座標**
* 2つめ: 描画する長方形の左上頂点の**y座標**
* 3つめ: 描画する長方形の**幅**
* 4つめ: 描画する長方形の**高さ**

上記例ではcanvasの左上頂点（原点）から

* 右方向（x軸方向）に80px
* 下方向（y軸方向）に100px

の点に左上の頂点を持つ、

* 幅40px
* 高さ40px

の長方形（正方形）を描画することになる

## clearRect()
指定された長方形を消す
```javascript
ctx.clearRect(0, 0, 200, 400);
```
 ```clearRect()``` は ```fillRect()``` 同様に4つの引数を取る

* 1つめ: 消す長方形の左上頂点の**x座標**
* 2つめ: 消す長方形の左上頂点の**y座標**
* 3つめ: 消す長方形の**幅**
* 4つめ: 消す長方形の**高さ**

よって上記例ではcanvasの原点から幅200px、高さ400pxの長方形（範囲）に渡ってクリアする

## fillStyle
オブジェクトのStyleを変更する
```javascript
ctx.fillStyle = 'rgb(255, 0, 0)';
```
主にオブジェクトの色を指定するのに使う（Canvasではデフォルトの色は黒）

指定の仕方はCSSに準拠している

上記例ではオブジェクトを赤で描画できるようになる

# サンプル
赤い正方形を描いたり消したりする
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <title>Canvas Sample1</title>
        <script type="text/javascript">
            var ctx;

            function load() {
                var targetElement = document.getElementById('target');
                ctx = targetElement.getContext('2d');
                ctx.fillStyle = 'rgb(255, 0, 0)';
            }

            function paint() {
                ctx.fillRect(80, 100, 40, 40);
            }

            function erase() {
                ctx.clearRect(0, 0, 200, 400);
            }


        </script>
    </head>
    <body onload="load()">
        <canvas id="target" style="border: 5px solid gray" width="200" height="400"></canvas>
        <input type="button" value="Paint" onclick="paint()" />
        <input type="button" value="Erase" onclick="erase()" />
    </body>
</html>
```
幅200px、高さ400pxのcanvasを用意し、そこに正方形を描くpaint関数とクリアするerase関数を定義した

## 参考資料
* [HTML5.jp Canvas](http://www.html5.jp/canvas/index.html)

