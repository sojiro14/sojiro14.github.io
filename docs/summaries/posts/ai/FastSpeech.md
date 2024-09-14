---
title: "FastSpeech: Fast, Robust and Controllable Text to Speech"
date: 2019-11-20
comments: true
categories: [Computer Science, Computation and Language]
---

# FastSpeech: Fast, Robust and Controllable Text to Speech
- <https://arxiv.org/abs/1905.09263>
- <https://arxiv.org/pdf/1905.09263>

---
## FastSpeech: 高速で堅牢な制御可能なText-to-Speechシステム

## 1. はじめに

近年、ディープラーニングを用いたエンドツーエンドのText-to-Speech (TTS)システムが大きく進歩し、合成音声の品質が向上しています。しかし、既存のシステムには以下のような課題があります：

1. 推論速度が遅い
2. 合成音声の安定性が低い（単語の飛ばしや繰り返しが発生）
3. 音声の速度や韻律のコントロールが難しい

この論文では、これらの課題を解決する新しいTTSモデル「FastSpeech」を提案しています。

## 2. FastSpeechの特徴

FastSpeechは以下の特徴を持つ新しいTTSモデルです：

1. フィードフォワードネットワークを使用し、並列でメルスペクトログラムを生成
2. 音素の持続時間を予測し、それに基づいて音声の長さを調整
3. 教師モデルから知識を蒸留して学習を行う

これらの特徴により、高速で安定した音声合成が可能になり、さらに音声の速度や韻律をコントロールすることができます。

## 3. モデルアーキテクチャ

FastSpeechのモデルアーキテクチャは以下の主要な要素で構成されています：

1. Feed-Forward Transformer (FFT)
2. Length Regulator
3. Duration Predictor

### 3.1 Feed-Forward Transformer (FFT)

FFTは、Transformerのself-attentionメカニズムと1D畳み込みネットワークを組み合わせた構造です。音素側とメルスペクトログラム側にそれぞれN個のFFTブロックがスタックされています。

![FFT Architecture](https://github.com/user-attachments/assets/97878452-e6ad-457a-ab5c-1d16d0d6e6d2)

### 3.2 Length Regulator

Length Regulatorは、音素シーケンスとメルスペクトログラムシーケンスの長さの不一致を解決するためのコンポーネントです。各音素の持続時間に基づいて、音素の隠れ状態を拡張します。

### 3.3 Duration Predictor

Duration Predictorは、各音素の持続時間を予測するためのコンポーネントです。2層の1D畳み込みネットワークで構成されています。

## 4. 学習方法

FastSpeechの学習は以下の手順で行われます：

1. 自己回帰的なTransformer TTSモデルを教師モデルとして学習
2. 教師モデルから音素の持続時間を抽出
3. シーケンスレベルの知識蒸留を用いてFastSpeechを学習

## 5. 実験結果

LJSpeechデータセットを用いて実験を行い、以下の結果が得られました：

### 5.1 音声品質

Mean Opinion Score (MOS) 評価では、FastSpeechは既存の自己回帰モデルとほぼ同等の品質を達成しました。

| Method | MOS |
|--------|-----|
| GT | 4.41 ± 0.08 |
| GT (Mel + WaveGlow) | 4.00 ± 0.09 |
| Tacotron 2 (Mel + WaveGlow) | 3.86 ± 0.09 |
| Transformer TTS (Mel + WaveGlow) | 3.88 ± 0.09 |
| FastSpeech (Mel + WaveGlow) | 3.84 ± 0.08 |

### 5.2 推論速度

FastSpeechは、メルスペクトログラム生成を269.40倍、エンドツーエンドの音声合成を38.30倍高速化しました。

| Method | Latency (s) | Speedup |
|--------|-------------|---------|
| Transformer TTS (Mel) | 6.735 ± 3.969 | / |
| FastSpeech (Mel) | 0.025 ± 0.005 | 269.40× |
| Transformer TTS (Mel + WaveGlow) | 6.895 ± 3.969 | / |
| FastSpeech (Mel + WaveGlow) | 0.180 ± 0.078 | 38.30× |

### 5.3 堅牢性

特に難しい50文に対して、FastSpeechは単語の飛ばしや繰り返しの問題をほぼ完全に解消しました。

| Method | Repeats | Skips | Error Sentences | Error Rate |
|--------|---------|-------|-----------------|------------|
| Tacotron 2 | 4 | 11 | 12 | 24% |
| Transformer TTS | 7 | 15 | 17 | 34% |
| FastSpeech | 0 | 0 | 0 | 0% |

### 5.4 制御性

FastSpeechは、音声の速度を0.5倍から1.5倍まで滑らかに調整でき、さらに単語間の休止を追加することで韻律の一部を制御できることが示されました。

![Voice Speed Control](https://github.com/user-attachments/assets/a6eec4e7-7ad4-4a94-89c4-39a6202dd9f5)

## 6. まとめと今後の課題

FastSpeechは、高速で堅牢、かつ制御可能なTTSシステムを実現しました。今後の課題として以下が挙げられています：

1. 合成音声の品質のさらなる向上
2. 多言語・多話者への対応
3. 並列ニューラルボコーダーとの統合による完全なエンドツーエンドかつ並列なシステムの構築

FastSpeechは、TTSの実用化に向けて大きな一歩を踏み出した革新的なモデルと言えるでしょう。
