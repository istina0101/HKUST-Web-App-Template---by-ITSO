# HKUST Web · design system

**v1.0 · reviewed by ITSO, 4 Sep 2026** · light theme · English (+ 黑體 stack for Chinese) · admin density

A general design system for HKUST staff-facing web applications, derived from the style of the ITSO **IAM self-service portal** prototype (v4). The portal is the reference instance, not the subject: everything here is meant to be reused for any HKUST web app, and packaged as a skill (see `SKILL.md`).

## Context

- **Organisation:** The Hong Kong University of Science and Technology (HKUST) · Information Technology Services Office (ITSO).
- **Reference product:** IAM Portal — a staff identity workspace: Home & Apps (SSO launcher), Sign-in & Security (MFA, self-service password reset), Request Access (catalogue, copy a colleague, cart), My Requests, My Current Access, Approvals, Access Certification, Team lifecycle, Team members, Identity profiles, Lifecycle ops, Audit log. Navigation is gated by persona (FO Manager, FO Department Admin, JSPM Resource Owner, ITSO Identity Admin; a second business case adds ITSO Manager, ITSO Department Admin, RO Manager).
- **Audience:** HKUST staff and faculty using internal tools; ITSO teams building them.

### Sources
- IAM Portal prototype v4 (`index.html`, single-file prototype) — source repository and live URL held by ITSO.
- Attached codebase: `deploy/index.html` — identical to the repo file (2,021 lines; CSS tokens, layout, 65 embedded Lucide glyphs, seed data).
- Logos supplied by the user (4 PNGs) → `assets/logo/`.
- HKUST brand (Dec 2025) as encoded in the prototype's `:root`: navy `#003366`, gold `#996600`, yellow `#cc9900`; ITSO blue `#0054a6` / `#29abe2`, orange `#f7941d`; Muli/Mulish typeface.

## Decisions taken with the owner (Sep 2026)
Scope = the IAM portal as coded **plus** a general HKUST web-app layer (standard primitives and data-viz added, marked as intentional additions). Light only. English only. Admin density only. Fidelity rule: normalise to one rule where the prototype is inconsistent — font sizes snapped to a fixed ramp, one button padding per size, one card padding, one badge/callout tint set; every other value kept exactly. Persona switcher kept in the IAM kit. Sample data for generic screens is neutral HKUST content (a research-computing portal), not IAM cases. Build order: IAM set first.

---

## CONTENT FUNDAMENTALS

**Voice.** Institutional, plain, confident, helpful. The product speaks as "we" only implicitly (it rarely says "we"); it addresses the user as **you** and names people and systems concretely: "Your single sign-on workspace", "Everything you hold today, with expiry where it applies", "Decisions waiting on you".

**Casing.** Page titles and nav labels are **Title Case** ("Request Access", "My Current Access", "Sign-in & Security"); everything else is **sentence case** ("Copy a colleague's access", "Add a method", "Submit my decisions"). Eyebrows and table headers are ALL CAPS via CSS (never typed in caps). Buttons are sentence-case verbs: "Request an app", "Reset my password", "Add selected (2) to cart".

**Middle dots.** The prototype's signature punctuation is the spaced middle dot ` · ` joining facts: "Manager · Finance Office", "iPhone · added 12 Jan 2025", "Sensitive · time-bound", "Q2 2026 · Sensitive Access Review". Use it instead of commas, pipes or slashes for metadata.

**Arrows.** Inline links that navigate end with ` →`: "Manage sign-in →", "View roles →", "Enter case →". Never "Click here".

**Dates.** `DD Mon YYYY` ("04 Aug 2026"), times `HH:MM` 24-hour ("18:00"). IDs are uppercase prefixed ("LVR-2213", "UST-P-0045210", "TRF-1027").

**Explanations, not warnings.** Callouts state the rule and its consequence in one or two sentences: "This takes effect immediately and is written to the audit log. Your manager is notified for the record." No exclamation marks anywhere in the product. No emoji.

**Names.** First mention: *The Hong Kong University of Science and Technology*; then **HKUST** (never "THKUST"). ITSO = Information Technology Services Office. Person names follow HR style: `SURNAME Given Name` ("WONG Ka Ming") or a single given name in demos.

**Empty and system states** are short and directive: "No events in this view — Switch filter to see other team events."

---

## VISUAL FOUNDATIONS

