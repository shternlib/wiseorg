"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="aurora-bg absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="gradient-text">{t("title")}</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("subtitle")}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/docs/quick-start">
            <Button size="lg" className="gap-2 bg-brand-violet hover:bg-brand-violet/90 text-white px-8">
              {t("getStarted")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/community">
            <Button size="lg" variant="outline" className="gap-2 border-border px-8">
              <Users className="h-4 w-4" />
              {t("joinCommunity")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
