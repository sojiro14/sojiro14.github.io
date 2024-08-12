---
title: Training Compute-Optimal Large Language Models
date: 2022-03-29
comments: true
categories: [Computer Science,  Computation and Language]
---

# Training Compute-Optimal Large Language Models
- <https://arxiv.org/abs/2203.15556>
- <https://arxiv.org/pdf/2203.15556>

---
## 序論
本論文では、限られた計算予算内で最適な大規模言語モデル（LLM）のサイズとトークン数を調査します。従来のLLMが過剰に訓練されている問題に焦点を当て、モデルサイズとトークン数を同時にスケールする方法を提案します。

## 研究の目的
現行のLLMは、モデルサイズの拡大に伴い計算コストが増加します。本研究の目的は、与えられた計算予算内で最適なモデルサイズとトークン数を決定し、効率的なモデル訓練を実現することです。

## 方法
400以上のモデルを訓練し、モデルサイズとトークン数の関係を分析しました。その結果、モデルサイズを倍増させるごとにトークン数も倍増させることが最適であると結論付けました。

## 結果
「Chinchilla」というモデルを訓練し、既存の大規模モデル（Gopher、GPT-3、Jurassic-1、Megatron-Turing NLG）を上回る性能を示しました。Chinchillaは、同じ計算予算でより少ない推論コストを持ち、下流タスクでの利用が容易です。

## 結論
本研究は、LLMの最適な訓練方法を示し、より効率的なモデル開発に貢献しました。Chinchillaの成果は、計算コストを削減しつつ高性能を維持する方法を提供します。
