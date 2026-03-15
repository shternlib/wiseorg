# Intenture End-to-End Example: Product / Service

## Статус
- **Pattern:** Product / Service Intenture
- **Version:** v1.1 (Intenture 1.3 syntax)
- **Readiness:** Ready for Structuring
- **Entry Pattern:** Greenfield
- **Format:** Markdown

---

## 1. Human-facing form

> Я хочу создать сервис, который поможет людям не терять свои замыслы в разговоре с AI.  
> Сейчас человек говорит как умеет, AI что-то понимает, но часто не улавливает главное, достраивает лишнее или реализует не то.  
> Я хочу сервис, который будет помогать человеку постепенно формулировать свой замысел, делать его ясным, структурным и готовым к реализации.  
> При этом сервис должен быть удобным и красивым, понятным нетехнарям, не выглядеть как сухая техническая форма и в то же время быть достаточно строгим, чтобы AI понимал замысел однозначно.  
> На выходе человек должен получать не просто чат, а структурированный замысел, карточку, понятные схемы и материалы для дальнейшей работы.

---

## 2. AI extraction

**Extracted elements:**
- **Intent:** create
- **Object:** продукт / сервис для экспликации и структурирования замысла человека в работе с AI
- **Primary Actor:** человек, который хочет быть точно понятым AI
- **Supporting Actors:** founder / sponsor, product owner, designer, AI system, development team
- **Value:** точное понимание замысла человека AI без потери смысла и без лишней неоднозначности
- **Expected Output:** сервис, который помогает человеку выразить замысел, структурировать его и подготовить к реализации
- **Constraints:**
  - [quality] сервис должен быть понятен нетехнарям
  - [quality] сервис должен быть красивым и psychologically attractive
  - [quality] сервис не должен превращаться в сухую бюрократическую форму
  - [quality] сервис должен сохранять точность и однозначность для AI
  - [scope] сервис должен работать с разными уровнями зрелости замысла
- **Final Decision Authority:** человек-владелец продукта / sponsor / product owner

---

## 3. AI-facing form

```text
Core Definition:
  Intent: create
  Object: продукт / сервис для экспликации и структурирования замысла человека в работе с AI
  Constraints:
    - [quality] сервис должен быть понятен нетехническим пользователям
    - [quality] сервис должен быть красивым и визуально привлекательным
    - [quality] сервис не должен выглядеть как сухая бюрократическая форма
    - [quality] сервис должен обеспечивать однозначную интерпретацию замысла со стороны AI
    - [scope] сервис должен поддерживать разные уровни зрелости замысла
  Expected Output: сервис, который помогает человеку выразить замысел, структурировать его, визуализировать его и подготовить к реализации через AI

Supporting Context:
  Context: в обычном взаимодействии человека с AI замысел часто теряется, искажается или недоопределяется
  Value: точное понимание замысла человека AI без потери смысла и без разрушительной неоднозначности
  Actors:
    - [primary] человек-пользователь
    - [supporting] founder / sponsor
    - [supporting] product owner
    - [supporting] designer
    - [supporting] AI system
    - [supporting] development team
  Evidence:
    - [fact] частые ошибки в интерпретации запросов AI (наблюдается в повседневной практике)
    - [fact] сложность формулирования сложных замыслов в обычном чате
    - [assumed] потребность в структурированной, но human-friendly форме (гипотеза, требует валидации с пользователями)
  Metrics:
    - снижение числа критических недопониманий [target: TBD]
    - рост качества реализации замыслов [target: TBD]
    - скорость перехода от идеи к реализации [target: TBD]
    - субъективное ощущение понятности и полезности у пользователя [target: > 7/10]
    - частота повторного использования сервиса [target: > 60% retention]

Development Layer:
  Conception: сервис должен быть промежуточной средой между естественной речью человека и однозначной AI-facing структурой
  Vision: человек формулирует замысел естественно, а сервис помогает превратить его в красивую, ясную и practically usable форму
  States: [partial]
    - concept
    - structured
    - piloted
    - active
    - evolving
  Transitions:
    - concept -> structured [trigger: core feature set определен]
    - structured -> piloted [trigger: MVP готов к тестированию]
    - piloted -> active [trigger: пилот подтвердил ценность]
    - active -> evolving [trigger: обратная связь от пользователей]
    - evolving -> structured [trigger: существенное изменение подхода]
  Signals:
    - [quality: warning] высокий уровень непонимания со стороны AI
    - [quality: warning] низкая понятность для человека
    - [quality: warning] перегруженность формы
    - [feedback: warning] отсутствие роста качества реализации
    - [feedback: critical] повторяющиеся точки фрустрации пользователя
  Risks:
    - чрезмерная сложность
    - потеря human-friendly характера
    - слишком слабая формализация для AI
    - иллюзия точности без реальной однозначности
    - низкая adoption readiness
  Open Questions:
    - какой UI лучше всего удерживает баланс между красотой и строгостью?
    - как именно должна выглядеть visual notation в продукте?
    - какие типы intenture должны поддерживаться первыми?

Readiness Layer:
  Current Lifecycle State: Explicated
  Critical Gaps:
    - не определена первая product scope boundary
    - не выбраны приоритетные user scenarios
  Unknown Yet Items:
    - точная ценовая / delivery model
    - first release interaction model
  Realization Decision: Ready for Structuring

Linked Artifacts:
  Object Card: Product / Service Intenture Card
  Canvas: Product / Service Intenture Canvas
  Explication Records: v0.1 (текущий snapshot)
  Notes: positioning and concept notes
  Evidence Pack: examples of AI misunderstanding cases
  Diagrams: user flow, meaning flow, value map
  Specifications: interaction spec, syntax spec, notation spec
  Plans: pilot roadmap
```

