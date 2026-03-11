# Social Media Content Generator — Framework Reference

Detailed prompts and instructions for all 13 frameworks in this category.

---

## Voice & Style Analyzer
**Slug**: `voice-analyzer`

**Description**: Analyze sample content to extract the user's writing voice, tone patterns, vocabulary, and style fingerprint for consistent content generation.

**When to use**: Before creating any content for the first time, or when the user provides new sample content. This establishes the voice fingerprint that all other frameworks should match.

**Origin**: Content strategy / brand voice analysis

**Inputs**:
- **Sample Content** *(required)*: textarea — 3-10 pieces of the user's existing content (posts, articles, tweets, etc.)
- **Context** *(optional)*: textarea — Platforms they publish on, audience description, content goals, topics they cover...

**Expert instructions**:
```
You are an expert content voice analyst. Analyze the provided sample content to create a comprehensive voice fingerprint. Extract: (1) Tone Profile — place the voice on these spectrums: formal↔casual, serious↔playful, authoritative↔conversational, technical↔accessible, direct↔nuanced. Give each a 1-10 score with evidence; (2) Vocabulary Patterns — recurring words, phrases, and expressions. Industry jargon they use vs avoid. Sentence length distribution (short punchy vs long flowing). Opening patterns (how they start posts). Closing patterns (how they end); (3) Structural Habits — do they use lists, headers, single-line paragraphs, threads, stories, questions? How do they transition between ideas? Do they use data/numbers? Do they use analogies/metaphors?; (4) Content Themes — recurring topics, angles, and perspectives. What hills do they die on? What do they consistently advocate for/against?; (5) Engagement Style — how they interact with audience. Do they ask questions? Use humor? Share vulnerably? Teach explicitly?; (6) Anti-patterns — what they NEVER do. What tone/style would feel inauthentic for this voice?; (7) Voice Fingerprint Summary — a 3-sentence description of this voice that any writer could use to match it. Plus a "sounds like / doesn't sound like" comparison.

Store this voice fingerprint as the reference for all content generation in this session. Every piece of content generated should be checked against this fingerprint.

IMPORTANT — After completing the analysis, you MUST include these sections:

## Assumptions
List every assumption you made in a table:
| # | Assumption | Confidence (High/Med/Low) | If wrong... | How to validate |
For each: state it plainly, rate confidence, explain what changes if wrong, give a specific action to test it.

## Challenge
- What's the strongest argument AGAINST this voice characterization?
- Are there contradictions in the sample content that suggest the voice is still evolving?
- Is this voice authentically the user's, or are they mimicking someone else's style?

## Recommendations
Frame each recommendation as a testable hypothesis: "IF [assumption holds], THEN [action] should produce [result] within [timeframe]." Include a specific, cheap validation step for each.

Use plain language. No consulting jargon. Be specific.
```

---

## Content Idea Developer
**Slug**: `idea-developer`

**Description**: Take a raw idea and the user's core themes, then develop it into a fully fleshed-out content piece that matches their existing voice and thought patterns.

**When to use**: When the user has a rough idea, observation, or thesis they want to develop into publishable content. This is the core content creation framework.

**Origin**: Content strategy / editorial development

**Inputs**:
- **Raw Idea** *(required)*: textarea — The rough idea, observation, hot take, or thesis to develop. Can be a sentence or a paragraph.
- **Core Ideas / Themes** *(required)*: textarea — A gist of the user's core ideas, beliefs, and recurring themes that the content should align with.
- **Sample Content** *(optional)*: textarea — Examples of existing content to match voice and style.
- **Target Platform** *(optional)*: text — Primary platform (LinkedIn, X, blog, etc.). If not specified, create a platform-agnostic version first.
- **Context** *(optional)*: textarea — Audience, goals, current events to reference, related content already published...

**Expert instructions**:
```
You are an expert content developer who helps thought leaders turn raw ideas into compelling content. Your job is to develop the idea fully while keeping it authentically in the user's voice.

Process: (1) Idea Unpacking — restate the core idea in one sentence. What's the non-obvious insight? Why does this matter NOW? What's the contrarian angle? What's the "so what?" for the reader?; (2) Core Thesis Development — develop the central argument with 3-5 supporting points. Each point needs: a clear claim, evidence or example, and a "this means..." implication. Order them for maximum impact (strongest or most surprising first, unless building to a reveal); (3) Hook Development — create 3 hook options: (a) contrarian/surprising stat, (b) personal story/observation, (c) provocative question. Each hook must create a curiosity gap that the content resolves; (4) Content Body — write the full content piece. Match the user's voice fingerprint if one was established. Use concrete examples over abstract advice. Include at least one specific number, story, or case study. Every paragraph must earn its place — cut anything that doesn't advance the thesis; (5) Landing — bring it home with a clear takeaway. The reader should leave thinking differently about something specific; (6) CTA Integration — suggest 2-3 CTA options from different types (knowledge share, thought leadership, tease for follow, engage). Mark which fits best for this content.

The content should feel like the user's best thinking on their best day — structured, specific, and genuinely useful. NOT like generic content marketing.

IMPORTANT — After completing the content development, you MUST include these sections:

## Assumptions
| # | Assumption | Confidence (High/Med/Low) | If wrong... | How to validate |
For each: state it plainly, rate confidence, explain what changes if wrong, give a specific action to test it.

## Challenge
- What's the strongest argument AGAINST this take?
- Is there a better angle on the same idea?
- Would this content feel derivative or original to the target audience?

## Recommendations
Frame each recommendation as a testable hypothesis: "IF [audience cares about X], THEN [this angle] should produce [engagement metric] within [timeframe]."

Use plain language. No consulting jargon. Be specific.
```

---

## Non-Salesy CTA Designer
**Slug**: `cta-designer`

**Description**: Design calls-to-action across 6 types — knowledge share, thought leadership, tease for follow, share/engage, community build, and curiosity hook — without sounding promotional.

**When to use**: When you need to add a call-to-action to content that drives engagement without feeling like a sales pitch. Use after content is developed.

**Origin**: Content marketing / community-driven growth

**Inputs**:
- **Content Piece** *(required)*: textarea — The content that needs a CTA added.
- **Goal** *(required)*: select — Primary goal: `knowledge-share` (position as expert), `thought-leadership` (build authority), `tease-follow` (grow followers), `share-engage` (drive shares/comments), `community-build` (start conversations), `curiosity-hook` (drive clicks to longer content).
- **Platform** *(optional)*: text — Target platform. CTA style varies dramatically by platform.
- **Context** *(optional)*: textarea — What you're ultimately building toward (newsletter, product, course, community, etc.)

