# Worked example — illustrative, not delivery evidence

This fictional example demonstrates the format. It does not replace any existing shipment acceptance criterion or establish Salesforce support.

**SHIP-EXAMPLE: Keep shipment status current.** As an authorized buyer, I want to see shipment status for my order so that I can follow delivery. Status: design example; build and tests NOT RUN; owner Pending. Scope: demonstrate replay safety using synthetic data. Solution proposal: stable package identity and idempotent writes; exact platform contract remains unverified.

| AC | Expected outcome | Verification | Result |
|---|---|---|---|
| EX-01 | Replaying the same synthetic package creates no duplicate shipment. | Execute the same fixture twice and compare record identities/counts. | NOT RUN |

| Step | Action | Dependency | One executor | State |
|---|---|---|---|---|
| EX-S1 | Verify the supported identity/upsert contract and document gaps. | Authorized environment and relevant API docs | AI; exact model Pending selection | Blocked — missing assignment/access |
| EX-S2 | Implement the smallest replay-safe slice. | EX-S1, implementation authority | AI; exact model Pending selection | Pending |
| EX-S3 | Run replay and affected failure checks. | EX-S2 and synthetic fixture | Automation; runner/version/operator Pending | Pending |

EX-S1 contract: inputs are the target metadata/API version and relevant official documentation sections (Pending retrieval); output is a supported contract in the story/design. Check that identity uniqueness and replay behavior are supported, listing evidence and uncertainty. Read-only boundary; no record writes. Set bounded time/retries before dispatch. Actual model, result and evidence NOT RUN. The next step remains ineligible until its missing inputs are resolved.

For a bug discovered during EX-S3, record the failing fixture and observed count, investigate before changing code, link the actual patch and rerun the same fixture plus affected checks. Do not label the proposed idempotency design a confirmed fix.


Optional illustration. Follow [DELIVERY.md](DELIVERY.md) and its required route/core before executing work.
