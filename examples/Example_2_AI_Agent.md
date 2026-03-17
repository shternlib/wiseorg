# Intenture End-to-End Example: AI Agent

## Статус
- **Pattern:** AI Agent Intenture
- **Version:** v1.1 (Intenture 1.3 syntax)
- **Readiness:** Ready for Structuring
- **Entry Pattern:** Greenfield
- **Format:** Markdown

---

## 1. Human-facing form

> Я хочу создать AI-агента, который будет помогать мне разбирать входящие запросы от клиентов, понимать, что именно они хотят, и готовить для моей команды черновик правильного ответа или следующего действия.  
> Агент не должен сам принимать рискованные решения и не должен обещать клиенту того, чего мы не сможем выполнить.  
> Он должен работать в четких границах, а если ситуация спорная, неполная или чувствительная, сразу передавать ее человеку.  
> Мне важно, чтобы агент экономил время команды, но при этом был контролируемым, понятным и не создавал скрытых рисков.

---

## 2. AI extraction

**Extracted elements:**
- **Intent:** create
- **Object:** специализированный AI-агент обработки входящих клиентских запросов
- **Primary Actor:** команда, работающая с клиентскими запросами
- **Supporting Actors:** product owner, operator / supervisor, developer / integrator, domain expert, конечный клиент
- **Value:** экономия времени команды и повышение качества первичной обработки запросов без потери контроля
- **Expected Output:** AI-агент, который принимает запросы, интерпретирует их и готовит draft response / next action suggestion
- **Constraints:**
  - [safety] не принимать рискованные решения автономно
  - [safety] не обещать невыполнимого
  - [safety] эскалировать спорные, чувствительные и неполные случаи человеку
  - [quality] быть понятным и контролируемым
- **Final Decision Authority:** человек / supervisor

---

## 3. AI-facing form

```text
Core Definition:
  Intent: create
  Object: специализированный AI-агент обработки входящих клиентских запросов
  Constraints:
    - [safety] агент не должен самостоятельно принимать рискованные решения
    - [safety] агент не должен обещать клиенту того, чего команда не сможет выполнить
    - [safety] спорные, чувствительные и неполные случаи должны эскалироваться человеку
    - [quality] агент должен оставаться интерпретируемым и контролируемым
  Expected Output: AI-агент, который принимает входящие запросы, интерпретирует их и готовит draft response или suggestion for next action

Supporting Context:
  Context: команда получает входящие клиентские запросы и хочет ускорить первичную обработку без потери качества и контроля
  Value: экономия времени команды и повышение качества первичной обработки запросов без роста скрытых рисков
  Actors:
    - [primary] команда обработки запросов
    - [supporting] operator / supervisor
    - [supporting] product owner
    - [supporting] developer / integrator
    - [supporting] domain expert
    - [supporting] клиент
  Evidence:
    - [to-collect] типовые входящие запросы
    - [to-collect] история обработки запросов
    - [to-collect] существующие правила ответов
    - [to-collect] частые ошибки команды
  Metrics:
    - время первичной обработки [target: TBD]
    - доля корректно классифицированных запросов [target: > 85%]
    - доля безопасных эскалаций [target: > 95%]
    - доля ошибок / ложных обещаний [target: < 5%]
    - субъективная полезность для команды [target: > 7/10]

Development Layer:
  Conception: агент выступает как controlled first-line assistant, а не как автономный decision-maker
  Vision: прозрачный и управляемый AI-агент, который снимает рутинную нагрузку и передает человеку все пограничные случаи
  States: [complete]
    - draft
    - under validation
    - active
    - escalated
    - revised
  Transitions:
    - draft -> under validation [trigger: первая версия агента готова к проверке]
    - under validation -> active [trigger: валидация пройдена, supervisor одобрил]
    - active -> escalated [trigger: обнаружен ambiguous / sensitive / high-risk case]
    - escalated -> revised [trigger: решение supervisor получено]
    - revised -> active [trigger: policy обновлена, агент скорректирован]
  Signals:
    - [safety: critical] агент выдал опасный или недопустимый результат
    - [safety: critical] агент обещал невыполнимое клиенту
    - [quality: warning] неясный или неполный запрос от клиента
    - [quality: warning] признак hallucination в ответе агента
    - [operational: warning] рост доли ошибок
    - [feedback: info] снижение субъективной полезности для команды
  Risks:
    - ложная интерпретация запроса
    - скрытое нарушение policy
    - агентное обещание невыполнимого
    - недостаточная эскалация
    - потеря доверия команды
  Open Questions:
    - какие именно типы запросов считаются high-risk?
    - какой уровень автономии допустим?
    - какие каналы обработки должны поддерживаться первыми?

Readiness Layer:
  Current Lifecycle State: Explicated
  Critical Gaps:
    - не зафиксирован точный список allowed actions
    - не определены formal escalation rules
  Unknown Yet Items:
    - точный threshold для high-risk classification
    - policy for edge-case replies
  Realization Decision: Ready for Structuring

Linked Artifacts:
  Object Card: AI Agent Intenture Card
  Canvas: AI Agent Intenture Canvas
  Explication Records: v0.1 (текущий snapshot)
  Notes: role boundaries and policy notes
  Evidence Pack: examples of historical requests
  Diagrams: role boundary diagram, escalation map
  Specifications: allowed actions, escalation rules, response policy
  Plans: pilot rollout plan
```

