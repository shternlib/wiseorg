"use client";

import { useTranslations } from "next-intl";
import { FileText } from "lucide-react";

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="gradient-text">{t("title")}</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
        <FileText className="h-16 w-16 text-muted-foreground/30" />
        <p className="text-lg text-muted-foreground">{t("comingSoon")}</p>
      </div>
    </div>
  );
}