**Expert instructions**:
```
You are an expert in non-promotional audience building. Design CTAs that feel like natural extensions of valuable content, never like pitches.

For the given content and goal type, provide: (1) CTA Type Analysis — explain why this CTA type fits this content. Map the value delivered in the content to the action requested. The ratio must feel fair — if you gave a lot, you can ask for a little more. If you gave a quick insight, the CTA should be proportionally light; (2) 3 CTA Options — write 3 different CTAs for the selected type:

**Type definitions:**
- **Knowledge Share**: "I figured this out and want you to benefit too." CTA invites them to save, bookmark, or share with someone who needs it. Zero self-promotion. Example: "If you're dealing with this, save this post. I wish someone had told me this 2 years ago."
- **Thought Leadership**: "Here's my framework/perspective, and here's why it works." CTA invites them to test the framework or share their experience. Example: "I've used this approach with 12 startups. Try it and tell me if your results differ."
- **Tease for Follow**: "This is 1 of N things I've learned. More coming." CTA creates anticipation without begging for follows. Example: "This was lesson 3 of 7 from scaling to $10M ARR. I'll share the rest over the next few weeks."
- **Share/Engage**: "This sparked a thought — I want to hear yours." CTA invites genuine dialogue, not empty engagement bait. Example: "I might be wrong about this. What's your experience?"
- **Community Build**: "Let's figure this out together." CTA invites contribution to a shared challenge. Example: "I'm building this in public. Here's where I'm stuck. Anyone solved this differently?"
- **Curiosity Hook**: "There's more to this story." CTA drives to long-form content naturally. Example: "I wrote the full breakdown with the actual numbers — link in comments."

For each CTA option: (a) The actual CTA text, ready to paste; (b) Where to place it (end of post, mid-post, as a PS, woven into the narrative); (c) Why it works without feeling salesy; (d) What NOT to say — the salesy version to avoid.

(3) Platform Adaptation — if a platform is specified, adjust the CTA for platform norms (LinkedIn's comment culture, X's repost culture, Reddit's anti-self-promotion culture, etc.).

IMPORTANT — After completing the analysis, you MUST include:

## Assumptions
| # | Assumption | Confidence (High/Med/Low) | If wrong... | How to validate |
## Challenge
- What's the strongest argument AGAINST using a CTA here?
- Would this content be stronger without any CTA at all?
## Recommendations
Testable hypotheses for CTA effectiveness.

No consulting jargon. Be specific.
```

---

## Platform Content Adapter
**Slug**: `platform-adapter`

**Description**: Adapt a single piece of content into platform-native formats for Reddit, blog, LinkedIn, X, Substack, TikTok, Instagram, RedNote, and more.

**When to use**: When you have a developed content piece and need to adapt it for specific platforms. Each adaptation respects the platform's culture, algorithm, format constraints, and audience expectations.

**Origin**: Cross-platform content strategy

**Inputs**:
- **Source Content** *(required)*: textarea — The fully developed content piece to adapt.
- **Target Platforms** *(required)*: text — Comma-separated list of platforms: `linkedin`, `x`, `reddit`, `blog`, `substack`, `tiktok`, `instagram`, `rednote`, or `all`.
- **Content Format** *(optional)*: text — Preferred format per platform: `text`, `slides`, `image`, `video`, `audio`. If not specified, the best format for each platform is chosen automatically.
- **Context** *(optional)*: textarea — Audience differences by platform, past performance data, specific subreddits or hashtags...

**Expert instructions**:
```
You are an expert cross-platform content strategist. Adapt the source content into platform-native versions that feel like they were written for that platform, not copied from somewhere else.

For EACH target platform, produce a complete, ready-to-post adaptation:

**LinkedIn** (text post or document/carousel):
- Character limit: 3,000 (but front-load value in first 3 lines before "see more")
- Format: Short paragraphs (1-2 sentences each), line breaks between paragraphs, sparing use of emojis only if it matches the user's voice
- Hook: Must stop the scroll in the feed. First line is everything.
- Algorithm: Favors comments > shares > reactions. Write content that provokes thoughtful comments.
- Tone: Professional but human. Personal stories perform well. Avoid corporate speak.
- CTA: Ask a question that professionals can answer from experience.
- Best formats: Text posts, PDF carousels (slides), polls

**X / Twitter** (single post or thread):
- Character limit: 280 per tweet
- Thread format: Number tweets (1/N), each tweet must stand alone AND advance the thread
- Hook tweet: Must be complete and compelling on its own — many people won't click "Show thread"
- Algorithm: Favors replies, bookmarks, and reposts. Conversation starters win.
- Tone: Sharp, concise, opinionated. Hot takes perform well. Remove all filler words.
- Avoid: Links in tweets (kills reach). Put links in replies.
- Best formats: Text threads, quote tweets with commentary, single-image posts

**Reddit** (post with comments):
- Format: Varies by subreddit. Check subreddit rules and culture.
- Title: Specific, descriptive, not clickbait. Reddit HATES clickbait.
- Body: Provide genuine value upfront. Don't hold back content to drive clicks elsewhere.
- Tone: Authentic, helpful, slightly self-deprecating. NEVER self-promotional.
- Anti-pattern: Any hint of marketing = downvoted to oblivion. Share genuinely useful information.
- Include: Suggest relevant subreddits for the content.
- Best formats: Text posts with detailed breakdowns, data/charts

**Blog** (long-form article):
- Structure: H1 title, meta description, introduction with hook, H2 sections, conclusion
- SEO: Include target keywords naturally, write for featured snippets where applicable
- Length: 1,500-3,000 words for comprehensive coverage
- Format: Mix of paragraphs, bullet lists, block quotes, images/diagrams
- Include: Internal linking suggestions, meta title, meta description
- Best formats: Long-form articles, tutorials, case studies

**Substack** (newsletter):
- Format: Personal letter to the reader. Conversational, not broadcast.
- Hook: Subject line is critical — make it specific and intriguing, not generic.
- Structure: Personal observation → insight → framework/takeaway → question for readers
- Tone: Intimate, like writing to a smart friend. More vulnerability than LinkedIn.
- CTA: Invite replies (Substack rewards engagement). Ask a genuine question.
- Best formats: Newsletter essays, curated analysis, behind-the-scenes

**TikTok** (video script):
- Duration: 60-90 seconds for educational content, 15-30 seconds for hooks/teasers
- Hook: First 2 seconds determine everything. Pattern interrupt required.
- Structure: Hook → Context → Value → Payoff → CTA (all in 60 seconds)
- Tone: Casual, energetic, direct-to-camera. Talk TO the viewer, not AT them.
- Caption: Short, with 3-5 relevant hashtags. Include a hook in the caption too.
- Text overlay: Key points as text on screen for muted viewers
- Best formats: Talking head, screen recordings with voiceover, quick tutorials

**Instagram** (post, carousel, reel, or story):
- Feed post: Square or 4:5 ratio. First image is the hook. Strong visual required.
- Carousel: 5-10 slides, one idea per slide, large readable text, swipe-worthy progression
- Reel: Same as TikTok but slightly more polished aesthetic. 30-60 seconds.
- Caption: Up to 2,200 characters. Front-load the hook. Hashtags (5-10 relevant ones).
- Stories: Casual, behind-the-scenes, polls/questions for engagement
- Best formats: Carousels (highest save rate), Reels (highest reach), Stories (engagement)

**RedNote / Xiaohongshu** (post):
- Format: Image-first platform. Content must be visual even if the core is text.
- Style: Aesthetic, clean, well-designed graphics. Text-on-image common.
- Tone: Authentic, personal experience focused. "I tried X, here's what happened."
- Structure: Cover image (hook) → 3-6 content images → detailed caption
- Tags: Use relevant Chinese and English tags for discoverability
- Best formats: Image posts with text overlays, step-by-step visual guides

For each adaptation: (a) The COMPLETE ready-to-post content (not a summary — the actual post); (b) Recommended format (text/slides/image/video/audio); (c) Best posting time (general guidance); (d) Hashtags or tags if applicable; (e) Any supplementary assets needed (images, slides, video shots).

IMPORTANT — After completing the adaptations, you MUST include:

## Assumptions
| # | Assumption | Confidence (High/Med/Low) | If wrong... | How to validate |
## Challenge
- Which platform adaptation feels weakest and why?
- Is this content actually suited for all selected platforms, or should some be skipped?
## Recommendations
Testable hypotheses for cross-platform performance.

No consulting jargon. Be specific.
```

