# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # Start the HTTP server (http://localhost:3000)
npm run dev     # Same as npm start
```

## Architecture

This is a minimal Node.js project with two files:

- **`index.js`** — A plain Node.js HTTP server (no frameworks) that serves static files from the project root. Requests to `/` serve `timer.html`.
- **`timer.html`** — A self-contained single-file stopwatch app. All CSS and JavaScript are inline — no build step, no dependencies.

The server runs on port 3000 by default.
