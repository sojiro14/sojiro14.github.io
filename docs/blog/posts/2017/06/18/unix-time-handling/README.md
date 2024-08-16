---
layout: Layout
title: "Unix timeの扱い"
slug: unix-time-handling
date: 2017-06-18
comments: true
categories: [Linux]
---

Unix time を日付及び時刻に変換したいこと、日付及び時刻を Unix time に変換したいことがある。

### Unix time からの変換
```
$ date -r 616388399
1989年 7月14日 金曜日 11時59分59秒 JST
```

### 日付からの変換
```
$ date -jf '%Y-%m-%d %H:%M:%S' '1989-07-14 11:59:59' +%s
616388399
```

