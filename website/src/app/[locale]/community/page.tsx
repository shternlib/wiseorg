"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, MessageCircle, GitPullRequest, Map, ArrowUpRight } from "lucide-react";

const channels = [
  { key: "github", icon: Github, href: "https://github.com/shternlib/wiseorg" },
  { key: "discord", icon: MessageCircle, href: "#" },
  { key: "contribute", icon: GitPullRequest, href: "https://github.com/shternlib/wiseorg/blob/main/CONTRIBUTING.md" },
];

export default function CommunityPage() {
  const t = useTranslations("community");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="gradient-text">{t("title")}</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
      </div>

      {/* Channels */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <a key={channel.key} href={channel.href} target="_blank" rel="noopener noreferrer">
              <Card className="group h-full border-border/50 bg-card/50 transition-all duration-300 hover:border-brand-violet/30">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-brand-violet" />
                  <h2 className="mt-4 text-xl font-semibold text-foreground">
                    {t(`${channel.key}.title`)}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t(`${channel.key}.description`)}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-violet">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>

      {/* Roadmap */}
      <div className="mt-20">
        <div className="mb-8 flex items-center gap-3">
          <Map className="h-6 w-6 text-brand-violet" />
          <h2 className="font-display text-2xl font-bold">
            <span className="gradient-text">{t("roadmap.title")}</span>
          </h2>
        </div>
        <p className="mb-8 text-muted-foreground">{t("roadmap.description")}</p>

        <div className="space-y-4">
          {(["v1", "v2", "v3", "v4", "v5"] as const).map((key) => (
            <Card key={key} className="border-border/50 bg-card/50">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="mt-0.5">
                  <Badge
                    variant="outline"
                    className={
                      t(`roadmapItems.${key}.priority`) === "Critical" || t(`roadmapItems.${key}.priority`) === "Критический"
                        ? "border-semantic-error/30 text-semantic-error"
                        : t(`roadmapItems.${key}.priority`) === "High" || t(`roadmapItems.${key}.priority`) === "Высокий"
                        ? "border-semantic-warning/30 text-semantic-warning"
                        : "border-semantic-info/30 text-semantic-info"
                    }
                  >
                    {t(`roadmapItems.${key}.priority`)}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t(`roadmapItems.${key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`roadmapItems.${key}.description`)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
