---
layout: Layout
title: "Node.jsとnpmのインストール"
slug: install-node-js-and-npm
date: 2017-10-01
comments: true
categories: [Node.js, npm]
---

手元の Mac に Node.js と npm がインストールされていなかったのでインストールした手順

## `homebrew` を使って `nodebrew` をインストール
```bash
$ brew install nodebrew
==> Downloading https://github.com/hokaccha/nodebrew/archive/v0.9.2.tar.gz
==> Downloading from https://codeload.github.com/hokaccha/nodebrew/tar.gz/v0.9.2
######################################################################## 100.0%
==> /usr/local/Cellar/nodebrew/0.9.2/bin/nodebrew setup_dirs
==> Caveats
Add path:
  export PATH=$HOME/.nodebrew/current/bin:$PATH

To use Homebrew's directories rather than ~/.nodebrew add to your profile:
  export NODEBREW_ROOT=/usr/local/var/nodebrew

Bash completion has been installed to:
  /usr/local/etc/bash_completion.d

zsh completion has been installed to:
  /usr/local/share/zsh/site-functions
==> Summary
🍺  /usr/local/Cellar/nodebrew/0.9.2: 7 files, 34.4K, built in 2 seconds
```

`nodebrew` がインストールされたことを確認
```bash
$ nodebrew -v
nodebrew 0.9.2

Usage:
    nodebrew help                         Show this message
    nodebrew install <version>            Download and install a <version> (compile from source)
    nodebrew install-binary <version>     Download and install a <version> (binary file)
    nodebrew uninstall <version>          Uninstall a version
    nodebrew use <version>                Use <version>
    nodebrew list                         List installed versions
    nodebrew ls                           Alias for `list`
    nodebrew ls-remote                    List remote versions
    nodebrew ls-all                       List remote and installed versions
    nodebrew alias <key> <version>        Set alias to version
    nodebrew unalias <key>                Remove alias
    nodebrew clean <version> | all        Remove source file
    nodebrew selfupdate                   Update nodebrew
    nodebrew migrate-package <version>    Install global NPM packages contained in <version> to current version
    nodebrew exec <version> -- <command>  Execute <command> specified <version>

Example:
    # install from binary
    nodebrew install-binary v0.10.22

    # use a specific version number
    nodebrew use v0.10.22

    # io.js
    nodebrew install-binary io@v1.0.0
    nodebrew use io@v1.0.0
```

## インストールできる Node.js のバージョンを確認
```bash
$ nodebrew ls-remote
Unescaped left brace in regex is deprecated, passed through in regex; marked by <-- HERE in m/#{ <-- HERE release}/ at /usr/local/bin/nodebrew line 731.
v0.0.1    v0.0.2    v0.0.3    v0.0.4    v0.0.5    v0.0.6    

...

io@v3.3.0 io@v3.3.1 
```

## バージョンを指定してインストール (binary を指定したほうがインストールにかかる時間が短いようだ)
```bash
$ nodebrew install-binary v6.11.3
Unescaped left brace in regex is deprecated, passed through in regex; marked by <-- HERE in m/#{ <-- HERE platform}/ at /usr/local/bin/nodebrew line 731.
Unescaped left brace in regex is deprecated, passed through in regex; marked by <-- HERE in m/#{ <-- HERE release}/ at /usr/local/bin/nodebrew line 731.
Unescaped left brace in regex is deprecated, passed through in regex; marked by <-- HERE in m/#{ <-- HERE arch}/ at /usr/local/bin/nodebrew line 731.
Unescaped left brace in regex is deprecated, passed through in regex; marked by <-- HERE in m/#{ <-- HERE version}/ at /usr/local/bin/nodebrew line 731.
fetch: http://nodejs.org/dist/v6.11.3/node-v6.11.3-darwin-x64.tar.gz
Warning: Failed to create the file 
Warning: /Users/sojiro/.nodebrew/src/v6.11.3/node-v6.11.3-darwin-x64.tar.gz: 
Warning: No such file or directory

curl: (23) Failed writing body (0 != 792)
download faild: http://nodejs.org/dist/v6.11.3/node-v6.11.3-darwin-x64.tar.gz
```

自分でインストール先のディレクトリを作らないとダメらしい
```bash
$ mkdir -p ~/.nodebrew/src
```

再度インストール
```bash
$ nodebrew install-binary v6.11.3
Unescaped left brace in regex is deprecated, passed through in regex; marked by <-- HERE in m/#{ <-- HERE platform}/ at /usr/local/bin/nodebrew line 731.
Unescaped left brace in regex is deprecated, passed through in regex; marked by <-- HERE in m/#{ <-- HERE release}/ at /usr/local/bin/nodebrew line 731.
Unescaped left brace in regex is deprecated, passed through in regex; marked by <-- HERE in m/#{ <-- HERE version}/ at /usr/local/bin/nodebrew line 731.
Unescaped left brace in regex is deprecated, passed through in regex; marked by <-- HERE in m/#{ <-- HERE arch}/ at /usr/local/bin/nodebrew line 731.
fetch: http://nodejs.org/dist/v6.11.3/node-v6.11.3-darwin-x64.tar.gz
######################################################################## 100.0%
Install successful
```

インストールされたバージョンを確認
```bash
$ nodebrew list
v6.11.3

current: none
```

## 使うバージョンを設定
```bash
$ nodebrew use v6.11.3
use v6.11.3
```

## コマンドにパスを通す
```bash
$ echo 'export PATH=$PATH:/Users/sojiro/.nodebrew/current/bin' >> ~/.bashrc
$ source ~/.bashrc 
```

`node` 及び `npm` がインストールされたことを確認
```bash
$ node -v
v6.11.3

$ npm -v
3.10.10
```

