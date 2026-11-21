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
