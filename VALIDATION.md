# Delivery guide validation

## Self-contained route candidate — local review, 12 November 2026

This local candidate replaces required router/route/CORE reads with one complete selected guide. It is not yet published or a completed portfolio migration. Earlier entries below retain their historical revision and scope.

Claude Code reported canonical reviewer `claude-opus-5-5`, medium reasoning. The first review received the full generated guides, router, compatibility pointers, README and generator. It found three issues: refreshed ClickUp text needed a new verbatim capture before replacement, separate mixed-work stories needed distinct route labels, and generation needed explicit UTF-8/LF handling. All were fixed. A fresh focused recheck received full corrected guides, router, generator and all authoring sources; its verdict was **Ready for controlled use**, with no material blockers. That review did not execute the generator or review private project sources. Its statement that route sections were identical is inaccurate: only the bootstrap and shared core are identical; route instructions intentionally differ.

Local checks passed: generated outputs match sources byte-for-byte; deliberately changed content and CRLF drift are rejected; relative Markdown links and compatibility template anchors resolve. Python 3.10+ is required to regenerate. No migrations, implementation or runtime acceptance were proved by these checks. Before publication, verify the candidate diff and rerun the generation check; after publication, read back the exact pinned revision.

Measured whitespace words: router 149; direct new guide 2,147; direct migration guide 2,455. Previous mandatory paths were 2,503 and 2,678 words respectively. Direct paths use one complete file rather than three; an unknown route adds the 149-word router. Original monolith was 2,307 words, so migration is still larger than that older baseline because safeguards and mixed-work handling grew. These are document-size measurements, not token/cost/latency or real-task efficiency results. Optional examples/review history and authoring sources are not required executor reads.

## Historical validation record

Proposed version 0.4, 11 November 2026. Earlier reviews below are historical and retain their original scope. This is the supporting record for [DELIVERY.md](DELIVERY.md), not an additional file every story must create. Human adoption remains Pending. No project has been migrated or implemented by this guide review.

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

## Historical Claude review: v0.1–v0.3

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

## Modular v0.4 review

The entry now selects NEW or MIGRATE; both require CORE from the same resolved commit. EXAMPLE and this validation history are optional. No measured token or cost saving is claimed.

TypeSafe was asked to assess the public v0.3 files and modular proposal, not an implemented migration. Requested alias `jev-latest`; response metadata reported `jev-1.14.0`. Its structured answers supported routing and shared rules and identified missing ambiguity, unavailable-file and revision handling. A targeted proposal recheck scored those clarifications 0.96, 0.97 and 0.97; mandatory core reading 0.99. Cross-route omission risk remained uncertain at 0.55. These are model scores interpreted by the maker, not measured reliability or runtime proof.

Claude Code reviewed the complete candidate operational documents with the original guide as baseline. Response metadata reported `claude-opus-5-5`. The maker moved ClickUp preservation and sanitized-criterion comparison into CORE, clarified mixed-scope handling and direct-route revision resolution, and retained the proposed-method label. That first packet omitted this validation history.

