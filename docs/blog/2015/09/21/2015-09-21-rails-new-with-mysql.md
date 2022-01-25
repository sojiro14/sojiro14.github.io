---
layout: Layout
title: "Rails アプリを MySQL で作るときのメモ"
date: 2015-09-21 22:34:43 +0900
comments: true
categories: [Ruby on Rails]
---

Rails 4.0.5 のアプリを MySQL で立てるときのメモ

### rails new にオプションをつける
オプションを付けずに ` rails new ` すると SQLite で立てられてしまうので、以下のようにする。

```bash
$ rails new app_name -d mysql
```

### mysql2 のバージョンを指定
2015/09/21 時点の mysql2 は rails 上での実行時にバグを含んでいるようなのでバージョン指定する。

```ruby Gemfile
gem 'mysql2', '~> 0.3.20'
```
```bash
$ bundle install
```

### mysql のパスワード設定
 ` config/database.yml ` に mysql のパスワードを設定する。環境変数の指定は以下のようにする。
```yml config/database.yml
development:
  adapter: mysql2
  encoding: utf8
  database: app_name_development
  pool: 5
  username: root
  password: <%= ENV['MYSQLPASS'] %>
  socket: /var/lib/mysql/mysql.sock
```

### database の作成
最後に database を作って完了。
```bash
$ rake db:create
```

## 参照
* [Rails mysql2でrake db:createがエラー問題](http://qiita.com/shizuma/items/0f9660d5d46a0012eb9e)
