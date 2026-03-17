# Intenture End-to-End Example: Health Care Team

## Статус
- **Pattern:** Health Care Team Intenture
- **Version:** v1.1 (Intenture 1.3 syntax)
- **Readiness:** Ready for Realization
- **Entry Pattern:** Greenfield
- **Format:** Markdown

---

## 1. Human-facing form

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

## 2. AI extraction

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

## 3. AI-facing form

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

## 4. Intenture Object Card

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

## 5. Intenture Canvas

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

## 6. Readiness decision

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

## 7. Next artifacts / realization path

1. **Explication Record v1.0** - зафиксирован
2. **Role Coordination Map** - карта взаимодействия экспертов
3. **Disclaimer and Liability Framework** - юридические disclaimers для Кипра / EU
4. **Review Protocol** - weekly light / monthly full / extraordinary
5. **Escalation Protocol** - правила эскалации при конфликте или Critical Signal
6. **Initial Health Program v0.1** - первая версия программы на основе имеющихся данных
7. **Evidence Integration Plan** - план загрузки и обработки анализов крови

---