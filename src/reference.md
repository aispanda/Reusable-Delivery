## Supporting detail when needed

For work exploring standard product capabilities through bounded experiments, read [OOTB discovery and experiments](../references/ootb-experiments.md) at this guide revision. Load it only when that approach is relevant; link the execution record from the story.

- **Design/research:** question and AC IDs; verified facts and dated/versioned source sections; approach/alternatives/tradeoffs; contracts/data flow and failure behavior; assumptions, decisions and validation plan.
- **Debugging:** expected/observed behavior, reproducible case/environment; logs, hypotheses and discriminating checks; diagnosis/confidence; exact fix reference; original-failure retest and affected regressions; limits/recovery. Mark hypotheses untested/supported/disproven. A successful command is not proof of a fix. Keep sensitive raw logs restricted.
- **Configuration:** required keys/types/defaults/validation, runtime/tool versions and retrieval mechanism. Commit placeholders/synthetic fixtures; keep real values outside the checkout where practical, otherwise verify local files are ignored and untracked. Use approved secret storage; never print secrets. Label proposed/unrun commands honestly.

See the [worked example](../EXAMPLE.md) for the current format and the [archive](../archive/README.md) for the prior format. [Validation history](../VALIDATION.md) documents earlier revisions.
