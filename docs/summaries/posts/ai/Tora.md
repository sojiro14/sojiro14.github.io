---
title: "Tora: Trajectory-oriented Diffusion Transformer for Video Generation"
date: 2024-08-27
comments: true
categories: [Computer Science, Computer Vision and Pattern Recognition]
---

# Tora: Trajectory-oriented Diffusion Transformer for Video Generation
- <https://arxiv.org/abs/2407.21705>
- <https://arxiv.org/pdf/2407.21705>

---
## Tora: 軌跡指向型拡散トランスフォーマーによる動画生成

## 1. 研究の背景と目的

近年、拡散モデルを用いた画像・動画生成技術が大きく進歩しています。特に、OpenAIのSoraのような拡散トランスフォーマー(DiT)モデルは、長時間の高品質な動画生成を可能にしました。しかし、これらのモデルでは動きのコントロールが難しいという課題がありました。

この研究では、テキスト、画像、軌跡の3つの条件を同時に扱える「Tora」という新しいDiTフレームワークを提案しています。Toraの目的は、スケーラブルな動画生成と効果的な動きのガイダンスを両立させることです。

## 2. Toraの主要コンポーネント

Toraは以下の3つの主要コンポーネントで構成されています：

1. 軌跡抽出器 (Trajectory Extractor, TE)
2. 時空間DiT (Spatial-Temporal DiT)
3. 動きガイダンス融合器 (Motion-guidance Fuser, MGF)

これらのコンポーネントにより、Toraは様々な長さ、アスペクト比、解像度の動画を生成できます。

![Tora Architecture](https://github.com/user-attachments/assets/cf982796-a51a-4d11-8306-af87bd78790f)


## 3. 軌跡抽出器 (TE)

TEは任意の軌跡を階層的な時空間モーションパッチに変換します。具体的には：

1. 軌跡をRGBドメインに変換
2. ガウシアンフィルタリングで散在する問題を軽減
3. 3D変分オートエンコーダ(VAE)で軌跡を時空間モーション潜在表現に符号化

この方法により、軌跡情報を効果的に保持しつつ、DiTモデルの入力に適した形式に変換します。

## 4. 動きガイダンス融合器 (MGF)

MGFは適応的正規化層を使用して、多層のモーション条件をDiTブロックに統合します。これにより、生成された動画が指定された軌跡に正確に従うようになります。

研究チームは以下の3つのMGF設計を比較しました：

1. 追加チャンネル接続
2. クロスアテンション
3. 適応的正規化（AdaNorm）

結果として、AdaNormが最も効果的であることが分かりました。

## 5. トレーニング戦略

Toraのトレーニングは2段階で行われます：

1. 密な光学フローを使用したトレーニング
2. スパースな軌跡を用いた微調整

この2段階アプローチにより、モデルは様々な動きのパターンに適応できるようになります。

## 6. 実験結果

Toraの性能を評価するため、以下の指標を用いて他の動画生成モデルと比較しました：

- Fr´echet Video Distance (FVD)
- CLIP Similarity (CLIPSIM)
- Trajectory Error (TrajError)

結果は以下の表の通りです：

![Comparison Table](https://github.com/user-attachments/assets/891f765e-8363-416b-9963-47af34d94b28)


Toraは特に長い動画（128フレーム）において、他のモデルを大きく上回る性能を示しました。軌跡の正確さは他のモデルの3〜5倍も優れています。

## 7. 視覚的比較

Toraは他のモデルと比較して、より自然で滑らかな動きを生成できることが分かりました。以下の画像は、Toraと他のモデルの生成結果を比較したものです：

![Visual Comparison](https://github.com/user-attachments/assets/990cb09d-203e-4e95-91b1-c35c005273d1)


Toraの生成した動画は、指定された軌跡に忠実に従いつつ、より自然な動きを実現しています。

## 8. 結論と今後の展望

Toraは、長時間の高解像度動画を生成しつつ、精密な動きのコントロールを可能にする画期的なモデルです。最大204フレーム、720p解像度の動画を生成できる能力は、動画生成技術の新たな可能性を示しています。

今後の研究では、さらに長い動画や複雑な動きのパターンへの対応が期待されます。また、Toraの技術を実際のアプリケーションに応用する研究も進むでしょう。

## 9. 補足情報

論文には以下の補足情報も含まれています：

- データの前処理方法の詳細
- トレーニングデータセットの統計情報
- プロンプト洗練の方法
- モーションVAEのトレーニング方法

これらの詳細は、Toraの再現や改良を行う研究者にとって重要な情報となります。
