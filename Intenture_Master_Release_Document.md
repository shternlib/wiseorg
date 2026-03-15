# Intenture 1.3 - Master Release Document

## Статус документа
- **Name:** Intenture
- **Version:** 1.3
- **Document Type:** Master Release Document
- **Format:** Markdown
- **Status:** Release candidate
- **Release Notes:** см. отдельный файл `Intenture_Release_Notes.md`

---

## 1. Canonical Definition

**Intenture** - это язык, который помогает человеку выражать свой замысел в форме, необходимой и достаточной для его однозначного понимания AI, последующей реализации и дальнейшего развития.

В более строгом виде:

**Intenture** - это формальный семантический лингво-графический язык экспликации замысла, предназначенный для точного взаимодействия человека и AI при создании, анализе, развитии и реализации замысла.

---

## 2. Core Distinction

- **Intenture** - имя языка.
- **intenture** - замысел как феномен, объект выражения, экспликации, моделирования и реализации.

**intenture** определяется как:

> внутренняя предреализованная форма создания, представляющая собой целостное единство Intent, Conception, Vision и Will to Embodiment.

### Канонические формулы

**intenture (EN)**  
*the inner pre-realized shape of creation: an integral unity of intent, conception, vision, and the will to embody them.*

**intenture (RU)**  
*внутренняя предреализованная форма создания: целостное единство Intent, Conception, Vision и воли к воплощению.*

---

## 3. Manifesto

Intenture создается как язык, который позволяет человеку формулировать свой **intenture** естественно, а AI - интерпретировать этот замысел структурно, непротиворечиво и операционально.

Язык должен:
- снижать cognitive load человека;
- повышать точность взаимодействия с AI;
- сохранять смысловой инвариант между Human-facing и AI-facing form;
- обеспечивать переход от замысла к реализации;
- поддерживать дальнейшее развитие замысла по feedback.

Intenture не должен быть:
- просто prompt engineering;
- бюрократической формой;
- заменой естественного языка;
- чисто технической нотацией;
- только языком описания без operational consequence.

---

## 4. Terminology Policy

В документе проводится строгое различение:

- **Intenture** - собственное имя языка;
- **intenture** - замысел как феномен.

### Правило терминов

Ключевые термины языка сохраняются в канонической форме на **английском языке**.

- в **русской версии документа** термины пишутся на английском, а их определения даются на русском;
- в **английской версии документа** термины пишутся на английском, а их определения даются на английском.

Это правило относится, в том числе, к терминам:

- Intent
- Conception
- Vision
- Value
- Constraint
- State
- Transition
- Artifact
- Actor
- Object
- Metric
- Signal
- Evidence
- Explication
- Explication Record
- Expected Output

### Правило языка AI-facing form

AI-facing form заполняется на том языке, на котором человек выражал замысел. Канонические термины Intenture (Intent, Object, Constraint и т.д.) сохраняются на английском независимо от языка заполнения. Если intenture предназначен для мультиязычной команды, AI-facing form рекомендуется заполнять на английском.

---

## 5. Glossary v1.2

### 5.1. Ядро терминов

**Intenture** - собственное имя создаваемого языка; формальный семантический лингво-графический язык экспликации замысла для точного взаимодействия человека и AI.

**intenture** - замысел как феномен; внутренняя предреализованная форма создания, представляющая собой целостное единство Intent, Conception, Vision и Will to Embodiment.

**Explication** - процесс выявления, прояснения и структурного развертывания неявного содержания замысла, при котором скрытая или частично выраженная внутренняя структура переводится в явную, различимую и структурированную форму. Explication - это то, что PM выполняет в диалоге с человеком.

**Reverse Explication** - процесс восстановления intenture из уже существующей реализации. Обратный путь: от реализации к замыслу. Применяется, когда человек передает PM существующий продукт, код, документацию или систему, и PM должен восстановить исходный замысел, выявить расхождения между замыслом и реализацией, и привести все в структурированную форму Intenture.

**Explication Record** - зафиксированный результат процесса Explication: конкретная версия структурированного замысла, которую можно хранить, сравнивать и версионировать. Explication Record - это артефакт, порождаемый процессом Explication.

**Explication of intenture** - выявление, прояснение и структурное развертывание замысла в форму, пригодную для точной интерпретации AI и дальнейшей реализации.

> **Различение Explication и Explication Record:** Explication - процесс, Explication Record - его результат-артефакт. PM выполняет Explication, результат фиксируется как Explication Record, Record версионируется и хранится в Linked Artifacts.

> **Различение Explication и Reverse Explication:** Explication идет от человека к структуре (человек говорит, PM структурирует). Reverse Explication идет от реализации к структуре (PM анализирует существующие артефакты и восстанавливает замысел).

### 5.2. Различение уровней

**Idea** - частное мыслительное содержание, локальный фрагмент замысла или мыслительный импульс. Idea может входить в состав intenture, но не исчерпывает его.

**Intent** - направленность воли и смысловой вектор, определяющий, чего именно субъект хочет достичь относительно Object.

**Conception** - смысловое зачатие решения, образа или подхода, через которое intenture начинает приобретать внутреннюю форму. Conception отвечает на вопрос: **каким способом / через какой подход будет решаться задача?**

**Vision** - целостный образ желаемого результата, будущего состояния или создаваемой реальности. Vision отвечает на вопрос: **как выглядит идеальный конечный результат?**

> **Различение Conception и Vision:** Conception описывает подход и метод ("междисциплинарная команда должна действовать как единая координируемая система"). Vision описывает образ результата ("живая персонализированная программа, которая помогает человеку жить лучше"). Один intenture может иметь одну Vision, но несколько возможных Conceptions для ее достижения.

**Will to Embodiment** - внутренняя направленность на воплощение intenture в artifacts, actions, processes, services, products или changes.

### 5.3. Объекты языка

**Object** - сущность, над которой совершается мыслительная, проектная или преобразующая работа.

**Actor** - участник, влияющий на intenture или потребляющий его результат.

**Artifact** - формальный результат, возникающий в процессе экспликации, моделирования или реализации intenture.

**Constraint** - ограничение, которое не должно быть нарушено.

**Value** - создаваемая польза для конкретного Actor или системы.

**Metric** - показатель, по которому оценивается качество, успешность или полезность замысла и его реализации.

**State** - состояние intenture или производного Artifact в жизненном цикле.

**Transition** - допустимый переход между States.

**Signal** - событие, отклонение, импульс или наблюдение, способное повлиять на intenture, его интерпретацию или его развитие.

**Evidence** - данные, наблюдения, факты или обоснования, на которые опирается intenture или его интерпретация.

**Expected Output** - форма, в которой должен существовать результат реализации intenture и в которой AI обязан его предоставить или подготовить.

---

## 6. Meta-Model v1.2

### 6.1. Назначение

Meta-Model определяет, из каких сущностей состоит intenture, какие связи между ними допустимы и какие комбинации образуют семантически корректную структуру замысла.

### 6.2. Минимальная единица языка

**Минимальная единица Intenture** - это структурированный фрагмент замысла, в котором зафиксирована по крайней мере одна сущность и одна семантически допустимая связь этой сущности с другой сущностью, контекстом или ожидаемым результатом.

Однако **минимальная единица языка** не равна **порогу готовности к реализации**. Реализация начинается только после прохождения **Critical Readiness Threshold**.

### 6.3. Core Entities

- intenture
- Intent
- Object
- Conception
- Vision
- Will to Embodiment
- Actor
- Artifact
- Constraint
- Value
- Metric
- State
- Transition
- Signal
- Evidence
- Expected Output
- Explication Record

> **Примечание:** Explication как процесс не является Core Entity. Core Entity - это **Explication Record**, зафиксированный результат процесса экспликации, который можно версионировать, хранить и связывать с другими сущностями.

### 6.4. Core Relations

- expresses
- explicates
- acts_on
- shapes
- constrains
- creates_value_for
- informs
- is_evidenced_by
- is_measured_by
- transitions_to
- is_triggered_by
- is_realized_as
- is_performed_by
- produces
- targets
- results_in
- records (связь: Explication produces Explication Record)

### 6.5. Семантические роли

- **intenture** - интегральный контейнер замысла.
- **Intent** - тип направленного действия.
- **Object** - предмет действия.
- **Conception** - внутренняя смысловая конструкция решения.
- **Vision** - образ желаемого будущего состояния.
- **Will to Embodiment** - направленность на воплощение.
- **Actor** - участник, связанный с замыслом.
- **Artifact** - формализованный результат.
- **Constraint** - граница допустимого.
- **Value** - создаваемая ценность.
- **Metric** - способ оценки.
- **State** - текущее состояние.
- **Transition** - переход между состояниями.
- **Signal** - триггер изменения.
- **Evidence** - основание и подтверждение.
- **Expected Output** - целевая форма результата.
- **Explication Record** - зафиксированная версия структурированного замысла.

