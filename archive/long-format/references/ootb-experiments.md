# OOTB discovery and experiments

Use this optional guide when exploring out-of-the-box product capabilities through small proofs of concept (POCs). Follow the applicable [delivery route](../DELIVERY.md) at the same guide revision and reuse it if already loaded. Keep one execution checklist in the story. The catalog holds reusable capability research; the story holds task ownership, decisions and execution evidence.

## Start from the current outcome

Record the latest authorized user outcome, intended users and prior research in the story's Current state and Solution sections. Resolve a conflict with an older requirement before testing the journey. Record authorized scope changes and affected checks in story history so earlier work remains traceable.

Choose the activity and product coverage for discovery, such as buyer returns within a specified commerce product and release. A POC may investigate several related requirements. Set a bounded learning objective, time or attempt limit, permitted environment changes and success check for the next experiment.

## Build or reuse the catalog

Use one shared workbook or database for the activity. Link it from each story and reference stable capability IDs. Reuse existing rows and preserve curated notes and IDs during refreshes. Record catalog revision, product/release, discovery date, sources checked and unresolved coverage gaps.

Capture these fields for each candidate, using separate columns where filtering helps.

| Information | Record |
|---|---|
| Identity and purpose | Stable ID, official name, product/category, business outcome and intended user |
| Type and start | Native capability/flow type, launch method or trigger, caller and inputs |
| Evidence and sources | Official documentation and relevant section, version/date, observed availability and verification limits |
| Prerequisites | Edition/license, permissions, dependencies, data and runtime compatibility |
| Implementation | Short setup steps, proposed user entry point or background trigger, configuration/adaptation needed |
| Experiment references | Linked story/task IDs, tested revision and environment reference, result and limitations |

Preserve the platform's native types and distinguish them from launch methods. For example, a Screen flow can be manually launched, while a background capability needs an identified trigger. Record buyer and staff suitability independently of flow type.

Reconcile the official catalog, platform picker and available metadata. Record filters, unsupported reads and differences. Claim exhaustive coverage only within the stated scope when those sources are reconciled; keep inaccessible or unexplained items visible. Research from AI or secondary articles needs checking against primary documentation and target-platform evidence.

Keep the reusable catalog sanitized. Store org-specific identities, URLs, records and restricted observations through the delivery guide's approved restricted-storage mechanism.

## Run bounded experiments

1. **Select a candidate.** Link its catalog ID and the requirement or question being tested. Prefer a small existing configuration or supported standard capability that could satisfy the outcome. Record why a candidate needs adaptation, is unsuitable or remains unverified.
2. **Prepare the test.** Complete platform preflight for dependent work. Verify the intended persona, entry point or trigger, prerequisites and test data. Inspect possible downstream effects such as notifications, inventory or payments and keep execution within existing authorization. Record how to inspect partial results and restore or clean up the test changes.
3. **Assign and execute.** Expand the next task using the existing story contract, including inputs, output, dependencies, documentation, one executor, planned model/reasoning or automation tool, check, limits and recovery. Use a development/test environment with an appropriate fixture. Run a small experiment, then update the next task from what was learned.
4. **Verify the behavior.** For user acceptance, use Playwright or another browser tool as the intended user, starting at the proposed entry point. For background work, trigger the agreed event and verify state through MCP/CLI. Record expected and observed results, revisions, side effects and evidence. Active configuration, an administrator's successful query or a published page alone leaves user behavior unverified.
5. **Decide and retain.** Record whether to adopt, adapt, defer or reject the candidate and why. Preserve working assets and useful discoveries. A failed experiment can answer its research question while the desired product capability remains unmet.

A manual screen flow can still be intended for staff. Verify permissions, record ownership and supported UI components before exposing it to a buyer. For asynchronous work, verify the resulting state and failure path after the trigger.

Independent candidates may run in parallel with one writer per owned scope. Shared environments, fixtures and catalog edits need coordination. Keep one catalog editor or reconcile contributions by stable ID before publication. Continue independent research or local preparation when a blocked live check cannot invalidate it.

## Carry the findings into delivery

A single story may cover several requirements that share an outcome and can be accepted together. Split work when it has independent acceptance or ownership, and link dependencies and existing evidence. Keep learning objectives, implemented behavior and remaining product acceptance explicit as the story evolves.

Apply the delivery guide's QA and independent-review requirements to retained code or configuration changes. Reuse valid evidence and rerun checks affected by changes. A POC result supports only the tested scope, persona and environment.

At closeout, reconcile every agreed criterion with observed evidence and the authorized scope. Record the destination and decision for deferred work. Verify reusable instructions and assets, complete the story's Files index with the eight-word description limit, and synchronize ClickUp under the existing delivery rules.
