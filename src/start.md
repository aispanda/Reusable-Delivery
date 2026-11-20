This entry holds the route and tells you which shared modules to load. Fetch each module as raw text from `https://raw.githubusercontent.com/aispanda/Reusable-Delivery/<SHA>/modules/<file>` using the same pinned SHA as this entry. When several triggers apply, load every listed module before the action. Load each once per task at that SHA and reuse its verified contents while available.

Track the route, SHA, modules loaded, current step, results, blockers and next action in the story's linked execution record, or in the story while no separate record is needed. Read and update the current revision of that record, not a pinned copy linked from the story. A module is complete when its last line is its end marker. If a required module is missing, truncated or at another SHA, stop the dependent action, read the full guide for this route at the pinned SHA instead and record the fallback where you track progress. A full guide is complete when it ends with the Supporting detail when needed section and its validation history sentence. [NEW](../new/DELIVERY.md) · [MIGRATE](../migrate/DELIVERY.md). If that guide is also unavailable or incomplete, keep the dependent action blocked. Skip optional references and modules whose triggers do not apply.

| Load | Module | Holds |
|---|---|---|
| Now | [agreement.md](../modules/agreement.md), [privacy.md](../modules/privacy.md), [story.md](../modules/story.md) | Working agreement, privacy rules for story content, copyable story and criteria |
| Before recording any check or step status or the next action, dispatching or running any step | [execution.md](../modules/execution.md), [states.md](../modules/states.md) | Executors, bounded execution and evidence states |
| Before deriving platform checks or reading or changing an external platform | [platform.md](../modules/platform.md) | Platform access and documentation checks. Open a recovery guide only when its probe fails |
| Before automation, a decision model or LangGraph | [automation.md](../modules/automation.md) | Automation rules |
| Before planning or making a code, configuration or data change, a push to the default branch, an intended user test, review, PR, deployment, merge or handoff | [review.md](../modules/review.md) | Testing, review and PR rules, including CodeRabbit first and fresh Claude Opus 5.5 last |
| Before a commit, push, publication or ClickUp write | [publication.md](../modules/publication.md) | Publication, ClickUp and link rules. Apply the chosen route's ClickUp steps too |
| Before demo work, a blocker entry, admin guidance or closeout | [using.md](../modules/using.md) | Using the story |
| Before design, research, debugging, configuration or OOTB exploration | [reference.md](../modules/reference.md) | Supporting detail when needed |
| Before CI or repository check work | [CODE-QUALITY.md](../CODE-QUALITY.md) | Code quality checks at this same SHA |

Read worked examples, model examples, archive, validation history and optional repository settings only when useful. A section named in the route refers to every module that holds part of it: Privacy, publication and links is privacy.md and publication.md, and Executors and bounded execution is execution.md and states.md, plus automation.md when its trigger applies.
