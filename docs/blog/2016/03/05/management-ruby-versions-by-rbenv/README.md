---
layout: Layout
title: "rbenv で ruby を管理する"
date: 2016-03-05 06:22:42+0900
comments: true
categories: [Ruby]
---

Ruby をバージョンごと、あるいはプロジェクトごとに管理するためのツールである rbenv の導入手順メモ


## rbenv をインストールする
### homebrew の update
```bash
$ brew update
Updated Homebrew from b369c25 to c0fae05.
...
```

### rbenv と ruby-build のインストール
 `rbenv` と同時に `ruby-build` もインストールする

 `ruby-build` は `rbenv` のプラグインで `rbenv install` コマンドを提供する

```bash
$ brew install rbenv ruby-build
==> Installing dependencies for rbenv: autoconf, pkg-config, openssl, ruby-build
...
```

## rbenv init
```bash
$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
$ source ~/.bash_profile
```

 `rbenv init -` でやっていることは以下の通り

```bash
$ rbenv init -
export PATH="/Your/Home/Directory/.rbenv/shims:${PATH}"
export RBENV_SHELL=bash
source '/usr/local/Cellar/rbenv/1.0.0/libexec/../completions/rbenv.bash'
command rbenv rehash 2>/dev/null
rbenv() {
  local command
  command="$1"
  if [ "$#" -gt 0 ]; then
    shift
  fi

  case "$command" in
  rehash|shell)
    eval "$(rbenv "sh-$command" "$@")";;
  *)
    command rbenv "$command" "$@";;
  esac
}
```

## ruby のインストール
インストールできる ruby のバージョンを確認
```bash
$ rbenv install -l
Available versions:
  1.8.6-p383
  1.8.6-p420
  1.8.7-p249
...
```

バージョン `2.2.0` をインストールする
```bash
$ rbenv install 2.2.0
Downloading ruby-2.2.0.tar.bz2...
-> https://cache.ruby-lang.org/pub/ruby/2.2/ruby-2.2.0.tar.bz2
Installing ruby-2.2.0...
...
```

インストールされたバージョンを確認
```bash
$ rbenv versions
* system (set by /My/Home/Directory/.rbenv/version)
  2.2.0
```

## 使用する ruby を設定
```bash
$ rbenv global 2.2.0
$ rbenv versions
  system
* 2.2.0 (set by /My/Home/Directory/.rbenv/version)
```

ブログを管理しているディレクトリは system ruby にしておく
```bash
$ cd git/blog/
$ rbenv local system
$ rbenv versions
* system (set by /My/Home/Directory/git/blog/.ruby-version)
  2.2.0
$ cd
$ rbenv versions
  system
* 2.2.0 (set by /My/Home/Directory/.rbenv/version)
```


## 参照
* [rbenv](https://github.com/rbenv/rbenv)
