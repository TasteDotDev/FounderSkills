# Founder Skills

530 business frameworks as AI-powered skills. Works with **Claude Code**, **OpenAI Codex**, **Gemini CLI**, **GPTs**, **Gemini Gems**, and the **[Founder CLI](https://github.com/TasteDotDev/founder-cli)**.

Built on the open [Agent Skills](https://agentskills.io) standard — every skill is a `SKILL.md` with YAML frontmatter, so it works anywhere.

## Install

### Claude Code

```bash
claude install github:TasteDotDev/founder-skills
```

Then use `/founder` in any conversation.

### OpenAI Codex

```bash
# User-level (all projects)
codex skills install https://github.com/TasteDotDev/founder-skills.git --path skills

# Or project-level
codex skills install https://github.com/TasteDotDev/founder-skills.git --path skills --scope workspace
```

Then use `$founder` or let Codex pick the right skill automatically.

### Gemini CLI

```bash
# User-level (all projects)
gemini skills install https://github.com/TasteDotDev/founder-skills.git --path skills

# Or project-level
gemini skills install https://github.com/TasteDotDev/founder-skills.git --path skills --scope workspace
```

Gemini activates skills automatically when your question matches.

### Founder CLI

```bash
npm i -g @taste.dev/founder
founder "how do I price my SaaS?"
```

Standalone CLI with any LLM (Anthropic, OpenAI, Google, OpenRouter). See [founder-cli](https://github.com/TasteDotDev/founder-cli).

### Manual Install (any agent)

```bash
# Clone into your agent's skills directory
git clone https://github.com/TasteDotDev/founder-skills.git

# Then symlink or copy the skills/ directory to where your agent looks:
# Claude Code:  ~/.claude/skills/
# Codex:        ~/.agents/skills/
# Gemini CLI:   ~/.gemini/skills/ or ~/.agents/skills/
```

## What's Inside

| Category | Frameworks | Examples |
|----------|-----------|----------|
| **strategy** | 48 | Porter's Five Forces, Blitzscaling, Wardley Maps, Cold Start |
| **marketing** | 44 | Product-Led Growth, Growth Loops, Dark Social, Viral Content |
| **innovation** | 43 | Superhuman PMF Engine, Amazon Working Backwards, AI-First |
| **finance** | 38 | Unit Economics, SAFE Notes, Growth Accounting, AI Pricing |
| **communication** | 37 | Pyramid Principle, SCQA, Crisis Communication |
| **organization** | 37 | Async-First, Team Topologies, McKinsey 7S, RACI |
| **decision-making** | 36 | Cynefin, Pre-Mortem, Decision Matrix |
| **productivity** | 33 | GTD, Deep Work, OKRs, Sprint Planning |
| **leadership** | 31 | Founder Mode, Radical Candor, Servant Leadership |
| **operations** | 28 | Lean, Six Sigma, Risk Register, Critical Path |
| **sales** | 27 | MEDDIC, Challenger Sale, Land and Expand, PLG Sales |
| **design** | 27 | Design Thinking, UX Research, Service Blueprint |
| **negotiation** | 21 | BATNA, Harvard Principled, Anchoring Strategy |
| **mental-models** | 21 | First Principles, Inversion, Second-Order Thinking |
| **psychology** | 13 | Nudge Theory, Cognitive Bias Audit, Habit Formation |

Plus the **`/founder`** meta-skill that diagnoses your problem and picks the right frameworks automatically.

## Structure

Each skill follows the open Agent Skills standard:

```
skills/
  strategy/
    SKILL.md           # Skill instructions + YAML frontmatter
    frameworks.md      # Detailed framework definitions
  marketing/
    SKILL.md
    frameworks.md
  ...
  founder/
    SKILL.md           # Meta-skill: routes to the right framework
  commands/
    founder.md         # Slash command aliases
    strategy.md
    ...
```

## License

MIT
