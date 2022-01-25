---
layout: Layout
title: "AWSのLinuxにMongoDBをインストール"
date: 2014-12-30 13:32:15 +0900
comments: true
categories: [MongoDB, AWS, Linux]
---
AWSで借りたサーバーにmongoDBが入っていなかったのでインストールした手順

## YUMの設定
パッケージ管理システムであるYUMにmongoDB用の設定を追加する
``` bash
$ sudo vim /etc/yum.repos.d/mongodb.repo
```
``` bash /etc/yum.repos.d/mongodb.repo 
[mongodb]
name=MongoDB Repository
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
gpgcheck=0
enabled=1
```
これでYUMにmongoDBのリポジトリが追加される

<!-- more -->

## mongoDBのインストール
今回は何も考えず最新のバージョンをインストールするので以下のコマンドで実行する
``` bash
$ sudo yum install mongodb-org
読み込んだプラグイン:priorities, update-motd, upgrade-helper
...
============================================================================================================================================================================================================
 Package                                                  アーキテクチャー                             バージョン                                       リポジトリー                                   容量
============================================================================================================================================================================================================
インストール中:
 mongodb-org                                              x86_64                                       2.6.6-1                                          mongodb                                       4.9 k
依存性関連でのインストールをします:
 mongodb-org-mongos                                       x86_64                                       2.6.6-1                                          mongodb                                       6.8 M
 mongodb-org-server                                       x86_64                                       2.6.6-1                                          mongodb                                       9.0 M
 mongodb-org-shell                                        x86_64                                       2.6.6-1                                          mongodb                                       4.3 M
 mongodb-org-tools                                        x86_64                                       2.6.6-1                                          mongodb                                        90 M

トランザクションの要約
============================================================================================================================================================================================================
インストール  1 パッケージ (+4 個の依存関係のパッケージ)

総ダウンロード容量: 110 M
インストール容量: 277 M
Is this ok [y/d/N]: y
Downloading packages:
...
完了しました!
```
## 確認
``` bash
$ mongo --version
MongoDB shell version: 2.6.6
```
インストール完了

## 参照
* [Install MongoDB on Red Hat Enterprise, CentOS, Fedora, or Amazon Linux](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-red-hat-centos-or-fedora-linux/)
* [CentOS6.5にMongoDBをインストールする](http://qiita.com/nownabe/items/123a8fd04ff5252b3036)
* [MongoDBをLinuxにインストール](http://qiita.com/ykyk1218/items/1c1824e77fb8af78bcf5)

