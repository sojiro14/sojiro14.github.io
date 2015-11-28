---
layout: post
title: "PAUSE ID の取得"
date: 2015-05-17 23:23:14 +0900
comments: true
categories: [CPAN]
---

いま私は日本の Perl シーンにおける名立たるプログラマの方々の元で仕事させていただくという大変ありがたい立場にいるのですが、常々

** OSS に対する活動が成長の大きな糧になるからチャレンジすべし **

とアドバイスを受けています。

ところが初めてその言葉を受けてから既に1年以上経とうというのに何もしていない。これは本当にいかんと思ってとにかく CAPN に貢献してみようと。

そこで調べてみると PAUSE ID なるものが必要なようなので取得までの過程をここへメモします

## PAUSE ID の取得

PAUSE は The Perl Authors Upload Server の略称で、ここから CPAN へのアップなどするよう

[ここ](http://pause.perl.org/pause/query?ACTION=request_id) から登録を開始する

各項目に入力してアカウント申請を行う

full name の欄はそれっぽい名前じゃないとはじかれるが、後から変えられる

申請を行うと、しばらくしてアカウント発行の通知が登録したメールアドレスに届く

この通知は人によって届くまでの時間にばらつきがあるようだが、今回は申請したその日のうちに来た

通知にはパスワード変更ページへのリンクと暫定のパスワードが記載されているので、登録した ID と暫定パスワードで Basic 認証を突破してパスワードを設定する

アカウントが発行されると Edit Account Info というメニューへアクセスできるようになる

ここに

> The email address [id]@cpan.org should be configured to forward mail to ...

という項目があるので、 ``` [id]@cpan.org ``` へのメールを受け取るメールアドレスを設定する

ここで設定しておかないと後々 ``` [id]@cpan.org ``` に対するメールが受け取れず不便を被るので要設定とのこと

## Gravatar の設定

Gravatar は Email アカウントにアイコンを紐づけて様々なサービスで使えるようにするサービスで、 GitHub などでも使われている

https://ja.gravatar.com/

Gravatar に PAUSE ID に紐づいたアドレスでアイコンを設定することで CPAN のアカウントへアイコンを設定することができる

```
[id]@cpan.org  # 設定するメールアドレス
```

既に Gravatar のアカウントがある場合は「メールアドレスの追加」から上記アドレスを追加すればよい

新たに Gravatar のアカウントを取得する場合は注意が必要なようである。 ``` @cpan.org ``` のメールアドレスが前項の PAUSE ID 取得の際に自分のメールアドレスへ転送されるよう設定してからでないと、メールアドレスの認証が取れず、 Gravatar のアカウント取得に失敗するようだ。

{% img /images/cpan/gravatar.png %}

Gravatar の設定が済むと PAUSE アカウントに設定したアイコンが表示されるようになる

{% img /images/cpan/sojiro.png %}


さて、アカウントは取得した。後はコードを書いて上げるだけ。

やるしかないのです。

## 参照
* [こんな僕が CPAN Author （一応） になるまで。](http://blog.livedoor.jp/sasata299/archives/51284970.html)
