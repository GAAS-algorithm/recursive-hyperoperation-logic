import type { Locale } from "../i18n/translations";

export type Page = "home" | "pipeline" | "schema" | "statement" | "proposition" | "axiom" | "theorem" | "theory" | "framework" | "toolkit" | "sites";

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
        <p class="mt-4 text-slate-600 max-w-2xl mx-auto">
          {t.home.subtitle}
        </p>
      </section>

      <section class="max-w-3xl mx-auto space-y-4">
        <p class="text-slate-700 leading-relaxed">
          {t.home.portalOverview}
        </p>
        <p class="text-sm text-slate-600">
          <span class="font-medium text-slate-700">{t.home.infrastructureLabel}:</span> {t.home.portalInfrastructure}
        </p>
      </section>
    </div>
  );
}
