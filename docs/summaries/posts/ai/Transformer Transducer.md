---
title: "Transformer Transducer: A Streamable Speech Recognition Model with Transformer Encoders and RNN-T Loss"
date: 2020-02-14
comments: true
categories: [Electrical Engineering and Systems Science, Audio and Speech Processing]
---

# Transformer Transducer: A Streamable Speech Recognition Model with Transformer Encoders and RNN-T Loss
- <https://arxiv.org/abs/2002.02562>
- <https://arxiv.org/pdf/2002.02562>

---
## Transformer Transducer: 音声認識のための新しいモデル

## 1. はじめに

この論文では、Transformer Transducerと呼ばれる新しい音声認識モデルが提案されています。このモデルは、以下の特徴を持っています：

1. Transformerエンコーダーを使用
2. RNN-T（Recurrent Neural Network Transducer）の損失関数を採用
3. ストリーミング（リアルタイム）音声認識に適用可能

従来のRNN-Tモデルは、RNN（再帰型ニューラルネットワーク）を使用していましたが、この新しいモデルではTransformerを採用しています。

## 2. モデルの構造

Transformer Transducerの構造は以下の通りです：

![RNN/Transformer Transducer architecture](https://github.com/user-attachments/assets/71ad9240-1e2b-4cd2-b4bb-44e0e606f673)

主な構成要素は以下の3つです：

1. 音声エンコーダー（AudioEncoder）：音声入力を処理
2. ラベルエンコーダー（LabelEncoder）：過去の出力ラベルを処理
3. 結合ネットワーク（Joint Network）：エンコーダーの出力を組み合わせて最終的な予測を生成

従来のRNN-Tモデルでは、エンコーダーにLSTM（Long Short-Term Memory）を使用していましたが、Transformer Transducerでは両方のエンコーダーにTransformerを採用しています。

## 3. Transformerの構造

Transformerの各層は以下の2つのサブレイヤーで構成されています：

1. マルチヘッド・アテンション層
2. フィードフォワード層

![Transformer encoder architecture](https://github.com/user-attachments/assets/390fa731-6ada-43eb-962f-894e798e3974)

特徴：
- LayerNormを使用
- 残差接続を採用
- ドロップアウトで過学習を防止
- 相対位置エンコーディングを使用

## 4. ストリーミング音声認識への適用

Transformer Transducerは、ストリーミング（リアルタイム）音声認識にも適用できるように設計されています。そのために、以下の工夫がなされています：

1. 音声エンコーダーの注意を過去の限られたフレームに制限
2. ラベルエンコーダーの注意を過去の限られたラベルに制限

これにより、モデルの計算量を一定に保ちつつ、リアルタイムでの音声認識が可能になります。

## 5. 実験と結果

### 5.1 データセット

実験には、LibriSpeechデータセットを使用しました：
- 970時間の音声データと対応するテキスト転写
- 追加の8億単語のテキストデータ

### 5.2 モデルの詳細

- 音声エンコーダー：18層
- ラベルエンコーダー：2層
- 出力単位：グラフェーム（文字単位）

### 5.3 主な結果

1. Transformer Transducerは、LSTMベースのRNN-Tモデルよりも高い精度を達成
2. 全注意（full attention）モデルは、LibriSpeechベンチマークで最高精度を記録
3. 限定的な注意（limited attention）モデルでも、ストリーミング音声認識に適した性能を実現

具体的な結果は以下の表の通りです：

| モデル | パラメータ数 | WER (%) (clean / other) |
|-------|------------|------------------------|
| FullAttn T-T | 139M | 2.4 / 5.6 |
| BiLSTM RNN-T | 130M | 3.2 / 7.8 |

### 5.4 コンテキスト制限の影響

音声エンコーダーの左右のコンテキスト（注意を向ける範囲）を制限した場合の影響も調査されました。主な発見：

1. 左コンテキストを増やすほど性能が向上
2. 右コンテキスト（未来のフレーム）を少し見ることで、全注意モデルとの性能差を縮小可能
3. ラベルエンコーダーは、非常に限られた左コンテキストでも十分な性能を発揮

## 6. 結論

Transformer Transducerは以下の利点を持つ新しい音声認識モデルです：

1. 高い認識精度
2. ストリーミング音声認識への適用が可能
3. LSTMベースのモデルよりも高速に学習可能
4. 精度と遅延のトレードオフを柔軟に調整可能

この研究は、Transformerベースのモデルを音声認識タスクに効果的に適用できることを示し、今後の音声認識技術の発展に大きく貢献する可能性があります。
