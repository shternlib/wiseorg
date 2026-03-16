# Intenture - Release Notes

## Статус
- **Document Type:** Release Notes
- **Format:** Markdown
- **Current Version:** 1.4

---

## v1.4 (текущая)

### Что вошло

**V3 - Assumption Gate (safety):**
1. **Accepted Assumption** - шестой статус блока Canvas. AI сделал допущение, человек его рассмотрел и явно принял как допустимое основание для дальнейшей работы. Отличается от Answered тем, что фиксирует осознанное принятие риска, а не подтверждение факта.
2. **Три пути разрешения Assumed by AI** - каждое допущение AI должно быть явно разрешено человеком: подтверждено (-> Answered), принято как допущение (-> Accepted Assumption), или отклонено (-> Unknown Yet). Для [safety] и [legal] Constraints путь "Принятие как допущение" недопустим.
3. **Assumption Gate Rule** - обязательный контрольный шлюз: intenture не может перейти в Realizable, если в Canvas существует хотя бы один блок со статусом "Assumed by AI". Readiness Checklist расширен до трехуровневой модели: Universal CRT + Assumption Gate + Specialized Readiness.
4. **Шаг 6a - Confirm Assumptions** - новый шаг в AI Interpretation Protocol между Stress-Test и Decide Readiness. PM собирает все допущения AI, показывает человеку, получает решение по каждому, обновляет Canvas.
5. **Glossary** - добавлены термины Assumption Gate и Accepted Assumption.
6. **Lifecycle Transitions Table** - переход Structured -> Realizable дополнен условием: Assumption Gate пройден.
7. **PM Operating Modes** - Structuring Mode обновлен: Assumption Gate добавлен в ответственности PM и exit criteria.
8. **Entry Patterns** - все три паттерна обновлены: Confirm Assumptions включен в стандартный и модифицированный Protocol.

**V5 - Structured Constraint Format:**
9. **[resource]** - новый тип Constraint в Constraint Type Vocabulary. Описывает ограничения по ресурсам: люди, инфраструктура, инструменты, лицензии.
10. **Structured Constraint Format** - типы [budget], [timeline] и [resource] поддерживают опциональные машиночитаемые поля (amount, currency, deadline, flexibility и т.д.). Текстовый формат остается валидным - структурированные поля опциональны.
11. **Канонический шаблон AI-facing form** - обновлен: раздел Constraints включает примеры структурированного формата.
12. **Realization Mode** - PM при наличии структурированных [budget] и [timeline] Constraints трекает расход и соблюдение сроков.

**Общее:**
13. Убрана нумерация версий отдельных разделов - все разделы являются частью единой версии языка.

### Pending
- Обновление End-to-End Examples до синтаксиса v1.4 (Accepted Assumption, Structured Constraints).

---

## v1.3

### Что вошло

**Core Language:**
1. **Intent Vocabulary** - рекомендуемый словарь Intent-глаголов (create, improve, maintain, restructure, explore, extend, migrate, retire) с семантическими различиями и влиянием на стратегию реализации.
2. **Constraint Type Vocabulary** - типизация Constraints: safety, legal, quality, coordination, budget, timeline, scope. Каждый тип имеет приоритет и правила корректировки.
3. **Conflict Resolution Protocol** - три стратегии разрешения конфликтов между полями intenture: Escalate to Human, Propose Alternative, Request Prioritization.
4. **Development Layer Syntax** - формализация States, Transitions, Signals. States с маркировкой [complete]/[partial]. Transitions с триггерами. Signals с типом и severity. Development Layer опционален на стадиях Dream и Exploratory.
5. **Conception vs Vision** - формализованы различия: Conception отвечает на "каким способом?", Vision отвечает на "как выглядит результат?".
6. **Readiness Layer fix** - "Current Readiness" переименовано в "Current Lifecycle State" для устранения путаницы с Realization Decision.
7. **Language Policy** - явное правило: AI-facing form заполняется на языке человека, канонические термины Intenture сохраняются на английском.
8. **Partially Answered** - пятый статус блока Canvas для частично заполненных блоков.
9. **Evidence маркировка** - типизация: [fact], [to-collect], [assumed].
10. **Metrics с целями** - формат metric [target: value] или [target: TBD].
11. **Reverse Explication** - новый термин в Glossary: восстановление intenture из существующей реализации.

