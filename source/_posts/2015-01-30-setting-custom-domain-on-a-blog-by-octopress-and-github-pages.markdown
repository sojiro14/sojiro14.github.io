---
layout: post
title: "Github PagesとOctopressで作ったブログに独自ドメインを設定する"
date: 2015-01-30 00:14:23 +0900
comments: true
categories: [Octopress, Github Pages, Domain]
---
本ブログをリニューアルしたついでに新しくドメインを取ってこのブログに適用してみた。

Github PagesとOctopressを使ったブログへの独自ドメイン設定のメモとして残しておく。

## やるべきこと
今回は ```blog.sojiro.me``` というサブドメインを使うことにしたので、やるべき手順は以下の2つのみ。

* DNSホストにGithub Pagesのドメインを向いたCNAMEレコードを追加する
* ブログのソースに ```CNAME``` ファイルを追加する

<!-- more -->

## CNAMEレコードとはなにか
CNAMEレコードとはDNSに用意されたレコード(ドメイン設定)の種類の一つで、
特定のドメインに対して別名を設定することができる。

今回は元々のGithub Pagesのドメインである

 ```sojiro14.github.io```

というドメインの別名として

 ```blog.sojiro.me```

というドメインを設定することで、ブラウザから```blog.sojiro.me```にアクセスした場合も内部的に名前解決して ```sojiro14.github.io``` の内容を表示できるようにする。

## CNAMEファイル
Github Pagesでは ```CNAME``` というファイルをルートディレクトリに設置することでリダイレクト処理を設定することができる

このリダイレクト処理として、 ```sojiro14.github.io``` にアクセスがあった場合に ```blog.sojiro.me``` にリダイレクトする、という設定をしておけば、さらに前述のDNS上のCNAMEレコードにより内部的にGithub Pagesの内容を見に行くことになり、常に ```blog.sojiro.me``` ドメインでブログにアクセスすることになる。

## 実施手順
DNSへのCNAMEレコードの登録よりも ```CNAME``` ファイルの設置を先に行ってしまうと、
Github Pagesの元々のドメインへのアクセスが独自ドメインにリダイレクトされた際に名前解決が上手く行かず、適切なページが表示されない、
という状態になってしまうので、

1. DNSホストにGithub Pagesのドメインを向いたCNAMEレコードを追加する
2. ブログのソースに ```CNAME``` ファイルを追加する

という順序で行う

## 実践
### CNAMEレコードの登録
今回はお名前.comでドメインを取得したのでお名前.comでのCNAMEレコード追加の手順となる

お名前Navi > ドメイン設定 > DNS関連機能の設定

から対象のドメインを選択して次へ進むと、

DNSレコード設定を利用する

という選択肢があるので、そこから以下のようにCNAMEレコードを設定する。

{% img /images/onamae/add_cname_record.png %}

通常CNAMEレコードのvalueに設定するドメインは最後に ```.``` を付ける必要があるが、お名前.comでは自動で設定してくれるので、最後の ```.``` を付ける必要はない。

また、レコードを追加後、ページ下部の確認ボタンから確認、完了の手続きを踏まないと登録されないので注意。

登録完了から反映まで10分ほどかかる。

### CNAMEファイルの設置
Octopressの管理ディレクトリにて以下の手順で設置する。

```bash
$ echo 'blog.sojiro.me' >> source/CNAME
$ rake gen_deploy
```

これで ```sojiro14.github.io``` にアクセスすると ```blog.sojiro.me``` にリダイレクトされ、 ```blog.sojiro.me``` ではGithub Pagesの内容を表示することができるようになった。


## 参照
* [Deploying to Github Pages](http://octopress.org/docs/deploying/github/)
* [CNAMEの間違った使い方](http://blog.livedoor.jp/techblog/archives/65340720.html)
