---
title: An Evolutionary Tree and Graph for 15,821 Large Language Models
date: 2023-07-19
comments: true
categories: [Computer Science, Digital Libraries]
---

# On the Origin of LLMs: An Evolutionary Tree and Graph for 15,821 Large Language Models
- <https://arxiv.org/abs/2307.09793>
- <https://arxiv.org/pdf/2307.09793>

---
## LLMの起源：15,821の大規模言語モデルの進化的ツリーとグラフ
## 序論
本論文は、大規模言語モデル（LLM）の進化的な関係を明らかにすることを目的としています。特に、2022年以降のLLMの急速な発展とその多様性を体系的に理解するための研究です。

## 研究の背景
LLMは、特にChatGPTやBardのように、多くのユーザーに利用されています。毎週多くの新しいLLMが発表され、Hugging Faceに登録されていますが、それらの総合的なインデックスは存在しません。

## 方法
Hugging Faceに登録されているLLMの名称を用いて、階層的クラスタリングを実施しました。n-gramsやTF-IDF（Term Frequency-Inverse Document Frequency）を用いて、LLMのコミュニティを特定し、意味のあるサブグループに分類しました。

## 結果
本研究では、LLMのファミリーを特定し、それらを意味のあるサブグループに分類することに成功しました。また、15,821のLLMを視覚的に探索できるウェブアプリケーション「Constellation」を公開しました。

## 結論
「Constellation」を利用することで、研究者や開発者はLLMの関係性やトレンドを迅速に把握することが可能となりました。これは、LLMのさらなる発展や新しい研究の基盤となるでしょう。

## 補足情報
詳細な分析結果や視覚化ツールについては、[こちら](https://constellation.sites.stanford.edu)で確認できます。

![Output](https://constellation.sites.stanford.edu/sites/g/files/sbiybj29536/files/styles/card_1900x950/public/media/image/high_res_image-min_0.png?h=07184d4b&itok=101XVkZ-)

---
## AI generated diagram
```mermaid
flowchart TD
    A[データ収集] --> B[パラメータ抽出]
    B --> C[テキスト特徴抽出]
    C --> D[階層的クラスタリング]
    D --> E[コミュニティ検出]
    E --> F[視覚化]
    F --> G[ウェブアプリケーションの展開]
    G --> H[結果のレビュー]
    H --> I[結論: 大規模言語モデルの理解と分類を強化]

    A[Start: データ収集 \nHugging Faceからのモデル名、ダウンロード数、いいね数の収集]
    B[パラメータ抽出 \n正規表現を使用してモデル名からパラメータを抽出]
    C[テキスト特徴抽出 \nTF-IDFとn-gramsを使用してモデル名から特徴を抽出]
    D[階層的クラスタリング \n類似性に基づいてモデルをグループ化]
    E[コミュニティ検出 \nルーヴァン法を使用してグラフ内のコミュニティを検出]
    F[視覚化 \nインタラクティブなダイアグラムやワードクラウド、散布図をウェブアプリで提供]
    G[ウェブアプリケーションの展開 \nデータの動的探索を可能にする公開ウェブアプリケーション]
    H[結果のレビュー \n得られた結果を確認し、モデル間の関係を評価]
    I[End: 結論 \n大規模言語モデルの体系的な整理と分類を通じて理解を深める]
```
