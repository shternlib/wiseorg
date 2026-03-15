export const docsEn: Record<string, { title: string; content: string }> = {
  overview: {
    title: "What is Intenture?",
    content: `
## Canonical Definition

**Intenture** (capitalized) is a formal semantic linguo-graphical language for intent explication — designed for precise human-AI interaction in creating, analyzing, developing, and realizing intent (zamysel).

**intenture** (lowercase) is the phenomenon of intent itself — the inner pre-realized shape of creation: an integral unity of intent, conception, vision, and the will to embody them.

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

1. **Human-facing form** — natural, semi-structured, visual. Written in the human's language.
2. **AI-facing form** — canonical, unambiguous, normalizable. Uses Intenture terms in English regardless of document language.

The 15 canonical terms (Intent, Object, Constraint, Value, Actor, etc.) are always preserved in English.
    `,
  },
  glossary: {
    title: "Glossary v1.2",
    content: `
## Core Terms

| Term | Definition |
|------|-----------|
| **Intenture** | The name of the language |
| **intenture** | The phenomenon of intent — the inner pre-realized shape of creation |
| **Explication** | The process of making an intenture explicit, structured, and interpretable |
| **Reverse Explication** | Recovering intent from an existing implementation |
| **Explication Record** | A versioned artifact produced by explication |

## Level Distinctions

| Term | Definition |
|------|-----------|
| **Idea** | A local fragment of intenture |
| **Intent** | Directional will — "what do I want to achieve?" |
| **Conception** | Answers "by what approach?" |
| **Vision** | Answers "what does the ideal result look like?" |
| **Will to Embodiment** | The readiness and commitment to realize |

## Language Objects

| Term | Definition |
|------|-----------|
| **Object** | What the intent acts upon |
| **Actor** | Who performs or is affected (primary / supporting) |
| **Artifact** | A tangible output produced during realization |
| **Constraint** | A boundary that must not be violated |
| **Value** | What the intenture creates for its actors |
| **Metric** | How value or progress is measured |
| **State** | A lifecycle phase of the intenture |
| **Transition** | Movement between states, triggered by conditions |
| **Signal** | An observable event requiring attention |
| **Evidence** | Facts or data supporting the intenture |
| **Expected Output** | The concrete deliverable of realization |
    `,
  },
  "meta-model": {
    title: "Meta-Model v1.2",
    content: `
## 17 Core Entities

intenture, Intent, Object, Conception, Vision, Will to Embodiment, Actor, Artifact, Constraint, Value, Metric, State, Transition, Signal, Evidence, Expected Output, Explication Record.

## 17 Core Relations

expresses, explicates, acts_on, shapes, constrains, creates_value_for, informs, is_evidenced_by, is_measured_by, transitions_to, is_triggered_by, is_realized_as, is_performed_by, produces, targets, results_in, records.

## 11 Semantic Formulas

| # | Formula |
|---|---------|
| 1 | Intent **acts_on** Object |
| 2 | intenture **is_constrained_by** Constraint |
| 3 | Value **is_measured_by** Metric |
| 4 | State **transitions_to** State |
| 5 | Transition **is_triggered_by** Signal |
| 6 | Intent **is_evidenced_by** Evidence |
| 7 | Actor **is_performed_by** Intent |
| 8 | Intent **is_realized_as** Artifact |
| 9 | intenture **creates_value_for** Actor |
| 10 | Conception **shapes** intenture |
| 11 | Explication Record **records** intenture |

## Minimum Unit

At least **one entity + one semantically valid relation** constitutes a minimal Intenture expression.
    `,
  },
  syntax: {
    title: "Syntax v0.2",
    content: `
## Dual-Layer Architecture

### Human-Facing Form
Natural, semi-structured text. Written in the human's own language. Free-form but follows recommended patterns.

### AI-Facing Form
Canonical, unambiguous structure with 5 sections:

1. **Core Definition** — Intent, Object, Constraints, Expected Output
2. **Supporting Context** — Context, Value, Actors, Evidence, Metrics
3. **Development Layer** — Conception, Vision, States, Transitions, Signals, Risks, Open Questions
4. **Readiness Layer** — Current Lifecycle State, Critical Gaps, Unknown Yet Items, Realization Decision
5. **Linked Artifacts** — References to external documents

## Intent Vocabulary (8 Verbs)

| Verb | Implied Strategy |
|------|-----------------|
| **create** | Build from scratch |
| **improve** | Enhance existing |
| **maintain** | Keep operational |
| **restructure** | Change architecture |
| **explore** | Research / discover |
| **extend** | Add capabilities |
| **migrate** | Move between platforms |
| **retire** | Phase out gracefully |

## Constraint Types (7 Types)

| Type | Priority | Adjustable? |
|------|----------|------------|
| \`[safety]\` | Critical | Never |
| \`[legal]\` | Critical | Never |
| \`[quality]\` | High | With justification |
| \`[coordination]\` | Medium | Negotiable |
| \`[budget]\` | Medium | Negotiable |
| \`[timeline]\` | Medium | Negotiable |
| \`[scope]\` | High | With justification |

## Evidence Markers

- \`[fact]\` — Verified information
- \`[to-collect]\` — Needs to be gathered
- \`[assumed]\` — AI or human assumption, needs confirmation

## Signal Format

\`\`\`
Signal: [type: severity] — description
  type = operational | quality | safety | feedback
  severity = info | warning | critical
\`\`\`
    `,
  },
  canvas: {
    title: "Intenture Canvas v1.1",
    content: `
## Single Source of Truth

The Canvas is the authoritative representation of an intenture. All other forms (Object Card, AI-facing form) derive from it.

## Three Block Classes

### Critical Blocks (Must be answered for CRT)
- **Intent** — What do you want to achieve?
- **Object** — What does the intent act upon?
- **Constraints** — What boundaries must not be violated?
- **Expected Output** — What is the concrete deliverable?

### Supporting Blocks
- **Context** — Background and circumstances
- **Value** — What value does this create?
- **Actors** — Who is involved? \`[primary]\` / \`[supporting]\`
- **Evidence** — Facts and data. \`[fact]\` / \`[to-collect]\` / \`[assumed]\`
- **Metrics** — How is success measured? \`[target: value]\`

### Development Blocks
- **Conception** — By what approach?
- **Vision** — What does the ideal result look like?
- **States** — Lifecycle phases. \`[complete]\` / \`[partial]\`
- **Transitions** — Movement between states. \`[trigger: condition]\`
- **Signals** — Observable events. \`[type: severity]\`
- **Risks** — Identified threats
- **Open Questions** — Unresolved items

## Block Statuses

| Status | Meaning |
|--------|---------|
| **Answered** | Fully defined |
| **Partially Answered** | Some information, gaps remain |
| **Unknown Yet** | No information, needs research |
| **Not Applicable** | Irrelevant for this intenture |
| **Assumed by AI** | AI-generated, needs human confirmation |
    `,
  },
  lifecycle: {
    title: "Lifecycle Model v1.1",
    content: `
## 8 States

| # | State | Description |
|---|-------|-------------|
| 1 | **Dream / Vision Seed** | Initial spark, undefined form |
| 2 | **Exploratory** | Active discovery, questions dominate |
| 3 | **Explicated** | Intent is articulated but not yet structured |
| 4 | **Structured** | Canonical form filled, Canvas populated |
| 5 | **Realizable** | Passed Critical Readiness Threshold |
| 6 | **In Realization** | Active execution |
| 7 | **Evolving** | Live, receiving signals, adapting |
| 8 | **Archived** | No longer active |

## Critical Readiness Threshold (CRT)

The gate between **Structured** and **Realizable**. Four conditions must be met:

1. ✅ Intent — Answered
2. ✅ Object — Answered
3. ✅ Constraints — Answered
4. ✅ Expected Output — Answered

Additionally, Specialized Readiness blocks (pattern-specific) must have no blocking unknowns.

## Non-Linear Development

The lifecycle is **not** a waterfall. Allowed movements:
- Return to earlier states for re-explication
- Feedback loops from Evolving back to Structured (major change) or Realizable (minor update)
- Skip from Dream directly to Exploratory or even Explicated

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
    title: "Visual Notation v1.0",
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

## 9 Relation Types

All relations are depicted as **labeled arrows** connecting primitives:
acts_on, constrains, creates_value_for, is_measured_by, transitions_to, is_triggered_by, is_performed_by, is_evidenced_by, is_realized_as.

## 5 Diagram Types

1. **Intent Map** — Core structure: Intent → Object, with Actors, Values, Constraints
2. **Actor Interaction Map** — How actors relate and coordinate
3. **Lifecycle Diagram** — State progression with transitions and signals
4. **Value Map** — Value flows between actors
5. **Realization Map** — Intent → Artifacts path with milestones
    `,
  },
  "ai-protocol": {
    title: "AI Interpretation Protocol v1.2",
    content: `
## 8-Step Pipeline

| Step | Action | Output |
|------|--------|--------|
| 1. **Capture** | Receive human input | Raw text |
| 2. **Extract** | Identify entities and relations | Extracted elements |
| 3. **Normalize** | Map to canonical Intenture terms | Structured draft |
| 4. **Clarify** | Ask questions about gaps | Clarified intent |
| 5. **Validate** | Check for contradictions | Validated intent |
| 6. **Stress-Test** | Challenge assumptions | Tested intent |
| 7. **Decide Readiness** | Evaluate against CRT | Readiness decision |
| 8. **Prepare Realization Form** | Generate final artifacts | Canvas, Object Card, AI-facing form |

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

## Cyclical Nature

The protocol is **not one-shot**. It repeats during evolution — each pass creates a new Explication Record version.
    `,
  },
  "pm-modes": {
    title: "PM Operating Modes",
    content: `
## 4 Operating Modes

### 1. Exploratory Mode
**Entry:** Intent is foggy, unclear, or just emerging
**Focus:** Discovery via open-ended questions
**Key Rule:** No forcing early scope or premature structuring
**Output:** Clarified intent direction, initial entity identification
**Exit:** Intent becomes articulable

### 2. Structuring Mode
**Entry:** Intent exists but needs canonical form
**Focus:** Building Canvas, Object Card, AI-facing form
**Key Rule:** Resolve contradictions, normalize terminology
**Output:** Populated Canvas, structured AI-facing form
**Exit:** All Critical Blocks answered, contradictions resolved

### 3. Realization Mode
**Entry:** Intent passed CRT (Critical Readiness Threshold)
**Focus:** Translating intent to specs, backlogs, plans, workflows
**Key Rule:** Maintain scope boundaries, track against Expected Output
**Output:** Implementation artifacts, task breakdowns, success criteria
**Exit:** Realization complete or intent transitions to Evolution

### 4. Evolution Mode
**Entry:** Intent is live and producing signals
**Focus:** Collecting signals, detecting drift, updating Canvas
**Key Rule:** Every significant signal triggers Explication Record update
**Output:** Updated Canvas, new versions, adaptation decisions
**Exit:** Intent archived or major restructuring triggers return to Structuring
    `,
  },
  patterns: {
    title: "Pattern Library v1",
    content: `
## What is a Pattern?

A Pattern defines a **class** of intents — a reusable template with standardized fields. An Example shows a **specific** filled intenture based on a pattern.

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

### AI Agent
**Purpose:** Bounded, observable, escalation-capable AI agent
**Key Actors:** AI agent + human oversight team
**Specialized Readiness:**
- Allowed/prohibited actions defined
- Escalation rules clear
- Failure conditions specified
- Decision boundaries established

### Product / Service
**Purpose:** New or significantly changed product/service with clear value proposition
**Key Actors:** Target users + development team + stakeholders
**Specialized Readiness:**
- Target user identified
- Value proposition articulated
- First scope boundary set
- Success criteria defined
- Key assumptions listed

## Entry Patterns

Each pattern can be entered via 3 paths:

1. **Greenfield** — Starting from scratch
2. **From Concept** — Extracting from existing document
3. **Takeover** — Reverse explicating from existing system
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
- **Intent:** What verb? → \`create\`
- **Object:** What are you acting on? → \`AI-powered customer support system\`
- **Constraints:** What must not be violated? → \`[safety] sensitive issues must escalate\`, \`[quality] 24/7 availability\`
- **Expected Output:** What's the deliverable? → \`Working support system integrated with CRM\`

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
- ✅ Intent — Answered
- ✅ Object — Answered
- ✅ Constraints — Answered
- ✅ Expected Output — Answered

→ Universal CRT passed!

### Step 5: Iterate

Now fill Supporting and Development blocks. Ask the AI to help you explicate further — it will use the AI Interpretation Protocol to extract, normalize, and validate your intent.

## What's Next?

- Read the full [Syntax specification](/docs/syntax) for AI-facing form details
- Explore [end-to-end examples](/examples) to see the full process
- Study the [Canvas](/docs/canvas) to understand all 15 blocks
- Learn about the [Lifecycle](/docs/lifecycle) to understand state transitions
    `,
  },
};
