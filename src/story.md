## Copyable story

Copy the [story starter](../templates/story.md) and use the [shared field guide](../templates/story-package.fields.json) at the same revision.

```markdown
# <ID> · <Outcome title>

**Owner** · <Person accountable for the story outcome and acceptance decision, or Pending confirmation> · [Checklist](checklist.json) · [Other execution record](<live link only if needed>) · [Guide](<revision-pinned link>)

**Outcome** · As <actor>, I want <capability> so that <benefit>.

**Scope** · <What the story delivers and verifies, and any exclusions.>

**Operations** · <Trigger, repeatable action and observable result for the beneficiary. Include when it clarifies the story.>

**Acceptance** · <Human decision for the story, or Pending decision. Record who authorized acceptance, waiver, or closure, which criteria it covers, and which criterion IDs remain open.> [Decision, if recorded](<revision-pinned link>)

## Requirements and verification

[Acceptance criteria and verification checks](scenarios.json)
<Keep criterion wording and verification details in the linked file. Store actual results in approved restricted storage.>

## Agents
<Link the [agent roster](agent-roster.json) once the delivery team is selected.>

## Blockers
<When used, link the [blockers record](blockers.json).>

## Admin guidance
<Recommended at closeout for settings an admin will maintain. Use one bullet per material change. Omit the section when there are no maintainer steps to document.>

- **<What to change>** · <Exact verified admin UI path or durable link to verified runbook instructions> · Replay <existing check ID>. <Include a verified prerequisite or activation step only if it affects the change.>

**Next** · <Required once implementation is active, including while blocked. State the next activity, including parallel work ready to start when applicable. Link to any blocker affecting that activity. At closure, record completion or the final handoff.>
```

## Keep the story reviewable

Use the [shared field guide](../templates/story-package.fields.json) to author all five story files. AI can draft from the story and verified references. Human reviewers refine the checklist, criteria and roster using subject-matter expertise. Use the schemas to validate the reviewed JSON. Keep actual blocker records current as evidence changes.

Lead with the outcome, scope, and repeatable workflow. Keep the full acceptance criteria in the linked `scenarios.json`. Preserve stable IDs and agreed wording, including safeguards and exceptions. Label unagreed wording as Proposed in the review record.

Use the acceptance criterion ID to identify its verification and run records. Include exact values, counts, record relationships, and platform reads when they affect verification. Record observations and evidence, including from a stakeholder demo that exercises the criterion, in a private run record. Use `NOT RUN` until execution.

## Task checklist

Keep build and setup tasks in the linked [checklist](../templates/checklist.json). The [schema](../templates/checklist.schema.json) defines the task data contract. The shared field guide gives short instructions and examples that a viewer can display.

- The story owns the outcome, scope, repeatable workflow, and acceptance decision. The linked criteria file owns requirements and their verification definitions. The checklist owns task status, Task AC, task results, and task evidence.
- Use stable C- IDs for new tasks and A- IDs for new criteria. Preserve historical IDs. A task lists applicable story criterion, check or scenario IDs in `supports`. Story QA cites relevant task evidence by task ID. Mark a task Pass when evidence confirms its Task AC. Record a story or scenario result from evidence for that check.
- Use the shared field guide to record the applicable design sections and a runnable Task AC for each task. [Select a check](../CODE-QUALITY.md#select-a-check) that fits the task. Keep one authoritative copy of each procedure and link to it.
- Keep one current record for each decision, blocker or file. Use task Comments and evidence for task-specific records. Shared records can live in the story or a linked artifact.

See the [synthetic example](../EXAMPLE.md#checklist-example) when it helps.

## Agent roster and readiness

Copy the [roster starter](../templates/agent-roster.json) and validate it with the [roster schema](../templates/agent-roster.schema.json). Let the story determine the team's role names. Use a stable AI- ID for each new agent. Give each agent a name, role, operating instructions and authority. Record applicable skills, tools, references and runtime selections. Use approved public aliases for environments and identities. Keep private handles and credentials in restricted configuration.

The Implementation Lead owns assignments, checklist, Next, blockers, documentation quality, evidence and handoffs. Before dispatch, the lead verifies the roster's unique IDs, that its lead is a listed agent, that every checklist task's Agent resolves to a roster entry, that verification is assigned to a different actual agent from the builder, and that human decisions have named owners. The checklist holds each task's scope, expected outputs, status and assignment. The roster states how the agent operates across its tasks.

Each agent loads applicable skills and verifies access to primary documentation, tools, inputs, templates, expected outputs, acceptance checks and dependencies. Update weak or missing task references and propose changes to the solution approach for the lead to confirm. Load required skills and references before the lead starts implementation.

Separate Codex agents build and independently verify checklist tasks. Record task verification in checklist evidence. Once the build and checklist prerequisites pass, use a fresh Gemini Neon session in the standalone Google Antigravity App for formal end-to-end acceptance checks. Hand over the exact build, approved fixtures and required test surfaces. Leave the builder's conclusions out of the initial handoff. Record observed results and evidence by criterion and scenario in the existing format. Use the corresponding roster IDs for builderAgent and testerAgent. After a failure, return the work to Codex for fixes and independent task verification, then run formal acceptance again in a fresh session. The designated human records final story acceptance. If the app, model or test access is unavailable, record a blocker and leave the checks unpassed.

## Record blockers

Use the [starter](../templates/blockers.json) and [schema](../templates/blockers.schema.json). Keep one current entry per story-wide or shared blocker. Use a stable B- ID for new blockers. Link to that ID from Next when needed. Reference the affected task or criterion IDs. A single-task blocker belongs in its Comments.

- **Status** · Use Open while the obstacle remains. Use Closed after verifying the fix.
- **Goal** · What must the actor accomplish? Use fewer than 30 words.
- **Blocker** · What prevents it? Use fewer than 30 words.
- **Current fix** · Smallest proposed fix, or verified fix with evidence link. Use fewer than 30 words.
- **Documentation** · One best documentation URL. Omit if unavailable.

## Scenario definitions

Copy the [scenario template](../templates/scenarios.json) beside the story. The [schema](../templates/scenarios.schema.json) defines one record per criterion. The shared field guide also covers private runs under the scenarios section.

- Write the title, starting state, ordered actions, and expected result once per criterion. Include required records, rejection reasons, and exceptions in the expected result. Include one verification case in the same record. Split independent cases into separate criteria.
- Record the actor, scenario version, and required surfaces. Fold setup into the starting state and all execution steps into actions. Add environment or fixtures only when they help reproduce the case. Put any surface-specific readback in actions. Split the criterion if a required surface needs a materially different starting state or procedure.
- Use criterion IDs in checklist `supports` and private run records. Keep runtime identities, fixture mappings, and evidence in approved restricted storage.
- Start at version 1. Increase it only when a change affects what the check proves. Preserve existing IDs and applicable evidence during a format-only migration.
- Record runs using the private [results schema](../templates/results.schema.json). A case passes when every required surface passes on the current version and selected build.
- The builder and tester must be different people or agents. For each new test result, record who did each role in `builderAgent` and `testerAgent`. Always use the same ID for the same person or agent. Run `python3 scripts/validate_results.py /path/to/new-runs.json` from the guide repository before adding the results. The [checker](../scripts/validate_results.py) requires `jsonschema` and `rfc3339-validator`. Use `--historical` only when reading old records. If an old record leaves both roles blank, we cannot confirm who did the work.