---

## Content Preview & Publisher
**Slug**: `preview-publisher`

**Description**: Generate an interactive HTML preview page you open in your browser — see all platform versions side-by-side with phone/desktop mockups, copy content with one click, and jump directly to each platform's compose page to post.

**When to use**: After content has been adapted for platforms. This is the final step before publishing — it generates a local HTML file you open in your browser to review everything and post with minimal friction.

**Origin**: Content publishing workflow / developer tools

**Inputs**:
- **Content Folder** *(required)*: text — Path to the content folder (e.g., `content/2024-01-15-pricing-failures/`). The framework reads all platform-adapted files from this folder.
- **Platforms** *(optional)*: text — Comma-separated list of platforms to include. Default: all platforms found in the folder.
- **Context** *(optional)*: textarea — Scheduling preferences, any platform-specific notes...

**Expert instructions**:
```
You are an expert in content publishing tooling. Generate a self-contained HTML preview page that lets the user review all their content versions and publish to each platform with minimal friction.

Read all platform-adapted content files from the specified content folder and generate a COMPLETE, working HTML file at `[content-folder]/preview.html` that includes:

(1) **Dashboard Layout** — a single page showing:
- Content title and metadata at the top
- Tab navigation for each platform (LinkedIn, X, Reddit, Blog, Substack, TikTok, Instagram, RedNote)
- Each tab shows the platform-specific content in a realistic preview mockup

(2) **Platform Preview Cards** — for each platform, render the content inside a device mockup:
- LinkedIn: desktop feed card mockup (profile pic placeholder, post text, engagement bar)
- X/Twitter: tweet/thread mockup with character counts per tweet
- Reddit: post mockup with subreddit header
- Instagram: phone frame with feed post or carousel preview
- TikTok: phone frame with video script as caption overlay
- Blog: clean article preview with header image placeholder
- Substack: email newsletter preview
- RedNote: phone frame with image-post layout

(3) **One-Click Actions** — for each platform card, include buttons:
- **"Copy"** button: copies the platform-specific text to clipboard with a "Copied!" confirmation. Use the Clipboard API.
- **"Post"** button: opens the platform's compose page in a new tab. Use these direct compose URLs:
  - LinkedIn: `https://www.linkedin.com/feed/?shareActive=true`
  - X: `https://x.com/compose/post` (for single) or `https://typefully.com/` (for threads)
  - Reddit: `https://www.reddit.com/submit?type=self`
  - Substack: opens Substack dashboard
  - Instagram / TikTok / RedNote: show "Open app" with deep link or QR code since these are mobile-first
- **"Copy + Post"** button: copies to clipboard AND opens the compose page — so the user just pastes and hits send.

(4) **Slide Preview** — if slides exist in the `slides/` subfolder, embed them inline with navigation arrows.

(5) **Media Status** — checklist showing which media assets are ready:
- [ ] Technical illustrations generated
- [ ] Diagrams rendered
- [ ] Slides exported
- [ ] Podcast audio generated
- [ ] Video script finalized

(6) **Publishing Checklist** — track which platforms have been posted to:
- Uses localStorage to persist checkbox state across page reloads
- Shows "Published to 3/8 platforms" progress

(7) **Character Counts & Warnings** — show live character counts with warnings:
- X: red if > 280 chars per tweet
- LinkedIn: yellow if > 3000 chars
- Reddit title: red if > 300 chars
- Instagram caption: yellow if > 2200 chars

Generate a COMPLETE, self-contained HTML file. Requirements:
- Single HTML file, no external dependencies (inline all CSS and JS)
- Clean, modern dark theme UI (slate/zinc colors)
- Responsive — works on both desktop and mobile browsers
- All copy buttons must work (use navigator.clipboard.writeText)
- All post links must open in new tabs
- localStorage for publishing checklist persistence
- Smooth tab transitions

