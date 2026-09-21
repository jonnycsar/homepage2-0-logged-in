# Nalu Design System — Atolls

**Nalu** is the unified design system of **Atolls** (part of Global Savings Group), powering the
white-label consumer **cashback, coupons & deals** experiences across the group's brand portfolio.
The name *Nalu* is Hawaiian for "wave / surf" — the system is pitched around "smooth, clean,
tranquil" interactions.

This project is a **design-agent-ready recreation** of Nalu, derived from the real component
library and the live brand themes. Use it to produce on-brand interfaces, mocks, slides and
prototypes for any Atolls brand.

> **Default brand = Igraal** (`fr.igraal.com`), a French cashback leader. Nalu is **multi-brand**:
> the same token *names* are re-skinned per brand. `colors_and_type.css` carries the Igraal
> defaults; `brands.css` adds `[data-brand="…"]` overrides for **15 other brand themes** (Shoop,
> Coupons, Focus, DailyMail, Cuponation, Radins, El País, Gazzetta, CNN, JyllandsPosten,
> Kortingscode, BusinessInsider and Pepper ×3) — real values from each brand's tokens. Set
> `data-brand` on a wrapper to switch theme. See **Multi-brand theming** below.

---

## Versioning

**Current version: `1.19.0`** · Status: stable.

Nalu follows **semantic versioning** (`MAJOR.MINOR.PATCH`):
- **MAJOR** — breaking changes to token *names*, component APIs, or the namespace
  (`window.DesignSystem_6a9729`) that consuming projects must migrate to.
- **MINOR** — additive, backward-compatible: new tokens, components, templates, brands or docs.
- **PATCH** — fixes and doc/value corrections that don't change any public name or API.

Record every change here, newest first. Keep an `Unreleased` heading at the top for work in
progress; cut it to a dated version when released.

### 1.19.0 — nalu-react 1.203.1 sync · ProgressTracker · 2026-09-11 token build · Useberry in templates · 2026-09-11
- **Synced to `@atolls/nalu-react` v1.203.1** (previous sync: v1.198.1). Ported:
  - **`ProgressTracker` + `ProgressTrackerItem`** (`components/data-display/`, new in 1.203.0,
    NALU-2306) — vertical status timeline: a 32px round badge + 2px connector marker column beside
    a title / supporting-text column, PRIMARY appearance and LARGE size (the only tier upstream
    ships). States `success` (always the check icon, runs the connector in brand colour),
    `idle` (the current step — carries `aria-current="step"`) and `disabled` (upcoming, the
    default); `success`/`disabled` also announce themselves in words to screen readers. Badge
    shows `icon` over `number`, falling back to `-1` when given neither, exactly as upstream.
    `headerSlot` (under the title) and `slot` (`slotPosition` `middle` | `bottom`) are
    both supported; the tracker owns `isLast` and hides the final connector. New
    **ProgressTracker** card under Components.
    *FLAGGED:* the `_raw/` token snapshot predates the component, so no `.progresstracker*`
    blocks exist yet — sizes/type are hand-resolved from the dimension + typography scales and the
    Stepper large tier. Re-resolve when a newer `dist/` lands.
  - **`Tag` is now `white-space: nowrap`** (1.200.0, FDEL-2187) — tags no longer break
    mid-label; wrapping stays the container's job (`TagsGroup` already wrapped).
  - **`Snackbar` goes full width below 648px** (1.201.0, NALU-2326) — 16px side insets, matching
    the library's mobile-only override on every position variant.
  - **1.203.1 (badge state classes resolved inside the render)** is an internal refactor upstream
    with no rendered difference — nothing to port.
- **Not applicable:** `AtollsBrands`'s expanded logo set and dropped monochrome variant (1.202.0,
  NALU-2305) — that component isn't ported (the DS ships `BrandMark` for `[data-brand]` shell
  logos instead), and `BrandMark` never had a monochrome variant. The `topBannerWrap` border
  prop (1.199.0, FDEL-2184) has no counterpart either: no such component exists in the package
  source tree.
- **Token snapshot refreshed** — `_raw/build-2026-09/` added from the 2026-09-11 `dist/` build
  (all 15 brands; Gazzetta still absent upstream and keeps its hand-resolved theme). After
  normalising the build's selector-order and float-precision noise:
  - **`ProgressTracker` tokens now exist** (`.progresstracker.s-lg`, `.progresstrackeritem.a-p`,
    `.progresstrackeritem.s-lg`) — the component above was re-resolved from them, replacing the
    hand-resolved first pass: **24px** badge (was 32), 16px badge icon, 12px marker column gap
    (item `gap`), 2px marker gap, 4px tracker gap, 20px step padding-bottom, title **14px/24px/700**,
    supporting text **12px/20px/500**, badge number 12px/16px/400. Colours also changed: the
    completed run is the **green success ramp** (not brand primary) and the current (`idle`) badge is
    a **solid ink fill with a white glyph**. Raw per-brand blocks mirrored into
    `component-tokens.css`; *CNN's build is unchanged from 2026-08 and ships no
    `progresstracker` block yet, so CNN falls through to the base values.*
  - **12 new button tokens per brand:** `--button-{primary,secondary}-{high,medium,low}-{label,icon}-disable`.
    iGraal values added to `colors_and_type.css`; the 12 brands that differ get override blocks in
    `brands.css` (Kortingscode's full blue-grey set, Pepper Secondary's `hsl(0 0% 20%)` medium label,
    the rest one `medium-icon-disable` step).
  - **`Accordion` gained 16px horizontal padding** on header and content (was 0). The iGraal footer
    accordions keep their flush-left chrome padding via an explicit override.
  - **`ListItem` type step-up:** title line-height 20px → 24px, supporting line 14px → 16px/24px.
  - **`BannerCard` title now takes the brand title face** (the build emitted Inter for every brand
    before) — `--typography-title-font-family-large` in the component, per-brand
    `--title-fontFamily` added to the mirrored blocks.
  - **Pepper ×3 CTA ramps moved** (a real brand change, not noise): Primary orange
    `hsl(19.909 93.22% 53.725%)` → `hsl(22.8 99.206% 49.412%)` (with matching hover/pressed/tints),
    Tertiary cyan `hsl(189.424 100% 37.451%)` → `hsl(184.48 100% 34.118%)`, and all three share a new
    Exclusive-tag violet `hsl(252.99 66.337% 60.392%)`. Pepper Secondary's green button values already
    matched the new build.
  - **No renamed or removed tokens.** Cuponation's `--section-content-wrap-max-width` rose to the
    1296px default (the DS never carried the 1024px override), and the two **intentional deviations**
    stand: DailyMail's blue primary CTA and Focus's pure-black `--content-default`.
- **Useberry live-URL test script** added as the last element of `<body>` in all three templates
  (`templates/igraal-desktop/index.html`, `templates/igraal-mobile/index.html`,
  `templates/extension-popup/ExtensionPopup.dc.html` — in the DC's document wrapper, outside
  `<x-dc>`, so a full DC rewrite would need it re-added).
- **Unchanged and re-verified:** Button's responsive label styling (CCT-4478) is still absent from
  the emitted `.button.*` blocks, so it remains unportable until a newer token build lands.

### 1.18.0 — nalu-react 1.198.1 sync · 2026-08-20 token build · brand token fall-through fixed
- **Synced to `@atolls/nalu-react` v1.198.1** (previous sync: v1.195.0). Two portable changes:
  - **`PredefinedTag` → Exclusive icon is now `diamond-01`** (was `star-06`) — FDEL-2148, 1.198.0.
    Colours still come from the brand `--special-tag-*` tokens.
  - **`ValueOfferCard` breakpoint off-by-one fixed**: tablet+desktop now share one grid from
    **≥648px** (source `breakpoints.tablet`), mobile-only rules at **≤647px** — the DS previously
    switched at 649px, so at exactly 648px it showed the stacked layout where the library shows the
    wide one (1.198.0, FDEL-2148).
  - Already in place from earlier syncs, re-verified against 1.198.1: `ValueOfferCard`'s
    `valueAnnotation` / `showTitleOnMobile` / optional `title` (1.196.0) and `SystemMessage`'s
    optional `title` (1.198.0).
  - **Not portable:** Button's responsive label styling (CCT-4478, 1.197.0) is delivered through the
    token build's `--button-*` typography tiers, not the component source. Re-checked against the
    **2026-08-20** `dist/` snapshot: the emitted `.button.*` blocks still carry no `font-size` /
    `line-height`, so the tiers aren't in the token pipeline yet and there is nothing to port.
- **Token snapshot refreshed** — `_raw/build-2026-08/` replaced with the 2026-08-20 `dist/` build
  (all 15 brands; Gazzetta still absent upstream and keeps its hand-resolved theme). Diff vs the
  previous snapshot, after normalising the build's selector-order and float-precision noise:
  - **Cuponation** is the only brand whose values moved — Roboto → Inter, `--button-corner-radius`
    4px → 99px, and the primary CTA on the pink primary ramp. This is exactly the theme already in
    `brands.css`, so upstream now **confirms** that refresh; no further edit needed.
  - **Pepper ×3** gained bundled `@font-face` rules for Inter, but every `--typography-*-font-family`
    still resolves to Averta CY — no token change, so the DS is unaffected.
  - **No new, renamed or removed tokens** in any brand, and no new component token blocks.
  - Two **intentional deviations** re-confirmed rather than adopted: DailyMail's primary CTA stays
    blue (upstream emits a light-grey ramp with a white label — unreadable), and Focus keeps
    pure-black `--content-default` (upstream `hsl(0 0% 5.098%)`).
- **Cuponation theme refreshed** from the brand's current `style-guide.css`: type switched from
  Roboto to Inter across all roles, `--button-corner-radius` 4px → 99px (full pill), and the
  primary CTA moved from the orange accent to the pink primary ramp
  (idle `primary-60`, hover `primary-50`, pressed `primary-40`). Links stay warm orange.
  Added `--content-subtle`, `--brands-logo-background-color`, `--border-outline`
  and `--campaigns-primary` / `--campaigns-secondary` to the brand block.
