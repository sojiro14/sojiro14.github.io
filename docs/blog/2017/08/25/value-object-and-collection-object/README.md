---
layout: Layout
title: "値オブジェクトとコレクションオブジェクト"
date: 2017-08-25 18:07:57+0900
comments: true
categories: [OOP, Java]
---
某先輩の書評を読んで気になったので 『[現場で役立つシステム設計の原則](http://amzn.to/2vpxmgg)』 という本を読んだ。

とあるプロジェクトでその先輩に自分の書くコードについて色々ご指摘をいただいていたタイミングであり、自分としてはかなり参考になった点があるので備忘も兼ねて書いてみる。

今回は特に「値オブジェクト」と「コレクションオブジェクト（ファーストクラスコレクション）」について。

## 値オブジェクト
値オブジェクトはアプリケーションに登場する様々な値に対してその値を扱うための専用クラスを作るという考え方。

### 値ごとにクラスを定義する
値オブジェクトの考え方をルール化すると、「プリミティブ型や `String` 型は使わない」という方針となる。

例えば、先述のプロジェクトのコードでは登場する様々な値を `String` 型で表現していた。

* `userId`
* `nickname`
* `address`
* etc...

これらはサーバーリクエストの口でバリデーションを通るものの、その後の値がアプリケーションコード内で保証されないため非常に不安定だった。

また、例えば `nickname` と `address` を引数として受け付けるメソッドがあったとすると

```java
public User hoge(String nickname, String address) {
    ...
}
```

となるわけだが、この時このメソッドを使う側で間違えて `address`, `nickname` の順で引数を指定したとしてもこのメソッドはその引数を受け付けてしまう。

そこで `Nickname` クラスと `Address` クラスを定義するというのが値オブジェクトの考え方だ。

```java
class Nickname {
    static final int MIN_LENGTH = 1;
    static final int MAX_LENGTH = 20;

    String nickname;

    Nickname(String nickname) {
        if (nickname.length() < MIN_LENGTH) {
            throw new IllegalArgumentException("nickname length must be at least" + MIN_LENGTH);
        }
        if (nickname.length() > MAX_LENGTH) {
          throw new IllegalArgumentException("nickname length must be under" + MAX_LENGTH);
        }
        this.nickname = nickname;
    }
}
```

`address` に対しても同様にクラスを定義して先ほどのメソッドを

```java
public User hoge(Nickname nickname, Address address) {
    ...
}
```

とすればより堅い実装となる。

### 値オブジェクトを不変とする
値オブジェクトの値は上書きしないというのも値オブジェクトを扱う上で重要な考え方で、これをルール化すると、「値を変更する度にオブジェクトそのものを新しく（別のオブジェクトに）する」ということになる。

```java
Nickname nickname = new Nickname("sojiro");
nickname.setNickname("shin-sojiro");
```

ではなく

```java
Nickname nickname = new Nickname("sojiro");
Nickname updatedNickname = nickname.update("shin-sojiro");
```

とすることで、各オブジェクトがどの値をもっているのかが明確となり、知らないうちに値が変わっている、ということを防ぐことができる。

## コレクションオブジェクト（ファーストクラスコレクション）
値オブジェクトの考え方を発展させ、コレクション型のデータとロジックを独自のクラスに切り出す考え方をコレクションオブジェクト、もしくはファーストクラスコレクションという。

```java
List<User> users = new ArrayList<>();
users.add(user);
```

のように扱っていた `User` のコレクションを、 `Users` というクラスを定義し、そのクラスで操作が完結するようにする。

```java
class Users {
    List<User> users;

    Users(List<User> users) {
        this.users = users;
    }

    Users add(User user) {
        List<User> userList = new ArrayList<>(users);
        return new Users(userList.add(user));
    }

    List<User> asList() {
        return Collections.unmodifiableList(users);
    }
}
```

ここでのポイントは、

* 値オブジェクトで値に変更がある場合は常に新しいオブジェクトを返したように、コレクションオブジェクトでもコレクションに変更がある場合は新たなオブジェクトを返すようにすること
* コレクションへの参照を返す場合はなるべく変更できない状態にして返すこと

コレクションへの操作を独自クラスに閉じ込め、同一オブジェクトが持つコレクションの内容が変化することのないようにすることでより堅い実装とすることができる。

## 感想
Perl からプログラミングを始めたこともあってか（言い訳）、オブジェクト指向と言っても型への意識は低く、如何にコンパイル時点でバグを見つけられる堅い実装とするか、その変数に今どのような値が入っているかをコードの書き方で明確にするか、というような意識も低かった。

[現場で役立つシステム設計の原則](http://amzn.to/2vpxmgg) からは他にも学んだ点が多いので追って記事にできたらと思う。

## 参照
[現場で役立つシステム設計の原則](http://amzn.to/2vpxmgg)

