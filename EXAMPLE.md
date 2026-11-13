# Worked example: managed RMA

A Customer Care agent authorized a one-unit return in Lightning, recorded receipt and closed it. The test org posted a $12.50 credit memo and processed a simulated $12.50 refund.

| File | What it contains |
|---|---|
| [D05 story](https://github.com/aispanda/B2B-Commerce/blob/b785c07358ef705fe75876f3d86e913fda8e8093/epics/e09-returns-settlement/stories/d05-managed-rma/README.md) | Agreed criteria, the build and test sequence, and what the demo verified. Start here. |
| [Execution kit](https://github.com/aispanda/B2B-Commerce/blob/b785c07358ef705fe75876f3d86e913fda8e8093/epics/e09-returns-settlement/stories/d05-managed-rma/demo-kit/README.md) | Target-org inputs, layout setup, the synthetic fixture and the reconciliation command. |
| [Review record](https://github.com/aispanda/B2B-Commerce/blob/b785c07358ef705fe75876f3d86e913fda8e8093/epics/e09-returns-settlement/stories/d05-managed-rma/reviews.md) | Detailed review findings, repairs, rechecks and the scope of the runtime verification. |

The original run covered full receipt and close for one unit. Partial receipt and live payments are outside that evidence. Use the story's preflight and verification steps to establish results in another org.

Follow the applicable [delivery route](DELIVERY.md) for new work. See the [proposed template changes](TEMPLATE-CLOSEOUT-NOTES.md) drawn from this example.
