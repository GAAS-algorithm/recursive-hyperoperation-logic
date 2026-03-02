import { useParams, useNavigate } from "@solidjs/router";
import { createMemo, createSignal } from "solid-js";
import { Archive, GitBranch, Database, MessageSquare, FileCheck, Box, BookMarked, Lightbulb, Layers, Wrench, ExternalLink, ChevronDown, Menu, X } from "lucide-solid";
import { LocaleContext } from "./context/LocaleContext";
import { locales, localeNames, translations } from "./i18n/translations";
import type { Locale } from "./i18n/translations";
import HomePage from "./pages/HomePage";
import Theory from "./pages/Theory";
import Pipeline from "./pages/Pipeline";
import Statement from "./pages/Statement";
import HST from "./pages/HST";
import Proposition from "./pages/Proposition";
import Axiom from "./pages/Axiom";
import Framework from "./pages/Framework";
import Toolkit from "./pages/Toolkit";
import Theorem from "./pages/Theorem";
import Schema from "./pages/Schema";
import Sites from "./pages/Sites";
import type { Page } from "./pages/HomePage";

const SIDEBAR_ORDER: { id: Page; icon: typeof Archive }[] = [
  { id: "home", icon: Archive },
  { id: "pipeline", icon: GitBranch },
  { id: "statement", icon: MessageSquare },
  { id: "proposition", icon: FileCheck },
  { id: "axiom", icon: Box },
  { id: "theorem", icon: BookMarked },
  { id: "theory", icon: Lightbulb },
  { id: "schema", icon: Database },
  { id: "framework", icon: Layers },
  { id: "toolkit", icon: Wrench },
  { id: "sites", icon: ExternalLink },
];

function isValidLocale(lang: string | undefined): lang is Locale {
  return lang === "en" || lang === "ja" || lang === "vn";
}

