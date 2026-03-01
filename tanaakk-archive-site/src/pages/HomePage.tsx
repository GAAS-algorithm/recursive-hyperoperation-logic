import type { Locale } from "../i18n/translations";

export type Page = "home" | "hst" | "guideline" | "sites";

type T = ReturnType<typeof import("../i18n/translations").translations.en>;

export default function HomePage(props: {
  lang: Locale;
  t: T;
  onNavigate: (p: Page) => void;
}) {
  const t = props.t;
  return (
    <div class="space-y-16">
      <section class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {t.home.title}
        </h1>
      </section>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {t.home.phases.map((phase) => (
          <article
            class="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all hover:border-cyan-400 hover:bg-white hover:shadow-md"
          >
            <h2 class="text-xl font-semibold text-slate-900">
              {phase.name}
            </h2>
            <p class="mt-2 text-slate-600">
              {phase.period}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
