# 開発環境セットアップガイド

## 必要な環境

- Node.js 20.18.0以上（推奨: nvmを使用）
- npm

## セットアップ手順

### 1. Node.jsのバージョン設定

nvmを使用している場合：

\`\`\`bash
nvm install
nvm use
\`\`\`

### 2. 依存関係のインストール

\`\`\`bash
npm install
\`\`\`

### 3. VS Code拡張機能のインストール

プロジェクトを開くと、推奨拡張機能のインストールを促すメッセージが表示されます。
以下の拡張機能をインストールしてください：

- **Prettier** - コードフォーマッター
- **ESLint** - JavaScriptリンター
- **Stylelint** - CSS/SCSSリンター
- **EditorConfig** - エディター設定の統一

手動でインストールする場合：

\`\`\`bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension stylelint.vscode-stylelint
code --install-extension editorconfig.editorconfig
\`\`\`

## 開発コマンド

### 開発サーバーの起動

\`\`\`bash
npm run dev
\`\`\`

ブラウザで `http://localhost:8080` を開いてください。

### ビルド

\`\`\`bash
npm run build
\`\`\`

### プレビュー

\`\`\`bash
npm run preview
\`\`\`

## リントとフォーマット

### すべてのリントを実行

\`\`\`bash
npm run lint
\`\`\`

### JavaScriptのみリント

\`\`\`bash
npm run lint:js
\`\`\`

### CSS/SCSSのみリント

\`\`\`bash
npm run lint:css
\`\`\`

### 自動修正

\`\`\`bash
npm run lint:fix
\`\`\`

### フォーマット

\`\`\`bash
npm run format
\`\`\`

### フォーマットチェック（修正なし）

\`\`\`bash
npm run format:check
\`\`\`

## 設定ファイルの説明

### `.nvmrc`

Node.jsのバージョンを指定します。nvmを使用している場合、`nvm use`コマンドで自動的に読み込まれます。

### `.editorconfig`

エディターの基本設定（インデント、改行コードなど）を統一します。
ほとんどのエディターで自動的に適用されます。

### `.prettierrc`

Prettierのフォーマット設定です。保存時に自動的にコードがフォーマットされます。

### `.eslintrc.cjs`

ESLintのルール設定です。JavaScriptコードの品質チェックを行います。

### `.stylelintrc.cjs`

Stylelintのルール設定です。CSS/SCSSコードの品質チェックを行います。

### `.vscode/settings.json`

VS Codeのプロジェクト固有設定です。保存時の自動フォーマットなどが有効になっています。

### `.vscode/extensions.json`

推奨するVS Code拡張機能のリストです。

## エディター設定（VS Code）

このプロジェクトでは、保存時に以下が自動実行されます：

- **JavaScript**: Prettierフォーマット + ESLint自動修正
- **CSS/SCSS**: Prettierフォーマット + Stylelint自動修正
- **HTML**: Prettierフォーマット
- **JSON**: Prettierフォーマット

## トラブルシューティング

### ESLintやStylelintが動作しない

1. VS Codeを再起動してください
2. 拡張機能が正しくインストールされているか確認してください
3. `node_modules`を削除して再度`npm install`を実行してください

### フォーマットが適用されない

1. `.vscode/settings.json`の設定を確認してください
2. Prettier拡張機能が有効になっているか確認してください
3. VS Codeの設定で「Format On Save」が有効になっているか確認してください

## コーディング規約

- インデント: スペース2つ
- 改行コード: LF（Unix形式）
- 文字コード: UTF-8
- セミコロン: 使用する
- クォート: ダブルクォート（JavaScript）
- 末尾カンマ: ES5形式

詳細は各設定ファイルを参照してください。
