# QA test templates and examples

Choose a check from the [delivery QA guide](../CODE-QUALITY.md#select-a-check). Copy its template into the checklist or a linked test case. Keep the exact design reference in **Docs**. Use **Expected inputs** and **Task AC** for the fixture, action, pass rule and run bound. Keep longer procedures in the existing test, scenario or runbook and link them from the task.

The examples below are synthetic. **Save** describes the artifact to collect. After execution, put the observed result, tested revision and artifact link in **Result evidence**. Record the next action and its owner in **Comments** if the check fails or is blocked. Keep real evidence in the story's approved storage.

Use the project's current runner or perform the check by hand when that can prove the result. The external examples show established test patterns and formats. ISO/IEC/IEEE 29119-3 provides test documentation templates that teams can consult for formal documentation needs. [IEC standard overview](https://webstore.iec.ch/en/publication/71834)

## Document or setup verification

```text
Inputs: <source section and target revision or test environment>
Task AC: Document/setup. Compare <named claims or settings>. Pass if <expected heading, value or access>. Bound <items>.
Save: <URL and heading, comparison notes or probe output>
```

**Synthetic example** Check the setup note's link against the [pinned guide section](https://github.com/aispanda/Reusable-Delivery/blob/1f2679d4324d2e6ca785699da5c9e8207da86193/CODE-QUALITY.md#run-the-checks).

```text
Inputs: One setup note link to Run the checks at the pinned guide revision.
Task AC: Document check. Open the link. Pass if it lands on the Run the checks heading at that revision.
Save: Resolved URL and heading.
```

**External examples** Lychee checks links and can check fragments when enabled. Bats demonstrates asserting exit status and output for an existing CLI probe. [Lychee examples](https://github.com/lycheeverse/lychee) · [Bats tutorial](https://bats-core.readthedocs.io/en/stable/tutorial.html)

## Unit

```text
Inputs: <one rule, fixed clock if needed, named input and expected value/error for each case>
Task AC: Unit. Run <named cases> with <runner>. Pass if <every value or error matches>. Bound <cases>.
Save: <assertion output with case IDs>
```

**Synthetic example** Exercise one invoice-flag function.

```text
Inputs: Clock 2026-01-02 UTC. In order, unpaid due Jan 1, unpaid due Jan 2, paid due Jan 1, and unpaid with a missing due date.
Task AC: Unit. Run the four cases. Pass if they return true, false, false and missing_due_date, respectively.
Save: Runner output with all four case IDs and the tested revision.
```

**External example** pytest shows how to run one parameterized test with expected values and exceptions. Use the equivalent case format in your runner. [pytest examples](https://docs.pytest.org/en/stable/example/parametrize.html)

## Integration

```text
Inputs: <versioned components, isolated environment, starting state and fixture>
Task AC: Integration. Exercise <boundary>, read back <state>, then <cleanup>. Pass if <response, state and material side effects match>. Bound <cases>.
Save: <response, separate readback and cleanup evidence>
```

**Synthetic example** Verify an API write reaches the database.

```text
Inputs: Isolated test API and database at the target migration. One unique synthetic invoice, unpaid and due 2026-01-01.
Task AC: Integration. POST once. Require HTTP 201 and an ID. Read by ID through a separate database connection, match both fields, clean up and verify absence.
Save: POST response, database readback and cleanup readback.
```

**External example** Testcontainers shows database setup, insertion and readback with PostgreSQL in Python. Its example requires Docker. [Testcontainers Python guide](https://testcontainers.com/guides/getting-started-with-testcontainers-for-python/)

## Regression

```text
Inputs: <defect or approved baseline, affected and fixed revisions, underlying test case>
Task AC: Regression. Rerun <case and affected checks>. Pass if <original mismatch reproduced where applicable and covered behavior passes on the fix>. Bound <revisions and cases>.
Save: <before and after results with revision and case IDs>
```

**Synthetic example** Reproduce the due-today flag bug with the unit cases above.

```text
Inputs: Pinned affected and fixed revisions. The four invoice unit cases with the same clock.
Task AC: Regression. Run both revisions. Require the due-today assertion to fail on the affected revision and all four to pass on the fix.
Save: Both logs with their revision SHAs and case IDs.
```

A setup error leaves the reproduction unverified.

**External example** Git documents running an existing pass/fail command between known good and bad revisions when you need to locate a regression. A targeted regression case can stay in its current test suite. [Git bisect examples](https://git-scm.com/docs/git-bisect#_examples)

## End-to-end or acceptance

```text
Inputs: <criterion version, build, actor, starting state, fixtures and required surfaces>
Task AC: Acceptance. Run <the linked criterion actions>. Pass if <expected outcome on every required surface>. Bound <fixtures and runs>.
Save: <private results by criterion and surface>
```

**Synthetic example** Reuse the repo's scenario and private run format. [A-01 example](../examples/invoice.scenarios.example.json) · [Scenario template](../templates/scenarios.json) · [Results schema](../templates/results.schema.json)

```text
Inputs: Pinned desktop build, assigned invoice reviewer and three dated fixtures from A-01 version 2.
Task AC: Acceptance. Run A-01 once. Open the queue and inspect each fixture. Pass if only the overdue unpaid invoice is flagged.
Save: Private A-01 result for desktop UI. Record the human acceptance decision separately.
```

**External example** Cucumber's Scenario Outline pairs Given, When and Then steps with an examples table. Running it requires a runner and step definitions. [Gherkin example](https://cucumber.io/docs/gherkin/reference/#scenario-outline)

## Web or mobile UI

```text
Inputs: <build, supported browser or device/OS, viewport, actor and fixture>
Task AC: UI. Perform <named interaction>. Pass if <observable state and accessibility/visual criteria>. Bound <surfaces and interactions>.
Save: <trace, screenshot or device run with build and environment>
```

**Synthetic example** Check the overdue indicator at two web viewport sizes.

```text
Inputs: Pinned web build, Chromium 1280 × 720 and 320 × 700, and one overdue unpaid invoice fixture.
Task AC: Web UI. Open the invoice at both widths. Pass if Overdue is visible, unclipped and exposed to assistive technology.
Save: Trace and screenshots at both widths.
```

For a native app, an equivalent bounded check taps one invoice on the supported device and verifies that its details and status render. Save the device run. A-01 itself requires desktop only.

**External examples** Playwright supplies a web test with assertions. Appium supplies a JS test with driver and device setup. Use physical-device evidence for hardware-dependent checks. The Salesforce example applies to Salesforce mobile. [Web UI starter](ui-ux-delivery/testing/README.md) · [Mobile runbook](salesforce-mobile-testing/README.md#4-validate-manually-then-automate) · [Playwright example](https://playwright.dev/docs/writing-tests#first-test) · [Appium example](https://appium.io/docs/en/latest/quickstart/test-js/)

## Source fidelity

```text
Inputs: <source edition/version, exact locator, reviewed reference, derived text and comparison rules>
Task AC: Source fidelity. Resolve <locator> and compare <sample>. Pass if <edition, unique location and text match>. Bound <samples>.
Save: <source/derived pair, pointer readback and diff>
```

**Synthetic example** Compare one derived line with its source.

```text
Inputs: Policy v1, page 1, line 1. Reviewed text “File by Friday.” plus the derived line.
Task AC: Source fidelity. Resolve the locator once. Pass if it resolves uniquely and the text matches after NFC normalization, preserving spacing and punctuation.
Save: Source and derived lines, resolved locator and any diff.
```

“File by Monday.” fails even when the source file's checksum still matches.

**External examples** W3C provides a text-quote selector with surrounding context. OCR-D provides transcription evaluation methods and sample ground truth. BagIt manifests check file fixity when a transfer needs it. [W3C selector example](https://www.w3.org/TR/annotation-model/#text-quote-selector) · [OCR-D evaluation](https://ocr-d.de/en/spec/ocrd_eval.html) · [Ground-truth dataset](https://lab.kb.nl/dataset/ground-truth-impact-project) · [BagIt example](https://www.rfc-editor.org/rfc/rfc8493.html#section-4.1)

## Retrieval and citation

```text
Inputs: <frozen queries and relevance labels, corpus/index versions, expected citations and unsupported cases>
Task AC: Retrieval/citation. Replay <queries>. Pass retrieval if <ranking rule>. Pass citations if <pointer and support rule>. Bound <queries>.
Save: <ranked IDs, resolved passages, citation verdicts and abstentions>
```

**Synthetic example** Freeze a two-passage index with the same locator in both editions. Policy v1 says “File by Friday.” Policy v2 says “File by Monday.” Q1 asks for the v1 filing deadline. Q2 asks for an appeal deadline that neither edition provides.

```text
Inputs: Frozen v1 and v2 passages and the two labeled queries Q1 and Q2.
Task AC: Retrieval/citation. Replay both once. Q1 must rank v1 first and cite the exact passage supporting Friday. Q2 must abstain without citation.
Save: Ranked IDs, resolved pointers, claim support and abstention result by query.
```

Score ranking and citations independently. A v2 citation fails the citation check even when retrieval ranks v1 first.

**External examples** NIST publishes downloadable relevance judgments (qrels) and a ranking scorer. ALCE provides research examples for evaluating citation support and completeness. [NIST qrels](https://trec.nist.gov/data/deep2022.html) · [trec_eval](https://github.com/usnistgov/trec_eval) · [ALCE evaluation code](https://github.com/princeton-nlp/ALCE/blob/main/eval.py)

## Model evaluation

```text
Inputs: <frozen cases/context, prompt and model versions, sampling settings, rubric and grader>
Task AC: Model evaluation. Score <bounded samples> with <grader>. Pass if <preset per-case rules and threshold>.
Save: <model settings, generated outputs, per-case scores and grader>
```

**Synthetic example** Freeze two prompts with the same context, “File by Friday.” One asks for the filing deadline, and the other asks for an appeal deadline.

```text
Inputs: The two frozen prompts and context, exact prompt and model versions, declared sampling settings and the assigned grader.
Task AC: Model evaluation. Score one response per prompt. Pass at 2 of 2, with Friday for filing and not stated for appeal.
Save: Both outputs, per-case scores, model settings and grader.
```

**External example** Promptfoo supplies a starter configuration with provider, prompts, test variables and assertions. Use an existing evaluation runner or the manual rubric when sufficient. [Promptfoo configuration example](https://www.promptfoo.dev/docs/getting-started/#configuration)
