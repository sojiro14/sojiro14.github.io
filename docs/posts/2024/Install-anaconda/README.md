---
layout: Layout
title: "Install anaconda on Mac"
date: 2024-07-18 23:51:59+0900
comments: true
categories: [Python, Anaconda, LivePortrait]
---
# Mac に Aanaconda をインストールしていく

```zsh
brew install anaconda
```

# conda init
zsh の場合
```zsh
conda init zsh
```
bash 場合
```bash
conda init bash
```

# LivePortrait を始める

```zsh
conda create -n LivePortrait python==3.9
```
エラー

```zsh
conda create -n LivePortrait python==3.9 -c conda-forge
```

conda-forge チャンネルを追加した


```zsh
conda activate LivePortrait
```

# install requirements

```zsh
# for macOS with Apple Silicon
pip install -r requirements_macOS.txt
```

このままだと python と `onnxruntime-silicon` の依存関係が合わずにエラーになるので
まず `onnxruntime-silicon` だけインストールして requirements をそのバージョンで書き換えちゃう。
```zsh
pip install onnxruntime-silicon
```

```zsh
vim requirements_macOS.txt
pip install -r requirements_macOS.txt
```


# Git LFS install
https://git-lfs.com/
```zsh
brew install git-lfs
```

# Fast Hands-on
```zsh
# For macOS with Apple Silicon, Intel not supported, this maybe 20x slower than RTX 4090
PYTORCH_ENABLE_MPS_FALLBACK=1 python inference.py
```
FFmpegがないエラー


# FFmpeg install
```zsh
brew install ffmpeg
```