### 6.6. Базовые семантические формулы

1. **Intent acts_on Object**
2. **intenture is_constrained_by Constraint**
3. **intenture creates_value_for Actor**
4. **intenture is_evidenced_by Evidence**
5. **Value is_measured_by Metric**
6. **Explication (процесс) produces Explication Record**
7. **Explication (процесс) is_performed_by Actor (PM)**
8. **intenture results_in Expected Output**
9. **Artifact creates_value_for Actor**
10. **Transition is_triggered_by Signal**
11. **Explication Record records intenture** (версионированная фиксация замысла)

---

## 7. Intenture Syntax v0.2

### 7.1. Общий принцип

Intenture Syntax v0.1 строится как **двуслойный синтаксис**:

1. **Human-facing syntax** - форма, удобная человеку для естественного выражения замысла.
2. **AI-facing syntax** - форма, удобная AI для однозначной интерпретации, проверки и подготовки к реализации.

Обе формы должны быть взаимно переводимыми и сохранять один и тот же смысловой инвариант.

### 7.2. Human-facing syntax

Human-facing syntax допускает:
- естественные формулировки;
- полуструктурированные блоки;
- визуальные элементы;
- вход в замысел с любого удобного блока;
- диалогическое уточнение.

### 7.3. AI-facing syntax

AI-facing syntax должен быть:
- каноническим;
- недвусмысленным;
- нормализуемым;
- пригодным для проверки полноты и готовности к реализации.

### 7.4. Intent Vocabulary

Рекомендуемый словарь Intent-глаголов. Не жесткий enum, а guidance - каждый глагол подразумевает разную стратегию реализации.

| Intent | Описание | Типичный PM Mode |
|---|---|---|
| **create** | Создать с нуля - новый продукт, агент, программа | Exploratory → Structuring → Realization |
| **improve** | Улучшить существующее - оптимизация, рефакторинг, расширение | Structuring → Realization |
| **maintain** | Поддерживать в рабочем состоянии - мониторинг, обновления, bug fixes | Realization → Evolution |
| **restructure** | Существенно перестроить архитектуру или подход | Structuring → Realization |
| **explore** | Исследовать возможности без обязательств по реализации | Exploratory |
| **extend** | Расширить существующее новой функциональностью | Structuring → Realization |
| **migrate** | Перенести из одного состояния/среды в другое | Structuring → Realization |
| **retire** | Вывести из эксплуатации, завершить lifecycle | Evolution → Archived |

PM уточняет Intent у человека, если глагол неоднозначен. Допускаются составные формулировки (например, "create and maintain").

### 7.5. Constraint Type Vocabulary

Рекомендуемая типизация Constraints. Тип указывается в квадратных скобках перед текстом ограничения. Типизация опциональна, но рекомендуется для AI-facing form.

| Тип | Описание | Приоритет | Может ли быть скорректирован |
|---|---|---|---|
| **[safety]** | Защита от вреда для людей, данных, систем | Критический | Нет, никогда |
| **[legal]** | Юридические и regulatory ограничения | Критический | Только при смене юрисдикции |
| **[quality]** | Стандарты качества, понятности, usability | Высокий | Да, при явном решении человека |
| **[coordination]** | Правила взаимодействия между участниками | Средний | Да, при согласии участников |
| **[budget]** | Финансовые ограничения | Средний | Да, при пересмотре бюджета |
| **[timeline]** | Временные ограничения | Средний | Да, при пересмотре сроков |
| **[scope]** | Ограничения объема и границ | Высокий | Да, при явном решении человека |

Правило: конфликт с [safety] или [legal] Constraint всегда разрешается в пользу Constraint. Конфликт с другими типами - через диалог с человеком.

### 7.6. Каноническая архитектура AI-facing form

1. **Core Definition**
2. **Supporting Context**
3. **Development Layer**
4. **Readiness Layer**
5. **Linked Artifacts**

### 7.7. Правило структуры

Порядок верхнеуровневых разделов фиксирован.  
Внутри ряда разделов допускается управляемая гибкость при явной маркировке полей.

### 7.8. Канонический шаблон AI-facing form

```text
Core Definition:
  Intent: [глагол из Intent Vocabulary] [описание]
  Object: [описание объекта]
  Constraints:
    - [type] описание ограничения
    - [type] описание ограничения
  Expected Output: [описание целевой формы результата]

Supporting Context:
  Context: [описание контекста]
  Value: [описание ценности]
  Actors:
    - [role] имя/описание
  Evidence:
    - [fact] конкретные данные, которые уже есть
    - [to-collect] категория данных, которые нужно собрать
    - [assumed] предположение, требующее проверки
  Metrics:
    - описание метрики [target: целевое значение]
    - описание метрики [target: TBD]

Development Layer:                          # опционален на стадиях Dream и Exploratory
  Conception: [каким способом будет решаться задача?]
  Vision: [как выглядит идеальный конечный результат?]
  States: [complete] или [partial]
    - state_name
    - state_name
  Transitions:
    - state1 -> state2 [trigger: описание]
    - state2 -> state3 [trigger: описание]
  Signals:
    - [type: severity] описание        # type = operational|quality|safety|feedback
                                        # severity = info|warning|critical
  Risks:
    - описание риска
  Open Questions:
    - вопрос

Readiness Layer:
  Current Lifecycle State: [Dream|Exploratory|Explicated|Structured|Realizable|In Realization|Evolving|Archived]
  Critical Gaps:
    - описание
  Unknown Yet Items:
    - описание
  Realization Decision: [Ready for Realization|Ready for Structuring|Needs Clarification|Blocked by Contradictions|Blocked by Critical Unknowns|Exploratory Only]

Linked Artifacts:
  Object Card:
  Canvas:
  Explication Records:
  Notes:
  Evidence Pack:
  Diagrams:
  Specifications:
  Plans:
```

---

## 8. Lifecycle Model v1.1

### 8.1. Назначение

Lifecycle Model v1.1 описывает жизненный цикл **intenture** как смыслового объекта.

### 8.2. States

- Dream / Vision Seed
- Exploratory
- Explicated
- Structured
- Realizable
- In Realization
- Evolving
- Archived

### 8.3. Canonical Transitions

- Dream / Vision Seed → Exploratory
- Exploratory → Explicated
- Explicated → Structured
- Structured → Realizable
- Realizable → In Realization
- In Realization → Evolving
- Evolving → Structured
- Evolving → Realizable
- Любое активное состояние → Archived
- Archived → Exploratory
- Archived → Explicated

### 8.4. Принцип модели

Замысел не обязательно развивается линейно. Он может:
- возвращаться назад;
- переэксплицироваться;
- реструктурироваться;
- эволюционировать по feedback.

### 8.5. Ключевой переход

Переход в **Realizable** происходит только после прохождения **Critical Readiness Threshold**.

### 8.6. Lifecycle Transitions Table

| Переход | Триггер | Минимальное условие |
|---|---|---|
| Dream / Vision Seed → Exploratory | Человек начал диалог с PM | Выражен хотя бы один из: Intent, Object, Vision |
| Exploratory → Explicated | PM завершил первичный раунд вопросов | Заполнены все Critical Blocks Canvas: Intent, Object, Constraints, Expected Output |
| Explicated → Structured | PM нормализовал Canvas в AI-facing form | AI-facing form валидна, нет внутренних противоречий, все Critical Blocks имеют статус Answered |
| Structured → Realizable | Пройден Critical Readiness Threshold | Все четыре условия CRT выполнены + Supporting Blocks заполнены на уровне, достаточном для начала работы + Specialized Readiness Blocks для данного типа intenture выполнены |
| Realizable → In Realization | Человек подтвердил старт | Явное подтверждение от человека (System 5) |
| In Realization → Evolving | Получена значимая обратная связь | Critical Signal из любого источника (мониторинг, обратная связь пользователей, аудит, запрос человека на изменение, плановый review) |
| Evolving → Structured | Замысел существенно изменился | Изменения затрагивают Critical Blocks - требуется ре-нормализация AI-facing form |
| Evolving → Realizable | Изменения локальные | Изменения не затрагивают Critical Blocks, AI-facing form обновлена и валидна |
| Любое активное → Archived | Человек решил остановить, или замысел исчерпан | Явное решение человека, либо Success Criterion достигнут |
| Archived → Exploratory | Человек хочет вернуться к замыслу | Явный запрос человека + контекст мог устареть, требуется полная ревизия |
| Archived → Explicated | Человек возвращается к ранее проработанному замыслу | Явный запрос + предыдущий Explication Record доступен и может быть актуализирован |

> **Примечание v1.2:** Ссылки на внешние governance frameworks (VSM, ITIL и т.д.) вынесены за пределы core language. Intenture не зависит от конкретной организационной модели. Сигналы могут поступать из любого источника, релевантного контексту реализации.

