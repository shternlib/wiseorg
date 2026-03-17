export const docsRu: Record<string, { title: string; content: string }> = {
  overview: {
    title: "Что такое Intenture?",
    content: `
## Каноническое определение

**Intenture** - это язык, который помогает человеку выражать свой замысел в форме, необходимой и достаточной для его однозначного понимания AI, последующей реализации и дальнейшего развития.

В более строгом виде:

**Intenture** - это формальный семантический лингво-графический язык экспликации замысла, предназначенный для точного взаимодействия человека и AI при создании, анализе, развитии и реализации замысла.

## Core Distinction

- **Intenture** - имя языка.
- **intenture** - замысел как феномен, объект выражения, экспликации, моделирования и реализации.

**intenture** определяется как:

> внутренняя предреализованная форма создания, представляющая собой целостное единство Intent, Conception, Vision и Will to Embodiment.

### Канонические формулы

**intenture (EN)**
*the inner pre-realized shape of creation: an integral unity of intent, conception, vision, and the will to embody them.*

**intenture (RU)**
*внутренняя предреализованная форма создания: целостное единство Intent, Conception, Vision и воли к воплощению.*

## Манифест

Intenture создается как язык, который позволяет человеку формулировать свой **intenture** естественно, а AI - интерпретировать этот замысел структурно, непротиворечиво и операционально.

Язык должен:
- снижать cognitive load человека
- повышать точность взаимодействия с AI
- сохранять смысловой инвариант между Human-facing и AI-facing form
- обеспечивать переход от замысла к реализации
- поддерживать дальнейшее развитие замысла по feedback

Intenture не должен быть:
- просто prompt engineering
- бюрократической формой
- заменой естественного языка
- чисто технической нотацией
- только языком описания без operational consequence

## Архитектура языка

Intenture работает на **двухуровневом синтаксисе**:

1. **Human-facing форма** - естественная, полуструктурированная, визуальная. Пишется на языке человека.
2. **AI-facing форма** - каноническая, однозначная, нормализуемая. Использует термины Intenture на английском вне зависимости от языка документа.

### Terminology Policy

Ключевые термины языка сохраняются в канонической форме на **английском языке**: Intent, Conception, Vision, Value, Constraint, State, Transition, Artifact, Actor, Object, Metric, Signal, Evidence, Explication, Explication Record, Expected Output.

AI-facing form заполняется на том языке, на котором человек выражал замысел. Канонические термины Intenture сохраняются на английском независимо от языка заполнения.
    `,
  },
  glossary: {
    title: "Глоссарий",
    content: `
## Ядро терминов

| Термин | Определение |
|--------|------------|
| **Intenture** | Собственное имя языка; формальный семантический лингво-графический язык экспликации замысла для точного взаимодействия человека и AI |
| **intenture** | Замысел как феномен; внутренняя предреализованная форма создания, представляющая собой целостное единство Intent, Conception, Vision и Will to Embodiment |
| **Explication** | Процесс выявления, прояснения и структурного развертывания неявного содержания замысла, при котором скрытая или частично выраженная внутренняя структура переводится в явную, различимую и структурированную форму. Explication - это то, что PM выполняет в диалоге с человеком |
| **Reverse Explication** | Процесс восстановления intenture из уже существующей реализации. Обратный путь: от реализации к замыслу |
| **Explication Record** | Зафиксированный результат процесса Explication: конкретная версия структурированного замысла, которую можно хранить, сравнивать и версионировать |
| **Explication of intenture** | Выявление, прояснение и структурное развертывание замысла в форму, пригодную для точной интерпретации AI и дальнейшей реализации |
| **Assumption Gate** | Обязательный контрольный шлюз в AI Interpretation Protocol, запрещающий переход intenture в Realizable при наличии неподтвержденных допущений AI. PM обязан провести каждое допущение через явное подтверждение, принятие или отклонение человеком |
| **Accepted Assumption** | Статус блока Canvas, означающий, что AI сделал допущение, а человек его рассмотрел и явно принял как допустимое основание для дальнейшей работы. Отличается от Answered тем, что фиксирует осознанное принятие риска, а не подтверждение факта |

> **Различение Explication и Explication Record:** Explication - процесс, Explication Record - его результат-артефакт. PM выполняет Explication, результат фиксируется как Explication Record, Record версионируется и хранится в Linked Artifacts.

> **Различение Explication и Reverse Explication:** Explication идет от человека к структуре (человек говорит, PM структурирует). Reverse Explication идет от реализации к структуре (PM анализирует существующие артефакты и восстанавливает замысел).

## Различение уровней

| Термин | Определение |
|--------|------------|
| **Idea** | Частное мыслительное содержание, локальный фрагмент замысла или мыслительный импульс. Idea может входить в состав intenture, но не исчерпывает его |
| **Intent** | Направленность воли и смысловой вектор, определяющий, чего именно субъект хочет достичь относительно Object |
| **Conception** | Смысловое зачатие решения, образа или подхода, через которое intenture начинает приобретать внутреннюю форму. Отвечает на вопрос: **каким способом / через какой подход будет решаться задача?** |
| **Vision** | Целостный образ желаемого результата, будущего состояния или создаваемой реальности. Отвечает на вопрос: **как выглядит идеальный конечный результат?** |
| **Will to Embodiment** | Внутренняя направленность на воплощение intenture в artifacts, actions, processes, services, products или changes |

> **Различение Conception и Vision:** Conception описывает подход и метод. Vision описывает образ результата. Один intenture может иметь одну Vision, но несколько возможных Conceptions для ее достижения.

## Объекты языка

| Термин | Определение |
|--------|------------|
| **Object** | Сущность, над которой совершается мыслительная, проектная или преобразующая работа |
| **Actor** | Участник, влияющий на intenture или потребляющий его результат |
| **Artifact** | Формальный результат, возникающий в процессе экспликации, моделирования или реализации intenture |
| **Constraint** | Ограничение, которое не должно быть нарушено |
| **Value** | Создаваемая польза для конкретного Actor или системы |
| **Metric** | Показатель, по которому оценивается качество, успешность или полезность замысла и его реализации |
| **State** | Состояние intenture или производного Artifact в жизненном цикле |
| **Transition** | Допустимый переход между States |
| **Signal** | Событие, отклонение, импульс или наблюдение, способное повлиять на intenture, его интерпретацию или его развитие |
| **Evidence** | Данные, наблюдения, факты или обоснования, на которые опирается intenture или его интерпретация |
| **Expected Output** | Форма, в которой должен существовать результат реализации intenture и в которой AI обязан его предоставить или подготовить |
    `,
  },
  "meta-model": {
    title: "Мета-модель",
    content: `
## 17 базовых сущностей

intenture, Intent, Object, Conception, Vision, Will to Embodiment, Actor, Artifact, Constraint, Value, Metric, State, Transition, Signal, Evidence, Expected Output, Explication Record.

> **Примечание:** Explication как процесс не является Core Entity. Core Entity - это **Explication Record**, зафиксированный результат процесса экспликации, который можно версионировать, хранить и связывать с другими сущностями.

## 17 базовых отношений

expresses, explicates, acts_on, shapes, constrains, creates_value_for, informs, is_evidenced_by, is_measured_by, transitions_to, is_triggered_by, is_realized_as, is_performed_by, produces, targets, results_in, records.

## 11 семантических формул

| # | Формула |
|---|---------|
| 1 | Intent **acts_on** Object |
| 2 | intenture **is_constrained_by** Constraint |
| 3 | intenture **creates_value_for** Actor |
| 4 | intenture **is_evidenced_by** Evidence |
| 5 | Value **is_measured_by** Metric |
| 6 | Explication (процесс) **produces** Explication Record |
| 7 | Explication (процесс) **is_performed_by** Actor (PM) |
| 8 | intenture **results_in** Expected Output |
| 9 | Artifact **creates_value_for** Actor |
| 10 | Transition **is_triggered_by** Signal |
| 11 | Explication Record **records** intenture |

## Минимальная единица

Минимальное выражение Intenture - это как минимум **одна сущность + одно семантически валидное отношение**.

Однако минимальная единица языка не равна порогу готовности к реализации. Реализация начинается только после прохождения **Critical Readiness Threshold**.
    `,
  },
  syntax: {
    title: "Синтаксис",
    content: `
## Двухуровневая архитектура

### Human-Facing форма
Естественный, полуструктурированный текст. Пишется на родном языке человека. Свободная форма с входом в замысел с любого удобного блока и диалогическим уточнением.

### AI-Facing форма
Каноническая, однозначная структура из 5 секций:

1. **Core Definition** - Intent, Object, Constraints, Expected Output
2. **Supporting Context** - Context, Value, Actors, Evidence, Metrics
3. **Development Layer** - Conception, Vision, States, Transitions, Signals, Risks, Open Questions (опционален на стадиях Dream и Exploratory)
4. **Readiness Layer** - текущее состояние жизненного цикла, критические пробелы, неизвестные элементы, решение о реализации
5. **Linked Artifacts** - Object Card, Canvas, Explication Records, Notes, Evidence Pack, Diagrams, Specifications, Plans

## Словарь Intent (8 глаголов)

Рекомендуемый словарь - не жесткий enum, а guidance. Каждый глагол подразумевает разную стратегию реализации.

| Глагол | Описание | Типичный PM Mode |
|--------|----------|-----------------|
| **create** | Создать с нуля - новый продукт, агент, программа | Exploratory -> Structuring -> Realization |
| **improve** | Улучшить существующее - оптимизация, рефакторинг | Structuring -> Realization |
| **maintain** | Поддерживать в рабочем состоянии - мониторинг, обновления | Realization -> Evolution |
| **restructure** | Существенно перестроить архитектуру или подход | Structuring -> Realization |
| **explore** | Исследовать возможности без обязательств по реализации | Exploratory |
| **extend** | Расширить существующее новой функциональностью | Structuring -> Realization |
| **migrate** | Перенести из одного состояния/среды в другое | Structuring -> Realization |
| **retire** | Вывести из эксплуатации, завершить lifecycle | Evolution -> Archived |

## Типы Constraint (8 типов)

| Тип | Описание | Приоритет | Корректируемый? |
|-----|----------|-----------|----------------|
| \`[safety]\` | Защита от вреда для людей, данных, систем | Критический | Нет, никогда |
| \`[legal]\` | Юридические и regulatory ограничения | Критический | Только при смене юрисдикции |
| \`[quality]\` | Стандарты качества, понятности, usability | Высокий | Да, при явном решении человека |
| \`[coordination]\` | Правила взаимодействия между участниками | Средний | Да, при согласии участников |
| \`[budget]\` | Финансовые ограничения | Средний | Да, при пересмотре бюджета |
| \`[timeline]\` | Временные ограничения | Средний | Да, при пересмотре сроков |
| \`[resource]\` | Ограничения по ресурсам (люди, инфраструктура, инструменты) | Средний | Да, при изменении доступности |
| \`[scope]\` | Ограничения объема и границ | Высокий | Да, при явном решении человека |

Правило: конфликт с [safety] или [legal] Constraint всегда разрешается в пользу Constraint. Конфликт с другими типами - через диалог с человеком.

## Structured Constraint Format

Типы Constraints [budget], [timeline] и [resource] поддерживают опциональный структурированный формат. Текстовое описание остается обязательным.

\`\`\`
- [budget] описание финансового ограничения
  amount: числовое значение
  currency: код валюты (USD, EUR и т.д.)
  period: total | monthly | quarterly | yearly
  flexibility: none | +N% | negotiable

- [timeline] описание временного ограничения
  deadline: YYYY-MM-DD
  type: hard | soft
  flexibility: none | +N days | +N weeks | negotiable

- [resource] описание ресурсного ограничения
  type: people | infrastructure | tools | licenses
  quantity: числовое значение или описание
  availability: описание доступности
\`\`\`

Типы [safety], [legal], [quality], [coordination], [scope] остаются чисто текстовыми.

## Маркеры Evidence

- \`[fact]\` - Проверенная информация
- \`[to-collect]\` - Необходимо собрать
- \`[assumed]\` - Предположение AI или человека, требует подтверждения

## Формат Signal

\`\`\`
Signal: [type: severity] - description
  type = operational | quality | safety | feedback
  severity = info | warning | critical
\`\`\`
    `,
  },
  canvas: {
    title: "Intenture Canvas",
    content: `
## Единый источник истины

Canvas - авторитетное представление intenture (Single Source of Truth). Все остальные формы (Object Card, AI-facing форма) производны от него. Вся информация собирается в Canvas, после чего представляется в двух формах:

- **Human-facing form** - тексты на естественном языке и диаграммы для человека
- **AI-facing form** - нормализованная структура для AI-агентов

## Три класса блоков

### Critical Blocks (должны быть заполнены для CRT)
- **Intent** - Чего вы хотите достичь?
- **Object** - На что направлен Intent?
- **Constraints** - Какие границы не должны быть нарушены?
- **Expected Output** - Каков конкретный результат?

### Supporting Blocks
- **Context** - Контекст и обстоятельства
- **Value** - Какую ценность это создает?
- **Actors** - Кто участвует? \`[primary]\` / \`[supporting]\`
- **Evidence** - Факты и данные. \`[fact]\` / \`[to-collect]\` / \`[assumed]\`
- **Metrics** - Как измеряется успех? \`[target: value]\`

### Development Blocks
- **Conception** - Каким подходом?
- **Vision** - Как выглядит идеальный результат?
- **States** - Фазы жизненного цикла. \`[complete]\` / \`[partial]\`
- **Transitions** - Переходы между состояниями. \`[trigger: condition]\`
- **Signals** - Наблюдаемые события. \`[type: severity]\`
- **Risks** - Выявленные угрозы
- **Open Questions** - Нерешенные вопросы

## 6 статусов блоков

| Статус | Значение |
|--------|----------|
| **Answered** | Блок заполнен полностью |
| **Partially Answered** | Блок содержит частичную информацию, требует уточнения |
| **Unknown Yet** | Блок не заполнен, информация пока отсутствует |
| **Not Applicable** | Блок не релевантен для данного intenture |
| **Assumed by AI** | AI сделал допущение, требуется подтверждение человека |
| **Accepted Assumption** | AI сделал допущение, человек его рассмотрел и явно принял как допустимое для старта реализации |

> **Различение Assumed by AI и Accepted Assumption:** "Assumed by AI" означает "AI предположил, человек еще не видел". "Accepted Assumption" означает "AI предположил, человек увидел и принял". Отличие от Answered: человек не подтвердил факт, а осознанно принял risk - допущение остается допущением, но человек берет на себя ответственность за реализацию на его основе.

## Три пути разрешения Assumed by AI

Каждый блок со статусом "Assumed by AI" должен быть разрешен одним из трех путей:

1. **Подтверждение** - человек подтверждает, что допущение соответствует действительности. Статус меняется на **Answered**.
2. **Принятие как допущение** - человек признает, что это допущение, а не факт, но считает его достаточным основанием для старта. Статус меняется на **Accepted Assumption**.
3. **Отклонение** - человек не согласен с допущением. Статус меняется на **Unknown Yet** (становится blocking, если это Critical Block или Specialized Readiness Block).

Для блоков с Constraints типа [safety] и [legal] путь "Принятие как допущение" недопустим. Допущения в области safety и legal могут быть только подтверждены (-> Answered) или отклонены (-> Unknown Yet).

## Принцип

Человек может входить в замысел с любого удобного блока. AI обязан нормализовать собранное в каноническую структуру.
    `,
  },
  lifecycle: {
    title: "Модель жизненного цикла",
    content: `
## 8 состояний

| # | State | Описание |
|---|-------|----------|
| 1 | **Dream / Vision Seed** | Начальная искра, неопределенная форма |
| 2 | **Exploratory** | Активное исследование, доминируют вопросы |
| 3 | **Explicated** | Замысел артикулирован, но еще не структурирован |
| 4 | **Structured** | Каноническая форма заполнена, Canvas заполнен |
| 5 | **Realizable** | Пройден Critical Readiness Threshold + Assumption Gate |
| 6 | **In Realization** | Активное выполнение |
| 7 | **Evolving** | Живой, получает сигналы, адаптируется |
| 8 | **Archived** | Более не активен |

## Canonical Transitions

- Dream / Vision Seed -> Exploratory
- Exploratory -> Explicated
- Explicated -> Structured
- Structured -> Realizable
- Realizable -> In Realization
- In Realization -> Evolving
- Evolving -> Structured
- Evolving -> Realizable
- Любое активное состояние -> Archived
- Archived -> Exploratory
- Archived -> Explicated

## Ключевой переход: Structured -> Realizable

Переход в **Realizable** происходит только после прохождения **Critical Readiness Threshold** и **Assumption Gate**.

## Critical Readiness Threshold (CRT)

Трехуровневая модель готовности:

### 1. Universal Readiness Layer
AI может начинать реализацию только когда однозначно понятно:
1. что нужно сделать (Intent - Answered)
2. над чем (Object - Answered)
3. какие границы нельзя нарушать (Constraints - Answered)
4. в какой форме должен существовать результат (Expected Output - Answered)

### 2. Assumption Gate
Intenture не может перейти в Realizable, если в Canvas существует хотя бы один блок со статусом "Assumed by AI". PM обязан:
1. собрать все блоки со статусом "Assumed by AI" перед Readiness Decision
2. показать человеку каждое допущение в явном виде
3. получить по каждому допущению одно из трех решений: подтвердить, принять как допущение, отклонить
4. обновить статусы блоков Canvas в соответствии с решениями
5. только после обработки всех допущений перейти к Readiness Decision

### 3. Specialized Readiness Blocks
Для каждого типа intenture определяются дополнительные блоки, которые должны быть заполнены сверх Universal Readiness Layer.

## Lifecycle Transitions Table

| Переход | Триггер | Минимальное условие |
|---------|---------|---------------------|
| Dream -> Exploratory | Человек начал диалог с PM | Выражен хотя бы один из: Intent, Object, Vision |
| Exploratory -> Explicated | PM завершил первичный раунд вопросов | Заполнены все Critical Blocks Canvas |
| Explicated -> Structured | PM нормализовал Canvas в AI-facing form | AI-facing form валидна, нет противоречий, все Critical Blocks - Answered |
| Structured -> Realizable | Пройден CRT | Все условия CRT + Assumption Gate пройден (ни одного "Assumed by AI") + Specialized Readiness выполнены |
| Realizable -> In Realization | Человек подтвердил старт | Явное подтверждение от человека |
| In Realization -> Evolving | Значимая обратная связь | Critical Signal из любого источника |
| Evolving -> Structured | Замысел существенно изменился | Изменения затрагивают Critical Blocks - требуется ре-нормализация |
| Evolving -> Realizable | Изменения локальные | Изменения не затрагивают Critical Blocks, AI-facing form обновлена |
| Любое активное -> Archived | Человек решил остановить | Явное решение человека, либо Success Criterion достигнут |
| Archived -> Exploratory | Возврат к замыслу | Явный запрос + контекст мог устареть, требуется полная ревизия |

## Нелинейное развитие

Жизненный цикл - **не** водопадная модель. Замысел может возвращаться назад, переэксплицироваться, реструктурироваться и эволюционировать по feedback.

## Решения о реализации

| Решение | Значение |
|---------|----------|
| Ready for Realization | Все условия выполнены |
| Ready for Structuring | Замысел ясен, нуждается в канонической форме |
| Needs Clarification | Выявлены критические пробелы |
| Blocked by Contradictions | Конфликтующие требования |
| Blocked by Critical Unknowns | Отсутствует необходимая информация |
| Exploratory Only | Не готов к каким-либо обязательствам |

## Версионирование

При каждом значимом переходе PM фиксирует новый **Explication Record** - версионированный снимок текущего состояния intenture. Рекомендуемая схема нумерации: **major.minor**.
    `,
  },
  visual: {
    title: "Визуальная нотация",
    content: `
## 11 примитивов

| Примитив | Форма | Цвет |
|----------|-------|------|
| **Intent** | Круг | Фиолетовый |
| **Object** | Прямоугольник | Серый |
| **Actor** | Шестиугольник | Бирюзовый |
| **Value** | Скругленный прямоугольник (pill) | Бирюзовый |
| **Constraint** | Ромб | Коралловый |
| **Expected Output** | Прямоугольник с усиленной рамкой | Зеленый |
| **State** | Двойная рамка (внешняя сплошная + внутренняя пунктирная) | Фиолетово-бирюзовый |
| **Metric** | Капсула (pill shape) | Бирюзовый |
| **Signal** | Метка-импульс (молния / зигзаг) | Коралловый |
| **Evidence** | Документная карточка (прямоугольник с загнутым углом) | Серый |
| **Artifact** | Прямоугольник с боковым маркером | Серый |

## 9 типов связей

Все связи изображаются стрелками с подписями. Подпись размещается рядом со стрелкой, не на ней:
acts_on, constrains, creates_value_for, informs, is_measured_by, transitions_to, is_triggered_by, is_realized_as, results_in.

## 5 типов диаграмм

1. **Intent Map** - обзор замысла: Intent, Object, ключевые Actors, Values, Constraints и Expected Output. Формируется в Structuring Mode.
2. **Actor Interaction Map** - карта взаимодействия участников. Полезна для кейсов с несколькими ролями.
3. **Lifecycle Diagram** - состояния и переходы intenture с восемью States, Critical Readiness Threshold как разделительная линия, обратные контуры из Evolving.
4. **Value Map** - как ценность создается и для кого.
5. **Realization Map** - путь от intenture к конкретным артефактам реализации.
    `,
  },
  "ai-protocol": {
    title: "Протокол интерпретации AI",
    content: `
## 9-шаговый конвейер

| Шаг | Действие | Результат |
|-----|----------|-----------|
| 1. **Capture** | Принимает свободное высказывание человека, фиксирует в исходном виде | Подтверждение: "Я вас услышал, вот что я понял" |
| 2. **Extract** | Извлекает из высказывания сущности Intenture: Intent, Object, Actors, Value, Constraints, Expected Output | Первичное заполнение Critical Blocks и Supporting Blocks |
| 3. **Normalize** | Приводит извлеченное к каноническому формату Canvas, проставляет статусы блоков (Answered / Unknown Yet / Assumed by AI) | Все блоки Canvas получают статусы |
| 4. **Clarify** | Задает человеку уточняющие вопросы по одному, начиная с Critical Blocks со статусом Unknown Yet или Assumed by AI | Вопросы в естественной форме, по одному |
| 5. **Validate** | Проверяет внутреннюю непротиворечивость Canvas: Constraints не конфликтуют с Intent, Value согласуется с Expected Output, Actors корректны | При обнаружении противоречий - показ человеку и запрос решения |
| 6. **Stress-Test** | Выявляет скрытые допущения, пробелы, ложные предпосылки, emotional noise, hidden meaning | Показ человеку потенциальных рисков и неизвестностей |
| 7. **Confirm Assumptions** | Проводит все допущения AI через явное подтверждение человека | Список допущений + запрос решения по каждому |
| 8. **Decide Readiness** | Оценивает readiness по Universal CRT + Assumption Gate + Specialized Matrix | Human-facing form + диаграммы + readiness decision |
| 9. **Prepare Realization Form** | Формирует финальный AI-facing form, Object Card, Explication Record | Полное Human-facing представление для подтверждения |

## Шаг 7 - Confirm Assumptions

**Входные данные:** все блоки Canvas со статусом "Assumed by AI" после шагов Clarify, Validate и Stress-Test.

**Процедура PM:**

1. PM собирает полный список блоков со статусом "Assumed by AI"
2. Если список пуст - шаг пропускается, PM переходит к Decide Readiness
3. Если список не пуст - PM показывает человеку каждое допущение в формате:
   - имя блока Canvas
   - формулировка допущения
   - основание, почему AI сделал это допущение
   - тип Constraint, если допущение связано с safety или legal (с предупреждением)
4. По каждому допущению PM запрашивает решение:
   - **"Подтвердить"** - это факт, я подтверждаю -> статус меняется на Answered
   - **"Принять как допущение"** - я понимаю, что это предположение, но считаю его достаточным для старта -> статус меняется на Accepted Assumption
   - **"Отклонить"** - это неверно или я не знаю -> статус меняется на Unknown Yet
5. Для допущений, связанных с [safety] или [legal] Constraints, вариант "Принять как допущение" недоступен
6. После обработки всех допущений PM обновляет Canvas и переходит к Decide Readiness

**Выходные данные:**
- обновленный Canvas без единого блока "Assumed by AI"
- журнал решений человека по каждому допущению (фиксируется в Explication Record)

## Протокол разрешения конфликтов

### Стратегия 1: Эскалация на человека
**Когда:** Конфликт ограничений типа safety или legal
**Правило:** Ограничения safety/legal **всегда приоритетны**. AI не может предлагать их ослабление.

### Стратегия 2: Предложить альтернативу
**Когда:** Конфликты quality, coordination или scope
**Действие:** Представить варианты с компромиссами для решения человеком.

### Стратегия 3: Запросить приоритизацию
**Когда:** Конфликт ограничений с равным весом
**Действие:** Попросить человека расставить приоритеты.

## Что обрабатывает протокол

- Неоднозначность в человеческих формулировках
- Неполноту информации
- Противоречия между требованиями
- Ложные или устаревшие допущения
- Эмоциональный шум в коммуникации
- Скрытые смыслы и неявные требования

## Базовые правила AI

AI не должен:
- имитировать понимание
- скрывать допущения
- переходить к реализации без readiness threshold

AI обязан:
- выявлять структуру
- задавать уточнения по одному
- фиксировать unknowns
- различать факт, гипотезу, желание и предпосылку

## Циклическая природа

Протокол - **не одноразовый**. При эволюции замысла PM повторяет шаги 2-9 на актуальном состоянии Canvas. Каждый полный проход порождает новый **Explication Record**.
    `,
  },
  "pm-modes": {
    title: "Операционные режимы PM",
    content: `
## 4 операционных режима

### 1. Exploratory Mode
**Назначение:** замысел еще туманен, человек исследует пространство возможностей

**Entry conditions:**
- Intenture в состоянии Dream / Vision Seed или Exploratory
- Critical Blocks Canvas не заполнены или заполнены частично
- Человек не может четко сформулировать Intent или Object

**PM responsibilities:**
- помогает человеку выявить смысл через открытые вопросы
- собирает фрагменты intenture без форсирования ранней фиксации scope
- выявляет unknowns и assumptions, фиксирует их явно
- удерживает диалог в режиме discovery, а не structuring
- не критикует незрелость замысла

**Outputs:**
- частично заполненный Canvas с явными статусами Unknown Yet
- карта неизвестности (что определено, что нет, что предположено)
- первичные формулировки Intent и/или Object (если удалось выявить)

**Выход:** появление различимого Object, первичная формулировка Intent, человек готов перейти к структурированию -> переход в **Structuring Mode**

### 2. Structuring Mode
**Назначение:** замысел существует, но его нужно собрать в устойчивую, непротиворечивую форму

**Entry conditions:**
- Intenture в состоянии Exploratory -> Explicated или Explicated -> Structured
- Intent и Object различимы
- Требуется нормализация в Canvas и AI-facing form

**PM responsibilities:**
- переводит собранный материал в Canvas
- формирует Object Card
- строит AI-facing form
- устраняет противоречия через Validate
- добирает Critical Blocks и Supporting Blocks до статуса Answered
- проводит Stress-Test: выявляет скрытые допущения, риски, пробелы
- проводит Assumption Gate: собирает все блоки "Assumed by AI", показывает человеку, получает явное решение по каждому

**Outputs:**
- полностью нормализованный Canvas
- AI-facing form без внутренних противоречий
- Object Card
- Human-facing form с диаграммами для человека
- Readiness assessment (Universal CRT + Assumption Gate + Specialized Readiness)

**Выход:** все Critical Blocks - Answered, Assumption Gate пройден (ни одного блока "Assumed by AI"), Readiness decision вынесен. Если Ready for Realization -> переход в **Realization Mode**.

### 3. Realization Mode
**Назначение:** intenture готов к действию, нужно перевести его в конкретные артефакты реализации

**Entry conditions:**
- Intenture в состоянии Realizable
- Critical Readiness Threshold пройден
- Assumption Gate пройден
- Specialized Readiness Blocks для данного типа intenture выполнены
- Человек подтвердил старт

**PM responsibilities:**
- готовит downstream artifacts: spec, backlog, plans, workflows
- удерживает scope boundaries - реализация не должна выходить за Constraints
- следит, чтобы реализация не разрушала исходный смысл intenture
- координирует работу AI-команды в соответствии с intenture
- при наличии структурированных [budget] и [timeline] Constraints трекает расход и соблюдение сроков

**Outputs:**
- артефакты реализации (specifications, backlog, plans, workflows)
- Explication Record версии на момент старта реализации
- lifecycle transition в In Realization

**Выход:** значимая обратная связь -> переход в **Evolution Mode**; реализация завершена -> Archived

### 4. Evolution Mode
**Назначение:** intenture уже живет, получает feedback, и его нужно поддерживать в актуальном состоянии

**Entry conditions:**
- Intenture в состоянии In Realization -> Evolving
- Получен Critical Signal, плановый review, или запрос человека на изменение

**PM responsibilities:**
- собирает signals из всех источников
- сравнивает фактическое развитие с intenture
- выявляет drift (расхождение между замыслом и реальностью)
- инициирует change cycle
- обновляет Canvas и Explication Record

**Outputs:**
- revised Canvas
- новый Explication Record (новая версия)
- обновленные артефакты реализации
- change summary для человека

**Выход:** изменения затрагивают Critical Blocks -> возврат в **Structuring Mode**; изменения локальные -> обновление AI-facing form, возврат в **Realization Mode**; человек решил остановить -> Archived
    `,
  },
  patterns: {
    title: "Библиотека паттернов v1",
    content: `
## Что такое паттерн?

Паттерн определяет **класс** замыслов - повторно используемый шаблон со стандартизированными полями. Example показывает **конкретный** заполненный intenture на основе паттерна.

### Unified Pattern Structure

Каждый паттерн включает: Name, Object, Primary Actor, Supporting Actors, Value, Expected Output, Nature of the intenture, Constraints, Required Initial Inputs, Outputs by Actor, Review Cadence, Critical Signals, Final Decision Authority, Rule in Case of Conflict / Disagreement, Success Criterion.

## 3 эталонных паттерна

### Health Care Team
**Object:** Многосторонняя комплексная координированная программа заботы о здоровье человека
**Primary Actor:** Человек, о здоровье которого идет речь
**Supporting Actors:** нутрициолог, эндокринолог, кардиолог, шеф-повар, фитнес-тренер
**Value:** Устойчивое улучшение здоровья через согласованные действия экспертов без противоречивых рекомендаций
**Specialized Readiness:**
- Определена основная цель по здоровью
- Доступны базовые данные о здоровье
- Уточнена юрисдикция
- Определены правила эскалации между экспертами
- Установлены границы компетенций и полномочия решений экспертов
**Ready-for-Realization:** Universal CRT + Assumption Gate + все blocking fields Answered + expert roles согласованы

### AI Agent
**Object:** Специализированный AI-агент, который в заданных границах принимает данные, интерпретирует их, принимает допустимые решения и выдает полезный результат
**Primary Actor:** Человек или система-заказчик
**Supporting Actors:** AI-архитектор, product owner, domain expert, developer / integrator, operator / supervisor, compliance / safety reviewer, конечные пользователи
**Value:** Повышение качества, скорости и устойчивости выполнения класса интеллектуальных задач без выхода за границы ответственности и безопасности
**Specialized Readiness:**
- Определены допустимые/запрещенные действия
- Правила эскалации ясны
- Условия сбоев определены
- Границы принятия решений установлены
**Ready-for-Realization:** Universal CRT + Assumption Gate + allowed/prohibited actions определены + escalation rules зафиксированы

### Product / Service
**Object:** Новый или существенно изменяемый продукт / сервис с четким ценностным предложением
**Primary Actor:** Целевой пользователь / клиент
**Supporting Actors:** founder / sponsor, product owner, designer, domain expert, delivery team, sales / marketing, operations / support, AI / analytical systems
**Value:** Создание различимой, востребованной и практически полезной ценности для целевого пользователя
**Specialized Readiness:**
- Целевой пользователь определен
- Ценностное предложение сформулировано
- Установлена первая граница скоупа
- Критерии успеха определены
- Ключевые допущения перечислены
**Ready-for-Realization:** Universal CRT + Assumption Gate + target user определен + value proposition сформулировано + first scope зафиксирован

## Паттерны входа

Каждый паттерн может быть начат по 3 путям:

1. **Greenfield** - начало с нуля. Lifecycle entry: Dream / Vision Seed. Protocol: стандартный (Capture -> Extract -> Normalize -> Clarify -> Validate -> Stress-Test -> Confirm Assumptions -> Decide Readiness -> Prepare Realization Form)
2. **From Concept** - извлечение из существующего документа. Protocol модифицированный: Capture принимает документ, Extract работает по тексту, остальные шаги стандартные (включая Confirm Assumptions)
3. **Takeover** - Reverse Explication из существующей системы. Protocol расширенный: Audit -> Reverse Extract -> Capture -> Reconcile -> Normalize -> Clarify -> Validate -> Stress-Test -> Confirm Assumptions -> Decide Readiness
    `,
  },
  "quick-start": {
    title: "Быстрый старт",
    content: `
## 5 минут до вашего первого Intenture

### Шаг 1: Выразите ваш Intent

Пишите свободно на вашем родном языке. Не беспокойтесь о структуре. Просто опишите, чего вы хотите достичь.

\`\`\`
Я хочу создать систему поддержки клиентов на основе AI,
которая может автоматически обрабатывать базовые запросы,
но эскалирует сложные или чувствительные вопросы на
операторов-людей. Она должна работать 24/7 и интегрироваться
с нашей существующей CRM.
\`\`\`

### Шаг 2: Определите ядро

Задайте себе вопросы:
- **Intent:** Какой глагол? -> \`create\`
- **Object:** На что вы воздействуете? -> \`AI-powered customer support system\`
- **Constraints:** Что не должно быть нарушено? -> \`[safety] sensitive issues must escalate\`, \`[quality] 24/7 availability\`
- **Expected Output:** Каков конечный результат? -> \`Working support system integrated with CRM\`

### Шаг 3: Заполните Canvas

Начните с Critical Blocks:

\`\`\`
Intent: create
Object: AI-powered customer support system
Constraints:
  - [safety] Sensitive/complex issues must escalate to humans
  - [quality] 24/7 availability
  - [coordination] Must integrate with existing CRM
Expected Output: Deployed AI support system with CRM integration
\`\`\`

### Шаг 4: Проверьте готовность

Пройдитесь по CRT:
- Intent - Answered
- Object - Answered
- Constraints - Answered
- Expected Output - Answered

-> Универсальный CRT пройден!

### Шаг 5: Assumption Gate

PM покажет вам все допущения, которые он сделал, и попросит подтвердить, принять или отклонить каждое. Все допущения AI должны быть обработаны до перехода к реализации.

### Шаг 6: Итерируйте

Теперь заполните поддерживающие блоки и блоки развития. Попросите AI помочь с дальнейшей экспликацией - он использует AI Interpretation Protocol (Capture -> Extract -> Normalize -> Clarify -> Validate -> Stress-Test -> Confirm Assumptions -> Decide Readiness) для извлечения, нормализации и валидации вашего замысла.

## Что дальше?

- Прочитайте полную [спецификацию синтаксиса](/docs/syntax) для деталей AI-facing формы
- Изучите [сквозные примеры](/examples) для понимания полного процесса
- Разберите [Canvas](/docs/canvas), чтобы понять все блоки и 6 статусов
- Узнайте о [жизненном цикле](/docs/lifecycle), чтобы понять переходы между состояниями
    `,
  },
};
