---
layout: Layout
title: "'hubot --create' は古い"
date: 2015-05-05
comments: true
categories: [Hubot, Yeoman, yo]
---
このブログで過去に何度かHubotについて書いたときに、新しいbotを作るときのコマンドは ``` hubot --create bot_name ``` だったのですが、このコマンドが非推奨になったようなのでメモ。


## hubot --create が使えない

新しいbotを作ろうとして ``` hubot --create ``` コマンドを打つと以下のように怒られた

```bash
$ hubot --create test_bot
'hubot --create' is deprecated. Use the yeoman generator instead:
    npm install -g yo generator-hubot
    mkdir -p test_bot
    yo hubot
See https://github.com/github/hubot/blob/master/docs/README.md for more details on getting started.
```

ところがseeとなっているREADMEファイルは存在しない模様...

## yo と generator-hubot とは何か

よくわからないが ``` yo ``` と ``` generator-hubot ``` をインストールしろと言われているのはわかるので調べてみる

### yo と generator-xxx

yoはYeomanというGoole社が開発した統合開発ツール群に属するツールの一つで、「雛形作成ツール」であるらしい

そしてその雛形は "generator-xxx" という形でさまざま用意されており、そのHubot版が ``` generator-hubot ``` と言う訳である

つまり上記エラーメッセージは

* 雛形作成ツールである ``` yo ``` と、Hubotの雛形である ``` generator-hubot ``` をインストールし
* 新規ディレクトリ上で ``` yo ``` を実行してHubotの雛形を作るべし

ということのようである

## yo と generator-hubot のインストール

指定された通り以下のようにインストールする

```bash
$ npm install -g yo generator-hubot
```

（余談：私の場合はNode.jsのインストールされたpathとnpmのrootが違っていたため少々上手くいかなかった。エラーメッセージは素直によく読むべきだ。。。）

## yo の実行

インストールが成功したら、新しいbotのディレクトリを作ってそこで ``` yo ``` を実行する

```bash
$ mkdir test_bot
$ cd test_bot
$ yo hubot  # これは generator-hubot の雛形を作る、という意味
```

 ``` yo hubot ``` を実行するとHubotのAAが表示され、いくつかのやり取りが立ち上がる

```bash
$ yo hubot
                     _____________________________  
                    /                             \ 
   //\              |      Extracting input for    |
  ////\    _____    |   self-replication process   |
 //////\  /_____\   \                             / 
 ======= |[^_/\_]|   /----------------------------  
  |   | _|___@@__|__                                
  +===+/  ///     \_\                               
   | |_\ /// HUBOT/\\                             
   |___/\//      /  \\                            
         \      /   +---+                            
          \____/    |   |                            
           | //|    +===+                            
            \//      |xx|                            

? Owner: sojiro
? Bot name: slack-test-bot
? Description: Slack Bot test
? Bot adapter: (campfire) slack
? Bot adapter: slack
   create bin/hubot
   create bin/hubot.cmd
   create Procfile
   create README.md
   create external-scripts.json
   create hubot-scripts.json
   create .gitignore
   create package.json
   create scripts/example.coffee
   create .editorconfig
                     _____________________________  
 _____              /                             \ 
 \    \             |   Self-replication process   |
 |    |    _____    |          complete...         |
 |__\\|   /_____\   \     Good luck with that.    / 
   |//+  |[^_/\_]|   /----------------------------  
  |   | _|___@@__|__                                
  +===+/  ///     \_\                               
   | |_\ /// HUBOT/\\                             
   |___/\//      /  \\                            
         \      /   +---+                            
          \____/    |   |                            
           | //|    +===+                            
            \//      |xx|      
...
...
```

各項目それぞれデフォルト値が設定されており、なにも入力せずEnterを押していくとその通りになる

今回はSlack用のbotだったので Bot adapter: の欄で ``` slack ``` と入力した

他にも用途に合わせてadapterが用意されているようである

この ``` yo ``` 実行により、Hubotの雛形が作成され、 ``` hubot --create ``` と同様にセットアップが完了する

なおかつadapterを予め設定できる分、セットアップが楽になっている


## 最後に

今回はHubotに絡んで偶発的に ``` yo ``` を知りましたが、かなり便利そうなのでYeoman含めて今後も使ってみたいところです


## 参照
* [Yeoman入門(第一部、yoを使う)](http://yosuke-furukawa.hatenablog.com/entry/2013/07/04/085814)

