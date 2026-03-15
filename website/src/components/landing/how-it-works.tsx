"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageSquare, Cpu, Search, Rocket } from "lucide-react";

const steps = [
  { key: "step1", icon: MessageSquare, num: "01" },
  { key: "step2", icon: Cpu, num: "02" },
  { key: "step3", icon: Search, num: "03" },
  { key: "step4", icon: Rocket, num: "04" },
] as const;

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-brand-violet/50 to-transparent md:block" />
                )}

                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-violet/20 bg-brand-violet/5">
                    <Icon className="h-7 w-7 text-brand-violet" />
                  </div>
                  <span className="mt-4 font-mono text-xs font-medium text-brand-teal">
                    {step.num}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {t(`${step.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`${step.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
