# Lean AI assisted UI/UX delivery framework

Status: draft. Goal: one person can efficiently produce a professional, reviewable UI and handoff for websites, commerce experiences and applications, using AI for routine work and people for judgment. Any delivery time target is a hypothesis to measure, not a promise. Scope is screens, interaction patterns, components and design system handoff; business integrations, backend and production deployment belong to the technical team. Existing user journeys are inputs; designing screens does not by itself validate a journey.

## Reusable core and project inputs

Reuse the process, blank templates, accessibility checks, and component and story patterns where their stack and license fit. Each project supplies its audience, content, brand, chosen patterns, constraints and actual token values. Do not assume a brand palette, spacing scale, typography or component library is universal. Track the source, decision owner and version of token values, and document exceptions. Target human review at consequential decisions and final output, not a meeting for every component.

## Five stages

1. **Brief:** record audience, task, journey input, priority screens, content, stack, brand, constraints and owner with `templates/01-project-brief.md`.
   * If a site or product already exists, record its source version (repository commit or deployed date), stack, real content, and the visual and functional qualities to keep or fix, with screenshots at the agreed widths, before rebuilding anything.
   * If there is no existing site, name one or more references (a site, screenshot, design file, Storybook or repository) and state exactly what to adopt, adapt or avoid. Check reuse rights before copying code, fonts, images or text. A reference informs the design; do not reproduce it uncritically.
2. **Foundations:** document project rules and one authoritative token source with `templates/02-design-system.md`. Generated outputs derive from that source where appropriate. Turn the visual direction into acceptance criteria a reviewer can check, such as type scale and line length, spacing rhythm, color pairs, focus treatment and image handling, each marked approved or provisional.
3. **Components:** build or adapt only what the screens need, in the stack that will ship. Stories need not mean React: native Storybook adapters (for example `@storybook-astro/framework`) render the real components. Otherwise use semantic fixtures or the stack's own test tools. Work in another stack is a reference only. States are part of a component. Take anatomy, states and content fields from the existing site or chosen reference: a component inventory row is a starting list, not a specification. Use `templates/03-component-spec.md` when code and stories alone are not enough.
4. **Screen:** assemble content and interactions with `templates/04-screen-spec.md`, at relevant widths and states. Compare components assembled in representative screens with matching real content, states and widths, not only as isolated examples. A visual design tool is an optional reference, not an obligatory conversion step for each component.
5. **Review and handoff:** with `templates/05-review-handoff.md`, compare the existing version (or reference) and the candidate for visual quality, behavior, accessibility and performance on the same screens, content, states and widths. Record which results came from automated checks, which from a visual comparison tool and which from a person, and what human visual, keyboard, screen reader and usability review remains. Measure time and improve the templates from the gaps observed.

Choose tools for the actual risks and stack; this framework does not prescribe one toolset. Passing checks or an unchanged visual diff never replace human brand and design approval.

## Sources of truth and evidence

Record the source revision of exact token values, keep rationale and rules in the project's design system document, and use component code with stories or fixtures for behavior. Mark unapproved choices provisional. Save test commands, dates, source version and results. Do not claim token generation, visual comparison or accessibility certification until verified.

Record who performed each review: a named person, or an agent with its model and tool. Several agents reviewing in parallel are still agent review. An agent inspecting a screenshot is not a human review. Before citing a check as passing, show that it can fail.

## Roles and tool choices

A design owner (the project owner or a designated designer) approves brand and high impact design choices and reviews the result. AI agents can draft, combine contributions, implement and run checks; an independent reviewer, human or agent, can validate the draft, with its identity and outcome recorded. Storybook is a useful workbench for stacks it supports. Design tools that cannot render server templates (for example Open Design) should consume the shared token file and static HTML specimens, not copies; such a package can be checked locally over HTTP with axe when its cloud service is unavailable. Component libraries are optional, project dependent building blocks, not a mandatory stack; licensing and compatibility matter.

## Building and testing components

Stories or fixtures can be written early and guide implementation. Develop individual states in isolation, compose them into patterns, then preview whole screens. Include default and meaningful variant states, plus loading, empty and error states at the appropriate level. Use sample data and interaction checks so examples repeat without a live backend; integration still needs its own verification.

For data dependent screens, document the expected data contract and use deterministic mocked success and error responses. Mocked flows verify the frontend's response to those fixtures, not real authentication, service behavior or production integration. Avoid forcing a framework or state library onto projects with a different stack.

For each important component, list representative states and acceptance criteria as an action and an observable result. Automate high value interaction and accessibility checks, then review keyboard operation and visual quality by hand. Check selected assembled screens and critical flows in a real browser. Use responsive examples appropriate to the project rather than every possible combination.

For a reproducible bug, add a focused test, confirm it fails for the reported reason, fix the bug, and rerun it. Record exactly what each check covered: component or screen, states, viewport, tools, result and any failed or skipped checks. A source scan or a screenshot of one state does not establish that every state or device was reviewed. Scale the depth of review to the risk.

Stories can describe planned states before they are finished: label placeholders and check rendered results rather than assuming a story name proves behavior. Reuse representative fixtures between component, screen and flow checks where practical.

Checks complement each other. A full passing story suite can still miss a control that keyboard users cannot reach, which a browser flow or manual review then exposes. Automated accessibility checks catch some issues; they cannot prove accessibility.

Native browser behavior (closing a dialog with Escape, select menus, form submission, focus return) is a distinct risk that simulated story events miss. Check it in a real browser and name the operating system in the evidence.

For visual regression, a person first reviews and accepts baseline images in a consistent environment. A tool such as Chromatic (for Storybook or Playwright) or Playwright screenshots can then flag changes; a difference is not automatically a defect, and a passing comparison does not prove the design good. A locally captured archive is not an accepted baseline: record cloud upload and human acceptance separately. CI is useful for repeated checks, not a prerequisite for a pilot.

## Coordinating tools and handovers

Use one component brief as the shared contract, and keep decisions, links, pending questions and evidence in the project's handoff folder. Tools do not automatically exchange a complete design; a person or coordinating agent carries each handover.

1. **Brief to optional visual reference:** supply project rules, chosen references, constraints and acceptance criteria. Record the reference link, adopted guidance, overrides and unapproved choices, and verify licensing before reusing code or assets.
2. **Brief or reference to implementation:** create or adapt code in the target stack and link the files. HTML from a design exercise is not automatically a production component. Check that the implementation follows the brief and document differences.
3. **Screen or component to design critique:** where useful, review the rendered result with a person or a critique tool. Resolve findings or mark them for human judgment. A clean automated detector result is not a full design or accessibility review.
4. **Components to automated checks:** run component, interaction and configured accessibility checks; use a real browser for targeted component and screen flow checks that cover a distinct risk. Record what ran, the results and the remaining manual checks.
5. **Candidate to visual comparison (optional):** once an environment and baseline are agreed, compare later builds against the accepted baseline; a person decides whether differences are intentional.
6. **Review to handoff:** include links to brief, design, code and stories or fixtures, test results, reference provenance, unapproved decisions, manual accessibility review and next action. Feed missing inputs back into the templates. Passing checks are not design approval.

The `testing/` starter is a draft for static HTML and React with Storybook; adapt it to the real stack.