### 8.7. Принцип версионирования

При каждом значимом переходе PM фиксирует новый **Explication Record** - версионированный снимок текущего состояния intenture. Это обеспечивает трассируемость эволюции замысла и возможность сравнения версий.

---

## 9. Explication Record Versioning Policy

> **Добавлено в v1.2.**

### 9.1. Базовый принцип

Каждая новая устойчивая редакция intenture фиксируется как **полный snapshot** (full snapshot). Полный снимок - каноническое состояние версии. Diff - вспомогательный слой.

### 9.2. Почему full snapshot, а не diff

Замысел - целостный объект. Человеку и AI проще работать с полным состоянием версии, чем собирать его из патчей. Diff полезен для анализа эволюции, но не является source of truth.

### 9.3. Что считать новой версией

Новая версия Explication Record возникает, если изменилось хотя бы одно из:
1. **Intent** - изменилась направленность замысла;
2. **Object** - изменился предмет действия;
3. **Constraints** - изменились границы допустимого;
4. **Expected Output** - изменилась целевая форма результата;
5. **Readiness State** - изменилось состояние готовности;
6. **Critical Assumptions** - изменились ключевые допущения;
7. **Structural Interpretation** - изменилась структурная интерпретация замысла.

### 9.4. Схема нумерации

Рекомендуемая схема: **major.minor**.

**Major** - меняется identity замысла или его основная архитектура.  
**Minor** - замысел уточняется, расширяется или структурно улучшается без смены identity.

Примеры:
- `0.1`, `0.2`, `0.3` - исследование и структурирование;
- `1.0` - первая stable realizable version;
- `1.1`, `1.2` - уточнения и развитие;
- `2.0` - существенная смена архитектуры intenture.

### 9.5. Что хранить для каждой версии

Для каждой версии Explication Record хранится:
- **Full snapshot** - полное состояние Canvas и AI-facing form;
- **Timestamp** - дата и время фиксации;
- **Author / Editor** - кто инициировал изменение (человек или PM);
- **Change Summary** - краткое описание изменений;
- **Previous Version Reference** - ссылка на предыдущую версию;
- **Optional Diff Summary** - структурное сравнение с предыдущей версией (при необходимости).

### 9.6. Архивная политика

Все версии Explication Record сохраняются. Удаление версий не допускается. Архивированные intenture сохраняют историю всех своих Explication Records.

---

## 10. Visual Notation v1.0

> **Обновлено в v1.2.** Добавлены три эталонных диаграммы, демонстрирующие применение нотации.

### 10.1. Принципы

Visual Notation должна быть:
- понятной;
- красивой;
- привлекательной;
- доступной нетехнарям;
- пригодной для рабочих сессий и презентаций.

### 10.2. Базовые примитивы

| Сущность | Форма | Цвет (рекомендация) | Назначение |
|---|---|---|---|
| **Intent** | Круг | Purple | Направленность воли |
| **Object** | Прямоугольник | Gray | Предмет действия |
| **Actor** | Шестиугольник | Teal | Участник |
| **Value** | Скругленный прямоугольник (pill) | Teal | Создаваемая польза |
| **Constraint** | Ромб | Coral | Граница допустимого |
| **Expected Output** | Прямоугольник с усиленной рамкой | Green | Целевая форма результата |
| **State** | Двойная рамка (внешняя сплошная + внутренняя пунктирная) | Purple / Teal | Фаза жизненного цикла |
| **Metric** | Капсула (pill shape) | Teal | Показатель оценки |
| **Signal** | Метка-импульс (молния / зигзаг) | Coral | Триггер изменения |
| **Evidence** | Документная карточка (прямоугольник с загнутым углом) | Gray | Данные и обоснования |
| **Artifact** | Прямоугольник с боковым маркером | Gray | Формальный результат |

### 10.3. Базовые типы связей

Связи изображаются стрелками с подписями. Подпись размещается рядом со стрелкой, не на ней.

- **acts_on** - Intent действует на Object
- **constrains** - Constraint ограничивает intenture
- **creates_value_for** - intenture создает ценность для Actor
- **informs** - Evidence информирует intenture
- **is_measured_by** - Value измеряется через Metric
- **transitions_to** - State переходит в другой State
- **is_triggered_by** - Transition запускается Signal
- **is_realized_as** - intenture реализуется как Artifact
- **results_in** - intenture порождает Expected Output

### 10.4. Принцип красоты

Красота здесь не украшение, а часть когнитивной доступности языка.

### 10.5. Эталонные диаграммы

> **Companion artifact:** Все три диаграммы оформлены в самодостаточном HTML-файле **Intenture_Visual_Notation_v1_0.html**, который является частью release package языка.

Три эталонных диаграммы демонстрируют применение Visual Notation:

1. **Visual Notation Legend** - справочник всех 11 примитивов с каноническими формами. Используется как reference card для чтения и создания диаграмм.

2. **Intent Map (Health Care Team)** - структурная диаграмма замысла, показывающая Intent → Object с ответвлениями к Actor, Value → Metric, Constraint и Expected Output. Все связи подписаны каноническими именами из Meta-Model. Демонстрирует, как выглядит intenture на языке Visual Notation.

3. **Lifecycle Diagram** - диаграмма жизненного цикла intenture с восемью состояниями (State примитив - двойная рамка), Critical Readiness Threshold как разделительная линия, двумя обратными контурами из Evolving (major change / minor update) и переходом в Archived.

### 10.6. Типы диаграмм Intenture

В зависимости от цели PM формирует разные типы диаграмм:

- **Intent Map** - обзор замысла: Intent, Object, ключевые Actors, Values, Constraints и Expected Output. Формируется в Structuring Mode.
- **Actor Interaction Map** - карта взаимодействия участников. Полезна для кейсов с несколькими ролями (Health Care Team, AI Team).
- **Lifecycle Diagram** - состояния и переходы intenture или его производных объектов.
- **Value Map** - как ценность создается и для кого.
- **Realization Map** - путь от intenture к конкретным артефактам реализации.

---

## 11. Intenture Canvas v1.1

### 11.1. Назначение

Intenture Canvas - блочно-модульная форма постановки замысла. Canvas является единственным источником правды (Single Source of Truth) для intenture. Вся информация собирается в Canvas, после чего представляется в двух формах:

- **Human-facing form** - тексты на естественном языке и диаграммы для человека;
- **AI-facing form** - нормализованная структура для AI-агентов.

### 11.2. Классы блоков

#### Critical Blocks
- Intent
- Object
- Constraints
- Expected Output

#### Supporting Blocks
- Context
- Value
- Actors
- Evidence
- Metrics

#### Development Blocks
- Conception
- Vision
- States
- Transitions
- Signals
- Risks
- Open Questions

### 11.3. Статусы блоков

- **Answered** - блок заполнен полностью
- **Partially Answered** - блок содержит частичную информацию, требует уточнения
- **Unknown Yet** - блок не заполнен, информация пока отсутствует
- **Not Applicable** - блок не релевантен для данного intenture
- **Assumed by AI** - AI сделал допущение, требуется подтверждение человека

### 11.4. Принцип

Человек может входить в замысел с любого удобного блока. AI обязан нормализовать собранное в каноническую структуру.

---

## 12. Intenture Object Card v1

### 12.1. Назначение

Object Card - краткая управленческая карточка замысла, не более одного листа A4.

### 12.2. Канонический шаблон

- Name
- Intent
- Object
- Why It Matters
- Value
- Constraints
- Expected Output
- Current Readiness
- Key Open Questions
- Linked Artifacts

### 12.3. Принцип

Object Card отвечает на вопрос: **что здесь вообще происходит?**

---

## 13. Readiness Checklist for Realization

### 13.1. Two-level model

1. **Universal Readiness Layer**
2. **Specialized Readiness Blocks**

### 13.2. Universal Readiness Layer (Critical Readiness Threshold)

AI может начинать реализацию только тогда, когда однозначно понятно:
1. что нужно сделать (Intent - Answered);
2. над чем (Object - Answered);
3. какие границы нельзя нарушать (Constraints - Answered);
4. в какой форме должен существовать результат (Expected Output - Answered).

### 13.3. Решения AI

- Ready for Realization
- Ready for Structuring
- Needs Clarification
- Blocked by Contradictions
- Blocked by Critical Unknowns
- Exploratory Only

### 13.4. Specialized Readiness Matrix

> **Добавлено в v1.2.** Для каждого типа intenture определяются дополнительные блоки, которые должны быть заполнены сверх Universal Readiness Layer.

