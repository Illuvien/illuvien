# IlluVien - グラフベースのLLMワークフローエディタ

<p align="center">
  <a href="./README.md"><img alt="README in English" src="https://img.shields.io/badge/English-blue"></a>
  <a href="./README_CN.md"><img alt="简体中文版自述文件" src="https://img.shields.io/badge/简体中文-blue"></a>
  <a href="./README_JA.md"><img alt="日本語のREADME" src="https://img.shields.io/badge/日本語-blue"></a>
  <a href="./README_KR.md"><img alt="README in Korean" src="https://img.shields.io/badge/한국어-blue"></a>
  <a href="./README_DE.md"><img alt="Deutsche Version der README" src="https://img.shields.io/badge/Deutsch-blue"></a>
<a href="./README_FR.md"><img alt="Version française du README" src="https://img.shields.io/badge/Français-blue"></a>
<a href="./README_ES.md"><img alt="Versión en español del README" src="https://img.shields.io/badge/Español-blue"></a>
</p>

![](/assets/Hero.gif)

# ✨ コアとなる利点

## モジュール型ビルディングブロック

![](/assets/Blocks.gif)

## ノード単位でのデバッグ

![](/assets/Visualization.gif)

## 最終的なパフォーマンス評価

![](/assets/evals.gif)

## 近日公開予定: 自己改善機能

![](/assets/Optimization.gif)


# 🕸️ なぜIlluVienなのか？

* **ハッキングが簡単**：新しいワークフローノードを追加するには、Pythonファイルを1つ追加するだけでOK。
* ワークフローグラフを**JSON設定**で管理でき、容易に共有やバージョン管理が可能。
* **軽量**：最小限の依存関係で動作し、過剰なLLMフレームワークを回避。

# ⚡ クイックスタート

以下の3ステップでIlluVienをすぐに起動できます。

1. **リポジトリをクローンする:**
    ```sh
    git clone https://github.com/Illuvien/illuvien.git
    cd IlluVien
    ```

2. **Dockerサービスを起動する:**
    ```sh
    sudo docker compose up --build -d
    ```

    これにより、ローカルインスタンスのIlluVienが起動し、ワークフロー（Spur）とその実行履歴がローカルのSQLiteファイルに保存されます。

3. **ポータルへアクセスする:**
    ブラウザで `http://localhost:6080/` にアクセスします。

    ユーザー名/パスワードとして `IlluVien` / `canaryhattan` を入力します。

4. **LLMプロバイダーのキーを追加する:**
   右上の設定メニューへ進みます。

   <img width="1913" alt="image" src="https://github.com/user-attachments/assets/32fe79f1-f518-4df5-859c-1d1c0fc0570e" />

   「API keys」タブを選択します。

   <img width="441" alt="image" src="https://github.com/user-attachments/assets/cccc7e27-c10b-4f3a-b818-3b65c55f4170" />

   プロバイダーのキーを入力し、「Save」をクリックします（キーを追加/変更すると保存ボタンが表示されます）。

   <img width="451" alt="image" src="https://github.com/user-attachments/assets/e35ba2bb-4c60-4b13-9a8d-cc47cac45375" />

セットアップはこれで完了です。「New Spur」をクリックしてワークフローを新規作成するか、用意されたテンプレートから始めてみてください。

# 🗺️ ロードマップ

- [X] キャンバス
- [X] 非同期/バッチ実行
- [X] 評価（Evals）
- [X] Spur API
- [ ] 新規ノード
    - [X] LLMノード
    - [X] If-Else
    - [X] ブランチのマージ
    - [ ] ツール
    - [ ] ループ
- [ ] DSPy等を用いたパイプライン最適化
- [ ] テンプレート
- [ ] Spursをコードにコンパイル
- [ ] マルチモーダル対応
- [ ] コード検証用コンテナ化
- [ ] リーダーボード
- [ ] AIによるSpur生成

皆様のフィードバックを大いに歓迎します。  
ご希望の機能や新機能リクエストがあれば、ぜひ[お知らせください](mailto:founders@IlluVien.dev?subject=Feature%20Request&body=I%20want%20this%20feature%3Ai)。