- **Fix — black outline on Cuponation buttons.** The brand block overrode the button *backgrounds*
  only, so every button border fell through to the iGraal default `hsl(0 0% 5.098%)` and the pink
  CTA rendered with a near-black ring. The block now carries the brand's **full 52-token button
  matrix** from its own build (borders, labels, icons, medium/low emphasis, focus/pressed states);
  primary/secondary high buttons take the brand's **white** idle+hover border, and the outlined
  medium variants take the pink ramp instead of black.
- **Same fall-through fixed for every other brand.** The audit found the identical gap in 13 more
  themes — Coupons, Focus, DailyMail, Radins, El País and CNN were missing all 21 button *border*
  values plus their medium/low label+icon sets (49 tokens each); Shoop, JyllandsPosten,
  Kortingscode, BusinessInsider and Pepper ×3 were missing the focus-state borders (17 each). Each
  brand block now carries its own build's complete button matrix. The base set in
  `colors_and_type.css` gained the 17 tokens the build emits that it never declared (focus states,
  `*-medium-idle-forground2`, `*-low-*-color`, secondary-high label/icon), so nothing falls back
  to an unrelated value any more. DailyMail is the one exception: its high-emphasis borders follow
  the DS's deliberate blue CTA instead of upstream's black-on-grey. One upstream value stays
  rejected in the base: the build gives `--button-secondary-high-label`/`-icon` a white value while
  the idle background is also white — the base keeps the near-black label (every brand overrides
  that background with a dark colour, so their white labels are correct).
- **Same audit run across every other component — `component-tokens.css` regenerated.** The button
  fall-through was systemic, not button-specific: each brand block only carried the values someone
  had noticed, so the rest resolved to iGraal's. Worst cases were IconButton (up to 62 unmapped
  declarations per brand), Island (37–46, several variants had no block at all), Button (30–92),
  and CNN/DailyMail/Radins where ~250–300 declarations across 30 components were falling through
  (Fab, Switch, Tag, Link, Chip, SystemMessage, Badge, Checkbox, Radio, Star, Stepper, EmptyState,
  SearchInput, InputField, ToggleButton, LogoOfferCard, FeaturedOfferCard, OfferCaption, …).
  The file is now **generated** from the 2026-08-20 build: iGraal base + a complete per-brand diff
  (205–680 overrides each), including the `@media` 648px/1200px responsive blocks, which previously
  had no per-brand layer at all. Re-audit: **0 unmapped declarations** for all 15 brands.
  Also corrected in the base: `.bannercard.s-lg --ratio-height` 120px → 80px and the missing
  `.island.e-*` / `.valueoffercard` blocks. Gazzetta still inherits the base.

