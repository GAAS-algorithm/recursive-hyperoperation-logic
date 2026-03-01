/**
 * i18n translations - ISO 639-1 / BCP 47 compliant
 * en: English, ja: Japanese, vn: Vietnamese (Vietnam)
 */
export type Locale = "en" | "ja" | "vn";

export const locales: Locale[] = ["en", "ja", "vn"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  vn: "Tiếng Việt",
};

export const translations = {
  en: {
    nav: {
      home: "Home",
      top: "Top",
      hst: "HST",
      guideline: "Universal Guideline",
      sites: "Sites",
    },
    home: {
      title: "The theoretical shift of GAAS",
      subtitle: "A precious sample of Earth's history—from founding through crossing the chasm",
      tagline: "",
      phases: [
        { name: "Phase 1", period: "2006-2020" },
        { name: "Phase 2", period: "2021-2024" },
        { name: "Phase 3", period: "2025-2026" },
        { name: "Phase 4", period: "2026-" },
      ],
      hst: {
        title: "Holographic Sphere Topology",
        desc: "GAAS systems theory HST. Migration to next-gen dev stack and zero technical debt. Boundary definition with SolidJS, Tailwind v4, Bun, Drizzle, Lucide.",
        cta: "2026-02-26 — Read more →",
      },
      guideline: {
        title: "Universal Guideline",
        desc: "TANAAKK Group data schema, API, SaaS common rules. UUID v4, L4 hierarchy, 8-repo structure. Earth and multi-planetary best practices.",
        cta: "Read more →",
      },
      sites: {
        title: "Sites",
        desc: "Links to TANAAKK sites. Corporate, GAAS, Universal Guideline, HST original.",
        cta: "View links →",
      },
    },
    footer: {
      tagline: "",
      sample: "A precious sample of Earth's history — TANAAKK from founding to crossing the chasm",
      original: "Original",
      github: "GitHub",
    },
    sites: {
      title: "Sites",
      subtitle: "Links to TANAAKK-related sites",
      items: [
        { name: "TANAAKK", desc: "Corporate site" },
        { name: "GAAS", desc: "TANAAKK Archive (this site)" },
        { name: "Universal Guideline", desc: "Data schema, API, SaaS common rules" },
        { name: "HST Original", desc: "Holographic Sphere Topology | GAAS systems theory" },
      ],
    },
    common: {
      back: "Back",
    },
  },
  ja: {
    nav: {
      home: "Home",
      top: "Top",
      hst: "HST",
      guideline: "Universal Guideline",
      sites: "Sites",
    },
    home: {
      title: "The theoretical shift of GAAS",
      subtitle: "創業からキャズムを超えてブレークスルーした、地球の歴史における貴重なサンプルは決して",
      tagline: "",
      phases: [
        { name: "Phase 1", period: "2006-2020" },
        { name: "Phase 2", period: "2021-2024" },
        { name: "Phase 3", period: "2025-2026" },
        { name: "Phase 4", period: "2026-" },
      ],
      hst: {
        title: "Holographic Sphere Topology",
        desc: "GAAS流システム論HST。次世代開発標準スタックへの移行と技術負債ゼロに向けた転換方針。SolidJS、Tailwind v4、Bun、Drizzle、Lucideによる境界面の定義。",
        cta: "2026年2月26日 — 続きを読む →",
      },
      guideline: {
        title: "Universal Guideline",
        desc: "TANAAKKグループのデータスキーマ・API・SaaSアプリケーション共通ルール。UUID v4、L4階層、8リポジトリ構造。地球と多惑星文明のベストプラクティス。",
        cta: "続きを読む →",
      },
      sites: {
        title: "Sites",
        desc: "TANAAKK関連サイトへのリンク集。コーポレートサイト、GAAS、Universal Guideline、HST原文など。",
        cta: "リンク一覧 →",
      },
    },
    footer: {
      tagline: "",
      sample: "地球の歴史における貴重なサンプル — TANAAKK創業からキャズム突破までの記録",
      original: "原文",
      github: "GitHub",
    },
    sites: {
      title: "Sites",
      subtitle: "TANAAKK関連サイトへのリンク集",
      items: [
        { name: "TANAAKK", desc: "コーポレートサイト" },
        { name: "GAAS", desc: "TANAAKK Archive（本サイト）" },
        { name: "Universal Guideline", desc: "データスキーマ・API・SaaS共通ルール" },
        { name: "HST 原文", desc: "Holographic Sphere Topology｜GAAS流システム論" },
      ],
    },
    common: {
      back: "戻る",
    },
  },
  vn: {
    nav: {
      home: "Home",
      top: "Top",
      hst: "HST",
      guideline: "Universal Guideline",
      sites: "Sites",
    },
    home: {
      title: "The theoretical shift of GAAS",
      subtitle: "Mẫu quý giá trong lịch sử Trái đất—từ khởi nghiệp đến vượt qua vực thẳm",
      tagline: "",
      phases: [
        { name: "Phase 1", period: "2006-2020" },
        { name: "Phase 2", period: "2021-2024" },
        { name: "Phase 3", period: "2025-2026" },
        { name: "Phase 4", period: "2026-" },
      ],
      hst: {
        title: "Holographic Sphere Topology",
        desc: "Lý thuyết hệ thống GAAS HST. Chuyển đổi sang stack phát triển thế hệ mới và không nợ kỹ thuật. Định nghĩa ranh giới với SolidJS, Tailwind v4, Bun, Drizzle, Lucide.",
        cta: "2026-02-26 — Đọc thêm →",
      },
      guideline: {
        title: "Universal Guideline",
        desc: "Quy tắc chung về schema dữ liệu, API, SaaS của TANAAKK Group. UUID v4, cấu trúc L4, 8 repo. Thực hành tốt nhất Trái đất và đa hành tinh.",
        cta: "Đọc thêm →",
      },
      sites: {
        title: "Sites",
        desc: "Liên kết đến các trang TANAAKK. Corporate, GAAS, Universal Guideline, HST gốc.",
        cta: "Xem liên kết →",
      },
    },
    footer: {
      tagline: "",
      sample: "Mẫu quý giá trong lịch sử Trái đất — TANAAKK từ khởi nghiệp đến vượt vực thẳm",
      original: "Bản gốc",
      github: "GitHub",
    },
    sites: {
      title: "Sites",
      subtitle: "Liên kết đến các trang liên quan TANAAKK",
      items: [
        { name: "TANAAKK", desc: "Trang corporate" },
        { name: "GAAS", desc: "TANAAKK Archive (trang này)" },
        { name: "Universal Guideline", desc: "Quy tắc chung schema dữ liệu, API, SaaS" },
        { name: "HST gốc", desc: "Holographic Sphere Topology | Lý thuyết hệ thống GAAS" },
      ],
    },
    common: {
      back: "Quay lại",
    },
  },
} as const;
