# Delivery: start here

Use the request and available context to select one route:

- [NEW](new/START.md) for creating a story from an outcome or brief.
- [MIGRATE](migrate/START.md) for preserving and organizing existing work, including mixed existing and new scope.

Resolve this link's branch or tag to a commit SHA once, or use the SHA already in the link. Fetch the selected route and its modules at that SHA. If intent is still ambiguous, ask one concise question before dependent writes. Reuse verified same-SHA content. If a route entry is missing or incomplete, use the corresponding full guide at that SHA.

## Copyable story

Choose a route above. It links to the [story starter](templates/story.md) and tells you what to load before each action. Read the relevant section of the [shared field guide](templates/story-package.fields.json) before authoring any of the five story files. For build and setup work, use the [checklist template](templates/checklist.json) and [schema](templates/checklist.schema.json) at the same revision. The complete [NEW guide](new/DELIVERY.md) and [MIGRATE guide](migrate/DELIVERY.md) remain available at the same paths.

For stories with structured scenarios, use the [scenario template](templates/scenarios.json) and [scenario schema](templates/scenarios.schema.json). Store real runs in approved restricted storage using the [results schema](templates/results.schema.json). The builder and tester must be different people or agents. Record who did each role and run the [checker](scripts/validate_results.py) before adding new test results.

Use the [blockers starter](templates/blockers.json) and [schema](templates/blockers.schema.json) when the story has blockers to record. Use the [roster starter](templates/agent-roster.json) and [roster schema](templates/agent-roster.schema.json) before dispatching implementation.