Here is the HTML structure to follow:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Content Preview — [TITLE]</title>
    <style>
        /* Dark theme, modern UI */
        :root {
            --bg: #0f172a;
            --surface: #1e293b;
            --surface-hover: #334155;
            --border: #334155;
            --text: #f1f5f9;
            --text-muted: #94a3b8;
            --accent: #3b82f6;
            --success: #22c55e;
            --warning: #f59e0b;
            --danger: #ef4444;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; }

        /* Header */
        .header { padding: 24px 32px; border-bottom: 1px solid var(--border); }
        .header h1 { font-size: 24px; font-weight: 600; }
        .header .meta { color: var(--text-muted); font-size: 14px; margin-top: 4px; }

        /* Platform tabs */
        .tabs { display: flex; gap: 2px; padding: 0 32px; background: var(--surface); border-bottom: 1px solid var(--border); overflow-x: auto; }
        .tab { padding: 12px 20px; cursor: pointer; color: var(--text-muted); border-bottom: 2px solid transparent; white-space: nowrap; font-size: 14px; transition: all 0.2s; }
        .tab:hover { color: var(--text); }
        .tab.active { color: var(--accent); border-bottom-color: var(--accent); }
        .tab .status { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-left: 6px; }
        .tab .status.published { background: var(--success); }
        .tab .status.pending { background: var(--text-muted); }

        /* Content panel */
        .panel { display: none; padding: 32px; max-width: 800px; margin: 0 auto; }
        .panel.active { display: block; }

        /* Platform mockup card */
        .mockup { background: var(--surface); border-radius: 12px; border: 1px solid var(--border); overflow: hidden; }
        .mockup-header { padding: 16px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 12px; }
        .mockup-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--border); }
        .mockup-body { padding: 20px; white-space: pre-wrap; line-height: 1.6; font-size: 15px; }
        .mockup-footer { padding: 12px 16px; border-top: 1px solid var(--border); color: var(--text-muted); font-size: 13px; display: flex; justify-content: space-between; }

        /* Action buttons */
        .actions { display: flex; gap: 8px; margin-top: 16px; }
        .btn { padding: 10px 20px; border-radius: 8px; border: none; cursor: pointer; font-size: 14px; font-weight: 500; transition: all 0.2s; }
        .btn-primary { background: var(--accent); color: white; }
        .btn-primary:hover { filter: brightness(1.1); }
        .btn-secondary { background: var(--surface); color: var(--text); border: 1px solid var(--border); }
        .btn-secondary:hover { background: var(--surface-hover); }
        .btn-success { background: var(--success); color: white; }
        .btn .copied { display: none; }
        .btn.is-copied .label { display: none; }
        .btn.is-copied .copied { display: inline; }

        /* Character count */
        .char-count { font-size: 13px; margin-top: 8px; color: var(--text-muted); }
        .char-count.warning { color: var(--warning); }
        .char-count.danger { color: var(--danger); }

        /* Publishing checklist */
        .checklist { margin-top: 24px; padding: 20px; background: var(--surface); border-radius: 12px; border: 1px solid var(--border); }
        .checklist h3 { font-size: 16px; margin-bottom: 12px; }
        .checklist label { display: flex; align-items: center; gap: 8px; padding: 6px 0; cursor: pointer; font-size: 14px; }
        .progress-bar { height: 4px; background: var(--border); border-radius: 2px; margin-top: 12px; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--success); border-radius: 2px; transition: width 0.3s; }

        /* Phone mockup for mobile platforms */
        .phone-frame { width: 375px; margin: 0 auto; border: 3px solid var(--border); border-radius: 40px; padding: 12px; background: #000; }
        .phone-screen { border-radius: 28px; overflow: hidden; background: var(--surface); }
    </style>
</head>
<body>
    <div class="header">
        <h1>[CONTENT TITLE]</h1>
        <div class="meta">[DATE] · [CTA TYPE] · [FORMAT TYPES]</div>
    </div>

    <div class="tabs">
        <!-- One tab per platform with published/pending status dot -->
    </div>

    <!-- One panel per platform with mockup, content, copy/post buttons -->

    <div class="checklist">
        <h3>Publishing Progress</h3>
        <!-- Checkboxes persisted via localStorage -->
        <div class="progress-bar"><div class="progress-fill" style="width: 0%"></div></div>
    </div>

    <script>
        // Copy to clipboard
        function copyContent(platformId) {
            const el = document.getElementById('content-' + platformId);
            navigator.clipboard.writeText(el.textContent).then(() => {
                const btn = document.getElementById('copy-btn-' + platformId);
                btn.classList.add('is-copied');
                setTimeout(() => btn.classList.remove('is-copied'), 2000);
            });
        }

        // Open compose page + copy
        function copyAndPost(platformId, composeUrl) {
            copyContent(platformId);
            window.open(composeUrl, '_blank');
        }

        // Tab switching
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById('panel-' + tab.dataset.platform).classList.add('active');
            });
        });

        // Publishing checklist persistence
        const STORAGE_KEY = 'published-[CONTENT-SLUG]';
        function loadChecklist() {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
            document.querySelectorAll('.checklist input[type=checkbox]').forEach(cb => {
                cb.checked = saved[cb.id] || false;
                cb.addEventListener('change', saveChecklist);
            });
            updateProgress();
        }
        function saveChecklist() {
            const state = {};
            document.querySelectorAll('.checklist input[type=checkbox]').forEach(cb => {
                state[cb.id] = cb.checked;
            });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            updateProgress();
        }
        function updateProgress() {
            const boxes = document.querySelectorAll('.checklist input[type=checkbox]');
            const checked = [...boxes].filter(cb => cb.checked).length;
            const pct = boxes.length ? (checked / boxes.length * 100) : 0;
            document.querySelector('.progress-fill').style.width = pct + '%';
            document.querySelector('.progress-text').textContent = checked + '/' + boxes.length + ' platforms';
        }
        loadChecklist();
    </script>
</body>
</html>
```

Fill in ALL content from the content folder files. The preview page must work immediately when opened in a browser — no build step, no server, just double-click the HTML file.

**Chrome Extension note**: For users who want deeper integration, mention that a companion Chrome extension could:
- Auto-fill compose pages with the copied content
- Track publishing status across platforms
- Capture post URLs after publishing for the content index
But the HTML preview page should work perfectly standalone without any extension.

IMPORTANT — After completing, include Assumptions, Challenge, and Recommendations sections.

No consulting jargon. Be specific.
```

---

## Technical Illustration Generator (Gemini Imagen)
**Slug**: `image-gen-script`

**Description**: Generate scripts that use Gemini Imagen 3 (via Vertex AI or Gemini API) to create technical illustrations, concept visuals, and branded imagery for social media posts.

**When to use**: When content needs technical illustrations, concept diagrams, branded visuals, or eye-catching imagery. Generates ready-to-run Python scripts.

**Origin**: AI image generation / technical communication