---

## 4. Intenture Object Card

**Name**  
Product / Service Intenture

**Intent**  
Создать сервис для экспликации и структурирования замысла человека в работе с AI.

**Object**  
Продукт / сервис, который помогает человеку выразить замысел, а AI - понять его однозначно.

**Why It Matters**  
Сейчас замыслы людей в диалоге с AI часто теряются, искажаются или реализуются неточно.

**Value**  
Более точное понимание замысла AI, лучшее качество реализации и меньшее число разрушительных недопониманий.

**Constraints**  
[quality] Human-friendly, красиво, понятно нетехнарям, не бюрократично, но строго и достаточно формально для AI. [scope] Поддержка разных уровней зрелости замысла.

**Expected Output**  
Сервис, дающий человеку структурированный замысел, карточку, схемы и материалы для дальнейшей реализации.

**Current Readiness**  
Ready for Structuring

**Key Open Questions**  
Приоритетные user scenarios, первая scope boundary, first release interaction model.

**Linked Artifacts**  
Canvas v0.1, value map, interaction spec, notation spec, pilot roadmap.

---

## 5. Intenture Canvas

### Critical Blocks
- **Intent:** create - *Answered*
- **Object:** сервис для экспликации и структурирования замысла человека - *Answered*
- **Constraints:** [quality] human-friendly, красиво, понятно, не бюрократично, однозначно для AI. [scope] разные уровни зрелости - *Answered*
- **Expected Output:** сервис, переводящий замысел в practically usable structured form - *Answered*

### Supporting Blocks
- **Context:** обычный чат с AI не удерживает сложный замысел достаточно надежно - *Answered*
- **Value:** меньше недопониманий, лучшее качество реализации - *Answered*
- **Actors:** человек-пользователь, sponsor, product owner, designer, AI, команда - *Answered*
- **Evidence:** ошибки AI-интерпретации [fact], сложность передачи замыслов [fact], потребность в structuring [assumed] - *Partially Answered*
- **Metrics:** качество понимания, снижение уточнений, скорость к реализации, clarity, retention - *Partially Answered* (большинство targets TBD)

### Development Blocks
- **Conception:** промежуточная language environment - *Answered*
- **Vision:** человек мыслит естественно, получает красивую и точную форму - *Answered*
- **Signals:** quality/feedback - *Answered*
- **Risks:** сложность, потеря human-friendly, слабая формализация, иллюзия точности - *Answered*
- **Open Questions:** UI approach, visual notation, priority patterns - *Unknown Yet*

### Specialized Readiness (Product / Service)
- Target user - *Partially Answered* (человек, который хочет быть понятым AI; нужна сегментация)
- Value proposition - *Answered*
- First scope boundary - *Unknown Yet* (blocking)
- Success criteria / learning criteria - *Partially Answered*
- Key assumptions - *Partially Answered*

---

## 6. Readiness decision

### Universal Readiness Layer
- **Intent** - Answered
- **Object** - Answered
- **Constraints** - Answered
- **Expected Output** - Answered

### Specialized Readiness (Product / Service)
- Target user - Partially Answered
- Value proposition - Answered
- First scope boundary - Unknown Yet (blocking)
- Success criteria - Partially Answered
- Key assumptions - Partially Answered

### Verdict
**Ready for Structuring**

Universal CRT пройден, но Specialized Readiness содержит blocking unknown (first scope boundary). После выбора приоритетных user scenarios, определения first product scope и initial delivery model может перейти в Ready for Realization.

---

## 7. Next artifacts / realization path

1. **Explication Record v0.1** - зафиксирован
2. **Target User Segmentation** - определить первичный сегмент пользователей
3. **First Scope Boundary** - определить границы MVP
4. **Value Proposition Sheet** - формализовать ценностное предложение
5. **User Scenario Set** - приоритетные сценарии использования
6. **Interaction Flow Diagram** - поток взаимодействия пользователя с сервисом
7. **Visual Notation Concept** - как visual notation выглядит в продукте
8. **Pilot Roadmap** - план пилотного запуска
