---
layout: Layout
title: "初めてのChef"
date: 2015-11-01 02:17:51 +0900
comments: true
categories: [Chef]
---

Chef を使ってみます。
Vagrant で環境をつくっておいてそこで色々試してみます。

今回はゲスト側でクックブック、レシピを作って実行してみます。

## Chef のインストール
 `vagrant ssh` で Vagrant の環境に入って Chef をインストールする

```bash
$ curl -L https://www.opscode.com/chef/install.sh | sudo bash
...
Thank you for installing Chef!
```

Chef Solo がインストールされているか確認
```bash
$ chef-solo -v
Chef: 12.5.1
```

## クックブックを作る
Chef をインストールすると `knife` というコマンドもインストールされる。
この `knife` コマンドを使ってクックブックを作る

今回は git をインストールするための git クックブックを作る

コマンドは以下のように指定する

```bash
knife cookbooks create [クックブック名]
```

今回は出力先を指定する `-o` オプションを指定

```bash
$ sudo knife cookbook create git -o /var/chef/cookbooks
```

このコマンドで git という名前のクックブックが作成され、 `/var/chef/cookbooks/git/recipes/default.rb` にレシピの雛形が作られる

## レシピの編集
レシピの雛形に git をインストールするレシピを書く

```bash
$ sudo vi /var/chef/cookbooks/git/recipes/default.rb
$ cat /var/chef/cookbooks/git/recipes/default.rb
#
# Cookbook Name:: git
# Recipe:: default
#
# Copyright 2015, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#

package "git" do
  action :install
end
```

## クックブックの実行
作成したクックブックを実行する

```bash
$ sudo chef-solo -o git
...
Compiling Cookbooks...
Converging 1 resources
Recipe: git::default
  * yum_package[git] action install
    - install version 1.7.1-3.el6_4.1 of package git

Running handlers:
Running handlers complete
Chef Client finished, 1/1 resources updated in 38 seconds
```

git がインストールされたか確認

```bash
$ git --version
git version 1.7.1
```

## Chef の特徴
### OS の違いを吸収してくれる
上記 git の例ではこちらで指定していないにも関わらず、実行した環境が CentOS であることを解釈して yum パッケージでインストールが行われた

実行された環境の OS 毎の違いを吸収してくれる

### 冪等性が担保されている
先ほどのクックブックをもう一度実行してみる

```bash
$ sudo chef-solo -o git
...
Chef Client finished, 0/1 resources updated in 07 seconds
```

今回は何もせずに正常に終了したことが分かる

Chef ではクックブックを何度実行しても、クックブックに規定された状態になる冪等性が担保されている

## 参照
* [Chef 実践入門](http://www.amazon.co.jp/gp/product/477416500X/ref=as_li_tf_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=477416500X&linkCode=as2&tag=sojiro14-22)

余談: Chef に関する記事は web 上にも色々ありますが、 Chef は用途によって様々なツール、使い方があり、基本的な用語や概念などを理解できていないと思わぬところでハマってしまいがちです。 [Chef 実践入門](http://www.amazon.co.jp/gp/product/477416500X/ref=as_li_tf_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=477416500X&linkCode=as2&tag=sojiro14-22) は Chef に関して体系的に理解できるので最初にサラッと読んでしまうのが近道だと感じました。
