---
layout: Layout
title: "VimにおけるTABとスペースの扱いについて"
slug: tab-and-space-on-vim
date: 2014-12-26
comments: true
categories: [Vim]
---
Vimでは ```<TAB>``` やインデントについてその挙動を設定することができる。いくつか設定方法があるが、これまでこれらに関する ```.vimrc``` の設定は何も考えずにただコピペしていたので記述を見直してみた。

## tabstop
 ```tabstop``` で ```<TAB>``` にいくつのスペースを設定するか決めることができる。
``` vim
set tabstop=4
```
これで ```<TAB>``` に半角4つ分が設定される。

<!-- more -->

## ```<TAB>``` の挙動
そもそも ```<TAB>``` はどのような挙動をするのか。

何となく、指定した数の分だけ半角スペースを入れてくれるもの、と思っていたが、

正確には行頭からの文字数が```<TAB>``` に指定された半角数の倍数になるようにスペースを補完するもの、というのが正しいかもしれない。何を言っているかわからないと思うので以下で実験する。
``` vim
set tabstop=4
set list
set listchars=tab:>.,trail:_,eol:↲,extends:>,precedes:<,nbsp:%
```
実験用に上記のように ```.vimrc``` を設定しておく。
```vim sample1
>...↲
a>..↲
bb>.↲
ccc>↲
```
これは以下のように打ち込んだ結果で、 ```<TAB>``` により、それぞれの行が ```tabstop``` で設定した半角4つ分で終わるように（タブ文字により）スペースが補完されているのがわかる。

* ```<TAB>```
* a ```<TAB>```
* bb ```<TAB>```
* ccc ```<TAB>```

``` vim sample2
>...>...↲
test>...↲
sample>.↲
```
一行に半角4つ分以上の文字が打ち込まれている場合も同じく、 ```<TAB>``` はそれぞれの行が ```tabstop``` で指定した半角4つの倍数の文字数になるようにタブ文字を補完する。（この場合は一行につき半角8文字）

## smarttabとshiftwidthとsmartindent
 ```smarttab``` をONにすることで ```shiftwidth``` を設定することが可能になる。

 ```shiftwidth``` は行頭のインデントの幅を規定するもので、 ```smarttab``` が効いているときには行頭の ```<TAB>``` は ```shiftwidth``` の幅のスペース（タブ文字）を挿入する役目を果たす。

 ```smartindent``` をONにすると改行時に前の行の行末を見て自動でインデントが挿入される。例えば行末が ```{``` の場合は次の行に自動的にインデントが入る。このインデントの幅は ```shiftwidth``` で指定された幅となる。

## autoindent
 ```autoindent``` は改行時に前の行のインデントと同じ幅でインデントを挿入する。

## expandtab
 ```expandtab``` は ```<TAB>``` により挿入されるタブ文字を純粋なスペースに変換する。

上記のsample1、2を以下の設定で記述してみる。
``` vim
set expandtab
set tabstop=4
set list
set listchars=tab:>.,trail:_,eol:↲,extends:>,precedes:<,nbsp:%
```
``` vim sample1'
____↲
a___↲
bb__↲
ccc_↲
```
``` vim sample2'
________↲
test____↲
sample__↲
```
 ```expandtab``` をONにした状態で一時的にタブ文字を記述したいときは、VimをINSERTモードにした状態で以下のように打つ。
``` vim
Control-v <TAB>
```

## 参照
* [VIM wiki](http://vimwiki.net/?FrontPage)
* [:set expandtab（:set et）設定の時に、タブ文字を挿入する ](http://nanasi.jp/articles/howto/editing/et-inserttab.html)