export default function Layout() {
  const params = useParams<{ lang: string; page?: string; subpage?: string }>();
  const navigate = useNavigate();

  const lang = createMemo(() => {
    const l = params.lang;
    return isValidLocale(l) ? l : "en";
  });

  const t = createMemo(() => translations[lang()]);
  const page = createMemo((): Page => {
    const p = params.page;
    if (p === "pipeline") return "pipeline";
    if (p === "schema") return "schema";
    if (p === "statement") return "statement";
    if (p === "proposition") return "proposition";
    if (p === "axiom") return "axiom";
    if (p === "theorem") return "theorem";
    if (p === "theory") return "theory";
    if (p === "framework") return "framework";
    if (p === "toolkit") return "toolkit";
    if (p === "sites") return "sites";
    return "home";
  });

  const setPage = (p: Page) => {
    const base = `/${lang()}`;
    if (p === "home") navigate(`${base}/`);
    else navigate(`${base}/${p}`);
  };

  const setLang = (l: Locale) => {
    setDropdownOpen(false);
    const p = page();
    const sub = params.subpage;
    if (p === "home") navigate(`/${l}`);
    else if (p === "statement" && sub === "hst") navigate(`/${l}/statement/hst`);
    else navigate(`/${l}/${p}`);
  };

  const [dropdownOpen, setDropdownOpen] = createSignal(false);
  const [menuOpen, setMenuOpen] = createSignal(false);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (p: Page) => {
    setPage(p);
    closeMenu();
  };

  const navLabel = (id: Page) => {
    if (id === "home") return t().nav.top;
    return t().nav[id as keyof typeof t.nav] ?? id;
  };

  return (
    <LocaleContext.Provider value={lang()}>
      <div class="min-h-screen bg-white text-slate-900 font-sans antialiased">
        <header class="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4">
          <div class="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              class="flex lg:hidden size-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label={menuOpen() ? "Close menu" : "Open menu"}
            >
              {menuOpen() ? <X class="size-6" /> : <Menu class="size-6" />}
            </button>
            <a
              href={`/${lang()}/`}
              onClick={(e) => { e.preventDefault(); setPage("home"); }}
              class="flex h-10 items-center"
            >
              <img
                src="/gaas-logo.png"
                alt="GAAS - Growth-as-a-Service"
                class="h-10 w-auto object-contain"
              />
            </a>
          </div>
          <div class="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((o) => !o)}
              class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {localeNames[lang()]}
              <ChevronDown class={`size-4 transition-transform ${dropdownOpen() ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen() && (
              <>
                <div
                  class="fixed inset-0 z-40"
                  onClick={() => setDropdownOpen(false)}
                  aria-hidden="true"
                />
                <ul
                  class="absolute right-0 top-full z-50 mt-1 min-w-[140px] rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
                  role="listbox"
                >
                  {locales.map((l) => (
                    <li role="option">
                      <button
                        type="button"
                        onClick={() => setLang(l)}
                        class={`w-full px-4 py-2 text-left text-sm transition-colors ${
                          lang() === l ? "bg-cyan-50 text-cyan-600" : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {localeNames[l]}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </header>
        {menuOpen() && (
          <div
            class="fixed inset-0 z-40 bg-black/20 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
        <div
          class={`fixed left-0 top-14 z-50 h-[calc(100vh-3.5rem)] w-64 transform border-r border-slate-200 bg-white shadow-xl transition-transform duration-200 ease-out lg:hidden ${
            menuOpen() ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav class="flex flex-col gap-1 p-4">
            {SIDEBAR_ORDER.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  onClick={() => handleNavClick(item.id)}
                  class={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    page() === item.id
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon class="size-4" />
                  {navLabel(item.id)}
                </button>
              );
            })}
          </nav>
          <div class="absolute bottom-0 left-0 right-0 border-t border-slate-200 p-4 space-y-2">
            <a
              href="https://www.tanaakk.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-xs text-slate-500 hover:text-cyan-600 hover:underline"
            >
              © TANAAKK
            </a>
            <p class="text-xs text-slate-400">v{__APP_VERSION__}</p>
          </div>
        </div>

        <div class="flex">
          <aside class="hidden lg:flex sticky top-14 h-[calc(100vh-3.5rem)] w-56 shrink-0 flex-col border-r border-slate-200 bg-white">
            <nav class="flex flex-col gap-1 p-4">
              {SIDEBAR_ORDER.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    onClick={() => setPage(item.id)}
                    class={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      page() === item.id
                        ? "bg-cyan-50 text-cyan-600"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <Icon class="size-4" />
                    {navLabel(item.id)}
                  </button>
                );
              })}
            </nav>
            <div class="mt-auto border-t border-slate-200 p-4 space-y-2">
              <a
                href="https://www.tanaakk.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="block text-xs text-slate-500 hover:text-cyan-600 hover:underline"
              >
                © TANAAKK
              </a>
              <p class="text-xs text-slate-400">v{__APP_VERSION__}</p>
            </div>
          </aside>

          <main class="min-w-0 flex-1 px-4 py-12 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-5xl">
              {page() === "home" && <HomePage lang={lang()} t={t()} onNavigate={setPage} />}
              {page() === "pipeline" && <Pipeline lang={lang()} onBack={() => setPage("home")} />}
              {page() === "schema" && <Schema lang={lang()} onBack={() => setPage("home")} />}
              {page() === "statement" && !params.subpage && <Statement lang={lang()} onBack={() => setPage("home")} />}
              {page() === "statement" && params.subpage === "hst" && (
                <HST lang={lang()} onBack={() => navigate(`/${lang()}/statement`)} />
              )}
              {page() === "proposition" && <Proposition lang={lang()} onBack={() => setPage("home")} />}
              {page() === "axiom" && <Axiom lang={lang()} onBack={() => setPage("home")} />}
              {page() === "theorem" && <Theorem lang={lang()} onBack={() => setPage("home")} />}
              {page() === "theory" && <Theory lang={lang()} onBack={() => setPage("home")} />}
              {page() === "framework" && <Framework lang={lang()} onBack={() => setPage("home")} />}
              {page() === "toolkit" && <Toolkit lang={lang()} onBack={() => setPage("home")} />}
              {page() === "sites" && <Sites lang={lang()} t={t()} />}
            </div>
          </main>
        </div>
      </div>
    </LocaleContext.Provider>
  );
}
