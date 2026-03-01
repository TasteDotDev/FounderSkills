# Founder Skills

**523 AI-powered business frameworks** for founders and product managers — strategy, finance, leadership, growth, and behavioral science.

Works with **Claude Code**, **OpenAI GPTs/Assistants**, **Gemini Gems/API**, and as **standalone prompts**.

Includes modern frameworks from **Reforge, a16z, Y Combinator, Sequoia, First Round Capital**, and growth leaders at **Uber, Airbnb, Stripe, Datadog, and Figma**. Plus AI-era frameworks for agent design, AI GTM, and AI pricing.

## Quick start

### Claude Code (recommended)

**Option 1: Install via marketplace plugin** (easiest)

In Claude Code, run:

```
/plugins marketplace TasteDotDev/FounderSkills
```

Then install the `founder-skills` plugin when prompted. This registers the marketplace and installs all 16 skills as slash commands. Updates are managed automatically.

To see installed plugins:

```
/plugins
```

**Option 2: Install as skills manually** (git clone)

```bash
# Install globally (works across all projects)
git clone https://github.com/TasteDotDev/FounderSkills ~/.claude/skills/founder-skills

# Or for a specific project only
git clone https://github.com/TasteDotDev/FounderSkills .claude/skills/founder-skills
```

Then use slash commands:

```
/founder We're a 50-person B2B SaaS doing $5M ARR, growth slowed from 3x to 1.5x
/strategy swot-analysis for a B2B SaaS entering the European market
/finance analyze unit economics for our marketplace startup
/innovation
```

### OpenAI (GPTs & Assistants)

```bash
# Generate platform-specific files
git clone https://github.com/TasteDotDev/FounderSkills
cd FounderSkills
python3 build.py
```

**GPTs**: Upload `dist/openai/gpts/<category>/instructions.md` as the GPT instructions and `knowledge/frameworks.md` as a knowledge file.

**Assistants API**: Use the config in `dist/openai/assistants/<category>.json` and upload `files/<category>-frameworks.md` to a vector store.

### Gemini (Gems & API)

**Gems**: Upload `dist/gemini/gems/<category>/instructions.md` as the Gem instructions and `knowledge/frameworks.md` as a knowledge file.

**API**: Use `dist/gemini/api/<category>.md` as the system prompt — it includes all framework details inline.

### Standalone

Individual framework prompts in `dist/standalone/<category>/<framework>.md` — self-contained, works with any LLM.

## The `/founder` master skill

[`/founder`](./skills/founder/SKILL.md) is your **AI business consultant**. Describe any business problem and it will:

1. **Diagnose** — identify the problem type, scope, and missing context
2. **Select** — pick the 2-4 best frameworks from 523 options across 15 categories
3. **Apply** — run each framework end-to-end with full structure, no shortcuts
4. **Synthesize** — combine insights into a prioritized action plan with timelines

```
/founder Should we pivot from B2C to B2B?
/founder I need to pitch investors for our Series A
/founder Our team is growing from 10 to 50, how should we restructure?
/founder Competitor just raised $100M and is undercutting our prices
/founder How will AI agents disrupt our industry in the next 3 years?
```

No need to know which framework to use. `/founder` handles that for you.

## Skills (523 frameworks across 15 categories)

| Skill | Frameworks | Examples |
|-------|-----------|----------|
| [`/founder`](./skills/founder/SKILL.md) | **all 523** | **Master skill — analyzes your problem and applies the right frameworks automatically** |
| [`/communication`](./skills/communication/SKILL.md) | 38 | Pyramid Principle, SCQA, Elevator Pitch, Storytelling, Crisis Comms |
| [`/decision-making`](./skills/decision-making/SKILL.md) | 39 | Decision Matrix, Cynefin, Pre-Mortem, Eisenhower Matrix, OODA Loop |
| [`/design`](./skills/design/SKILL.md) | 27 | Design Thinking, UX Research, Service Blueprint, Accessibility Audit |
| [`/finance`](./skills/finance/SKILL.md) | 46 | Sequoia Pitch Deck, YC Seed Deck, SAFE Notes, Growth Accounting, AI Pricing, Unit Economics |
| [`/innovation`](./skills/innovation/SKILL.md) | 50 | Superhuman PMF Engine, AI Agent Framework, Continuous Discovery, Amazon PR/FAQ, RICE/ICE |
| [`/leadership`](./skills/leadership/SKILL.md) | 33 | Founder Mode, Situational Leadership, Radical Candor, Servant Leadership, GROW Model |
| [`/marketing`](./skills/marketing/SKILL.md) | 54 | PLG Flywheel, Build in Public, TikTok Growth, Viral Content, Community-Led, Dark Social |
| [`/mental-models`](./skills/mental-models/SKILL.md) | 23 | First Principles, Inversion, Second-Order Thinking, Occam's Razor |
| [`/negotiation`](./skills/negotiation/SKILL.md) | 22 | BATNA, Harvard Method, Anchoring, ZOPA Analysis, Negotiation Playbook |
| [`/operations`](./skills/operations/SKILL.md) | 25 | Lean, Six Sigma, Theory of Constraints, Kaizen, Value Stream Mapping |
| [`/organization`](./skills/organization/SKILL.md) | 40 | Async-First Culture, McKinsey 7S, RACI Matrix, Kotter's 8-Step Change, Team Topologies |
| [`/productivity`](./skills/productivity/SKILL.md) | 34 | GTD, Deep Work, OKRs, Time Blocking, Pomodoro, SMART Goals |
| [`/psychology`](./skills/psychology/SKILL.md) | 14 | Nudge Theory, Cognitive Bias Audit, Flow State, Prospect Theory |
| [`/sales`](./skills/sales/SKILL.md) | 30 | Cold Email Framework, Land & Expand, Product-Led Sales, MEDDIC, Challenger Sale |
| [`/strategy`](./skills/strategy/SKILL.md) | 48 | SWOT, Porter's Five Forces, Blitzscaling, Four Fits, Cold Start Problem, AI GTM |

