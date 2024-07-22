---
layout: Layout
title: "How to upload files from GCE instance to GCS / BigQuery"
date: 2022-02-14
comments: true
categories: [GCP, GCE, GCS, BigQuery]
---
# GCEのインスタンスからGCSまたはBigQueryにデータを送る方法

## この投稿は
GCPのドキュメントをよく探ればちゃんと書いてあるけどすぐに見つけられないときのための備忘録。

## to GCS
### ライブラリのインストール
インスタンスの状態によって諸々違うでしょうが自分がやった手順のメモ。

Python 使う前提。
```sh
sudo apt-get install -y python3-pip
sudo pip3 install --upgrade google-cloud-storage
```
cf: [https://cloud.google.com/storage/docs/reference/libraries](https://cloud.google.com/storage/docs/reference/libraries)

### サンプルコードをパクる
[ここ](https://cloud.google.com/storage/docs/uploading-objects) を見れば良いだけ。

Python ならそのまま使えるコードが[ここ](https://github.com/googleapis/python-storage/blob/HEAD/samples/snippets/storage_upload_file.py)にある。

`destication_blob_name` には bucket 名以下の path（に見えるもの）を指定すれば良い。

## to BigQuery
### ライブラリのインストール
```sh
sudo pip3 install google-cloud-bigquery
```
※ちなみにこのライブラリのインストール完了まで結構時間がかかる。 `grpcio` のライブラリのビルドに時間がかかるようなのでこれだけ別途落としてくると時間短縮できそうだが1時間もかからないので放置でもOK。

### サンプルコードをパクる
Python でそのまま使えるサンプルコードは[ここ](https://github.com/googleapis/python-bigquery/blob/35627d145a41d57768f19d4392ef235928e00f72/samples/load_table_file.py)。

アップロードもとのファイル形式を変えたり job config いじるときは[公式のドキュメント](https://googleapis.dev/python/bigquery/latest/index.html)を見る。

JSON ファイルからアップロードしたい場合は
```python
job_config = bigquery.LoadJobConfig(
    source_format=bigquery.SourceFormat.NEWLINE_DELIMITED_JSON, autodetect=True,
)
```
とかしておけば良い。

## 参照
### to GCS
* [https://cloud.google.com/storage/docs/reference/libraries](https://cloud.google.com/storage/docs/reference/libraries)
  * [https://github.com/googleapis/python-storage/blob/HEAD/samples/snippets/quickstart.py](https://github.com/googleapis/python-storage/blob/HEAD/samples/snippets/quickstart.py)
* [https://cloud.google.com/storage/docs/uploading-objects](https://cloud.google.com/storage/docs/uploading-objects)
  * [https://github.com/googleapis/python-storage/blob/HEAD/samples/snippets/storage_upload_file.py](https://github.com/googleapis/python-storage/blob/HEAD/samples/snippets/storage_upload_file.py)
* [https://googleapis.dev/python/storage/latest/client.html](https://googleapis.dev/python/storage/latest/client.html)

### to BigQuery
* [https://cloud.google.com/bigquery/docs/batch-loading-data](https://cloud.google.com/bigquery/docs/batch-loading-data)
  * [https://github.com/googleapis/python-bigquery/blob/35627d145a41d57768f19d4392ef235928e00f72/samples/load_table_file.py](https://github.com/googleapis/python-bigquery/blob/35627d145a41d57768f19d4392ef235928e00f72/samples/load_table_file.py)
* [https://googleapis.dev/python/bigquery/latest/index.html#](https://googleapis.dev/python/bigquery/latest/index.html#)
