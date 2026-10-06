---
name: Plantão Jaru
description: A farmácia de plantão impressa como a face de uma caixa de remédio; a tarja diz quem está aberta.
colors:
  band: "#f5c400"
  band-ink: "#141414"
  day-ground: "#e6e3dc"
  day-carton: "#f7f6f2"
  day-ink: "#141414"
  day-ink-2: "#4a4843"
  day-rule: "#cfcbc1"
  day-struck: "#5f5c55"
  day-alert: "#c8141c"
  day-alert-ink: "#ffffff"
  night-ground: "#0f0f0e"
  night-carton: "#1a1a18"
  night-ink: "#ecebe6"
  night-ink-2: "#a9a69d"
  night-rule: "#34332f"
  night-struck: "#8a877f"
  night-alert: "#ff5a52"
  night-alert-ink: "#141414"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 16vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.9
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.625rem, 3.5vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0"
    fontVariation: "'wdth' 75"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0"
    fontVariation: "'wdth' 75"
  address:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.25rem, 2.6vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum' 1"
  fine:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.06em"
rounded:
  box: "3px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  row: "12px"
  stack: "20px"
  group: "clamp(26px, 4vw, 36px)"
  section: "clamp(48px, 7vw, 88px)"
components:
  tarja-open:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    padding: "14px clamp(20px, 3.5vw, 40px)"
  tarja-alert-night:
    backgroundColor: "{colors.night-alert}"
    textColor: "{colors.night-alert-ink}"
  tarja-alert-day:
    backgroundColor: "{colors.day-alert}"
    textColor: "{colors.day-alert-ink}"
  box-night:
    backgroundColor: "{colors.night-carton}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.box}"
  box-day:
    backgroundColor: "{colors.day-carton}"
    textColor: "{colors.day-ink}"
    rounded: "{rounded.box}"
  button-primary-night:
    backgroundColor: "{colors.night-ink}"
    textColor: "{colors.band-ink}"
    rounded: "{rounded.box}"
    padding: "0 22px"
    height: "52px"
  button-primary-day:
    backgroundColor: "{colors.day-ink}"
    textColor: "{colors.day-carton}"
    rounded: "{rounded.box}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
  button-outline:
    rounded: "{rounded.box}"
    padding: "0 22px"
    height: "52px"
  tab-selected-night:
    backgroundColor: "{colors.night-ink}"
    textColor: "{colors.night-carton}"
    rounded: "{rounded.box}"
    padding: "0 14px"
    height: "48px"
  search-input-night:
    backgroundColor: "{colors.night-carton}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.box}"
    padding: "0 12px 0 38px"
    height: "44px"
  sheet-row-current:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
---

# Design System: Plantão Jaru

## Overview

**Creative North Star: "A Caixa de Remédio"**

The page is the printed face of a Brazilian medicine carton. The pharmacy on duty is the product name, set huge in heavy condensed capitals; the address and sector sit beneath it like the active ingredient and strength; the duty window is stamped like a lot and expiry mark. Across the top runs the tarja, the colored band that on a real box classifies the medicine and here classifies the moment: yellow means open now.

The world has two printings that follow the clock in Jaru (UTC-4): a light carton by day (07:00 to 17:59) and dark ink by night (18:00 to 06:59). Night is the primary printing because that is when people come. Everything else is ink on carton: one family (Archivo) at different widths and weights, hairline rules, square-ish corners, no imagery, no shadows used for lift. State is told by shape before color: a full band for now, an outlined band for tonight, a strike-through for nights that have passed.

