# Proposed template changes from D05

- **Before build.** Use the existing criteria and execution sections. Name any prerequisites and target-specific inputs that a new project must supply.
- **During build.** Update the steps in place when a discovery changes the execution path. Record the reason and affected rechecks. Keep detailed reviewer comments, the reviewed revision, repairs and rechecks in a linked review file when the detail warrants one. Keep implementation decisions in the story.
- **After build.** Reconcile the story against the agreed criteria and verified sequence. Keep the build steps in the story and link executable assets where used. Remove stale or duplicate content from the current files. Parameterize org-specific inputs and keep sensitive evidence in approved storage.
- **Close ClickUp last.** Verify the published story, kit and links. Check that a fresh agent can find the inputs, commands and pass criteria from the story. Record where the run was actually verified and what must be rechecked in a new org. Then close ClickUp.

Apply the shared changes in `src/core.md` and regenerate both routes when approved. The [worked example](EXAMPLE.md) shows the D05 pilot. The [template backup](https://github.com/aispanda/Reusable-Delivery/tree/backup/before-d05-closeout) records the state before the pilot.
