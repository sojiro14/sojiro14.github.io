---
title: Scaling Instruction-Finetuned Language Models
date: 2022-12-06
comments: true
categories: [Computer Science, Machine Learning]
---

# Scaling Instruction-Finetuned Language Models
- <https://arxiv.org/abs/2210.11416>
- <https://arxiv.org/pdf/2210.11416>
- <https://www.jmlr.org/papers/v25/23-0870.html>
- <https://www.jmlr.org/papers/volume25/23-0870/23-0870.pdf>

---
## 1. 研究の背景と目的

### 1.1 言語モデルの進化

近年、GPT-3やPaLMなどの大規模言語モデルが登場し、様々なタスクで高い性能を示しています。しかし、これらのモデルには以下のような課題がありました：

- 新しいタスクへの適応が難しい
- 複雑な推論を要するタスクでの性能が不十分
- ゼロショット（例示なし）での性能が低い

### 1.2 研究の目的

この研究では、「指示によるファインチューニング（instruction finetuning）」という手法を拡張し、上記の課題を解決することを目指しています。具体的には以下の3点に注目しています：

1. ファインチューニングに使用するタスク数の拡大
2. モデルサイズの拡大
3. 思考の連鎖（Chain-of-Thought, CoT）データを用いたファインチューニング

## 2. 指示によるファインチューニングの概要

### 2.1 指示によるファインチューニングとは

指示によるファインチューニングとは、様々なタスクを「指示」の形式で与え、モデルがそれらの指示に従って適切な出力を生成できるように学習させる手法です。

例：
- 指示：「以下の質問に答えてください：窒素の沸点は何度ですか？」
- モデルの出力：「-320.4F」

### 2.2 本研究での拡張点

1. ファインチューニングに使用するタスク数を1,836まで拡大
2. 540Bパラメータの大規模モデル（PaLM）を使用
3. 思考の連鎖（CoT）データを含めたファインチューニング

![Figure 1](https://github.com/user-attachments/assets/899d22bc-33a2-4d8a-9a3b-fd925b4f642a)

## 3. 研究手法

### 3.1 使用したデータセット

研究チームは以下の4つのデータセットを組み合わせて使用しました：

1. Muffin（80タスク）
2. T0-SF（193タスク）
3. SNI（1554タスク）
4. CoT（9タスク）

これらのデータセットには、質問応答、要約、感情分析、コード生成など、多岐にわたるタスクが含まれています。

### 3.2 モデルアーキテクチャ

主に以下のモデルを使用しています：

- PaLM（8B、62B、540Bパラメータ）
- T5（80M〜11Bパラメータ）
- U-PaLM（540Bパラメータ）

### 3.3 評価方法

以下のベンチマークを用いて評価を行いました：

1. MMLU（57タスク）：数学、歴史、法律、医学などの知識を問うテスト
2. BBH（23タスク）：BIG-Benchからの難しいタスク
3. TyDiQA（8言語）：多言語質問応答タスク
4. MGSM（10言語）：多言語の数学的問題解決タスク

## 4. 主要な研究結果

### 4.1 タスク数とモデルサイズのスケーリング効果

![Figure 4](https://github.com/user-attachments/assets/bb752224-b5cc-4d1f-b0fb-0ef58478ec88)

- タスク数を増やすことで性能が向上（特に282タスクまで）
- モデルサイズを大きくすることで性能が大幅に向上

### 4.2 思考の連鎖（CoT）データの効果

- CoTデータを含めることで、複雑な推論タスクでの性能が向上
- ゼロショットでのCoT推論能力も獲得

![Figure 6](https://github.com/user-attachments/assets/43e05fe9-360c-468d-b592-14ba5a07d097)

### 4.3 様々なモデルでの効果

T5、PaLM、U-PaLMなど、異なるアーキテクチャや事前学習目的を持つモデルでも指示によるファインチューニングが有効であることが示されました。

### 4.4 オープンエンド生成タスクでの改善

人間の評価者によるテストでは、Flan-PaLMの出力がPaLMよりも79%の場合で好まれました。

![Figure 8](https://github.com/user-attachments/assets/aacfd78b-6a02-475c-b0ee-41c391307def)

### 4.5 バイアスと有害性の軽減

指示によるファインチューニングは、モデルの出力における有害な内容やバイアスを軽減する効果も示しました。

## 5. 結論と今後の展望

### 5.1 主な成果

1. 指示によるファインチューニングは、タスク数とモデルサイズのスケーリングにより性能が向上
2. CoTデータの導入により、複雑な推論能力が向上
3. 様々なモデルアーキテクチャに適用可能
4. 計算コストが比較的小さい（事前学習の0.2%程度）

### 5.2 今後の課題と展望

- さらなるタスク数の拡大とモデルサイズの拡大
- 他の手法（UL2Rなど）との組み合わせ
- 実世界のアプリケーションでの評価
- バイアスや有害性のさらなる軽減

この研究は、大規模言語モデルの性能向上と応用範囲の拡大に大きく貢献する可能性があり、今後のAI研究に重要な影響を与えると考えられます。