---

## 4. Intenture Object Card

**Name**  
AI Agent Intenture

**Intent**  
Создать AI-агента для первичной обработки клиентских запросов.

**Object**  
Управляемый AI-агент, который интерпретирует входящие запросы и предлагает draft response или next action.

**Why It Matters**  
Команде нужно быстрее разбирать запросы клиентов без потери качества, контроля и безопасности.

**Value**  
Снижение рутинной нагрузки и повышение качества первичной обработки запросов в безопасных границах.

**Constraints**  
[safety] Без рискованных автономных решений, без ложных обещаний, с обязательной эскалацией чувствительных и спорных случаев. [quality] Агент должен быть интерпретируемым и контролируемым.

**Expected Output**  
Контролируемый AI-агент с определенными inputs, allowed actions, escalation rules и критериями качества.

**Current Readiness**  
Ready for Structuring

**Key Open Questions**  
Allowed actions, formal escalation rules, thresholds for high-risk cases.

**Linked Artifacts**  
Canvas v0.1, escalation map, policy spec, examples pack, pilot plan.

---

## 5. Intenture Canvas

### Critical Blocks
- **Intent:** create - *Answered*
- **Object:** AI-агент первичной обработки клиентских запросов - *Answered*
- **Constraints:** [safety] не принимать рискованные решения; не обещать невыполнимого; эскалировать спорные случаи. [quality] сохранять контролируемость - *Answered*
- **Expected Output:** агент, готовящий draft response / next action suggestion - *Answered*

### Supporting Blocks
- **Context:** нужно ускорить первичную обработку клиентских запросов - *Answered*
- **Value:** экономия времени команды и рост качества обработки - *Answered*
- **Actors:** команда, supervisor, product owner, клиент - *Answered*
- **Evidence:** типовые запросы, исторические данные, правила обработки - *Partially Answered* (все [to-collect])
- **Metrics:** скорость, качество, доля ошибок, доля эскалаций, полезность - *Answered*

### Development Blocks
- **Conception:** first-line assistant under supervision - *Answered*
- **Vision:** прозрачный, полезный и безопасный агент - *Answered*
- **Signals:** safety/quality/operational/feedback - *Answered*
- **Risks:** неверная интерпретация, выход за role boundary, скрытая unsafe autonomy - *Answered*
- **Open Questions:** точные allowed actions, thresholds, first deployment scope - *Unknown Yet*

### Specialized Readiness (AI Agent)
- Allowed actions - *Unknown Yet* (blocking)
- Prohibited actions - *Partially Answered*
- Escalation rules - *Unknown Yet* (blocking)
- Failure conditions - *Partially Answered*
- Decision boundaries - *Unknown Yet* (blocking)

---

## 6. Readiness decision

### Universal Readiness Layer
- **Intent** - Answered
- **Object** - Answered
- **Constraints** - Answered
- **Expected Output** - Answered

### Specialized Readiness (AI Agent)
- Allowed actions - Unknown Yet (blocking)
- Escalation rules - Unknown Yet (blocking)
- Decision boundaries - Unknown Yet (blocking)

### Verdict
**Ready for Structuring**

Universal CRT пройден, но Specialized Readiness Blocks содержат blocking unknowns. После фиксации allowed actions, escalation rules и high-risk thresholds может перейти в Ready for Realization.

---

## 7. Next artifacts / realization path

1. **Explication Record v0.1** - зафиксирован
2. **Allowed Actions Specification**
3. **Escalation Rules Specification**
4. **High-Risk Threshold Definition**
5. **Role Boundary Diagram**
6. **Pilot Rollout Plan**
7. **Quality Monitoring Dashboard Spec**
