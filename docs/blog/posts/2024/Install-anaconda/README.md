---
layout: Layout
title: "LivePortrait demo on Mac"
date: 2024-07-18
comments: true
categories: [Python, Anaconda, LivePortrait]
---
# LivePortrait デモの手順（Mac版）

---

## 概要

この記事では、MacにAnacondaをインストールし、LivePortraitをセットアップする手順を紹介します。Anacondaを使うことで、Pythonの仮想環境を簡単に管理できます。LivePortraitは、特にApple Silicon（M1/M2）チップ搭載のMacで動作します。

[LivePortrait リポジトリ](https://github.com/KwaiVGI/LivePortrait)

---

## ステップ1：Anacondaのインストール

まず、Homebrewを使ってAnacondaをインストールします。

```zsh
brew install anaconda
```

次に、zshまたはbashシェルの初期化を行います。使用するシェルに応じて以下のコマンドを実行してください。

zshの場合:
```zsh
conda init zsh
```

bashの場合:
```bash
conda init bash
```

---

## ステップ2：LivePortraitのセットアップ

1. LivePortrait用の仮想環境をPython 3.9で作成します。エラーが発生する場合は、conda-forgeチャンネルを使用します。

```zsh
conda create -n LivePortrait python==3.9
```

エラーが発生した場合:
```zsh
conda create -n LivePortrait python==3.9 -c conda-forge
```

2. 仮想環境をアクティブにします。

```zsh
conda activate LivePortrait
```

---

## ステップ3：必要なパッケージのインストール

Apple Silicon搭載のmacOSで必要なパッケージをインストールします。

```zsh
pip install -r requirements_macOS.txt
```

依存関係のエラーが発生する場合は、`onnxruntime-silicon`を個別にインストールし、そのバージョンでrequirementsファイルを書き換えます。

```zsh
pip install onnxruntime-silicon
vim requirements_macOS.txt  # 必要に応じて編集
pip install -r requirements_macOS.txt
```

---

## ステップ4：Git LFSのインストール

Git LFS（Large File Storage）をインストールします。これにより、大きなファイルを扱いやすくなります。

公式サイト: [https://git-lfs.com/](https://git-lfs.com/)

```zsh
brew install git-lfs
```

---

## ステップ5：Fast Hands-on

以下のコマンドを実行して、LivePortraitを実行します。
（コメントを読むと NVIDIA GPU 詰んだマシンが欲しくなる...）

```zsh
# For macOS with Apple Silicon, Intel not supported, this maybe 20x slower than RTX 4090
PYTORCH_ENABLE_MPS_FALLBACK=1 python inference.py
```

この時点でFFmpegがインストールされていない場合、エラーが発生します。

---

## ステップ6：FFmpegのインストール

FFmpegをインストールします。

```zsh
brew install ffmpeg
```

再度、実行します。

```zsh
python inference.py -s assets/examples/source/s9.jpg -d assets/examples/driving/d0.mp4
```

以上で成功です。

---

この手順に従えば、Mac上でLivePortraitをスムーズに試すことができるはず！
