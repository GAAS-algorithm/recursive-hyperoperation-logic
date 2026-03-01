import { ArrowLeft, Code, Layers, Box } from "lucide-solid";
import { translations } from "../i18n/translations";
import type { Locale } from "../i18n/translations";

export default function HST(props: { lang: Locale; onBack: () => void }) {
  const t = translations[props.lang];
  return (
    <article class="prose prose-slate max-w-none">
      <button type="button"
        onClick={props.onBack}
        class="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-600 transition-colors"
      >
        <ArrowLeft class="size-4" />
        {t.common.back}
      </button>

      <header class="mb-12">
        <h1 class="text-3xl font-bold text-slate-900 sm:text-4xl">
          Holographic Sphere Topology｜GAAS流システム論HST
        </h1>
        <p class="mt-2 text-cyan-600">Growth-as-a-Service™ | Decrypt History, Encrypt Future™</p>
        <p class="mt-4 text-slate-600">2026年2月26日 — GAASにおける次世代開発標準スタックへの移行と技術負債ゼロに向けた転換方針</p>
      </header>

      <section class="space-y-6">
        <h2 class="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Layers class="size-5 text-cyan-600" />
          1. 変化の背景：なぜ「これまでの常識」を変えるのか
        </h2>
        <p class="text-slate-700 leading-relaxed">
          TANAAKKの <strong>GAAS (Growth as a Service)</strong> において、私たちが提供すべき最大の価値は「ROICスプレッドの最大化とLaw of Scaleに準ずるオペレーティングレバレッジの創出」です。これまでの10年間、多くの開発は「CSS」「SQL」「React」「Docker」「Node.js」を主軸としてきました。これらは誕生した当時は極めて合理的でしたが、2026年現在のインフラ環境下では、むしろ成長を阻害する「重い負債」へと変貌しています。
        </p>

        <h3 class="text-lg font-medium text-slate-800">時代背景と技術の変遷</h3>
        <p class="text-slate-700">
          かつての技術スタックは、「未熟なブラウザ」と「細い通信環境」を補うための補助輪でした。
        </p>
        <ul class="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>2013年 React 誕生:</strong> ブラウザごとの挙動の差（特にIEの存在）と低い描画性能を、「仮想DOM」という力技で隠蔽</li>
          <li><strong>2009年 Node.js 誕生:</strong> C10K問題をJavaScriptの非同期処理で解決</li>
        </ul>

        <h3 class="text-lg font-medium text-slate-800">なぜ今、それらが「負債」になるのか</h3>
        <p class="text-slate-700">
          2022年のIEサポート終了を境に、ブラウザは完全に標準化されました。2013年と現在の前提条件は真逆です。
        </p>
        <div class="overflow-x-auto rounded-lg border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">要素</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">2013年（React/Node全盛期）</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">2026年（現在）</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="px-4 py-3 text-slate-700">ブラウザ</td>
                <td class="px-4 py-3 text-slate-600">低機能・バラバラ（IEが現役）</td>
                <td class="px-4 py-3 text-cyan-600">完全に標準化（Safari/Chrome/Edgeが一致）</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">PC/スマホ性能</td>
                <td class="px-4 py-3 text-slate-600">低い（節約と工夫が必要）</td>
                <td class="px-4 py-3 text-cyan-600">非常に高い（ハードの余力がたっぷりある）</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">通信規格</td>
                <td class="px-4 py-3 text-slate-600">HTTP/1.1（逐次送信）</td>
                <td class="px-4 py-3 text-cyan-600">HTTP/3（一括大量送信）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-12 space-y-6">
        <h2 class="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Code class="size-5 text-cyan-600" />
          2. GAAS 次世代標準スタックの全容
        </h2>
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
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">導入のメリット</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 text-sm">
              <tr>
                <td class="px-4 py-3 text-slate-700">UI基盤</td>
                <td class="px-4 py-3 text-slate-600">React (仮想DOM)</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">SolidJS (Signals)</td>
                <td class="px-4 py-3 text-slate-600">部分変更が全体に波及せず、指に吸い付く操作感</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">スタイリング</td>
                <td class="px-4 py-3 text-slate-600">独自CSSファイル</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">Tailwind CSS v4</td>
                <td class="px-4 py-3 text-slate-600">デザインをHTML内で完結。AI(Cursor)によるUI生成を高速化</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">実行環境</td>
                <td class="px-4 py-3 text-slate-600">Node.js / Docker</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">Bun</td>
                <td class="px-4 py-3 text-slate-600">環境構築とビルドを秒単位へ。コンテナの重さを排除</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">DB管理</td>
                <td class="px-4 py-3 text-slate-600">生のSQL直接管理</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">Drizzle ORM</td>
                <td class="px-4 py-3 text-slate-600">SQLを「型」で統治。DB変更による事故を未然に防ぐ</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">DBエンジン</td>
                <td class="px-4 py-3 text-slate-600">PostgreSQL / MySQL</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">SQLite (LibSQL)</td>
                <td class="px-4 py-3 text-slate-600">単一ファイルで完結。サーバーレス/エッジで爆速</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">フォント/アイコン</td>
                <td class="px-4 py-3 text-slate-600">Webフォント / SVG管理</td>
                <td class="px-4 py-3 text-cyan-600 font-medium">System-Native / Lucide</td>
                <td class="px-4 py-3 text-slate-600">読み込み容量ゼロ。AIへの指示が容易な標準シンボル</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-12 space-y-6">
        <h2 class="text-xl font-semibold text-slate-900">3. 境界面への情報の記入がエンジニアの役割になった</h2>
        <p class="text-slate-700 leading-relaxed">
          質量が増した現代のソフトウェアはイベントホライズンに全ての情報が書き込まれる事象の地平線のようにhttps://という境界面が機能するようになった。

          「中身（サーバーやDockerの内部）」はブラックホールの内側のように観測不能（抽象化）になり、すべての価値と情報は「https://」という事象の地平線（イベントホライズン）上の2次元的な境界面に集約された、と解釈できる。
        </p>

        <h3 class="text-lg font-medium text-slate-800">ホログラフィック原理としてのGAASスタック</h3>
        <div class="overflow-x-auto rounded-lg border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">物理的メタファー</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">ソフトウェアの現実</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-slate-800">GAASにおける実装</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="px-4 py-3 text-slate-700">情報のエンコード</td>
                <td class="px-4 py-3 text-slate-600">型とロジックの凝縮</td>
                <td class="px-4 py-3 text-cyan-600">Drizzle + TypeScript</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">境界面の振動</td>
                <td class="px-4 py-3 text-slate-600">リアクティブな更新</td>
                <td class="px-4 py-3 text-cyan-600">SolidJS (Signals)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">表面の模様</td>
                <td class="px-4 py-3 text-slate-600">視覚的インターフェース</td>
                <td class="px-4 py-3 text-cyan-600">Tailwind CSS v4</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-700">観測（アクセス）</td>
                <td class="px-4 py-3 text-slate-600">プロトコル</td>
                <td class="px-4 py-3 text-cyan-600">https:// (PWA)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-12 space-y-6">
        <h2 class="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Box class="size-5 text-cyan-600" />
          4. 次の時代 — 事業のブラックボックス球化
        </h2>
        <p class="text-slate-700">
          あらゆるアプリケーションは軽い処理の組み合わせに変わる。次の時代で重要なのは、**系内部を研究するのではなく、ブラックボックスを許容し、推論によって結果の予測可能性を実現する知恵を持つこと**である。
        </p>
        <div class="rounded-lg border border-cyan-200 bg-cyan-50 p-6">
          <p class="text-cyan-700 font-medium text-center">
            資本 (Input) → [ Object₁ ⟷ Object₂ ⟷ … ⟷ Objectₙ ] → 純利益 (Output)
          </p>
          <p class="mt-2 text-center text-sm text-slate-600">↑ Morphism で接続、順序を最適化</p>
        </div>
      </section>

      <section class="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h3 class="text-lg font-medium text-cyan-600">Cursor指示の例</h3>
        <p class="mt-2 text-slate-700 text-sm">
          TANAAKK GAAS標準スタックによる実装。1. UI: SolidJS (Signals) 2. Styling: Tailwind CSS v4 3. Runtime: Bun 4. Database: Drizzle ORM 5. Visual: Lucide, System-Native。「1ファイル1機能（Self-contained）」を意識し、技術負債ゼロのクリーンなコードを出力。
        </p>
      </section>

      <blockquote class="mt-12 border-l-4 border-cyan-500 pl-6 italic text-slate-600">
        「アプリをダウンロードしてください」とお願いする時代は終わり、全てのサービスを、即座にURLひとつで世界へ配信する時代になり、各OSに依存したアプリはWebViewとして従属変数になりました。これはテクノロジーの一つの時代が終わり、統一された新たな経済圏が立ち上がっていることを意味します。
      </blockquote>
    </article>
  );
}
