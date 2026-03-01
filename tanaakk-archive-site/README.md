# TANAAKK Archive

**創業からキャズムを超えてブレークスルーした、地球の歴史における貴重なサンプルは決して**

このサイトは、TANAAKKの以下のコンテンツを保存・記録するアーカイブです。

- [Holographic Sphere Topology (HST)｜GAAS流システム論](https://www.tanaakk.com/2026/02/26/tech/)
- [Universal Guideline](https://github.com/tanaakk/universal-guideline)

## 技術スタック（GAAS標準準拠）

- **UI:** SolidJS (Signals)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide
- **Build:** Vite
- **Font:** System-Native

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

`dist/` に静的ファイルが出力されます。

## Firebase デプロイ

- **サイトURL:** https://gaas.tanaakk.com
- **デプロイ先:** Firebase Hosting（gaas-563b2.web.app）

```bash
# Firebase CLI が未導入の場合
npm install -g firebase-tools

# ログイン
firebase login

# ビルド＆デプロイ
npm run deploy
```

カスタムドメイン `gaas.tanaakk.com` は [Firebase Console](https://console.firebase.google.com) → プロジェクト gaas-563b2 → Hosting → カスタムドメイン で設定してください。

## ライセンス

元コンテンツの著作権は TANAAKK に帰属します。
