# Agentic Build Studio

[Open the live viewer](https://aispanda.github.io/AgenticBuildStudio/) · [Story templates and field guidance](https://github.com/aispanda/Reusable-Delivery/tree/479b7d6d3acc8f6d012998724eb40afb3469228b/templates)

Edit `index.html` directly. The viewer shares its card, record, field, and control styles across all four tabs. Its field guidance and roster schema are embedded from the pinned Reusable Delivery templates. Refresh the two embedded constants and the template link together.

`slds2-cosmos-2.264.1.css` is the published Cosmos stylesheet from `@salesforce-ux/design-system-2` version 2.264.1. The accompanying Salesforce terms are in `slds2-license.txt`. Serve this folder over HTTP for previews. Publish this folder to the root of the [AgenticBuildStudio Pages repository](https://github.com/aispanda/AgenticBuildStudio). Reusable-Delivery is the editable source. The Pages repository serves this package without a build.

Use **Use sample** to open the synthetic invoice example in [`sample/`](sample/). Its five files are also suitable for testing the local-file loader.
