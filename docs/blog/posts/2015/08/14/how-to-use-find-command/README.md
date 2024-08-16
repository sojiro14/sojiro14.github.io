---
layout: Layout
title: "find コマンドの使い方"
slug: how-to-use-find-command
date: 2015-08-14
comments: true
categories: [Linux]
---

いつまでも `find` コマンドの使い方を覚えられないアホなのでメモしておく。。。


### 基本的に

```bash
find [探すディレクトリ] -name 'ファイルの条件'
```

これだけは覚えとけ、と。

### たまには

```bash
find . -name '*.swp' -ok rm {} \;
```

見つけたファイルをそのまま次のコマンドに受け渡す `-ok` オプションもたまには使えるかも知れない。

