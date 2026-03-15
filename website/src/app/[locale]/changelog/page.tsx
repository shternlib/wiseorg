"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const versions = [
  {
    version: "1.3",
    date: "2026-03",
    changes: [
      "Intent Vocabulary — 8 canonical verbs (create, improve, maintain, restructure, explore, extend, migrate, retire)",
      "Constraint Type Vocabulary — 7 types with priority levels",
      "Conflict Resolution Protocol — 3 strategies (Escalate, Propose Alternative, Request Prioritization)",
      "Development Layer syntax formalized (States, Transitions, Signals)",
      "Conception vs Vision distinction clarified",
      "Evidence markers: [fact], [to-collect], [assumed]",
      "Metrics with targets: [target: value] or [target: TBD]",
      "Entry Patterns: Greenfield, From Concept, Takeover",
      "Reverse Explication term added",
      "Language Policy — canonical terms always in English",
      "Partially Answered block status added",
      "Vulnerabilities & Roadmap document added",
    ],
  },
  {
    version: "1.2",
    date: "2026-02",
    changes: [
      "PM Operating Modes (4 modes: Exploratory, Structuring, Realization, Evolution)",
      "Specialized Readiness Matrix for 3 patterns",
      "Explication Record Versioning Policy",
      "Intenture Independence Principle — removed VSM dependency",
      "Visual Notation v1.0 — formalized 11 primitives, 5 diagram types, 3 reference diagrams",
      "Lifecycle Transitions Table cleaned and formalized",
    ],
  },
  {
    version: "1.1",
    date: "2026-01",
    changes: [
      "Lifecycle Transitions Table added",
      "AI Protocol integrated with Canvas",
      "Explication (process) separated from Explication Record (entity)",
      "Canvas established as Single Source of Truth",
      "Quick Start and Practical Usage guides updated",
    ],
  },
  {
    version: "1.0",
    date: "2025-12",
    changes: [
      "Initial release candidate",
      "Canonical Definition and Manifesto",
      "Glossary v1, Meta-Model v1 (17 entities, 16 relations, 10 formulas)",
      "Syntax v0.1, Lifecycle Model v1 (8 states, 11 transitions)",
      "Visual Notation v0.1, Canvas v1, Object Card v1",
      "Readiness Checklist, AI Interpretation Protocol v1",
      "Pattern Library v1 (3 patterns), 3 end-to-end examples",
    ],
  },
];

export default function ChangelogPage() {
  const t = useTranslations("changelog");

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="gradient-text">{t("title")}</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-px bg-border" />

        <div className="space-y-8">
          {versions.map((v) => (
            <div key={v.version} className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-brand-violet bg-background" />

              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-brand-violet/10 text-brand-violet border-brand-violet/30">
                  v{v.version}
                </Badge>
                <span className="text-sm text-muted-foreground">{v.date}</span>
              </div>

              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-5">
                  <ul className="space-y-2">
                    {v.changes.map((change, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-violet/50" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