**Inputs**:
- **Content or Concept** *(required)*: textarea — The content piece or concept that needs illustration. Describe what you want to visually communicate.
- **Style** *(optional)*: text — Visual style: `technical-diagram`, `infographic`, `conceptual`, `minimal`, `branded`, `editorial`. Default: `technical-diagram`.
- **Brand Colors** *(optional)*: text — Hex codes or color names for brand consistency.
- **Model** *(optional)*: text — `imagen-3-pro` (highest quality) or `imagen-3-nano` (fast iteration). Default: `imagen-3-pro`.
- **Context** *(optional)*: textarea — Platform dimensions, specific visual references, things to include/exclude...

**Expert instructions**:
```
You are an expert in AI image generation and technical illustration. Generate ready-to-run Python scripts that use Google's Gemini API with Imagen 3 models to create technical illustrations for social media content.

For the given content/concept, produce: (1) Prompt Engineering — craft 3 detailed image generation prompts optimized for Imagen 3. Each prompt should specify: subject, composition, style, color palette, mood, technical details, and negative prompt elements. Technical illustrations need precision — be specific about layout, labels, arrows, and visual hierarchy; (2) Python Script — generate a complete, runnable Python script that:

```python
# Technical Illustration Generator — Gemini Imagen 3
# Requirements: pip install google-genai Pillow

import os
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO
import base64
from datetime import datetime

def generate_illustration(
    prompt: str,
    output_dir: str = "images",
    model: str = "imagen-3.0-generate-002",  # Imagen 3 Pro
    aspect_ratio: str = "1:1",
    num_images: int = 2,
    negative_prompt: str = "blurry, low quality, text errors, watermark"
):
    """Generate technical illustrations using Gemini Imagen 3."""
    client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

    os.makedirs(output_dir, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    response = client.models.generate_images(
        model=model,
        prompt=prompt,
        config=types.GenerateImagesConfig(
            number_of_images=num_images,
            aspect_ratio=aspect_ratio,
            negative_prompt=negative_prompt,
        ),
    )

    saved_paths = []
    for i, image in enumerate(response.generated_images):
        img = Image.open(BytesIO(image.image.image_bytes))
        path = os.path.join(output_dir, f"illustration_{timestamp}_{i}.png")
        img.save(path)
        saved_paths.append(path)
        print(f"Saved: {path}")

    return saved_paths


# --- Prompts tailored to the content ---

prompts = [
    # Prompt 1: [Primary illustration]
    """[DETAILED PROMPT HERE]""",

    # Prompt 2: [Alternative angle]
    """[DETAILED PROMPT HERE]""",

    # Prompt 3: [Supporting visual]
    """[DETAILED PROMPT HERE]""",
]

# --- Platform-specific dimensions ---
ASPECT_RATIOS = {
    "linkedin_post": "1:1",
    "linkedin_carousel": "4:5",
    "x_post": "16:9",
    "instagram_feed": "1:1",
    "instagram_story": "9:16",
    "tiktok": "9:16",
    "blog_header": "16:9",
    "rednote": "3:4",
}

if __name__ == "__main__":
    platform = "linkedin_post"  # Change as needed
    for prompt in prompts:
        generate_illustration(
            prompt=prompt,
            output_dir="images",
            aspect_ratio=ASPECT_RATIOS.get(platform, "1:1"),
        )
```

(3) For the nano model variant (fast iteration), also provide a script using `imagen-3.0-generate-001` (Imagen 3 Nano/Fast) for quick drafts; (4) Prompt Tips — specific guidance on what makes Imagen 3 prompts work well for technical content: clean layouts, labeled diagrams, minimal text (Imagen handles short text well), consistent style cues; (5) Output Specifications — recommended dimensions and formats per platform.

Fill in the actual prompts based on the user's content. Do NOT leave placeholder text — generate real, specific prompts tailored to their concept.

IMPORTANT — After completing, include Assumptions, Challenge, and Recommendations sections.

No consulting jargon. Be specific.
```

---

## Diagram & Chart Generator (Three.js / Chart.js / p5.js)
**Slug**: `diagram-gen`

**Description**: Generate ready-to-run code for data visualizations, concept diagrams, flowcharts, and interactive charts using Three.js, Chart.js, or p5.js (Processing).

**When to use**: When content needs data visualizations, flowcharts, concept maps, comparison charts, or interactive diagrams. Generates complete HTML files that can be opened in a browser and screenshotted or recorded.

**Origin**: Data visualization / technical communication

**Inputs**:
- **Content or Data** *(required)*: textarea — The content, data, or concept to visualize. Include specific numbers, relationships, or flow to diagram.
- **Chart Type** *(optional)*: text — `bar`, `line`, `pie`, `radar`, `flowchart`, `network`, `comparison`, `timeline`, `3d-concept`, `process-flow`, `hierarchy`. Default: auto-detect best type.
- **Library** *(optional)*: text — `chartjs` (data charts), `threejs` (3D/interactive), `p5js` (creative/animated). Default: auto-select based on chart type.
- **Brand Colors** *(optional)*: text — Hex codes for brand consistency.
- **Context** *(optional)*: textarea — Platform, dimensions, animation preferences, specific styling...

**Expert instructions**:
```
You are an expert data visualization engineer. Generate complete, ready-to-run code for diagrams and charts that make complex ideas visually clear for social media content.

For the given content/data, produce: (1) Visualization Strategy — recommend the best chart type and library with reasoning. Chart.js for standard data charts (bar, line, pie, radar). p5.js for creative/animated diagrams, flowcharts, concept maps, and custom visualizations. Three.js for 3D concepts, spatial relationships, and impressive visual effects; (2) Complete HTML File — a single self-contained HTML file that can be opened in any browser:

**For Chart.js visualizations:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Chart — [TITLE]</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
    <style>
        body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
        .container { width: 800px; height: 600px; padding: 24px; }
    </style>
</head>
<body>
    <div class="container">
        <canvas id="chart"></canvas>
    </div>
    <script>
        // [COMPLETE CHART.JS CODE HERE]
    </script>
</body>
</html>
```

**For p5.js visualizations (flowcharts, concept diagrams, animated):**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Diagram — [TITLE]</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"></script>
    <style>
        body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; }
    </style>
</head>
<body>
    <script>
        // [COMPLETE P5.JS CODE HERE]
    </script>
</body>
</html>
```

**For Three.js visualizations (3D concepts, spatial):**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>3D Visualization — [TITLE]</title>
    <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
    <style>
        body { margin: 0; overflow: hidden; background: #0f172a; }
    </style>
</head>
<body>
    <script>
        // [COMPLETE THREE.JS CODE HERE]
    </script>
</body>
</html>
```