| Тип intenture | Дополнительные required fields | Blocking Unknowns | Non-blocking Unknowns | Ready-for-Realization условие |
|---|---|---|---|---|
| **Health Care Team** | Primary health goal; Baseline health data; Jurisdiction / legal constraints; Escalation rules к врачу; Expert role boundaries | Отсутствие primary health goal; Отсутствие baseline data; Неизвестная юрисдикция | Частота лабораторных тестов; Детали страхового покрытия | Universal CRT + все blocking fields Answered + expert roles согласованы |
| **AI Agent** | Allowed actions; Prohibited actions; Escalation rules; Failure conditions; Decision boundaries | Отсутствие allowed actions; Отсутствие escalation rules | Точные thresholds для edge cases; Детали мониторинга | Universal CRT + allowed/prohibited actions определены + escalation rules зафиксированы |
| **Product / Service** | Target user; Value proposition; First scope boundary; Success criteria / learning criteria; Key assumptions | Неопределенный target user; Отсутствие value proposition | Ценовая модель; Точный delivery timeline | Universal CRT + target user определен + value proposition сформулировано + first scope зафиксирован |

### 13.5. Принцип расширяемости

Specialized Readiness Matrix расширяется по мере появления новых паттернов в Pattern Library. Каждый новый паттерн должен определять свои Specialized Readiness Blocks.

---

## 14. AI Interpretation Protocol v1.2

### 14.1. Pipeline

| Шаг | Название | Что делает PM | Блоки Canvas | Результат для человека |
|---|---|---|---|---|
| 1 | **Capture** | Принимает свободное высказывание человека, фиксирует в исходном виде | - (вход в процесс) | Подтверждение: «Я вас услышал, вот что я понял» |
| 2 | **Extract** | Извлекает из высказывания сущности Intenture: Intent, Object, Actors, Value, Constraints, Expected Output | Critical Blocks, Supporting Blocks - первичное заполнение | - (внутренний шаг) |
| 3 | **Normalize** | Приводит извлеченное к каноническому формату Canvas, проставляет статусы блоков (Answered / Unknown Yet / Assumed by AI) | Все блоки Canvas получают статусы | - (внутренний шаг) |
| 4 | **Clarify** | Задает человеку уточняющие вопросы по одному, начиная с Critical Blocks со статусом Unknown Yet или Assumed by AI | Critical Blocks → Supporting Blocks → Development Blocks | Вопросы в естественной форме, по одному |
| 5 | **Validate** | Проверяет внутреннюю непротиворечивость Canvas: Constraints не конфликтуют с Intent, Value согласуется с Expected Output, Actors корректны | Все блоки - перекрестная проверка | При обнаружении противоречий - показ человеку и запрос решения |
| 6 | **Stress-Test** | Выявляет скрытые допущения, пробелы, ложные предпосылки, emotional noise, hidden meaning | Development Blocks: Risks, Open Questions | Показ человеку: «Вот что я вижу как потенциальные риски и неизвестности» |
| 7 | **Decide Readiness** | Оценивает readiness по Universal CRT + Specialized Readiness Matrix, выносит решение | Readiness Layer в AI-facing form | Показ человеку Human-facing form + диаграммы + readiness decision |
| 8 | **Prepare Realization Form** | Формирует финальный AI-facing form, Object Card, Explication Record | Все блоки → AI-facing form, Object Card, Explication Record | Показ человеку полного Human-facing представления для подтверждения |

### 14.2. Принцип взаимодействия с человеком

PM показывает человеку результат после шагов:
- **Шаг 1** - краткое подтверждение понимания;
- **Шаг 4** - уточняющие вопросы (итеративно, по одному);
- **Шаг 5** - обнаруженные противоречия (если есть);
- **Шаг 6** - выявленные риски и неизвестности;
- **Шаг 7** - Human-facing form + диаграммы + решение о readiness;
- **Шаг 8** - финальное представление для подтверждения перед стартом реализации.

Шаги 2 и 3 - внутренние операции PM, их результаты человек видит опосредованно через вопросы и представления.

### 14.3. Conflict Resolution Protocol

Когда на шаге Validate или Stress-Test обнаружен конфликт между полями intenture (например, Intent противоречит Constraint, или Constraints противоречат друг другу), PM применяет одну из трех стратегий:

**1. Escalate to Human** - обязательно для конфликтов с [safety] и [legal] Constraints:
- PM показывает человеку конфликт в явной форме;
- PM объясняет, почему это конфликт;
- PM запрашивает решение: изменить Intent, ослабить Constraint, или найти другой подход.

**2. Propose Alternative** - допустимо для [quality], [coordination], [scope] Constraints:
- PM предлагает вариант, снимающий конфликт;
- PM показывает trade-offs каждого варианта;
- Человек выбирает или предлагает свой вариант.

**3. Request Prioritization** - когда конфликт между двумя равноправными Constraints:
- PM запрашивает у человека явный приоритет между конфликтующими элементами;
- PM фиксирует приоритет как часть Canvas;
- Менее приоритетный Constraint может быть смягчен или переформулирован.

**Правило:** конфликт с [safety] или [legal] Constraint всегда разрешается в пользу Constraint. AI не имеет права предлагать ослабление safety или legal Constraints.

### 14.4. Цикличность протокола

Протокол не является однократным. При эволюции замысла PM повторяет шаги 2-8 на актуальном состоянии Canvas. Каждый полный проход порождает новый **Explication Record**.

### 14.5. Protocol coverage

Протокол покрывает:
- ambiguity
- incompleteness
- contradictions
- false assumptions
- emotional noise
- hidden meaning

### 14.6. Базовые правила AI

AI не должен:
- имитировать понимание;
- скрывать допущения;
- переходить к реализации без readiness threshold.

AI обязан:
- выявлять структуру;
- задавать уточнения по одному;
- фиксировать unknowns;
- различать факт, гипотезу, желание и предпосылку.

---

## 15. PM Operating Modes

> **Добавлено в v1.2.** Четыре режима работы PM определяют, как PM ведет себя на разных стадиях жизни intenture.

### 15.1. Exploratory Mode

**Назначение:** замысел еще туманен, человек исследует пространство возможностей.

**Entry conditions:**
- Intenture в состоянии Dream / Vision Seed или Exploratory;
- Critical Blocks Canvas не заполнены или заполнены частично;
- Человек не может четко сформулировать Intent или Object.

**PM responsibilities:**
- помогает человеку выявить смысл через открытые вопросы;
- собирает фрагменты intenture без форсирования ранней фиксации scope;
- выявляет unknowns и assumptions, фиксирует их явно;
- удерживает диалог в режиме discovery, а не structuring;
- не критикует незрелость замысла.

**AI responsibilities:**
- извлекает сущности из свободной речи (Extract);
- фиксирует все извлеченное с маркировкой степени определенности;
- не навязывает структуру, пока человек не готов.

**Outputs:**
- частично заполненный Canvas с явными статусами Unknown Yet;
- карта неизвестности (что определено, что нет, что предположено);
- первичные формулировки Intent и/или Object (если удалось выявить).

**Exit criteria / transition triggers:**
- появление различимого Object;
- первичная формулировка Intent;
- человек готов перейти к структурированию → переход в **Structuring Mode**.

---

### 15.2. Structuring Mode

**Назначение:** замысел существует, но его нужно собрать в устойчивую, непротиворечивую форму.

**Entry conditions:**
- Intenture в состоянии Exploratory → Explicated или Explicated → Structured;
- Intent и Object различимы;
- Требуется нормализация в Canvas и AI-facing form.

**PM responsibilities:**
- переводит собранный материал в Canvas;
- формирует Object Card;
- строит AI-facing form;
- устраняет противоречия через Validate;
- добирает Critical Blocks и Supporting Blocks до статуса Answered;
- проводит Stress-Test: выявляет скрытые допущения, риски, пробелы.

**AI responsibilities:**
- нормализует Canvas (Normalize);
- задает уточняющие вопросы по одному (Clarify);
- перекрестно проверяет блоки (Validate);
- генерирует Human-facing представление и диаграммы.

**Outputs:**
- полностью нормализованный Canvas;
- AI-facing form без внутренних противоречий;
- Object Card;
- Human-facing form с диаграммами для человека;
- Readiness assessment (Universal CRT + Specialized Readiness).

**Exit criteria / transition triggers:**
- все Critical Blocks - Answered, нет противоречий;
- Readiness decision вынесен;
- если Ready for Realization → переход в **Realization Mode**;
- если нужны дополнительные уточнения → остается в Structuring Mode.

---

### 15.3. Realization Mode

**Назначение:** intenture готов к действию, нужно перевести его в конкретные артефакты реализации.

**Entry conditions:**
- Intenture в состоянии Realizable;
- Critical Readiness Threshold пройден;
- Specialized Readiness Blocks для данного типа intenture выполнены;
- Человек подтвердил старт.

**PM responsibilities:**
- готовит downstream artifacts: spec, backlog, plans, workflows;
- удерживает scope boundaries - реализация не должна выходить за Constraints;
- следит, чтобы реализация не разрушала исходный смысл intenture;
- координирует работу AI-команды в соответствии с intenture.

