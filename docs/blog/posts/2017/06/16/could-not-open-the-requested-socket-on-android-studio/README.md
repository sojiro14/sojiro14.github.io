---
layout: Layout
title: "Could not open the requested socket エラーが出たら"
date: 2017-06-16
comments: true
categories: [GAE, Android Studio, Java]
---

Android Studio で GAE に乗せるアプリを開発しているとき、ローカルで立ち上げようとすると以下のようなエラーが出た

```
Could not open the requested socket: Address already in use
Try overriding --address and/or --port.
```

どうやら以前立ち上げた際のプロセスが生き残っていて邪魔しているらしい

### 以下のように対応した
Android Studio のメニューから `Run` → `Edit Configurations...` とたどり、対象 module が使っている port を確認

ポートを指定してプロセスを確認、そして `kill`

```bash
$ lsof -i:8080
COMMAND   PID    USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
java    74792  sojiro   48u  IPv6 0xXXXXXXXXXXXXXXXX      0t0  TCP *:http-alt (LISTEN)
```

```bash
$ kill -9 74792
```
