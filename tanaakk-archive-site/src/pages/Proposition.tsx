import { ArrowLeft, FileCheck } from "lucide-solid";
import { useNavigate, useParams } from "@solidjs/router";
import { translations } from "../i18n/translations";
import type { Locale } from "../i18n/translations";

export default function Proposition(props: { lang: Locale; onBack: () => void }) {
  const t = translations[props.lang];
  const params = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const goToPipeline = () => navigate(`/${params.lang}/pipeline`);
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
          <FileCheck class="size-8 text-cyan-600" />
          {t.home.propositionTitle}
        </h1>
        <p class="mt-2 text-slate-600">{t.home.propositionSubtitle}</p>
      </header>

      <section class="space-y-6">
        <p class="text-slate-700">{t.home.propositionBody}</p>
        <button
          type="button"
          onClick={goToPipeline}
          class="text-cyan-600 hover:text-cyan-700 hover:underline text-sm font-medium"
        >
          {t.home.pipeline.title} →
        </button>
      </section>
    </article>
  );
}
