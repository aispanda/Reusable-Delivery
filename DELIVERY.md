# Delivery: start here

Use the request and available context to select one route:

- [NEW](new/START.md) for creating a story from an outcome or brief.
- [MIGRATE](migrate/START.md) for preserving and organizing existing work, including mixed existing and new scope.

Resolve this link's branch or tag to a commit SHA once, or use the SHA already in the link. Fetch the selected route and its modules at that SHA. If intent is still ambiguous, ask one concise question before dependent writes. Reuse verified same-SHA content. If a route entry is missing or incomplete, use the corresponding full guide at that SHA.

## Copyable story

Choose a route above. It links to the shared story template and tells you what to load before each action. For build and setup work, use the [checklist template](templates/checklist.json), [schema](templates/checklist.schema.json), and [field guidance](templates/checklist.fields.json) at the same revision. The complete [NEW guide](new/DELIVERY.md) and [MIGRATE guide](migrate/DELIVERY.md) remain available at the same paths.

For stories with structured scenarios, use the [scenario template](templates/scenarios.json), [scenario schema](templates/scenarios.schema.json), and [field guidance](templates/scenarios.fields.json). Store real runs in approved restricted storage using the [results schema](templates/results.schema.json). Run the [private results validator](scripts/validate_results.py) before appending new runs. Each new run requires distinct builder and tester agent IDs.

Use the [blockers starter](templates/blockers.json) and [schema](templates/blockers.schema.json) when the story has blockers to record.
