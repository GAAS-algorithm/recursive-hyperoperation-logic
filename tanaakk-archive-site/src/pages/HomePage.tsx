import { Globe, BookOpen, ExternalLink } from "lucide-solid";
import type { Locale } from "../i18n/translations";

export type Page = "home" | "hst" | "guideline" | "sites" | "statements";

type T = ReturnType<typeof import("../i18n/translations").translations.en>;

export default function HomePage(props: {
  lang: Locale;
  t: T;
  onNavigate: (p: Page) => void;
}) {
  const t = props.t;
  return (
    <div class="space-y-16">
      <section class="text-center space-y-6">
        <h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {t.home.title}
        </h1>
        <p class="mx-auto max-w-2xl text-xl text-slate-600">
          {t.home.subtitle}
        </p>
        <p class="text-sm text-cyan-600">
          {t.home.tagline}
        </p>
      </section>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          onClick={() => props.onNavigate("hst")}
          class="group cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all hover:border-cyan-400 hover:bg-white hover:shadow-md"
        >
          <div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
            <Globe class="size-6" />
          </div>
          <h2 class="text-xl font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
            {t.home.hst.title}
          </h2>
          <p class="mt-2 text-slate-600">
            {t.home.hst.desc}
          </p>
          <p class="mt-4 text-sm text-cyan-600">{t.home.hst.cta}</p>
        </article>

        <article
          onClick={() => props.onNavigate("guideline")}
          class="group cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all hover:border-cyan-400 hover:bg-white hover:shadow-md"
        >
          <div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
            <BookOpen class="size-6" />
          </div>
          <h2 class="text-xl font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
            {t.home.guideline.title}
          </h2>
          <p class="mt-2 text-slate-600">
            {t.home.guideline.desc}
          </p>
          <p class="mt-4 text-sm text-cyan-600">{t.home.guideline.cta}</p>
        </article>

        <article
          onClick={() => props.onNavigate("sites")}
          class="group cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all hover:border-cyan-400 hover:bg-white hover:shadow-md"
        >
          <div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
            <ExternalLink class="size-6" />
          </div>
          <h2 class="text-xl font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
            {t.home.sites.title}
          </h2>
          <p class="mt-2 text-slate-600">
            {t.home.sites.desc}
          </p>
          <p class="mt-4 text-sm text-cyan-600">{t.home.sites.cta}</p>
        </article>
      </div>
    </div>
  );
}
