import { ExternalLink } from "lucide-solid";
import type { Locale } from "../i18n/translations";

type T = ReturnType<typeof import("../i18n/translations").translations.en>;

export default function Sites(props: { lang: Locale; t: T }) {
  const { sites } = props.t;
  return (
    <article class="prose prose-slate max-w-none">
      <header class="mb-12">
        <h1 class="text-3xl font-bold text-slate-900 sm:text-4xl">{sites.title}</h1>
      </header>

      <div class="space-y-10">
        {sites.categories.map((category) => (
          <section class="space-y-3">
            <h2 class="text-lg font-semibold text-slate-800">{category.name}</h2>
            <ul class="space-y-1.5">
              {category.items.map((site) => (
                <li class="grid gap-x-4 sm:gap-x-6 items-baseline grid-cols-[minmax(0,1fr)] sm:grid-cols-[18rem_5rem_1fr]">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 font-medium text-slate-700 hover:text-cyan-600 hover:underline"
                  >
                    <ExternalLink class="size-4 shrink-0" />
                    {site.name}
                  </a>
                  <span class="text-xs text-slate-400 pl-6 sm:pl-0">
                    {site.launchDate || "—"}
                  </span>
                  <span class="text-sm text-slate-500 font-mono break-all pl-6 sm:pl-0">{site.url}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
