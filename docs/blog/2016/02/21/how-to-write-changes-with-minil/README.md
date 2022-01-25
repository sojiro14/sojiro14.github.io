---
layout: Layout
title: "minil を使った Changes ファイルの更新"
date: 2016-02-21 01:24:33+0900
comments: true
categories: [Perl]
---

CPAN モジュールの bug fix を行ったので修正版をリリース。

 `minil` 様様と思いながら `minil release` コマンドを打つのだが、
いつも Changes ファイルの更新のところで、どこに何を書けば良いのだっけ？となってしまうのでここにメモしておくことにした。

## \{\{$NEXT\}\} の下に書く
今回のリリースだとこうなった

```
Revision history for Perl extension JSON-MergePatch

{\{$NEXT}}

    - (bug fix) diff() :when the same hash-refs are present in the hash values of source and target (thanks bessarabov)
    - refactoring

0.02 2015-09-13T09:08:20Z

    - use JSON::MaybeXS and fix keys arg

0.01 2015-07-02T18:29:20Z

    - original version
```

 <code>{\{$NEXT}}</code> となっているところにバージョンやら日付やらが入る。

## 参照
[Minilla チュートリアルドキュメント](http://perldoc.jp/docs/modules/Minilla-v0.6.4/lib/Minilla/Tutorial.pod#Make32a32new32build)
