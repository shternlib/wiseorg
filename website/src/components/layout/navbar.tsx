"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Github, Globe } from "lucide-react";

const navLinks = [
  { href: "/docs", key: "docs" },
  { href: "/examples", key: "examples" },
  { href: "/community", key: "community" },
  { href: "/blog", key: "blog" },
  { href: "/changelog", key: "changelog" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = () => {
    const nextLocale = locale === "en" ? "ru" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img src="/intenture-icon.svg" alt="Intenture" className="h-7 w-7 rounded" />
          <span className="font-display text-xl font-bold gradient-text">
            Intenture
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={switchLocale}
            className="gap-1.5 text-muted-foreground"
          >
            <Globe className="h-4 w-4" />
            {locale === "en" ? "RU" : "EN"}
          </Button>
          <a
            href="https://github.com/shternlib/wiseorg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Github className="h-4 w-4" />
            </Button>
          </a>
          <Link href="/docs/quick-start">
            <Button size="sm" className="bg-brand-violet hover:bg-brand-violet/90 text-white">
              {t("getStarted")}
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" />}
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-card">
            <SheetTitle className="font-display gradient-text">Intenture</SheetTitle>
            <nav className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="my-4 border-t border-border" />
              <Button
                variant="ghost"
                size="sm"
                onClick={switchLocale}
                className="justify-start gap-2 text-muted-foreground"
              >
                <Globe className="h-4 w-4" />
                {locale === "en" ? "Русский" : "English"}
              </Button>
              <Link href="/docs/quick-start" onClick={() => setOpen(false)}>
                <Button className="w-full bg-brand-violet hover:bg-brand-violet/90 text-white">
                  {t("getStarted")}
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
