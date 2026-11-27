# Code quality checks

## Plan verification

Before work starts, the story coordinator assigned by the accountable human selects checks from the acceptance criteria, the change's risk and repository policy. The accountable human owns acceptance policy and decides open business, access and release questions. The coordinator updates the plan when scope or risk changes.

For new work, plan verification before the first build step. For migrated work, preserve verified results and apply the plan to the next implementation step and any reopened checks.

| Change | Evidence to plan | Review before handoff or merge |
|---|---|---|
| Documentation or design | Verify source claims, links and agreed criteria as applicable. | Follow project rules and assign an independent source check when preservation or a material design decision requires it. |
| Routine implementation | Run existing relevant tests and focused checks for changed behavior. | Apply the code slice review in the delivery guide's Review and acceptance section. |
| Material behavior, shared contract, access, data, or recovery change | Exercise success and failure paths, including cross-boundary behavior where relevant. | For code, apply the code slice review; otherwise assign a fresh independent human or approved AI reviewer after writer checks. Schedule a separate human decision when acceptance or release policy requires it. |

Record detailed QA procedures, execution results, and repair history in the linked QA record. In the story, summarize the observed outcome and any open gaps against the affected criteria. Use the existing bounded task rows when available. For example, an AI writer implements an agreed behavior, CI runs the repository check, and a fresh reviewer checks the proposed revision and its evidence. Give each step one executor and an expected result. Name the planned client, exact model/version and reasoning for AI steps. Record the actual identity, tested revision, runtime, result and evidence link. A repair reopens the affected checks and findings. Use the same approach for human or automation steps, recording the person or tool and version as applicable.

| Step | Action / AC IDs | Dependencies | One executor; planned model/tool | State / result link |
|---|---|---|---|---|
| S-01 | Implement AC-01 and record the proposed revision. | Agreed AC-01 | AI writer with assigned client, model/version and reasoning | Pending |
| S-02 | Run the repository check and record the result and runtime. | S-01 | Automation with the assigned workflow revision | Pending |
| S-03a | Run CodeRabbit on the proposed revision. Have the writer verify findings, fix confirmed defects, rerun affected checks and obtain CodeRabbit re-review of the changed scope. | S-01 and S-02 | CodeRabbit | Pending |
| S-03b | Review the repaired revision with Greptile, verify findings and record rechecks. If the free allowance is exhausted, record it and skip Greptile without blocking work. | S-03a | Greptile | Pending |
| S-03 | Independently check AC-01 behavior, failure paths and evidence on the repaired revision. Record findings, dispositions and affected rechecks. After further repairs, rerun affected checks and reviews, with Opus last. Record the reviews against the revisions examined. | S-03b | Claude Opus 5.5 in a fresh session that did not write the slice | Pending |
| S-04 | Record the acceptance or release decision when required. | S-02 and S-03 | Accountable human | Pending |

