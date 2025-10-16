# Sodenoura

## 概要
Basic認証設定あり
user: hibari
password: test_001
このプロジェクトは、Vite + Handlebars + SCSSを使用した静的Webサイトです。

## クイックスタート

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

## 開発環境のセットアップ

詳細な開発環境のセットアップ手順については、[DEVELOPMENT.md](./DEVELOPMENT.md)を参照してください。

## プロジェクト構成

```
sodenoura/
├── src/
│   ├── assets/
│   │   ├── js/          # JavaScript ファイル
│   │   └── scss/        # SCSS ファイル
│   ├── configs/         # 設定ファイル
│   ├── includes/        # Handlebars パーシャル
│   └── pages/           # HTMLページ
├── public/              # 静的ファイル
└── dist/                # ビルド出力先
```

## 利用可能なコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 (http://localhost:8080) |
| `npm run build` | 本番用ビルド |
| `npm run preview` | ビルド結果をプレビュー |
| `npm run lint` | コード品質チェック (ESLint + Stylelint) |
| `npm run lint:fix` | リントエラーの自動修正 |
| `npm run format` | コードフォーマット (Prettier) |

## 技術スタック

- **ビルドツール**: Vite 5.x
- **テンプレートエンジン**: Handlebars
- **スタイル**: SCSS
- **JavaScript**: ES Modules
- **リンター**: ESLint, Stylelint
- **フォーマッター**: Prettier

## ブラウザサポート

モダンブラウザの最新版をサポートしています。

## ライセンス

Private
