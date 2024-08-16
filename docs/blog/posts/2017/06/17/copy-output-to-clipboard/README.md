---
layout: Layout
title: "ファイルの内容を直接クリップボードに出力する"
slug: copy-output-to-clipboard
date: 2017-06-17
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
