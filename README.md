# Reusable-Delivery

[Start here](DELIVERY.md) when the route is unclear, or use one complete guide directly:

> Use https://github.com/aispanda/Reusable-Delivery/blob/main/new/DELIVERY.md for the new work in this chat.

> Use https://github.com/aispanda/Reusable-Delivery/blob/main/migrate/DELIVERY.md for the existing work in this chat, preserving requirements, decisions and evidence.

For an unknown route: use https://github.com/aispanda/Reusable-Delivery/blob/main/DELIVERY.md for the work in this chat.

[OOTB discovery and experiments](references/ootb-experiments.md) is optional guidance for cataloging standard capabilities, testing candidates and carrying results into delivery.

[Code quality checks](CODE-QUALITY.md) shows how to plan verification in a story checklist and reuse a Python CI workflow when applicable.

Replace `main` with a verified commit SHA for a pinned handoff. The guide explains revision resolution and context reuse. Examples and validation history are optional. GitHub holds detailed delivery material; ClickUp tracks title, optional story sentence, folder/story links, ownership, dates and status. Private values remain in approved restricted storage; `.gitignore` does not protect tracked files or history.

The two complete guides share authoring sources under `src/`; executors do not need to read those files. Maintainers need Python 3.10 or later and run `python3 scripts/build_guides.py`, then `python3 scripts/build_guides.py --check`. Do not edit generated guides directly. Word/file counts measure reading volume, not actual token, caching, latency or cost savings. Existing SHA-pinned links remain historical; guide upgrades must reconcile revisions.
