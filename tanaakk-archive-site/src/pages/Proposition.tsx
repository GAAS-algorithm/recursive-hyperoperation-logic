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

        {(t.home as any).propositions && (
          <div class="space-y-8 mt-8">
            <h2 class="text-xl font-semibold text-slate-900">
              {(t.home as any).propositions.title}
            </h2>
            <p class="text-slate-600">{(t.home as any).propositions.intro}</p>

            {["A", "B", "C"].map((key) => {
              const p = (t.home as any).propositions?.[key];
              if (!p) return null;
              return (
                <div
                  key={key}
                  class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 class="text-lg font-semibold text-cyan-700">{p.name}</h3>
                  <blockquote class="mt-3 border-l-4 border-cyan-500 pl-4 italic text-slate-700">
                    {p.formula}
                  </blockquote>
                  <p class="mt-3 text-slate-600 text-sm">
                    <strong>Logic:</strong> {p.logic}
                  </p>
                </div>
              );
            })}

            <div class="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-6">
              <h3 class="text-lg font-semibold text-cyan-800">Conclusion</h3>
              <p class="mt-2 text-slate-800 font-medium">
                {(t.home as any).propositions?.conclusion}
              </p>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={goToPipeline}
          class="text-cyan-600 hover:text-cyan-700 hover:underline text-sm font-medium mt-6"
        >
          {t.home.pipeline.title} →
        </button>
      </section>
    </article>
  );
}
