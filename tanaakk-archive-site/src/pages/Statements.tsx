import type { Locale } from "../i18n/translations";

type T = ReturnType<typeof import("../i18n/translations").translations.en>;

export default function Statements(props: { lang: Locale; t: T }) {
  return (
    <article class="prose prose-slate max-w-none">
      <header class="mb-12">
        <h1 class="text-3xl font-bold text-slate-900 sm:text-4xl">{props.t.statements.title}</h1>
        <p class="mt-2 text-slate-600">{props.t.statements.subtitle}</p>
      </header>

      <section class="rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p class="text-slate-600">{props.t.statements.placeholder}</p>
      </section>
    </article>
  );
}