### 1.17.0 — token build sync (2026-08): ValueOfferCard state split · offer-card token renames
- **Token build synced to the 2026-08 `dist/` output** (previous snapshot: 2026-07; archived in
  `_raw/build-2026-08/`, all 15 brands). The pipeline re-emitted the offer-card family, so
  `component-tokens.css` changes shape as well as values:
  - **ValueOfferCard gained a real state split**: `.valueoffercard.a-p` → `.a-p.stt-vld` /
    `.a-p.stt-exp`, so `state="expired"` now has values instead of being a markup-only hook —
    title/subtitle/footnote/body/value-caption grey to 60%, trigger label + icon to 40%. Implemented
    on `.nalu-voc--expired`, and the card page demos it.
  - **New `--valueCaption-*` typography** (Inter 14/20/400) and `--subtitle-wrap-gap` renamed to
    `--subtitleWrap-gap`.
  - **ValueOfferCard's desktop step-up moved from ≥1200px to ≥648px** (title 20/24/700, subtitle
    26/30, padding 24, gaps 24/12) — the DS media queries now match, so the wide layout and the
    larger type arrive together at the tablet breakpoint.
  - **LogoOfferCard's block split** into `.logooffercard.a-p` + `.s-lg` with unprefixed names
    (`--gap-horizontal/-vertical`, `--LOC-ratio-size`, `--detailsTrigger-label-*`) replacing the
    `--logoOfferCard-*` set. Values match what the component already rendered.
  - **OfferCard's colours de-prefixed** (`--offerCard-*` → `--background-color`, `--title-color`,
    `--border-color`, + new `--eyebrow-color` / `--footNote-color`), `--body-*`/`--sponsored-*`
    replaced by `--eyebrow-*` / `--footnote-*` / `--label-*`, and **subtitle dropped 14/20 → 12/16**
    (ported). CNN's brand build still ships the legacy `--offerCard-*` names — kept verbatim.
  - **`.ratio` gained `--radius: 4px`**, so `AspectRatio radiusOff={false}` (LogoOfferCard's logo)
    now rounds at 4px instead of the DS's earlier 12px assumption.
  - Class-order renames with no value change: `.iconbutton.e-*.a-*` → `.a-*.e-*`,
    `.chip.s-lg.st-*` → `.chip.st-*.s-lg` (now also carrying `--padding-right`), `.button.nd-*`
    (base `--padding-right`) and the ≥1200 block's `.button.st-*` (`--padding-left`).
  - Per-brand diffs regenerated for the offer-card family across all 14 themed brands.
- **Not ported:** the build's icon-state button/chip paddings (`nd-on`/`nd-off`, `st-on`/`st-off`)
  are recorded in `component-tokens.css` but not applied — the DS's `Button`/`Chip` padding ramp is
  its own hand-tuned scale and changing it would shift every existing page.

### 1.16.0 — card-group reorganisation + demo corrections
- **Dedicated "Cards" group on the Design System tab** — `OfferCard`, `ValueOfferCard`,
  `FeaturedOfferCard`, `LogoOfferCard` and `BannerCard` moved out of "Components" into their own
  group, so the current offer-card family reads as one set. Card-page grouping only; no component,
  API, token or styling change.
- **`BaseCard`, `HorizontalBaseCard`, `VerticalBaseCard`, `VerticalBaseCardLite` moved to a
  "Deprecated soon" card group.** They stay registered components with unchanged APIs and styling —
  only their Design System tab group and card subtitles changed, so they read as legacy while the
  newer offer cards (`OfferCard`, `ValueOfferCard`, `FeaturedOfferCard`, `BannerCard`,
  `LogoOfferCard`) are the ones to build with.
- **Demo (`@dsCard`) corrections — no component or token changes.** Audited every card page against
  the upstream Storybook stories: `OfferCard` and `VerticalBaseCard` now pass a `width: 100%` CTA
  (the full-width button is story-level styling, not card CSS — the cards' CTA wraps are bare flex
  boxes, so CTA width is the consumer's call); the `OfferCard` page pins its columns to the story's
  353px design reference; the `LogoOfferCard` page moved from a 1000px to a 1280px viewport so it
  renders the ≥1200px 3-column desktop row instead of only the stacked mobile layout; the
  `AspectRatio` demo gained the per-breakpoint ratio and the border/radius opt-ins added in 1.15.0.

### 1.15.0 — nalu-react 1.195.0 sync: OfferCard · LogoOfferCard · responsive AspectRatio · card hardening
- **`OfferCard`** (`components/cards/`, new): the library's general offer card, missed by earlier
  ports (its `.offercard.a-p.cc-dflt` / `.s-lg.cc-dflt` token blocks were already synced).
  Optional 2.42:1 top banner (border + radius opted off), then the bottom area: right-aligned
  sponsored label, 48px 1:1 inline logo beside the eyebrow → title → subtitle stack, tags, and a
  footer with the footnote and the CTA. Clicks and activation keys originating inside the CTA wrap
  never reach the card handler (source tests the event target against the CTA ref). The CTA wrap is
  a bare flex box — the full-width button in Storybook comes from the story passing a `width: 100%`
  class on the Button, so consumers decide the CTA width (the card page demos it that way).
- **`LogoOfferCard`** (`components/cards/`, new — upstream 1.193.0): wide list-row offer card.
  Mobile/tablet a single stacked column capped at 482px (logo → content → CTA); at ≥1200px (the
  source `desktop` breakpoint) a 3-column grid — 130px logo · content · CTA — with the header row
  and the footer indented by 154px so they left-align with the text stack. Logo wrapped in an
  `AspectRatio` (16:9 mobile → 1:1 desktop) with border + radius on; label clamps at 3 lines,
  title at 2 (3 on desktop); the "see details" trigger rotates one chevron 180° instead of
  swapping icons. CTA and expanded details are click-isolated from the card. Values from the
  `.logooffercard` token block, already present since the 1.14.0 token sync.
- **`AspectRatio` accepts a responsive ratio** (upstream 1.191.0) — `{ base, tablet?, desktop? }`
  alongside the existing single-value form, resolved with CSS media queries (no JS, no SSR flash)
  through `--nalu-ratio-base/-tablet/-desktop`. Added `borderOff` / `radiusOff`, both defaulting
  to `true` (upstream 1.191.1): pass `false` to opt in to the `.ratio` scope border and radius.
- **`ValueOfferCard` brought level with the source** (upstream 1.187.0 → 1.194.0): `state`
  (`valid` | `expired`), multi-part `subtitle` (array — joined on one line on mobile, one part per
  line on desktop), `valueAnnotation` caption under the subtitle, `showTitleOnMobile`,
  `simplified` (desktop drops the 175px value rail for a 2-column subtitle-over-title layout),
  optional `title`, `titleHeadingLevel="span"` for a plain-text title (CCT-4438), and the
  expandable region now stays mounted and toggles via `[hidden]` (CCT-4450) instead of unmounting.
- **Cards are only click targets when they get an `onClick`** (upstream 1.192.0) —
  `ValueOfferCard`, `FeaturedOfferCard` and `BannerCard` drop `role="button"`, the focus stop and
  the pointer cursor when it's omitted. Same commit's **text hardening** ported: card copy now
  resets the inheritable text properties (style, variant, spacing, transform, shadow, white-space)
  and wraps long unbroken strings, so a consumer's wrapper can't leak into card text.
- Not ported (no DS surface): Carousel hydration fix (1.193.1), `IconButton` icon-wrapping
  refactor (1.191.2 — internal cloning change), Chromatic mobile viewport (1.195.0).

### 1.14.0 — token-build sync: exact type scale + offer-card token completion
- **Typography scale trued up to the exact token build (`dist/`, 2026-07).** The responsive
  Display/Headline scale shipped in 1.1.0 was interpolated (README even flagged it "swap in exact
  Figma values if pixel-parity is needed"). The `dist/` style-dictionary build supplies the exact
  per-mode values, so `colors_and_type.css` now matches production verbatim:
  - **Single breakpoint at 648px** (the build has NO 1200px tier) — the old 648/1200 two-step ramp
    is collapsed to one.
  - **Display** is larger: base (mobile) `28/36/45px` (S/M/L) → ≥648 `36/45/57px`. The old scale
    topped out at 45px (desktop large); the build reaches 57px.
  - **Headline** and **Title-large** now step up at ≥648 (`headline 20/22/24 → 24/28/32`,
    `title-large 18 → 22`) — the DS previously kept them fixed, missing that step.
  - The `.igm-app` fixed-mobile-stage re-pin now covers Display + Headline + Title-large at the
    mobile tier (was Display only), so the phone stage still renders mobile type inside a wide
    viewport.
  - Colour ramps and all other tokens were unchanged in the build; font-family fallback stacks and
    shadow formatting are DS-intentional and kept. Build snapshot archived in `_raw/build-2026-07/`.
- **Completed the three offer-card token blocks** in `component-tokens.css` against the build —
  the 1.185.0/1.190.0 ports had dropped a few: `BannerCard` `--subtitle-color`, `--image-radius`,
  and the build's `--rightWrap-height`→`--rightWrap-minHeight` rename (base + ≥648/≥1200 steps) +
  `--ratio-height`; `FeaturedOfferCard` `--featuredOfferCard-border-color` and `--contentWrap-gap`;
  and `ValueOfferCard`'s entire **≥1200 responsive block** (title/subtitle step-up, padding, gaps),
  which was absent. Parity only — the recreated card components render from `components.css`.
- **Line-icons-only rule enforced.** Documented "icons are never filled" in ICONOGRAPHY and fixed
  the one violation: `ToggleButton`'s selected/active/pressed heart was filling `--tb-fill`
  (solid red heart). It's now a danger-red **outline** in every state — only the stroke colour
  shifts idle→hover→selected. Affects `FeaturedOfferCard` (and anywhere else `ToggleButton`
  appears). No API change.

### 1.13.0 — nalu-react 1.190.0 sync: BannerCard · FeaturedOfferCard · TagsGroup
- **Three new components from `@atolls/nalu-react` v1.190.0** (previous port baseline: 1.185.0):
  - **`BannerCard`** (`components/cards/`) — large promotional banner card: image on top on mobile
    (source `column-reverse`), 1fr content / 2fr banner row with 24px gap at ≥1200px (the source
    `desktop` breakpoint — tablet stays stacked), height/padding step-up.
    Content stack label → title → subtitle → tags (`TagsGroup`) → sponsored, CTA pinned to the
    bottom; optional 1:1 `smallBannerSlot` overlay (80px → 120px). `appearance="highlighted"` paints
    the title in `--brand-primary`, matching the per-brand `.bannercard.a-hlgted` token diffs.
  - **`FeaturedOfferCard`** (`components/cards/`) — editorial offer card: optional 2.42:1 top banner
    with a tags overlay (top-left), favourite `ToggleButton` overlaying the card frame top-right
    (click-isolated from the card), 64px 1:1 inline logo + text stack, `cardContainer`
    `default` (white + hairline border) or `plain` (transparent, borderless).
  - **`TagsGroup`** (`components/data-display/`) — wrapping inline row of Tags with the DS gap
    (upstream gap token is empty; 8px per the Figma tag rows). Used by `BannerCard`.
- The `bannercard` / `featuredoffercard` / `tagsgroup` scoped token blocks were already in
  `component-tokens.css` (1.9.0 token sync); the components now consume those values.
- **Not ported, on purpose:** upstream's new `OfferBaseCard` is shipped `@deprecated` ("use
  HorizontalBaseCard"), which this DS already has; `atolls-brands` remains a non-UI brand-asset
  export (covered here by `BrandMark` + `assets/atolls-*.svg`).

### 1.12.0 — ExtensionShell language localization
- **`ExtensionShell` now localizes its own chrome** (tab labels · Log in · Settings) from the
  ShellTweaks **Language** control, matching `DesktopShell` / `MobileShell`. Ships built-in
  EN/ES/FR/DE/PL chrome strings; a new **`content`** prop (or `window.IGRAAL_EXTENSION_CONTENT`)
  overrides or adds languages. Previously the Language tweak set `<html lang>` but left the popup
  chrome in English. Additive/backward-compatible — no prop removed, English defaults unchanged.
- **`templates/extension-popup/`** body copy now localizes off the public `nalu:langchange` hook
  (demo strings for the 5 default languages via `data-i18n`), so the Language selector visibly
  switches the page content too. Swap the demo strings for real copy before shipping.

### 1.11.0 — browser-extension shell
- **New `ExtensionShell`** (`components/chrome/`) — the browser-extension popup chrome as one
  drop-in component, built from the extension Figma (442×600 popup frame): 48px header
  (BrandMark logo · member balance chip + settings icon-button, or visitor Login button),
  scrollable content slot, and 72px bottom tab bar (active stripe · icon · label · optional
  badge). Default tabs Home · Search · Notification; `tabs` prop takes any of the Figma's 8
  nav types (Coupon, Delivery, Giftcard, Cashback…) via sprite icon ids. Auto-mounts
  ShellTweaks (Logged-in · Brand · Language); token-driven `[data-brand]` reskin.
- **New template `templates/extension-popup/`** ("Browser Extension") — popup starting point on ExtensionShell.
- Figma sub-families (Header, Tab Bar, Nav Bar Types/Tabs, Member Level, Left Set, Start,
  Logo) are intentionally composed inside ExtensionShell rather than exported standalone,
  matching how MobileShell absorbs its chrome parts. The visitor chip variant was not
  extractable from the file; visitor state renders the DS Button login CTA (flagged).

### 1.10.3 — BrandMark iGraal path fix
- Fix: BrandMark's iGraal path was truncated to the bolt roundel (missing the lettering) —
  restored the full mark from SiteHeader.

### 1.10.2 — real brand logos in the site shells
- **Fixed Shoop / Coupons.com logos rendering as plain text wordmarks when switching brands** in
  `DesktopShell` / `MobileShell` (header + footer). New `components/chrome/BrandMark.jsx` injects
  the real landscape logo marks (already shipped in the brand foundation cards) once per document
  and renders them by brand: **Shoop**, **Coupons.com** (height-tuned — its 152×26 lockup is
  capped so it doesn't dwarf other logos), and **Pepper** (all three themes share the mydealz
  mark, previously mislabelled "iGraal" by the wordmark fallback).
- Completed the wordmark fallback map — Jyllands-Posten, Kortingscode.nl, Business Insider and the
  Pepper trio were missing and silently fell back to "iGraal"; labels also corrected
  ("EL PAÍS", "La Gazzetta dello Sport", "FOCUS online", "Daily Mail", "Coupons.com").
- All three shell logo sites (SiteHeader, SiteFooter, MobileShell header + footer) now route
  through `BrandMark`; the `logo` prop override still wins.

### 1.10.1 — real token values for the 1.10.0 additions
- **Trued up every flagged derivation from 1.10.0** against the current token-pipeline output
  (attached `dist/` snapshot, per-brand `style-guide.css`, 2026-07):
  - **ValueOfferCard**: exact `.valueoffercard.a-p/.s-lg` values — mobile-first padding 16 /
    radius 16 / rows-gap 8 / columns-gap 0, subtitle Inter 20/24/700, title Inter 14/20/400,
    trigger label 12/16/400, footnote 12/24, CTA column 200px (`--button-minWidth`); token
    step-up at ≥1200px (padding 24, cols-gap 24, rows-gap 12, subtitle 26/30, title 20/24/700).
  - **Scrim**: backdrop `hsl(0 0% 0% / 0.502)` (was the dialog-backdrop derivation).
  - **Island**: real `e-m` tokens — medium emphasis darkens only the secondary appearance
    (neutral-90); `xs` = 4px padding / 16px radius.
  - **PredefinedTag Exclusive**: added `--special-tag-background/-foreground` to `:root`
    (Igraal default) and all 15 brand scopes in `brands.css`. **Gazzetta** is absent from the
    pipeline snapshot and keeps the primary-50 fallback (flagged).
  - Updated the `component-tokens.css` reference dump (`.scrim`, `.valueoffercard`,
    `.island.e-m/.s-xs`).

### 1.10.0 — nalu-react 1.185.0 parity: 5 new components + 2 updates
- **Ported the component delta from `@atolls/nalu-react` 1.185.0** (2026-07-03; our previous
  snapshot predated 1.178.0):
  - **`ValueOfferCard`** (1.185.0) — prominent offer card with named-grid-areas layout, CTA
    fallback to card `onClick`, expandable "see details" region. `components/cards/`.
  - **`ComboBox`** (1.182.0) — searchable select on BaseInput + Dropdown; typing filters,
    outside-click/Escape reverts. Reuses the `inputfield` scope (as in source). `components/forms/`.
  - **`BaseInput`** (1.181.0) — low-level input primitive with start/end slots + clear button;
    foundation under PasswordInput/ComboBox. `components/forms/`.
  - **`PasswordInput`** — labelled password field with eye/eye-off visibility toggle.
    `components/forms/`.
  - **`Scrim`** (1.178.0) — overlay backdrop, portal + Escape/backdrop dismiss.
    `components/feedback/`.
  - **`Island`**: new `emphasis` prop (`low`|`medium`) + `xs` size (1.184.0).
  - **`PredefinedTag`**: new **Exclusive** (diamond-01 since 1.198.0; star-06 originally, brand
    `--special-tag-*` driven) and
    **Verified** (check-verified-03) types (1.183.0).
  - **Deliberately skipped: `OfferBaseCard`** — marked `@deprecated` in source ("Use
    HorizontalBaseCard instead").
- **Flagged derivations** (our token snapshot predates these components' token blocks — the live
  values live in `…/brands/{Brand}/web/style-guide.css`, which we could not access):
  - Scrim backdrop = `rgba(13,13,13,.5)` (the system dialog-backdrop value).
  - ValueOfferCard spacing/typography derived from `horizontalbasecard.s-lg` precedents.
  - Island `e-m` emphasis ships as a class hook (`nalu-island--em`) with no visual delta yet.
  - Exclusive tag falls back to `primary-50`/white where brands don't define `--special-tag-*`.

### 1.9.2 — Pepper ships real Averta CY
- **Replaced the Pepper *Averta CY* → Manrope substitution with the real licensed font.** Added
  `fonts/AvertaCY-{Regular,Semibold,Bold}.{woff2,ttf}` (weights 400/600/700), wrote the `@font-face`
  rules in `colors_and_type.css`, and swapped all 21 Pepper font-family token stacks
  (`pepper` / `pepper-secondary` / `pepper-tertiary`) from `'Manrope'` to `'Averta CY'`. Removed
  Manrope from the `brands.css` Google Fonts `@import` (no other brand used it). Pepper now renders
  its exact brand typography.

### 1.9.1 — project migration + namespace reassignment
- **Migrated the system into a new project.** All sources copied over verbatim (tokens, fonts,
  assets, 59 components, preview cards, both templates, `_raw/` reference). The compiler reassigned
  the runtime **namespace** `window.Jane_9cfe19` → **`window.DesignSystem_6a9729`**; every source
  reference (component `.jsx`, `@dsCard` HTML, both templates, docs) was updated to match. No token
  names, component APIs or values changed — consumers only need the new namespace.

### 1.9.0 — complete per-component token layer (`component-tokens.css`)
- **Every component-level token, for every brand**, is now in the system — the **258 scoped
  component blocks** the real pico-react components read (`.accordion.a-p`, `.button.e-h.a-p`,
  `.chip.a-p.sel-t`, `.dialog.s-lg`, …), extracted verbatim from each brand's built
  `dist/{Brand}/web/style-guide.css`. New **opt-in** `component-tokens.css` (load it *after*
  `styles.css` only when you use the real pico-react component classes — it is intentionally NOT
  auto-imported, so the DS token closure stays the root semantic layer): **iGraal as the unscoped
  base** + **per-brand `[data-brand="…"]` overrides** for only the declarations that differ (e.g. Kortingscode 585, Pepper 304, Focus/El País 170 each; layout
  tokens like padding/radius are shared so they're not duplicated). Pairs with the root semantic
  layer (`colors_and_type.css` + `brands.css`) — together that's the full ~900-var per-brand set.
- **Caveats from the build output:** **DailyMail, Radins and CNN** built files ship the root layer
  only (no component blocks), so they inherit iGraal's component tokens (their accent still applies
  via the root layer). **Gazzetta** isn't in the token repo's build, so it also inherits the base
  component tokens. Drop those brands' component blocks in if/when the build produces them.
- Note: this DS's own recreated components use the `.nalu-*` class layer + root tokens, so these
  scoped blocks are inert for them — they're here for **completeness/fidelity** and for any real
  pico-react component dropped into a Nalu page.

### 1.8.0 — footer country selector switches language
- **The footer's country selector is now a working language switcher**, wired to the *same* `lang`
  state as the Tweaks **Language** control — bidirectional: picking **iGraal.fr / .de / .es / .pl /
  .com** sets the language (localizes chrome via the `content` map, sets `<html lang>`, fires
  `nalu:langchange`), and the button reflects whatever language is active. Implemented on **both**
  `SiteFooter` (desktop) and `MobileShell` (mobile) as a flag + site-name dropdown
  (`{SiteName}.{tld}` per language, EN·ES·FR·DE·PL).
- **`DesktopShell` wires it automatically** — it passes `lang`/`onLang` (→ `setTweak('lang', code)`)
  into `SiteFooter`. So whenever the shell owns tweak state (default `devTweaks`, including `"always"`),
  the footer is a genuine end-user language switcher — even on a static deploy where the dev panel is
  hidden. New `SiteFooter` props: `lang`, `onLang`, `languages` (override the option list). With no
  `onLang` the selector stays a display-only button (backward compatible).

### 1.7.1 — complete per-brand token import (full button matrix)
- **The 6 brands added in 1.7.0 now override every differing token, not just the primary ramp +
  a few semantics.** Each `[data-brand]` block is now the **full diff vs iGraal** (~105–132 vars):
  the complete **button matrix** (primary/secondary × high/medium/low × idle/hover/pressed/disabled
  × background/border + label/icon), secondary/tertiary/quaternary ramps where they differ, content,
  interactive, campaign and typography tokens. Generated by flattening each brand's token-repo tree
  to the DS variable names (validated: the iGraal flatten reproduces 228/249 `colors_and_type.css`
  vars) and emitting only what differs from iGraal.
- **Fixes “Pepper buttons look weird.”** Pepper restyles **36** button tokens; 1.7.0 imported ~6, so
  label/icon/border/medium/low/secondary states fell back to iGraal black. Now resolved — Pepper
  (and the other five) render their real button styling. Shared shape tokens (radius scale,
  elevation, Smart-Shopping extras) are intentionally left at the iGraal defaults.

### 1.7.0 — 6 more brand themes (16 total)
- **Added `JyllandsPosten`, `Kortingscode`, `BusinessInsider`, and `Pepper` ×3**
  (`pepper` / `pepper-secondary` / `pepper-tertiary`) to `brands.css` — `[data-brand]` now covers
  **16 of the 18 Storybook switcher themes** (was 10). Values resolved from the Nalu **token
  repository** (`tokens/v2/Brands/*.json` + `Colors/Light.json` + `Pepper Core/Colors.json` +
  `Font Family`), not guessed: full 13-step primary ramp, `--brand-primary`, link idle/hover, the
  `button-primary-high` matrix, focus ring, corner radius and the per-brand type stack. Resolver
  validated against the existing iGraal/Shoop/Focus blocks (exact match). Provenance saved in
  `_raw/token-src/_resolved.json`.
- **Font substitutions (flagged)** for proprietary faces, loaded via `brands.css`'s Google `@import`:
  JyllandsPosten *Guardian Egyptian/Sans* → **Source Serif 4 + Inter**; BusinessInsider *Lab
  Grotesque* → **Space Grotesk**; Pepper *Averta CY* → **Manrope**. Kortingscode uses real **Poppins**.
  Added Poppins / Manrope / Space Grotesk to the font import.
- **`ShellTweaks` brand list** extended to all 16 themes, so both shells' Brand tweak offers them.
- **Still missing:** `KleineZeitung` and `Suomi24` (no token source in the repo yet).

### 1.6.1 — deploy guidance: ask about translated copy
- **Exporting guidelines now require asking about language before deploy.** Added a *“Brand reskins
  for free — language does NOT”* subsection to the Exporting/deploying section (README + SKILL.md):
  on a deploy the Brand selector works for free (pure `data-brand` CSS), but the Language selector
  only translates copy that was actually authored — chrome strings ship per the `content` map, and
  **body copy stays in whatever single language was written**. New rule: **always ask the user (1)
  whether translated copy should be exported and (2) for which languages**, then match the export
  (bake a single `lang` / trim the `langs` list, or author body copy for each chosen language).
  Doc-only; fixes the “brand switches but the copy stays Spanish” deploy report.

### 1.6.0 — deploy/export guidance + ungated Tweaks switcher
- **`devTweaks="always"` on both shells (and `enabled="always"` on `ShellTweaks`).** Renders the
  Tweaks panel **ungated** — no host toolbar required — so an exported/deployed page (e.g. Vercel)
  can keep a working **Brand · Language · Logged-in** switcher for a live demo. The panel's ✕ hides
  it locally when ungated (no host to dismiss it). `true` (default, toolbar-gated review panel) and
  `false` (no panel) are unchanged; additive.
- **New “Exporting / deploying (Vercel)” section** (below) documenting why a deploy shows the seed
  state and not your in-editor Tweaks selections, and the two supported paths: **bake the state into
  the shell seed props** (frozen snapshot) or **`devTweaks="always"`** (live switcher). Root cause of
  the “Vercel export shows iGraal/Spanish defaults and no Tweaks panel” report.
- **Fix: `DesktopShell` no longer crashes when used with no `content` map.** `renderChrome` coalesced
  its derived `nav`/`suggested`/`account`/`labels` to `null` (not `undefined`), so `SiteHeader`'s
  default params didn't fire and it threw on `nav.map(...)`. Now coalesced to `undefined`, matching
  `MobileShell`.

### 1.5.0 — Polish language support
- **Polish (`pl`) added.** The shells' default Language dropdown now offers **EN · ES · FR · DE · PL**
  (`ShellTweaks` `ST_DEFAULT_LANGS`), and both bundled templates (`igraal-desktop`, `igraal-mobile`)
  ship full Polish chrome strings (`content.js`: nav, categories, account, footer, labels) plus a
  `{ code: 'pl', label: 'PL' }` entry in `window.IGRAAL_LANGS`. Additive — existing languages and any
  page passing its own `langs`/`content` are unaffected.

### 1.4.0 — public language hook
- **`nalu:langchange` event + `window.NaluLang`.** `ShellTweaks` (and therefore both shells) now
  publishes the active language on every change: it sets `window.NaluLang` synchronously and fires a
  `window` `CustomEvent('nalu:langchange', { detail: { lang } })`. Consuming **page content** can
  localize off the same language without observing the `<html lang>` attribute or reaching into
  `ShellTweaksContext` (which is only reachable from React children inside the shell). Read
  `window.NaluLang` for the current value; subscribe to `nalu:langchange` for updates. Backward-
  compatible — `<html lang>` and `ShellTweaksContext` are unchanged.

### 1.3.1 — mobile-stage hero type fix
- **Hero `<h1>` no longer renders at desktop size inside the mobile shell.** The responsive
  Display tokens are driven by **viewport** `@media` queries on `:root`, but `MobileShell`
  (`.igm-app`) is a fixed ~390px phone stage that is almost always shown inside a much wider
  desktop viewport — so the `≥648`/`≥1200` rules fired and a hero resolved the 36/45px desktop
  size in a 390px phone. `colors_and_type.css` now re-declares the **mobile-tier** Display token
  values on `.igm-app`; custom properties inherit, so every descendant of the mobile stage resolves
  the mobile scale (`display-large` = 28px) regardless of the outer viewport. Root cause of the
  long-standing "h1 wrong size" report — the 1.1.0/1.3.0 fixes corrected token *values* and bare-
  heading defaults but never the viewport-vs-stage mismatch. Desktop chrome stays viewport-driven.

### 1.3.0 — semantic heading defaults + hard-coded-type guardrails
- **Bare semantic headings are now styled on-brand and responsive by default** — `colors_and_type.css`
  styles `h1`–`h6:not([class])` from the type tokens (h1=Display responsive, h2=Headline, h3/h4=Title,
  h5/h6=Label). Low-specificity element rules guarded with `:not([class])`, so any `.nalu-t-*` class
  or inline style overrides them. A plain `<h1>` now gets the responsive 28→36→45 scale with no
  hard-coded size — closing the gap where generated pages inlined `font-size:36px` and missed the
  responsive tokens.
- **Guidance hardened** (SKILL.md + README): explicit “never hard-code font-size/line-height on
  text — use `.nalu-t-*` classes, `--typography-*` tokens, or bare semantic headings” rule. (The
  auto-generated adherence linter already flags raw px.)

### 1.2.0 — shells auto-mount the Tweaks panel
- **`DesktopShell` / `MobileShell` now auto-mount a built-in Tweaks panel** (new bundled
  `ShellTweaks` component) — Logged-in · Brand · Language — so any page using a shell gets the
  review controls with no wiring. Toolbar-gated, draggable, localStorage-persisted; the shell owns
  the state. Opt out with **`devTweaks={false}`**. Language selects localized chrome from a
  `content` prop / `window.IGRAAL_*_CONTENT`; live values published on `ShellTweaksContext`.
- **Templates simplified** — `igraal-desktop` / `igraal-mobile` dropped their hand-wired
  `tweaks-panel.jsx` + state plumbing; the app file is now just `<Shell><GenericBody/></Shell>` and
  the body reads language from `ShellTweaksContext`. The shell is the single source of the panel.

### 1.1.0 — responsive typography
- **Display (hero / h1) type is now responsive**, matching production's Figma typography modes:
  `display-large` resolves to **28px on mobile → 36px tablet (≥648px) → 45px desktop (≥1200px)**,
  with the small/medium steps and line-heights scaling in step. Implemented as mobile-first
  `@media` overrides of the `--typography-display-*` tokens in `colors_and_type.css` (token names
  unchanged, so all `.nalu-t-display-*` consumers and bare `<h1>`s resize automatically). Fixes
  desktop-sized hero headings rendering oversized on mobile. Headline/Title/Body/Label unchanged.
  > Mobile (28px) and desktop (45px) values are production-confirmed; the tablet tier (36px) is an
  > interpolated midpoint — swap in exact Figma per-mode values if pixel-parity is needed there.

### 1.0.0 — baseline
- **Foundations** — `colors_and_type.css` (color ramps, semantic tokens, full button matrix,
  typography scale, spacing, radius, elevation) + `brands.css` (`[data-brand]` themes for 10 brands).
- **Component library** — 59 registered React components in `components/`, exposed on
  `window.DesignSystem_6a9729`, each with a `@dsCard` thumbnail.
- **Site chrome** — `DesktopShell` / `SiteHeader` / `SiteFooter` (desktop) and `MobileShell`
  (mobile), promoted into the bundle so generated pages reuse one working implementation.
- **Templates** — `templates/igraal-desktop/` and `templates/igraal-mobile/` fork-ready pages.
- **Smart Shopping styleguide integration** — added brand orange gradient, Midnight Blue, warm-brown
  secondary text, the 5-step named radius scale (`--radius-none…full`), per-brand logo-colour rules,
  and brand voice / tone-pillars / motion guidance (see *Content Fundamentals*).

---

## Sources

Everything here was reverse-engineered from materials the user provided — **assume the reader may
not have access**, but they are recorded for provenance:

| Source | What it is |
|---|---|
| `pico-react/` (local codebase) | `@atolls/nalu-react` v1.165.2 — the React component library + Storybook. The source of truth for component structure, tokens, typography and icon system. |
| `git+https://gitlab.com/global-savings-group/common/librairies/frontends/pico-react.git` | Upstream repo (per `package.json`). |
| `https://fr.igraal.com/assets/pico/nalu/brands/Igraal/web/style-guide.css` | Live Igraal **brand token** stylesheet (893 CSS variables). Mirror also on `wl-*-assets-eu` S3 buckets. Brand is swappable: `…/brands/{Brand}/web/style-guide.css`. |
| `https://fr.igraal.com/assets/pico/nalu/fonts/…` | Official webfonts — Inter (400/500/700) + New Spirit (500). Copied into `fonts/`. |
| `pico-react/public/assets/svg/icons/*.svg` | Icon sprite sheets (Untitled-UI-style line set). Copied into `assets/icons/`. |

**Other Nalu brands** referenced in the Storybook theme switcher (each has its own style-guide.css):
Igraal, Coupons, Cuponation, ElPais, Focus, Gazzetta, JyllandsPosten, KleineZeitung, Kortingscode,
Pepper (Primary/Secondary/Tertiary), Radins, Shoop, Suomi24, DailyMail, CNN, BusinessInsider.

---

## Products / surfaces

Nalu itself is a **component library**, not a single app — it ships the building blocks for many
Atolls brand front-ends. The dominant product archetype is a **consumer cashback & coupons website**
(Igraal). The ready-to-fork product surfaces live under `templates/` (see below).

---

## CONTENT FUNDAMENTALS

**Brand idea & positioning** (Smart Shopping styleguide). The brand idea is **“It’s the little
things that make us human.”** and the positioning is **“the most human rewards brand”** — deliberately
opposed to the loud, artificial identities of competitors. Everything AI writes for this system
should feel **human, warm and authentic**, never corporate or robotic.

**Tone pillars** — the brand voice is **“Be Real.”** (warm, genuine, down-to-earth — *like talking to
a friend, not a robot*), expressed through three pillars:
- **Be Clear** — “we say it like it is.” Saving money shouldn’t be complicated.
- **Be Reliable** — “we show up, every time.” Steady, confident, dependable.
- **Be Inspiring** — “we make every moment count.” Surface the excitement of a good deal.

**Say / Don’t-say** (from the Tone-of-Voice frame):
| ❌ Don’t (corporate / jargon) | ✅ Do (human, benefit-first) |
|---|---|
| “We employ advanced encryption algorithms to ensure user data is securely stored…” | “Shop with confidence. We’re committed to protecting your personal information at every stage of your cashback journey.” |
| “iGraal is a sophisticated rewards platform designed to maximize savings…” | “We’re here to make cashback simple and rewarding, so you can enjoy every shop with confidence.” |

How Nalu / Igraal product copy is written:

- **Voice — warm, plain, benefit-first.** Copy leads with the user's gain: *"Get cashback", "Your
  money back, simply", "€4.20 added to your balance."* Avoid jargon; explain mechanics in one line.
- **Person — "you / your".** Second person, addressed directly to the shopper. The brand refers to
  itself by name ("Shop through Igraal…") rather than "we" in UI surfaces.
- **Casing — sentence case everywhere** for headings, buttons and body. The only UPPERCASE is the
  `Label` type style (small eyebrows / category tags, e.g. `EXCLUSIVE OFFER`, `NEW MEMBERS`).
- **Buttons — imperative verb phrases.** *"Get cashback", "Activate offer", "See all stores",
  "Withdraw".* Short (1–3 words), no trailing punctuation.
- **Numbers & money — concrete and prominent.** Cashback rates ("Up to 8%", "5% + €10"), balances
  and discounts ("-50%") are the hero content. Use the locale currency (€ for Igraal/FR).
- **Tone of feedback — reassuring, never blaming.** Errors are gentle and action-oriented
  ("Couldn't connect — please retry", "Disable your ad-blocker so cashback can be tracked").
- **Emoji — not used** in product UI. Personality comes from the serif display face + orange accent,
  not emoji or exclamation-heavy copy.
- **Vibe — trustworthy deal-hunting.** Confident, a little premium (the New Spirit serif), but
  friendly and uncomplicated. Savings are framed as effortless and rewarding.

---

## VISUAL FOUNDATIONS

- **Color.** A **warm-neutral base** (pure greys, warm near-black text `hsl(16 33% 6%)`) with a
  single hot **orange brand accent** (`primary-55`, `hsl(18 98% 53%)`). Secondary = golden yellow,
  tertiary = violet, quaternary = blue, used sparingly for categories/illustration. Campaign red &
  green flag sales/deals. Backgrounds are warm white (`neutral-98`) for pages, pure white for cards.
- **The orange is an accent, not a fill.** It colors links, focus rings, the logo lock-up, promo
  tags and small highlights. **Primary buttons are BLACK** (`neutral-5`), white label — a
  deliberate, confident move that keeps orange special.
- **Type.** Dual-family system: **New Spirit** (a warm, high-contrast serif, weight 500) for
  *Display* and *Headline*; **Inter** (400/500/700) for *Title, Body, Label* and the sans
  *Headline-Alt*. Serif headers + sans body = editorial-but-functional. Generous line-heights.
- **Responsive type.** The **Display (hero / h1) scale resizes per breakpoint** — `display-large`
  is **28px mobile → 36px tablet → 45px desktop** (and the small/medium steps scale with it),
  mirroring production's Figma typography modes. Breakpoints: **tablet ≥648px, desktop ≥1200px**,
  mobile-first. The token *names* don't change, so any `.nalu-t-display-*` element (or a bare `<h1>`
  styled with them) resizes automatically — never hard-code a hero font-size. Headline / Title /
  Body / Label are already mobile-safe (≤24px) and stay constant across breakpoints.
- **Never hard-code `font-size` / `line-height` on text.** A literal `font-size:36px` bypasses the
  responsive type tokens (DS type fixes can't reach it) and trips the adherence linter's raw-px
  rule. Always use a **`.nalu-t-*` type class**, the **`--typography-*` tokens**, or a **bare
  semantic heading** — the DS styles `<h1>`–`<h6>:not([class])` on-brand and responsive by default
  (h1=Display, h2=Headline, h3/h4=Title, h5/h6=Label), overridable by any class/inline style.
- **Spacing.** 4px base; tokens `2-xs(4) · xs(8) · s(10) · m(12) · l(16) · xl(24) · 2-xl(32) …`.
  Layouts breathe; cards use `l`–`xl` internal padding.
- **Corner radius — the signature contrast.** Surfaces (cards, inputs, sheets-body) are **square
  (radius 0)**. Interactive pills (**buttons & chips = 99px**, fully rounded). Floating overlays use
  `cornerRadius` 16px. Crisp edges + round pills is the most recognisable Nalu shape language.
- **Backgrounds.** Clean and flat — **no gradients, no textures, no patterns**. Imagery is
  retailer/product photography and brand logos on plain white tiles; full-bleed hero photography is
  used on marketing pages. No hand-drawn illustration as a system motif.
- **Borders.** Hairline `border-default` (`neutral-80`) on inputs; `border-subtle` (`neutral-95`)
  to divide rows/cards. 1–1.5px. Cards lean on **shadow OR border**, rarely both heavily.
- **Elevation.** Five soft, low-contrast **double shadows** (`elevation-xs…xl`) — barely-there lift
  on cards, more on menus/sheets. Shadows are neutral black at 3–8% alpha, never colored.
- **Animation.** Quick, functional — `~0.18–0.2s ease` on background/border/color and box-shadow.
  Fades and simple slides; **no bounce, no springy overshoot.** Calm, "wave-like" not playful.
  Brand motion principle (Smart Shopping styleguide): **"Every animation should feel like a shared
  moment, not a broadcast."** For text reveals, animate a **subtle upward movement + opacity fade**
  with easing; when moving an element, use **smooth easing for natural, fluid transitions** between
  points (match-cut style for scene changes). Motion is warm and human, never showy.
- **Hover.** Buttons darken (black → `neutral-30`); ghost/outline buttons gain an 8% black wash;
  cards lift one elevation step and/or gain a subtle border. Links go orange → darker orange.
- **Press / active.** Background steps darker again (e.g. `neutral-10`), 16–30% black wash on ghost
  buttons. No scale-down/shrink on press.
- **Focus.** A **2px orange ring** (`primary-55`) — the one place orange touches form controls. High
  visibility, accessibility-first.
- **Transparency & blur.** Used lightly — translucent black scrims behind modals/overlays
  (`transparent-black-alpha-30…70`); floating action buttons over imagery use ~90% white. No heavy
  glassmorphism.
- **Imagery vibe.** Bright, true-color retailer/product shots and clean logo tiles. Warm, optimistic;
  not B&W, not heavily filtered, no grain.
- **Cards.** White surface, **square corners**, hairline subtle border + `elevation-xs`; content
  padded `m`–`l`; promo tag pinned top-left, favourite heart top-right.

---

## ICONOGRAPHY

- **One line-icon family**, an **Untitled-UI-style** set (24×24 viewBox, **2px stroke**, round
  caps & joins, `fill="none"`, `stroke="currentColor"`). ~730 glyphs total.
- **Delivered as SVG sprite sheets**, grouped by category file: `general, arrows,
  finance_and_ecommerce, communication, users, alert_and_feedback, maps_and_travel,
  media_and_devices, time, security, shapes, charts, weather, education, …`. In the real code an
  `<Icon type={category} code={id} />` renders `<use href="…/icons/{type}.svg#{code}">`.
- **Copied here** into `assets/icons/` (the categories used by this kit). Because external
  `<use href="file.svg#id">` does not render reliably in static previews/screenshots, the preview
  cards **inline the needed `<symbol>`s** into a hidden in-document sprite and reference
  `<use href="#code">`. To add an icon: copy its `<symbol>` from the relevant sprite into the
  document's hidden `<svg>` block.
- Sizes follow the spacing scale (commonly 16 / 20 / 24px). Color via `currentColor` so icons
  inherit text color.
- **No emoji, no unicode-glyph icons, no raster/PNG icons** in the system. Brand/retailer logos are
  separate colored/monochrome assets (see `assets/`).
- **Line icons only — never filled.** Icons stay `fill="none"` / `stroke="currentColor"` in **every**
  state, including selected/active/pressed. State is expressed by changing the **stroke colour**, not
  by filling the glyph. e.g. `ToggleButton`'s selected heart is a danger-red **outline**, not a solid
  heart. Any component tempted to fill an icon to signal "on" must recolour the stroke instead.
  (Star `Rating` is the one deliberate exception — a fractional-fill meter, not an icon state.)
- **Logos.** The **Nalu** master logo is a wave-in-circle mark + wordmark
  (`assets/nalu-black.svg`, `assets/nalu-white.svg`). The **Atolls** corporate logo is in
  `assets/atolls-colored.svg` / `assets/atolls-monochrome.svg`. The logo lock-up sits on the orange
  brand background.
- **Per-brand logo-colour rules** (Smart Shopping styleguide): the **iGraal** logo must always
  appear in **Fire Orange** (`#FD5A13` = `--brand-primary`) and only on a main-orange background; the
  **Shoop** logo must always appear in **Vibrant Blue** (its `--brand-primary`) and only on a
  main-blue background. Each brand's logo locks to its own primary; never recolour a brand logo
  outside its main hue family.

---

## Index / manifest

At a glance, this design system contains:

- **Foundations** — `styles.css` (root entry) → `colors_and_type.css` (507 tokens: color, type,
  spacing, radius, elevation, full button matrix; `nalu-t-*` type utilities; `@font-face`) +
  `brands.css` (`[data-brand]` re-skins for 16 brand themes).
- **Fonts** — Inter (400/500/700) + New Spirit (500), in `fonts/`.
- **Components** — 62 registered React components (`.jsx` + `.d.ts`) in `components/`, grouped into
  `Icon`, `Button`, `actions`, `data-display`, `forms`, `feedback`, `cards`, `containers`, and
  **`chrome`** (the page-level `DesktopShell` / `SiteHeader` / `SiteFooter` / `MobileShell` / `ShellTweaks`). Compiled to
  `_ds_bundle.js` and exposed on `window.DesignSystem_6a9729`. See *Component library* below.
- **Design System tab cards** — `@dsCard`-tagged HTML across `preview/` and each component folder.
- **Reference** — `_raw/` (raw per-brand `style-guide.css` + parsed tokens; not for shipping).

---

## Multi-brand theming

Nalu is white-label: every brand re-skins the **same token names** with its own values. The shape
language (square surfaces, pill-or-square buttons, spacing, elevation, icon set) is shared; what
changes per brand is the **primary colour ramp, the link/accent colour, the primary-button fill,
the button corner-radius, and the font families**.

```html
<link rel="stylesheet" href="colors_and_type.css">  <!-- Igraal defaults -->
<link rel="stylesheet" href="brands.css">            <!-- per-brand overrides -->
...
<body data-brand="shoop">  <!-- omit attribute, or use "igraal", for the default -->
```

| Brand | Accent | Buttons | Fonts | Notes |
|---|---|---|---|---|
| **iGraal** (default) | Orange `hsl(18 98% 53%)` | Black pill | New Spirit + Inter | Cashback. Orange is accent-only. |
| **Shoop** | Electric blue `hsl(216 100% 57%)` | Black pill | New Spirit + Inter | Cashback; same shape language as iGraal. |
| **Coupons** | Indigo `hsl(226 40% 55%)` | **Deep-indigo** pill | New Spirit + Inter | Hot-pink `hsl(334 100% 49%)` links/accents. |
| **Focus** | Red `hsl(353 93% 46%)` | **Red, near-square (2px)** | **Open Sans + Roboto** | Blue links, pure-black text. The outlier. |
| **DailyMail** | News blue `hsl(214 100% 50%)` | Blue pill | **Arial** | Dark-blue links. |
| **Cuponation** | Orange `hsl(14 80% 56%)` | Orange, 4px | **Roboto** | Red-pink primary ramp, orange CTA/links. |
| **Radins** | Orange `hsl(23 70% 53%)` | **Blue CTA**, 4px | **Lato + Roboto** | Warm primary ramp, distinctive blue button. |
| **El País** | Blue `hsl(200 99% 32%)` | **Blue, square (0px)** | **Source Serif 4** † | Greyscale primary ramp, serif, newspaper. |
| **Gazzetta** | Pink `hsl(335 89% 55%)` | Orange, 4px | **Roboto Condensed + Roboto** | Sport magenta, condensed headlines. |
| **CNN** | Red `hsl(0 100% 55%)` | **Black pill** | **Inter** † | Pure-red primary ramp, black CTA. |
| **JyllandsPosten** | Teal `hsl(179 59% 28%)` | **Orange CTA**, 4px | **Source Serif 4 + Inter** † | Danish news; teal primary, warm-orange button. |
| **Kortingscode** | Sky blue `hsl(205 100% 40%)` | **Green CTA**, 4px | **Poppins + Roboto** | Dutch coupons; sky-blue links, green button. |
| **BusinessInsider** | Greyscale `hsl(240 4% 40%)` | **Black CTA**, 4px | **Space Grotesk** † | Near-greyscale ramp, blue `hsl(230 100% 50%)` links. |
| **Pepper** | Orange `hsl(28 100% 50%)` | Orange pill | **Averta CY** | Community deals (mydealz); neutral-grey links. |
| **Pepper · Green** | Green `hsl(94 65% 45%)` | Green pill | **Averta CY** | Pepper alt theme (`pepper-secondary`). |
| **Pepper · Cyan** | Cyan `hsl(189 97% 38%)` | Cyan pill | **Averta CY** | Pepper alt theme (`pepper-tertiary`). |

Notes & caveats:
- Values are the **real** tokens pulled live from each brand's `…/brands/{Brand}/web/style-guide.css`.
- **Focus** uses Open Sans + Roboto (loaded from Google Fonts by `brands.css`) and a 2px button
  radius — verify against production; substitute exact licensed font files if you have them.
- † **Substituted fonts** (proprietary, not on Google Fonts): **El País** real face is *Marcin Ant B*
  → **Source Serif 4**; **CNN** is *CNN Sans Display* → **Inter**; **JyllandsPosten** is *Guardian
  Egyptian / Guardian Sans* → **Source Serif 4 + Inter**; **BusinessInsider** is *Lab Grotesque* →
  **Space Grotesk**. **Pepper** (×3) now ships its **real licensed *Averta CY*** webfont (bundled in
  `fonts/`, 400/600/700) — no longer substituted. **Kortingscode** (Poppins) and the rest use their
  real, Google-hosted faces.
- **DailyMail**'s `button-primary-high` token is a light-grey *secondary* button; its real primary
  CTA is the blue accent, so the kit maps the primary action to `--brand-primary`. Flagged for review.
- **Pepper** ships **three theme variants** (`pepper` orange / `pepper-secondary` green /
  `pepper-tertiary` cyan) mirroring the upstream PepperPrimary/Secondary/Tertiary modes; all share
  the real Averta CY font and pill buttons.
- **Logos**: iGraal, Shoop, Coupons and **Pepper** have real SVG logos in `assets/atolls-colored.svg`
  (these four are the brands the upstream `AtollsBrands` logo component ships). The other brands
  render their name as a styled wordmark (in the brand font/colour). Provide the official logos to
  complete them.
- **Still not imported** — two switcher themes have no token source in the repo yet: **KleineZeitung**
  and **Suomi24**. Drop their brand JSON (or `style-guide.css`) in and they wire up the same way.

---

Root files:

| Path | Purpose |
|---|---|
| `README.md` | This file — context, sources, content & visual foundations, iconography. |
| `styles.css` | **Root entry point.** `@import`s the foundations + all brand themes — link this one file. |
| `colors_and_type.css` | **The foundation.** All color, type, spacing, radius, elevation & full button-matrix CSS variables (real Igraal values) + `nalu-t-*` type utility classes + `@font-face`. |
| `brands.css` | **Multi-brand overrides.** `[data-brand="…"]` token re-skins for the 16 brand themes. Load after `colors_and_type.css`. |
| `component-tokens.css` | **Opt-in** per-component scoped tokens (`.button.e-h.a-p{…}`, `.dialog.s-lg{…}`, …) for every brand, from the token-repo build. iGraal base + `[data-brand]` diffs. NOT auto-imported — load after `styles.css` when using the real component classes. |
| `components/` | **React component library** — 62 registered Nalu components (`.jsx` + `.d.ts`) grouped into folders (incl. `chrome/` for the page-level `DesktopShell` / `SiteHeader` / `SiteFooter` / `MobileShell`), each with a `@dsCard` thumbnail + `components.css` + `_sprite.js`. See *Component library* below. |
| `SKILL.md` | Agent-Skill entry point (for use in Claude Code). |
| `fonts/` | Official webfonts — Inter (normal/medium/bold), New Spirit (medium), Averta CY (regular/semibold/bold — Pepper). |
| `assets/` | Logos (`nalu-*.svg`, `atolls-*.svg` — contains iGraal/Shoop/Coupons/Pepper marks) + icon sprite sheets in `assets/icons/`. |
| `preview/` | The Design System tab cards (colors, type, spacing, components, brand + per-brand themes). |
| `_raw/` | Reference dumps (raw per-brand style-guide.css + parsed tokens). Not for shipping. |

---

## Component library (`components/`)

62 Nalu components recreated as **registered design-system React components** — each a `<Name>.jsx`
(with `export`) + `<Name>.d.ts` (typed props), grouped into folders that each carry a `@dsCard`
thumbnail. They're exposed on `window.DesignSystem_6a9729` (60+ named exports, counting aliases like
`UnstyledIcon` and sub-parts like `DialogHeader` / `DropdownItem`) once the compiled `_ds_bundle.js`
is built; thumbnails load `styles.css` + `components/components.css` + `_sprite.js` + the bundle.

> **Coverage vs. pico-react.** The full library exports ~50 atomic components, and **every public
> UI component is recreated** as a registered DS component (the non-UI exports — `atolls-brands`,
> the client provider and `utils` — are intentionally not components; the deprecated `OfferBaseCard`
> is superseded by `HorizontalBaseCard`). Synced through **nalu-react v1.203.1** (adds `BannerCard`,
> `FeaturedOfferCard`, `TagsGroup`, `LogoOfferCard`; adds the previously-missed `OfferCard`). On top of the atomic set, `components/chrome/` adds the
> **site chrome** (`DesktopShell` / `SiteHeader` / `SiteFooter` / `MobileShell`) — page-level
> header/nav/footer that the real apps compose by hand, promoted here so generated pages reuse one
> working implementation.

> **Source of truth: `@atolls/nalu-react`.** This design system tracks the npm library
> `@atolls/nalu-react` (synced through **v1.195.0**) as its single source of truth for component
> structure, API and naming. The attached extension Figma kit covers ONLY the browser-extension
> popup (Header, Tab Bar, Nav Bar Types/Tabs, Member Level, Left Set, Start, _Logos — all composed
> inside `ExtensionShell`); it is a **partial reference for that one surface, not the catalogue**.
> **No updated/expanded Figma kit is expected** — the library is authoritative. The automated
> design-system check diffs built components against the ingested kit's vocabulary, so every
> library port that the popup kit doesn't contain will always surface as a "named after nothing in
> the kit" advisory. That advisory is **expected and permanent by design**; the components below
> are the standing confirmation that they are intentional library additions, not renames to make.

### Intentional additions

Confirmed intentional additions — ports from `@atolls/nalu-react` (through v1.203.1) and the
promoted site chrome, not renames of the extension kit's families:

- `Accordion` — nalu-react container primitive
- `AspectRatio` — nalu-react layout primitive
- `Badge` — nalu-react data-display primitive
- `BannerCard` — nalu-react promotional banner card (added 1.190.0)
- `BaseCard` — nalu-react card primitive
- `BaseInput` — nalu-react input primitive (added 1.181.0)
- `BrandLogo` — nalu-react brand-asset component
- `BrandMark` — promoted site chrome (per-brand logo marks)
- `Carousel` — nalu-react data-display primitive
- `Checkbox` — nalu-react form control
- `Chip` — nalu-react selectable pill
- `ChipGroup` — nalu-react chip container
- `ComboBox` — nalu-react searchable select (added 1.182.0)
- `DesktopShell` — promoted site chrome (header + content + footer)
- `Dialog` — nalu-react modal surface
- `DialogContent` — sub-part of `Dialog`
- `DialogFooter` — sub-part of `Dialog`
- `DialogHeader` — sub-part of `Dialog`
- `Divider` — nalu-react data-display primitive
- `Dropdown` — nalu-react form control
- `DropdownInput` — sub-part of `Dropdown`
- `DropdownItem` — sub-part of `Dropdown`
- `EmptyState` — nalu-react feedback primitive
- `ExpandableText` — nalu-react data-display primitive
- `Fab` — nalu-react floating action button
- `FeaturedOfferCard` — nalu-react editorial offer card (added 1.190.0)
- `Flag` — nalu-react data-display primitive
- `FlexibleRetailerLogo` — nalu-react retailer-logo variant
- `Heading` — nalu-react typographic primitive
- `HorizontalBaseCard` — nalu-react card (supersedes deprecated `OfferBaseCard`)
- `InputField` — nalu-react labelled input
- `Island` — nalu-react container primitive
- `Link` — nalu-react anchor primitive
- `ListItem` — nalu-react container row
- `LogoOfferCard` — nalu-react wide list-row offer card (added 1.193.0)
- `MobileShell` — promoted site chrome (mobile header + menu + footer)
- `OfferCaption` — nalu-react data-display primitive
- `OfferCard` — nalu-react general offer card
- `PaginationIndicator` — nalu-react feedback primitive
- `PasswordInput` — nalu-react input variant
- `PredefinedTag` — nalu-react preset Tag types (added 1.183.0)
- `ProgressTracker` — nalu-react status timeline (added 1.203.0)
- `ProgressTrackerItem` — one step of `ProgressTracker` (added 1.203.0)
- `Radio` — nalu-react form control
- `Rating` — nalu-react data-display primitive
- `RetailerLogo` — nalu-react retailer logo
- `Scrim` — nalu-react overlay backdrop (added 1.178.0)
- `SearchInput` — nalu-react input variant
- `ShellTweaks` — promoted site chrome (review Tweaks panel)
- `ShellTweaksContext` — context published by `ShellTweaks`
- `SiteFooter` — promoted site chrome (footer)
- `SiteHeader` — promoted site chrome (header)
- `Snackbar` — nalu-react feedback primitive
- `Stepper` — nalu-react progress wizard
- `StepperItem` — sub-part of `Stepper`
- `SupportText` — nalu-react form helper text
- `Switch` — nalu-react form control
- `SystemMessage` — nalu-react feedback primitive
- `Tag` — nalu-react data-display primitive
- `TagsGroup` — nalu-react wrapping Tag row (added 1.190.0)
- `ToggleButton` — nalu-react action control
- `Tooltip` — nalu-react feedback primitive
- `UnstyledIcon` — unstyled alias of `Icon`
- `ValueOfferCard` — nalu-react offer card (added 1.185.0)
- `VerticalBaseCard` — nalu-react card
- `VerticalBaseCardLite` — nalu-react card variant

| Folder | Components |
|---|---|
| `components/Icon/` | `Icon` |
| `components/Button/` | `Button` |
| `components/actions/` | `IconButton`, `Fab`, `Link`, `ToggleButton` |
| `components/data-display/` | `Tag`, `Badge`, `Chip`, `Avatar`, `Rating`, `Divider`, `Heading`, `AspectRatio`, `RetailerLogo`, `FlexibleRetailerLogo`, `ChipGroup`, `PredefinedTag`, `TagsGroup`, `ProgressTracker` + `ProgressTrackerItem`, `ExpandableText`, `OfferCaption`, `BrandLogo`, `Flag`, `Carousel` |
| `components/forms/` | `InputField`, `SearchInput`, `Checkbox`, `Radio`, `Switch`, `SupportText`, `Stepper` (progress wizard) + `StepperItem`, `Dropdown` + `DropdownItem` + `DropdownInput`, `BaseInput` (input primitive), `PasswordInput`, `ComboBox` (searchable select) |
| `components/feedback/` | `Snackbar`, `SystemMessage`, `Tooltip`, `EmptyState`, `CircularProgress`, `PaginationIndicator`, `Dialog` (+ `DialogHeader` / `DialogContent` / `DialogFooter`), `Scrim` (overlay backdrop) |
| `components/cards/` | `BaseCard`, `HorizontalBaseCard`, `VerticalBaseCard`, `VerticalBaseCardLite`, `ValueOfferCard`, `BannerCard`, `FeaturedOfferCard`, `LogoOfferCard`, `OfferCard` |
| `components/containers/` | `Accordion`, `ListItem`, `Section`, `Island` |
| `components/chrome/` | `DesktopShell`, `SiteHeader`, `SiteFooter` (desktop site chrome), `MobileShell` (full mobile chrome), `ExtensionShell` (browser-extension popup chrome: header + bottom tab bar), `BrandMark` (real brand logos for the shells), `ShellTweaks` (auto-mounted review panel) |

### Site chrome (`components/chrome/`) — use these, never rebuild the header/footer

The page **chrome** (header · nav · footer) is a first-class part of the system so every generated
page is consistent. **The default, recommended entry point is one Shell per platform** — they're the
symmetric pair: one component renders the whole frame and your page content goes in `children`.

```jsx
const { DesktopShell, MobileShell } = window.DesignSystem_6a9729;

// Desktop — header + content + footer in one wrapper
<DesktopShell loggedIn user={{ available: 42.5, pending: 7.2 }}>
  …your page body…
</DesktopShell>

// Mobile — the same shape, in a ~390px phone stage
<MobileShell loggedIn user={{ available: 42.5, pending: 3 }}>
  …your page body…
</MobileShell>
```

Both bake in iGraal content as defaults and accept props to override everything: header props
(`brand`, `loggedIn`, `user`, `nav`, `suggested`, `account`, `labels`, `logo`, `showNav`,
`showSearch`) pass straight through, and footer content is one `footer={{ … }}` object.

**Built-in Tweaks panel (auto-on).** Both shells auto-mount the bundled `ShellTweaks` review panel
— a **Logged-in toggle · Brand select · Language select** — so *any* page using a shell gets the
controls with **no wiring**. It's **toolbar-gated** (hidden until the reviewer turns Tweaks on in the
toolbar) and draggable; state persists in localStorage. The shell owns this state, so the panel's
controls drive the chrome directly (brand re-skins via `data-brand` on `<html>`; the header's
Login/Signup also flip the toggle). Opt out with **`devTweaks={false}`** for a clean/production view.

The **Language** control selects localized chrome from a `lang→content` map: pass `content={…}` or
load `window.IGRAAL_DESKTOP_CONTENT` / `window.IGRAAL_MOBILE_CONTENT` (the templates do). Without a
content map a bare shell stays in its English defaults (the toggle still sets `document.lang`). The
live `{ loggedIn, brand, lang }` is published on `ShellTweaksContext` so page content **inside the
shell's React tree** can localize off the same language. For page content that is **not** a React
child of the shell (e.g. a `.dc.html` body, or plain markup), use the public hook instead: read
`window.NaluLang` for the current language and listen for `window` `nalu:langchange`
(`e.detail.lang`) to re-render on change. Both fire whenever the Language tweak changes.

**Under the hood `DesktopShell` is just `SiteHeader` + `children` + `SiteFooter`** — so if you need
to interleave custom layout *between* the header and footer, drop down to the individual pieces:

- **`SiteHeader`** — desktop sticky header (logo · search with suggested-brands dropdown · guest
  Login/Signup or logged-in balance + account dropdown) **plus the category subnav with working
  hover mega-menus**. All dropdown/hover/positioning state is internal.
- **`SiteFooter`** — desktop footer (brand logo, app-store badges, social row, two link columns,
  legal line, and a **country selector that switches language** — wired to the same `lang` state as
  the Tweaks Language control; `DesktopShell` connects it automatically).

> **Naming convention:** `*Shell` = the complete chrome wrapper (content as `children`);
> `SiteHeader` / `SiteFooter` = the composable desktop pieces. Mobile ships only `MobileShell`
> because its full-screen overlays and fixed phone stage must own the layout — splitting it into
> a separate header/footer would force consumers to rebuild that plumbing by hand.

All chrome bakes in iGraal content as defaults and accepts props to override every label/list/field;
the iGraal wordmark logo is inlined (tinted via `currentColor`) so it reskins, with a styled
wordmark for other brands or a `logo` prop to supply a real mark. Styling is token-driven in
`components/components.css`, so `[data-brand]` reskins them. **The `igraal-desktop` / `igraal-mobile`
templates consume these same components** (the desktop template uses `DesktopShell`) — there is one
implementation, not a template copy. When a page needs the header/nav/footer, import these; do not
hand-build chrome from raw markup (that is how the hover sub-menus and footer break).

- **Styling** lives in `components/components.css` (token-driven, so `[data-brand]` re-skins every
  component). **Icons** come from `components/_sprite.js` (inlined `<symbol>` sprite, `<use href="#code">`).
- The offer cards (`HorizontalBaseCard` / `VerticalBaseCard`) and their Cashback/Voucher variants
  are registered components under `components/cards/`.
- Usage in a consuming `@dsCard` HTML: `const { Button, Tag } = window.DesignSystem_6a9729;`

---

## Exporting / deploying (e.g. Vercel) — what happens to Tweaks

The built-in **Tweaks panel is a review affordance, not shipped UI**, and the brand/language/logged-in
state you pick in the editor is **session state, not part of the page's code**. Two consequences
surprise people on a static deploy:

1. **The panel disappears.** It's *toolbar-gated* — it only shows after the editor toolbar turns
   Tweaks on (a host `postMessage`). A deployed site has no host toolbar, so the panel never appears.
2. **The page reverts to defaults.** Your selections live in `localStorage`, scoped to the editor's
   origin. A deploy is a **different origin** with empty storage, so the shell falls back to its
   **seed props** (`brand`, `lang`, `loggedIn` — defaulting to iGraal / `en` / guest). Your in-editor
   choices don't travel with the export.

So a deploy reflects the **code's seed**, never the last thing you clicked in the panel. Pick one of
two paths depending on intent:

**A — Frozen snapshot (most common: a demo or handoff in one configuration).** Bake the configuration
into the shell's seed props, then deploy. The page now *defaults* to exactly that, with no panel:

```jsx
// Deploys as Shoop, in German, logged-in — no Tweaks panel.
<DesktopShell brand="shoop" lang="de" loggedIn devTweaks={false}>
  …page…
</DesktopShell>
```

**B — Live switcher on the deploy (a sharable demo stakeholders can flip themselves).** Keep an
**ungated** panel with `devTweaks="always"`; the seed props set its *initial* state, and visitor
choices persist in that origin's `localStorage`:

```jsx
<DesktopShell brand="shoop" lang="de" devTweaks="always">
  …page…
</DesktopShell>
```

> Forking a template? The same applies — set the seed in the shell call inside `index.html` / the
> app file (and add `devTweaks="always"` there for a live switcher). If brand/language switching is a
> *real product feature* rather than a demo control, build it as actual header chrome wired to the
> shell props + the `nalu:langchange` hook — don't ship the dev panel as the product UI.

### Brand reskins for free — language does NOT

On a deploy the **Brand** selector keeps working with zero extra effort: re-skinning is pure CSS
(`data-brand` on `<html>`, every token in the bundle). The **Language** selector is different. The
shell only ships translated **chrome** strings for the languages present in its `content` map
(`window.IGRAAL_*_CONTENT` / the `content` prop). The **page body copy you author** is only localized
in the languages **you actually wrote** — switching language fires `nalu:langchange` and sets
`<html lang>`, but if the body has only Spanish strings, the body stays Spanish no matter what the
selector says. (This is the usual cause of "the brand switches but the copy doesn't translate" on a
deploy.)

> **ALWAYS ASK before exporting/deploying a page that has a Language tweak.** Claude must ask the
> user: **(1) should the translated copy be exported at all, and (2) if so, for which languages?**
> Then make the export match the answer:
> - **Single language** → bake `lang` into the seed and consider `devTweaks={false}` / dropping the
>   Language control (or pass a one-entry `langs={[…]}`), so the deploy doesn't offer languages whose
>   copy doesn't exist.
> - **Several languages** → ensure the **body copy** is authored in each chosen language (a `lang →
>   strings` map the body reads via `window.NaluLang` + `nalu:langchange`, mirroring how `content.js`
>   localizes the chrome), and pass `langs` listing exactly those languages. Don't expose a language
>   in the selector unless its body copy ships.

Never silently deploy a multi-language selector over single-language body copy — that's exactly the
mismatch the reviewer hit (chrome/brand switch, body copy frozen in one language).

---

## Templates (`templates/`) — when to use them

Templates are **fork-ready whole pages**, not components. Each is a folder a consuming project copies
wholesale and then edits one thing. They appear as a **Templates** group in the picker consuming
projects see.

| Template | Use it to start… |
|---|---|
| `templates/igraal-desktop/` | any **desktop** iGraal page (home, store, wallet, gift cards, landing…) |
| `templates/igraal-mobile/` | any **mobile** iGraal page (≈390px phone stage) |

Each folder ships:
- the **chrome** already mounted — `DesktopShell` / `MobileShell` from the bundle (header, nav,
  search/account dropdowns, footer), so the parts that are hard to get right come working;
- **`body.jsx`** — the `GenericBody` placeholder + the localized-content context. **This is the only
  file you replace**; swap `GenericBody` for your real page content;
- **`content.js`** — all copy + nav/footer data, localized EN/ES/FR/DE/PL;
- a pre-wired **Tweaks panel** (logged-in state, brand, language, wallet balance);
- **`ds-base.js`** — the one-line loader that pulls in the DS stylesheets + `_ds_bundle.js`, plus the
  React/Babel boilerplate in `index.html`.

### When to use a template vs. the components directly

| If you're… | Do this |
|---|---|
| Building a **whole page / app surface** — the common case | **Fork the matching template.** You write content, not chrome + Tweaks + loader plumbing. |
| Adding a chrome'd page into an **existing app/bootstrapping**, or you need **custom layout between header and footer** | **Compose the bundled chrome** — `DesktopShell` / `MobileShell` (or `SiteHeader` + `SiteFooter`) from `window.DesignSystem_6a9729`. |
| Showing **one component in isolation** (a card grid, a form) with **no site chrome** | **Just import that component** from the bundle — no template, no shell. |

The rule of thumb: **a full page → fork a template; a fragment or an embed → import components.**
Either way the chrome is the *same bundled implementation* — a template is just that implementation
pre-assembled with content, state and loaders so you don't re-wire it (and don't hand-rebuild the
chrome, which is how the hover menus and footer break).

---

## Manifest entry — Templates

- **Templates** — `templates/igraal-desktop/`, `templates/igraal-mobile/` and `templates/extension-popup/`
  (“Browser Extension”): ready-to-fork whole pages that consume the bundled chrome (replace only the
  body). **The default starting point for a whole page** — see *Templates (`templates/`)* above.
