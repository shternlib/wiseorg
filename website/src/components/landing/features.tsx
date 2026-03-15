"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, RotateCcw, LayoutGrid, Brain, Palette, Library } from "lucide-react";

const features = [
  { key: "dualLayer", icon: Layers, color: "text-brand-violet bg-brand-violet/10" },
  { key: "lifecycle", icon: RotateCcw, color: "text-brand-indigo bg-brand-indigo/10" },
  { key: "canvas", icon: LayoutGrid, color: "text-brand-teal bg-brand-teal/10" },
  { key: "aiProtocol", icon: Brain, color: "text-brand-purple bg-brand-purple/10" },
  { key: "visual", icon: Palette, color: "text-brand-violet bg-brand-violet/10" },
  { key: "patterns", icon: Library, color: "text-brand-indigo bg-brand-indigo/10" },
] as const;

export function Features() {
  const t = useTranslations("features");

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group h-full border-border/50 bg-card/50 transition-all duration-300 hover:border-brand-violet/30 hover:shadow-lg hover:shadow-brand-violet/5">
                  <CardContent className="p-6">
                    <div className={`inline-flex rounded-lg p-2.5 ${feature.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {t(`${feature.key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t(`${feature.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
