import { ArrowLeft, Layers } from "lucide-solid";
import { useNavigate, useParams } from "@solidjs/router";
import { translations } from "../i18n/translations";
import type { Locale } from "../i18n/translations";

export default function Framework(props: { lang: Locale; onBack: () => void }) {
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
          <Layers class="size-8 text-cyan-600" />
          {t.home.frameworkTitle}
        </h1>
        <p class="mt-2 text-slate-600">{t.home.frameworkSubtitle}</p>
      </header>

      <section class="space-y-6">
        <p class="text-slate-700">{t.home.frameworkBody}</p>
        <div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <p class="text-slate-800 font-medium text-center">
            Statement → Proposition → True
          </p>
          <p class="mt-2 text-center text-sm text-slate-600">{t.home.pipeline.intro}</p>
        </div>
        <p class="text-slate-700">
          {t.home.pipeline.axiom.desc} {t.home.pipeline.proof.desc} {t.home.pipeline.theorems.desc} {t.home.pipeline.theory.desc}
        </p>

        {(t.home as any).dashboardMapping && (
          <div class="mt-8 overflow-x-auto">
            <h3 class="text-lg font-semibold text-slate-900 mb-4">
              {(t.home as any).dashboardMapping.title}
            </h3>
            <table class="min-w-full divide-y divide-slate-200 rounded-lg border border-slate-200">
              <thead class="bg-slate-50">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-slate-900">Category</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-slate-900">Item / Value</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-slate-900">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 bg-white">
                {["framework", "pipeline", "toolkit", "taxonomy"].map((key) => {
                  const m = (t.home as any).dashboardMapping?.[key];
                  if (!m) return null;
                  return (
                    <tr key={key}>
                      <td class="px-4 py-3 text-sm font-medium text-slate-900">{m.label}</td>
                      <td class="px-4 py-3 text-sm text-cyan-600 font-medium">{m.value}</td>
                      <td class="px-4 py-3 text-sm text-slate-600">{m.desc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

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
