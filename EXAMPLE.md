# Worked demo

See the [current worked demo](modules/using.md#example-quantity-rules-and-volume-pricing) or the [archived full story example](archive/pre-governance/EXAMPLE.md).

## Checklist example

The synthetic [invoice story](examples/story.md) with its [acceptance criterion](examples/invoice.scenarios.example.json), [checklist](examples/checklist.example.json), [agent roster](examples/agent-roster.example.json), and [blockers](examples/blockers.example.json) show two independent setup tasks, a verification task that requires both, and a story acceptance decision that remains pending. Task C-03 links the exact flag rule and replays the A-01 procedure on three fixtures. The checklist uses the [schema](templates/checklist.schema.json) and [shared field guide](templates/story-package.fields.json).

A-01 version 2 pins the date and the invoice due dates for repeatable execution. The existing synthetic checklist evidence predates this change. [QA test templates and examples](docs/qa-test-starters.md)

## Scenario example

The synthetic [scenario definitions](examples/scenarios.example.json) cover a draft reviewer opening a source PDF and a user without access being denied. The [synthetic run records](examples/results.example.json) show the private result format with fake evidence references. No real runs are represented.

At build `syn_rev_b`, AC-03 passes on Desktop UI and Backend. AC-04 shows a stale Desktop UI pass from `syn_rev_a` and a current Backend failure, so its criterion result is Fail. Mobile UI is unchecked in both scenarios.
