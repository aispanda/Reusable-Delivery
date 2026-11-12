# Delivery guide validation

Proposed version 0.3, 11 November 2026. This is the supporting record for [DELIVERY.md](DELIVERY.md), not an additional file every story must create. Human adoption remains Pending. No project has been migrated or implemented by this guide review.

## Source mapping

The maker read the agreed Markdown template v1.3, its online instructions, and Field Guide v1 including operational addition v1.1. Client-identifying source links and detailed lesson evidence remain in a restricted local provenance index; request access from the project owner. The generic guide is usable without those links, but this mapping cannot independently authenticate the private sources. Mapping covers template requirements, not a migration of any project's acceptance criteria.

| Source concern | Destination | Disposition |
|---|---|---|
| Outcome, scope, exclusions, baseline and unknowns | Story outcome/scope and current state | Preserved, condensed |
| Product, business, UX, technical, QA perspectives | Solution and supporting artifacts | Preserved, combined; no mandatory separate agents |
| Stable full criteria and expected results | Acceptance table; migrate step 2 | Preserved; no word limit or unauthorized retirement |
| Solution, alternatives, references and assignment | Solution, executor rules and next-step contract | Preserved |
| Coordinator and actual model identity | Executor rules and concurrent-claim paragraph | Preserved; actual identity source required |
| Human/automation/AI and deterministic versus judgment | Executor rules | Preserved; names are examples, not defaults |
| Checklist IDs, state meanings and summary consistency | Execution checklist and states paragraph | Preserved |
| Inputs, schema/template, source/freshness, processing and outputs | Next-step contract | Preserved |
| Checks, stop boundaries, authority, retry/time/cost and recovery | Contract and execution rules | Preserved |
| Autonomous bounded loop and independent eligible work | Execution rules | Preserved |
| Review/repair/independent recheck and actual human acceptance | Review table, current-state fields and execution rules | Preserved |
| Focused Claude escalation, actual model, permitted context and follow-up | Review paragraph | Adapted: use required/requested reviewer; existing model-specific requirements still govern |
| Source/template/origin/reviewer session traceability | Story header, review records and restricted index | Adapted for privacy; no invented public links |
| Blocker details, history and affected revalidation | Blockers/history and execution rules | Preserved |
| Attach updated Markdown to ClickUp | GitHub publication plus two ClickUp links | Replaced by explicit user instruction in this chat |
| Length guidance and readable writing | Start here; concise solution plus linked detail | Adapted to user's minimal-but-sufficient judgment; no rigid count/length rule |

No source concern above is intentionally deferred. This is the maker's mapping, not independent confirmation against the private original. Each actual migration still requires its own criterion comparison.

## Evidence-informed choices

A targeted sample of shipment, exchange, buyer-journey, tax and headless-design records informed the guide. These are observations of records, not fresh system tests or an exhaustive chat audit:

- Conflicting checklist and detailed-step states appeared in shipment and buyer-journey records: reconcile status from evidence.
- Exchange setup exposed templates/settings while installation and prerequisites remained unresolved: verify actual readiness, not visible availability.
- Related records were not established as reserved test fixtures: require suitable authorized inputs.
- A design review and recheck closed static-image findings, while interaction and integration tests remained pending: preserve review scope.
- Tax advice needed a factual correction and numerical suggestions remained hypotheses: verify model advice and record dispositions.
- Connector limits and upload failures occurred: retain local progress, report synchronization accurately, and read back writes.

Proposed efficiencies—one entry link, detailed immediate step only, targeted source reads, deterministic checks for exact facts, focused model questions and affected rechecks—are hypotheses. No measured token, time or cost savings are claimed. A pilot can compare effort, rework and omissions for similar scopes without weakening verification.

## Claude review

Requested model: `claude-opus-5-5`, medium effort. Client: Claude Code 2.1.319. Initial sandbox attempt failed with DNS `ENOTFOUND`, zero input/output tokens and no model verdict. A network-enabled retry sent the complete generic v0.1 guide, no private source index or project details; tools, MCP and customizations were disabled. Budget cap $2; requested response limit 650 words. This was document review, not a live-system test.

Successful response metadata reports canonical model `claude-opus-5-5`, first-party provider. Estimated list-price cost reported: $0.1282938. Verdict: revise (minor). Model identity comes from response metadata, not prose self-identification. Raw review packets and private provenance remain outside this public repository.

| Finding | Maker disposition in v0.2 | Check |
|---|---|---|
| F1: duplicated owner/status can drift | Accepted: evidence governs delivery status; actual human assignment governs ownership; conflicts must be reconciled | Walkthrough: Complete dashboard + failed check produces Rework and reconciliation; owner conflict cannot be decided by a test result |
| F2: platform/model names may read as mandates | Partly accepted: generalized platform rule and explicitly optional model examples; retained Salesforce/example names because user requested that context | Read-through finds names labeled examples, not a mandatory model/provider set |
| F3: lineage claimed without a mapping | Accepted: proposed adaptation label, linked mapping above, explicit private-source verification limitation | Maker mapped all 16 concern groups; actual story criterion migration remains a separate check |
| F4: claims and reviewer identity insufficiently precise | Accepted with safer mechanism: coordinator/atomic claim or one writer, explicit ownership/duration, stopped-executor check before takeover; reviewer identity source added | Walkthrough: conflicting claimant waits; overdue active claimant is not displaced; absent atomic coordination falls back to one writer. Protocol only, no lock implementation claimed |
| F5: repeated safeguards | Partly accepted: removed redundant authority statements, consolidated related prose, checked metadata/privacy; retained short field reminders where a copied template needs them | Maker read-through; no fixed 'say every rule once' policy imposed |

Recheck of the full v0.2 guide: canonical `claude-opus-5-5` from response metadata, medium effort; reported estimated cost $0.1246064. F1–F5 resolved (F3 only at maker-mapping level; private originals not reviewed). One additional material finding required preserving the current ClickUp description before replacing it. Accepted in v0.3: capture text verbatim in appropriately restricted storage, account for all criteria, confirm edit authority, and reconcile intervening edits. Also clarified that ownership points to the actual human decision or designated assignment field. Final targeted recheck: canonical `claude-opus-5-5` (response metadata), medium effort, estimated cost $0.0224144. Both edits resolved; no remaining material issue in those excerpts. This last check did not re-review the entire guide. Total reported estimated review cost: $0.2753146. No whole-guide final approval or human acceptance is inferred. Runtime/multi-agent lock tests and end-to-end migration pilot NOT RUN. Maker is Codex desktop; precise authoring model variant not exposed. Human final adoption Pending.
