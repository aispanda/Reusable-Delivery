# GitHub delivery guide

Version 0.3 — proposed method, 11 November 2026. Use this file to create a new story or migrate existing work. Preserve the user's requirements and authority. This guide organizes work; it does not authorize implementation, deployment, spending, external sharing, or changes to acceptance criteria.

## Start here

Read the current story, relevant comments, decisions and evidence before changing it. Reuse what is already accurate. Put portable delivery material in the selected GitHub folder; keep client identities, instance URLs, real records and restricted evidence outside Git. Any authorized AI can use the folder, but must establish its own access and verify the destination environment.

Keep the story understandable on its own. Link detailed design, research, investigation, plans and evidence where they help execution or review. Create a separate file when its detail or lifecycle merits one; otherwise keep a short section in the story. Concision is a judgment, not a word limit or fixed document count. Do not omit necessary criteria, context or verification to make a document short.

ClickUp holds the title, optional “As a … I want … so that …” sentence, **folder link and story link**. Use ClickUp's fields for ownership, dates and status. ClickUp is the dashboard: execution evidence governs delivery status; explicit current human assignment, cited to the decision or designated assignment field, governs ownership. Reconcile conflicting fields with their authoritative source, record the correction, and leave unresolved conflicts visible. GitHub holds the detailed record and supporting links. Do not maintain competing full story copies. Preserve old attachments as historical evidence when migrating.

Suggested folder (adapt to the repository; only create what is useful):

```text
<work-item>/
  story.md                 # entry point, criteria, concise solution and next step
  design.md                # when supporting design detail is needed
  investigation.md         # when a bug or uncertainty needs a durable analysis
  evidence/                # sanitized checks, review and results, when available
  config.example           # placeholders and documented configuration contract
```

Names are suggestions. Link existing useful artifacts instead of duplicating them. Never create fake code or test results to imply progress. This is a proposed adaptation of the agreed AI delivery story Markdown v1.3 and Field Guide v1 + operational addition v1.1. See [source mapping and validation](VALIDATION.md); original source links are in the restricted provenance index. The user’s current instructions govern adaptations; unresolved source conflicts remain visible.

## Create or migrate

1. **Reconcile.** Confirm repository, destination folder, source revision, current branch, existing changes and authorization. Read only relevant prior chats/artifacts. Inventory the latest story, criteria, decisions, design, research and evidence. Resolve contradictions from authoritative evidence; record unresolved ones. Do not treat another project's state or a model's recommendation as fact.
2. **Preserve and organize.** Keep agreed criterion IDs and wording, meaningful history and evidence. When moving private specifics outside Git, preserve their meaning using named parameters and retain an access-controlled mapping. Compare source and destination criteria; classify every difference. Stop a migration from being called complete while a required criterion is missing, altered without authority or inaccessible. Do not invent names, approvals, models, URLs or results.
3. **Make the next step executable.** Fill the story below. Keep the whole sequence visible in a concise checklist; expand only the immediate eligible step. Link supporting source sections and explain the claim each supports. For platform work (for example Salesforce), use relevant official documentation and verify actual metadata, edition, API version, access and behavior in the target environment before relying on them. A documentation URL establishes neither compatibility nor runtime success.
4. **Review and publish within authority.** Check readability and execution precision. Preserve required independent review and acceptance. Inspect the exact files/diff, filenames, branch/commit text, author metadata and history for unauthorized private data; `.gitignore` does not remove tracked content or earlier commits. Do not falsify author identity; resolve inappropriate attribution or disclosure before publishing. Use a separate branch or coordinate the current one; never overwrite another worker. Publish only sanitized material to the authorized repository. Before replacing a ClickUp description, capture its current text verbatim as historical evidence (in restricted storage if client-identifying), account for every criterion in the step 2 comparison, and confirm existing authority to edit that item. Read back the published revision and links before replacing the description with the small pointer; inspect and merge intervening edits rather than overwrite them. If synchronization fails, record it locally and report it; do not claim it succeeded.
5. **Continue or hand off.** Execute eligible work already authorized. A new laptop/client uses the same folder but supplies its own private configuration, access and environment evidence. Reusable code/design can carry forward; completion, acceptance, fixture reservations and permissions do not automatically transfer. 

Prefer a mutable branch link for the current story and folder; record immutable commit/blob references for reviewed inputs and evidence. A draft-PR branch is usable but is not the merged standard. Verify access as the intended reader. Private evidence may use an opaque reference with its access owner and retrieval instructions, held in an approved restricted index; inaccessible evidence remains a gap. Keep client-identifying ClickUp/chat/template links in that index when they cannot safely be published. Do not manufacture public links to private conversations.