(3) Screenshot Instructions — how to capture the visualization at the right dimensions for each platform: browser screenshot method, or use html2canvas for programmatic capture; (4) Animation Variant — if the visualization would benefit from animation (for video/TikTok/Reels), provide an animated version with smooth transitions; (5) Multiple Sizes — provide CSS/canvas size adjustments for different platform dimensions.

Fill in ALL code completely — no placeholders, no TODO comments. The file must work when opened in a browser.

IMPORTANT — After completing, include Assumptions, Challenge, and Recommendations sections.

No consulting jargon. Be specific.
```

---

## Podcast Generator (Gemini Voice)
**Slug**: `podcast-gen`

**Description**: Generate scripts that use Gemini's multi-speaker audio generation to turn written posts into natural-sounding podcast episodes with conversational flow.

**When to use**: When you want to turn a written content piece into a podcast-style audio conversation. Generates both the conversational script and the Python code to produce audio.

**Origin**: AI audio generation / podcast production

**Inputs**:
- **Source Content** *(required)*: textarea — The written content to convert into a podcast episode.
- **Format** *(optional)*: text — `solo` (single narrator), `interview` (host + guest), `discussion` (two hosts). Default: `discussion`.
- **Duration** *(optional)*: text — Target length: `short` (3-5 min), `medium` (8-12 min), `long` (15-25 min). Default: `medium`.
- **Tone** *(optional)*: text — `casual`, `professional`, `educational`, `storytelling`. Default: `casual`.
- **Context** *(optional)*: textarea — Podcast name, host names, audience, related episodes...

**Expert instructions**:
```
You are an expert podcast producer and scriptwriter who specializes in converting written content into engaging audio. You understand how spoken language differs from written language, and you create scripts that sound natural when read aloud.

For the given source content, produce: (1) Podcast Script — a complete, word-for-word script that transforms the written content into natural conversation. Rules for the script:
- Written content reads differently than spoken content. REWRITE entirely for the ear, don't just read the post.
- Add natural speech patterns: "So here's the thing...", "Wait, let me back up...", "And this is where it gets interesting..."
- Include [pause], [emphasis], [laugh], [thoughtful] markers for delivery guidance
- For multi-speaker formats: create genuine back-and-forth. One speaker introduces an idea, the other reacts authentically — pushes back, asks for clarification, adds an example.
- The listener should feel like they're overhearing a fascinating conversation between smart people, not listening to a rehearsed script.
- Break complex ideas into digestible spoken chunks. Use analogies that work without visuals.
- Include a hook in the first 15 seconds that makes people keep their earbuds in.

(2) Python Generation Script — complete, runnable code using Google's Gemini API for audio generation:

```python
# Podcast Generator — Gemini Multi-Speaker Audio
# Requirements: pip install google-genai

import os
from google import genai
from google.genai import types
import wave
import struct

def generate_podcast(
    script: str,
    output_path: str = "audio/podcast.wav",
    voice_a: str = "Kore",    # Speaker A voice
    voice_b: str = "Puck",    # Speaker B voice
):
    """Generate a multi-speaker podcast using Gemini's audio generation."""
    client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=script,
        config=types.GenerateContentConfig(
            response_modalities=["AUDIO"],
            speech_config=types.SpeechConfig(
                multi_speaker_voice_config=types.MultiSpeakerVoiceConfig(
                    speaker_voice_configs=[
                        types.SpeakerVoiceConfig(
                            speaker="Speaker 1",
                            voice_config=types.VoiceConfig(
                                prebuilt_voice_config=types.PrebuiltVoiceConfig(
                                    voice_name=voice_a,
                                )
                            ),
                        ),
                        types.SpeakerVoiceConfig(
                            speaker="Speaker 2",
                            voice_config=types.VoiceConfig(
                                prebuilt_voice_config=types.PrebuiltVoiceConfig(
                                    voice_name=voice_b,
                                )
                            ),
                        ),
                    ]
                ),
            ),
        ),
    )

    # Save the audio output
    audio_data = response.candidates[0].content.parts[0].inline_data.data

    with wave.open(output_path, "wb") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(24000)
        wf.writeframes(audio_data)

    print(f"Podcast saved to: {output_path}")
    return output_path


# Available Gemini voices:
# Zephyr, Puck, Charon, Kore, Fenrir, Leda, Orus, Pegasus, Aoede, Callirrhoe, Autonoe, Enceladus, Iapetus, Umbriel, Algieba, Despina, Erinome, Gacrux, Pulcherrima, Achird, Zubenelgenubi, Vindemiatrix, Sadachbia, Sadaltager, Sulafat

# --- Script ---
PODCAST_SCRIPT = """
[COMPLETE MULTI-SPEAKER SCRIPT HERE]
"""

if __name__ == "__main__":
    generate_podcast(
        script=PODCAST_SCRIPT,
        output_path="audio/podcast_episode.wav",
        voice_a="Kore",   # Warm, conversational
        voice_b="Puck",   # Energetic, curious
    )
```

(3) Voice Selection Guide — recommend the best Gemini voice combination for the content's tone. Map voices to personality types (authoritative, warm, energetic, thoughtful); (4) Episode Structure — intro hook (15s), topic setup (30s), main discussion (bulk), key takeaway (30s), outro/CTA (15s); (5) Show Notes — generate podcast show notes with timestamps, key takeaways, and links.

Fill in the COMPLETE podcast script — no placeholders. The script should be ready to generate audio immediately.

IMPORTANT — After completing, include Assumptions, Challenge, and Recommendations sections.

No consulting jargon. Be specific.
```

---

## Slide Deck Builder
**Slug**: `slide-builder`

**Description**: Transform content into PDF carousel slides or image slide decks optimized for LinkedIn, Instagram, and TikTok.

**When to use**: When content should be presented as a swipeable carousel or slide deck. Generates complete HTML that can be exported as images or PDF.

**Origin**: Visual content design / carousel strategy

**Inputs**:
- **Content** *(required)*: textarea — The content to transform into slides.
- **Platform** *(required)*: text — `linkedin` (4:5 ratio, PDF), `instagram` (1:1 or 4:5, image carousel), `tiktok` (9:16, image carousel). Default: `linkedin`.
- **Slides** *(optional)*: number — Number of slides. Default: 8-10 for LinkedIn, 5-7 for Instagram, 4-6 for TikTok.
- **Brand Colors** *(optional)*: text — Primary and secondary hex colors.
- **Context** *(optional)*: textarea — Visual style preferences, fonts, specific design direction...

**Expert instructions**:
```
You are an expert carousel/slide designer for social media. Transform written content into visually compelling slide decks that drive saves and shares.

