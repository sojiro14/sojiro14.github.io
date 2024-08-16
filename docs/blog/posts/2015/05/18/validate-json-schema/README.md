---
layout: Layout
title: "JSON Schema のバリデーション"
slug: validate-json-schema
date: 2015-05-18
comments: true
categories: [JSON Schema]
---

JSON Schema を勉強中であります。

その名の通り JSON でリソースそのものやリソースの操作まで表現できる面白いツールだと思います。

しかし、 JSON Schema は往々にして複雑になりがちで、書く量が多くなると typo も増えてきます。

そこで今回は JSON Schema のバリデーションに使えるツールをメモ程度に書いておきます。


## validate-schema コマンド

まずは ``` validate-schema ``` コマンドから。簡単なバリデーションをしてくれる。

gem の json_schema パッケージに入っているのでインストール

```bash
$ gem install json_schema
Password:
Fetching: json_schema-0.6.0.gem (100%)
Successfully installed json_schema-0.6.0
...
1 gem installed
```

インストールできたらオプションに ``` -d ``` をつけて実行

これがバリデーションに通った例
```bash
$ validate-schema -d json_schema/directory/test.json
json_schema/directory/test.json is valid.
```

バリデーションに落ちるとこうなる

```bash
$ validate-schema -d json_schema/directory/test.json
json_schema/directory/test.json: Invalid JSON. Try to validate using `jsonlint`.
```

なんと別のツールを使って確かめろということなので、以下につづく。

## jsonlint コマンド

さて、 validate-schema に jsonlint を使え、と言われたので早速インストールする

```bash
$ npm install jsonlint -g
npm http GET https://registry.npmjs.org/jsonlint
npm http 200 https://registry.npmjs.org/jsonlint
...
/usr/local/bin/jsonlint -> /usr/local/lib/node_modules/jsonlint/lib/cli.js
jsonlint@1.6.2 /usr/local/lib/node_modules/jsonlint
├── nomnom@1.8.1 (underscore@1.6.0, chalk@0.4.0)
└── JSV@4.0.2
```

インストールが完了したら早速チェック

```bash
$ jsonlint json_schema/directory/test.json
[Error: Parse error on line 20:
..."],                }            },   
----------------------^
Expecting 'STRING', got '}']
```

今度はバリデーションに落ちる理由と場所を示してくれるのですぐに修正できる


だいたいバリデーションに落ちるときは ``` , ``` のつけ過ぎが多い

これらのツールで無駄にハマる時間をなくしたいものです。

## validate-schema コマンド（再）

今回は JSON Schema 単体のチェックだったので ``` validate-schema ``` コマンドが使い勝手悪く見えるので補足

もともとは、ある JSON データが JSON Schema に則っているかのバリデーションをするツールである

```bash
$ validate-schema json_schema/check.json test.json 
test.json#/emotion: failed schema #/properties/emotion: embarrassment is not a member of ["pleasure", "anger", "sadness", "enjoyment"].
```


## 参照
* [validate-schema](https://github.com/brandur/json_schema)
* [jsonlint](https://www.npmjs.com/package/jsonlint)

