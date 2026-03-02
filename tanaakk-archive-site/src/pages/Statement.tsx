import { ArrowLeft, MessageSquare } from "lucide-solid";
import { useNavigate, useParams } from "@solidjs/router";
import { translations } from "../i18n/translations";
import type { Locale } from "../i18n/translations";

export default function Statement(props: { lang: Locale; onBack: () => void }) {
  const t = translations[props.lang];
  const params = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const goToPipeline = () => navigate(`/${params.lang}/pipeline`);
  const goToHST = () => navigate(`/${params.lang}/statement/hst`);
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
          <MessageSquare class="size-8 text-cyan-600" />
          {t.home.statementTitle}
        </h1>
        {t.home.statementSubtitle && <p class="mt-2 text-slate-600">{t.home.statementSubtitle}</p>}
      </header>

      <section class="space-y-6">
        <div class="rounded-xl border border-slate-200 bg-slate-50 p-6 mt-8">
          <h2 class="text-xl font-semibold text-slate-900 mb-4">
            {(t.home as any).statementCore?.title ?? "Core Statement Summary"}
          </h2>
          {((t.home as any).statementCore?.intro ?? "") && (
            <p class="text-slate-700 mb-4">{(t.home as any).statementCore.intro}</p>
          )}
          <ul class="list-disc list-inside space-y-2 text-slate-700">
            {((t.home as any).statementCore?.items ?? []).map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={goToPipeline}
          class="text-cyan-600 hover:text-cyan-700 hover:underline text-sm font-medium"
        >
          {t.home.pipeline.title} →
        </button>
      </section>

      <section class="mt-16">
        <h2 class="text-xl font-semibold text-slate-900 mb-4">Sub-topics</h2>
        <div class="grid gap-6 sm:grid-cols-2">
          <button
            type="button"
            onClick={goToHST}
            class="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition-all hover:border-cyan-400 hover:bg-white hover:shadow-md"
          >
            <h3 class="text-xl font-semibold text-slate-900">{t.home.hst.title}</h3>
            <p class="mt-2 text-slate-600">{t.home.hst.desc}</p>
            <p class="mt-4 text-sm font-medium text-cyan-600">{t.home.hst.cta}</p>
          </button>
        </div>
      </section>
    </article>
  );
}