**Colour.** Navy `#003366` carries the brand: the 60px top band, headings (`--fg1`), the case-selector cover, toasts, modal scrims (45% navy). ITSO blue `#0054a6` is the *action* colour: primary buttons, links, focus, active nav bar, switch-on, progress fill, step "active". Gold `#996600` is reserved for eyebrows and the "approval" tint; yellow `#cc9900` only as an eyebrow on navy. Orange `#f7941d` appears only as counters (nav counts, cart badge, notification dot). Light blue `#29abe2` is the hover outline on hero cards and the second chart series. The page is `#f6f8fb`; cards are white with a `#d8dee8` hairline. Status colours: success `#009a61`, warning `#faa61a`, danger `#ed1b2f`, info `#0074bc`; their **tints** (bg / border / fg) are one shared set for badges, callouts, icon boxes and selected segments (`--tint-*`).

**Type.** Muli — HKUST's official content typeface, self-hosted (`assets/fonts/`, 10 faces 200–700 upright + italic, supplied by ITSO); Mulish from Google Fonts is only a network fallback. Weights: 400 body, 600 nav/labels/chips, 700 headings/buttons/badges/stats/hero titles — the set has no 800 face and `font-synthesis: none` stops browsers faking one. Chinese text: the brand 黑體 — 蘋果儷黑體 (LiHei Pro) on macOS, 微軟正黑體 (Microsoft JhengHei) on Windows — both OS-bundled and not redistributable, so `--font-body` names them after Muli and falls back to PingFang TC, then Noto Sans TC from Google Fonts; `--font-tc` is the Chinese-only stack. Ramp `11 · 12 · 14 · 16 · 20 · 24 · 32` (see `guidelines/type-mapping.html`). Headings `line-height 1.2` with `text-wrap: balance`; body 1.5 with `text-wrap: pretty`. Caps labels track `.12em` (nav groups, menu headers) or `.16em` (eyebrows); table headers `.04em`.

**Spacing.** 4px grid for layout: card grid gap 16, section gap 22–24, content inset 26px 32px 64px. Component insets keep the prototype's exact values (card 22, card header 18/22, table cell 13/14, badge 3/9, chip 6/13); buttons, inputs and selects are fixed at 40px tall (sm 32px) with 16px / 13px horizontal insets. Max content width 1320px.

**Backgrounds.** Flat. Pale grey page, white cards, solid navy band and cover. No photography, no illustration, no gradients, no patterns, no textures. (The HKUST brand allows a 135° diagonal stripe on slides only — not used in apps.)

**Corners.** Small: 2px tags, 4px controls/badges/chips/inputs/nav rows/avatars/icon boxes, 8px cards and modals, pill only for switch, progress bars and counters. Never large rounding.

**Borders.** 1px `#d8dee8` hairlines everywhere (cards, table rows, inputs, chips, dividers); `#9aa6b8` for hover/strong. On navy: 1px white at 40% (unit rule), 35% (band switch outline), 25% (user divider).

**Shadows.** Three navy-tinted levels: `sm 0 1px 2px .06` (switch knob), `md 0 4px 12px .10` (card hover, tooltips), `lg 0 12px 32px .14` (modals, menus, toast, hero cards). Resting cards have **no** shadow — border only. No inner shadows.

**Hover / press.** Buttons darken (primary → navy; ghost → grey fill + stronger border; link → grey fill), 120ms. Cards that are links lift 1px with the medium shadow and stronger border, 150ms. Nav rows fill pale grey. Hero cards get a 3px light-blue outline and lift 2px. Press: `translateY(1px)` on buttons. Links: colour only (no underline in the app; underline on hover in prose).

**Focus.** Inputs: ITSO-blue border + `0 0 0 3px rgba(0,84,166,.12)` ring.

**Motion.** Plain `ease`, 120/150/200ms; toast fades and slides 16px in 180ms; sidebar drawer slides 200ms on mobile. No springs, bounces, marquees, or blur. Animate colour, opacity, transform only.

**Layout.** Fixed band (60px, z 40) · fixed sidebar (248px, z 30) · sticky page head under the band (z 20) · content column. Modal z 60, toast z 80, case cover z 200. Breakpoints: 1080 (4→2 columns), 880 (sidebar becomes a slide-in drawer with a 42% navy backdrop; band hides the unit block), 760 (single column; tables "cardify" into stacked rows with data-labels).

**Transparency and blur.** Only for scrims (45% navy) and on-navy hairlines/hovers (10% white). No frosted glass.

**Imagery.** None in the product; identity is carried by type, navy and Lucide glyphs. If imagery is ever added: natural light, cool/neutral cast, no stock clichés.

**Cards.** White, 1px border, 8px radius, 22px padding, no shadow at rest; flush variant for headers/tables; hover lift only when the card is a link.

