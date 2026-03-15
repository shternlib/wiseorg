import { notFound } from "next/navigation";
import { DocContent } from "@/components/docs/doc-content";

const examples: Record<string, { title: string; content: string }> = {
  "health-care-team": {
    title: "Health Care Team — End-to-End Example",
    content: `
## Entry Pattern: Greenfield | Readiness: Ready for Realization

### Human-Facing Form

> I am a man, 40 years old, living in Cyprus (EU). I want to assemble a coordinated team of health experts — nutritionist, endocrinologist, cardiologist, chef, and fitness trainer — who will work together under a unified plan to create a personalized, non-contradictory health program for me.
>
> My baseline: BP 135/85, weight 95kg, height 180cm. Goals: optimize hormones, reduce weight, improve cardiovascular health.
>
> Rules: No harm, no conflicts between expert recommendations, Cyprus/EU legal compliance, I have final decision authority, escalation protocol between experts required.

---

## AI-Facing Canonical Form

### Core Definition

**Intent:** create and maintain

**Object:** coordinated multi-expert personalized health program

**Constraints:**
- \`[safety]\` No harm — all recommendations must be safe and non-contradictory
- \`[safety]\` Expert conflicts must be resolved before reaching the person
- \`[legal]\` Full compliance with Cyprus and EU health regulations
- \`[coordination]\` Unified plan — no isolated expert silos
- \`[quality]\` Evidence-based recommendations only
- \`[quality]\` Person retains final decision authority

**Expected Output:** Personalized health program with coordinated expert recommendations, review schedule, escalation protocols, and progress tracking

### Supporting Context

**Actors:**
- \`[primary]\` Person — Male, 40, Cyprus EU
- \`[supporting]\` Nutritionist
- \`[supporting]\` Endocrinologist
- \`[supporting]\` Cardiologist
- \`[supporting]\` Chef
- \`[supporting]\` Fitness Trainer

**Value:** Sustainable health improvement through coordinated expert care

**Evidence:**
- \`[fact]\` BP: 135/85 mmHg
- \`[fact]\` Weight: 95 kg, Height: 180 cm (BMI: 29.3)
- \`[to-collect]\` Hormonal panel results
- \`[to-collect]\` Cardiovascular stress test
- \`[to-collect]\` Nutritional deficiency analysis

**Metrics:**
- BMI \`[target: < 25]\`
- BP \`[target: < 130/80]\`
- Testosterone \`[target: optimal range per endocrinologist]\`
- Resting heart rate \`[target: < 70 bpm]\`

### Development Layer

**States:**
- \`[complete]\` Initial assessment
- \`[complete]\` Baseline data collection
- \`[partial]\` Expert coordination protocol
- \`[partial]\` Personalized program design

**Transitions:**
- Assessment → Program Design \`[trigger: all baseline data collected]\`
- Program Design → Active Program \`[trigger: all experts approve unified plan]\`
- Active Program → Review \`[trigger: 30-day milestone]\`

**Signals:**
- \`[safety: critical]\` — Expert recommendations conflict
- \`[safety: critical]\` — Adverse health reaction detected
- \`[quality: warning]\` — Progress metrics stagnating
- \`[operational: info]\` — Scheduled review approaching

### Readiness Layer

**Current Lifecycle State:** Realizable

**Realization Decision:** Ready for Realization

All Critical Blocks answered. All Specialized Readiness conditions met: primary health goal, baseline data, jurisdiction, escalation rules, expert boundaries — all defined.
    `,
  },
  "ai-agent": {
    title: "AI Agent — End-to-End Example",
    content: `
## Entry Pattern: Greenfield | Readiness: Ready for Structuring

### Human-Facing Form

> We need an AI agent that processes incoming client requests — interprets them and prepares draft responses or next-action suggestions for the team. It must operate within strict safety boundaries, with mandatory escalation for ambiguous or sensitive cases.

---

## AI-Facing Canonical Form

### Core Definition

**Intent:** create

**Object:** Specialized AI agent for client request processing

**Constraints:**
- \`[safety]\` No risky autonomous decisions — all high-impact actions require human approval
- \`[safety]\` No false promises or commitments to clients
- \`[safety]\` Mandatory escalation for ambiguous, sensitive, or high-risk cases
- \`[quality]\` Must remain interpretable and controllable at all times

**Expected Output:** Deployed AI agent with request classification, draft response generation, escalation protocol, and human oversight dashboard

### Supporting Context

**Actors:**
- \`[primary]\` Client request processing team
- \`[supporting]\` AI agent
- \`[supporting]\` Team leads (escalation targets)

**Value:** Faster client response times while maintaining safety and quality

**Evidence:**
- \`[to-collect]\` Current request volume and patterns
- \`[to-collect]\` Existing response templates
- \`[to-collect]\` Historical escalation cases
- \`[to-collect]\` Client sensitivity categories

**Metrics:**
- Classification accuracy \`[target: > 85%]\`
- Safe escalation rate \`[target: > 95%]\`
- Error rate \`[target: < 5%]\`
- Response draft quality \`[target: TBD]\`

### Development Layer

**States:**
- \`[partial]\` Draft — initial architecture
- \`[partial]\` Under validation — testing with historical data
- Active — processing live requests
- Escalated — handling edge cases
- Revised — updated after feedback

**Signals:**
- \`[safety: critical]\` — Dangerous output generated
- \`[safety: critical]\` — False promise detected in draft
- \`[quality: warning]\` — Hallucination signs in response
- \`[operational: warning]\` — Rising error rate
- \`[feedback: info]\` — Team satisfaction feedback

### Readiness Layer

**Current Lifecycle State:** Structured

**Realization Decision:** Ready for Structuring

**Critical Gaps:**
Universal CRT passed (all Critical Blocks answered), but Specialized Readiness has 3 blocking unknowns:
- ❓ Allowed actions — not yet defined
- ❓ Escalation rules — not yet defined
- ❓ Decision boundaries — not yet defined

**Next Steps:** Define allowed/prohibited actions, establish escalation rules with thresholds, set decision boundary criteria.
    `,
  },
  "product-service": {
    title: "Product / Service — End-to-End Example",
    content: `
## Entry Pattern: Greenfield | Readiness: Ready for Structuring

### Human-Facing Form

> I want to create a service that prevents people from losing their intentions in AI conversations. It must be beautiful, accessible to non-technical users, not look like a dry form, yet be rigorous enough for unambiguous AI interpretation.
>
> The output should be: structured intent, cards, diagrams, and materials ready for AI consumption.

This is a **meta-example** — an intenture about a product built around the Intenture language itself.

---

## AI-Facing Canonical Form

### Core Definition

**Intent:** create

**Object:** Product/service for intent explication and structuring

**Constraints:**
- \`[quality]\` Must be human-friendly and beautiful
- \`[quality]\` Must not look bureaucratic or form-like
- \`[quality]\` Must be accessible to non-technical users
- \`[quality]\` Must produce output precise enough for AI interpretation
- \`[scope]\` Must support different intenture maturity levels (from dream to structured)

**Expected Output:** Working service that transforms human intent into structured Intenture artifacts (Canvas, Object Card, diagrams)

### Supporting Context

**Actors:**
- \`[primary]\` Non-technical users with ideas/intents
- \`[primary]\` AI systems consuming structured output
- \`[supporting]\` Intenture language community

**Value:** Bridge between human creativity and AI precision — no intent lost in translation

**Evidence:**
- \`[fact]\` AI frequently misinterprets complex intents in unstructured conversation
- \`[fact]\` Conveying multi-dimensional intents in chat is cognitively expensive
- \`[assumed]\` Users need a structured but friendly form factor

**Metrics:**
- Intent preservation accuracy \`[target: TBD]\`
- User completion rate \`[target: TBD]\`
- Time to first structured output \`[target: TBD]\`
- AI interpretation success rate \`[target: TBD]\`

### Readiness Layer

**Current Lifecycle State:** Structured

**Realization Decision:** Ready for Structuring

**Critical Gaps:**
Universal CRT passed. Specialized Readiness has 1 blocking unknown:
- ❓ First scope boundary — not yet defined

Partially answered:
- Target user segments identified but not prioritized
- Success criteria listed but not quantified

**Next Steps:** Target user segmentation, first scope boundary definition, value proposition sheet, user scenario set, interaction flow design, visual notation concept, pilot roadmap.
    `,
  },
};

export default async function ExamplePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const example = examples[slug];

  if (!example) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <DocContent title={example.title} content={example.content} />
    </div>
  );
}
