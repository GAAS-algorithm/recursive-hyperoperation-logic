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

    </article>
  );
}