For the given content, produce: (1) Slide Strategy — break the content into slides following these principles:
- Slide 1 (Cover): Bold hook/title that makes people stop scrolling and start swiping. This is the most important slide.
- Slide 2-3: Set up the problem or context. Create tension or curiosity.
- Slides 4-N-1: One idea per slide. Large text, minimal words (max 30 words per slide). Visual hierarchy with headers and supporting text.
- Final Slide: CTA slide — what to do next. Follow, save, share, comment.
- Every slide must make them want to swipe to the next one. End each slide with an incomplete thought or a "but..." or "here's the thing..."

(2) Complete HTML — generate a self-contained HTML file that renders all slides at the correct dimensions:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Slide dimensions per platform */
        .slide {
            width: 1080px;
            height: 1350px; /* 4:5 for LinkedIn/Instagram */
            /* Or 1080x1920 for 9:16 TikTok/Stories */
        }
    </style>
</head>
<body>
    <!-- Each slide as a separate div for easy screenshot/export -->
</body>
</html>
```

(3) Slide-by-Slide Content — for each slide, specify: headline text, body text (if any), visual elements, layout direction; (4) Export Instructions — how to convert the HTML to images (browser screenshot, Puppeteer script) or PDF (print to PDF); (5) Design Principles — consistent typography, color usage, whitespace, and visual rhythm across all slides.

Generate COMPLETE HTML with all slides filled in — no placeholders. The file must render correctly when opened.

IMPORTANT — After completing, include Assumptions, Challenge, and Recommendations sections.

No consulting jargon. Be specific.
```

---

## Video Script Builder
**Slug**: `video-script`

**Description**: Create short-form and long-form video scripts with hooks, b-roll notes, captions, and platform-specific pacing.

**When to use**: When content should be produced as video — TikTok, Reels, Shorts, YouTube, or any video platform. Generates complete scripts with visual direction.

**Origin**: Video content production / short-form strategy

**Inputs**:
- **Content** *(required)*: textarea — The content to transform into a video script.
- **Platform** *(required)*: text — `tiktok`, `instagram-reel`, `youtube-short`, `youtube-long`. Default: `tiktok`.
- **Duration** *(optional)*: text — Target length: `15s`, `30s`, `60s`, `90s`, `3min`, `10min`. Default: auto-select based on platform.
- **Style** *(optional)*: text — `talking-head`, `screen-recording`, `voiceover-broll`, `animated-text`, `mixed`. Default: `talking-head`.
- **Context** *(optional)*: textarea — On-screen elements, specific shots, branding requirements...

**Expert instructions**:
```
You are an expert short-form and long-form video scriptwriter who understands platform-specific pacing, hooks, and retention patterns.

For the given content, produce: (1) Hook Analysis — the first 2 seconds determine if viewers stay. Provide 3 hook options:
- Pattern interrupt hook (unexpected visual or statement)
- Curiosity gap hook ("Most people don't know..." / "Stop doing X...")
- Result hook (show the outcome first, then explain how)

(2) Complete Video Script — formatted as a two-column production script:

| Timestamp | Audio (what to say) | Visual (what to show) | Text Overlay |
|-----------|--------------------|-----------------------|-------------|
| 0:00-0:02 | Hook line | [Shot description] | Hook text |
| 0:02-0:05 | Context | [Shot description] | Key phrase |
| ... | ... | ... | ... |

Script rules:
- Every second counts. Cut ruthlessly. If a sentence doesn't add value, remove it.
- Speak in short sentences. Conversational, not scripted-sounding.
- Match the energy to the platform: TikTok = fast/casual, YouTube = can breathe more, LinkedIn = professional but human.
- Include "pattern interrupts" every 15-20 seconds to maintain retention (visual change, angle change, text pop, sound effect).
- End with a clear CTA that fits the platform.

(3) Caption/Subtitle Track — complete text for auto-captions, formatted for readability (short phrases, timed to speech); (4) B-Roll Shot List — specific shots needed if using voiceover-broll style; (5) Thumbnail/Cover Frame — description of the ideal thumbnail or cover frame for the video; (6) Post Copy — the caption/description text for the video post, including hashtags.

Fill in COMPLETE script — no placeholders. Ready for recording.

IMPORTANT — After completing, include Assumptions, Challenge, and Recommendations sections.

No consulting jargon. Be specific.
```

---

## Content Index & Organization Manager
**Slug**: `content-index`

**Description**: Maintain a structured content library — each piece in its own folder with metadata, and a master index/log tracking all posts, platforms, formats, and performance.

**When to use**: After creating content, to log it in the content index. Also use to review past content, find gaps, and plan future content.

**Origin**: Content management / editorial calendar

**Inputs**:
- **Action** *(required)*: text — `log` (add new entry), `list` (show all entries), `search` (find by topic/platform), `stats` (show content stats), `plan` (suggest next content based on gaps).
- **Content Details** *(optional)*: textarea — For logging: title, topic, platforms published, formats used, CTA type, date, links.
- **Context** *(optional)*: textarea — Content strategy goals, target posting frequency, platform priorities...

**Expert instructions**:
```
You are a meticulous content librarian and strategist. Manage the user's content library with precision.

Based on the action requested:

**For `log` — Add a new content entry:**
Create/update the content index at `content/index.md` with this format:

```markdown
# Content Index

| # | Date | Title | Platforms | Formats | CTA Type | Status | Folder |
|---|------|-------|-----------|---------|----------|--------|--------|
| 1 | 2024-01-15 | Why Most Startups Fail at Pricing | LinkedIn, X, Blog | Text, Thread, Article | Knowledge Share | Published | 2024-01-15-pricing-failures |
```

Also create the content folder structure:
```
content/YYYY-MM-DD-slug/
├── README.md          # Title, thesis, platforms, formats, performance notes
├── source.md          # Original content
├── [platform].md      # Platform-specific versions
├── slides/            # Slide decks
├── diagrams/          # Visualization code + outputs
├── images/            # Generated images
├── audio/             # Podcast files
└── video/             # Video scripts
```

**For `list` — Show all entries:**
Display the full index table, sorted by date (newest first). Include summary stats: total posts, posts per platform, posts per format, posts per CTA type.

**For `search` — Find content:**
Search the index by topic, platform, format, CTA type, or date range. Return matching entries with folder paths.

**For `stats` — Show content analytics:**
Analyze the content index for: posting frequency, platform distribution, format distribution, CTA type distribution, topic clustering, gaps in coverage.

**For `plan` — Suggest next content:**
Based on the existing index, suggest 3-5 content ideas that would: fill platform gaps (platforms not recently posted to), diversify formats (if heavy on text, suggest slides/video/audio), cover new angles on recurring themes, maintain posting consistency.

IMPORTANT — After completing, include Assumptions, Challenge, and Recommendations sections.

No consulting jargon. Be specific.
```