**Data-viz.** Square bars, 2px lines, white-filled dots, `#ebf0f5` grid, `#8c8f90` 11px axis text, series in `--viz-1…6` (ITSO blue, light blue, gold, orange, green, grey). Hover: white tooltip card (hairline border, medium shadow, navy title, series swatches) so it contrasts with every series colour; hovered mark emphasised (others dim / dots enlarge / dashed guide) — identical in the SVG charts and the Chart.js theme.

---

## ICONOGRAPHY

- **System:** [Lucide](https://lucide.dev) — 24×24 grid, 2px stroke, round caps and joins, `currentColor`, no fills. The prototype embeds 65 glyphs inline (`window.__ICONS`); this system copies them verbatim into `components/core/Icon.jsx` (`ICONS`) and adds 13 standard Lucide glyphs (chevrons, settings, download, filter, trending-up/down, external-link, log-out, inbox, more-horizontal, wifi-off) for the added components — those additions are typed from the Lucide set, not copied from the prototype.
- **Sizes:** 18 default (nav, callouts, inputs) · 15 small (buttons in rows, small icon boxes) · 22 in 42px icon boxes · 16 in buttons · 13 in badges · 30 in empty states.
- **Colour:** icons inherit text colour; in nav they are `--fg3` (active `--itso-blue-dark`); in the band `#cdd8e6`; status icons use the base status colour inside tinted boxes.
- **Icon boxes** (tinted squares) are categorical: navy apps/departments, cyan data systems, green people/HR, gold finance/approvals, red destructive, grey not-set-up.
- **No icon font, no PNG icons, no emoji, no unicode glyph icons** except the typographic middle dot ` · ` and arrow ` →` in copy.
- **Logos:** `assets/logo/hkust-fullname-white.png` (band, 34px tall, left), `hkust-fullname-color.png` (light surfaces), `hkust-mark-color.png` / `hkust-mark-white.png` (compact mark). Clear space ≥ ⅓ logo height; never recolour, stretch or centre; the Red Bird sundial is a registered mark — never redraw it. ITSO has no separate wordmark in the sources; the unit name is set in type next to the logo.

---

## Components

All components live under `components/<group>/` as `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`; each group has one `@dsCard` showcase. Styling is inline and token-driven; the only dependency is React.

**core/** — Icon, Button, IconButton, Badge, Tag, Chip (+ChipGroup), Avatar, IconBox, Card (+CardHeader, CardFooter, SectionTitle, Divider)
**forms/** — Input, Textarea, Select, Field, Switch, OptionRow, Checkbox, Radio, SegmentedControl, Combobox*, MultiSelect*, FileUpload*
**feedback/** — Callout, Toast, EmptyState, Modal (+CloseButton), Tooltip*, Progress, NotificationBanner*, NotificationPanel*, Skeleton* (+SkeletonTable, SkeletonCard), Spinner*, Drawer*
**navigation/** — TopBand (+BandSwitch), Sidebar (+NavLabel, NavItem), PageHead, Tabs*, Breadcrumb*, Pagination*, DropdownMenu (+MenuItem)
**data/** — Table (+BulkBar, SortRows), KeyValueList, StepTracker, ActivityList, StatTile, KpiDelta*, BarChart*, LineChart*, Accordion* (+Disclosure)

### Intentional additions (*)
Not in the IAM prototype; added for the general web-app layer in the same style: **Tabs** (content panes — the portal uses Chips for filters), **Tooltip** (icon-only controls), **Breadcrumb** (detail pages), **Pagination** (long tables), **KpiDelta**, **BarChart**, **LineChart** (SVG, dependency-free) and the **Chart.js theme** (`assets/chartjs/hkust-chartjs-theme.js`). Second wave (Sep 2026, agreed with the owner): **NotificationBanner** (full-width notice under the band, always dismissible), **NotificationPanel** (bell dropdown with Mark all as read + View), **Skeleton** (shimmer) and **Spinner** (section centre), **Drawer** (right, 480px, closes by its × only), **Accordion** (one open at a time), **Combobox** (typeahead with avatar rows), **MultiSelect** (checkbox dropdown showing a count, never tags), **FileUpload** (drag-drop zone, progress and error rows), and **Table** sorting (▲▼ always shown), row-selection checkboxes and **BulkBar**. **Icon** is a wrapper the prototype implements procedurally. **Sidebar `title` + `collapsible`** (header row with system name and a panel toggle to a 64px icon rail) is also an addition; the prototype only has the ≤880px drawer.

### Normalisation log (prototype → system)
- Font sizes 10–30px (16 values) → ramp 11/12/14/16/20/24/32; body default 15 → 14.
- Badge tints (`b-*`) and callout tints (`co-*`) → one `--tint-*` set (info uses the brand-light pair `#e6ecf3` / `#0054a6`; callout borders kept from `co-*`).
- Card padding 20–22 → 22; card header/footer rows 18px 22px / 14px 22px; approval cards, request items and MFA rows use the same values.
- Buttons fixed at 40px (md) / 32px (sm) tall with `0 16px` / `0 11px` insets so they match inputs and selects; the prototype's padding-driven heights were 41px / 31px.
- Form controls: one spec for text, password, date, search and select — height `--control-h` 40px (sm select 32px), radius 4px, 14px/20px text, `0 13px` inset (38px left with an icon), native appearance reset. The prototype used 10px 13px padding and native heights, which drift for `type=date`.
- Everything else (radii, shadows, band/sidebar sizes, table paddings, colours) copied exactly.

---

## UI kits
- `ui_kits/iam-portal/` — recreation of the IAM portal: Case selector, Home & Apps, Request Access (+ role and cart modals, toast), Team lifecycle, Team members; persona switcher gates the sidebar. Other pages show a labelled placeholder.
- `ui_kits/hkust-web-app/` — generic sample app (Research Computing portal): Dashboard (banner, bell panel), Projects list (sort, select, bulk bar), Requests, Project detail (member drawer), Request wizard (combobox, multi-select, upload), Settings (accordion), Empty & error states (skeleton, spinner).

## Templates
`templates/<slug>/<Slug>.dc.html` — starting files consuming projects can copy: **Admin dashboard** (shell + stat tiles, charts, table, activity), **List page** (filters, sortable table, pagination), **Record detail** (breadcrumb, tabs, key-value, activity), **Form wizard** (3 steps). Each loads the system via its sibling `ds-base.js`. All are responsive: the sidebar collapses to a 64px rail from its header toggle and becomes a drawer ≤880px; tables stack ≤760px.

## Documentation site
`site/` is a static docs site (Getting started, foundations, layout, five component pages with live examples + props + JSX, templates gallery, voice, do & don't, changelog). The root `index.html` redirects to it; `vercel.json` sets clean URLs and font caching.

### Deploying
1. Push the whole project to the organisation's GitHub repository (private — the Muli files are HKUST-licensed).
2. In Vercel: Add New Project → Import Git Repository → Add GitHub Account → choose the organisation. An org owner approves the Vercel GitHub App for this repo; your personal Vercel account can then deploy it (Hobby plan requires that you personally have commit access). Framework preset: Other; no build command; output directory: root.
3. If org approval stalls, mirror the repo to a personal GitHub account for Vercel and keep the org repo as the source of truth. GitHub Pages also works if the org has Enterprise Cloud (private Pages), since the site is plain static files with relative links.

## Index
- `styles.css` — entry; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `layout.css`, `base.css`.
- `tokens/` — CSS custom properties (base + semantic aliases).
- `assets/logo/` — four logo PNGs · `assets/fonts/` — Muli (10 TTF faces) · `assets/chartjs/hkust-chartjs-theme.js`.
- `components/` — see above.
- `guidelines/*.html` — 20 foundation cards (Colors, Type, Spacing, Effects, Layout, Brand, Data Viz) · `guidelines/spec/` — spec pages for humans (foundations, spacing, layout, components anatomy & states, do's & don'ts, voice & copy).
- `ui_kits/` — two kits, each with its own README · `templates/` — four DC templates.
- `thumbnail.html` — homepage tile · `github.md` — source association · `SKILL.md` — agent skill wrapper · `hkust-web-design-skill.zip` — packaged skill · `site/` — docs site · `vercel.json`.

## Caveats
- **Fonts:** Muli is self-hosted (10 faces, no ExtraBold — everything ≥ 800 was mapped to 700). Chinese 黑體 faces are OS-bundled, so on machines without them text falls to Noto Sans TC (Google Fonts) — visually close but not identical.
- Added Lucide glyphs (13) were typed from the Lucide set rather than copied from the prototype — verify against lucide.dev if pixel parity matters.
- The 4px font-size rule was applied as a 4px step from 16 upward with 11/12/14 below (pure 4px steps would collapse admin density) — see `guidelines/type-mapping.html`.
- Responsive behaviour is implemented in TopBand (menu button, unit hidden ≤880), Sidebar (drawer ≤880) and Table (stacked rows ≤760); the sidebar header row (system name + collapse-to-icon-rail toggle) is an intentional addition not present in the prototype.
- Slide/document templates are out of scope by decision: this is a web-app UI system; PowerPoint and document branding is covered by the separate HKUST-ITSO deck skill.
