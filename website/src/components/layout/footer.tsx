"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-display text-lg font-bold gradient-text">
              Intenture
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("description")}
            </p>
          </div>

          {/* Docs */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("docs")}</h3>
            <ul className="mt-3 space-y-2">
              {[
                { href: "/docs/overview", label: t("overview") },
                { href: "/docs/glossary", label: t("glossary") },
                { href: "/docs/syntax", label: t("syntax") },
                { href: "/docs/lifecycle", label: t("lifecycle") },
                { href: "/docs/quick-start", label: t("quickStart") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-violet"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("resources")}</h3>
            <ul className="mt-3 space-y-2">
              {[
                { href: "/examples", label: t("examples") },
                { href: "/docs/patterns", label: t("patterns") },
                { href: "/docs/visual", label: t("visualNotation") },
                { href: "/blog", label: t("blog") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-violet"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("community")}</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://github.com/nicememe/intenture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-brand-violet"
                >
                  {t("github")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-brand-violet"
                >
                  {t("discord")}
                </a>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-muted-foreground transition-colors hover:text-brand-violet"
                >
                  {t("contribute")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; 2026 {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
