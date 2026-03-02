import { ArrowLeft, Layers, Database, GitBranch, ExternalLink } from "lucide-solid";
import { translations } from "../i18n/translations";
import type { Locale } from "../i18n/translations";

export default function Schema(props: { lang: Locale; onBack: () => void }) {
  const t = translations[props.lang];
  return (
    <article class="prose prose-slate max-w-none">
      <button
        type="button"
        onClick={props.onBack}
        class="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-700 transition-colors"
      >
        <ArrowLeft class="size-4" />
        {t.common.back}
      </button>

      <header class="mb-12">
        <h1 class="text-3xl font-bold text-slate-900 sm:text-4xl flex items-center gap-2">
          <Database class="size-8 text-cyan-600" />
          Schema
        </h1>
        <h2 class="mt-4 text-xl font-semibold text-cyan-600">
          TANAAKK Universal Guideline
        </h2>
        <p class="mt-2 text-slate-600">
          TANAAKKグループのデータスキーマ・API・SaaSアプリケーション共通ルール
        </p>
        <p class="mt-4">
          <a
            href="https://github.com/tanaakk/universal-guideline"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 hover:underline"
          >
            github.com/tanaakk/universal-guideline
            <ExternalLink class="size-4" />
          </a>
        </p>
      </header>

      <section class="space-y-6">
        <h2 class="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Layers class="size-5 text-cyan-600" />
          コンセプト
        </h2>
        <p class="text-slate-700">
          この Universal Rule は<strong>逐次アップデート</strong>される。
        </p>
        <ul class="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>地球のベストプラクティス:</strong> 最新時点での業界標準（Google AIP、Microsoft、IANA、会計API連携等）を採用し、随時更新する。</li>
          <li><strong>多惑星文明のベストプラクティス:</strong> NASA/ホワイトハウス Celestial Time Standardization Policy、Coordinated Lunar Time (LTC)、火星時間等、重力圏に応じた抽象時間・参照系の標準が策定・普及するに従い、それらを取り込んで更新する。</li>
        </ul>
      </section>

      <section class="mt-12 space-y-6">
        <h2 class="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Database class="size-5 text-cyan-600" />
          Universal Guideline のスコープと階層
        </h2>
        <p class="text-slate-700">
          「本リポジトリは L3 以降の階層を定義する。」L0〜L2 は groundism-ontopologics 等で定義される。UUID v4 を識別子規格として採用した場合、車両・製造・建設・貴金属・医療等の規格は、<strong>UUID v4 で記録された対象への射として表現される属性</strong>にすぎない。
        </p>
        <div class="overflow-x-auto rounded-lg border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">層</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">内容</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">主な規格・ルール</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="px-4 py-3 text-cyan-600 font-medium">L3</td>
                <td class="px-4 py-3 text-slate-700">UUID v4。識別子規格。対象の層</td>
                <td class="px-4 py-3 text-slate-600">tanaakk-universal-schema.mdc, tanaakk-uuid-hybrid.mdc</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-600 font-medium">L4</td>
                <td class="px-4 py-3 text-slate-700">対象への射としての属性</td>
                <td class="px-4 py-3 text-slate-600">L4A（産業分類）、L4B（クロスインダストリ）、L4C（インダストリ別）</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-600 font-medium">L5</td>
                <td class="px-4 py-3 text-slate-700">プロジェクト</td>
                <td class="px-4 py-3 text-slate-600">プロジェクト固有のコーディング規約</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-medium text-slate-800">L4 の下位階層（L4A, L4B, L4C）</h3>
        <div class="overflow-x-auto rounded-lg border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">層</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">内容</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">主な規格</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="px-4 py-3 text-cyan-600 font-medium">L4A</td>
                <td class="px-4 py-3 text-slate-700">産業分類（国家・国際管理）</td>
                <td class="px-4 py-3 text-slate-600">ISIC, NACE, CPC, NAICS</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-600 font-medium">L4B</td>
                <td class="px-4 py-3 text-slate-700">クロスインダストリ</td>
                <td class="px-4 py-3 text-slate-600">ISO 8601, ISO 4217, GTIN, EDI, ISO 20022, IAM, MES</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-600 font-medium">L4C</td>
                <td class="px-4 py-3 text-slate-700">インダストリ別</td>
                <td class="px-4 py-3 text-slate-600">建築, 貴金属, 宝石, 鉱物・宝石学, 繊維, 元素, 宇宙機, 時計, メティエダール, 発電, 保険, 金融, 石油・ガス, 医療, 農業・食品, Fauna・Flora・Marine life（ミュージオロジー）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-slate-600 text-sm">
          <strong>識別子は UUID v4 のみ。</strong> 上記規格コードはすべて属性として格納し、PK/FK には使用しない。
        </p>
      </section>

      <section class="mt-12 space-y-6">
        <h2 class="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <GitBranch class="size-5 text-cyan-600" />
          8 リポジトリ構造
        </h2>
        <p class="text-slate-700">
          8 つのリポジトリが一つの広域系を形成している。
        </p>
        <div class="overflow-x-auto rounded-lg border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">リポジトリ</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">リンク</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="px-4 py-3 text-slate-700">universal-guideline</td>
                <td class="px-4 py-3"><a href="https://github.com/tanaakk/universal-guideline" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:text-cyan-700 hover:underline">github.com/tanaakk/universal-guideline</a></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">holographic-sphere-topology</td>
                <td class="px-4 py-3"><a href="https://github.com/tanaakk/holographic-sphere-topology" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:text-cyan-700 hover:underline">github.com/tanaakk/holographic-sphere-topology</a></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">GAAS-dissipative-constraints</td>
                <td class="px-4 py-3"><a href="https://github.com/tanaakk/GAAS-dissipative-constraints" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:text-cyan-700 hover:underline">github.com/tanaakk/GAAS-dissipative-constraints</a></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">complex-physics-scale</td>
                <td class="px-4 py-3"><a href="https://github.com/tanaakk/complex-physics-scale" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:text-cyan-700 hover:underline">github.com/tanaakk/complex-physics-scale</a></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">law-of-scale-verificator</td>
                <td class="px-4 py-3"><a href="https://github.com/tanaakk/law-of-scale-verificator" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:text-cyan-700 hover:underline">github.com/tanaakk/law-of-scale-verificator</a></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">homotopical-coherence-engine</td>
                <td class="px-4 py-3"><a href="https://github.com/tanaakk/homotopical-coherence-engine" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:text-cyan-700 hover:underline">github.com/tanaakk/homotopical-coherence-engine</a></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">intangibles-valuation-logic</td>
                <td class="px-4 py-3"><a href="https://github.com/tanaakk/intangibles-valuation-logic" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:text-cyan-700 hover:underline">github.com/tanaakk/intangibles-valuation-logic</a></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">operating-leverage-identifier</td>
                <td class="px-4 py-3"><a href="https://github.com/tanaakk/operating-leverage-identifier" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:text-cyan-700 hover:underline">github.com/tanaakk/operating-leverage-identifier</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-12 space-y-4">
        <h2 class="text-xl font-semibold text-slate-900">主なルール一覧</h2>
        <ul class="space-y-2 text-slate-700">
          <li><code class="rounded bg-slate-100 px-2 py-1 text-cyan-600">tanaakk-universal-schema.mdc</code> — Universal Data Architecture。規格階層（L4A/L4B/L4C）、UUID v4、会計API連携</li>
          <li><code class="rounded bg-slate-100 px-2 py-1 text-cyan-600">tanaakk-uuid-hybrid.mdc</code> — UUID v4/v7 ハイブリッド</li>
          <li><code class="rounded bg-slate-100 px-2 py-1 text-cyan-600">tanaakk-saas-procedure.mdc</code> — TANAAKK SaaS 標準プロシージャ</li>
          <li><code class="rounded bg-slate-100 px-2 py-1 text-cyan-600">tanaakk-api-first.mdc</code> — API First / Schema First の開発ワークフロー指針</li>
          <li><code class="rounded bg-slate-100 px-2 py-1 text-cyan-600">tanaakk-security.mdc</code> — セキュリティ（OWASP ASVS・MITRE ATT&CK）</li>
          <li><code class="rounded bg-slate-100 px-2 py-1 text-cyan-600">tanaakk-ui-ux.mdc</code> — 共通UI/UX（カラー・タイポ・アクセシビリティ）</li>
          <li><code class="rounded bg-slate-100 px-2 py-1 text-cyan-600">tanaakk-responsive-first.mdc</code> — マルチデバイス対応・レスポンシブファースト規則</li>
        </ul>
      </section>

      <section class="mt-12 rounded-lg border border-slate-200 bg-slate-100/30 p-6">
        <h3 class="text-lg font-medium text-cyan-600">パッケージング方針</h3>
        <p class="mt-2 text-slate-700 text-sm">
          スキーマが決まれば procedure が決まる（groundism-ontopologics）。<strong>スキーマ・procedure・UUID 採番ルール・業種別ケーススタディは同一リポジトリでパッケージングする。</strong> 分離すると決定の連鎖が断ち切られる。
        </p>
      </section>
    </article>
  );
}
