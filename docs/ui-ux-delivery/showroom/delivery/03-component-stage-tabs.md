# Component: stage tabs

Purpose, use and avoid; anatomy, content and long label behavior: shows one of the five delivery stages at a time so the page stays short. Use for parallel sections of similar weight; avoid for steps that must be read in order. Anatomy: tablist of five buttons, each with a number badge and label, and five panels. Long labels wrap the tablist onto more lines instead of scrolling.

Variants and states, token roles, focus treatment and decorative layering: selected (ink fill, white text, amber badge and amber offset shadow) and unselected (white fill, ink border). Focus shows the 3 pixel clarity blue outline on top of either state.

Behavior, keyboard access, semantics, accessible name and responsive rules: WAI ARIA tabs with automatic activation. Tab moves into the selected tab and then into its panel. Arrow Right and Arrow Down select the next tab, Arrow Left and Arrow Up the previous, wrapping at the ends; Home and End select the first and last. Only the selected tab has `tabindex="0"`. Tablist is named "Delivery stages"; each panel is labelled by its tab and focusable so its content can be reached.

Acceptance: pressing Arrow Right on "Brief" selects and focuses "Foundations" and shows only its panel (automated). End selects "Review and handoff"; Arrow Right then wraps to "Brief"; Home shows the Brief panel (automated). Screen reader announces tab name, position and selected state (human, not yet done).

Reference, provenance, adopted guidance, project overrides and license: WAI ARIA Authoring Practices tabs pattern with automatic activation, adopted. Code written for this page, MIT.

Evidence, open decisions and approval status, next owner and action: automated checks pass at 320, 768 and 1280 pixels and fail when the key handler is removed (see [results.md](results.md)). Screen reader review open; owner Rajeev.

Baseline or reference parity: no earlier version. The README shows the same five stages as linked tiles.