Density is calm and large. The answer occupies the first viewport; supporting lists (the next nights, the month's "bula") are tabular, ruled, and quiet.

**Key Characteristics:**
- Carton and ink, two printings switched by Jaru's local hour, never by OS preference.
- One state color: the generic-medicine yellow band. Red only for warning (date outside the schedule, no data).
- Archivo condensed and heavy for names, regular width for prose, tabular numerals everywhere.
- State by form: full band, outlined band, struck through.
- A single printed wipe of the band is the only signature motion.

## Colors

Two neutral printings of ink on carton, one yellow band that means "open", one red band that means "warning".

### Primary
- **Generic Yellow Band** (`band`): the tarja of the box when a pharmacy is open now, the current night's row in the month sheet, the hover of the primary button, the focus ring, text selection, the caret, and the band inside the mark. Always paired with **Band Ink** (`band-ink`) text, in both printings.

### Tertiary
- **Warning Band Red** (`day-alert` by day, `night-alert` by night, brightened for dark ground): the tarja only, when the date is outside the published schedule or the data failed to load. Text on it uses `day-alert-ink` / `night-alert-ink`.

### Neutral
- **Carton Ground** (`day-ground` / `night-ground`): page background; also the browser `theme-color`.
- **Carton Face** (`day-carton` / `night-carton`): the box surface and the search field.
- **Ink** (`day-ink` / `night-ink`): primary text, strong rules (`rule-strong` is the same value), outline borders, and the primary button fill.
- **Faded Ink** (`day-ink-2` / `night-ink-2`): secondary text, weekdays, addresses in lists, table headers, footer.
- **Hairline** (`day-rule` / `night-rule`): box border, row dividers, idle tab and input borders.
- **Struck Ink** (`day-struck` / `night-struck`): text of nights that have already passed.

### Named Rules
**The One Band Rule.** Yellow means "open now" and nothing else carries a fill of it at rest. It appears filled only on the current tarja and the current sheet row; elsewhere only as an interaction response (primary hover, focus ring, selection, caret).

**The Red Is a Warning Rule.** Red is never decorative and never an accent; it fills the tarja only when the page cannot honestly name an open pharmacy.

**The Clock Theme Rule.** The printing is chosen by the hour in Jaru before first paint (night from 18:00 to 07:00), not by `prefers-color-scheme`. Both printings must define every neutral token.

## Typography

**Display Font:** Archivo (variable, width 62–100%, weight 300–900, self-hosted woff2) with Arial Narrow, sans-serif
**Body Font:** Archivo at normal width
**Label/Mono Font:** none; labels are Archivo uppercase with tracking

**Character:** One family stretched like a pharmaceutical label: the product name squeezed tall and black, the prose at normal width and easy to read in low light. Numbers are always tabular so times and dates line up.

### Hierarchy
- **Display** (850, `clamp(3.5rem, 16vw, 6rem)`, 0.9, width 68%, uppercase): the pharmacy name only. The generic prefix ("Farmácia") drops to weight 300 so the proper name dominates, like brand versus descriptor on a box.
- **Headline** (800, `clamp(1.625rem, 3.5vw, 2.25rem)`, width 75%, uppercase): the month sheet heading.
- **Title** (800, 1.375rem, width 75%, uppercase): section heads ("Próximas noites"), the tarja's state word (1.375rem, width 80%), and the sector "strength" line (800, address size, width 75%).
- **Address** (400, `clamp(1.25rem, 2.6vw, 1.625rem)`, 1.25): street and number under the name.
- **Body** (400, 1.0625rem, 1.5, tabular numerals): base text, buttons (700), list names (700, width 85%).
- **Fine** (400, 0.875rem): source notes, footer, list secondary lines; capped at 62–75ch.
- **Label** (600, 0.8125rem, 0.06em tracking, uppercase): table headers and the lot stamp (`dt` 400 at 0.08em, `dd` 700 at 0.04em).
- **Night numeral** (700, 1.75rem, width 75%): the date digit in the next-nights list.

### Named Rules
**The Narrow-for-Names Rule.** Condensed widths (68–88%) are for names, headings, and numerals that must be scanned. Running prose and addresses stay at normal width.

**The Tabular Rule.** `font-variant-numeric: tabular-nums` is set on the body; never turn it off for times or dates.

## Layout

A single centered column of max 1180px with a fluid gutter (`clamp(16px, 4vw, 40px)`). At desktop the first band is a two-column grid: the box (fluid) beside the next-nights list (`minmax(300px, 380px)`, 300px between 861 and 1000px), gap `clamp(24px, 3vw, 40px)`. The month sheet follows after a large section gap, then the footer.

Breakpoints: at 860px and below, the grid collapses to one column and the box goes full-bleed (no side borders, no radius). At 600px and below, the bar wraps and drops its link, buttons stack full width, the search takes a full row, and the sheet reflows from a table into a two-column grid per row (date block left, name and address right); the current row's yellow band bleeds to the screen edges.

Spacing rhythm is small and ruled: 10–14px row padding, 20px between the name block's stacked parts, `clamp(26px, 4vw, 36px)` before actions, `clamp(48px, 7vw, 88px)` between major sections. Tap targets are 44px minimum (search), 48px (tabs), 52px (buttons).

## Elevation & Depth

Flat. Depth is printing, not lighting: the box separates from the ground by a one-step tonal shift (ground to carton) and a 1px hairline. There are no ambient or lift shadows. The only `box-shadow` uses are inset 2px ink rules that draw the outlined "tonight" band, and, on mobile, zero-blur horizontal spreads that extend the current row's yellow to the screen edges. Both are print devices, not elevation.

### Named Rules
**The Printed Not Lifted Rule.** Nothing floats. If a surface needs to stand apart, change its tone or rule it; never add a drop shadow.

## Shapes

Near-square cardboard. One radius (`rounded.box`, 3px) for the box, buttons, tabs, the search field, and the focus ring. The box loses its radius when it goes full-bleed on small screens. The lot stamp is fully square with a 1px ink border split by a vertical rule. Lines carry structure: 2px ink rules open each list and the sheet head, 1px hairlines divide rows. Icons are 1.75px round-capped strokes in `currentColor`, 18–20px; the mark is a carton outline with a filled yellow band.

## Components

### Tarja (State Band)
The signature. A full-width band at the top of the box carrying the state word (bold, condensed, uppercase) left and the time limit right, wrapping on narrow screens.
- **Open now:** `band` fill, `band-ink` text.
- **Tonight (daytime):** transparent, ink text, outlined top and bottom by 2px inset ink rules.
- **Unknown / no data:** alert fill, alert-ink text; the primary button swaps its pin icon for an external-link icon and points to the source.
- **Motion:** a single left-to-right `clip-path` wipe (900ms, `ease-out` `cubic-bezier(0.16, 1, 0.3, 1)`) on load and when the state flips at 22:00 or 07:00. Removed under reduced motion.

### Box (Carton Face)
- **Corner Style:** 3px, 0 when full-bleed (≤860px).
- **Background:** carton face; 1px hairline border.
- **Shadow Strategy:** none (see Elevation).
- **Internal Padding:** `clamp(24px, 4vw, 44px)` top, `clamp(20px, 3.5vw, 40px)` sides.
- **Contents in order:** name (display), address, sector (strength), lot stamp, actions, fine print above a hairline.

### Lot Stamp
An inline square-bordered `dl` with "Início" and "Fim" cells, uppercase 0.8125rem, label in faded ink and value bold. It records the duty window like a printed lot/expiry mark.

### Buttons
- **Shape:** 3px radius, 52px min height, 0 22px padding, 1.5px border, 700 weight, 20px leading icon.
- **Primary:** ink fill with carton text (dark-on-light by day, light-on-dark by night). **Hover:** yellow band fill with band ink.
- **Outline (secondary):** transparent with ink border. **Hover:** fills with ink, text becomes carton.
- **Active:** 1px downward nudge. **Focus:** 3px yellow outline, 3px offset.
- Transitions 160ms on background, color, transform.

### Tabs (Month Switch)
48px tall, 0 14px padding, hairline border, 600 weight. Hover darkens the border to ink; selected (`aria-selected`) fills with ink and carton text.

### Inputs / Fields
- **Style:** carton fill, 1px hairline border, 3px radius, 44px tall, inline search icon at 12px from the left in faded ink, yellow caret.
- **Hover:** border to faded ink. **Focus:** global 3px yellow outline.

### Navigation (Bar)
A thin row: the mark (carton icon with yellow band, 800 weight, 75% width, uppercase) left, Jaru's local clock (time bold, rest faded) right, then a text link to the month sheet. Links underline at 1px and thicken to 2px on hover. The link hides at ≤600px.

### Next-Nights List
Ordered list under a 2px ink rule; each row is a 58px date column (big condensed numeral over a lowercase weekday or "amanhã") and a name/address column, divided by hairlines.

### Month Sheet ("Bula")
A ruled table: uppercase tracked headers in faded ink, hairline row dividers. Row states by form: **past** rows in struck ink with a 1.5px line-through on date and name; **tonight** outlined by 2px inset ink rules; **current** filled with the yellow band (bleeding edge to edge on mobile, marked `aria-current="date"`). Reflows to a two-column card-less grid at ≤600px.

## Do's and Don'ts

### Do:
- **Do** keep the yellow band (`band`) as the only "open" signal, always with `band-ink` text.
- **Do** express state by form first: full band for now, 2px outlined band for tonight, struck-through for past.
- **Do** set pharmacy names in Archivo at 68% width, weight 850, uppercase, and let the generic prefix drop to 300.
- **Do** choose the night or day printing from Jaru's hour (18:00–07:00 is night) before first paint, and define every neutral for both.
- **Do** keep tap targets at 44px minimum and buttons at 52px.
- **Do** use 1px hairlines and 2px ink rules for structure, and a 3px radius at most.
- **Do** honor `prefers-reduced-motion` by removing the tarja wipe and theme transitions.

### Don't:
- **Don't** use red anywhere but the warning tarja.
- **Don't** add drop shadows, glows, or gradients for depth; the carton is flat.
- **Don't** bring in a second typeface; widths and weights of Archivo carry the hierarchy.
- **Don't** add motion beyond the single band wipe and the 600ms theme crossfade.
- **Don't** fall back to the category default of a white card with a green cross and a generic list.