## Building multi-platform dist

```bash
python3 build.py          # Build all platforms
python3 build.py --clean  # Clean and rebuild
```

Output structure:

```
dist/
  openai/
    gpts/<category>/instructions.md + knowledge/frameworks.md
    assistants/<category>.json + files/<category>-frameworks.md
  gemini/
    gems/<category>/instructions.md + knowledge/frameworks.md
    api/<category>.md
  standalone/<category>/<framework-slug>.md
  manifest.json
```

Tagged releases on GitHub include pre-built `dist/` as a downloadable artifact.

## What's inside each skill

Every skill has two files:

```
skills/strategy/
├── SKILL.md          # Main skill — instructions + framework list
└── frameworks.md     # Detailed reference — expert prompts, inputs, when-to-use
```

- **SKILL.md** is what Claude loads when you invoke the skill. It contains the framework catalog and output standards.
- **frameworks.md** is the detailed reference that Claude reads when applying a specific framework. It contains the expert system prompt, required inputs, and origin attribution for each framework.

## What's new (modern frameworks)

These frameworks reflect the latest thinking from top VCs, growth leaders, and AI practitioners:

### Growth Engineering (Reforge / a16z / OpenView)
- **Blitzscaling** — Reid Hoffman's hypergrowth framework
- **Four Fits Framework** — Brian Balfour's growth bottleneck diagnosis
- **North Star Metric** — Sean Ellis / Amplitude's alignment framework
- **Cold Start Problem** — Andrew Chen's network effect launch playbook
- **Product-Led Growth Flywheel** — OpenView/Wes Bush's PLG motion
- **Racecar Growth Framework** — Reforge's growth initiative categorization
- **Marketplace Liquidity** — solving chicken-and-egg for two-sided markets

### Modern Distribution
- **Build in Public** — transparency-driven growth (Pieter Levels, Buffer)
- **Short-Form Video Growth** — TikTok/Reels/Shorts strategy
- **Viral Content Framework** — hook psychology and shareability engineering
- **Cold Email Framework** — Alex Berman's 3C method for outbound
- **Community-Led Growth** — community as acquisition channel
- **Dark Social Strategy** — leveraging private sharing channels
- **LinkedIn Growth Playbook** — B2B personal brand and lead gen
- **Creator-Led Growth** — influencer partnerships as growth channel

### Startup / VC
- **Sequoia Pitch Deck Format** — the gold-standard 10-slide format
- **YC Seed Deck Framework** — clarity-over-polish seed round deck
- **SAFE Notes Framework** — negotiate valuation caps, discounts, pro rata
- **Investor Data Room Checklist** — tiered document organization for due diligence
- **Growth Accounting** — MRR decomposition (Tribe Capital / Social Capital)
- **Usage-Based Pricing** — consumption pricing like Twilio, Snowflake, Stripe
- **Superhuman PMF Engine** — Rahul Vohra's quantitative PMF method

### Product & Sales
- **Continuous Discovery Habits** — Teresa Torres's weekly discovery cadence
- **Amazon Working Backwards (PR/FAQ)** — start with the press release
- **Product-Led Sales** — PQL-based sales on top of PLG (Elena Verna)
- **Land and Expand** — start small, grow within accounts
- **RICE / ICE Scoring** — experiment and feature prioritization
- **Reverse Trial** — full access → downgrade model (Airtable, Loom)
- **Founder Mode** — Paul Graham's hands-on leadership philosophy

### AI Era
- **AI-First Product Design** — building products with AI at the core
- **AI Agent Design Framework** — autonomous agents with tools, memory, planning
- **AI Go-To-Market Strategy** — avoiding the wrapper trap, building AI moats
- **AI Product Pricing** — per-seat vs. per-output vs. usage-based for AI
- **AI Future Scenario Planning** — how AI reshapes your industry over 1/3/5 years

## Output quality

Every framework output follows these standards:

- **Structured**: Uses the exact sections and dimensions defined by each framework
- **Specific**: No generic filler — every point is tailored to your business context
- **Visual**: Tables, matrices, numbered steps, and bold headers for scannability
- **Actionable**: Ends with prioritized "So What?" recommendations

## Framework origins

These frameworks draw from decades of business research and modern practice, including:

- **Strategy**: Michael Porter, Alexander Osterwalder, Reid Hoffman, Clayton Christensen, Andrew Chen
- **Growth**: Brian Balfour (Reforge), Sean Ellis, Wes Bush, Elena Verna, Lenny Rachitsky
- **VC/Startup**: Y Combinator, Sequoia Capital, a16z, First Round Capital, OpenView
- **Product**: Teresa Torres, Rahul Vohra, Marty Cagan, Jeff Bezos (Amazon), Intercom
- **Leadership**: Paul Graham, Patrick Lencioni, Daniel Goleman, Kim Scott, Brian Chesky
- **AI**: Anthropic, OpenAI, a16z AI team, Kyle Poyar (OpenView)
- **Psychology**: Daniel Kahneman, Richard Thaler, Mihaly Csikszentmihalyi, Robert Cialdini
- **Communication**: Barbara Minto, Chip & Dan Heath, Jonah Berger

## Contributing

To add a new framework:

1. Add a JSON file to `server/tools/definitions/<category>/<slug>.json`
2. Run the skill regeneration script
3. Submit a PR

## License

MIT License. Copyright (c) taste.dev
