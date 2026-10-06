# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step, no framework. Must load fast on a weak mobile connection and work on any free static host (GitHub Pages, Netlify).

## Users

Residents of Jaru–RO on their phones, usually at night or before dawn, often in a hurry because someone is sick. They want to know one thing: which pharmacy is open right now, and how to get there.

## Product Purpose

Answer "which pharmacy is on duty right now in Jaru?" within seconds, without making anyone download or read the city hall's monthly PDF. It succeeds when someone opens it at 2am and leaves knowing the name and address of the open pharmacy.

## Positioning

Everything is worked out ahead of time. Duty runs from 22:00 to 07:00 the next day, so after midnight the open pharmacy belongs to the previous date. The site handles that in Rondônia's timezone, so the visitor doesn't have to do the math themselves the way they would with the PDF.

## Operating Context

- Official schedule: monthly PDFs from the Prefeitura de Jaru, drawn up by ACIJ (Associação Comercial e Industrial de Jaru), half a year at a time.
- Duty window: 22:00 on date D to 07:00 on D+1, timezone America/Porto_Velho (UTC-4).
- During the day (07:00–21:59) shops keep normal hours; the useful answer then is who covers tonight.
- Addresses use the town's sector names ("Setor 05", "Savana").

## Capabilities and Constraints

- Shows the pharmacy on duty now, or tonight's if it's daytime, with address, sector and a Google Maps link.
- Lists the next nights and the full month's schedule.
- Data lives in `data/escala.js` and is updated by hand when ACIJ publishes a new schedule. It currently covers Oct–Dec 2026.
- Must handle dates outside the covered range honestly instead of showing a wrong pharmacy.
- No brand. Neutral name: "Plantão Jaru". Not affiliated with the city hall or ACIJ.

## Evidence on Hand

- Official schedule Oct–Dec 2026, transcribed in `data/escala.js` with links to the source PDFs.
- **No phone numbers**: the official PDFs don't list them. Do not invent phone numbers, opening hours outside the duty window, ratings, or photos of storefronts.

## Product Principles

1. The answer comes first: the name and address of the open pharmacy before anything else.
2. Never guess. If the date isn't in the official schedule, say so and point to the source.
3. Built for the worst moment: night, a small screen, a weak signal, someone stressed.
4. Show the source. Every schedule traces back to the city hall's PDF.

## Accessibility & Inclusion

Legible for older residents and in low light: large type, high contrast, generous tap targets, works without JavaScript animations, and meaningful with a screen reader.