**AI responsibilities:**
- переводит AI-facing form в конкретные задачи и артефакты;
- контролирует соответствие артефактов реализации исходному intenture;
- фиксирует отклонения и эскалирует PM.

**Outputs:**
- артефакты реализации (specifications, backlog, plans, workflows);
- Explication Record версии на момент старта реализации;
- lifecycle transition в In Realization.

**Exit criteria / transition triggers:**
- получена значимая обратная связь → переход в **Evolution Mode**;
- реализация завершена и замысел исчерпан → Archived.

---

### 15.4. Evolution Mode

**Назначение:** intenture уже живет, получает feedback, и его нужно поддерживать в актуальном состоянии.

**Entry conditions:**
- Intenture в состоянии In Realization → Evolving;
- Получен Critical Signal, плановый review, или запрос человека на изменение.

**PM responsibilities:**
- собирает signals из всех источников (мониторинг, обратная связь пользователей, аудит, аналитика);
- сравнивает фактическое развитие с intenture;
- выявляет drift (расхождение между замыслом и реальностью);
- инициирует change cycle;
- обновляет Canvas и Explication Record.

**AI responsibilities:**
- мониторит метрики и signals;
- генерирует сравнительный анализ: текущее состояние vs intenture;
- предлагает корректировки PM для рассмотрения.

**Outputs:**
- revised Canvas;
- новый Explication Record (новая версия);
- обновленные артефакты реализации;
- change summary для человека.

**Exit criteria / transition triggers:**
- изменения затрагивают Critical Blocks → возврат в **Structuring Mode** для ре-нормализации;
- изменения локальные → обновление AI-facing form, возврат в **Realization Mode**;
- человек решил остановить → Archived.

---

## 16. Entry Patterns

Три типовых пути входа в Intenture в зависимости от того, что у человека уже есть на руках.

### 16.1. Greenfield (с нуля)

**Описание:** человек приходит с идеей в голове, без документов и артефактов.

**Input:** свободная речь человека (голос или текст).

**Lifecycle entry:** Dream / Vision Seed.

**PM mode:** Exploratory → Structuring.

**Protocol:** стандартный (Capture → Extract → Normalize → Clarify → Validate → Stress-Test → Decide Readiness → Prepare Realization Form).

**Особенности:**
- Все блоки Canvas начинают с Unknown Yet.
- PM задает открытые вопросы, не форсирует раннюю фиксацию.
- Первый Explication Record создается после завершения Exploratory.

### 16.2. From Concept (с концепции)

**Описание:** человек приходит с готовым документом - концепция, бриф, ТЗ, описание продукта.

**Input:** документ (текст, PDF, презентация).

**Lifecycle entry:** Exploratory или Explicated (зависит от качества документа).

**PM mode:** начинает с Structuring (документ уже содержит материал для Extract).

**Protocol:** модифицированный:
- Capture принимает документ, а не свободную речь;
- Extract работает по тексту документа, извлекая сущности Intenture;
- Normalize заполняет Canvas из документа, проставляя статусы Answered / Assumed by AI / Unknown Yet;
- Clarify фокусируется на gaps и противоречиях, обнаруженных в документе;
- остальные шаги - стандартные.

**Особенности:**
- Часть блоков Canvas может быть сразу Answered или Assumed by AI (из документа).
- PM обязан показать человеку, что было извлечено из документа, и получить подтверждение.
- Assumed by AI блоки, заполненные из документа, требуют явного подтверждения.

### 16.3. Takeover (передача существующего)

**Описание:** человек передает PM уже существующий на какой-то стадии продукт или услугу для дальнейшего развития и поддержки.

**Input:** код, база данных, документация, пользовательские данные, живая система, история коммитов, backlog.

**Lifecycle entry:** может быть In Realization → Evolving или даже Structured (если продукт заброшен).

**PM mode:** специальный подрежим - **Reverse Explication**.

**Protocol:** расширенный:
1. **Audit** (новый шаг, перед Capture) - PM анализирует все переданные артефакты: код, архитектуру, базу данных, документацию, текущее состояние системы;
2. **Reverse Extract** - PM извлекает сущности Intenture не из речи человека, а из артефактов реализации: какой Intent можно восстановить из кода? Какие Constraints были соблюдены (или нарушены)?
3. **Capture** - PM фиксирует слова человека о его исходном замысле, текущих целях и ожиданиях;
4. **Reconcile** (новый шаг) - PM сопоставляет извлеченное из артефактов с тем, что сказал человек. Выявляет расхождения между замыслом и реализацией (drift);
5. Далее стандартные шаги: Normalize → Clarify → Validate → Stress-Test → Decide Readiness.

**Особенности:**
- Canvas заполняется из двух источников: артефакты (что есть) + диалог с человеком (что было задумано).
- PM обязан показать человеку Gap Analysis: расхождение между замыслом и реализацией.
- Дополнительные артефакты: Audit Report, Technical Debt Register, Gap Analysis.
- Первый Explication Record отражает текущее состояние (as-is), а не исходный замысел.
- Второй Explication Record формируется как целевое состояние (to-be) после диалога с человеком.

---

## 17. Pattern Library v1

### 16.1. Назначение

Pattern Library v1 - набор эталонных паттернов intenture для разных классов замыслов.

### 16.2. Unified Pattern Structure

Каждый паттерн включает:
1. Name
2. Object
3. Primary Actor
4. Supporting Actors
5. Value
6. Expected Output
7. Nature of the intenture
8. Constraints
9. Required Initial Inputs
10. Outputs by Actor
11. Review Cadence
12. Critical Signals
13. Final Decision Authority
14. Rule in Case of Conflict / Disagreement
15. Success Criterion

---

### Pattern 1 - Health Care Team Intenture

#### Name
**Health Care Team Intenture**

#### Object
Многосторонняя комплексная координированная программа заботы о здоровье человека.

#### Primary Actor
Человек, о здоровье которого идет речь.

#### Supporting Actors
- нутрициолог
- эндокринолог
- кардиолог
- шеф-повар
- фитнес-тренер

#### Value
Устойчивое улучшение здоровья человека через согласованные действия разных экспертов без противоречивых рекомендаций.

#### Expected Output
Персонализированная согласованная программа заботы о здоровье человека с распределением ролей экспертов, рекомендациями, ограничениями и планом действий.

#### Nature of the intenture
Программа должна быть живой и постоянно обновляться на основе обратной связи и новых входящих данных о человеке.

#### Constraints
1. рекомендации экспертов не должны противоречить друг другу;
2. программа не должна вредить человеку;
3. изменения программы должны опираться на реальные данные и обратную связь;
4. рекомендации должны быть понятны человеку и выполнимы в жизни;
5. нельзя нарушать законодательство страны пребывания человека;
6. должны быть явно зафиксированы disclaimers и ограничения ответственности.

#### Required Initial Inputs
1. возраст и пол человека;
2. ключевые жалобы / цели;
3. базовые медицинские ограничения и диагнозы;
4. текущие лекарства / терапия;
5. базовые показатели: вес, давление, ключевые анализы;
6. образ жизни: питание, активность, сон.

#### Outputs by Actor

**Для человека**
- понятный персональный план действий;
- согласованные рекомендации;
- ограничения;
- обновляемая программа заботы о здоровье.

**Для каждого эксперта**
- профильный блок рекомендаций;
- зона ответственности;
- актуальные релевантные данные;
- понимание ограничений, заданных другими экспертами.

**Для AI / системы координации**
- единая модель состояния человека;
- карта целей, ограничений и рисков;
- выявленные противоречия;
- история изменений программы;
- основания для обновлений и эскалаций.

#### Review Cadence
- легкий review - еженедельно;
- полный review - ежемесячно;
- внеочередной review - при новых анализах, резком изменении самочувствия или критических показателях.

#### Critical Signals
1. резкое ухудшение самочувствия;
2. критические отклонения в анализах;
3. опасные показатели давления, пульса, веса, сахара и других значимых параметров;
4. конфликт рекомендаций между экспертами;
5. признаки того, что человек не может безопасно следовать текущей программе;
6. отсутствие прогресса в достижении целей человека.

#### Final Decision Authority
Финальное решение принимает сам человек или его лечащий врач.

#### Rule in Case of Conflict / Disagreement
Если между экспертами возникают расхождения:
1. команда явно показывает наличие расхождения;
2. формулирует человеку варианты;
3. объясняет различия и последствия;
4. рекомендует обратиться к лечащему врачу;
5. после принятого решения корректирует программу и реализует ее в обновленном виде.

#### Success Criterion
Человек устойчиво движется к своим целям по здоровью без вреда, без противоречивых рекомендаций и с ощущением, что программа реально помогает ему жить лучше.

---

### Pattern 2 - AI Agent Intenture

#### Name
**AI Agent Intenture**