Shipment pilot example from [S-05a](https://github.com/aispanda/salesforce-shipment-tracking-integration/blob/1b1a4ecfc01a1d4040f5f5b4006e68e5784fe1dc/story/user-story.md#execution-checklist)

| Step | Executor | Proposed revision | Tested revision | Result |
|---|---|---|---|---|
| S-05a | GitHub Actions and Python `unittest` | `84e293ac71a8ce5d124517412a96b48a03e26051` | Merge `83f550e57b3ac16a1374abd09c062cc95e9dfa20` | [22 offline tests passed](https://github.com/aispanda/salesforce-shipment-tracking-integration/actions/runs/43151308174) on each of Python 3.11.18 and 3.14.10. |

The shipment pilot kept the fresh review assignment and human acceptance pending.

### Select a check

Choose the smallest check that can prove the task's expected result. For each task, follow the [checklist field guide](templates/story-package.fields.json) and link the exact design section and procedure. Use the existing test, scenario, runbook or a short manual check. A reusable procedure should name the check type, required build and environment, fixtures or starting state, exact action or command, expected result, pass rule and evidence to save. Bound the run by named cases, a sample size, a time limit or an attempt limit. Include a meaningful failure case when it could change the decision. Put the task deliverable or report format in `outputs` and the observed result and run link in `evidence`.

| Check | Inputs | Expected result and pass rule | Procedure or harness | Evidence |
|---|---|---|---|---|
| Document or setup verification | Source section and target revision or configuration | Material claims, links or settings match the stated source or target | Short manual comparison, read-only probe or repository link checker | Comparison notes, diff or readback |
| Unit | Small valid, boundary and invalid fixtures for one rule | Assert the specified return values, errors or state changes | Existing unit test case and repository command | Assertion output with case IDs |
| Integration | Versioned components, test environment and fixtures | Response, persisted state and material side effects match the contract | Existing integration case or repeatable command with readback and reset as needed | Run log and readback |
| Regression | Reproducible defect or approved baseline and affected cases | The original mismatch is gone and covered behavior still meets its expectations | Rerun the relevant unit, integration or UI check against the reproduction and affected cases | Before and after results at their respective revisions |
| End-to-end or acceptance scenario | Build, intended actor, starting state and approved fixtures | Every required action and assertion meets the agreed user or system outcome on each required surface | [Scenario definitions](templates/scenarios.json) and [private run records](templates/results.schema.json) for structured cases. Use the assigned tester. | Per-criterion and per-surface results. Record the human decision separately. |
| Web or mobile UI | Supported browser or device, role, build and fixture | The specified journey, layout, accessibility or device behavior passes on each named surface | [Web UI starter](docs/ui-ux-delivery/testing/README.md), manual device checks or the [mobile Appium runbook](docs/salesforce-mobile-testing/README.md#4-validate-manually-then-automate). Use its Salesforce example only for Salesforce mobile. | Browser trace, screenshots or device results. Use physical-device evidence when the check depends on hardware. |
| Source fidelity | Pinned source edition or file, derived output and reviewed sample locators | Sampled content and attribution match the source and exact pointers resolve | Text, hash or pointer comparison plus human source review where required | Compared pairs, diffs and documented exceptions |
| Retrieval and citation | Frozen labeled queries, target passages, corpus and index revisions | Results meet the agreed ranking or exact-hit targets. Citations resolve to the correct edition and passage. Check abstention where required. | Existing query runner or bounded replay with per-query assertions | Ranked IDs, resolved pointers and metrics by query class |
| Model evaluation | Frozen holdout and rubric, prompt and model versions, retrieved context when used | Scores or error rates meet the preset thresholds on the named cases | Project evaluation runner or rubric-based review with fixed sampling settings when applicable | Per-case scores, traces and relevant limitations |

On a mismatch, record Fail with the observed result, keep the task unpassed and name the repair or decision owner and next action in Comments. Rerun affected checks after a repair. Use NOT RUN for a check that could not start and record the blocker. For a candidate evaluation, record the decision that follows from the result. The [results checker](scripts/validate_results.py) validates structured run records. Run the underlying product checks separately.

## Run the checks

For code work, put the selected checks in a versioned command the writer can run locally and CI can run on the proposed change.

Start with existing tests and the smallest useful language-specific checks. A fast editor or agent hook can call the same command when its runtime is suitable. Treat size, duplication and complexity reports as signals to inspect the changed code. Choose any blocking threshold from the repository baseline and observed value. Keep test behavior and transaction boundaries intact during cleanup.

The reviewer examines behavior and maintainability against the proposed revision and agreed criteria. Turn confirmed failures into targeted regressions where useful. Record policy questions for the decision owner. Compare reviewer tools on verified findings, misses, noise, time and cost with equivalent inputs.

When CodeRabbit runs through its GitHub App, verify the installation and trigger on a representative PR and record its response against the proposed revision. When it runs through the CLI, record the reviewed revision; a verified CLI sign-in does not show that the app is installed. The shipment pilot verified CodeRabbit on a ready PR. Its draft PR reported that automatic review was skipped. In the linked QA record, document the selected reviewer, timing and disposition of confirmed findings. CI reports the repeatable pass/fail results separately.

## GitHub Actions for a Python story

Add a `check.py` to the consumer repository. It must exit nonzero when a required check fails. Run `python -B check.py` from its directory locally. The reusable workflow runs the same command with a read-only repository token. Choose the runtimes the story supports and pin the workflow to a verified Reusable-Delivery commit.

```yaml
name: Story checks
on: [pull_request]
permissions:
  contents: read
jobs:
  python:
    strategy:
      fail-fast: false
      matrix:
        python-version: ['3.11', '3.14']
    uses: aispanda/Reusable-Delivery/.github/workflows/python-checks.yml@<verified-commit-sha>
    with:
      python-version: ${{ matrix.python-version }}
      working-directory: poc
```

Replace the versions and directory with the story's actual support contract. Verify a passing run and a controlled failing run before making the check required. GitHub's default pull-request checkout tests the merge result. Record the PR head and the tested merge revision from the workflow run. Use the ordinary `pull_request` event for untrusted PR code and keep credentials and deployment jobs separate. [GitHub reusable workflows](https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows) · [Required status checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging)

Complete the **Platform access check** in the selected delivery guide before any Salesforce org work. For Salesforce changes, use the repository's existing command or CI job for the applicable Apex tests, component tests, Salesforce Code Analyzer rules and authorized sandbox validation. Record the results by revision and target environment. [Salesforce Code Analyzer CI integration](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/ci-cd.html)

## Settings for a public personal repository

These settings are optional. They enforce only what GitHub can check and never replace the technical evidence, merge authority or business acceptance recorded under the delivery guide. Rulesets are available for public repositories on GitHub Free. [Available rules for rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)

- **Pull requests.** A ruleset can require a pull request before merging with zero required approvals. That blocks direct pushes to the protected branch while still letting a sole maintainer merge.
- **Approvals.** A pull request author cannot approve their own pull request, so required approvals block a sole maintainer's merges unless another collaborator with write access approves. Require approvals only when such a reviewer exists.
- **Status checks.** Add the story check job and verify a passing run and a controlled failing run, as described above, before requiring it. A deployment workflow such as GitHub Pages is not a story check. Select GitHub Actions as the expected source where the ruleset offers it, and choose whether branches must be up to date with the base branch before merging. Required checks show test results only; the Opus review is not a GitHub check, so confirm the required reviews in the QA record before merging.
- **Automatic merge.** Automatic merge must be allowed in repository settings, and it completes as soon as the configured requirements are met, which can happen before the delivery guide's reviews are recorded. Enable it on a pull request only after the required reviews and any exhausted Greptile allowance are recorded against the final head. If a later push changes reviewed scope, turn it off until those reviews are repeated.
- **Merge queue.** Merge queues require a repository owned by an organization, so a personal repository cannot use one.
