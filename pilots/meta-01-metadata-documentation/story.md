# META-01: Export and explore the Salesforce data model

Guide: [Create new work](https://github.com/aispanda/Reusable-Delivery/blob/fa771b9e1de0a1bdb6003d72d345b9a8bd5557db/new/DELIVERY.md) at `fa771b9e1de0a1bdb6003d72d345b9a8bd5557db`, route NEW.

Revision/status/as-of: Draft 0.7, 12 November 2026. Reusable experiment moved to Reusable-Delivery. Local AC-03 source check passed; AC-01, AC-02 and portability remain NOT RUN.

Origin: configuration workbook and metadata explorer discussion; the earlier B2B Commerce story is a historical pilot source, not a product dependency.

Accountable owner: Pending assignment.

Working branch: `docs/meta-01-free-tool-pilot`.

## Current state

The [consignment Salesforce DX example](https://github.com/aispanda/B2B-Commerce/tree/1dc3bfcfc3767a48ac0517e325625c2fd8e954be/epics/e02-consignment/stories/consignment-consumption-demo/salesforce) is a starting source snapshot for the local documentation experiment. Use an authorized development org for live checks. Confirm tool versions and access in the environment running the pilot. Local search, diagram and node navigation passed against the pinned source; the generated Excel file lacks field rows. [Pilot evidence](pilot-evidence.md) records partial live reads and a source discrepancy. Independent implementation verification is NOT RUN. Human acceptance policy and decision are pending.

## Outcome and scope

As a Salesforce delivery team member, I want to install and use a configuration workbook and metadata explorer with an authorized Salesforce org, so I can refresh an Excel inventory and explore the objects and relationships a story relies on across projects.

The intended capability is reusable across Salesforce orgs and must not depend on B2B Commerce metadata, credentials or source. Installation form is pending; the current pilot proves neither an installable product nor compatibility with every org. Access, APIs, permissions, available objects and features vary by org and must be checked. The pilot uses SFDX Hardis to generate local Excel and browsable docs from a consignment source example; scoped live `Case` and `OrderSummary` reads are an experiment in one authorized development org, not a universal prerequisite. Preserve story mappings and source evidence.

Potential inputs include local Salesforce DX source, GitHub repositories and files in drives; their formats, connectors, permissions and supported coverage need discovery. Salesforce metadata is another distinct input. Possible presentation destinations include local Excel and searchable documentation, with an in-org view as a separate candidate. These are candidates, not implemented integrations or a commitment to ingest arbitrary drive files. Follow-on candidates are Apex and Flow dependencies, permissions and audit reports, and org comparison. Generate and inspect the pilot output locally from a read-only source. SFDX Hardis and its local documentation tooling handle generation in this pilot. Headless 360 and Salesforce CLI are the current pilot verification tools, not proven prerequisites for every future installation; P09 must assess portable access choices.

## Acceptance criteria

AC-01–03 retain the prior story’s proposed wording and the user’s instruction to preserve it; AC-04 is a proposed portability check for the expanded goal. No acceptance decision has been recorded.

| ID | Criterion | Check/evidence | Result |
|---|---|---|---|
| AC-01 | One read-only run populates object and field definitions for the selected scope. It includes standard/custom classification, internal/external sharing defaults, field types and relationship targets, and applicable picklist values by record type. | Compare selected rows with live API results. Record the API version and scope of each source. Mark missing or unsupported values explicitly. Distinguish schema-required fields from layout or validation requirements. | NOT RUN |
| AC-02 | A second refresh preserves story IDs and manually curated notes and produces the same metadata rows when the source is unchanged. | Compare normalized rows from two runs and check story mappings by object and field API name. Simulate a failed read and confirm the prior valid workbook is recoverable. | NOT RUN |
| AC-03 | The generated local documentation is searchable and includes a supported Hardis object diagram. | Locate an object and verify one diagram connection against the corresponding field in the source or live describe result. Record the interactions available in the installed version and any gaps. | PASS — local source check; [evidence](pilot-evidence.md) |
| AC-04 | The workbook and explorer can be installed and used with an authorized Salesforce org without depending on B2B Commerce source, credentials or metadata. | After the installation form is decided, perform clean setup against distinct authorized orgs and document API, permission, edition, object-availability and feature prerequisites; mark unsupported cases and verify no first-org configuration is reused. Broader compatibility remains unproven. | NOT RUN — installation form pending |

## Solution

Generate the baseline with Hardis first. Compare generated documentation and workbook rows to their source, then use native Salesforce reads to supplement only material gaps. Preserve story mappings by object and field API name and record each input's scope and provenance. Keep org-specific exports and identifiers in restricted storage.

- [Salesforce Object Describe](https://developer.salesforce.com/docs/platform/api-rest/guide/dome-sobject-describe.html) documents fields and relationships. [EntityDefinition](https://developer.salesforce.com/docs/platform/api-tooling/references/tooling-objects/tooling-entitydefinition.html) documents internal and external sharing models. [UI API picklist values](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-picklist-values-record) documents record-type scope for supported objects.
- [Salesforce Dependency API](https://developer.salesforce.com/docs/platform/api-tooling/references/tooling-objects/tooling-metadatacomponentdependency.html) is a beta with coverage limits. A future dependency explorer can combine supported API evidence with static references and label runtime observations separately.

## Execution

This is the authoritative checklist. P IDs retain the previous roadmap IDs; the former story-step mappings are P00→S-00, P01→S-01, P03/P03A→S-02, P02/P04/P05→S-03, P06→S-04 and P07→S-05. Local source generation is independent of live access; all live work depends on the successful P01 probes. Results and exact versions are in [pilot evidence](pilot-evidence.md). One executor is named per step; an accountable operator or reviewer remains pending where stated.

| ID | Task / acceptance criteria | Dependencies | Executor / tool | State, check, evidence and commit |
|---|---|---|---|---|
| P00 | Prepare the story branch, verify ignore rules and review staged changes. | Story branch and Git checkout | Automation, Git | In progress — actual paths ignored in the source checkout; destination checks and sanitized commit pending. [Evidence](pilot-evidence.md). Review each staged diff. |
| P01 | Verify intended org and identity through Headless 360 and CLI before live work. | P00; authorized development org and identity | Automation, Headless 360 and Salesforce CLI; accountable operator pending | Probes PASS — MCP v67.0 GET 200; matching CLI identity and targeted limits read status 0. Separate Metadata Grounding MCP unavailable. [Evidence](pilot-evidence.md). Evidence access owner and portable retrieval remain pending. |
| P02 | Generate local source documentation and inspect search, object page, diagram and Excel output, AC-03. | P00; pinned source and local tools; independent of P01 | Automation, SFDX Hardis 8.24.0 and Zensical 0.1.1 | In progress — AC-03’s search and diagram check passed; P02 also asks for Excel inspection, and visual spreadsheet inspection is pending. [Evidence](pilot-evidence.md). |
| P03 | Collect scoped Case and OrderSummary definitions, relationships, sharing and record-type picklist evidence, AC-01. | P01 probes | Automation, read-only Salesforce APIs v67.0; operator pending | In progress — describes and sharing queries returned; record-type picklists remain uncollected. [Evidence](pilot-evidence.md). |
| P03B | Analyze the field-set discrepancy and reconcile source semantics, AC-01. | P03 reads; matching identity and API version | AI or human analyst assignment pending | Pending — do not treat either field set as complete before reconciling the discrepancy. |
| P03A | Generate the Hardis live Excel data dictionary for those same two objects, AC-01. | P01 probes; installed Hardis; supported scoped read | Automation, SFDX Hardis 8.24.0 | Blocked — NOT RUN. Hardis 8.24.0 lists validation rules across the org before filtering, exceeding the two-object read scope. [Evidence](pilot-evidence.md). |
| P04 | Map requested workbook columns, scoped counts and diagram edges to their same-scope sources; reconcile discrepancies, AC-01. | P02, P03B and P11 | Human, reviewer pending | Pending — check requiredness semantics, sharing, record-type picklist scope, caps, layouts, skipped reads and conflicting values against the same org/API version. |
| P05 | Reconcile the local documentation and baseline workbook; preserve curated story IDs and notes, AC-01–02. | P04 | Automation, generator and merge tool/version pending | Pending — selected rows and relationships match source; refreshed mappings survive, new fields start unmapped, changes are reported, and failed/partial reads retain the previous valid snapshot. |
| P06 | Run repeatable documentation, graph, refresh and recovery checks, AC-01–03. | P05 | Automation, project check command pending | Pending — compare normalized rows, exercise incomplete input and recovery, check shared fields and relationships, scoped counts, and publishable-copy privacy. |
| P07 | Independently review the actual output and evidence, AC-01–04. | P06 and P10; frozen revision and evidence | Human, independent reviewer pending | Pending — record findings, repairs and rechecks before rollout. Plan review does not substitute for this check. |
| P08 | Decide installation form and supported product scope, AC-04. | P09 comparison | Human, decision owner pending | Pending — choose the path after tool capabilities, prerequisites and trade-offs are documented. |
| P09 | Compare actual open-source capabilities and integration choices for inputs, workbook and views. | P02 evidence; documented tool versions and intended use cases | AI, exact executor/model pending | Pending — document supported versus unverified features, setup, licensing, permissions, limitations and a recommended path before choosing installation form. Local, repository and drive inputs and an in-org view are candidates; no integration is assumed. |
| P10 | Verify clean setup against distinct authorized orgs, AC-04. | P08 decision; supported implementation and authorized orgs | Human tester pending | Pending — no cross-org installation or compatibility check has run. Record prerequisites and exceptions without claiming universal support. |
| P11 | Select and validate a scoped producer of field-bearing workbook rows for the same objects as the live baseline, AC-01. | P03, P09; explicit permissions and a supported scope-preserving method | AI or human analyst assignment pending | Blocked — the consignment workbook and live baseline cover different objects, and P03A cannot run within scope. Evaluate a scoped source retrieve or native-read producer; no wider metadata listing is authorized. Record tool/version, checks and supported gaps before dispatch. |

### Next bounded task: P03

P09 research can proceed independently; it informs P08 and P11 and does not authorize Salesforce writes or publication. P03B requires an assigned analyst; P03 and P09 require assigned operators before dispatch.

- **Executor and inputs:** Automation using Headless 360 and the verified Salesforce CLI 2.157.8, API v67.0; accountable operator pending. Limit all reads to `Case` and `OrderSummary`. Use the existing scoped describes, sharing queries and [partial baseline evidence](pilot-evidence.md); consult [Object Describe](https://developer.salesforce.com/docs/platform/api-rest/guide/dome-sobject-describe.html), [EntityDefinition](https://developer.salesforce.com/docs/platform/api-tooling/references/tooling-objects/tooling-entitydefinition.html) and [UI API picklist values](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-picklist-values-record).
- **Operation and expected output:** Collect the evidence needed for the one-field difference between the MCP schema and CLI describe under the same verified identity and API version; assign interpretation to P03B. Verify sharing results and capture applicable record-type-scoped picklist values using supported, narrowly scoped read-only operations. Mark unavailable or partial values explicitly and retain provenance.
- **Verification:** Record the exact source, scope, API and tool versions, warnings, field-name comparison and selected checks; do not treat a zero exit code as completeness. AC-01 remains NOT RUN until the workbook rows are reconciled and the full criterion is verified. Keep raw results in approved restricted storage with an access owner and retrieval mechanism before claiming a portable handoff.
- **Authority and recovery:** The originating user handoff authorizes read-only checks scoped to `Case` and `OrderSummary`; the handoff itself is not a public evidence link. Permitted candidate reads are describes for those two objects, `EntityDefinition` and `RecordType` filtered to those objects, and UI API object/record-type picklists for those objects. Verify each operation’s actual scope before dispatch. Org-wide metadata lists are excluded. No Salesforce writes, AppExchange installation, trial or security changes. If an operation cannot stay within scope, stop and record the limitation. Preserve prior valid artifacts on incomplete or failed reads.
- **Actual:** Partial describes and sharing queries are recorded in [pilot evidence](pilot-evidence.md); the discrepancy and record-type picklists remain unresolved. P03A is blocked by the installed command's org-wide validation-rule listing.

### Candidate sources and views

| Candidate | Evidence and boundary |
|---|---|
| Local Salesforce DX project, including a checked-out Git repository | The Hardis project-documentation command generated Markdown, a local site and an object-list workbook from the pinned local source in P02. A repository or drive connector has not been tested. |
| Live Salesforce metadata | The Hardis [data dictionary](https://sfdx-hardis.cloudity.com/hardis/doc/data-dictionary/) documents field sheets from org describes; the installed version's validation-rule listing exceeds this pilot's scope, so that live command remains blocked. Record-type picklist scope and caps require separate verification. |
| Salesforce-hosted documentation | Hardis documents a [static-resource, Visualforce page and custom-tab route](https://sfdx-hardis.cloudity.com/hardis/doc/mkdocs-to-salesforce/). This is a documented candidate, not a live metadata explorer or verified deployment; it writes Salesforce metadata and is outside the current read-only authority. |
| Local folders, GitHub and drives | Investigate how source is selected, authenticated, accessed and kept current, including supported formats and whether a drive contains Salesforce DX metadata or other material. No general-purpose ingestion, direct drive connection or syncing is established. |

### Refresh and comparison design

Proposed overlay format: a versioned JSON document in restricted storage, with an `entries` array of `object_api_name`, `field_api_name`, `story_ids` (string array) and `notes` (string). Maintain one entry per case-sensitive `(object_api_name, field_api_name)` key; an object-level note uses an empty field name. Store story IDs and free-text notes independently of generated metadata. Reject duplicate keys and malformed or ambiguous API names. On a successful complete refresh, left-join by exact key, retain IDs and notes unchanged, initialize new keys without mappings, and report missing overlay keys as orphaned for review; do not infer renames. Stage and validate before atomic promotion, preserving the prior valid snapshot and overlay on failed, partial or scope-mismatched reads.

The proposed workbook contract has an Objects sheet (object API name, label, standard/custom classification, internal and external sharing), Fields sheet (object and field API names, label, type, schema nillability and relationship targets), Picklist Values sheet (object, field, record-type and value API names, label, active/default state), and Provenance sheet (source, scope, API/tool version, capture time and warnings). Mark missing or unsupported values explicitly. Separate schema nillability from layout and validation requirements. The field-producing method and repository-owned local/CI check command remain to be selected in P11 and P06.

For AC-02, normalize a fixed ordered set of named semantic columns, preserve meaningful null versus empty and scalar types, normalize line endings to LF, and sort by case-sensitive object and field API names, then record-type and value API names for picklist rows. Reject duplicate semantic keys; compare additions, removals and changed values only under the same scope and API/tool versions. Exclude capture timestamp, run ID, duration, local paths, workbook creation/modification timestamps and incidental row order from row equality; retain this provenance separately. Do not exclude metadata values, scope, API version or warnings. Verify story IDs and notes separately by key. This is a planned contract, not a claim that Hardis implements it.

### Branch and private files

Work in Reusable-Delivery on `docs/meta-01-free-tool-pilot`, commit meaningful sanitized changes with `META-01`, link results and commits, and keep `main` for reviewed work. Extract the pinned source under ignored `private/`; use ignored `generated/` for output when supported and keep unavoidable intermediates within the ignored source copy. Check actual paths with `git check-ignore`. The clean pilot used `private/consignment-clean/`. Run Hardis help from an ignored workspace as it can create logs in the current directory. Inspect staged paths and the full diff before each commit. Ignore rules neither remove tracked data nor establish approved restricted storage; stop publication if restricted material is tracked.

### Follow-on scope

Later candidates are source documentation for Apex, Flows and UI components; layout and permission reports; dependency analysis; scoped org summaries; and runtime or multi-org comparison. First verify supported coverage against an authorized snapshot or native API and distinguish observations from configuration. Applying permission recommendations or changing metadata needs a separate authorized story. GitHub Pages is only a possible later destination for reviewed, sanitized output. [Hardis project documentation](https://sfdx-hardis.cloudity.com/salesforce-project-documentation/), [project2markdown flags](https://sfdx-hardis.cloudity.com/hardis/doc/project2markdown/) and [metadata dependencies](https://sfdx-hardis.cloudity.com/hardis/doc/metadata-deps/) describe candidate capabilities, not observed results.

## Review and decisions

| Finding or decision | Reviewer and scope | Disposition | Recheck |
|---|---|---|---|
| Hardis-first execution and coverage | Project decision. Independent implementation verification pending. | Generate supported reports and site locally. Verify gaps with documented Salesforce APIs. | AC-03 source check PASS; AC-01–02 NOT RUN. [Evidence](pilot-evidence.md) |
| Draft 0.7 plan review | TypeSafe Jev `jev-1.14.0`, API response identity; local snapshot `f50a0277ccb59686f77e2b87d2a0a8d6f9b19899`. | Typed judgments supported the stated portability goal and honest current blockers; source and in-org view questions were inconclusive. Clarified candidate inputs and views after the reviewed snapshot. | [Review results](review-f50a027.md); changed text needs recheck. This is not an implementation or acceptance review. |
| Draft 0.7 plan review | Claude Sonnet 5.5, low-effort text review on local snapshot `f50a0277ccb59686f77e2b87d2a0a8d6f9b19899`; model identity from response. | Proceed with fixes, not rollout. Clarified scope, producer gap, owner/analyst separation, portability candidates, and workbook contract after review. | [Findings and dispositions](review-f50a027.md); revised text has a Jev recheck, while the Claude recheck timed out. No implementation review or acceptance implied. |
| Draft 0.7 plan recheck | TypeSafe Jev `jev-1.14.0`, API response identity, local snapshot `37da80a6478743a96ab543083887203181354f1b`. | Supported the clarified candidate sources, in-org write boundary and producer gap; P04 dependency was inconclusive and checked directly. | [Recheck results](review-37da80a.md); this is not implementation review or acceptance. |
| Draft 0.5 plan review | Claude, exact model/identity source pending; restricted review session supplied in the handoff, revision `48b65861f9fc9900b393188e69f848a914b2fd53`. Verdict reported in handoff: ready with fixes; review not independently retrieved here. Earlier plan reviewed by Claude and Jev 1.14.0. | Address the reported execution-path, checklist and comparison gaps in Draft 0.6. | Plan review only; workbook, Hardis and live acceptance were not run by this reviewer. Fresh independent implementation review remains pending. |

## Blockers and history

- Portability and installation form remain unverified. AC-01 remains NOT RUN: reconcile the differing OrderSummary field sets, verify sharing and record-type-scoped picklists, and compare selected workbook rows to live sources. AC-02 requires an implemented overlay and refresh/failure checks. Approved restricted evidence storage and portable retrieval remain pending.
- 12 November 2026. User designated Reusable-Delivery as the home for this cross-org capability. Historical source: B2B Commerce `48b65861f9fc9900b393188e69f848a914b2fd53`, with unpublished local follow-on commits `d266cd3654a9b2bf5811283b5bf71636c4560aac` and `cc1c8f76d8bd7ef016d4bb73954472215df8df57`. This is Draft 0.6 → 0.7: existing AC-01–03 wording retained; proposed AC-04 covers portability. Installation form remains pending.
- 12 November 2026. Consolidated P and S tasks into the story checklist under the user decision; retained the pilot evidence and removed the redundant roadmap.
- 12 November 2026. Draft 0.5 → 0.6: execution and evidence details clarified under the handoff; AC-01 through AC-03 wording unchanged. Source: `48b65861f9fc9900b393188e69f848a914b2fd53`. ClickUp write-back excluded by handoff; synchronization pending.
- 12 November 2026. Prepared the reusable story and checklist using the pinned NEW template.
- 12 November 2026. Added the branch, commit, and private-file checks. Updated the guide pin to include the platform recovery links.

## Alternative routes and benchmarks

Descriptions below are vendor claims or prior research, not verified compatibility. Do not install packages, start trials or change security configuration under this pilot.

| Route | What it gives us | Role in this experiment |
|---|---|---|
| Headless 360, Metadata MCP where available, and Salesforce CLI | Repeatable reads through Salesforce APIs. We own the inventory and preserve the project’s story mappings. | Authoritative org reads for verification and gaps. |
| [SFDX Hardis](https://github.com/hardisgroupcom/sfdx-hardis) | Open-source CLI plugin. Generates Excel and a searchable documentation site with object diagrams. | Primary generator for the pilot. [Live data dictionary](https://sfdx-hardis.cloudity.com/hardis/doc/data-dictionary/) and [project documentation](https://sfdx-hardis.cloudity.com/salesforce-project-documentation/). |
| [Salesforce Inspector Reloaded](https://tprouvot.github.io/Salesforce-Inspector-reloaded/download-metadata/) | Browser-based metadata ZIP and query-result export. Supports a scoped manifest. | Vendor-described optional metadata ZIP or CSV spot-check in P04 only if already available and proven to stay within scope. |
| [Field Dumper](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EJg2hUAD) | Field definitions for selected standard and custom objects, one sheet per object, with optional picklist values. | Vendor-described optional field export cross-check in P04 only if already available and scope is proven. Use Salesforce API evidence for sharing defaults and record-type values. |
| [Centric Metadata Accelerator](https://appexchange.salesforce.com/appxListingDetail?listingId=810b8846-1929-4dfe-9b63-754d04cff796) | Excel reports and broader metadata views including layouts, validation rules and triggers. The vendor setup requires an org client app and credentials. | Vendor-described capabilities; excluded from this pilot if client-app configuration or credentials would be required. |
| [Metadata Explorer](https://appexchange.salesforce.com/appxListingDetail?listingId=d011486b-88ac-4000-9bb7-37a5f6c7f945) | Managed package for searching and exporting metadata lists. | Vendor-described optional component-list cross-check only if already available and scope is proven. |
