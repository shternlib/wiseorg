"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen, List, Network, Code, LayoutGrid, RotateCcw,
  Palette, Brain, Settings, Library, Zap, MessageSquare,
} from "lucide-react";

const docLinks = [
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

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("docs");
  const pathname = usePathname();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-8 py-8">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24">
            <h2 className="mb-4 text-sm font-semibold text-foreground">{t("title")}</h2>
            <ScrollArea className="h-[calc(100vh-10rem)]">
              <nav className="flex flex-col gap-1">
                {docLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === `/docs/${link.slug}`;
                  return (
                    <Link
                      key={link.slug}
                      href={`/docs/${link.slug}`}
                      className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-brand-violet/10 text-brand-violet font-medium"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {t(link.key)}
                    </Link>
                  );
                })}
              </nav>
            </ScrollArea>
          </div>
        </aside>

        {/* Content */}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