#### Object
Специализированный AI-агент, который в заданных границах принимает входящие данные, интерпретирует их, принимает допустимые решения, выполняет разрешенный класс действий и выдает полезный результат человеку или системе.

#### Primary Actor
Человек или система-заказчик, для которой создается агент.

#### Supporting Actors
- AI-архитектор
- product owner
- domain expert
- developer / integrator
- operator / supervisor
- compliance / safety reviewer
- конечные пользователи агента

#### Value
Повышение качества, скорости и устойчивости выполнения определенного класса интеллектуальных задач без выхода за заданные границы ответственности и безопасности.

#### Expected Output
Определенный, ограниченный по роли и полномочиям AI-агент с описанными inputs, outputs, decision boundaries, allowed actions, escalation rules, failure conditions и критериями качества работы.

#### Nature of the intenture
Агент должен быть управляемым, наблюдаемым, ограниченным по полномочиям и способным к корректной эскалации, а не к скрытому самовольному расширению своей роли.

#### Constraints
1. агент не должен выходить за пределы своей роли;
2. агент не должен совершать неразрешенные действия;
3. агент должен быть интерпретируемым для человека;
4. критические решения должны иметь правила эскалации;
5. агент не должен скрывать неопределенность;
6. агент должен работать в рамках применимого законодательства и внутренних политик;
7. должны быть явно описаны disclaimers, ограничения ответственности и границы доверия к результатам агента;
8. агент не должен подменять человека там, где требуется human authority.

#### Required Initial Inputs
1. цель агента;
2. role description;
3. перечень входных данных;
4. допустимые действия;
5. недопустимые действия;
6. правила эскалации;
7. критерии качества;
8. failure conditions;
9. контекст использования;
10. требования безопасности и compliance.

#### Outputs by Actor

**Для заказчика / владельца**
- понятное описание роли агента;
- ожидаемый полезный результат;
- границы ответственности;
- условия безопасного использования.

**Для оператора / supervisor**
- наблюдаемое состояние агента;
- журнал решений и эскалаций;
- список проблемных случаев;
- точки ручного вмешательства.

**Для AI / системы координации**
- нормализованная модель роли;
- decision boundaries;
- action policy;
- escalation map;
- quality signals;
- traceability решений.

#### Review Cadence
- light review - еженедельно;
- full review - ежемесячно;
- extraordinary review - при ошибках, unsafe behavior, drift, изменении требований, появлении новых рисков.

#### Critical Signals
1. агент выдал опасный или недопустимый результат;
2. агент вышел за пределы роли;
3. агент скрыл неопределенность;
4. участились ошибки или hallucination-like behavior;
5. возникли конфликты с правилами безопасности или compliance;
6. пользователь перестал получать ожидаемую ценность;
7. отсутствует прогресс по целевым метрикам агента.

#### Final Decision Authority
Финальное решение остается за человеком, владельцем процесса или специально назначенным supervisor.

#### Rule in Case of Conflict / Disagreement
Если возникает неопределенность или конфликт:
1. агент явно сообщает об этом;
2. не принимает критическое решение скрыто;
3. предлагает варианты или запрашивает уточнение;
4. при превышении полномочий эскалирует человеку;
5. после решения человека его policy и behavior могут быть скорректированы.

#### Success Criterion
Агент устойчиво создает ожидаемую ценность, не выходя за свои границы, не создавая неприемлемых рисков и оставаясь понятным, контролируемым и полезным для человека или системы.

---

### Pattern 3 - Product / Service Intenture

#### Name
**Product / Service Intenture**

#### Object
Новый или существенно изменяемый продукт / сервис, который должен создавать различимую ценность для определенного класса пользователей или клиентов.

#### Primary Actor
Целевой пользователь / клиент, для которого создается продукт или сервис.

#### Supporting Actors
- founder / sponsor
- product owner
- designer
- domain expert
- delivery team
- sales / marketing
- operations / support
- AI / analytical systems

#### Value
Создание различимой, востребованной и practically useful ценности для целевого пользователя при устойчивой реализуемости и экономической целесообразности решения.

#### Expected Output
Концептуально и practically определенный продукт / сервис с ясным value proposition, целевым пользователем, границами решения, формой поставки, критериями успеха и базовым путем реализации.

#### Nature of the intenture
Продукт / сервис должен быть не просто интересной идеей, а реализуемым ценностным предложением, которое можно объяснить, создать, доставить и улучшать по обратной связи.

#### Constraints
1. продукт / сервис не должен решать несуществующую или незначимую проблему;
2. решение не должно противоречить ключевым ограничениям рынка, бизнеса, технологий и права;
3. продукт / сервис должен быть понятен целевому пользователю;
4. модель поставки должна быть реализуемой;
5. ожидания ценности не должны строиться на ложных предпосылках;
6. должны быть понятны границы первой версии;
7. нельзя допускать чрезмерный scope creep на ранней стадии.

#### Required Initial Inputs
1. целевой пользователь / клиент;
2. проблема или задача;
3. желаемая ценность;
4. текущие альтернативы или substitute solutions;
5. ключевые ограничения;
6. ожидаемая форма продукта / сервиса;
7. контекст использования;
8. критерии успеха;
9. предположения о спросе;
10. базовые условия реализации.

#### Outputs by Actor

**Для пользователя / клиента**
- понятное ценностное предложение;
- понятный сценарий использования;
- ожидаемый результат от продукта / сервиса.

**Для продуктовой команды**
- структурированный замысел продукта / сервиса;
- границы первой версии;
- ключевые гипотезы;
- карта value, constraints и risks.

**Для бизнеса / спонсора**
- понимание, зачем продукт нужен;
- для кого он создается;
- почему он может иметь смысл;
- по каким критериям оценивать успех.

**Для AI / аналитической системы**
- нормализованная модель product/service intenture;
- карта hypotheses;
- risk points;
- expected outputs;
- indicators for iteration.

#### Review Cadence
- light review - еженедельно на этапе активной проработки;
- full review - ежемесячно;
- extraordinary review - при сильной новой обратной связи, изменении рынка, провале гипотез или изменении ограничений.

#### Critical Signals
1. ценность не подтверждается пользователем;
2. проблема оказалась слабой или искусственной;
3. решение перестало укладываться в ограничения;
4. продуктовая гипотеза не показывает признаков жизнеспособности;
5. команда не может ясно объяснить, кому и зачем нужен продукт;
6. scope разрастается так, что теряется ядро замысла;
7. нет прогресса по ключевым метрикам или learning milestones.

#### Final Decision Authority
Финальное решение принимает человек - владелец продукта, спонсор или уполномоченный decision-maker.

#### Rule in Case of Conflict / Disagreement
1. конкурирующие варианты явно формулируются;
2. различия объясняются через value, risk и constraints;
3. спорное решение не маскируется под «очевидное»;
4. после выбора intenture корректируется и нормализуется заново.

#### Success Criterion
Продукт / сервис создает различимую ценность для целевого пользователя, остается реализуемым в заданных ограничениях и демонстрирует признаки устойчивой жизнеспособности и развития.

---

## 18. End-to-End Examples

### 18.1. Назначение

Комплект эталонных сквозных примеров, показывающих полный путь intenture:
1. Human-facing form
2. AI extraction
3. AI-facing form
4. Intenture Object Card
5. Intenture Canvas
6. Readiness decision
7. Next artifacts / realization path

### 18.2. Что доказывает набор

Он показывает, что Intenture работает:
- в human-centered interdisciplinary care;
- в bounded AI-agent design;
- в product / service creation.

### 18.3. Важное различие

- **Pattern** отвечает на вопрос: *как устроен класс замыслов*.
- **Example** отвечает на вопрос: *как выглядит конкретный заполненный intenture*.

---

### Example 1 - Health Care Team Intenture (полный, встроенный)

> Этот пример доведен до состояния **Ready for Realization** и демонстрирует полный путь intenture.

#### 1. Human-facing form

> Я хочу, чтобы для меня работала команда экспертов по здоровью: нутрициолог, эндокринолог, кардиолог, шеф-повар и фитнес-тренер.  
> Мне не нужны разрозненные советы. Я хочу единую согласованную программу, которая будет помогать мне улучшать здоровье без противоречивых рекомендаций.  
> Эта программа должна учитывать мои анализы, давление, вес, образ жизни и другие данные.  
> Она должна регулярно обновляться, если показатели меняются или если нет прогресса.  
> При этом нельзя давать советы, которые противоречат законам моей страны, и должны быть понятные disclaimers.  
> Если эксперты не согласны друг с другом, мне нужно показать варианты и посоветовать обратиться к лечащему врачу. Финальное решение все равно принимаю я или мой врач.
>
> Я нахожусь на Кипре (Республика Кипр, EU). Мне 40 лет, мужчина.  
> Главные цели: нормализовать гормональный баланс, снизить вес, улучшить работу сердечно-сосудистой системы.  
> Давление - 135/85, вес - 95 кг, рост - 180 см. Хронических заболеваний нет, лекарства не принимаю.  
> Базовые анализы крови (общий, биохимия, гормональная панель) сданы, результаты могу предоставить.

