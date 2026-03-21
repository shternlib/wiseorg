"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen, List, Network, Code, LayoutGrid, RotateCcw,
  Palette, Brain, Settings, Library, Zap, MessageSquare,
} from "lucide-react";

const sections = [
  { slug: "overview", icon: BookOpen, key: "overview" },
  { slug: "glossary", icon: List, key: "glossary" },
  { slug: "meta-model", icon: Network, key: "metaModel" },
  { slug: "syntax", icon: Code, key: "syntax" },
  { slug: "canvas", icon: LayoutGrid, key: "canvas" },
  { slug: "lifecycle", icon: RotateCcw, key: "lifecycle" },
  { slug: "visual", icon: Palette, key: "visual" },
  { slug: "ai-protocol", icon: Brain, key: "aiProtocol" },
  { slug: "pm-modes", icon: Settings, key: "pmModes" },
  { slug: "patterns", icon: Library, key: "patterns" },
  { slug: "quick-start", icon: Zap, key: "quickStart" },
  { slug: "ig-prompt", icon: MessageSquare, key: "igPrompt" },
];

export default function DocsPage() {
  const t = useTranslations("docs");

  return (
    <div>
      <h1 className="font-display text-3xl font-bold">
        <span className="gradient-text">{t("title")}</span>
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">{t("subtitle")}</p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.slug} href={`/docs/${section.slug}`}>
              <Card className="group h-full border-border/50 bg-card/50 transition-all duration-300 hover:border-brand-violet/30">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="rounded-lg bg-brand-violet/10 p-2.5 text-brand-violet">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-brand-violet transition-colors">
                    {t(section.key)}
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