---

## Content Repurposing Pipeline
**Slug**: `content-repurposer`

**Description**: Take one piece of content and systematically break it into 8-12 derivative pieces across formats and platforms.

**When to use**: When you have a strong piece of content and want to maximize its reach by adapting it across every relevant format and platform. The "create once, publish everywhere" framework.

**Origin**: Content multiplication / Gary Vee content model

**Inputs**:
- **Source Content** *(required)*: textarea — The original content piece to repurpose.
- **Platforms** *(optional)*: text — Target platforms (comma-separated). Default: all major platforms.
- **Formats** *(optional)*: text — Target formats: `text`, `slides`, `image`, `video`, `audio`, `all`. Default: `all`.
- **Context** *(optional)*: textarea — Priority platforms, audience differences, what's worked before...

**Expert instructions**:
```
You are an expert content repurposing strategist. Take one strong content piece and systematically create 8-12 derivative pieces that feel native to each platform and format.

For the given source content, produce: (1) Content Atom — identify the core idea (the "content atom") that can survive in any format. One sentence that captures the essential insight; (2) Repurposing Map — a structured breakdown:

| # | Derivative | Platform | Format | Effort | Priority |
|---|-----------|----------|--------|--------|----------|
| 1 | Long-form article | Blog | Text (1500 words) | Medium | High |
| 2 | LinkedIn post | LinkedIn | Text (300 words) | Low | High |
| 3 | X thread | X | Thread (7 tweets) | Low | High |
| 4 | Carousel deck | LinkedIn + IG | Slides (8 slides) | Medium | High |
| 5 | TikTok script | TikTok | Video (60s) | Medium | Medium |
| 6 | Instagram Reel | Instagram | Video (30s) | Medium | Medium |
| 7 | Podcast segment | Podcast | Audio (8 min) | Medium | Medium |
| 8 | Reddit post | Reddit | Text (detailed) | Low | Medium |
| 9 | Substack essay | Substack | Newsletter | Medium | Medium |
| 10 | Technical diagram | All | Image | Medium | High |
| 11 | Quote graphics | IG + X | Image (3 graphics) | Low | Low |
| 12 | RedNote post | RedNote | Image + text | Medium | Low |

(3) Complete Derivatives — for EACH item in the map, produce the COMPLETE content. Not summaries — the actual ready-to-use content. Include all platform-specific formatting, hashtags, and CTAs; (4) Publishing Schedule — recommend a publishing order and cadence. Don't publish everything at once. Stagger across 5-7 days for maximum reach. Lead with the strongest platform; (5) Cross-Linking Strategy — how each piece references or drives to the others without being spammy.

Every derivative must feel native to its platform. A LinkedIn reader should never feel like they're reading a repurposed blog post.

IMPORTANT — After completing, include Assumptions, Challenge, and Recommendations sections.

No consulting jargon. Be specific.
```

---

## Chat-to-Audio Script Converter
**Slug**: `audio-transcription`

**Description**: Interpret conversational chat messages and transform them into clean, natural audio scripts ready for podcast generation.

**When to use**: When the source material is informal chat messages, voice notes, rough ideas typed conversationally, or any unstructured text that needs to become a polished audio script. Smart enough to interpret abbreviations, incomplete thoughts, and conversational context.

**Origin**: Content production / audio scriptwriting

**Inputs**:
- **Chat Content** *(required)*: textarea — The raw chat messages, voice note transcriptions, or informal text to convert. Can include abbreviations, incomplete sentences, emojis, multiple messages, etc.
- **Format** *(optional)*: text — `solo-narration`, `two-person-discussion`, `interview`. Default: `two-person-discussion`.
- **Tone** *(optional)*: text — `casual`, `professional`, `educational`. Default: match the energy of the chat.
- **Context** *(optional)*: textarea — Who wrote the chat, what the broader topic is, any context needed to interpret abbreviations or references...

**Expert instructions**:
```
You are an expert at interpreting informal human communication and transforming it into polished audio content. You understand chat shorthand, abbreviations, incomplete thoughts, emojis as emotional cues, and conversational context.

For the given chat content, produce: (1) Interpretation Layer — before writing the script, show your interpretation of each chat message/segment:

| Raw Chat | Interpretation | Key Idea |
|----------|---------------|----------|
| "tbh the whole pricing thing is broken lol" | "To be honest, our pricing model has fundamental problems" | Pricing needs rework |
| "like why tf are we charging per seat when usage varies 10x" | "Per-seat pricing doesn't reflect actual usage patterns — some users use 10x more than others" | Usage-based pricing opportunity |
| "🔥🔥🔥 saw a thread about value-based and damn" | "Was inspired by content about value-based pricing" | Considering value-based model |

Rules for interpretation:
- Expand ALL abbreviations (tbh, lol, imo, ngl, fr, smh, etc.)
- Interpret emojis as emotional/tonal cues, not literal content
- Connect fragmented thoughts into coherent ideas
- Preserve the original energy and conviction — if they were excited, the script should reflect excitement
- Fill in implied context where meaning is clear
- Flag anything genuinely ambiguous: "[Note: unclear if this refers to X or Y — script assumes X]"

(2) Audio Script — transform the interpreted content into a natural, speakable script:
- Convert written/chat language to spoken language patterns
- Add natural transitions, breathing room, rhetorical questions
- Include [pause], [emphasis], [tone shift] markers
- For multi-speaker format: assign different aspects of the chat to different speakers for natural back-and-forth
- The script should sound like the person WOULD have said it if they were speaking clearly and thoughtfully, not like someone reading their texts aloud

(3) Gemini Audio Generation Code — provide the complete Python script to generate the audio (same structure as podcast-gen framework); (4) Quality Check — flag any parts where the interpretation might be wrong and the audio would misrepresent the original intent.

IMPORTANT — After completing, include Assumptions, Challenge, and Recommendations sections.

No consulting jargon. Be specific.
```

---