#### 2. AI extraction

**Extracted elements:**
- **Intent:** разработать и сопровождать
- **Object:** многосторонняя комплексная координированная программа заботы о здоровье человека
- **Primary Actor:** мужчина, 40 лет, Кипр (EU)
- **Supporting Actors:** нутрициолог, эндокринолог, кардиолог, шеф-повар, фитнес-тренер
- **Value:** устойчивое улучшение здоровья через согласованные действия экспертов без противоречивых рекомендаций
- **Expected Output:** персонализированная согласованная программа заботы о здоровье с распределением ролей, рекомендациями, ограничениями и планом действий
- **Constraints:**
  - отсутствие противоречий между рекомендациями;
  - отсутствие вреда;
  - опора на реальные данные;
  - выполнимость рекомендаций;
  - соблюдение законодательства Республики Кипр и EU;
  - наличие disclaimers и limits of liability
- **Health Goals:** нормализация гормонального баланса; снижение веса; улучшение сердечно-сосудистой системы
- **Baseline Data:** АД 135/85, вес 95 кг, рост 180 см, BMI ~29.3, анализы крови доступны
- **Jurisdiction:** Республика Кипр (EU)
- **Final Decision Authority:** человек или лечащий врач
- **Escalation:** при разногласии экспертов - показать варианты, рекомендовать лечащего врача

#### 3. AI-facing form

```text
Core Definition:
  Intent: create and maintain
  Object: многосторонняя комплексная координированная программа заботы о здоровье человека
  Constraints:
    - [safety] программа не должна вредить человеку
    - [safety] эксперты не заменяют лечащего врача для назначения медикаментов и диагнозов
    - [legal] нельзя нарушать законодательство Республики Кипр и Европейского Союза
    - [legal] должны быть явно зафиксированы disclaimers и ограничения ответственности
    - [coordination] рекомендации экспертов не должны противоречить друг другу
    - [quality] изменения программы должны опираться на реальные данные и обратную связь
    - [quality] рекомендации должны быть понятны человеку и выполнимы в жизни
  Expected Output: персонализированная согласованная программа заботы о здоровье с распределением ролей экспертов, рекомендациями, ограничениями и планом действий

Supporting Context:
  Context: мужчина 40 лет, проживающий на Кипре (EU), хочет единую систему заботы о здоровье вместо набора разрозненных рекомендаций
  Value: устойчивое улучшение здоровья через согласованные действия разных экспертов без противоречивых рекомендаций
  Actors:
    - [primary] человек (мужчина, 40 лет, Кипр)
    - [supporting] нутрициолог
    - [supporting] эндокринолог
    - [supporting] кардиолог
    - [supporting] шеф-повар
    - [supporting] фитнес-тренер
  Evidence:
    - [fact] АД: 135/85
    - [fact] вес: 95 кг, рост: 180 см, BMI: ~29.3
    - [fact] хронических заболеваний нет
    - [fact] лекарства не принимает
    - [to-collect] анализы крови (общий, биохимия, гормональная панель) - сданы, ожидают загрузки
  Metrics:
    - динамика веса [target: BMI < 25]
    - динамика АД [target: < 130/80]
    - гормональные показатели [target: нормализация по результатам панели]
    - субъективное самочувствие [target: > 7/10]
    - отсутствие конфликтующих рекомендаций [target: 0 конфликтов]
    - отсутствие вреда [target: 0 инцидентов]

Development Layer:
  Conception: междисциплинарная команда должна действовать как единая координируемая система заботы, где каждый эксперт видит рекомендации и ограничения других
  Vision: живая персонализированная программа, которая регулярно обновляется по новым данным и помогает человеку устойчиво улучшать здоровье
  States: [complete]
    - active
    - under review
    - escalated
    - updated
  Transitions:
    - active -> under review [trigger: плановый график или новые данные]
    - under review -> updated [trigger: корректировка программы завершена]
    - active -> escalated [trigger: Critical Signal]
    - escalated -> updated [trigger: решение человека или врача получено]
  Signals:
    - [safety: critical] резкое ухудшение самочувствия
    - [safety: critical] критические отклонения в анализах
    - [safety: warning] опасные показатели АД / веса / сахара
    - [coordination: warning] конфликт рекомендаций между экспертами
    - [feedback: warning] отсутствие прогресса по целям в течение 4+ недель
  Risks:
    - противоречивые рекомендации при недостаточной координации
    - ложная уверенность в безопасности без контроля врача
    - недостаточность данных для обоснованных рекомендаций
  Open Questions:
    - нет (все blocking unknowns закрыты)

Readiness Layer:
  Current Lifecycle State: Realizable
  Critical Gaps: нет
  Unknown Yet Items:
    - точная частота лабораторных тестов (non-blocking, определяется при старте)
    - детали страхового покрытия (non-blocking)
  Realization Decision: Ready for Realization

Linked Artifacts:
  Object Card: Health Care Team Intenture Card v1.0
  Canvas: Health Care Team Intenture Canvas v1.0
  Explication Records: v1.0 (текущий snapshot)
  Notes: disclaimers framework, expert coordination rules
  Evidence Pack: анализы крови, показатели АД и веса
  Diagrams: карта ролей экспертов, lifecycle программы
  Specifications: правила координации, escalation protocol
  Plans: review plan (weekly light / monthly full / extraordinary)
```

#### 4. Intenture Object Card

**Name**  
Health Care Team Intenture

**Intent**  
Разработать и сопровождать живую координируемую программу заботы о здоровье человека.

**Object**  
Многосторонняя комплексная программа, объединяющая работу нескольких экспертов по здоровью.

**Why It Matters**  
Человеку нужна единая система помощи вместо разрозненных и иногда противоречивых рекомендаций. Конкретные цели: нормализация гормонов, снижение веса, улучшение сердечно-сосудистой системы.

**Value**  
Устойчивое улучшение здоровья через согласованные действия экспертов без вреда и без конфликтующих советов.

**Constraints**  
Без противоречий, без вреда, с опорой на реальные данные, в рамках законодательства Кипра и EU, с disclaimers и limits of liability. Эксперты не заменяют лечащего врача.

**Expected Output**  
Персонализированная согласованная программа с ролями экспертов, рекомендациями, ограничениями и планом действий.

**Current Readiness**  
Ready for Realization

**Key Open Questions**  
Нет blocking unknowns. Non-blocking: частота лабораторных тестов, детали страхового покрытия.

**Linked Artifacts**  
Canvas v1.0, карта ролей экспертов, escalation protocol, evidence pack, review plan.

#### 5. Intenture Canvas

**Critical Blocks:**
- **Intent:** разработать и сопровождать - *Answered*
- **Object:** координируемая программа заботы о здоровье человека - *Answered*
- **Constraints:** не вредить; не противоречить между экспертами; соблюдать законы Кипра и EU; фиксировать disclaimers; эксперты не заменяют врача - *Answered*
- **Expected Output:** персонализированная живая программа действий - *Answered*

**Supporting Blocks:**
- **Context:** мужчина 40 лет, Кипр, хочет согласованную систему рекомендаций - *Answered*
- **Value:** улучшение здоровья без конфликтов между экспертами - *Answered*
- **Actors:** человек, нутрициолог, эндокринолог, кардиолог, шеф-повар, фитнес-тренер - *Answered*
- **Evidence:** АД 135/85, вес 95 кг, рост 180 см, анализы крови доступны - *Answered*
- **Metrics:** динамика веса, АД, гормоны, субъективное самочувствие, отсутствие конфликтов - *Answered*

**Development Blocks:**
- **Conception:** единый coordinated care system - *Answered*
- **Vision:** динамически обновляемая программа здоровья - *Answered*
- **Signals:** ухудшение самочувствия, критические показатели, отсутствие прогресса, конфликт экспертов - *Answered*
- **Risks:** вредные комбинации, игнорирование врача, неполные данные - *Answered*
- **Open Questions:** нет blocking unknowns - *Answered*

**Specialized Readiness (Health Care Team):**
- Primary health goal: определен (гормоны, вес, сердечно-сосудистая система) - *Answered*
- Baseline health data: предоставлены (АД, вес, рост, анализы) - *Answered*
- Jurisdiction: Республика Кипр, EU - *Answered*
- Escalation rules: при разногласии - показать варианты, рекомендовать врача - *Answered*
- Expert role boundaries: каждый эксперт в своей области, координация через PM - *Answered*

#### 6. Readiness decision

**Universal Readiness Layer:**
- Intent - Answered
- Object - Answered
- Constraints - Answered
- Expected Output - Answered

**Specialized Readiness (Health Care Team):**
- Primary health goal - Answered
- Baseline health data - Answered
- Jurisdiction - Answered
- Escalation rules - Answered
- Expert role boundaries - Answered

