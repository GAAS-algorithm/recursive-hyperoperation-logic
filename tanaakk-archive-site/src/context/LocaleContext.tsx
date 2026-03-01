import { createContext, useContext } from "solid-js";
import type { Locale } from "../i18n/translations";

export const LocaleContext = createContext<Locale>("en");

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) return "en" as Locale;
  return ctx;
}
