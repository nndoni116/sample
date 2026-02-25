# Café Ouka — デモサイト

カフェ・喫茶店向けサンプルサイトです。副業・フリーランスのWebサイト制作ポートフォリオ用デモとして作成しています。

## 技術スタック

- **Astro** v4 — 静的サイトジェネレーター
- **TailwindCSS** v3 — ユーティリティCSS
- **Google Fonts** — Playfair Display / Lora / DM Sans

## セットアップ

```bash
npm install
npm run dev      # 開発サーバー起動 (localhost:4321)
npm run build    # 本番ビルド
npm run preview  # ビルドプレビュー
```

## 構成

```
src/
├── layouts/
│   └── Layout.astro       # ベースレイアウト（Fontsの読み込みなど）
├── components/
│   ├── DemoBanner.astro   # デモ表示バナー（本番時は削除）
│   ├── Header.astro       # ナビゲーション（スマホ対応ドロワー付き）
│   ├── Hero.astro         # ヒーローセクション
│   ├── Menu.astro         # メニューセクション
│   ├── Hours.astro        # 営業時間セクション
│   ├── Access.astro       # アクセスセクション（地図付き）
│   └── Footer.astro       # フッター
└── pages/
    └── index.astro        # メインページ
```

## カスタマイズ方法

| 変更箇所 | ファイル |
|----------|---------|
| 店名・キャッチコピー | `Hero.astro` |
| メニュー内容・価格 | `Menu.astro` の `categories` 配列 |
| 営業時間 | `Hours.astro` の `hours` 配列 |
| 住所・電話番号 | `Access.astro` |
| カラーテーマ | `tailwind.config.mjs` |
| Googleマップ埋め込み | `Access.astro` のMap部分をiframe化 |

## 本番化の際の注意

- `DemoBanner.astro` を削除またはコメントアウトしてください
- `Access.astro` のマップをGoogle Maps iframeに差し替えてください
- `Head` の description・OGPを実際の店舗情報に変更してください

---

> 🎨 このサイトはデモ・ポートフォリオ用サンプルです
