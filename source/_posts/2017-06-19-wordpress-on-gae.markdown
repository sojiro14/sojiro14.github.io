---
layout: post
title: "WordPress on GAE"
date: 2017-06-19 00:34:42 +0900
comments: true
categories: [GAE, WordPress]
---
## GCP の事前準備
以下の準備が事前に必要。ここでは割愛。

* GCP アカウントの作成
* GCP プロジェクトの作成
* 課金の有効化
* GCS(Google Cloud Storage)に default bucket を作成
    * default bucket: `YOUR_PROJECT_NAME.appspot.com`
* Google Cloud SDK のインストール
    * https://cloud.google.com/sdk/

## Composer のインストール
Composer は PHP のパッケージ管理ツール
> Composer is strongly inspired by node's npm and ruby's bundler.

node の npm、ruby の bundler に強く影響を受けているようだ。

### 手順
PHP がインストールされていることを確認
```bash
$ php -v
PHP 5.5.38 (cli) (built: Aug 21 2016 21:48:49) 
```

[こちら](https://getcomposer.org/download/) の手順通り Composer をインストール
```bash
$ php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
$ php -r "if (hash_file('SHA384', 'composer-setup.php') === '669656bab3166a7aff8a7506b8cb2d1c292f042046c5a994c43155c0be6190fa0355160742ab2e1c88d40d5be660b410') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
$ php composer-setup.php
$ php -r "unlink('composer-setup.php');"
```

グローバルに呼び出せるようにしておく
```bash
$ mv composer.phar /usr/local/bin/composer
```

## GCS へのアクセス権限変更
作成したプロジェクトでログイン
```bash
$ gcloud auth login
$ gcloud config set project YOUR_PROJECT_NAME
```

GCS のアクセス権更新
```bash
$ gsutil defacl ch -u AllUsers:R gs://YOUR_PROJECT_NAME.appspot.com
```

## DB の setup
Cloud SQL を使うので GCP の SQL メニューへ

* `wp` という名前で MySQL のインスタンスを立てる
    * このとき第2世代を選択可
    * 日本向けがメインであればリージョンは `asia-northeast1`
    * マシンタイプは安さ重視なら `db-f1-micro` とする （このタイプで 30円/日 という印象）
    * 他の設定はお好みで...
* 立てたインスタンスに `wp` という名前のデータベースを作る
* `wp` というユーザーを作る
    * アクセス制御 → ユーザー → ユーザーアカウントを作成、とたどる

## WordPress の setup
ローカルに WordPress 構築に必要な素材を用意する
```bash
$ git clone https://github.com/GoogleCloudPlatform/php-docs-samples.git
$ cd php-docs-samples/appengine/wordpress/
$ composer install
```

setup の開始
```bash
$ php wordpress-helper.php setup
# ここでいろいろインタラクティブに聞かれるので答える
```
※ リージョンを聞かれるが、 `asia-northeast1` がない場合は適当に答えておく

### DB_HOST 設定を変更
上記手順で WordPress setup 時に適切なリージョンが指定できなかった場合には自分で一部設定を変更する
```bash
cd YOUR_PROJECT_NAME/
vim wordpress/wp-config.php
```
`/** Production login info */` 以下の `DB_HOST` を適切なリージョンを用いて変更する

## Deploy
GAE インスタンスに WordPress を deploy する
```bash
$ gcloud app deploy --promote --stop-previous-version app.yaml cron.yaml
```
最初はかなり多くのファイルを GCS にあげるのでそこそこ時間がかかる

## 参照
https://github.com/GoogleCloudPlatform/php-docs-samples/tree/master/appengine/wordpress
