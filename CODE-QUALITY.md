# Code quality checks

For an implementation story, map important behavior and failure paths to repeatable checks. Put the checks in a versioned command that the writer can run locally and CI can run on the proposed change. Record the tested revision, runtime, result and CI link in the story. Use the story's current evidence fields.

Start with existing tests and the smallest useful language-specific checks. A fast editor or agent hook can call the same command when its runtime is suitable. Treat size, duplication and complexity reports as signals to inspect the changed code. Choose any blocking threshold from the repository baseline and observed value. Keep test behavior and transaction boundaries intact during cleanup.

An independent reviewer checks behavior and maintainability against the same revision. Turn confirmed failures into targeted regressions where useful. Record policy questions for the decision owner. Compare reviewer tools on verified findings, misses, noise, time and cost with equivalent inputs.

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

Replace the versions and directory with the story's actual support contract. Verify a passing run and a controlled failing run before making the check required. GitHub's default pull-request checkout tests the merge result. The workflow logs the checked-out revision for traceability. Use the ordinary `pull_request` event for untrusted PR code and keep credentials and deployment jobs separate. [GitHub reusable workflows](https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows) · [Required status checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging)

For Salesforce changes, use the repository's existing command or CI job for the applicable Apex tests, component tests, Salesforce Code Analyzer rules and authorized sandbox validation. Record the results by revision and target environment. [Salesforce Code Analyzer CI integration](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/ci-cd.html)
