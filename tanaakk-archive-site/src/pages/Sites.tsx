import { ExternalLink } from "lucide-solid";
import type { Locale } from "../i18n/translations";

const SITE_URLS = [
  "https://www.tanaakk.com",
  "https://gaas.tanaakk.com",
  "https://github.com/tanaakk/universal-guideline",
  "https://www.tanaakk.com/2026/02/26/tech/",
];

type T = ReturnType<typeof import("../i18n/translations").translations.en>;

export default function Sites(props: { lang: Locale; t: T }) {
  const items = props.t.sites.items;
  return (
    <article class="prose prose-slate max-w-none">
      <header class="mb-12">
        <h1 class="text-3xl font-bold text-slate-900 sm:text-4xl">{props.t.sites.title}</h1>
        <p class="mt-2 text-slate-600">{props.t.sites.subtitle}</p>
      </header>

      <ul class="space-y-4">
        {items.map((site, i) => (
          <li>
            <a
              href={SITE_URLS[i]}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 transition-all hover:border-cyan-400 hover:bg-white hover:shadow-md"
            >
              <ExternalLink class="mt-0.5 size-5 shrink-0 text-cyan-600" />
              <div>
                <span class="font-medium text-slate-900">{site.name}</span>
                <p class="mt-0.5 text-sm text-slate-600">{site.desc}</p>
                <p class="mt-1 text-xs text-slate-500">{SITE_URLS[i]}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
