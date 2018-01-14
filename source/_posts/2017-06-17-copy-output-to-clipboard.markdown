---
layout: post
title: "ファイルの内容を直接クリップボードに出力する"
date: 2017-06-17 08:21:23 +0900
comments: true
categories: [Linux]
---

ファイルの内容を直接クリップボードにコピーしたり、クリップボードからファイルにペーストしたいことがある。

### クリップボードにコピー
```bash
$ cat ~/Desktop/memo.text | pbcopy
```


### クリップボードからペースト
```bash
$ pbpaste > ~/Documents/memo.text
```