## Copyable story

Replace placeholders with facts, **Pending — missing item**, **Blocked — dependency/resume condition**, **NOT RUN**, or **N/A — reason**. Unknown is not N/A. Keep these concerns covered without mechanically repeating irrelevant sections.

```markdown
# <stable story ID>: <outcome>

Guide: <verified GitHub link to this guide, version/commit>
Revision/status/as-of: <revision; documentation/build/test/acceptance states separately>
Origin: <permitted source reference/version; restricted index if necessary>
Accountable owner: <actual person or Pending>

## Current state
<Verified result and evidence; unresolved limits; next eligible step and executor.>
<Independent verification: NOT RUN/Pending/result. Human acceptance: required/not
required/unknown, with source; actual decision remains Pending until received.>

## Outcome and scope
As a <beneficiary>, I want <capability>, so that <outcome>.
<Scope, exclusions, baseline facts, assumptions and dependencies.>

## Acceptance criteria
| ID | Agreed criterion and observable expected result | Check/evidence | Result |
|---|---|---|---|
| AC-01 | <preserve wording> | <method and evidence> | NOT RUN |

## Solution
<Concise approach, important alternative/tradeoff, interactions and failure behavior.>
<Links to design/research/investigation; claim supported and limits of each source.>
<Relevant product, business, UX, technical and QA concerns; N/A with reason where useful.>

## Execution
| Step | Action / AC IDs | Dependencies | One executor; planned model/tool | State / result link |
|---|---|---|---|---|
| S-01 | <bounded action> | <required inputs> | <Human / Automation / AI; identity> | Pending |

### Next step: S-01
- Accountable owner; one executor; planned exact model/tool/version: <values>
- Inputs: <source revision, schema/template, freshness/access; supporting docs and claims>
- Operation/output: <bounded operation, destination, format, expected result>
- Check: <AC IDs, method, expected outcome, verifier, evidence to retain>
- Authority/boundary: <existing authorization reference, action class, excluded effects>
- Limits/recovery: <time/cost/retries; inspect partial effects before retry; stop/resume condition>
- Actual: NOT RUN. <Later record executor/model/identity source, attempt/time,
  input/output revisions, expected versus observed checks, evidence, limits and next step.>

## Review and decisions
| Finding/decision | Reviewer, model/session, identity source and reviewed revision/scope | Disposition/repair | Recheck/evidence |
|---|---|---|---|
| <ID> | <actual identity or Pending> | <accepted/rejected/deferred with reason> | NOT RUN |
<Human-reader and AI-execution perspectives; maker review clearly labeled.
Fresh independent checker where required. Human acceptance separately recorded.>

## Blockers and history
<Blocker: timestamp, unmet criterion, attempts, partial effects, impact, responsible
owner/service, smallest next action and verifiable resume condition.>
<Material changes: reason/authority, affected criteria/checks, evidence and rechecks.
Keep one current-state block; label old snapshots historical.>
```

### Executor and execution rules

Each step has **one executor category and one assigned executor**. Split a mixed human decision / AI change / automated test into separate steps when the handoff matters. The accountable human may differ from the executor. Do not invent an owner; unresolved required assignment blocks dispatch.

- **Human:** actual person's name and action/decision.
- **Automation:** deterministic workflow/script/tool, version, trigger and accountable operator. Tool execution does not turn an AI judgment into automation.
- **AI:** client/agent, exact planned model and reasoning setting when applicable. Record actual model separately with its identity source (provider/client metadata preferred; self-report labeled). Family/product names alone are not precise versions. Project examples such as Terra, Sol, Claude or Jev are not mandatory assignments. Some AI executors, including Jev, are decision models rather than assumed LLMs. Resolve the planned model before dispatch; if actual identity is not exposed, record unknown plus available session/client evidence. Do not silently substitute a required model.

Use **reconcile → select one eligible step → execute → verify → record → recompute → repeat**. Eligible means inputs, dependencies, assigned executor, authority and sufficient budget are established. Continue independent work only when the pending decision cannot invalidate it. For concurrent work, use a coordinator or an atomic shared claim mechanism: record step/files, executor, start time and expected duration; read back the successful claim before execution. A conflicting claimant does not proceed. If no reliable claim mechanism exists, use one writer for the shared scope. An overdue claim is a signal to inspect, not permission to steal work: establish that the prior executor stopped, inspect partial effects and record any takeover. Reconcile the latest revision before writeback; uncertain writes require readback before retry.

