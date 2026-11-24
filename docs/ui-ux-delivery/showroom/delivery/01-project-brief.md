# Project brief: UI/UX kit showroom

Project and owner: one page showroom for the UI/UX delivery and testing kit, published with GitHub Pages. Design owner and approver: Rajeev (AI Spanda). Built by Claude (Opus 5.5) as an agent, 24 November 2026.

Audience and top task: people who build interfaces with AI tools or agents, and the leads who review that work. Top task: understand in under a minute what problem the kit solves, try it, and know how to start.

Existing journey or screens: none. There was no showroom before; the README was the only front page. No user validation has been done.

Visual direction and brand assets: AI Spanda wrapper brand, as decided for the README and showroom. Tokens from `aispanda/aispanda-web` `src/styles/global.css`. Lockup and hero rasters from `aispanda-web/public/`, used unchanged and only resized. The mark is not traced or redrawn. The kit's own examples keep their neutral tokens.

Required screens, content and languages: one page in English. Sections: hero with the page's own evidence, the problem and how the kit answers it, the five stages, live example components with a token switch, three steps to start, honest status, questions, footer.

Accessibility and responsive requirements: WCAG 2.2 AA as the target, not a claim. Usable at 320 pixels wide with no sideways scrolling. Every control reachable by keyboard with a visible focus outline. Motion only when the person has not asked for reduced motion.

Delivery stack, content security policy, font and asset constraints and library licenses: static HTML, CSS and a small script, no build step and no dependencies. Fonts self hosted: Sora (OFL, subset to Latin) and Source Sans 3 (OFL, unmodified). No third party requests from the page. No content security policy is set by GitHub Pages; none added.

Human decisions, unknowns and evidence: approved by the owner on 24 November 2026: brand only the wrapper, keep tokens and examples neutral, build the showroom. Unknown: whether GitHub Pages will be enabled for this repository, and final page address.

Time budget and how actual effort will be recorded: one working session; recorded in the review and handoff file.

Supported browsers, operating systems, assistive technologies and devices: current Chrome, Edge, Firefox and Safari on desktop and phone. Screen reader pairs for human review: VoiceOver with Safari on macOS and iOS, NVDA with Firefox or Chrome on Windows. Only Chrome on Linux was checked by automation in this pass.

Existing site baseline: none for the showroom. The related brand baseline is aispanda.com, built from `aispanda/aispanda-web`.

References: aispanda.com for brand treatment (adopt colours, type, offset shadow; adapt layout). Kit README and framework for content (adopt). WAI ARIA Authoring Practices tabs pattern (adopt). All references are AI Spanda owned or public guidance; no third party code, fonts or images copied apart from the OFL fonts above.
