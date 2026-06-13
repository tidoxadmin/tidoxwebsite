# Tidox Website ⇄ Google Play Portfolio Metrics

_Snapshot: 2026-06-13. Source: Play Console (57 listings) vs `tidoxwebsite` static site._
_MindShield (`online.tidox.mindshield`) excluded by owner — do not publish._

## Headline numbers

| Metric | Count |
|---|---|
| Play Console listings (free+premium variants) | 57 |
| Unique apps (variants collapsed, excl. MindShield) | 29 |
| — Production (≥1 variant live) | 20 |
| — Draft / in review / internal testing | 9 |
| Website product pages present (after update) | 30 |
| Apps in website grid **before** update | 17 |
| Apps in website grid **after** update | 30 |
| New apps added to grid this update | 13 |
| Production apps still missing a website page | 0 |
| Pipeline apps with **no** website page yet | 0 |

_Update 2 (same day): built the 4 missing pipeline pages + icons, deduped `local-listen`. Grid 26 → 30, every Play app (excl. MindShield) now has a page._

## Apps added to the website this update (9)

Pages + icons already existed; they were just absent from the homepage grid/nav/footer/CTA. Now wired into all 5 surfaces.

| App | Package (free) | Play status | Page |
|---|---|---|---|
| Tidox Alarm | `online.tidox.alarm` | **Production** | `/alarm/` |
| Daily Companion | `online.tidox.parentstool` | **Production** | `/daily-companion/` |
| Tidox Piano | `online.tidox.piano` | **Production** | `/piano/` |
| Tidox Sentinel | `online.tidox.sentinel` | **Production** | `/sentinel/` |
| Tidox PDF Reader | `online.tidox.pdf.reader` | In review | `/pdf-reader/` |
| Tidox Reader | `online.tidox.reader` | In review | `/reader/` |
| Private Secure Browser | `online.tidox.secure.browser` | In review | `/secure-browser/` |
| Tidox Cleaner | `online.tidox.cleaner` | In review | `/cleaner/` |
| Tidox Sound Meter | `online.tidox.sound.meter` | In review | `/sound-meter/` |

## Already on website before update (17)

player, vr-player, audio-hub, offline-audio, scanner, task-manager, transcript, guitar-tuner, remote-control, qr-scanner, voice-memo, clipboard, app-locker, flashcards, kora, lucid, recording.

## Pipeline pages built this update (4)

Page + SVG icon created from scratch, wired into all 5 homepage surfaces.

| App | Package | Play status | Page |
|---|---|---|---|
| Tidox Beam: File Transfer | `online.tidox.beam` | In review | `/beam/` |
| Tidox Guardian: App Watchdog | `online.tidox.guardian` | In review / not yet sent | `/guardian/` |
| Tidox Local: Offline AI Chat | `online.tidox.local` | Draft | `/local/` |
| Tidox Prompt: AI Prompt Vault | `online.tidox.prompt` | Internal testing | `/prompt/` |

Play links target the free/base variant; live once each variant publishes.

## Notes / data hygiene

- `/local-listen/` page **deleted** — was a duplicate of `/offline-audio/` (both `online.tidox.local.listen`). `_redirects` now 301s `/local-listen` and `/local-listen/` → `/offline-audio/`.
- `audio-hub` is in the grid but has no distinct Play listing — likely a merged/legacy listing. Left untouched.
- "Published Apps" homepage stat updated 17 → **20** (true count of Production apps).
- Variant pairs (`.free`/`.premium`, `.pro`) collapse to one app each; website links to the free/base variant.
- **Open follow-up:** subpage nav/footer menus still list only the original 17 apps — the 13 added apps appear in the homepage grid but not in cross-page navigation. Site-wide nav propagation pending.
