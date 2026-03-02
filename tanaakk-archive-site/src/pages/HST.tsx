import { ArrowLeft, Layers, Box } from "lucide-solid";
import { useNavigate, useParams } from "@solidjs/router";
import { translations } from "../i18n/translations";
import type { Locale } from "../i18n/translations";

export default function HST(props: {
  lang: Locale;
  onBack: () => void;
}) {
  const t = translations[props.lang];
  const params = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const goToStatement = () => navigate(`/${params.lang}/statement`);
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
          <Layers class="size-8 text-cyan-600" />
          HST — Holographic Sphere Topology
        </h1>
        <p class="mt-2 text-slate-600">{t.home.hst.title}</p>
        <p class="mt-1 text-slate-500 text-sm">{t.home.hst.desc}</p>
      </header>

      <section class="space-y-6">
        <h2 class="text-xl font-semibold text-slate-900">1. 変化の背景：なぜ「これまでの常識」を変えるのか</h2>
        <p class="text-slate-700 leading-relaxed">
          TANAAKKの <strong>GAAS (Growth as a Service)</strong> において、私たちが提供すべき最大の価値は「ROICスプレッドの最大化とLaw of Scaleに準ずるオペレーティングレバレッジの創出」です。これまでの10年間、多くの開発は「CSS」「SQL」「React」「Docker」「Node.js」を主軸としてきました。これらは誕生した当時は極めて合理的でしたが、2026年現在のインフラ環境下では、むしろ成長を阻害する「重い負債」へと変貌しています。
        </p>

        <h2 class="text-lg font-medium text-slate-800">2. GAAS 次世代標準スタックの全容</h2>
        <p class="text-slate-700">
          「部分を直すと全体が壊れる」という負債を徹底的に排除し、エンジニアが「ビジネスロジック」だけに集中できる環境を定義します。
        </p>
        <div class="overflow-x-auto rounded-lg border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">領域</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">旧構成（負債）</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">新構成（GAAS標準）</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 text-sm">
              <tr>
                <td class="px-4 py-3 text-slate-700">UI基盤</td>
                <td class="px-4 py-3 text-slate-600">React (仮想DOM)</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">SolidJS (Signals)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">スタイリング</td>
                <td class="px-4 py-3 text-slate-600">独自CSSファイル</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">Tailwind CSS v4</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">実行環境</td>
                <td class="px-4 py-3 text-slate-600">Node.js / Docker</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">Bun</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">DB管理</td>
                <td class="px-4 py-3 text-slate-600">生のSQL直接管理</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">Drizzle ORM</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">DBエンジン</td>
                <td class="px-4 py-3 text-slate-600">PostgreSQL / MySQL</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">SQLite (LibSQL)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">フォント/アイコン</td>
                <td class="px-4 py-3 text-slate-600">Webフォント / SVG管理</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">System-Native / Lucide</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="text-lg font-medium text-slate-800">3. 境界面への情報の記入がエンジニアの役割になった</h2>
        <p class="text-slate-700 leading-relaxed">
          質量が増した現代のソフトウェアはイベントホライズンに全ての情報が書き込まれる事象の地平線のようにhttps://という境界面が機能するようになった。「中身（サーバーやDockerの内部）」はブラックホールの内側のように観測不能（抽象化）になり、すべての価値と情報は「https://」という事象の地平線（イベントホライズン）上の2次元的な境界面に集約された、と解釈できる。
        </p>

        <h2 class="text-lg font-medium text-slate-800 flex items-center gap-2">
          <Box class="size-5 text-cyan-600" />
          4. 次の時代 — 事業のブラックボックス球化
        </h2>
        <p class="text-slate-700">
          あらゆるアプリケーションは軽い処理の組み合わせに変わる。次の時代で重要なのは、系内部を研究するのではなく、ブラックボックスを許容し、推論によって結果の予測可能性を実現する知恵を持つことである。
        </p>
        <div class="rounded-lg border border-cyan-200 bg-cyan-50 p-6">
          <p class="text-cyan-700 font-medium text-center">
            資本 (Input) → [ Object₁ ⟷ Object₂ ⟷ … ⟷ Objectₙ ] → 純利益 (Output)
          </p>
          <p class="mt-2 text-center text-sm text-slate-600">↑ Morphism で接続、順序を最適化</p>
        </div>

        <blockquote class="border-l-4 border-cyan-500 pl-6 italic text-slate-600">
          「アプリをダウンロードしてください」とお願いする時代は終わり、全てのサービスを、即座にURLひとつで世界へ配信する時代になり、各OSに依存したアプリはWebViewとして従属変数になりました。
        </blockquote>

        <button
          type="button"
          onClick={goToStatement}
          class="text-cyan-600 hover:text-cyan-700 hover:underline text-sm font-medium"
        >
          ← {t.home.statementTitle}
        </button>
      </section>
    </article>
  );
}