**Environment:**
12. **Entry Patterns** - три типовых пути входа в Intenture: Greenfield (с нуля), From Concept (с концепции), Takeover (передача существующего с Reverse Explication, Audit, Reconcile). Каждый с описанием input, lifecycle entry, PM mode, protocol.

**Package:**
13. Release Notes вынесены из master-document в отдельный файл.
14. Все три End-to-End Examples обновлены до v1.3 синтаксиса: типизированные Constraints, маркированные Evidence, Metrics с targets, Signals с type:severity, States [complete/partial], Transitions [trigger:], Current Lifecycle State, Entry Pattern.
15. Исправлено противоречие в примерах AI Agent и Product/Service: Current Lifecycle State корректно отражает Explicated при Decision = Ready for Structuring.
16. Добавлен `Intenture_Vulnerabilities_Roadmap.md` - 7 известных уязвимостей для v1.4+.

---

## v1.2

### Что вошло
1. **PM Operating Modes** - формализованы четыре режима работы PM (Exploratory, Structuring, Realization, Evolution) с entry conditions, responsibilities, outputs и exit criteria.
2. **Specialized Readiness Matrix** - таблица дополнительных readiness blocks для трех типов intenture (Health Care Team, AI Agent, Product/Service).
3. **Explication Record Versioning Policy** - полная политика версионирования: триггеры новой версии, схема major.minor, full snapshot policy, архивная политика.
4. **Intenture Independence Principle** - язык не зависит от VSM или других external frameworks. Жесткие ссылки на VSM убраны из core.
5. **Health Care Team End-to-End Example** - встроен в master-document, доведен до Ready for Realization.
6. **Visual Notation** - примитивы формализованы в таблицу. Три эталонных диаграммы (Legend, Intent Map, Lifecycle). Пять типов диаграмм определены.
7. **Lifecycle Transitions Table** - очищена от привязки к VSM.

---

## v1.1

### Что вошло
1. **Lifecycle Transitions Table** - таблица с триггерами и минимальными условиями для каждого перехода между состояниями intenture.
2. **AI Interpretation Protocol v1.1** - пайплайн интегрирован с Canvas: каждый шаг привязан к конкретным блокам Canvas и определены точки взаимодействия с человеком.
3. **Explication / Explication Record** - терминологическое разделение: Explication как процесс, Explication Record как версионируемая сущность (Core Entity в Meta-Model).
4. **Canvas = Single Source of Truth** - явно зафиксирован принцип единого источника правды.
5. **Practical Usage Guide и Quick Start Guide** - обновлены под интеграцию Protocol + Canvas + роль PM.

---

## v1.0 Candidate

### Что вошло
Исходный пакет языка:
- Canonical Definition, Core Distinction, Manifesto
- Terminology Policy, Glossary v1
- Meta-Model v1 (17 Core Entities, 16 Core Relations, 10 Semantic Formulas)
- Intenture Syntax v0.1 (двуслойный: Human-facing + AI-facing)
- Lifecycle Model v1 (8 States, 11 Transitions)
- Visual Notation v0.1 (11 примитивов, 8 типов связей)
- Intenture Canvas v1 (3 класса блоков, 4 статуса)
- Intenture Object Card v1
- Readiness Checklist for Realization
- AI Interpretation Protocol v1 (8-step pipeline)
- Pattern Library v1 (3 паттерна: Health Care Team, AI Agent, Product/Service)
- End-to-End Examples v1
- Practical Usage Guide v0.1
- Quick Start Guide v0.1
