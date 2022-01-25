---
layout: Layout
title: "CPAN モジュールのための雛形を作る"
date: 2015-07-02 00:13:24+0900
comments: true
categories: [perl, CPAN]
---
いよいよ CPAN モジュールを作ろうと思います。

しかし既存の CPAN モジュールを見てみると本体のプログラムの他に見慣れないファイルがちらほら。。。

正直どんなファイル群で CPAN モジュールを構成すれば良いのか分かっていないわけです。

そんな悩みを解決してくれたのが **Minilla** モジュールです。


## Minilla のインストール

 **Minilla** は CPAN モジュールなので ``` cpanm ``` コマンドでインストールできます。

```bash
$ cpanm Minilla
--> Working on Minilla
Fetching http://cpan.metacpan.org/authors/id/T/TO/TOKUHIROM/Minilla-v2.4.1.tar.gz ... OK
Configuring Minilla-v2.4.1 ... OK
...
Building and testing Minilla-v2.4.1 ... OK
Successfully installed Minilla-v2.4.1
11 distributions installed
```

## 雛形の作成

 **Minilla** がインストールできたら早速 CPAN モジュールの雛形を作ります。 ``` minil new Your::Module ``` で作成できます。

今回は **JSON::MergePatch** というモジュールを作ります。

```bash
$cd ~/git/cpan
$ minil new JSON::MergePatch
Writing lib/JSON/MergePatch.pm
Writing Changes
Writing t/00_compile.t
Writing .travis.yml
Writing .gitignore
Writing LICENSE
Writing cpanfile
Initializing git JSON::MergePatch
[JSON-MergePatch] $ git init
Initialized empty Git repository in /user/home_directory/git/cpan/JSON-MergePatch/.git/
Retrieving meta data from lib/JSON/MergePatch.pm.
Name: JSON::MergePatch
Abstract: It's new $module
Version: 0.01
fatal: bad default revision 'HEAD'
[JSON-MergePatch] $ git add .
Finished to create JSON::MergePatch
```

これで雛形ができました。

そしてこれから雛形を編集していくわけですが、自分で編集するのは基本的に以下のファイルのみです。

* lib/ 配下のプログラム
* t/ 配下のテストプラグラム
* cpanfile

以下のファイルはそれぞれ ``` minil hoge ``` コマンド実行時に自動で編集されます。

* Changes: リリース時に更新される
* META.json: cpanfile に合わせて更新される
* README.md: lib/Your/Module.pm の記述から更新される

## つづく

次回はいよいよ CPAN へ公開する際の手順を書こうと思います。

## 参照

* [Minilla を用いた Perl モジュールの作り方](http://blog.64p.org/entry/2013/05/14/080423)

