---
title: Improved Training of Wasserstein GANs
date: 2017-12-25
comments: true
categories: [Computer Science, Machine Learning]
---

# Improved Training of Wasserstein GANs
- <https://arxiv.org/abs/1704.00028>
- <https://arxiv.org/pdf/1704.00028>

---
## Wasserstein GANの改良：勾配ペナルティの導入

## 1. はじめに

この論文は、Generative Adversarial Networks (GANs)の一種であるWasserstein GAN (WGAN)の改良版を提案しています。従来のWGANの問題点を指摘し、新しい手法を導入することで、より安定した学習と高品質な生成結果を実現しています。

## 2. 背景：GANとWGAN

### 2.1 GANの基本概念
- 生成器(Generator)と識別器(Discriminator)の2つのネットワークが対立しながら学習
- 学習が不安定になりやすい問題がある

### 2.2 WGANの特徴
- Wasserstein距離を用いてGANを改良
- 識別器（批評器と呼ばれる）にLipschitz制約を課す
- 重みクリッピングを使用してLipschitz制約を実現

## 3. 問題点：重みクリッピングの限界

著者らは、WGANで使用される重みクリッピングに以下の問題があると指摘しています：

1. 容量の不十分な利用
2. 勾配の消失または爆発

これらの問題を示すために、著者らはいくつかの実験を行いました。

![Figure 1: 重みクリッピングと勾配ペナルティの比較](https://github.com/user-attachments/assets/e49c6582-f82a-4909-b42c-c12d6b193573)


## 4. 提案手法：勾配ペナルティ

著者らは、重みクリッピングの代わりに「勾配ペナルティ」を導入することを提案しています。

### 4.1 勾配ペナルティの定義
新しい目的関数は以下のようになります：

```
L = E[D(x̃)] - E[D(x)] + λ * E[(||∇D(x̂)||_2 - 1)^2]
```

ここで、x̂はデータ分布と生成分布の間の直線上からランダムにサンプリングされたポイントです。

### 4.2 勾配ペナルティの特徴
- Lipschitz制約をソフトに実現
- バッチ正規化を使用しない
- ペナルティ係数λ=10を使用

## 5. 実験結果

著者らは、提案手法の有効性を示すためにいくつかの実験を行いました。

### 5.1 多様なアーキテクチャでの学習
200種類のランダムなアーキテクチャを生成し、従来のGANとWGAN-GPで学習を行いました。結果として、WGAN-GPの方が多くのアーキテクチャで成功しました。

### 5.2 LSUN寝室データセットでの実験
6種類の異なるアーキテクチャを用いて、LSUN寝室データセットで学習を行いました。WGAN-GPのみがすべてのアーキテクチャで安定した学習を実現しました。

### 5.3 CIFAR-10での性能評価
CIFAR-10データセットを用いて、Inception scoreを計算し、他の手法と比較しました。WGAN-GPは教師なし学習の中で最高のスコアを達成しました。

### 5.4 離散データの生成
文字レベルの言語モデルを学習させ、WGAN-GPが離散データの生成にも適用可能であることを示しました。

## 6. 考察

- WGAN-GPは、多様なアーキテクチャと様々なタスクで安定した学習を実現
- 高品質なサンプル生成が可能
- 学習の進行を損失関数の値で監視可能

## 7. 結論

WGAN-GPは、従来のWGANの問題点を解決し、より安定した学習と高品質な生成を実現する手法です。様々なタスクやアーキテクチャに適用可能であり、GANの研究に新たな可能性を開きました。

この改良により、GANの応用範囲がさらに広がることが期待されます。