## Copyable story

```markdown
# <ID> · <Outcome title>

**Owner** · <Confirmed story owner or Pending confirmation> · [Story and execution record](<revision-pinned link>) · [Guide](<revision-pinned link>)

**Outcome** · As <actor>, I want <capability> so that <benefit>.

**Demo result** · <Date, scenario, identity verified or unverified, and observed result. If nothing ran, write NOT RUN.> [Evidence](<revision-pinned link>)

**Acceptance** · <What remains open and what was outside scope. If closure was directed, state who authorized it and exactly what they closed.> [Decision, if recorded](<revision-pinned link>)

## Proposed scenario checks
<Include when the story is driven by proposed test scenarios. Include the setup bullets for demo stories.>

- **Where / who** · <Authorized environment and entry link. Sign in as the intended role or test user.>
- **Start with** · <Direct test-record links, required starting state, and safe reset if needed.>

**Demo sequence** · <Presenter check IDs in order. Include only when the list also contains setup or QA checks.>

1. **<Check ID>** · <Actor and action> → <One visible expected outcome for a presenter step, or the observable expectation for a QA check. Include exact values, counts, and record relationships where relevant.> <Applicable criterion IDs>

| Check ID | Status | Observed result and evidence |
|---|---|---|
| <Check ID> | NOT RUN | <When run, record the observed result and link pinned evidence.> |

## Acceptance criteria
<Include for agreed criteria and for proposed criteria that are not already captured in the scenario checks.>

| Criterion ID | Criterion | Coverage and evidence |
|---|---|---|
| <Stable AC ID> | <Preserve original IDs and agreed wording verbatim. Label new, unagreed wording Proposed.> | <Reference applicable check IDs and any coverage gaps, or record the result and pinned evidence here when there is no separate check.> |

## Material blockers
<Use one current entry per distinct material blocker. Reference the affected step or check IDs.>

**<Step/check IDs> · <Short status>**
- **Goal** · <What must the actor accomplish?>
- **Blocker** · <What prevents it?>
- **Current fix** · <Smallest proposed fix, or verified fix with evidence link>
- **Documentation** · <One best documentation URL. Omit if unavailable.>

## Admin guidance
<Optional at closeout for settings an admin will maintain. Use one bullet per material change.>

- **<What to change>** · <Exact verified admin UI path or durable link to verified runbook instructions> · Replay <existing check ID>. <Include a verified prerequisite or activation step only if it affects the change.>

**Next** · <One action tied to an existing step or human decision and the relevant criterion or check IDs. If assignment is pending, name who can assign the verifier or write Pending confirmation. Otherwise name the confirmed executor.> · <Prerequisites> · [Existing step or decision](<revision-pinned link>)
```

## Keep the story reviewable

Lead with the story’s outcome. Put acceptance criteria in a clearly labeled section. Group related criteria and give each distinct condition its own bullet. Place safeguards and exceptions beside the criteria they qualify. Link or cite evidence where it applies, and include the context a reviewer needs to interpret it.

For new stories, write criteria directly and preserve any wording required verbatim. For migrated stories, carry forward required verbatim criteria exactly as written. Put clarifications in a separate note so reviewers can distinguish them from the source wording.

Stories have no word limit. During review, remove repeated explanations and move optional background to a linked reference. Keep every required criterion, safeguard, exception, and detail needed to judge acceptance in the story itself.

Give each proposed check a stable ID. State the actor, action, and observable expectation once, including exact values, counts, and record relationships where relevant. For platform checks, also state the exact read or observation that produces the result. Where evidence is absent, record Pending with the reason; where sources conflict, record both and do not record Pass until the conflict is reconciled. Preserve agreed criteria verbatim. Map checks to criteria by ID in either direction as needed. Track status, observed result, and evidence by check ID. Use `NOT RUN` until execution.

Use only the sections that apply. For a proposed scenario, the scenario bullets carry the proposed expectations. The results table tracks outcomes and evidence by ID. Retain agreed criterion IDs and exact wording in the acceptance criteria section and use references to show coverage and gaps. For new work without a scenario, label unagreed criteria Proposed in that section.
