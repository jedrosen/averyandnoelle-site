# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for "Avery & Noelle", deployed to Vercel. Currently a placeholder page (`index.html`) with no build step — Vercel serves files directly.

## Deployment

Deployed via Vercel. Pushes to `main` trigger automatic deployments. The Vercel project is named `averybach` (project ID in `.vercel/project.json`).

## Known Issues

Two SSH key files were accidentally committed to the repo (`eval "$(ssh-agent -s)"` and `eval "$(ssh-agent -s)".pub`). These should be removed from git history using `git filter-branch` or `git filter-repo`.