**Verdict: Ready for Realization**

Все Critical Blocks заполнены. Все Specialized Readiness Blocks для Health Care Team закрыты. Blocking unknowns отсутствуют. Non-blocking unknowns (частота лабораторных тестов, страховое покрытие) не препятствуют старту.

#### 7. Next artifacts / realization path

1. **Explication Record v1.0** - зафиксирован
2. **Role Coordination Map** - карта взаимодействия экспертов
3. **Disclaimer and Liability Framework** - юридические disclaimers для Кипра / EU
4. **Review Protocol** - weekly light / monthly full / extraordinary
5. **Escalation Protocol** - правила эскалации при конфликте или Critical Signal
6. **Initial Health Program v0.1** - первая версия программы на основе имеющихся данных
7. **Evidence Integration Plan** - план загрузки и обработки анализов крови

---

### Example 2 - AI Agent Intenture (companion file)

> Полный текст примера доступен в companion artifact: **Intenture End-to-End Examples v1** (отдельный файл).

Краткое описание: AI-агент обработки входящих клиентских запросов. Controlled first-line assistant, работающий в четких границах с обязательной эскалацией спорных случаев. Readiness: Ready for Structuring (требуется доопределение allowed actions и escalation rules).

### Example 3 - Product / Service Intenture (companion file)

> Полный текст примера доступен в companion artifact: **Intenture End-to-End Examples v1** (отдельный файл).

Краткое описание: сервис для экспликации и структурирования замысла человека в работе с AI. Meta-пример: intenture про сам Intenture. Readiness: Ready for Structuring (требуется определение first product scope и priority user scenarios).

---

## 19. Practical Usage Guide v0.1

### Когда использовать Intenture

Используй Intenture, когда:
- замысел важен и не должен исказиться;
- цена недопонимания высока;
- нужен переход от мысли к реализации;
- нужно координировать нескольких участников;
- нужен не просто ответ, а структурированный результат.

### Базовый workflow

1. Человек выражает замысел естественно.
2. PM запускает AI Interpretation Protocol (Capture → Extract → Normalize).
3. PM задает уточняющие вопросы по одному (Clarify).
4. PM собирает и проверяет:
   - Canvas (Single Source of Truth)
   - AI-facing form (нормализованная структура)
   - Human-facing form (тексты + диаграммы для человека)
   - Intenture Object Card
5. PM выносит readiness decision (Validate → Stress-Test → Decide Readiness).
6. PM показывает человеку результат для подтверждения.
7. При достаточной определенности и подтверждении человека - начинается реализация.
8. При эволюции замысла - PM повторяет протокол, фиксируя новый Explication Record.

### Как человеку лучше давать intenture

- говори естественно, но честно;
- сразу называй ограничения;
- сразу говори, что хочешь на выходе;
- не скрывай неизвестность;
- позволь AI задавать вопросы по одному;
- считай, что задача AI - довести замысел до однозначной формы.

---

## 20. Quick Start Guide v0.1

### Самый короткий способ начать

```text
Intent:
Object:
Constraints:
Expected Output:
Context:
Value:
Что пока неясно:
```

Или так:

> Я хочу сделать...  
> Над...  
> Нельзя нарушать...  
> На выходе мне нужен...  
> Пока я не знаю...

### Что произойдет дальше

PM:
1. зафиксирует ваши слова (Capture);
2. извлечет структуру (Extract);
3. задаст вопросы по одному (Clarify);
4. соберет Canvas, Object Card и диаграммы;
5. покажет вам Human-facing представление замысла;
6. вынесет readiness decision;
7. при вашем подтверждении - начнет реализацию.

### Критический порог

AI может начинать реализацию только когда однозначно понятно:
- что нужно сделать;
- над чем;
- какие границы нельзя нарушать;
- в какой форме нужен результат.

---

## 21. Scope Boundary

### Входит в Intenture 1.3 Core Language
1. Intenture Definition
2. Manifesto
3. Terminology Policy (с Language Policy для AI-facing form)
4. Glossary v1.2
5. Meta-Model v1.2
6. Intenture Syntax v0.2 (Intent Vocabulary, Constraint Types, Development Layer Syntax, Evidence/Metrics формат)
7. Lifecycle Model v1.1
8. Explication Record Versioning Policy
9. Visual Notation v1.0
10. Intenture Canvas v1.1 (с Partially Answered)
11. Intenture Object Card v1

### Входит в Intenture Environment v1.3
1. Readiness Checklist for Realization (с Specialized Readiness Matrix)
2. AI Interpretation Protocol v1.2 (с Conflict Resolution Protocol)
3. PM Operating Modes
4. Entry Patterns (Greenfield, From Concept, Takeover + Reverse Explication)
5. Pattern Library v1
6. End-to-End Examples v1 (1 встроенный + 2 в companion file)
7. Practical Usage Guide v0.1
8. Quick Start Guide v0.1

### Intenture Independence Principle

Intenture - самостоятельный язык, который может использоваться без привязки к конкретной платформе или организационной модели. Intenture не зависит от WiseTeam, VSM, или любого другого external framework. Конкретные платформы и governance модели могут использовать Intenture как язык взаимодействия, но Intenture не требует их наличия для корректной работы.

### Companion Artifacts (часть release package)

| Файл | Описание |
|---|---|
| `Intenture_Release_Notes.md` | История версий и изменений |
| `Intenture_Vulnerabilities_Roadmap.md` | Известные уязвимости и план версий 1.4+ |
| `Intenture_Visual_Notation_v1_0.html` | Три эталонных диаграммы Visual Notation |
| `Example_1_Health_Care_Team.md` | End-to-End Example v1.1: Health Care Team (Ready for Realization) |
| `Example_2_AI_Agent.md` | End-to-End Example v1.1: AI Agent (Ready for Structuring) |
| `Example_3_Product_Service.md` | End-to-End Example v1.1: Product / Service (Ready for Structuring) |

---

## 22. Release Checklist

| No | Статус | Пункт | Описание |
|---|---|---|---|
| 1 | Done | Terminology Policy | Политика терминов + Language Policy для AI-facing form. |
| 2 | Done | Glossary v1.2 | Reverse Explication. Conception vs Vision формализованы. |
| 3 | Done | Meta-Model v1.2 | Explication Record как Core Entity. |
| 4 | Done | Intenture Syntax v0.2 | Intent Vocabulary, Constraint Types, Development Layer Syntax, Evidence/Metrics формат. |
| 5 | Done | Lifecycle Model v1.1 | Lifecycle Transitions Table с триггерами и условиями. |
| 6 | Done | Explication Record Versioning Policy | Полная политика версионирования. |
| 7 | Done | Visual Notation v1.0 | Примитивы, три эталонных диаграммы, пять типов диаграмм. |
| 8 | Done | Intenture Canvas v1.1 | Single Source of Truth. Пять статусов (включая Partially Answered). |
| 9 | Done | Intenture Object Card v1 | Краткая карточка замысла. |
| 10 | Done | Readiness Checklist | Universal + Specialized readiness. |
| 11 | Done | AI Interpretation Protocol v1.2 | Интегрирован с Canvas. Conflict Resolution Protocol. |
| 12 | Done | PM Operating Modes | Четыре режима с entry/exit criteria. |
| 13 | Done | Entry Patterns | Greenfield, From Concept, Takeover + Reverse Explication. |
| 14 | Done | Specialized Readiness Matrix | Три паттерна с дополнительными readiness blocks. |
| 15 | Done | Pattern Library v1 | Три эталонных паттерна. |
| 16 | Done | End-to-End Examples v1.1 | Все три примера обновлены до v1.3 синтаксиса. Health Care Team встроен (Ready for Realization). AI Agent и Product/Service - companion files. |
| 17 | Done | Practical Usage Guide v0.1 | Workflow с PM Operating Modes. |
| 18 | Done | Quick Start Guide v0.1 | Быстрый вход в язык. |
| 19 | Done | Intenture Independence Principle | Язык не зависит от external frameworks. |
| 20 | Done | Release Notes | Вынесены в отдельный файл. |

---

## 23. Release Verdict

### Intenture 1.3 Core Language
**Ready**

### Intenture Environment v1.3
**Ready**

### Release Candidate Package
**Ready**

---

## 24. Final Release Statement

**Intenture 1.3** собран как:
- полноценный core language с formal semantics и типизированным синтаксисом;
- язык с двуслойным синтаксисом (Human-facing + AI-facing) и однозначной AI-facing form;
- язык с operational environment (Protocol, Conflict Resolution, Modes, Entry Patterns, Readiness, Patterns, Examples);
- самостоятельный язык, независимый от конкретных платформ и frameworks;
- practically usable system, готовая к pilot application;
- язык с тремя формализованными путями входа (Greenfield, From Concept, Takeover).
