---
title: Large Language Models are Zero-Shot Reasoners
date: 2023-01-29
comments: true
categories: [Computer Science, Computation and Language]
---

# Large Language Models are Zero-Shot Reasoners
- <https://arxiv.org/abs/2205.11916>
- <https://proceedings.neurips.cc/paper_files/paper/2022/hash/8bb0d291acd4acf06ef112099c16f326-Abstract-Conference.html>
- <https://proceedings.neurips.cc/paper_files/paper/2022/file/8bb0d291acd4acf06ef112099c16f326-Paper-Conference.pdf>

---
## 1. 研究の背景と目的

### 1.1 大規模言語モデルとプロンプティング

近年、自然言語処理（NLP）の分野では、大規模言語モデル（LLM）が注目を集めています。これらのモデルは、GPT-3やPaLMなど、数十億から数千億のパラメータを持つ巨大なニューラルネットワークです。

LLMは通常、以下の2つの方法で使用されます：

1. Few-shot learning（少数事例学習）：タスクの例をいくつか提示して、モデルにタスクを理解させる方法
2. Zero-shot learning（ゼロショット学習）：例を示さずに、タスクの説明だけでモデルに対応させる方法

これらの方法を「プロンプティング」と呼びます。

### 1.2 推論タスクにおけるLLMの課題

LLMは多くのNLPタスクで優れた性能を示していますが、複雑な推論を要するタスク（例：算術問題や論理的推論）では課題が残っていました。

この問題に対処するため、「Chain of Thought（CoT）」というプロンプティング手法が提案されました。これは、解答の過程を段階的に示すことで、モデルにより複雑な推論を促す方法です。

### 1.3 研究の目的

本研究の主な目的は以下の通りです：

1. LLMがゼロショット学習でも効果的に推論できることを示す
2. 単一のプロンプトで様々な推論タスクに対応できることを実証する
3. LLMに隠された能力を探索し、理解を深める

## 2. 提案手法：Zero-shot Chain of Thought (Zero-shot-CoT)

研究者らは、「Zero-shot Chain of Thought (Zero-shot-CoT)」という新しい手法を提案しました。

### 2.1 手法の概要

Zero-shot-CoTの核心は非常にシンプルです：

1. 質問の後に「Let's think step by step.」（一歩ずつ考えてみましょう）というプロンプトを追加する
2. これによりモデルに段階的な思考過程を生成させる

### 2.2 Zero-shot-CoTの実装

Zero-shot-CoTは、以下の2段階のプロンプティングで実装されます：

1. 推論の抽出：
   - 入力質問に「Let's think step by step.」を追加
   - モデルに思考過程を生成させる

2. 回答の抽出：
   - 生成された思考過程を含む全文をモデルに再入力
   - 最終的な回答を抽出するためのプロンプトを追加（例：「Therefore, the answer is」）

![Figure 2](https://github.com/user-attachments/assets/a7b116c1-bc52-4031-a09b-3749a6fe290a)

この手法により、モデルは段階的な推論を行い、最終的な回答を導き出すことができます。

## 3. 実験設定

### 3.1 評価タスク

研究者らは、以下の4カテゴリ、合計12のデータセットで実験を行いました：

1. 算術推論：SingleEq, AddSub, MultiArith, AQUA-RAT, GSM8K, SVAMP
2. 常識推論：CommonsenseQA, StrategyQA
3. 記号推論：Last Letter Concatenation, Coin Flip
4. その他の論理推論：Date Understanding, Tracking Shuffled Objects

### 3.2 使用モデル

実験には以下のモデルが使用されました：

- GPT-3シリーズ（ada, babbage, curie, davinci）
- InstructGPT3シリーズ
- PaLM（8B, 62B, 540B）
- その他（GPT-2, GPT-Neo, GPT-J, T0, OPT）

### 3.3 比較手法

Zero-shot-CoTは、以下の手法と比較されました：

1. 標準的なZero-shotプロンプティング
2. Few-shotプロンプティング
3. Few-shot Chain of Thought (Few-shot-CoT)

## 4. 実験結果

### 4.1 Zero-shot-CoTの性能

Zero-shot-CoTは、多くのタスクで標準的なZero-shotプロンプティングを大幅に上回る性能を示しました。

例えば：
- MultiArithタスク：17.7%から78.7%に向上
- GSM8Kタスク：10.4%から40.7%に向上

![Table 1](https://github.com/user-attachments/assets/4cf971b2-ab7d-4d92-ac42-dae2784603a3)

### 4.2 他の手法との比較

Zero-shot-CoTは、Few-shot-CoTには及ばないものの、標準的なFew-shotプロンプティングを上回る性能を示しました。

![Table 2](https://github.com/user-attachments/assets/74d918fc-351b-4ff4-97e4-f1c7e324585f)

特筆すべき点として、GSM8Kタスクでは、Zero-shot-CoTがファインチューニングされたGPT-3（175B）モデルを上回る性能を達成しました。

### 4.3 モデルサイズの影響

実験結果から、モデルのサイズが大きくなるほど、Zero-shot-CoTの効果が顕著になることが分かりました。

![Figure 3](https://github.com/user-attachments/assets/3bc5ff6b-23be-428d-a831-2ef707bcbc83)

小規模なモデルでは効果が限定的ですが、大規模モデルではZero-shot-CoTによって性能が大幅に向上しています。

## 5. 分析と考察

### 5.1 プロンプトの影響

研究者らは、様々なプロンプトを試し、その影響を調査しました。

![Table 4](https://github.com/user-attachments/assets/198abcae-3807-4808-be85-9dedae93091c)

結果から、推論を促すような表現（例：「Let's think step by step.」）が最も効果的であることが分かりました。一方で、ミスリーディングな表現や無関係な表現はモデルの性能を低下させました。

### 5.2 Few-shot-CoTの例示の影響

Few-shot-CoTの性能は、提示する例の選び方に大きく影響されることも明らかになりました。

![Table 5](https://github.com/user-attachments/assets/9036e1f5-8934-4c42-91c0-e9ba464225fa)

タスクとは無関係な例を使用すると性能が低下しますが、回答形式が一致している場合はその影響が軽減されます。

### 5.3 Zero-shot-CoTの利点

1. タスク固有の例示が不要
2. 単一のプロンプトで多様なタスクに対応可能
3. モデルの隠れた能力を引き出す可能性

## 6. 結論と今後の展望

本研究は、大規模言語モデルが適切なプロンプトさえあれば、ゼロショットで複雑な推論タスクを実行できることを示しました。

Zero-shot-CoTは：
1. 多様な推論タスクにおいて強力なベースラインとなる
2. モデルの隠れた能力を探索する新しい方法を提供する

今後の研究では、より広範な認知能力を引き出すプロンプトの開発や、Zero-shot-CoTのメカニズムのさらなる解明が期待されます。

この研究は、大規模言語モデルの可能性を再評価し、自然言語処理の新たな地平を切り開く重要な一歩となるでしょう。