States: Pending, In progress (executor and last-update time), Rework (executed check failed), Blocked (specific dependency), Complete (checks passed with evidence), N/A (irrelevant with reason), Superseded (reason and existing replacement ID). Do not use N/A/Superseded to retire failed criteria. Detailed step evidence governs summary status; reconcile inconsistencies. Changed inputs or criteria reopen affected downstream checks.

Apply human-reader and AI-execution review perspectives; one reviewer may cover both. A human-reader perspective is not human acceptance. A required independent checker must be fresh and must inspect actual evidence against the frozen criteria. Model opinions, rendered mockups and successful tool calls are not implementation proof.

When Claude or another reviewer is needed/requested, send the minimum authorized packet tied to the exact revision: question, criteria, relevant artifact, evidence and output structure. Request concrete findings with location, impact, proposed correction and verification. Set proportionate response/time/cost/retry bounds; no fixed universal model-call count. Verify advice, record dispositions, and recheck affected findings. Reuse unchanged valid reviews. If access/model/transmission permission is unavailable, record the blocker without claiming a review or silently substituting. Do not send private project content merely because the guide requests review.

## Supporting artifacts: use only when they earn their place

**Design/research:** question and AC IDs → verified facts and source sections/version/access date → proposed approach/alternatives/tradeoffs → contracts/data flow and failure behavior → unresolved assumptions → validation plan and decisions. Put long details here, keep the chosen solution concise in the story. Public source links should be precise enough to check; test their applicability to the target.

**Debugging/investigation:** symptom and expected behavior → reproducible case and environment revision → observations/log references → ranked hypotheses and discriminating checks → actual diagnosis and confidence → exact fix/change reference → before/after test plus affected regression results → remaining limits/recovery. Mark a hypothesis as disproven, supported or untested. If nothing is fixed, say so. “Command succeeded” is insufficient; show that the original failure no longer reproduces and relevant behavior still works. Keep raw sensitive logs outside Git and publish sanitized evidence or approved restricted references.

**Configuration:** document required keys, types, defaults, validation, supported runtime/tool versions and retrieval mechanism; commit placeholders/synthetic fixtures only. Store real client configuration outside the checkout where practical, or in explicitly ignored local files after verifying they are untracked. Keep secrets in the approved secret store; never print values in diagnostics. A setup/build command must be real and verified or labeled proposed/NOT RUN.

## Compact worked example — illustrative, not delivery evidence

This fictional example demonstrates the format. It does not replace any existing shipment acceptance criterion or establish Salesforce support.

**SHIP-EXAMPLE: Keep shipment status current.** As an authorized buyer, I want to see shipment status for my order so that I can follow delivery. Status: design example; build and tests NOT RUN; owner Pending. Scope: demonstrate replay safety using synthetic data. Solution proposal: stable package identity and idempotent writes; exact platform contract remains unverified.

| AC | Expected outcome | Verification | Result |
|---|---|---|---|
| EX-01 | Replaying the same synthetic package creates no duplicate shipment. | Execute the same fixture twice and compare record identities/counts. | NOT RUN |

| Step | Action | Dependency | One executor | State |
|---|---|---|---|---|
| EX-S1 | Verify the supported identity/upsert contract and document gaps. | Authorized environment and relevant API docs | AI; exact model Pending selection | Blocked — missing assignment/access |
| EX-S2 | Implement the smallest replay-safe slice. | EX-S1, implementation authority | AI; exact model Pending selection | Pending |
| EX-S3 | Run replay and affected failure checks. | EX-S2 and synthetic fixture | Automation; runner/version/operator Pending | Pending |

EX-S1 contract: inputs are the target metadata/API version and relevant official documentation sections (Pending retrieval); output is a supported contract in the story/design. Check that identity uniqueness and replay behavior are supported, listing evidence and uncertainty. Read-only boundary; no record writes. Set bounded time/retries before dispatch. Actual model, result and evidence NOT RUN. The next step remains ineligible until its missing inputs are resolved.

For a bug discovered during EX-S3, record the failing fixture and observed count, investigate before changing code, link the actual patch and rerun the same fixture plus affected checks. Do not label the proposed idempotency design a confirmed fix.

## Short reusable prompts

**New work:** “Use [this delivery guide](DELIVERY.md) to create the story for: <outcome>.”

**Existing work:** “Use [this delivery guide](DELIVERY.md) to migrate this work into the GitHub delivery model, preserving its requirements and evidence.”

After publication, substitute the verified GitHub URL for the relative guide link. A repository/folder or source story need only be specified when it cannot be established from context. The executor should discover existing context before asking; ask only for a genuinely missing decision or access. 
