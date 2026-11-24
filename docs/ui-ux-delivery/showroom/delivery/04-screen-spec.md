# Screen: showroom page

Audience, task and existing journey reference: see [01-project-brief.md](01-project-brief.md). Visitors arrive from the README, the AI Spanda site or a shared link.

Content and primary action: primary action "Start a project", which leads to the three steps and the brief template. Secondary action "Try the components".

Layout, component instances and story or fixture links: sticky header with lockup, page links and "View on GitHub"; hero copy panel beside the evidence panel; four problem cards; stage tabs; token switch beside the live example components (loaded from `../examples/components.css` and `../examples/tokens.example.css`); three steps and a command block; three status cards; four questions; footer. The page itself is the fixture for [`../check-showroom.mjs`](../check-showroom.mjs).

Data and states: no live data. Example states covered: save and cancel messages, disabled button, email error and valid submit, checked, unchecked and disabled checkboxes, native select, dialog open, kept and deleted, neutral and AI Spanda tokens.

Widths, landmarks, focus order and accessibility checks: checked at 320, 768 and 1280 pixels. Landmarks: header with page navigation, main, footer. Focus order: skip link, logo, page links (wide screens), GitHub button, hero actions, delivery record link, stage tab and panel, template link, token radios, example components, step links, command block, status link, questions, footer links.

Open decisions and human review: light theme only; GitHub Pages not yet enabled; human design, keyboard and screen reader review not yet done.

Component composition and integration assumptions: the showroom loads the kit's example CSS by relative path, so the published site must keep `showroom/`, `examples/` and `assets/` side by side, which the Pages workflow does.

Critical user flow to check, with expected outcome: a keyboard user tabs from the top, opens "How it works", moves through the stages with arrow keys, switches the token source, submits the form with a wrong address and sees the error, opens and closes the dialog with Escape and lands back on its trigger. All steps are automated in the check; the same flow is required in human review.

Comparison screen: no earlier showroom exists. The README front page is the nearest reference and carries the same banner, stages and status.
