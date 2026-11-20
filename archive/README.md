# Reusable Delivery archive

The [long-format assets](long-format/) preserve the previous story template, both complete routes, the worked example, the D05 template notes, related Markdown guidance, and both PDF guides.

Use the [original GitHub revision](https://github.com/aispanda/Reusable-Delivery/tree/2b915c38dc21b793f9ed4aee9230c613991e79d1) to follow relative links in the historical copies. Use the [current delivery routes](../DELIVERY.md) for active work.

The [pre-module snapshot](pre-modules/) preserves the complete NEW and MIGRATE guides, router, authoring sources, generator and code-quality guide at [the last pre-split revision](https://github.com/aispanda/Reusable-Delivery/tree/e877e84b354b661dd2be4557ec35c7c7121bf809). Follow links from that pinned GitHub revision when a file is outside the snapshot.

**Rollback.** For an immediate fallback, use the complete NEW or MIGRATE guide at the story's pinned revision. To roll back the published module rollout, revert its commit or PR in a new PR. Preserve any later edits, run `python3 scripts/build_guides.py --check` on the reverted tree and verify the root router and both full guides before merging. The archived snapshot gives a reference for restoring the old layout if later edits cause conflicts.
