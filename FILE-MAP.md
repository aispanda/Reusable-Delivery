# File map

This map describes the repository's maintained content. Start with [README.md](README.md); use the complete route guide for delivery work. Existing commit-pinned links continue to identify historical versions.

| Location | Purpose and maintenance |
|---|---|
| [README.md](README.md), [FILE-MAP.md](FILE-MAP.md) | Entry point and this maintained inventory. |
| [DELIVERY.md](DELIVERY.md) | Route selector when new versus existing work is unclear. |
| [new/DELIVERY.md](new/DELIVERY.md), [migrate/DELIVERY.md](migrate/DELIVERY.md) | Complete generated guides for new work and migration. Read the chosen guide at one pinned commit; do not edit these outputs directly. |
| [src/bootstrap.md](src/bootstrap.md), [src/core.md](src/core.md), [src/new.md](src/new.md), [src/migrate.md](src/migrate.md) | Maintainer-authored sources for the generated guides. |
| [scripts/build_guides.py](scripts/build_guides.py) | Generates both guides; `python3 scripts/build_guides.py --check` detects drift. |
| [NEW.md](NEW.md), [MIGRATE.md](MIGRATE.md), [CORE.md](CORE.md) | Compatibility pointers to the complete guides. |
| [CODE-QUALITY.md](CODE-QUALITY.md) | Guidance for planning and running code checks. |
| [docs/salesforce-mcp.md](docs/salesforce-mcp.md), [docs/salesforce-cli.md](docs/salesforce-cli.md) | Salesforce access verification and recovery guides. Open the matching guide when its probe fails. |
| [EXAMPLE.md](EXAMPLE.md), [VALIDATION.md](VALIDATION.md) | Optional example and validation/history material; not substitutes for the selected route. |
| [User guide PDF](references/AI-Spanda-Reusable-Delivery-User-Guide.pdf), [QA PDF](references/AI-Spanda-Reusable-Delivery-QA.pdf) | Supporting reference documents. |
| [.github/workflows/python-checks.yml](.github/workflows/python-checks.yml) | Repository automation for Python and generated-guide checks. |
| [.gitignore](.gitignore) | Root ignore rules; ignored paths are not approved restricted storage and do not untrack existing files. |
| [pilots/meta-01-metadata-documentation/](pilots/meta-01-metadata-documentation/) | Reusable Salesforce configuration workbook and metadata explorer experiment. Its [story](pilots/meta-01-metadata-documentation/story.md) is the authoritative checklist; [pilot evidence](pilots/meta-01-metadata-documentation/pilot-evidence.md) records observed checks and limits, and the [plan review](pilots/meta-01-metadata-documentation/review-f50a027.md) and [recheck](pilots/meta-01-metadata-documentation/review-37da80a.md) record model judgments on specific snapshots. Its own [`.gitignore`](pilots/meta-01-metadata-documentation/.gitignore) excludes local source copies and generated output. |

When adding, moving or retiring maintained files, update this map and check its links. Do not list private inputs, credentials, raw exports or local generated artifacts here.
