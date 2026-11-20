# Reusable-Delivery

Use [Delivery](DELIVERY.md) as the starting point for new or existing work:

> Use https://github.com/aispanda/Reusable-Delivery/blob/main/DELIVERY.md for the work in this chat.

The router opens the selected route and tells you which modules to read before each action. Complete [NEW](new/DELIVERY.md) and [MIGRATE](migrate/DELIVERY.md) guides are also available.

[OOTB discovery and experiments](references/ootb-experiments.md) is optional guidance for cataloging standard capabilities, testing candidates and carrying results into delivery.

[Code quality checks](CODE-QUALITY.md) shows how to plan and record verification and reuse a Python CI workflow when applicable.

[Worked example](EXAMPLE.md) · [User guide](references/AI-Spanda-Reusable-Delivery-User-Guide.pdf) · [QA guide](references/AI-Spanda-Reusable-Delivery-QA.pdf) · [Archive](archive/README.md)

Replace `main` with a verified commit SHA for a pinned handoff. The guide explains revision resolution and context reuse. Examples and validation history are optional. GitHub holds detailed delivery material; ClickUp tracks title/ID, grouping and filtering fields, ownership, dates and status; its description contains only the published story’s Outcome sentence copied verbatim and one direct link to the current GitHub story file. Private values remain in approved restricted storage; `.gitignore` does not protect tracked files or history.

The route entries, complete guides and modules share authoring sources under `src/`; executors do not need to read those files. Maintainers need Python 3.10 or later and run `python3 scripts/build_guides.py`, then `python3 scripts/build_guides.py --check`. Do not edit generated guides directly. Word/file counts measure reading volume, not actual token, caching, latency or cost savings. Existing SHA-pinned links remain historical; guide upgrades must reconcile revisions.
