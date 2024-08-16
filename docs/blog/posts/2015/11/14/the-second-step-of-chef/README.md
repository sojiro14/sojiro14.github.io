---
layout: Layout
title: "Chef のリモート実行"
slug: the-second-step-of-chef
date: 2015-11-14
comments: true
categories: [Chef]
---

[前回](http://blog.sojiro.me/blog/2015/11/01/the-first-step-of-chef/) 対象サーバで直接 Chef を実行してみました。

今回は手元からリモートのサーバに対して Chef を実行する仕組みを試してみます。

## knife-solo のインストール
手元のクックブックをリモートのサーバに転送して `chef-solo` コマンドを実行するまでの一連の作業を実行できる `knife-solo` コマンドをインストールする

 `knife-solo` コマンドは gem でインストールできる。手元の Mac OS でインストール

```bash
$ sudo gem install knife-solo
...
Thanks for installing knife-solo!
...
36 gems installed
```

## Berkshelf のインストール
クックブックの依存関係を管理する `Berkshelf` というツールもこのタイミングでインストールする。これは `knife-solo` が他の gem のインストール状況によってデフォルトのオプションが変わるため

```bash
$ sudo gem install berkshelf
...
25 gems installed
```

## ローカルにリポジトリを作る
まずはローカルにリポジトリを作る

Vagrantfile があるディレクトリで以下のコマンドを実行して作成する

```bash
$ knife solo init .
/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/ruby/2.0.0/rubygems/specification.rb:2007:in `raise_if_conflicts': Unable to activate rspec-3.0.0, because rspec-core-3.4.0 conflicts with rspec-core (~> 3.0.0), rspec-expectations-3.4.0 conflicts with rspec-expectations (~> 3.0.0), rspec-mocks-3.4.0 conflicts with rspec-mocks (~> 3.0.0) (Gem::LoadError)
```

エラーが発生した

rspec と rspec-core のバージョンが合っていなかったので rspec を update する

```bash
$ sudo gem update rspec
...
Gems updated: rspec rspec-collection_matchers
```

再度リポジトリの作成を実行

```bash
$ knife solo init .
WARNING: No knife configuration file found
Creating kitchen...
Creating knife.rb in kitchen...
Creating cupboards...
Setting up Berkshelf...
```

これで実行ディレクトリ内に様々な雛形ディレクトリ、ファイルが作成された

## リモートのサーバに Chef Solo をインストールする
今回リモートサーバとして想定する Vagrant の環境に対して SSH の設定を以下のようにしておく

```bash
$ vagrant ssh-config --host testhost >> ~/.ssh/config
```

以下のコマンドで Chef Solo をリモートサーバに対してインストール

```bash
$ knife solo bootstrap testhost
Bootstrapping Chef...
...
Thank you for installing Chef!
...
Chef Client finished, 0/0 resources updated in 06 seconds
```

今回は前回 Chef Solo をインストールした環境に対して打ったので最終的な結果は `0/0 resources updated` になっている

## クックブックの作成
ローカルにクックブックを作成する。今回は git をインストールするためのクックブックを作る

自作のクックブックは site-cookbooks 以下に置くことが慣例になっているので出力先に site-cookbooks を指定している

```bash
$ knife cookbook create git -o site-cookbooks
```

これで site-cookbooks 以下に git クックブックの雛形が出来上がる

## レシピの編集
レシピの雛形 `site-cookbooks/git/recipes/default.rb` を編集していく

```bash
$ vim site-cookbooks/git/recipes/default.rb
$ cat site-cookbooks/git/recipes/default.rb
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

## Node オブジェクトの編集
Chef で管理する Node （サーバ）の状態を記述し、それぞれの Node に対してどのクックブックが適用されるかを設定する Node オブジェクトを編集する

Node オブジェクトは `knife solo bootstrap testhost` 実行時に `nodes/testhost.json` として作成されている

今回はここに先ほど作成した git クックブックの適用を記述する

```bash
$ vim nodes/testhost.json
$ cat nodes/testhost.json 
{
  "run_list": [
    "recipe[git]"
  ],
  "automatic": {
    "ipaddress": "testhost"
  }
}
```

## クックブックの実行
準備が整ったのでいよいよクックブックをリモートサーバに対して実行する

以下のコマンドで実行

```bash
$ knife solo cook testhost
Running Chef on testhost...
...
Chef Client finished, 0/1 resources updated in 07 seconds
```

これも同じく前回の環境ですでに git をインストール済みなので `0/1 resources updated` として正常に実行された

これでリモートへの Chef 実行完了！

## 参照
* [Chef 実践入門](http://www.amazon.co.jp/gp/product/477416500X/ref=as_li_tf_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=477416500X&linkCode=as2&tag=sojiro14-22)

