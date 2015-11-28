---
layout: post
title: "CPAN モジュールのリリース"
date: 2015-07-06 02:19:14 +0900
comments: true
categories: [perl, CPAN]
---
上司にお膳立てされ、後輩にお尻を叩かれ、やっとのことで CPAN モジュールをリリースしました。

前回のエントリに続き、リリースの手順を記します。

## モジュールの作成

ここがコアの部分ですが、内容は作るモジュールに依るので割愛。編集すべきは以下のファイルです。

* lib/ 配下のプログラム
* t/ 配下のテストプラグラム
* cpanfile

cpanfile の作成は ``` scan-prereqs-cpanfile ``` を使うと便利です。

このコマンドは **App::scan_prereqs_cpanfile** モジュールで提供されています。

```bash
cpanm App::scan_prereqs_cpanfile
scan-prereqs-cpanfile > cpanfile
```

## テスト

モジュールの作成ができたら test を実行しますが、このとき ``` minil test ``` コマンドを使うと Changes や META.json、README.md が自動で編集されます。

```bash
$ minil test
Creating working directory: /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7
cp Build.PL /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/Build.PL
cp Changes /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/Changes
cp LICENSE /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/LICENSE
cp META.json /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/META.json
cp README.md /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/README.md
cp cpanfile /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/cpanfile
cp lib/JSON/MergePatch.pm /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/lib/JSON/MergePatch.pm
cp minil.toml /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/minil.toml
cp t/00_compile.t /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/t/00_compile.t
Building /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7
Retrieving meta data from lib/JSON/MergePatch.pm.
Name: JSON::MergePatch
Abstract: It's new $module
Version: 0.01
fatal: bad default revision 'HEAD'
Writing MANIFEST file
Writing release tests: xt/minilla/minimum_version.t
Writing release tests: xt/minilla/cpan_meta.t
Writing release tests: xt/minilla/pod.t
Writing release tests: xt/minilla/spelling.t
Writing release tests: xt/minilla/permissions.t
[5DuYQ9x7] $ perl -I. Build.PL
Creating new 'Build' script for 'JSON-MergePatch' version '0.01'
[5DuYQ9x7] $ perl -I. Build build
cp lib/JSON/MergePatch.pm blib/lib/JSON/MergePatch.pm
t/00_compile.t .. ok   
All tests successful.
Files=1, Tests=1,  0 wallclock secs ( 0.01 usr  0.01 sys +  0.03 cusr  0.01 csys =  0.06 CPU)
Result: PASS
Removing /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7
```

## リリース

テストが通ったらいよいよリリースします。

CPAN へのリリースには PAUSE ID が必要です。取得方法は[こちら](http://blog.sojiro.me/blog/2015/05/17/get-pause-id/)。

リリースには ``` minil release ``` コマンドを使います。

```bash
$ minil release

Release engineering requires Version::Next, but it is not available. Please install Version::Next using your preferred CPAN client at ...
```

 **Version::Next** がないと怒られたので入れて再度実行。

```bash
$ cpanm Version::Next
...

$ minil release

Release engineering requires CPAN::Uploader, but it is not available. Please install CPAN::Uploader using your preferred CPAN client at ...
```

今度は **CPAN::Uploader** がないと怒られたので入れて再度実行。

```bash
$ cpanm CPAN::Uploader
...

$ minil release

Retrieving meta data from lib/JSON/MergePatch.pm.
Name: JSON::MergePatch
Abstract: JSON Merge Patch implementation
Version: 0.01
Next Release? [0.01] 
Name: JSON::MergePatch
Abstract: JSON Merge Patch implementation
Version: 0.01
...
All tests successful.
Files=8, Tests=67,  0 wallclock secs ( 0.04 usr  0.03 sys +  0.18 cusr  0.04 csys =  0.29 CPU)
Result: PASS
Wrote JSON-MergePatch-0.01.tar.gz
Upload to CPAN
Release to CPAN ? [y/n]   y
missing user argument at
```

リリースバージョンの確認と、 CPAN にリリースするかの確認に答えていざリリース、と思いきや

```bash
missing user argument at
```

と怒られました。

どうやら ``` ~/.pause ``` ファイルに PAUSE のユーザー情報を記載する必要があるようです。

```bash
$ vim ~/.pause
$ cat ~/.pause
user SOJIRO
password your_password
```

再度実行

```bash
$ minil release

Retrieving meta data from lib/JSON/MergePatch.pm.
Name: JSON::MergePatch
Abstract: JSON Merge Patch implementation
Version: 0.01
Next Release? [0.01] 
Name: JSON::MergePatch
Abstract: JSON Merge Patch implementation
Version: 0.01
...
All tests successful.
Files=8, Tests=67,  0 wallclock secs ( 0.04 usr  0.03 sys +  0.18 cusr  0.05 csys =  0.30 CPU)
Result: PASS
Wrote JSON-MergePatch-0.01.tar.gz
Upload to CPAN
Release to CPAN ? [y/n]   y
registering upload with PAUSE web server
POSTing upload for /user/home_directory/git/cpan/JSON-MergePatch/.build/ilpDOKuE/JSON-MergePatch-0.01.tar.gz to https://pause.perl.org/pause/authenquery
PAUSE add message sent ok [200]
Name: JSON::MergePatch
Abstract: JSON Merge Patch implementation
Version: 0.01
[JSON-MergePatch] $ git commit -a -m Checking in changes prior to tagging of version 0.01.
Changelog diff is:
diff --git a/Changes b/Changes
index 643c7bc..dae7daa 100644
--- a/Changes
+++ b/Changes
@@ -2,5 +2,7 @@ Revision history for Perl extension JSON-MergePatch

 {{$NEXT}}

+0.01 2015-07-02T18:29:20Z
+
     - original version

[master 3bf0db2] Checking in changes prior to tagging of version 0.01.

 2 files changed, 17 insertions(+), 1 deletion(-)
Pushing to origin
[JSON-MergePatch] $ git push origin master
Counting objects: 7, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 831 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
To git@github.com:sojiro14/JSON-MergePatch.git

   9c8c207..3bf0db2  master -> master

[JSON-MergePatch] $ git tag 0.01
[JSON-MergePatch] $ git push origin tag 0.01
Total 0 (delta 0), reused 0 (delta 0)
To git@github.com:sojiro14/JSON-MergePatch.git

 * [new tag]         0.01 -> 0.01

Removing /user/home_directory/git/cpan/JSON-MergePatch/.build/ilpDOKuE
```

テストが実行された後、CPAN にリリースされました。最後にその時点の tag が切られて完了。

ついに CPAN モジュールをリリースしてしまいました。メンテナンスちゃんとしなくては。

## 参照

* [Minilla を用いた Perl モジュールの作り方](http://blog.64p.org/entry/2013/05/14/080423)
* [はじめてのCPAN Authorになろうとして困ったメモ](http://hotolab.net/blog/first_minil/)

