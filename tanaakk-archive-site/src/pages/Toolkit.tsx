import { ArrowLeft, Wrench } from "lucide-solid";
import { translations } from "../i18n/translations";
import type { Locale } from "../i18n/translations";

export default function Toolkit(props: { lang: Locale; onBack: () => void }) {
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
          <Wrench class="size-8 text-cyan-600" />
          {t.home.toolkitTitle}
        </h1>
        <p class="mt-2 text-slate-600">{t.home.toolkitSubtitle}</p>
      </header>

      <section class="space-y-6">
        <h2 class="text-xl font-semibold text-slate-800">GAAS Stack</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>SolidJS</strong> — Reactive UI framework</li>
          <li><strong>Tailwind v4</strong> — Utility-first CSS</li>
          <li><strong>Bun</strong> — Runtime & package manager</li>
          <li><strong>Drizzle</strong> — TypeScript ORM</li>
          <li><strong>Lucide</strong> — Icon library</li>
        </ul>
      </section>
    </article>
  );
}
