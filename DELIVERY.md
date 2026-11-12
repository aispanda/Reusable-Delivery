# Delivery: start here

Version 0.4 — proposed method. Use this single entry point to create new work or migrate existing work. Read only the selected route and its shared requirements; do not recursively load every link.

## Choose one route

- **[Create new work → NEW.md](NEW.md)** — start a new story and its repository folder from an outcome or brief.
- **[Migrate existing work → MIGRATE.md](MIGRATE.md)** — organize work that already has a story, artifacts, decisions or delivery evidence.

Use the request and relevant current context to choose. If intent remains ambiguous, ask one concise question before route-dependent writes. For mixed work, read both routes at one SHA and migrate first. Put genuinely new scope in a separate linked story unless existing user authority permits extending the original criteria; record an extension as a material change with affected checks. Record the route as MIGRATE+NEW. Do not create an extra ClickUp item without authority; stop only that write if its destination or authority is unresolved.

## Required reading before acting

Resolve this guide repository’s selected branch/tag to one commit SHA. Read this entry, the selected route and **CORE.md in full from that same SHA**. Record the SHA and route in the resulting story. If this entry was initially read from a moving branch, reread it at the resolved SHA. Relative links on a commit-pinned GitHub page stay within that revision; API clients must pass the SHA explicitly.

If required content is missing, inaccessible or incomplete, stop dependent execution and report the missing file. Do not guess its rules or silently use an older copy. Continue only independent authorized work that cannot be invalidated by the gap. Refresh deliberately and reconcile changes rather than mixing revisions. This reading protocol needs the executor to enforce it; it is not an automatic loader.

Examples and validation history are optional. The selected route identifies the common template and rules; neither route can skip them to save tokens. The user’s existing authority governs every action; this guide grants none.

## Copyable story

The template now lives in [CORE.md — Copyable story](CORE.md#copyable-story). Follow the required reading above before using it.

## Short prompt

“Use https://github.com/aispanda/Reusable-Delivery/blob/main/DELIVERY.md to create or migrate this story, preserving its requirements and evidence.”

Add the outcome or source story only when it is not already clear from context.
