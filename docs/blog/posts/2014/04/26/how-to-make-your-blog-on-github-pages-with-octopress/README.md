---
layout: Layout
title: "Github PagesとOctopressを使ったブログの作成"
slug: how-to-make-your-blog-on-github-pages-with-octopress
date: 2014-04-26
comments: true
categories: [Octopress, Github Pages]
---

## ①Octopress のインストール
### octopressリポジトリをクローン
```bash
$ cd git/
$ git clone git://github.com/imathis/octopress.git octopress
```

### Bundlerを使って必要なパッケージをインストール
```bash
$ cd octopress/
$ sudo gem install bundler
$ sudo bundle install
```

### bundle installがエラーになる
```bash
$ sudo bundle install
Fetching gem metadata from https://rubygems.org/.......
Fetching additional metadata from https://rubygems.org/..
Using rake 0.9.2.2

Gem::Installer::ExtensionBuildError: ERROR: Failed to build gem native extension.

    /System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/bin/ruby extconf.rb 
checking for main() in -lc... yes
creating Makefile

make "DESTDIR="
compiling redcloth_attributes.c
compiling redcloth_inline.c
compiling redcloth_scan.c
linking shared-object redcloth_scan.bundle
clang: error: unknown argument: '-multiply_definedsuppress' [-Wunused-command-line-argument-hard-error-in-future]
clang: note: this will be a hard error (cannot be downgraded to a warning) in the future
make: *** [redcloth_scan.bundle] Error 1


Gem files will remain installed in /Library/Ruby/Gems/2.0.0/gems/RedCloth-4.2.9 for inspection.
Results logged to /Library/Ruby/Gems/2.0.0/gems/RedCloth-4.2.9/ext/redcloth_scan/gem_make.out
An error occurred while installing RedCloth (4.2.9), and Bundler cannot continue.
Make sure that `gem install RedCloth -v '4.2.9'` succeeds before bundling.
```

Xcodeのアップデートでコンパイラが更新されたことが原因のよう

### オプションをつけてやり直し
```bash
$ sudo ARCHFLAGS=-Wno-error=unused-command-line-argument-hard-error-in-future bundle install
```

### ビルドツール、rakeをインストール
```bash
$ rake install
```

## ②GitHubにリポジトリを作成
* [username].github.io

という名前でリポジトリを作る。今回は

* sojiro14.github.io

## ③Octopressでのデプロイ
### デプロイ設定する

```
rake setup_github_pages
```

途中でリポジトリのurlを聞かれるので入力。今回は

```
git@github.com:sojiro14/sojiro14.github.io.git
```

を入力した

```bash
$ rake setup_github_pages
Enter the read/write url for your repository
(For example, 'git@github.com:your_username/your_username.github.io.git)
           or 'https://github.com/your_username/your_username.github.io')
Repository url: git@github.com:sojiro14/sojiro14.github.io.git
Added remote git@github.com:sojiro14/sojiro14.github.io.git as origin
Set origin as default remote
Master branch renamed to 'source' for committing your blog source files

・・・・（略）

 1 file changed, 1 insertion(+)
 create mode 100644 index.html
cd -

---
## Now you can deploy to git@github.com:sojiro14/sojiro14.github.io.git with `rake deploy` ##
```

### ページの作成
必要ファイルを作成
```bash
$ rake generate
## Generating Site with Jekyll
directory source/stylesheets/ 
   create source/stylesheets/screen.css 
Configuration from /Your/Octopress/Directory/git/octopress/_config.yml
Building site: source -> public
Successfully generated site: source -> public
```

deploy
```bash
$ rake deploy
## Deploying branch to Github Pages 
## Pulling any updates from Github Pages 
cd _deploy

・・・・（略）

## Github Pages deploy complete
cd -
```

### deployの確認
実際にページにアクセスして確認する
```
http://sojiro14.github.io
```
確認できればok。反映には少々(5分ほど)時間がかかる。

## ④Octopressの初期設定を変更
### _config.ymlの編集
_config.ymlファイルにてブログのタイトル、サブタイトル、筆者などを設定できる

```bash
$ vim _config.yml
```

例えばタイトル、サブタイトルは以下のように設定

```yaml
title: Sojiro's Blog
subtitle: This is nothing much.
```


設定したらdeploy。Task: gen_deployを使う
```bash
$ rake gen_deploy
```
もう一度ページにアクセスしてタイトルなどが変更されているのを確認できればok

## ⑤記事の投稿
## 記事を書く
new_postの後には記事のタイトルを指定。英数字のみ使用可
```bash
$ rake new_post["IRC-bot by HUBOT"]
mkdir -p source/_posts
Creating new post: source/_posts/2014-04-19-irc-bot-by-hubot.markdown
```

source/_posts/2014-04-19-irc-bot-by-hubot.markdownというファイルが生成されるのでそこに内容をマークダウンで記述
```bash
$ vim source/_posts/2014-04-19-irc-bot-by-hubot.markdown
```

```
---
layout: post
title: "IRC-bot by HUBOT"
date: 2014-04-19
comments: true
categories:
---
ここ以下に内容をマークダウンで書いていく
```

### 記事をデプロイ
記事を書いたらデプロイする
```bash
$ rake gen_deploy
```

記事が投稿されていることを確認できればok

## ⑥Google Analyticsを導入する
### Google AnalyticsのトラッキングIDを取得する
[Google Analyticsのサイト](http://www.google.com/intl/ja_jp/analytics/)からアカウントを作成し、

* username.github.io

のトラッキングIDを取得する

### 取得したトラッキングIDを設定
_config.ymlにトラッキングIDを設定する
```bash
$ vim _config.yml
```

場所はこちら

```yaml
# Google Analytics
google_analytics_tracking_id: XX-12345678-9
```

設定が終わったらデプロイ
```bash
$ rake gen_deploy
```
Google Analyticsのサイト上でトラッキングできていることを確認できればok

## 参考
* [Bundlerを使ったGemパッケージの管理](http://www.rubylife.jp/rails/ini/index2.html)
* [Octopress インストールがうまくいかなかったのでメモ](http://qiita.com/yonesuke/items/26ed04f3f15e269c3ed9)
* [Rakeの基本的な使い方まとめ](http://d.hatena.ne.jp/unageanu/20100829/1283069269)
* [GithubとOctopressでモダンな技術系ブログを作ってみる](http://blog.glidenote.com/blog/2011/11/07/install-octopress-on-github/)
* [OctopressでGitHub無料ブログ構築。sourceをBitbucket管理。簡単ガイド！](http://morizyun.github.io/blog/octopress-gitpage-minimum-install-guide/)
* [GitHub Pages + Octopress カスタマイズ](http://qiita.com/syui/items/07365ed24eef63602233)
* [OctopressでGoogleアナリティクスを使おう！](http://qiita.com/fakestarbaby/items/14785a63e064bb1306b9)
