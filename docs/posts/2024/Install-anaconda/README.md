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
