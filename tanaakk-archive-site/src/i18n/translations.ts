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
      launchDate: "Launch",
      categories: [
        {
          name: "Company",
          items: [
            { name: "TANAAKK", url: "https://www.tanaakk.com", launchDate: "Dec 1st 2006" },
            { name: "TANAAKK Facilities", url: "https://facilities.tanaakk.com", launchDate: "Mar 3rd 2017" },
            { name: "TANAAKK EVGRID", url: "https://rent.tanaakk.com", launchDate: "Jun 13 2023" },
            { name: "TANAAKK Law", url: "https://law.tanaakk.com", launchDate: "May 1st 2020" },
            { name: "TANAAKK Vietnam", url: "https://vn.tanaakk.com", launchDate: "Apr 21st 2022" },
            { name: "ImmuniWeb Japan", url: "https://immuniweb.tanaakk.com", launchDate: "Feb 15th 2019" },
            { name: "Labibi", url: "https://www.labibi.com", launchDate: "Sep 1st 2025" },
            { name: "Stomping.jp", url: "https://www.stomping.jp/", launchDate: "Apr 2024" },
            { name: "Stomping.com", url: "https://www.stomping.com/", launchDate: "Feb 1st 2026" },
            { name: "HITSERIES CAPITAL (Japan)", url: "https://jp.hitseries.com/", launchDate: "Dec 2025" },
            { name: "HITSERIES CAPITAL (Singapore)", url: "https://www.hitseries.com/", launchDate: "Feb 2024" },
            { name: "Lecien Corporation(US)", url: "https://www.lecien.com", launchDate: "Sep 26th 2025" },
            { name: "Lecien Japan", url: "https://www.lecien.co.jp", launchDate: "Feb 1933" },
            { name: "Lecien Lace Museum", url: "https://museum.lecien.com", launchDate: "Feb 1933" },
          ],
        },
        {
          name: "Publish",
          items: [
            { name: "TANAAKK Publishing", url: "https://publish.tanaakk.com", launchDate: "May 11th 2021" },
          ],
        },
        {
          name: "HDC-Hybrid Direct to Consumer",
          items: [
            { name: "Tcab", url: "https://www.tcab.com", launchDate: "Sep 2nd 2025" },
            { name: "Lecien Online", url: "https://inner-jp.lecien.com", launchDate: "Aug 1st 2025" },
            { name: "Cosmo Online", url: "https://cosmo-jp.lecien.com", launchDate: "Feb 18th 2026" },
          ],
        },
        {
          name: "DPM-Distributed Production Model",
          items: [
            { name: "Lecien DPM", url: "https://dps-top.lecien.com/", launchDate: "Feb 22nd 2026" },
          ],
        },
        {
          name: "DPM-Distributed Processing Node",
          items: [
            { name: "Tbedy", url: "https://dpn.tbedy.com", launchDate: "Feb 22nd 2026" },
          ],
        },
        {
          name: "Github Guidelines",
          items: [
            { name: "Github Guidelines", url: "https://github.com/tanaakk", launchDate: "Feb 18th 2026" },
          ],
        },
        {
          name: "Toolkits",
          items: [
            { name: "TANAAKK T-NOTES", url: "https://notes.tanaakk.com/", launchDate: "Dec 1st 2006" },
            { name: "Axiom", url: "https://axiom.tanaakk.com", launchDate: "Mar 2nd 2026" },
            { name: "R&D Library", url: "https://library.tanaakk.com", launchDate: "Mar 1st 2026" },
            { name: "GAAS", url: "https://gaas.tanaakk.com", launchDate: "Jun 29th 2021" },
            { name: "Humanity Black Box", url: "https://humanity-black-box.web.app/", launchDate: "Mar 1st 2026" },
            { name: "GAAS Active Probe", url: "https://gaas-active-probe.streamlit.app/", launchDate: "Feb 17th 2026" },
            { name: "Boxing Performance Library", url: "https://boxing.tanaakk.com/en/", launchDate: "Mar 1st 2026" },
            { name: "Football Performance Library", url: "https://football.tanaakk.com", launchDate: "Mar 2nd 2026" },
            { name: "Tennis Performance Library", url: "https://tennis.tanaakk.com", launchDate: "Mar 1st 2026" },
            { name: "Sport Performance Library", url: "https://sport.tanaakk.com", launchDate: "Mar 1st 2026" },
            { name: "Entertainment Performance Library", url: "https://entertainment.tanaakk.com/", launchDate: "Mar 1st 2026" },
            { name: "HITSERIES CLOUD", url: "https://app.hitseries.com/", launchDate: "Sep 1st 2022" },
          ],
        },
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
      launchDate: "開設",
      categories: [
        {
          name: "Company",
          items: [
            { name: "TANAAKK", url: "https://www.tanaakk.com", launchDate: "Dec 1st 2006" },
            { name: "TANAAKK Facilities", url: "https://facilities.tanaakk.com", launchDate: "Mar 3rd 2017" },
            { name: "TANAAKK EVGRID", url: "https://rent.tanaakk.com", launchDate: "Jun 13 2023" },
            { name: "TANAAKK Law", url: "https://law.tanaakk.com", launchDate: "May 1st 2020" },
            { name: "TANAAKK Vietnam", url: "https://vn.tanaakk.com", launchDate: "Apr 21st 2022" },
            { name: "ImmuniWeb Japan", url: "https://immuniweb.tanaakk.com", launchDate: "Feb 15th 2019" },
            { name: "Labibi", url: "https://www.labibi.com", launchDate: "Sep 1st 2025" },
            { name: "Stomping.jp", url: "https://www.stomping.jp/", launchDate: "Apr 2024" },
            { name: "Stomping.com", url: "https://www.stomping.com/", launchDate: "Feb 1st 2026" },
            { name: "HITSERIES CAPITAL (Japan)", url: "https://jp.hitseries.com/", launchDate: "Dec 2025" },
            { name: "HITSERIES CAPITAL (Singapore)", url: "https://www.hitseries.com/", launchDate: "Feb 2024" },
            { name: "Lecien Corporation(US)", url: "https://www.lecien.com", launchDate: "Sep 26th 2025" },
            { name: "Lecien Japan", url: "https://www.lecien.co.jp", launchDate: "Feb 1933" },
            { name: "Lecien Lace Museum", url: "https://museum.lecien.com", launchDate: "Feb 1933" },
          ],
        },
        {
          name: "Publish",
          items: [
            { name: "TANAAKK Publishing", url: "https://publish.tanaakk.com", launchDate: "May 11th 2021" },
          ],
        },
        {
          name: "HDC-Hybrid Direct to Consumer",
          items: [
            { name: "Tcab", url: "https://www.tcab.com", launchDate: "Sep 2nd 2025" },
            { name: "Lecien Online", url: "https://inner-jp.lecien.com", launchDate: "Aug 1st 2025" },
            { name: "Cosmo Online", url: "https://cosmo-jp.lecien.com", launchDate: "Feb 18th 2026" },
          ],
        },
        {
          name: "DPM-Distributed Production Model",
          items: [
            { name: "Lecien DPM", url: "https://dps-top.lecien.com/", launchDate: "Feb 22nd 2026" },
          ],
        },
        {
          name: "DPM-Distributed Processing Node",
          items: [
            { name: "Tbedy", url: "https://dpn.tbedy.com", launchDate: "Feb 22nd 2026" },
          ],
        },
        {
          name: "Github Guidelines",
          items: [
            { name: "Github Guidelines", url: "https://github.com/tanaakk", launchDate: "Feb 18th 2026" },
          ],
        },
        {
          name: "Toolkits",
          items: [
            { name: "TANAAKK T-NOTES", url: "https://notes.tanaakk.com/", launchDate: "Dec 1st 2006" },
            { name: "Axiom", url: "https://axiom.tanaakk.com", launchDate: "Mar 2nd 2026" },
            { name: "R&D Library", url: "https://library.tanaakk.com", launchDate: "Mar 1st 2026" },
            { name: "GAAS", url: "https://gaas.tanaakk.com", launchDate: "Jun 29th 2021" },
            { name: "Humanity Black Box", url: "https://humanity-black-box.web.app/", launchDate: "Mar 1st 2026" },
            { name: "GAAS Active Probe", url: "https://gaas-active-probe.streamlit.app/", launchDate: "Feb 17th 2026" },
            { name: "Boxing Performance Library", url: "https://boxing.tanaakk.com/en/", launchDate: "Mar 1st 2026" },
            { name: "Football Performance Library", url: "https://football.tanaakk.com", launchDate: "Mar 2nd 2026" },
            { name: "Tennis Performance Library", url: "https://tennis.tanaakk.com", launchDate: "Mar 1st 2026" },
            { name: "Sport Performance Library", url: "https://sport.tanaakk.com", launchDate: "Mar 1st 2026" },
            { name: "Entertainment Performance Library", url: "https://entertainment.tanaakk.com/", launchDate: "Mar 1st 2026" },
            { name: "HITSERIES CLOUD", url: "https://app.hitseries.com/", launchDate: "Sep 1st 2022" },
          ],
        },
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
      launchDate: "Launch",
      categories: [
        {
          name: "Company",
          items: [
            { name: "TANAAKK", url: "https://www.tanaakk.com", launchDate: "Dec 1st 2006" },
            { name: "TANAAKK Facilities", url: "https://facilities.tanaakk.com", launchDate: "Mar 3rd 2017" },
            { name: "TANAAKK EVGRID", url: "https://rent.tanaakk.com", launchDate: "Jun 13 2023" },
            { name: "TANAAKK Law", url: "https://law.tanaakk.com", launchDate: "May 1st 2020" },
            { name: "TANAAKK Vietnam", url: "https://vn.tanaakk.com", launchDate: "Apr 21st 2022" },
            { name: "ImmuniWeb Japan", url: "https://immuniweb.tanaakk.com", launchDate: "Feb 15th 2019" },
            { name: "Labibi", url: "https://www.labibi.com", launchDate: "Sep 1st 2025" },
            { name: "Stomping.jp", url: "https://www.stomping.jp/", launchDate: "Apr 2024" },
            { name: "Stomping.com", url: "https://www.stomping.com/", launchDate: "Feb 1st 2026" },
            { name: "HITSERIES CAPITAL (Japan)", url: "https://jp.hitseries.com/", launchDate: "Dec 2025" },
            { name: "HITSERIES CAPITAL (Singapore)", url: "https://www.hitseries.com/", launchDate: "Feb 2024" },
            { name: "Lecien Corporation(US)", url: "https://www.lecien.com", launchDate: "Sep 26th 2025" },
            { name: "Lecien Japan", url: "https://www.lecien.co.jp", launchDate: "Feb 1933" },
            { name: "Lecien Lace Museum", url: "https://museum.lecien.com", launchDate: "Feb 1933" },
          ],
        },
        {
          name: "Publish",
          items: [
            { name: "TANAAKK Publishing", url: "https://publish.tanaakk.com", launchDate: "May 11th 2021" },
          ],
        },
        {
          name: "HDC-Hybrid Direct to Consumer",
          items: [
            { name: "Tcab", url: "https://www.tcab.com", launchDate: "Sep 2nd 2025" },
            { name: "Lecien Online", url: "https://inner-jp.lecien.com", launchDate: "Aug 1st 2025" },
            { name: "Cosmo Online", url: "https://cosmo-jp.lecien.com", launchDate: "Feb 18th 2026" },
          ],
        },
        {
          name: "DPM-Distributed Production Model",
          items: [
            { name: "Lecien DPM", url: "https://dps-top.lecien.com/", launchDate: "Feb 22nd 2026" },
          ],
        },
        {
          name: "DPM-Distributed Processing Node",
          items: [
            { name: "Tbedy", url: "https://dpn.tbedy.com", launchDate: "Feb 22nd 2026" },
          ],
        },
        {
          name: "Github Guidelines",
          items: [
            { name: "Github Guidelines", url: "https://github.com/tanaakk", launchDate: "Feb 18th 2026" },
          ],
        },
        {
          name: "Toolkits",
          items: [
            { name: "TANAAKK T-NOTES", url: "https://notes.tanaakk.com/", launchDate: "Dec 1st 2006" },
            { name: "Axiom", url: "https://axiom.tanaakk.com", launchDate: "Mar 2nd 2026" },
            { name: "R&D Library", url: "https://library.tanaakk.com", launchDate: "Mar 1st 2026" },
            { name: "GAAS", url: "https://gaas.tanaakk.com", launchDate: "Jun 29th 2021" },
            { name: "Humanity Black Box", url: "https://humanity-black-box.web.app/", launchDate: "Mar 1st 2026" },
            { name: "GAAS Active Probe", url: "https://gaas-active-probe.streamlit.app/", launchDate: "Feb 17th 2026" },
            { name: "Boxing Performance Library", url: "https://boxing.tanaakk.com/en/", launchDate: "Mar 1st 2026" },
            { name: "Football Performance Library", url: "https://football.tanaakk.com", launchDate: "Mar 2nd 2026" },
            { name: "Tennis Performance Library", url: "https://tennis.tanaakk.com", launchDate: "Mar 1st 2026" },
            { name: "Sport Performance Library", url: "https://sport.tanaakk.com", launchDate: "Mar 1st 2026" },
            { name: "Entertainment Performance Library", url: "https://entertainment.tanaakk.com/", launchDate: "Mar 1st 2026" },
            { name: "HITSERIES CLOUD", url: "https://app.hitseries.com/", launchDate: "Sep 1st 2022" },
          ],
        },
      ],
    },
    common: {
      back: "Quay lại",
    },
  },
} as const;
