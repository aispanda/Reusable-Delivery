# D05 · Process a fulfilled return with managed RMA

**Owner** · Pending confirmation · [Original story, execution record and file index](https://github.com/aispanda/B2B-Commerce/blob/f6f838bff776dba2b4b31caa2f59d0e5b119313b/epics/e09-returns-settlement/stories/d05-managed-rma/README.md) · [Guide](migrate/DELIVERY.md)

**Outcome** · As a Customer Care agent, I want to authorize a return, record receipt and close an RMA so credit processing reflects the items received.

**Demo result** · On 13 November 2026, the one-unit Lightning demo passed. Salesforce closed the Return Order, posted a $12.50 credit memo and processed a simulated $12.50 refund. The authenticated test session’s intended Customer Care identity remains unverified. [Evidence](https://github.com/aispanda/B2B-Commerce/blob/f6f838bff776dba2b4b31caa2f59d0e5b119313b/epics/e09-returns-settlement/stories/d05-managed-rma/reviews.md#demo-verification)

**Acceptance** · The requester authorized closing the one-unit demo in ClickUp. Acceptance for the unrun checks remains open. Rejection, fees, store credit and live payments were outside the demo. [Decision](https://github.com/aispanda/B2B-Commerce/blob/f6f838bff776dba2b4b31caa2f59d0e5b119313b/epics/e09-returns-settlement/stories/d05-managed-rma/reviews.md#demo-closeout)

| ID | Agreed criterion | Observed result |
|---|---|---|
| AC-01 | From a fictional fulfilled managed line, an agent selects item, eligible quantity and reason and creates one RMA with a trackable reference. | One trackable Return Order created in the demo. Intended Customer Care identity remains unverified. |
| AC-02 | Receipt and close record the actual returned quantity and status. Partial receipt or ineligible/unfulfilled quantity is handled without duplicating a return or promising a credit early. | Partial coverage. Expected 1, received 1, rejected 0, returned 1. Partial receipt and ineligible/unfulfilled cases were NOT RUN. |
| AC-03 | Capture Order Summary, RMA and return line state before and after. Reconcile any credit event with the credits story. | Demo reconciliation passed for the order, return and line, credit memo and simulated refund. [D07 tracks separate finance acceptance](https://github.com/aispanda/B2B-Commerce/blob/f6f838bff776dba2b4b31caa2f59d0e5b119313b/epics/e09-returns-settlement/stories/d07-credits-refunds/README.md). |

**Next** · RMA-06 (AC-01–03) · Assign a verifier. Assignment owner pending confirmation. With an approved scenario, isolated fixtures and intended-user access, the verifier repeats the one-unit run as Customer Care and checks partial receipt and ineligible or unfulfilled quantities for duplicate returns or premature credit. [Existing test step](https://github.com/aispanda/B2B-Commerce/blob/f6f838bff776dba2b4b31caa2f59d0e5b119313b/epics/e09-returns-settlement/stories/d05-managed-rma/README.md#build-and-test)
