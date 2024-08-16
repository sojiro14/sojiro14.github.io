---
layout: Layout
title: "plenv で perl を管理する"
slug: management-perl-versions-by-plenv
date: 2016-03-05
comments: true
categories: [Perl]
---

Perl をバージョンごと、あるいはプロジェクトごとに管理するためのツールである plenv の導入手順メモ

## plenv をインストールする
### homebrew の update
```bash
$ brew update
Updated Homebrew from c0fae05 to bfe20af.
No changes to formulae.
```
先ほど [rbenv をインストールする手順](http://blog.sojiro.me/blog/2016/03/05/management-ruby-versions-by-rbenv/) で同じことをやったばかりなので更新なし

### plenv と perl-build のインストール
これも [どこか](http://blog.sojiro.me/blog/2016/03/05/management-ruby-versions-by-rbenv/) で見たような手順

`perl-build` は `plenv` のプラグイン

```bash
$ brew install plenv perl-build
==> Downloading https://github.com/tokuhirom/plenv/archive/2.2.0.tar.gz
==> Downloading from https://codeload.github.com/tokuhirom/plenv/tar.gz/2.2.0
...
```

## plenv init
```bash
$ echo 'eval "$(plenv init -)"' >> ~/.bash_profile
$ source ~/.bash_profile
```

 `plenv init -` でやっていることは以下の通り

```bash
$ plenv init -
export PATH="/Your/Home/Directory/.plenv/shims:${PATH}"
export PLENV_SHELL=bash
source '/usr/local/Cellar/plenv/2.2.0/libexec/../completions/plenv.bash'

plenv() {
  local command

  command="$1"
  if [ "$#" -gt 0 ]; then
    shift
  fi

  case "$command" in
  rehash|shell)
    eval "`plenv "sh-$command" "$@"`";;
  *)
    command plenv "$command" "$@";;
  esac
}
```

## perl のインストール
インストールできる perl のバージョンを確認
```bash
$ plenv install -l
Available versions:
 5.6.0
 5.6.1-TRIAL1
 5.6.1-TRIAL2
...
```

最新の安定版であるバージョン `5.22.1` をインストールする
```bash
$ plenv install 5.22.1
Installing 5.22.1 as 5.22.1
...
```

インストールされたバージョンを確認
```bash
$ plenv versions
* system (set by /My/Home/Directory/.plenv/version)
  5.22.1
```

## 使用する perl を設定
```bash
$ plenv global 5.22.1
$ plenv versions
  system
* 5.22.1 (set by /My/Home/Directory/.plenv/version)
```

## perl に cpanm をインストールする
現在使用している perl に `cpanm` をインストールする
```bash
$ plenv install-cpanm
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   314    0   314    0     0   2078      0 --:--:-- --:--:-- --:--:--  2079
100  296k  100  296k    0     0   367k      0 --:--:-- --:--:-- --:--:-- 2135k
...
```

 `cpanm` のパスが変わっていることを確認
```bash
$ which cpanm
/My/Home/Directory/.plenv/shims/cpanm
```

## 参照
* [plenv](https://github.com/tokuhirom/plenv)
