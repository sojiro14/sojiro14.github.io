---
title: "EasyAnimate: A High-Performance Long Video Generation Method based on Transformer Architecture"
date: 2024-07-05
comments: true
categories: [Computer Science, Computer Vision and Pattern Recognition]
---

# EasyAnimate: A High-Performance Long Video Generation Method based on Transformer Architecture
- <https://arxiv.org/abs/2405.18991v1>
- <https://arxiv.org/pdf/2405.18991v1>

---
## EasyAnimate: 高性能な長時間ビデオ生成手法

## はじめに

EasyAnimateは、Transformer architectureを活用した高性能なビデオ生成手法です。この論文では、以下の主要な特徴と貢献を紹介しています：

1. DiT（Diffusion Transformer）フレームワークを3Dビデオ生成に拡張
2. モーションモジュールの導入による時間的動的特性の捕捉
3. Slice VAEによる長時間ビデオ生成の実現
4. 包括的なビデオ制作エコシステムの提供

現在、EasyAnimateは144フレームのビデオ生成が可能です。

## モデルアーキテクチャ

EasyAnimateのパイプラインは以下の主要コンポーネントで構成されています：

1. テキストエンコーダー
2. ビデオVAE（ビデオエンコーダーとデコーダー）
3. Diffusion Transformer (DiT)

![EasyAnimate Pipeline](https://github.com/user-attachments/assets/99fac650-ab3e-4721-b23f-b74df90bcfb6)

### ビデオVAE

従来の画像ベースのVAEには時間軸の圧縮ができないという制限がありました。そこでEasyAnimateでは、MagViTを基にしたSlice VAEを導入しています。

Slice VAEの主な特徴：

- 時間軸に沿ったスライス機制の導入
- バッチ間での特徴共有
- 空間的・時間的次元の圧縮

![Slice VAE Architecture](https://github.com/user-attachments/assets/b9687e0f-ea95-443c-9845-2d6d4321f610)

### ビデオDiffusion Transformer

DiTアーキテクチャは以下の要素で構成されています：

1. モーションモジュール：時間情報を活用
2. U-VIT接続：トレーニングの安定性向上

![Diffusion Transformer Architecture](https://github.com/user-attachments/assets/ac35f394-733b-4396-9f92-b5c4191e9a4c)

## データ前処理

高品質なビデオデータと詳細なキャプションを得るために、以下の3段階の処理を行います：

1. ビデオ分割
2. ビデオフィルタリング
   - モーションスコア
   - テキストエリアスコア
   - 美的スコア
3. ビデオキャプショニング

## トレーニングプロセス

EasyAnimateのトレーニングは、約1200万の画像とビデオデータを使用し、以下の手順で行われます：

1. ビデオVAEのトレーニング
   - MagViTの初期トレーニング
   - Slice VAEの2段階ファインチューニング

![VAE Training Process](https://github.com/user-attachments/assets/38150a36-4bb8-4716-9e26-016ae69db998)

2. ビデオDiffusion Transformerのトレーニング
   - 画像適応
   - ビデオプレトレーニング
   - ビデオファインチューニング

![DiT Training Process](https://github.com/user-attachments/assets/8b50041e-4747-4242-8d29-b7ea6787c341)

## 実験結果と結論

EasyAnimateは、Transformerアーキテクチャに基づく高性能AIビデオ生成・トレーニングパイプラインです。主な特徴として：

- モーションモジュールによる一貫したフレーム生成とスムーズなモーション遷移
- トレーニングと推論の両段階でのフレーム数と解像度の適応性
- 画像とビデオの両方の生成に適用可能

実際の生成結果は、GitHubリポジトリ（https://github.com/aigc-apps/EasyAnimate）で確認できます。

この研究は、高品質なビデオ生成モデルの発展に貢献し、今後のAIによる創造的コンテンツ生成の可能性を広げるものと期待されます。
