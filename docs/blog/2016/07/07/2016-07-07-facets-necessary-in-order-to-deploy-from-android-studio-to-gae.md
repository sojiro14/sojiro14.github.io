---
layout: Layout
title: "Android StudioからGAE for Javaアプリケーションをdeployするのに必要なFacet"
date: 2016-07-07 08:27:00 +0900
comments: true
categories: [GAE, Android Studio, Java]
---

[こちらの記事](http://qiita.com/okitsutakatomo/items/18cdd3db35185a9b1e99)を参考にGAE for JavaアプリケーションをAndroid Studio + Gradleでセットアップし、サンプルアプリケーションを開発してみました。

早速GAEにdeployしてみようと、メニューバーの `Build` から `Deploy Module to App Engine...` を選択してdeployを実行...ところがタスクが走らずうんともすんとも言わないので調べてみました。

## 結論
以下の設定を `app.iml` ファイルに追記する

```xml
<facet type="android-gradle" name="Android-Gradle">
  <configuration>
    <option name="GRADLE_PROJECT_PATH" value=":app" />
  </configuration>
</facet>
<facet type="java-gradle" name="Java-Gradle">
  <configuration>
     <option name="BUILD_FOLDER_PATH" value="$MODULE_DIR$/build" />
     <option name="BUILDABLE" value="true" />
  </configuration>
</facet>
```

[こちら](http://qiita.com/okitsutakatomo/items/18cdd3db35185a9b1e99)は少々特殊な方法でmoduleを作成しているのでFacetの設定が不十分となってしまった模様。


## Facetとは
FacetはIntelliJ IDEAに用意された機能で、使用するフレームワークや言語に合わせたFacetを設定することでIntelliJ IDEAが必要なコンポーネントのダウンロードや各種補完機能の設定などを行ってくれるもの。

Android StudioはIntelliJ IDEAをベースとして開発されたIDEなのでFacetの機能を継承している。


## 参照
* [GoogleAppEngine for Java を AndroidStudio + Gradleで開発環境を作る](http://qiita.com/okitsutakatomo/items/18cdd3db35185a9b1e99)
* [Facet](https://www.jetbrains.com/help/idea/2016.1/facet.html)
