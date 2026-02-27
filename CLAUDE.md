# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static wedding website for "Avery & Noelle", built with Next.js 15 + Tailwind CSS v4 + TypeScript, deployed to Vercel. Wedding date is TBD — search for `[DATE TBD]` to update it when confirmed.

## Development Commands

```bash
npm run dev      # local dev server (http://localhost:3000)
npm run build    # production build
npm run lint     # eslint
```

## Deployment

Deployed via Vercel. Pushes to `main` trigger automatic deployments.

> **Note:** The `.vercel/` project config was lost when the Next.js scaffold was set up. Run `vercel link` to re-link to the existing Vercel project (`averybach`) before deploying via CLI.

## Project Structure

```
src/
  app/
    layout.tsx          # Site-wide layout + navigation
    page.tsx            # Home / hero page
    our-story/          # Our Story page
    schedule/           # Day-of schedule
    travel/             # Travel, lodging, and catering
    rsvp/               # RSVP form (client component, UI-only for now)
    registry/           # Gift registry (jewelry + skis)
    dj/                 # DJ set / tracklist
    guest-list/         # 2013-14 Mountain Lakes lacrosse roster
  components/
    CountdownTimer.tsx  # Client component — set WEDDING_DATE when date confirmed
```

## Key Notes

- **Wedding date**: Currently `[DATE TBD]`. When confirmed, update `WEDDING_DATE` in `src/components/CountdownTimer.tsx` and replace all `[DATE TBD]` strings across the site.
- Fonts: Playfair Display (serif headings) + Inter (body) via `next/font/google`.
- RSVP form is UI-only — no backend yet. Add a form service (Formspree, Netlify Forms, etc.) when ready.

## Known Issues

Two SSH key files were accidentally committed to the original repo history (`eval "$(ssh-agent -s)"` and its `.pub`). These should be removed from git history using `git filter-repo` if the history matters.
