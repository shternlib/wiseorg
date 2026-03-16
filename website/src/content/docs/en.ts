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

The 15 canonical terms (Intent, Object, Constraint, Value, Actor, etc.) are always preserved in English.
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
| **Explication** | The process of revealing, clarifying, and structurally unfolding the implicit content of intent, translating a hidden or partially expressed inner structure into an explicit, distinguishable, and structured form. Explication is what PM performs in dialogue with the human. |
| **Reverse Explication** | The process of recovering intenture from an existing implementation. The reverse path: from realization to intent. |
| **Explication Record** | A versioned artifact produced by explication - a fixed result of the Explication process that can be stored, compared, and versioned |
| **Explication of intenture** | Revealing, clarifying, and structurally unfolding intent into a form suitable for precise AI interpretation and subsequent realization |
| **Assumption Gate** | A mandatory control gate in the AI Interpretation Protocol that prohibits an intenture from transitioning to Realizable when unconfirmed AI assumptions exist. PM must pass each assumption through explicit confirmation, acceptance, or rejection by the human. |
| **Accepted Assumption** | A Canvas block status meaning the AI made an assumption and the human reviewed and explicitly accepted it as a valid basis for further work. Differs from Answered in that it records a conscious acceptance of risk, not a confirmation of fact. |

**Explication vs Explication Record:** Explication is the process, Explication Record is its result-artifact. PM performs Explication, the result is fixed as an Explication Record, and the Record is versioned and stored in Linked Artifacts.

**Explication vs Reverse Explication:** Explication goes from human to structure (human speaks, PM structures). Reverse Explication goes from implementation to structure (PM analyzes existing artifacts and recovers intent).

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
    `,
  },
  "meta-model": {
    title: "Meta-Model",
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
| 3 | intenture **creates_value_for** Actor |
| 4 | intenture **is_evidenced_by** Evidence |
| 5 | Value **is_measured_by** Metric |
| 6 | Explication (process) **produces** Explication Record |
| 7 | Explication (process) **is_performed_by** Actor (PM) |
| 8 | intenture **results_in** Expected Output |
| 9 | Artifact **creates_value_for** Actor |
| 10 | Transition **is_triggered_by** Signal |
| 11 | Explication Record **records** intenture |

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
Canonical, unambiguous structure with 5 sections:

1. **Core Definition** - Intent, Object, Constraints, Expected Output
2. **Supporting Context** - Context, Value, Actors, Evidence, Metrics
3. **Development Layer** - Conception, Vision, States, Transitions, Signals, Risks, Open Questions
4. **Readiness Layer** - Current Lifecycle State, Critical Gaps, Unknown Yet Items, Realization Decision
5. **Linked Artifacts** - References to external documents

## Intent Vocabulary (8 Verbs)

Not a rigid enum but guidance - each verb implies a different realization strategy.

| Verb | Implied Strategy | Typical PM Mode |
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
3. PM may suggest the human formalize budget and timeline constraints but is not required to demand it.
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

For blocks with [safety] and [legal] type Constraints, the "Accept as assumption" path is not permitted. Assumptions in safety and legal areas can only be confirmed (-> Answered) or rejected (-> Unknown Yet). PM must explicitly warn the human if an assumption concerns a safety or legal Constraint.

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

## Three-Level Readiness Model

1. **Universal Readiness Layer** - the Critical Readiness Threshold (4 Critical Blocks Answered)
2. **Assumption Gate** - mandatory gate: every "Assumed by AI" block must be resolved
3. **Specialized Readiness Blocks** - pattern-specific additional required fields

## Lifecycle Transitions Table

| Transition | Trigger | Minimum Condition |
|------------|---------|-------------------|
| Dream / Vision Seed -> Exploratory | Human begins dialogue with PM | At least one of: Intent, Object, Vision expressed |
| Exploratory -> Explicated | PM completes initial round of questions | All Critical Blocks filled: Intent, Object, Constraints, Expected Output |
| Explicated -> Structured | PM normalizes Canvas into AI-facing form | AI-facing form valid, no internal contradictions, all Critical Blocks have status Answered |
| Structured -> Realizable | CRT + Assumption Gate passed | All 4 CRT conditions met + Assumption Gate passed (no "Assumed by AI" blocks) + Supporting Blocks sufficient + Specialized Readiness met |
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

At each significant transition, PM fixes a new **Explication Record** - a versioned snapshot of the current state of intenture. This ensures traceability of intent evolution and the ability to compare versions.

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

## 9 Relation Types

All relations are depicted as **labeled arrows** connecting primitives:
acts_on, constrains, creates_value_for, is_measured_by, transitions_to, is_triggered_by, is_performed_by, is_evidenced_by, is_realized_as.

## 5 Diagram Types

1. **Intent Map** - Core structure: Intent -> Object, with Actors, Values, Constraints. Formed in Structuring Mode.
2. **Actor Interaction Map** - How actors relate and coordinate. Useful for cases with multiple roles.
3. **Lifecycle Diagram** - State progression with transitions, signals, and CRT as a dividing line.
4. **Value Map** - Value flows between actors.
5. **Realization Map** - Intent -> Artifacts path with milestones.
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
| 6a. **Confirm Assumptions** | Pass all AI assumptions through explicit human confirmation | Resolved assumptions |
| 7. **Decide Readiness** | Evaluate against CRT + Assumption Gate + Specialized Matrix | Readiness decision |
| 8. **Prepare Realization Form** | Generate final artifacts | Canvas, Object Card, AI-facing form |

## Step 6a - Confirm Assumptions

**Input:** all Canvas blocks with status "Assumed by AI" after Clarify, Validate, and Stress-Test steps.

**Procedure:**

1. PM collects the full list of blocks with "Assumed by AI" status.
2. If the list is empty - step is skipped, PM proceeds to Decide Readiness.
3. If the list is not empty - PM shows the human each assumption with: block name, formulation, reasoning, and whether it relates to safety/legal constraints (with warning).
4. For each assumption, PM requests one of three decisions:
   - **"Confirm"** - this is fact, I confirm -> status changes to Answered
   - **"Accept as assumption"** - I understand this is an assumption but consider it sufficient for starting -> status changes to Accepted Assumption
   - **"Reject"** - this is incorrect or I don't know -> status changes to Unknown Yet
5. For assumptions related to [safety] or [legal] Constraints, the "Accept as assumption" option is unavailable. PM explicitly explains why.
6. After processing all assumptions, PM updates Canvas and proceeds to Decide Readiness.

**Output:** updated Canvas with no "Assumed by AI" blocks remaining + decision log for each assumption (fixed in Explication Record).

## Human Interaction Points

PM shows results to the human after:
- **Step 1** - brief confirmation of understanding
- **Step 4** - clarifying questions (iteratively, one at a time)
- **Step 5** - discovered contradictions (if any)
- **Step 6** - identified risks and unknowns
- **Step 6a** - list of AI assumptions + request for decision on each
- **Step 7** - Human-facing form + diagrams + readiness decision
- **Step 8** - final presentation for confirmation before realization start

Steps 2 and 3 are internal PM operations.

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
    title: "PM Operating Modes",
    content: `
