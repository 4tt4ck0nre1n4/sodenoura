module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order", // プロパティの並び順を統一
    "stylelint-config-prettier-scss", // Prettierと競合するルールを無効化
  ],
  rules: {
    // ベストプラクティス
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": null, // 変数名のパターンを柔軟に
    "scss/at-import-partial-extension": null,
    "selector-class-pattern": null, // クラス名のパターンを柔軟に
    "selector-id-pattern": null, // ID名のパターンを柔軟に
    "custom-property-pattern": null, // カスタムプロパティのパターンを柔軟に
    "keyframes-name-pattern": null, // キーフレーム名のパターンを柔軟に
    "scss/at-mixin-pattern": null, // mixin名のパターンを柔軟に
    "no-descending-specificity": null, // 詳細度の降順を許可（実際のプロジェクトで厳しすぎる場合がある）
    "no-duplicate-selectors": null, // メディアクエリでの重複セレクタを許可

    // プロパティ関連
    "property-no-vendor-prefix": null, // ベンダープレフィックスを許可（Autoprefixerがない場合もある）
    "value-no-vendor-prefix": null, // ベンダープレフィックス値を許可
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"],
      },
    ],
    "declaration-block-no-redundant-longhand-properties": null, // ロングハンドプロパティを許可

    // SCSS関連
    "scss/comment-no-empty": null,
    "scss/double-slash-comment-empty-line-before": null,
    "scss/double-slash-comment-whitespace-inside": null,
    "scss/dollar-variable-empty-line-before": null,
    "scss/no-global-function-names": null, // 古いSass関数を許可

    // その他
    "declaration-empty-line-before": null,
    "rule-empty-line-before": null,
    "length-zero-no-unit": null,
    "alpha-value-notation": null,
    "color-function-notation": null,
    "color-hex-length": null,

    // プロパティの順序は警告レベルに
    "order/properties-order": null,

    // 特定のプロパティ関連
    "value-keyword-case": null, // キーワードのケースを柔軟に
    "function-name-case": [
      "lower",
      {
        ignoreFunctions: ["/^[a-z]+([A-Z][a-z]*)*$/"], // camelCaseの関数を許可
      },
    ],
  },
  ignoreFiles: ["dist/**/*", "build/**/*", "node_modules/**/*", "**/*.min.css", "public/**/*"],
};
