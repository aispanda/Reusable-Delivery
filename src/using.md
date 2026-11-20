## Using the story

Draft the demo in the story as soon as the path is known. Mark pending fixtures or access explicitly. Write each presenter action once, in replay order, using its stable check ID. Keep QA queries in the QA record and track observed results and evidence by ID.

Revise the setup and actions in place as you run them. Before marking the story demo-ready, confirm intended-user access and record links, verify the safe reset, and replay the sequence from the stated starting condition. Restore the starting state afterward where a safe, authorized reset applies. Omit credentials. Keep restricted links in an authorized record and use a safe reference in the story.

Capture candidate admin paths during execution. Verify them as the intended admin, including any required activation sequence. Finalize Admin guidance after the relevant acceptance checks pass and before closing the story. A passing buyer demo verifies buyer behavior only. Keep proposed admin paths in the execution record until verified, and reference existing checks by ID so the buyer demo stays intact.

Record one next action, its owner, and the agreed criterion it advances or the decision a named human needs to make. Label proposals explicitly. Only an authorized decision changes agreed scope or criteria. Report what was observed, with a reference to the evidence. Keep commands, logs, test steps, and repair history in linked execution or QA files. At closeout, add a **Files** index. Link each file and describe its purpose in at most eight words.

Start with known checks. Refine Next as fixture, user, permission, documentation, or smaller-step needs emerge. Use plain language and fewer than 30 words each for Goal, Blocker, and Current fix. Mark a proposed fix unverified until tested.

Try the smallest authorized fix first and verify it against the blocker. If stuck, send one authorized reviewer the same three fields, the documentation URL if available, and only essential sanitized evidence in a reusable thread. Request at most 60 words covering one actionable next step, its success check, and any approval or access needed.

The execution agent validates advice, retries only with new evidence or a changed hypothesis, and escalates access or approval needs. Update Current fix in place after failures. On resolution, retain only the verified fix there and link evidence. Preserve prior criteria and evidence. Record material side effects, decisions, and mandatory evidence in existing QA records.

Use the existing execution or QA record when it has the needed detail. Check the Files index against tracked story files, including subfolders, and verify its links before closing. Keep any required independent verification and human acceptance explicit.

### Example: Quantity rules and volume pricing

- **Where / who** · Open the demo storefront as the test buyer.
- **Start with** · Open the gauze-box product. Confirm the isolated cart is empty. For a safe reset, remove only the demo line when authorized.

**Demo sequence** · AC-03 → AC-04 → AC-05 → AC-06

1. **AC-03** · Add 8 boxes → $80 subtotal.
2. **AC-04** · Try 9 boxes → rejected. The cart stays at 8 boxes and $80.
3. **AC-05** · Enter 10 boxes → $9 each, $90 subtotal.
4. **AC-06** · Enter 12 boxes → $9 each, $108 subtotal.

**AC-03 · Resolved**

- **Goal** · Add eight units as the test buyer and verify one cart line at $80.
- **Blocker** · The buyer page showed Out of Stock. In-app browser control then became unavailable.
- **Current fix** · Playwright Chrome restored buyer testing. Add To Cart was enabled, and AC-03 passed. [Verification details](https://github.com/aispanda/B2B-Commerce/blob/5b5d8838cfbdc2a8075e368b024b28a1a4501ed7/epics/e01-customer-ordering/stories/purchase-quantity-rules-and-volume-pricing/story.md#verification-details)
- **Documentation** · [Omnichannel Inventory Connect REST APIs](https://help.salesforce.com/s/articleView?id=commerce.inv_omnichannel_inventory_connect_rest_apis.htm&language=en_US&type=5)

[Full example and results](https://github.com/aispanda/B2B-Commerce/blob/5b5d8838cfbdc2a8075e368b024b28a1a4501ed7/epics/e01-customer-ordering/stories/purchase-quantity-rules-and-volume-pricing/story.md)
