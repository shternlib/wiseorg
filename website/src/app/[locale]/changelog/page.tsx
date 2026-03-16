"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Version {
  version: string;
  date: string;
  changes: string[];
}

const versionsEn: Version[] = [
  {
    version: "1.4",
    date: "2026-03",
    changes: [
      "Assumption Gate - mandatory checkpoint: intenture cannot reach Realizable while any Canvas block has Assumed by AI status",
      "Accepted Assumption - sixth Canvas block status for consciously accepted AI assumptions",
      "Three resolution paths for Assumed by AI - Confirm (Answered), Accept (Accepted Assumption), or Reject (Unknown Yet); Accept path forbidden for [safety] and [legal] Constraints",
      "Step 6a Confirm Assumptions - new step in AI Interpretation Protocol between Stress-Test and Decide Readiness",
      "Lifecycle Transitions Table - Structured to Realizable transition requires Assumption Gate passed",
      "PM Operating Modes - Structuring Mode updated with Assumption Gate responsibilities and exit criteria",
      "Entry Patterns - all three patterns updated to include Confirm Assumptions step",
      "[resource] - new Constraint type for people, infrastructure, tools, licenses",
      "Structured Constraint Format - optional machine-readable fields (amount, currency, deadline, flexibility, etc.) for [budget], [timeline], and [resource] constraints",
      "AI-facing form canonical template updated with structured constraint examples",
      "Realization Mode - PM tracks spend and deadlines when structured [budget] and [timeline] constraints are present",
      "Removed per-section version numbers - all sections are part of the unified language version",
    ],
  },
  {
    version: "1.3",
    date: "2026-03",
    changes: [
      "Intent Vocabulary - 8 canonical verbs (create, improve, maintain, restructure, explore, extend, migrate, retire)",
      "Constraint Type Vocabulary - 7 types with priority levels",
      "Conflict Resolution Protocol - 3 strategies (Escalate, Propose Alternative, Request Prioritization)",
      "Development Layer syntax formalized (States, Transitions, Signals)",
      "Conception vs Vision distinction clarified",
      "Evidence markers: [fact], [to-collect], [assumed]",
      "Metrics with targets: [target: value] or [target: TBD]",
      "Entry Patterns: Greenfield, From Concept, Takeover",
      "Reverse Explication term added",
      "Language Policy - canonical terms always in English",
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
      "Intenture Independence Principle - removed VSM dependency",
      "Visual Notation v1.0 - formalized 11 primitives, 5 diagram types, 3 reference diagrams",
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

const versionsRu: Version[] = [
  {
    version: "1.4",
    date: "2026-03",
    changes: [
      "Assumption Gate - обязательный контрольный шлюз: intenture не может перейти в Realizable при наличии блоков со статусом Assumed by AI",
      "Accepted Assumption - шестой статус блока Canvas для осознанно принятых допущений AI",
      "Три пути разрешения Assumed by AI - подтвердить (Answered), принять как допущение (Accepted Assumption) или отклонить (Unknown Yet); путь Accept запрещен для [safety] и [legal] Constraints",
      "Шаг 6a Confirm Assumptions - новый шаг в AI Interpretation Protocol между Stress-Test и Decide Readiness",
      "Lifecycle Transitions Table - переход Structured в Realizable требует прохождения Assumption Gate",
      "PM Operating Modes - Structuring Mode обновлен: добавлены ответственности и exit criteria для Assumption Gate",
      "Entry Patterns - все три паттерна обновлены: включен шаг Confirm Assumptions",
      "[resource] - новый тип Constraint для людей, инфраструктуры, инструментов, лицензий",
      "Structured Constraint Format - опциональные машиночитаемые поля (amount, currency, deadline, flexibility и др.) для [budget], [timeline] и [resource]",
      "Канонический шаблон AI-facing form обновлен: примеры структурированного формата Constraints",
      "Realization Mode - PM трекает расход и сроки при наличии структурированных [budget] и [timeline] Constraints",
      "Убрана нумерация версий отдельных разделов - все разделы являются частью единой версии языка",
    ],
  },
  {
    version: "1.3",
    date: "2026-03",
    changes: [
      "Intent Vocabulary - 8 канонических глаголов (create, improve, maintain, restructure, explore, extend, migrate, retire)",
      "Constraint Type Vocabulary - 7 типов с уровнями приоритета",
      "Conflict Resolution Protocol - 3 стратегии (Escalate, Propose Alternative, Request Prioritization)",
      "Синтаксис Development Layer формализован (States, Transitions, Signals)",
      "Разграничение Conception и Vision уточнено",
      "Маркеры Evidence: [fact], [to-collect], [assumed]",
      "Metrics с целевыми значениями: [target: value] или [target: TBD]",
      "Entry Patterns: Greenfield, From Concept, Takeover",
      "Добавлен термин Reverse Explication",
      "Языковая политика - канонические термины всегда на английском",
      "Добавлен статус блока Partially Answered",
      "Добавлен документ Vulnerabilities & Roadmap",
    ],
  },
  {
    version: "1.2",
    date: "2026-02",
    changes: [
      "PM Operating Modes (4 режима: Exploratory, Structuring, Realization, Evolution)",
      "Specialized Readiness Matrix для 3 паттернов",
      "Политика версионирования Explication Record",
      "Intenture Independence Principle - убрана зависимость от VSM",
      "Visual Notation v1.0 - формализованы 11 примитивов, 5 типов диаграмм, 3 эталонные диаграммы",
      "Таблица Lifecycle Transitions очищена и формализована",
    ],
  },
  {
    version: "1.1",
    date: "2026-01",
    changes: [
      "Добавлена таблица Lifecycle Transitions",
      "AI Protocol интегрирован с Canvas",
      "Explication (процесс) отделена от Explication Record (сущность)",
      "Canvas утверждён как Single Source of Truth",
      "Обновлены руководства Quick Start и Practical Usage",
    ],
  },
  {
    version: "1.0",
    date: "2025-12",
    changes: [
      "Первый релиз-кандидат",
      "Canonical Definition и Manifesto",
      "Glossary v1, Meta-Model v1 (17 сущностей, 16 связей, 10 формул)",
      "Syntax v0.1, Lifecycle Model v1 (8 состояний, 11 переходов)",
      "Visual Notation v0.1, Canvas v1, Object Card v1",
      "Readiness Checklist, AI Interpretation Protocol v1",
      "Pattern Library v1 (3 паттерна), 3 сквозных примера",
    ],
  },
];

const versionsMap: Record<string, Version[]> = {
  en: versionsEn,
  ru: versionsRu,
};

export default function ChangelogPage() {
  const t = useTranslations("changelog");
  const locale = useLocale();
  const versions = versionsMap[locale] || versionsMap.en;

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