## 4 Operating Modes

### 1. Exploratory Mode
**Entry:** Intent is foggy, unclear, or just emerging. Critical Blocks not filled or only partially filled.
**Focus:** Discovery via open-ended questions
**Key Rules:**
- No forcing early scope or premature structuring
- Do not criticize immature intent
- Keep dialogue in discovery mode, not structuring
**PM Output:** Partially filled Canvas with explicit Unknown Yet statuses, uncertainty map, initial Intent and/or Object formulations
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
**PM Output:** Fully normalized Canvas, AI-facing form without contradictions, Object Card, Human-facing form with diagrams, Readiness assessment (Universal CRT + Assumption Gate + Specialized Readiness)
**AI Output:** Normalizes Canvas, asks clarifying questions one at a time, cross-validates blocks, generates Human-facing presentation and diagrams
**Exit:** All Critical Blocks Answered, no contradictions, Assumption Gate passed (no "Assumed by AI" blocks in Canvas), Readiness decision issued. If Ready for Realization -> **Realization Mode**

### 3. Realization Mode
**Entry:** Intent passed CRT + Assumption Gate + Specialized Readiness. Human confirmed start.
**Focus:** Translating intent to specs, backlogs, plans, workflows
**Key Rules:**
- Maintain scope boundaries, track against Expected Output
- Realization must not destroy the original meaning of intenture
- Track budget spending and deadline compliance when structured [budget] and [timeline] Constraints present
**PM Output:** Implementation artifacts, task breakdowns, success criteria, Explication Record at realization start
**AI Output:** Translates AI-facing form into concrete tasks and artifacts, monitors compliance, escalates deviations
**Exit:** Significant feedback received -> **Evolution Mode**. Realization complete and intent exhausted -> Archived.

### 4. Evolution Mode
**Entry:** Intent is live and producing signals. Critical Signal, scheduled review, or human change request received.
**Focus:** Collecting signals, detecting drift, updating Canvas
**Key Rules:**
- Every significant signal triggers Explication Record update
- Compare actual development against intenture
- Identify drift (divergence between intent and reality)
**PM Output:** Updated Canvas, new versions, adaptation decisions, change summary for human
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
};