The subsequent review received instructions and only eight public GitHub links pinned to [3e3d7a3](https://github.com/aispanda/Reusable-Delivery/tree/3e3d7a3bfdfefcd2552193ebdccc7ee9cc821d66), including this history. Claude reported fetching all eight files. **WebFetch supplied summaries and short quotes rather than complete file text**, so this was a limited links-based review, not full-text verification of the published revision. Main reviewer metadata reports `claude-opus-5-5`; usage also reports `claude-haiku-5-5` for retrieval processing. Verdict: revise (minor).

| Finding | Maker disposition after links review |
|---|---|
| Guide upgrade path unclear | CORE records old/new guide commits, compares rule changes, preserves history and reopens affected checks only |
| Missing ClickUp item/access fallback | CORE records synchronization Pending and needed authority/access, while reporting successful GitHub publication separately; rejected conflating a ClickUp failure with failed GitHub publication |
| Check results versus step states unclear | CORE defines check results separately and makes unknown acceptance requirements reasoned Pending |
| Restricted storage location unclear | CORE requires an approved access-controlled location outside the repository; ignored paths alone provide no privacy protection |
| Validation history still v0.3 | This section records the modular review and its limitations; earlier reviews remain explicitly historical |

The maker also put short existing-chat, new-work and migration prompts in DELIVERY.md. The findings above were checked against the actual full local files before editing. These post-review edits are maker corrections, not a new Claude approval. The reviewed commit remains immutable; later commits contain these corrections and this record.

Maker verification covers local Markdown links and fences, selected known private-identifier checks, and byte-for-byte GitHub readback. Those checks do not prove absence of every possible private value. No private source index or raw review packet was uploaded. Runtime tests, concurrent-lock tests and an end-to-end new-story/migration pilot remain NOT RUN. Human adoption Pending.

## Observed migration feedback incorporated

A read-only observer of a shipment-document migration identified five focused improvements now incorporated into CORE and MIGRATE: trace delegated human authority; map material artifacts and links as well as criteria; verify portable restricted-context retrieval; reconcile shared facts/current-state across documents; and verify the transition before marking old locations superseded. These are instructions within existing sections, not mandatory extra documents.

Observed safeguards already worked: criterion comparison caught lost details, demo scope stayed distinct from MVP scope, and publication was not treated as implementation or acceptance. The migration still had unresolved source reconciliation, private-context portability and ClickUp synchronization at this checkpoint. A platform email-verification gate is not a new template approval requirement. No efficiency gain has been measured. The forthcoming Jev review is separate from these observer findings.

## Jev review of guide and shipment pilot

TypeSafe review on 12 November 2026 UTC: requested `jev-latest`; API metadata reports `jev-1.14.0`. The request included all 18 tracked text files from guide commit `17b15285f1d9ded1b95edd71f79182277cfdd621` and shipment commit `a2c1507cb6a666157f5559fa3080bd916569eed9`, plus sanitized observer findings. Private originals, restricted mappings, Git history and live systems were not supplied. Usage: 23,839 input tokens and 639 output tokens. This is typed document judgment, not a narrative review or runtime verification.

Using heuristic Noul thresholds above 0.70 for support, below 0.30 for opposition, and otherwise uncertain, the five observer improvements were supported (0.94–0.99). Required shared reading, bounded assignment and criterion checks were supported. Unnecessary separate-document requirements scored 0.19; route-specific reading scored 0.81. These judgments do not establish measured savings.

Shipment strengths: observable criteria 0.87, MVP/demo distinction 0.93, idempotency 0.94, partial-failure handling 0.96, and separation of planned versus performed verification 0.92. Complete preservation of original criteria was not established (0.07); full source reconciliation 0.03, portable restricted retrieval 0.06, exact planned AI identities 0.16, verified API contracts 0.03 and completed ClickUp cutover 0.03 also lacked support. Current-state consistency 0.37 and dispatch/poll dependency handling 0.54 remained uncertain and need focused inspection, not automatic acceptance or rejection.

Measured efficiency and productivity improvement scored 0.03 and 0.09. The observed criterion comparison catching an omission scored 0.94. Runtime implementation proof scored 0.02; this review proving no source loss scored 0.08. Jev did not require public visibility as a prerequisite or identify a missing rollback plan through this question set. Maker disposition: retain guide refinements; track shipment gaps separately and inspect uncertain findings against exact passages before edits. No human acceptance, complete migration or production readiness is inferred.

### Focused shipment recheck

Jev `jev-1.14.0` rechecked eight published shipment documents at `714bf86670e28143eff5975b12ebdc05cb9922d3` with the shared guide rules (19,677 input tokens; 246 output tokens). Corrected planned identity scored 0.91; tests depending on implementation 0.90; explicit dispatch readiness 0.97; proposed not-ready action 0.94; source mapping 0.96. Honest reporting of ClickUp, portability and runtime gaps scored 0.96, 0.94 and 0.96. Publication-status consistency remained uncertain at 0.55, requiring passage inspection and clear historical labels. Full source preservation was not established (0.06): private original sources were not supplied. This recheck supports the specified document corrections, not a completed migration, implementation or lossless source audit.
