import { ArrowLeft, GitBranch } from "lucide-solid";
import { translations } from "../i18n/translations";
import type { Locale } from "../i18n/translations";

export default function Pipeline(props: { lang: Locale; onBack: () => void }) {
  const t = translations[props.lang];
  const p = t.home.pipeline;
  const steps = [p.axiom, p.proof, p.theorems, p.theory] as const;
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
          <GitBranch class="size-8 text-cyan-600" />
          {p.title}
        </h1>
        <p class="mt-2 text-slate-600">{p.intro}</p>
      </header>

      <section class="space-y-6">
        <ol class="space-y-4">
          {steps.map((step, i) => (
            <li class="flex items-start gap-4">
              <span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700">
                {i + 1}
              </span>
              <div>
                <strong class="text-slate-900">
                  {step.term}
                  {step.ja && <span class="ml-2 font-normal text-slate-500">({step.ja})</span>}
                </strong>
                <p class="mt-0.5 text-slate-600">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
