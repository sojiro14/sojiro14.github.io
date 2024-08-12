---
title: Reviewing the Rationality of Multiple Choice Question Answering for the Evaluation of Large Language Models
date: 2024-05-30
comments: true
categories: [Computer Science, Computation and Language]
---

# Beyond the Answers: Reviewing the Rationality of Multiple Choice Question Answering for the Evaluation of Large Language Models
- <https://arxiv.org/abs/2402.01349>
- <https://arxiv.org/pdf/2402.01349>

---
## 序論
本論文では、大規模言語モデル（LLM）の評価方法として多肢選択質問応答（MCQA）の妥当性を検討します。特に、LLMが質問の意味を真に理解しているかどうかを評価するための方法について議論します。

## 背景
LLMは、自然言語生成タスクで優れた性能を示しており、MCQAはその評価方法として広く使用されています。しかし、MCQAがLLMの真の能力を評価するのに十分かどうかは未解明のままです。

## 研究目的
MCQAの評価方法がLLMの真の性能を反映しているかを調査します。具体的には、同じ質問から派生した異なる設定でのLLMの応答の一貫性を検証します。

## 実験と結果
実験では、MCQA形式のデータセットを用いて、様々な設定でLLMの性能を評価しました。結果として、同じ質問に対するLLMの応答に一貫性が見られないことが判明し、この現象を「応答変動症候群（REVAS）」と定義しました。

## 考察
REVASの原因として、LLMが最も正しい選択肢を選ぶ傾向があり、唯一の正しい選択肢を選ぶわけではないことが示唆されます。また、MCQA形式の質問を真偽形式に変換することで、LLMの性能が向上する可能性が示されました。

## 結論
MCQAは、LLMの真の性能を評価するには不十分であり、より堅牢な評価メカニズムが必要です。本研究は、LLMの性能評価における新たな視点を提供し、今後の研究に貢献します。
