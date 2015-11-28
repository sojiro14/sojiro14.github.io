---
layout: post
title: "初めてのDocker"
date: 2015-05-15 00:05:00 +0900
comments: true
categories: [Docker]
---



```bash
$ brew install docker
==> Downloading https://downloads.sf.net/project/machomebrew/Bottles/docker-1.1.0.mavericks.bottle.tar.gz
######################################################################## 100.0%
==> Pouring docker-1.1.0.mavericks.bottle.tar.gz
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d

zsh completion has been installed to:
  /usr/local/share/zsh/site-functions
==> Summary
🍺  /usr/local/Cellar/docker/1.1.0: 9 files, 9.8M
```

```bash
$ curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   406    0   406    0     0    399      0 --:--:--  0:00:01 --:--:--   400
100 4053k  100 4053k    0     0   645k      0  0:00:06  0:00:06 --:--:--  880k

$ chmod +x /usr/local/bin/docker-compose
```


```bash
$ brew install boot2docker
==> Downloading https://downloads.sf.net/project/machomebrew/Bottles/boot2docker-1.1.0.mavericks.bottle.tar.gz
######################################################################## 100.0%
==> Pouring boot2docker-1.1.0.mavericks.bottle.tar.gz
🍺  /usr/local/Cellar/boot2docker/1.1.0: 2 files, 7.0M
```

## 参照
* [Docker](http://docs.docker.com/compose/install/)

