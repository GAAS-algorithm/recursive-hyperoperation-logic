import { ArrowLeft, Lightbulb } from "lucide-solid";
import { useNavigate, useParams } from "@solidjs/router";
import { translations } from "../i18n/translations";
import type { Locale } from "../i18n/translations";

export default function Theory(props: { lang: Locale; onBack: () => void }) {
  const t = translations[props.lang];
  const navigate = useNavigate();
  const params = useParams<{ lang: string }>();
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
          <Lightbulb class="size-8 text-cyan-600" />
          {t.home.theory}
        </h1>
        <p class="mt-2 text-slate-600">
          {t.home.theorySubtitle}
        </p>
        <button
          type="button"
          onClick={goToPipeline}
          class="mt-4 text-cyan-600 hover:text-cyan-700 hover:underline text-sm font-medium"
        >
          {t.home.pipeline.title} →
        </button>
      </header>

      <section class="space-y-6">
        <h2 class="text-xl font-semibold text-slate-900">{t.home.infrastructureLabel}</h2>
        <p class="text-slate-700">{t.home.theoryInfrastructure}</p>
        <div class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-700">
          {t.home.portalInfrastructure}
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-xl font-semibold text-slate-900">{t.home.phasesTitle}</h2>
        <div class="grid gap-6 sm:grid-cols-2">
          {t.home.phases.map((phase) => (
            <article
              class="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-cyan-400 hover:bg-white hover:shadow-md"
            >
              <h3 class="text-xl font-semibold text-slate-900">{phase.name}</h3>
              <p class="mt-2 text-slate-600">{phase.period}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
