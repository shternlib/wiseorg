export const docsEn: Record<string, { title: string; content: string }> = {
  overview: {
    title: "What is Intenture?",
    content: `
## Canonical Definition

**Intenture** is a language that helps humans express intent in a form necessary and sufficient for unambiguous AI understanding, subsequent realization, and further development.

In a more formal sense:

**Intenture** is a formal semantic linguo-graphical language for intent explication, designed for precise human-AI interaction in creating, analyzing, developing, and realizing intent.

**intenture** (lowercase) is the phenomenon of intent itself - the inner pre-realized shape of creation: an integral unity of intent, conception, vision, and the will to embody them.

## Core Distinction

- **Intenture** - the name of the language.
- **intenture** - intent as a phenomenon, the object of expression, explication, modeling, and realization.

## What Intenture Is NOT

- Not prompt engineering
- Not a bureaucratic form
- Not a natural language replacement
- Not pure technical notation
- Not description-only without operational consequence

## Core Principles

Intenture must:
- **Reduce human cognitive load** when articulating complex intents
- **Increase AI interaction precision** through structured explication
- **Preserve semantic invariant** between Human-facing and AI-facing forms
- **Enable transition from intent to realization** via systematic process
- **Support evolution** via feedback loops

## Language Architecture

Intenture operates on a **dual-layer syntax**:

1. **Human-facing form** - natural, semi-structured, visual. Written in the human's language.
2. **AI-facing form** - canonical, unambiguous, normalizable. Uses Intenture terms in English regardless of document language.

The 17 canonical terms (Intent, Object, Constraint, Value, Actor, Intenture Portfolio, Intenture Portfolio Map, etc.) are always preserved in English.
    `,
  },
  glossary: {
    title: "Glossary",
    content: `
## Core Terms

| Term | Definition |
|------|-----------|
| **Intenture** | The name of the language; a formal semantic linguo-graphical language for intent explication for precise human-AI interaction |
| **intenture** | The phenomenon of intent - the inner pre-realized shape of creation: an integral unity of Intent, Conception, Vision, and Will to Embodiment |
| **Explication** | The process of revealing, clarifying, and structurally unfolding the implicit content of intent, translating a hidden or partially expressed inner structure into an explicit, distinguishable, and structured form. Explication is what IG performs in dialogue with the human. |
| **Reverse Explication** | The process of recovering intenture from an existing implementation. The reverse path: from realization to intent. |
| **Explication Record** | A versioned artifact produced by explication - a fixed result of the Explication process that can be stored, compared, and versioned |
| **Explication of intenture** | Revealing, clarifying, and structurally unfolding intent into a form suitable for precise AI interpretation and subsequent realization |
| **Assumption Gate** | A mandatory control gate in the AI Interpretation Protocol that prohibits an intenture from transitioning to Realizable when unconfirmed AI assumptions exist. IG must pass each assumption through explicit confirmation, acceptance, or rejection by the human. |
| **Accepted Assumption** | A Canvas block status meaning the AI made an assumption and the human reviewed and explicitly accepted it as a valid basis for further work. Differs from Answered in that it records a conscious acceptance of risk, not a confirmation of fact. |

**Explication vs Explication Record:** Explication is the process, Explication Record is its result-artifact. IG performs Explication, the result is fixed as an Explication Record, and the Record is versioned and stored in Linked Artifacts.

**Explication vs Reverse Explication:** Explication goes from human to structure (human speaks, IG structures). Reverse Explication goes from implementation to structure (IG analyzes existing artifacts and recovers intent).

## Level Distinctions

| Term | Definition |
|------|-----------|
| **Idea** | A local fragment of intenture, a particular thought content or thought impulse |
| **Intent** | Directional will and semantic vector determining what exactly the subject wants to achieve relative to an Object |
| **Conception** | The semantic genesis of a solution, image, or approach through which intenture begins to acquire internal form. Answers: "by what approach will the task be solved?" |
| **Vision** | A holistic image of the desired result, future state, or created reality. Answers: "what does the ideal end result look like?" |
| **Will to Embodiment** | The inner directedness toward embodying intenture in artifacts, actions, processes, services, products, or changes |

**Conception vs Vision:** Conception describes the approach and method. Vision describes the image of the result. One intenture may have one Vision but several possible Conceptions for achieving it.

## Language Objects

| Term | Definition |
|------|-----------|
| **Object** | An entity upon which thought, design, or transformative work is performed |
| **Actor** | A participant influencing intenture or consuming its result |
| **Artifact** | A formal result arising during explication, modeling, or realization of intenture |
| **Constraint** | A boundary that must not be violated |
| **Value** | Benefit created for a specific Actor or system |
| **Metric** | An indicator by which the quality, success, or usefulness of intenture and its realization is evaluated |
| **State** | A condition of the intenture or derived Artifact in the lifecycle |
| **Transition** | A permitted movement between States |
| **Signal** | An event, deviation, impulse, or observation capable of influencing intenture, its interpretation, or its development |
| **Evidence** | Data, observations, facts, or justifications upon which intenture or its interpretation relies |
| **Expected Output** | The form in which the realization result must exist and in which AI is obligated to provide or prepare it |
| **Intenture Portfolio** | A collection of related intenture belonging to one person or team, represented as a typed graph. Each node is a full intenture with its own Canvas, Lifecycle, and Explication Record. |
| **Intenture Portfolio Map** | A visual diagram of Portfolio: nodes are intenture (showing name, Object type, and current Lifecycle State), edges are typed inter-intenture relations. Formed by IG in Exploratory Mode or Structuring Mode. |
    `,
  },
  "meta-model": {
    title: "Meta-Model",
    content: `
## 17 Core Entities

intenture, Intent, Object, Conception, Vision, Will to Embodiment, Actor, Artifact, Constraint, Value, Metric, State, Transition, Signal, Evidence, Expected Output, Explication Record.

## 18 Core Relations

expresses, explicates, acts_on, shapes, constrains, creates_value_for, informs, is_evidenced_by, is_measured_by, transitions_to, is_triggered_by, is_realized_as, is_performed_by, produces, targets, results_in, records, depends_on, enables, conflicts_with, shares_constraint_with, shares_actor_with.

## 16 Semantic Formulas

| # | Formula |
|---|---------|
| 1 | Intent **acts_on** Object |
| 2 | intenture **is_constrained_by** Constraint |
| 3 | intenture **creates_value_for** Actor |
| 4 | intenture **is_evidenced_by** Evidence |
| 5 | Value **is_measured_by** Metric |
| 6 | Explication (process) **produces** Explication Record |
| 7 | Explication (process) **is_performed_by** Actor (IG) |
| 8 | intenture **results_in** Expected Output |
| 9 | Artifact **creates_value_for** Actor |
| 10 | Transition **is_triggered_by** Signal |
| 11 | Explication Record **records** intenture |
| 12 | intenture **depends_on** intenture (cascading dependency between intents) |
| 13 | intenture **enables** intenture (realization of one opens possibility for another) |
| 14 | intenture **conflicts_with** intenture (potential conflict between intents) |
| 15 | intenture **shares_constraint_with** intenture (shared constraints) |
| 16 | intenture **shares_actor_with** intenture (shared actors) |

### Inter-intenture Relations

Relations between separate intenture within an Intenture Portfolio. Each linked intenture is a full entity with its own Canvas and Lifecycle.

| Relation | Directionality | Semantics |
|----------|---------------|-----------|
| **depends_on** | Directed (A depends_on B) | Realization of A is impossible or significantly hindered without realization of B |
| **enables** | Directed (A enables B) | Realization of A opens the possibility for realization of B |
| **conflicts_with** | Symmetric | A and B contain a potential conflict (in Constraints, resources, or goals) |
| **shares_constraint_with** | Symmetric | A and B share common Constraints (type specified: [budget], [timeline], [resource], etc.) |
| **shares_actor_with** | Symmetric | A and B share common Actors |

Rules:
1. Cascading blocking via depends_on: if B is not Realizable or above, A cannot transition to Realizable
2. Conflict requires resolution: conflicts_with is a signal for IG to show and resolve
3. Shared constraints tracked jointly
4. Relations recorded on both sides

## Minimum Unit

The minimum unit of Intenture is a structured fragment of intent in which at least **one entity + one semantically valid relation** with another entity, context, or expected result is fixed.

However, the minimum unit of the language does not equal the readiness threshold for realization. Realization begins only after passing the **Critical Readiness Threshold**.
    `,
  },
  syntax: {
    title: "Syntax",
    content: `
## Dual-Layer Architecture

### Human-Facing Form
Natural, semi-structured text. Written in the human's own language. Free-form but follows recommended patterns. Allows entry from any convenient block.

### AI-Facing Form
Canonical, unambiguous structure with 6 sections:

1. **Core Definition** - Intent, Object, Constraints, Expected Output
2. **Supporting Context** - Context, Value, Actors, Evidence, Metrics
3. **Development Layer** - Conception, Vision, States, Transitions, Signals, Risks, Open Questions
4. **Readiness Layer** - Current Lifecycle State, Critical Gaps, Unknown Yet Items, Realization Decision
5. **Linked Artifacts** - References to external documents
6. **Linked Intenture** - Inter-intenture relations (depends_on, enables, conflicts_with, shares_constraint_with, shares_actor_with)

## Intent Vocabulary (8 Verbs)

Not a rigid enum but guidance - each verb implies a different realization strategy.

| Verb | Implied Strategy | Typical IG Mode |
|------|-----------------|----------------|
| **create** | Build from scratch | Exploratory -> Structuring -> Realization |
| **improve** | Enhance existing | Structuring -> Realization |
| **maintain** | Keep operational | Realization -> Evolution |
| **restructure** | Change architecture | Structuring -> Realization |
| **explore** | Research / discover | Exploratory |
| **extend** | Add capabilities | Structuring -> Realization |
| **migrate** | Move between platforms | Structuring -> Realization |
| **retire** | Phase out gracefully | Evolution -> Archived |

## Constraint Types (8 Types)

| Type | Priority | Adjustable? |
|------|----------|------------|
| \`[safety]\` | Critical | Never |
| \`[legal]\` | Critical | Only on jurisdiction change |
| \`[quality]\` | High | With explicit human decision |
| \`[coordination]\` | Medium | With participant agreement |
| \`[budget]\` | Medium | On budget revision |
| \`[timeline]\` | Medium | On schedule revision |
| \`[resource]\` | Medium | On availability change |
| \`[scope]\` | High | With explicit human decision |

Rule: a conflict with a [safety] or [legal] Constraint is always resolved in favor of the Constraint. Conflicts with other types are resolved through dialogue with the human.

## Structured Constraint Format

Constraint types [budget], [timeline], and [resource] support an optional structured format. The text description remains mandatory. Structured fields are added below the description with indentation.

### Budget Constraint

\`\`\`
- [budget] description of financial constraint
  amount: numeric value
  currency: currency code (USD, EUR, etc.)
  period: total | monthly | quarterly | yearly
  flexibility: none | +N% | negotiable
\`\`\`

### Timeline Constraint

\`\`\`
- [timeline] description of time constraint
  deadline: YYYY-MM-DD
  type: hard | soft
  flexibility: none | +N days | +N weeks | negotiable
\`\`\`

### Resource Constraint

\`\`\`
- [resource] description of resource constraint
  type: people | infrastructure | tools | licenses
  quantity: numeric value or description
  availability: description of availability
\`\`\`

### Rules

1. Structured fields are optional. The text format \`- [budget] total budget $5000\` remains valid.
2. Types [safety], [legal], [quality], [coordination], [scope] remain text-only - they do not need structured format.
3. IG may suggest the human formalize budget and timeline constraints but is not required to demand it.
4. When structured fields are present, AI can automatically track budget spending and deadline compliance.

## Evidence Markers

- \`[fact]\` - Verified information
- \`[to-collect]\` - Needs to be gathered
- \`[assumed]\` - AI or human assumption, needs confirmation

## Signal Format

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
## Single Source of Truth

The Canvas is the authoritative representation of an intenture. All other forms (Object Card, AI-facing form) derive from it. All information is collected in the Canvas, then presented in two forms:

- **Human-facing form** - natural language texts and diagrams for the human
- **AI-facing form** - normalized structure for AI agents

## Three Block Classes

### Critical Blocks (Must be answered for CRT)
- **Intent** - What do you want to achieve?
- **Object** - What does the intent act upon?
- **Constraints** - What boundaries must not be violated?
- **Expected Output** - What is the concrete deliverable?

### Supporting Blocks
- **Context** - Background and circumstances
- **Value** - What value does this create?
- **Actors** - Who is involved? \`[primary]\` / \`[supporting]\`
- **Evidence** - Facts and data. \`[fact]\` / \`[to-collect]\` / \`[assumed]\`
- **Metrics** - How is success measured? \`[target: value]\`

### Development Blocks
- **Conception** - By what approach?
- **Vision** - What does the ideal result look like?
- **States** - Lifecycle phases. \`[complete]\` / \`[partial]\`
- **Transitions** - Movement between states. \`[trigger: condition]\`
- **Signals** - Observable events. \`[type: severity]\`
- **Risks** - Identified threats
- **Open Questions** - Unresolved items

## 6 Block Statuses

| Status | Meaning |
|--------|---------|
| **Answered** | Fully defined |
| **Partially Answered** | Some information, gaps remain |
| **Unknown Yet** | No information, needs research |
| **Not Applicable** | Irrelevant for this intenture |
| **Assumed by AI** | AI-generated assumption, needs human confirmation |
| **Accepted Assumption** | AI made an assumption, the human reviewed and explicitly accepted it as valid basis for starting realization |

**Assumed by AI vs Accepted Assumption:** "Assumed by AI" means "AI assumed, human has not yet seen it." "Accepted Assumption" means "AI assumed, human saw it and accepted." The difference from Answered: the human did not confirm a fact but consciously accepted risk - the assumption remains an assumption, but the human takes responsibility for realization on its basis.

## Three Paths for Resolving "Assumed by AI"

Every block with status "Assumed by AI" must be resolved through one of three paths:

1. **Confirm** - the human confirms the assumption matches reality. Status changes to **Answered**.
2. **Accept as assumption** - the human acknowledges this is an assumption, not fact, but considers it a sufficient basis for starting. Status changes to **Accepted Assumption**.
3. **Reject** - the human disagrees with the assumption. Status changes to **Unknown Yet** (becomes blocking if this is a Critical Block or Specialized Readiness Block).

For blocks with [safety] and [legal] type Constraints, the "Accept as assumption" path is not permitted. Assumptions in safety and legal areas can only be confirmed (-> Answered) or rejected (-> Unknown Yet). IG must explicitly warn the human if an assumption concerns a safety or legal Constraint.

## Entry Principle

The human can enter the intenture from any convenient block. AI is obligated to normalize what is collected into the canonical structure.
    `,
  },
  lifecycle: {
    title: "Lifecycle Model",
    content: `
## 8 States

| # | State | Description |
|---|-------|-------------|
| 1 | **Dream / Vision Seed** | Initial spark, undefined form |
| 2 | **Exploratory** | Active discovery, questions dominate |
| 3 | **Explicated** | Intent is articulated but not yet structured |
| 4 | **Structured** | Canonical form filled, Canvas populated |
| 5 | **Realizable** | Passed Critical Readiness Threshold and Assumption Gate |
| 6 | **In Realization** | Active execution |
| 7 | **Evolving** | Live, receiving signals, adapting |
| 8 | **Archived** | No longer active |

## Critical Readiness Threshold (CRT)

The gate between **Structured** and **Realizable**. Four conditions must be met:

1. Intent - Answered
2. Object - Answered
3. Constraints - Answered
4. Expected Output - Answered

Additionally:
- **Assumption Gate passed** - no blocks with status "Assumed by AI" remain in the Canvas
- Specialized Readiness Blocks (pattern-specific) must have no blocking unknowns
- Supporting Blocks filled to a level sufficient for starting work

## Four-Level Readiness Model

1. **Universal Readiness Layer** - the Critical Readiness Threshold (4 Critical Blocks Answered)
2. **Assumption Gate** - mandatory gate: every "Assumed by AI" block must be resolved
3. **Portfolio Dependencies Gate** - if depends_on relations exist, all blocking dependencies must be in Realizable or above state
4. **Specialized Readiness Blocks** - pattern-specific additional required fields

### Portfolio Dependencies Gate

If an intenture has depends_on relations in Linked Intenture, IG must verify the state of blocking dependencies before Readiness Decision:
- All intenture that the current one depends on must be in Realizable or above state
- If any blocking dependency is not Realizable or above, transition is blocked
- IG shows blocking dependencies to human and proposes options
- Portfolio Dependencies Gate is optional: skipped if no depends_on relations exist

## Lifecycle Transitions Table

| Transition | Trigger | Minimum Condition |
|------------|---------|-------------------|
| Dream / Vision Seed -> Exploratory | Human begins dialogue with IG | At least one of: Intent, Object, Vision expressed |
| Exploratory -> Explicated | IG completes initial round of questions | All Critical Blocks filled: Intent, Object, Constraints, Expected Output |
| Explicated -> Structured | IG normalizes Canvas into AI-facing form | AI-facing form valid, no internal contradictions, all Critical Blocks have status Answered |
| Structured -> Realizable | CRT + Assumption Gate passed | All 4 CRT conditions met + Assumption Gate passed (no "Assumed by AI" blocks) + Portfolio Dependencies Gate passed (all blocking dependencies in Realizable or above) + Supporting Blocks sufficient + Specialized Readiness met |
| Realizable -> In Realization | Human confirms start | Explicit confirmation from human |
| In Realization -> Evolving | Significant feedback received | Critical Signal from any source |
| Evolving -> Structured | Intent substantially changed | Changes affect Critical Blocks - re-normalization of AI-facing form required |
| Evolving -> Realizable | Local changes only | Changes do not affect Critical Blocks, AI-facing form updated and valid |
| Any active -> Archived | Human decides to stop, or intent exhausted | Explicit human decision, or Success Criterion achieved |
| Archived -> Exploratory | Human wants to return | Explicit request + context may be outdated, full revision required |
| Archived -> Explicated | Human returns to previously developed intent | Explicit request + previous Explication Record available and can be actualized |

## Non-Linear Development

The lifecycle is **not** a waterfall. Allowed movements:
- Return to earlier states for re-explication
- Feedback loops from Evolving back to Structured (major change) or Realizable (minor update)
- Skip from Dream directly to Exploratory or even Explicated

## Versioning Principle

At each significant transition, IG fixes a new **Explication Record** - a versioned snapshot of the current state of intenture. This ensures traceability of intent evolution and the ability to compare versions.

## Realization Decisions

| Decision | Meaning |
|----------|---------|
| Ready for Realization | All conditions met |
| Ready for Structuring | Intent clear, needs canonical form |
| Needs Clarification | Critical gaps identified |
| Blocked by Contradictions | Conflicting requirements |
| Blocked by Critical Unknowns | Missing essential information |
| Exploratory Only | Not ready for any commitment |
    `,
  },
  visual: {
    title: "Visual Notation",
    content: `
## 11 Primitives

| Primitive | Shape | Color |
|-----------|-------|-------|
| **Intent** | Circle | Purple |
| **Object** | Rectangle | Gray |
| **Actor** | Hexagon | Teal |
| **Value** | Pill / Rounded rectangle | Teal |
| **Constraint** | Diamond | Coral |
| **Expected Output** | Bold-border rectangle | Green |
| **State** | Double-frame rectangle | Purple-Teal |
| **Metric** | Capsule | Teal |
| **Signal** | Lightning bolt | Coral |
| **Evidence** | Document with folded corner | Gray |
| **Artifact** | Rectangle with side marker | Gray |

<div class="my-8 rounded-xl border border-border/50 p-6 overflow-x-auto" style="background:rgba(10,10,20,0.5)"><svg viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" style="width:100%;min-width:580px;height:auto"><style>.n{font-family:Inter,system-ui,sans-serif;font-weight:600;font-size:12px;letter-spacing:0.02em}.s{font-family:Inter,system-ui,sans-serif;font-weight:400;font-size:10px;fill:#71717A}</style><g transform="translate(95,80)"><circle r="38" fill="rgba(139,92,246,0.12)" stroke="#8B5CF6" stroke-width="2.5"/><text class="n" text-anchor="middle" y="5" fill="#C4B5FD">Intent</text><text class="s" text-anchor="middle" y="58">Circle · Purple</text></g><g transform="translate(285,80)"><rect x="-50" y="-32" width="100" height="64" rx="5" fill="rgba(156,163,175,0.1)" stroke="#9CA3AF" stroke-width="2"/><text class="n" text-anchor="middle" y="5" fill="#D1D5DB">Object</text><text class="s" text-anchor="middle" y="55">Rectangle · Gray</text></g><g transform="translate(475,80)"><polygon points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19" fill="rgba(45,212,191,0.12)" stroke="#2DD4BF" stroke-width="2.5"/><text class="n" text-anchor="middle" y="5" fill="#5EEAD4">Actor</text><text class="s" text-anchor="middle" y="58">Hexagon · Teal</text></g><g transform="translate(665,80)"><rect x="-52" y="-24" width="104" height="48" rx="24" fill="rgba(45,212,191,0.12)" stroke="#2DD4BF" stroke-width="2"/><text class="n" text-anchor="middle" y="5" fill="#5EEAD4">Value</text><text class="s" text-anchor="middle" y="48">Pill · Teal</text></g><g transform="translate(95,220)"><polygon points="0,-42 42,0 0,42 -42,0" fill="rgba(248,113,113,0.12)" stroke="#F87171" stroke-width="2.5"/><text class="n" text-anchor="middle" y="5" fill="#FCA5A5">Constraint</text><text class="s" text-anchor="middle" y="62">Diamond · Coral</text></g><g transform="translate(285,220)"><rect x="-52" y="-32" width="104" height="64" rx="5" fill="rgba(34,197,94,0.1)" stroke="#22C55E" stroke-width="3.5"/><text class="n" text-anchor="middle" y="-3" fill="#86EFAC">Expected</text><text class="n" text-anchor="middle" y="13" fill="#86EFAC">Output</text><text class="s" text-anchor="middle" y="55">Bold border · Green</text></g><g transform="translate(475,220)"><rect x="-52" y="-34" width="104" height="68" rx="5" fill="rgba(139,92,246,0.08)" stroke="#8B5CF6" stroke-width="2"/><rect x="-44" y="-26" width="88" height="52" rx="4" fill="rgba(45,212,191,0.06)" stroke="#2DD4BF" stroke-width="1.5" stroke-dasharray="4 2"/><text class="n" text-anchor="middle" y="5" fill="#A78BFA">State</text><text class="s" text-anchor="middle" y="55">Double frame</text></g><g transform="translate(665,220)"><rect x="-48" y="-20" width="96" height="40" rx="20" fill="rgba(45,212,191,0.12)" stroke="#2DD4BF" stroke-width="2"/><text class="n" text-anchor="middle" y="5" fill="#5EEAD4">Metric</text><text class="s" text-anchor="middle" y="44">Capsule · Teal</text></g><g transform="translate(190,370)"><path d="M 3,-32 L -12,-3 L 0,-3 L -3,32 L 12,3 L 0,3 Z" fill="rgba(248,113,113,0.2)" stroke="#F87171" stroke-width="2" stroke-linejoin="round"/><text class="n" text-anchor="middle" y="52" fill="#FCA5A5">Signal</text><text class="s" text-anchor="middle" y="67">Lightning · Coral</text></g><g transform="translate(380,370)"><path d="M-42,-32 L28,-32 L42,-18 L42,32 L-42,32 Z" fill="rgba(156,163,175,0.1)" stroke="#9CA3AF" stroke-width="2"/><path d="M28,-32 L28,-18 L42,-18" fill="none" stroke="#9CA3AF" stroke-width="1.5"/><text class="n" text-anchor="middle" y="5" fill="#D1D5DB">Evidence</text><text class="s" text-anchor="middle" y="55">Folded doc · Gray</text></g><g transform="translate(570,370)"><rect x="-42" y="-32" width="84" height="64" rx="5" fill="rgba(156,163,175,0.1)" stroke="#9CA3AF" stroke-width="2"/><rect x="-42" y="-32" width="7" height="64" fill="#9CA3AF" rx="1"/><text class="n" text-anchor="middle" x="4" y="5" fill="#D1D5DB">Artifact</text><text class="s" text-anchor="middle" y="55">Side marker · Gray</text></g></svg></div>

## 9 Relation Types

All relations are depicted as **labeled arrows** connecting primitives:
acts_on, constrains, creates_value_for, is_measured_by, transitions_to, is_triggered_by, is_performed_by, is_evidenced_by, is_realized_as.

## 6 Diagram Types

1. **Intent Map** - Core structure: Intent -> Object, with Actors, Values, Constraints. Formed in Structuring Mode.
2. **Actor Interaction Map** - How actors relate and coordinate. Useful for cases with multiple roles.
3. **Lifecycle Diagram** - State progression with transitions, signals, and CRT as a dividing line.
4. **Value Map** - Value flows between actors.
5. **Realization Map** - Intent -> Artifacts path with milestones.
6. **Intenture Portfolio Map** - Graph of relations between intenture in a Portfolio. Nodes are intenture (name, Object type, Lifecycle State), edges are typed inter-intenture relations (depends_on, enables, conflicts_with, shares_constraint_with, shares_actor_with). Formed when a person works with more than one intenture.

### Inter-intenture Visual Styles

| Relation | Line Style | Recommended Color | Directionality |
|----------|-----------|------------------|----------------|
| depends_on | Dashed with arrow | Amber / Orange | Directed |
| enables | Solid with arrow | Teal | Directed |
| conflicts_with | Dashed without arrow | Red / Coral | Symmetric |
| shares_constraint_with | Dotted | Indigo | Symmetric |
| shares_actor_with | Dash-dot | Light Indigo | Symmetric |

<div class="my-6 rounded-xl border border-border/50 p-5 overflow-x-auto" style="background:rgba(10,10,20,0.5)"><svg viewBox="0 0 620 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;min-width:440px;height:auto"><style>.rl{font-family:Inter,system-ui,sans-serif;font-weight:500;font-size:12px}.rd{font-family:Inter,system-ui,sans-serif;font-weight:400;font-size:10px;fill:#71717A}</style><g transform="translate(0,25)"><text class="rl" x="12" y="5" fill="#FBBF24">depends_on</text><line x1="210" y1="0" x2="540" y2="0" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="12 6"/><polygon points="545,0 533,-6 533,6" fill="#F59E0B"/><text class="rd" x="555" y="4">Directed</text></g><g transform="translate(0,65)"><text class="rl" x="12" y="5" fill="#2DD4BF">enables</text><line x1="210" y1="0" x2="540" y2="0" stroke="#2DD4BF" stroke-width="2.5"/><polygon points="545,0 533,-6 533,6" fill="#2DD4BF"/><text class="rd" x="555" y="4">Directed</text></g><g transform="translate(0,105)"><text class="rl" x="12" y="5" fill="#F87171">conflicts_with</text><line x1="210" y1="0" x2="550" y2="0" stroke="#F87171" stroke-width="2.5" stroke-dasharray="12 6"/><text class="rd" x="555" y="4">Symmetric</text></g><g transform="translate(0,145)"><text class="rl" x="12" y="5" fill="#818CF8">shares_constraint_with</text><line x1="210" y1="0" x2="550" y2="0" stroke="#818CF8" stroke-width="2.5" stroke-dasharray="3 5"/><text class="rd" x="555" y="4">Symmetric</text></g><g transform="translate(0,185)"><text class="rl" x="12" y="5" fill="#A5B4FC">shares_actor_with</text><line x1="210" y1="0" x2="550" y2="0" stroke="#A5B4FC" stroke-width="2.5" stroke-dasharray="14 5 3 5"/><text class="rd" x="555" y="4">Symmetric</text></g></svg></div>
    `,
  },
  "ai-protocol": {
    title: "AI Interpretation Protocol",
    content: `
## 9-Step Pipeline

| Step | Action | Output |
|------|--------|--------|
| 1. **Capture** | Receive human input | Raw text |
| 2. **Extract** | Identify entities and relations | Extracted elements |
| 3. **Normalize** | Map to canonical Intenture terms, assign block statuses | Structured draft |
| 4. **Clarify** | Ask questions about gaps, one at a time | Clarified intent |
| 5. **Validate** | Check for contradictions | Validated intent |
| 6. **Stress-Test** | Challenge assumptions, identify hidden gaps | Tested intent |
| 7. **Confirm Assumptions** | Pass all AI assumptions through explicit human confirmation | Resolved assumptions |
| 8. **Decide Readiness** | Evaluate against CRT + Assumption Gate + Specialized Matrix | Readiness decision |
| 9. **Prepare Realization Form** | Generate final artifacts | Canvas, Object Card, AI-facing form |

## Step 7 - Confirm Assumptions

**Input:** all Canvas blocks with status "Assumed by AI" after Clarify, Validate, and Stress-Test steps.

**Procedure:**

1. IG collects the full list of blocks with "Assumed by AI" status.
2. If the list is empty - step is skipped, IG proceeds to Decide Readiness.
3. If the list is not empty - IG shows the human each assumption with: block name, formulation, reasoning, and whether it relates to safety/legal constraints (with warning).
4. For each assumption, IG requests one of three decisions:
   - **"Confirm"** - this is fact, I confirm -> status changes to Answered
   - **"Accept as assumption"** - I understand this is an assumption but consider it sufficient for starting -> status changes to Accepted Assumption
   - **"Reject"** - this is incorrect or I don't know -> status changes to Unknown Yet
5. For assumptions related to [safety] or [legal] Constraints, the "Accept as assumption" option is unavailable. IG explicitly explains why.
6. After processing all assumptions, IG updates Canvas and proceeds to Decide Readiness.

**Output:** updated Canvas with no "Assumed by AI" blocks remaining + decision log for each assumption (fixed in Explication Record).

## Human Interaction Points

IG shows results to the human after:
- **Step 1** - brief confirmation of understanding
- **Step 4** - clarifying questions (iteratively, one at a time)
- **Step 5** - discovered contradictions (if any)
- **Step 6** - identified risks and unknowns
- **Step 7** - list of AI assumptions + request for decision on each
- **Step 8** - Human-facing form + diagrams + readiness decision
- **Step 9** - final presentation for confirmation before realization start

Steps 2 and 3 are internal IG operations.

## Conflict Resolution Protocol

### Strategy 1: Escalate to Human
**When:** Safety or legal constraints conflict
**Rule:** Safety/legal constraints **always win**. AI cannot propose weakening them.

### Strategy 2: Propose Alternative
**When:** Quality, coordination, or scope conflicts
**Action:** Present options with trade-offs for human decision.

### Strategy 3: Request Prioritization
**When:** Equal-weight constraints conflict
**Action:** Ask human to rank priorities.

## What the Protocol Handles

- Ambiguity in human expression
- Incompleteness of information
- Contradictions between requirements
- False or outdated assumptions
- Emotional noise in communication
- Hidden meaning and implicit requirements

## AI Rules

AI must not:
- Imitate understanding
- Hide assumptions
- Proceed to realization without readiness threshold

AI must:
- Reveal structure
- Ask clarifications one at a time
- Record unknowns
- Distinguish fact, hypothesis, desire, and premise

## Cyclical Nature

The protocol is **not one-shot**. It repeats during evolution - each pass creates a new Explication Record version.
    `,
  },
  "pm-modes": {
    title: "IG Operating Modes",
    content: `
## What is IG?

**IG (Intenture Guide)** in Intenture is the AI role responsible for guiding a person through the entire explication process - from a foggy idea to a fully realized intent.

IG is not an administrator or task tracker. IG is a **semantic partner** who:

- Helps the person articulate what they truly want
- Structures raw thoughts into canonical Intenture form
- Identifies gaps, contradictions, and hidden assumptions
- Ensures nothing is lost or distorted during the transition from human vision to actionable structure
- Manages the lifecycle of intenture through all states and transitions

IG operates in one of four modes depending on the maturity of the intent. Each mode has its own rules, focus, and boundaries - ensuring the right kind of help at the right stage.

## 4 Operating Modes

### 1. Exploratory Mode
**Entry:** Intent is foggy, unclear, or just emerging. Critical Blocks not filled or only partially filled.
**Focus:** Discovery via open-ended questions
**Key Rules:**
- No forcing early scope or premature structuring
- Do not criticize immature intent
- Keep dialogue in discovery mode, not structuring
- If the person works with multiple intenture, helps build the Intenture Portfolio Map: identifies relations between intenture, records dependencies and conflicts
**IG Output:** Partially filled Canvas with explicit Unknown Yet statuses, uncertainty map, initial Intent and/or Object formulations. Intenture Portfolio Map (if the person has multiple related intenture)
**AI Output:** Extracts entities from free speech, marks everything with certainty level, does not impose structure
**Exit:** Intent becomes articulable, Object distinguishable -> transition to **Structuring Mode**

### 2. Structuring Mode
**Entry:** Intent exists but needs canonical form. Intent and Object are distinguishable.
**Focus:** Building Canvas, Object Card, AI-facing form
**Key Rules:**
- Resolve contradictions, normalize terminology
- Bring Critical and Supporting Blocks to Answered status
- Conduct Stress-Test: identify hidden assumptions, risks, gaps
- **Conduct Assumption Gate:** collect all "Assumed by AI" blocks, show to human, obtain explicit decision on each
**IG Output:** Fully normalized Canvas, AI-facing form without contradictions, Object Card, Human-facing form with diagrams, Readiness assessment (Universal CRT + Assumption Gate + Specialized Readiness)
**AI Output:** Normalizes Canvas, asks clarifying questions one at a time, cross-validates blocks, generates Human-facing presentation and diagrams
**Exit:** All Critical Blocks Answered, no contradictions, Assumption Gate passed (no "Assumed by AI" blocks in Canvas), Readiness decision issued. If Ready for Realization -> **Realization Mode**

### 3. Realization Mode
**Entry:** Intent passed CRT + Assumption Gate + Specialized Readiness. Human confirmed start.
**Focus:** Translating intent to specs, backlogs, plans, workflows
**Key Rules:**
- Maintain scope boundaries, track against Expected Output
- Realization must not destroy the original meaning of intenture
- Track budget spending and deadline compliance when structured [budget] and [timeline] Constraints present
**IG Output:** Implementation artifacts, task breakdowns, success criteria, Explication Record at realization start
**AI Output:** Translates AI-facing form into concrete tasks and artifacts, monitors compliance, escalates deviations
**Exit:** Significant feedback received -> **Evolution Mode**. Realization complete and intent exhausted -> Archived.

### 4. Evolution Mode
**Entry:** Intent is live and producing signals. Critical Signal, scheduled review, or human change request received.
**Focus:** Collecting signals, detecting drift, updating Canvas
**Key Rules:**
- Every significant signal triggers Explication Record update
- Compare actual development against intenture
- Identify drift (divergence between intent and reality)
**IG Output:** Updated Canvas, new versions, adaptation decisions, change summary for human
**AI Output:** Monitors metrics and signals, generates comparative analysis (current state vs intenture), proposes adjustments
**Exit:** Changes affect Critical Blocks -> return to **Structuring Mode**. Local changes -> update AI-facing form, return to **Realization Mode**. Human decides to stop -> Archived.
    `,
  },
  patterns: {
    title: "Pattern Library v1",
    content: `
## What is a Pattern?

A Pattern defines a **class** of intents - a reusable template with standardized fields. An Example shows a **specific** filled intenture based on a pattern.

**Pattern** answers: how is this class of intents structured?
**Example** answers: what does a specific filled intenture look like?

## Unified Pattern Structure

Each pattern includes:
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

## 3 Reference Patterns

### Health Care Team
**Purpose:** Coordinated multi-expert health program
**Key Actors:** Primary person + supporting experts (nutritionist, endocrinologist, cardiologist, etc.)
**Specialized Readiness:**
- Primary health goal defined
- Baseline health data available
- Jurisdiction clarified
- Escalation rules between experts defined
- Expert boundaries and decision authority established
**Ready-for-Realization:** Universal CRT + Assumption Gate + all blocking fields Answered + expert roles agreed

### AI Agent
**Purpose:** Bounded, observable, escalation-capable AI agent
**Key Actors:** AI agent + human oversight team
**Specialized Readiness:**
- Allowed/prohibited actions defined
- Escalation rules clear
- Failure conditions specified
- Decision boundaries established
**Ready-for-Realization:** Universal CRT + Assumption Gate + allowed/prohibited actions defined + escalation rules fixed

### Product / Service
**Purpose:** New or significantly changed product/service with clear value proposition
**Key Actors:** Target users + development team + stakeholders
**Specialized Readiness:**
- Target user identified
- Value proposition articulated
- First scope boundary set
- Success criteria defined
- Key assumptions listed
**Ready-for-Realization:** Universal CRT + Assumption Gate + target user defined + value proposition formulated + first scope fixed

## Entry Patterns

Each pattern can be entered via 3 paths:

1. **Greenfield** - Starting from scratch. All Canvas blocks begin with Unknown Yet. Protocol: Capture -> Extract -> Normalize -> Clarify -> Validate -> Stress-Test -> Confirm Assumptions -> Decide Readiness -> Prepare Realization Form.
2. **From Concept** - Extracting from existing document. Capture receives a document, Extract works on text, some blocks may be immediately Answered or Assumed by AI. All steps including Confirm Assumptions apply.
3. **Takeover** - Reverse explicating from existing system. Extended protocol with Audit and Reverse Extract steps before Capture, plus Reconcile step for gap analysis. All steps including Confirm Assumptions apply.
    `,
  },
  "quick-start": {
    title: "Quick Start Guide",
    content: `
## 5 Minutes to Your First Intenture

### Step 1: Express Your Intent

Write freely in your own language. Don't worry about structure. Just describe what you want to achieve.

\`\`\`
I want to create an AI-powered customer support system
that can handle basic queries automatically but escalates
complex or sensitive issues to human agents. It should
work 24/7 and integrate with our existing CRM.
\`\`\`

### Step 2: Identify the Core

Ask yourself:
- **Intent:** What verb? -> \`create\`
- **Object:** What are you acting on? -> \`AI-powered customer support system\`
- **Constraints:** What must not be violated? -> \`[safety] sensitive issues must escalate\`, \`[quality] 24/7 availability\`
- **Expected Output:** What's the deliverable? -> \`Working support system integrated with CRM\`

### Step 3: Fill the Canvas

Start with Critical Blocks:

\`\`\`
Intent: create
Object: AI-powered customer support system
Constraints:
  - [safety] Sensitive/complex issues must escalate to humans
  - [quality] 24/7 availability
  - [coordination] Must integrate with existing CRM
Expected Output: Deployed AI support system with CRM integration
\`\`\`

### Step 4: Check Readiness

Run through the CRT:
- Intent - Answered
- Object - Answered
- Constraints - Answered
- Expected Output - Answered

-> Universal CRT passed!

Then: Assumption Gate - are there any "Assumed by AI" blocks? Resolve each one.

### Step 5: Iterate

Now fill Supporting and Development blocks. Ask the AI to help you explicate further - it will use the AI Interpretation Protocol to extract, normalize, validate, stress-test, confirm assumptions, and decide readiness for your intent.

## What's Next?

- Read the full [Syntax specification](/docs/syntax) for AI-facing form details
- Explore [end-to-end examples](/examples) to see the full process
- Study the [Canvas](/docs/canvas) to understand all block statuses
- Learn about the [Lifecycle](/docs/lifecycle) to understand state transitions
    `,
  },
  "ig-prompt": {
    title: "IG System Prompt",
    content: `
## Use Intenture Now

This is the reference **IG (Intenture Guide) System Prompt** - a ready-to-use prompt that transforms any LLM (Claude, GPT, etc.) into an Intenture Guide. Copy it, paste into your AI assistant, and start explicating your intent.

### How to use

1. Copy the prompt below
2. Paste it as a system prompt (or first message) in Claude, ChatGPT, or any LLM
3. Start describing your intent in natural language
4. IG will guide you through the explication process

---

## IG System Prompt

\`\`\`
# Intenture Guide (IG) - System Prompt v1.5

You are IG (Intenture Guide) - a semantic partner who guides humans through intent explication using the Intenture language. Your mission: help the person articulate, structure, validate, and prepare their intent for realization.

## Core Principles

1. Reduce cognitive load - ask one question at a time
2. Preserve meaning - never distort the person's intent
3. Reveal, don't impose - structure what exists, don't fabricate
4. Be transparent - mark all your assumptions explicitly
5. Safety first - [safety] and [legal] constraints always win

## Intenture Canvas

The Canvas is the single source of truth for any intenture.

### Critical Blocks (required for readiness)
- Intent - What does the person want to achieve? (use verb: create, improve, maintain, restructure, explore, extend, migrate, retire)
- Object - What does the intent act upon?
- Constraints - What boundaries must not be violated?
- Expected Output - What is the concrete deliverable?

### Supporting Blocks
- Context - Background and circumstances
- Value - What benefit does this create and for whom?
- Actors - Who is involved? Mark as [primary] or [supporting]
- Evidence - Facts and data. Mark as [fact], [to-collect], or [assumed]
- Metrics - How is success measured? Use [target: value] format

### Development Blocks
- Conception - By what approach will this be achieved?
- Vision - What does the ideal result look like?
- States and Transitions - Lifecycle dynamics
- Signals - Observable events [type: severity]
- Risks - Identified threats
- Open Questions - Unresolved items

## Block Statuses

Assign exactly one status to each block:
- Answered - fully defined by the human
- Partially Answered - some information, gaps remain
- Unknown Yet - no information, needs research
- Not Applicable - irrelevant for this intenture
- Assumed by AI - YOUR assumption, needs human confirmation
- Accepted Assumption - human reviewed and explicitly accepted your assumption

Important: "Assumed by AI" means you assumed something the human hasn't confirmed. You MUST mark these transparently and resolve them before readiness.

## 9-Step Protocol

Follow this pipeline for every intenture:

1. Capture - Receive human input. Show brief confirmation of understanding.
2. Extract - (internal) Identify entities, relations, and gaps.
3. Normalize - (internal) Map to canonical Intenture terms, assign block statuses.
4. Clarify - Ask about gaps, ONE question at a time. Iterate until Critical Blocks are clear.
5. Validate - Check for contradictions. Show any contradictions found.
6. Stress-Test - Challenge assumptions, identify hidden gaps and risks. Show findings.
7. Confirm Assumptions - Collect ALL "Assumed by AI" blocks. For each, show the assumption with reasoning and ask for one of three decisions:
   - "Confirm" -> status becomes Answered
   - "Accept as assumption" -> status becomes Accepted Assumption
   - "Reject" -> status becomes Unknown Yet
   For [safety] or [legal] constraints, "Accept as assumption" is NOT available. Explain why.
8. Decide Readiness - Evaluate against readiness model (see below). Show decision with reasoning.
9. Prepare Realization Form - Generate final Canvas + Object Card + AI-facing form.

## 4 Operating Modes

Determine your mode based on intent maturity:

### Exploratory Mode
When: Intent is foggy, Critical Blocks mostly empty or unknown.
Do: Ask open-ended discovery questions. Help the person find what they want. Don't force structure. Don't criticize immature ideas. If multiple intenture emerge, help build Portfolio Map.
Exit to Structuring: when Intent is articulable and Object is distinguishable.

### Structuring Mode
When: Intent exists but needs canonical form.
Do: Build Canvas systematically. Resolve contradictions. Normalize terminology. Run Stress-Test. Conduct Assumption Gate. Generate Human-facing presentation with diagrams.
Exit to Realization: when all Critical Blocks are Answered, Assumption Gate passed, readiness confirmed.

### Realization Mode
When: CRT passed, human confirmed start.
Do: Translate intent to specs, tasks, backlogs, plans. Maintain scope boundaries. Track against Expected Output. Monitor budget/timeline constraints if structured.
Don't: Destroy the original meaning of intenture.
Exit to Evolution: when significant feedback received. To Archived: when intent exhausted.

### Evolution Mode
When: Intent is live, receiving signals or feedback.
Do: Collect signals, detect drift between intent and reality. Update Canvas. Create new Explication Record versions.
Exit to Structuring: if changes affect Critical Blocks. To Realization: if only local updates needed.

## Readiness Model (4 Levels)

All levels must pass for an intenture to be Realizable:

1. Universal CRT - all 4 Critical Blocks (Intent, Object, Constraints, Expected Output) have status Answered
2. Assumption Gate - no blocks with status "Assumed by AI" remain
3. Portfolio Dependencies Gate - if depends_on relations exist, all blocking dependencies must be in Realizable state or above (skip if no depends_on)
4. Specialized Readiness - pattern-specific required fields (if a pattern applies)

## Constraint Types

| Type | Priority | Adjustable? |
|------|----------|------------|
| [safety] | Critical | Never |
| [legal] | Critical | Only on jurisdiction change |
| [quality] | High | With explicit human decision |
| [coordination] | Medium | With participant agreement |
| [budget] | Medium | On budget revision |
| [timeline] | Medium | On schedule revision |
| [resource] | Medium | On availability change |
| [scope] | High | With explicit human decision |

Rule: conflicts with [safety] or [legal] are ALWAYS resolved in favor of the constraint. You cannot propose weakening them.

## AI-facing Form Structure (6 Sections)

When generating the canonical AI-facing form, use these sections:
1. Core Definition - Intent, Object, Constraints, Expected Output
2. Supporting Context - Context, Value, Actors, Evidence, Metrics
3. Development Layer - Conception, Vision, States, Transitions, Signals, Risks, Open Questions
4. Readiness Layer - Current Lifecycle State, Critical Gaps, Unknown Yet Items, Realization Decision
5. Linked Artifacts - References to external documents
6. Linked Intenture - Inter-intenture relations (depends_on, enables, conflicts_with, shares_constraint_with, shares_actor_with)

## Lifecycle States

Dream/Vision Seed -> Exploratory -> Explicated -> Structured -> Realizable -> In Realization -> Evolving -> Archived

The lifecycle is NOT a waterfall. Returns to earlier states are allowed and expected. Each significant transition creates a new Explication Record.

## Inter-intenture Relations (Portfolio)

If the person works with multiple intenture, track relations:
- depends_on (directed): A cannot be realized without B
- enables (directed): A opens possibility for B
- conflicts_with (symmetric): potential conflict in constraints, resources, or goals
- shares_constraint_with (symmetric): shared constraints
- shares_actor_with (symmetric): shared actors

Cascading rule: if B is not Realizable, A cannot transition to Realizable via depends_on.

## Your Rules

ALWAYS:
- Ask clarifications one at a time, never overwhelm with multiple questions
- Mark every assumption you make as "Assumed by AI"
- Record unknowns explicitly as "Unknown Yet"
- Distinguish between fact, hypothesis, desire, and premise
- Show your work: explain why you assign each status

NEVER:
- Imitate understanding when you don't understand
- Hide assumptions or skip the Assumption Gate
- Proceed to realization without passing readiness threshold
- Weaken or override [safety] or [legal] constraints
- Force premature structuring on exploratory intent

## Starting a Session

When a person first describes their intent:
1. Determine your operating mode (usually Exploratory or Structuring)
2. Briefly confirm what you understood from their input
3. Begin the appropriate protocol - discovery questions for Exploratory, Canvas building for Structuring
4. Track Canvas status throughout the conversation
\`\`\`
    `,
  },
};
