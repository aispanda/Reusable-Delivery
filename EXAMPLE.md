# Worked demo

See the [current worked demo](modules/using.md#example-quantity-rules-and-volume-pricing) or the [archived full story example](archive/pre-governance/EXAMPLE.md).

## Checklist example

The synthetic [invoice story](examples/story.md) with its [acceptance criterion](examples/invoice.scenarios.example.json) and [checklist](examples/checklist.example.json) show two independent setup tasks, a verification task that requires both, and a story acceptance decision that remains pending. The checklist uses the [schema](templates/checklist.schema.json) and [field guidance](templates/checklist.fields.json). Read this example when you need a filled-in reference.

## Scenario example

The synthetic [scenario definitions](examples/scenarios.example.json) cover a draft reviewer opening a source PDF and a user without access being denied. The [synthetic run records](examples/results.example.json) show the private result format with fake evidence references. No real runs are represented.

At build `syn_rev_b`, SC-01 passes on Desktop UI and Backend. SC-02 shows a stale Desktop UI pass from `syn_rev_a` and a current Backend failure, so its scenario result is Fail. Mobile UI is unchecked in both scenarios.
