---
layout: post
title: "AWSのサーバーにWordPressをセットアップした手順"
date: 2015-02-11 23:00:35 +0900
comments: true
categories: [AWS, Linux, WordPress]
---
某WebサイトをWordPressでつくることになり、またAWSのサーバーで運用することになった。そのとき行ったAWSのサーバー上でのWordPress環境のセットアップ手順をメモしておく。

AWSでWebサーバー(EC2)を借りるところまでは完了させておく(参照:[AWSに複数のユーザーを設定した手順](http://blog.sojiro.me/blog/2014/08/22/add-users-on-aws-instance/))

## 今回やること
* Webサーバーのセットアップ
    * Apacheのインストールと設定
    * PHPのインストールと設定
* DBサーバーのセットアップ
    * RDSサーバーのセットアップ
    * セキュリティグループの設定
* WordPressのインストール


## Webサーバーのセットアップ
### Apacheをインストールする
AWSが用意しているLinuxにてサーバーを立てたので ```yum``` が使える

```bash
[ec2-user@hogehoge ~]$ sudo yum install httpd
```

### Apacheの設定をする
まずはApacheが自動で起動するように設定

```bash
[ec2-user@hogehoge ~]$ sudo chkconfig httpd on
```

次に設定ファイル(httpd.conf)を編集

```bash
[ec2-user@hogehoge ~]$ sudo cp /etc/httpd/conf/httpd.conf /etc/httpd/conf/httpd.conf.org  # バックアップをとっておく
[ec2-user@hogehoge ~]$ sudo vim /etc/httpd/conf/httpd.conf  # 編集
```

### httpd.confの編集内容
```
```

### Apacheの起動

```bash
[ec2-user@hogehoge ~]$ sudo service httpd start
```
これでブラウザからアクセスするとApacheが用意した画面が表示される

### PHPのインストール
こちらも ```yum``` で

```bash
[ec2-user@hogehoge ~]$ sudo yum install php php-devel php-mysql php-mbstring php-gd
[ec2-user@hogehoge ~]$ php -v  # インストールの確認
PHP 5.3.29 (cli) (built: Aug 20 2014 16:41:34)
Copyright (c) 1997-2014 The PHP Group
Zend Engine v2.3.0, Copyright (c) 1998-2014 Zend Technologies
```

### PHPの設定をする
設定ファイル(php.ini)を編集

```bash
[ec2-user@hogehoge ~]$ sudo cp /etc/php.ini /etc/php.ini.org  # バックアップをとっておく
[ec2-user@hogehoge ~]$ sudo vim /etc/php.ini  # 編集
```

### php.iniの編集内容
```
```

## DBサーバーのセットアップ
AWSのRDSというインスタンスを作成する


## WordPressのインストール
Webサーバーに戻ってWordPressをインストールする

```bash
[ec2-user@hogehoge ~]$ wget https://ja.wordpress.org/latest-ja.tar.gz    # 最新のWordPressをダウンロード
[ec2-user@hogehoge ~]$ ls↲
latest-ja.tar.gz↲
[ec2-user@hogehoge ~]$ sudo tar zxvf latest-ja.tar.gz -C /var/www/html/  # ダウンロードしたソースの展開
[ec2-user@hogehoge ~]$ sudo chown -R apache /var/www/html/wordpress/     # wordpress配下の所有者をapacheユーザーとする
```

### ブラウザ上でのセットアップ
ここまでくると後はブラウザ上でWordPressの設定が可能になる

Apacheを再起動して ```http://ec2-hogehoge.compute.amazonaws.com/wordpress``` にアクセスするとWordPressの設定画面が表示される

## 参照
* [AWS Amazon EC2 + Amazon RDSを使ってWordPressを構築する](http://tsuchikazu.net/aws_amazon_ec2_rds_wordpress/)
* [chkconfigまとめ](http://qiita.com/shell/items/30031862d91cedf9ceef)
