---
layout: Layout
title: "Ruby on Railsで初めてアプリを作ってみる #2 -Herokuのセットアップ-"
date: 2014-11-12 12:06:23+0900
comments: true
categories: [Ruby on Rails, Heroku, Git]
---
Ruby on Railsのアプリケーション構築に適したPaaSであるHerokuのセットアップをする。

## Herokuに必要なgemのインストール
Herokuで使用するDBであるPostgreSQLと通信するための ```pg``` とHerokuで画像やスタイルシートなどの静的アセットを提供するための ```rails_12factor``` を本番（production）環境にインストールするための内容をGemfileに追記する
``` ruby
group :production do
  gem 'pg', '0.15.1'
  gem 'rails_12factor', '0.0.2'
end
```
production環境用のgemをインストールしないオプションをつけて ```bundle install``` を実行する。
これによりGemfile.lockが更新され、production環境に備えることができる。
``` bash
$ bundle install --without production
Your bundle is complete!
Gems in the group production were not installed.
Use `bundle show [gemname]` to see where a bundled gem is installed.
```
ここまでできたらgitにcommitしておく。
``` bash
$ git commit -a -m "Update Gemfile.lock for Heroku"
```
 ```git commit``` の ```-a``` は変更のあったファイルを自動で ```add``` するオプション。

## herokuコマンドが使えるようにする
まずは以下のURLからHerokuにアカウント登録をする。

https://signup.heroku.com/identity

アカウント登録が完了したら ```heroku``` コマンドをインストールする。
今回はAWSのLinux環境へのインストールなので以下のURL（ ```Heroku Toolbelt``` のStandalone）を参照して以下の手順を得る。

https://toolbelt.heroku.com/standalone

``` bash
$ wget -qO- https://toolbelt.heroku.com/install.sh | sh
This script requires superuser access to install software.
You will be prompted for your password by sudo.
[sudo] password for sojiro: 
Add the Heroku CLI to your PATH using:
$ echo 'PATH="/usr/local/heroku/bin:$PATH"' >> ~/.profile
Installation complete
```
自動で ```sudo``` をつけて実行してくれる。インストールが完了したら出力にあるようにPATHを通す。
``` bash
$ echo 'PATH="/usr/local/heroku/bin:$PATH"' >> ~/.bashrc
$ source ~/.bashrc
$ heroku version
heroku-toolbelt/3.15.2 (x86_64-linux) ruby/2.0.0
```

## Herokuのセットアップ
 ```heroku``` コマンドがインストールされたことを確認できたらコマンドラインからHerokuの認証を行う。
``` bash
$ heroku login
Enter your Heroku credentials.
Email: your.account@email.com
Password (typing will be hidden): 
Your Heroku account does not have a public ssh key uploaded.
Could not find an existing public key at ~/.ssh/id_rsa.pub
Would you like to generate one? [Yn] Y
Generating new SSH public key.
Uploading SSH public key /home/user/.ssh/id_rsa.pub... done
Authentication successful.
```
認証が完了したらHerokuのセットアップをする
``` bash
$ heroku create
Creating infinite-peak-4923... done, stack is cedar-14
https://infinite-peak-4923.herokuapp.com/ | git@heroku.com:infinite-peak-4923.git
Git remote heroku added
```
これでgitのremoteにherokuが追加される
``` bash
$ git remote -v
heroku  git@heroku.com:infinite-peak-4923.git (fetch)
heroku  git@heroku.com:infinite-peak-4923.git (push)
origin  https://github.com/sojiro14/first_app.git (fetch)
origin  https://github.com/sojiro14/first_app.git (push)
```

## Herokuへデプロイ
追加されたremoteに ```push``` をすればHerokuへのデプロイが完了
``` bash
$ git push heroku master
```

https://infinite-peak-4923.herokuapp.com/

 ```heroku create``` 時に出力された上記URL（アプリケーションごとに異なる）にアクセスするとHerokuにデプロイしたアプリケーションが確認できる。Rails 4.0ではこの時点で ```The page you were looking for doesn't exist.``` と表示されてしまう模様。

## 参照
[Ruby on Rails チュートリアル](http://railstutorial.jp)
