---
layout: Layout
title: "sed コマンドで置換"
date: 2015-09-15 01:58:45 +0900
comments: true
categories: [Linux]
---

ファイルの中身を置換する必要があったので ` sed ` コマンドを使った。

### 使うオプション
今回使うのは

* 変換処理の条件式を指定するための ` e ` オプション
* 変換してそのままファイルを上書きする ` i ` オプション

### やってみる

今回はこんな感じ
```bash
sed -ie '条件式' ファイル名
```

```bash
$ cat test
testtesttest

$ sed -ie 's/test/hoge/g' test

$ cat test
hogehogehoge

$ ls
test teste
```

指定したファイルは条件に沿って置換されているが、オリジナルの内容を持ったファイルも生成されている

オリジナルの内容を持ったファイルは使う sed コマンド（OS）によって元のファイル名に 'e' が付いたり '-e' が付いたりする
