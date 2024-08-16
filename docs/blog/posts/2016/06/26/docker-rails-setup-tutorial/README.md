---
layout: Layout
title: "DockerでRails環境を構築した手順"
slug: docker-rails-setup-tutorial
date: 2016-06-26
comments: true
categories: [Docker, Ruby on Rails]
---

2016/07/10 修正: `docker-compose.yml` と `nginx.conf` の一部を修正しました


とある経緯で Docker を使って Rails の環境をセットアップした手順です。

# setting files
まずは用意した file から。

## docker-compose.yml
``` yml docker-compose.yml
# not use datastore container now
#datastore:
#  build: Dockerfiles/datastore


mysql:
  image: mysql:5.6.26
  environment:
    MYSQL_ROOT_PASSWORD: 'pass'
  ports:
    - '3306:3306'
#  volumes_from:
#    - datastore

nginx:
  build: Dockerfiles/nginx
  ports:
    - '80:80'
#  volumes_from:
#    - datastore
  links:
    - web

web:
  build: .

  command: bundle exec unicorn -c config/unicorn.rb

#  volumes_from:
#    - datastore
  volumes:
    - .:/usr/src/app
  ports:
    - '3000:3000'
  links:
    - mysql
  environment:
    RAILS_ENV: development
    MYSQL_ROOT_PASSWORD: 'pass'
    DATABASE_URL: mysql2://root:pass@mysql:3306
    SECRET_KEY_BASE: hogehoge
```

## Dockerfile
``` dockerfile Dockerfile
FROM rails:onbuild
```

## Dockerfiles/nginx/Dockerfile
``` dockerfile Dockerfile
FROM nginx:1.7.9

COPY nginx.conf /etc/nginx/nginx.conf
```

## Dockerfiles/nginx/nginx.conf
``` bash nginx.conf
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
  worker_connections 1024; # increase if you have lots of clients
  accept_mutex off; # "on" if nginx worker_processes > 1
}

http {
  include mime.types;
  default_type application/octet-stream;
  log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

  access_log  /var/log/nginx/access.log  main;

  sendfile on;

  tcp_nopush on; # off may be better for *some* Comet/long-poll stuff
  tcp_nodelay off; # on may be better for some Comet/long-poll stuff

  gzip on;
  gzip_http_version 1.0;
  gzip_proxied any;
  gzip_min_length 500;
  gzip_disable "MSIE [1-6]\.";
  gzip_types text/plain text/html text/xml text/css
             text/comma-separated-values
             text/javascript application/x-javascript
             application/atom+xml;

  upstream app_server {
    # for UNIX domain socket setups:
    # server unix:/path/to/.unicorn.sock fail_timeout=0;

    # for TCP setups, point these to your backend servers
    # server 192.168.0.7:8080 fail_timeout=0;
    server web:3000 fail_timeout=0;
  }

  server {
    listen       80;
    server_name  localhost;
    client_max_body_size 4G;
    keepalive_timeout 5;

    # path for static files
    root /usr/your_app/home/system/public;

    try_files $uri/index.html $uri.html $uri @app;

    location @app {
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_redirect off;
      proxy_pass http://app_server;
    }

    # Rails error pages
    error_page 500 502 503 504 /500.html;
    location = /500.html {
      root /usr/your_app/home/system/public;
    }
  }
}
```

# Setup Tutorial

## Download Tools
### VirtualBox
https://www.virtualbox.org/wiki/Downloads

please install version >= 5.x

### Homebrew
http://brew.sh/index_ja.html

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Docker Tools
#### Docker
```bash
$ brew install docker
```

#### Docker Machine
```bash
$ brew install docker-machine
```

#### Docker Compose
```bash
$ brew install docker-compose
```

## Download Application
```bash
$ cd ~/path/to/workspace
$ git clone git@github.com:your/App.git your_app
$ cd your_app
```

## Setup Docker Machine
```bash
$ docker-machine create --driver virtualbox dev
...

$ docker-machine ls
NAME   ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER    ERRORS
dev    -        virtualbox   Running   tcp://192.168.99.100:2376           v1.10.0
```

```bash
$ eval "$(docker-machine env dev)"

$ echo 'eval "$(docker-machine env dev)"' >> ~/.bashrc
```

```bash
$ docker-machine start dev
...

$ docker-machine ip dev
192.168.99.100
```

## Setup Application
### Build Docker Images and Start Containers
```bash
# ~/path/to/workspace/your_app
$ docker-compose build
...

$ docker-compose up
...
```
please open another tab

### Setup DB
```bash
$ docker-compose run web rake db:create
$ docker-compose run web rake db:migrate
```

## Access Application
```bash
$ docker-machine ip dev
192.168.99.100
```
access to `192.168.99.100:3000`
