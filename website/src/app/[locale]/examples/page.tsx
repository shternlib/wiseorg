"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Bot, Package } from "lucide-react";

const examples = [
  {
    slug: "health-care-team",
    key: "healthCare",
    icon: Heart,
    color: "text-semantic-success bg-semantic-success/10",
    statusColor: "bg-semantic-success/10 text-semantic-success border-semantic-success/30",
  },
  {
    slug: "ai-agent",
    key: "aiAgent",
    icon: Bot,
    color: "text-brand-violet bg-brand-violet/10",
    statusColor: "bg-semantic-warning/10 text-semantic-warning border-semantic-warning/30",
  },
  {
    slug: "product-service",
    key: "productService",
    icon: Package,
    color: "text-brand-teal bg-brand-teal/10",
    statusColor: "bg-semantic-warning/10 text-semantic-warning border-semantic-warning/30",
  },
];

export default function ExamplesPage() {
  const t = useTranslations("examples");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="gradient-text">{t("title")}</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {examples.map((example) => {
          const Icon = example.icon;
          return (
            <Link key={example.slug} href={`/examples/${example.slug}`}>
              <Card className="group h-full border-border/50 bg-card/50 transition-all duration-300 hover:border-brand-violet/30 hover:shadow-lg hover:shadow-brand-violet/5">
                <CardContent className="flex flex-col p-6">
                  <div className={`inline-flex w-fit rounded-lg p-2.5 ${example.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="mt-4 text-xl font-semibold text-foreground">
                    {t(`${example.key}.title`)}
                  </h2>

                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {t(`${example.key}.description`)}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className={example.statusColor}>
                      {t(`${example.key}.status`)}
                    </Badge>
                    <Badge variant="outline" className="border-border text-muted-foreground">
                      {t("greenfield")}
                    </Badge>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-violet">
                    {t("viewExample")}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
