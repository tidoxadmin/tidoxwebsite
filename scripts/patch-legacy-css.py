#!/usr/bin/env python3
"""Patch legacy built CSS so pre-Astro product pages use IPTV player palette."""
from pathlib import Path

CSS = Path(__file__).resolve().parents[1] / "_astro" / "app-locker.vlwaSPam.css"

REPLACEMENTS = [
    ("--color-surface-base:oklch(13% .005 260)", "--color-surface-base:#303030"),
    ("--color-surface-raised:oklch(16% .005 260)", "--color-surface-raised:#2a2a2a"),
    ("--color-surface-overlay:oklch(19% .008 260)", "--color-surface-overlay:#424242"),
    ("--color-border-default:oklch(25% .01 260)", "--color-border-default:#ffffff33"),
    ("--color-border-subtle:oklch(20% .008 260)", "--color-border-subtle:#ffffff19"),
    ("--color-text-primary:oklch(97% .005 260)", "--color-text-primary:#f5f5f5"),
    ("--color-text-secondary:oklch(70% .01 260)", "--color-text-secondary:#cccccc"),
    ("--color-text-muted:oklch(50% .01 260)", "--color-text-muted:#a3a3a3"),
    ("--color-accent-violet:oklch(62% .26 290)", "--color-accent-violet:#f44336"),
    ("--color-accent-cyan:oklch(72% .15 195)", "--color-accent-cyan:#ff8a80"),
    ("--color-success:oklch(72% .19 155)", "--color-success:#32cd32"),
    ("--color-error:oklch(65% .22 25)", "--color-error:#ff5252"),
    ("oklch(62% .26 290/.15)", "rgb(244 67 54 / 0.15)"),
    ("oklch(62% .26 290/.08)", "rgb(244 67 54 / 0.08)"),
    ("oklch(62% .26 290/.25)", "rgb(244 67 54 / 0.25)"),
    ("oklch(62% .26 290/.12)", "rgb(244 67 54 / 0.12)"),
    ("oklch(62% .26 290/.06)", "rgb(244 67 54 / 0.06)"),
    ("oklch(62% .26 290/.1)", "rgb(244 67 54 / 0.1)"),
    ("oklch(72% .15 195/.08)", "rgb(255 138 128 / 0.08)"),
    ("oklch(65% .22 260/.1)", "rgb(211 47 47 / 0.1)"),
    ("oklch(62% .26 290/.3)", "rgb(244 67 54 / 0.3)"),
    ("#8a60ff26", "#f4433626"),
    ("#8a60ff4d", "#f443364d"),
    ("#8a60ff66", "#f4433666"),
    ("background:#0c0d0f99", "background:rgb(66 66 66 / 0.6)"),
    ("background:#060709d9", "background:rgb(48 48 48 / 0.85)"),
    ("border:1px solid oklch(25% .01 260/.4)", "border:1px solid rgb(255 255 255 / 0.08)"),
    ("border-bottom:1px solid oklch(25% .01 260/.3)", "border-bottom:1px solid rgb(255 255 255 / 0.08)"),
]

def main() -> None:
    if not CSS.exists():
        print(f"skip: {CSS.name} not found")
        return
    text = CSS.read_text()
    original = text
    for old, new in REPLACEMENTS:
        text = text.replace(old, new)
    if text != original:
        CSS.write_text(text)
        print(f"patched {CSS}")
    else:
        print(f"no changes for {CSS}")

if __name__ == "__main__":
    main()
