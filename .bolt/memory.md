# Project memory

## Product intent & audience

- VOLT GYM website (Arabic, RTL). Audience: gym visitors needing quick info on training hours, programs, classes, coaches.
- Core goal: surface key info (e.g. opening hours) within seconds, minimal navigation.

## Brand personality & voice

- Premium, minimal, modern. VOLT GYM identity.
- Arabic-first copy; content stays exact as provided by owner.

## Visual design & UX direction

- Palette: premium black background, white typography, VOLT red `#E52430` accents.
- Mobile-first; responsive day/time layouts (stack on mobile, side-by-side on desktop).
- Patterns: tab-based section switches, red time badges, small icons, subtle transitions.
- Avoid: large tables, excessive cards, complicated animations, unnecessary text.
- Nav links scroll to sections and highlight active state on scroll.

## Decisions, constraints & rationale

- Stack: Vite + React. Existing sections use static data files + tab patterns; new sections follow same approach.
- Schedule data is hardcoded in-section (matches classes/coaches pattern); one-line edit if hours change.
- "مواعيد التمرين" section placed on homepage after programs section; nav link added (desktop + mobile menu).
- Men/women tabs show only selected group's schedule instantly.
- Friday status highlighted distinctly (men: hours; women: "إجازة" with closed icon).
- Gym opening hours kept separate from karate schedule and group class info — do not merge.
- Do not redesign whole site; preserve existing identity and functionality.
- Schedule days/times must remain exactly as provided; no invented hours.

## Open questions & assumptions

- No `.bolt/prompt` authored yet; global instructions may be added later.
- Visual QA done via code review only (no browser in environment) — verify rendering on real devices.
- Assumed homepage section order: programs → mo3aadeed altamreen; confirm if other sections follow.