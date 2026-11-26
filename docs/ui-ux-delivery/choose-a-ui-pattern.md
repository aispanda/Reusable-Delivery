# Choose a UI pattern

Start with the user’s task and a working It’s a Plan example. This is the first file to give a person or AI building a Studio screen. Pick one row and open its source. Open additional references only when the chosen source leaves a question.

| User wants to… | Use this pattern | Start here |
| --- | --- | --- |
| Write an article | Quiet editor canvas in the existing Astro shell. Keep the current Tiptap editor and document model. | [It’s a Plan editor canvas](https://github.com/croffasia/itsaplan/blob/135bc5f52bff00567e999fe25420199f136fc4e4/apps/web/src/features/documents/components/page/DocumentEditorCanvas.tsx) |
| Change article settings | Secondary panel beside the canvas. Use the same fields in a Sheet on narrow screens. | [It’s a Plan editor inspector](https://github.com/croffasia/itsaplan/blob/135bc5f52bff00567e999fe25420199f136fc4e4/apps/web/src/features/documents/components/page/DocumentEditorInspector.tsx) |
| Format the current selection | Labeled formatting toolbar with visible active states. Wire it to the current Tiptap commands. | [It’s a Plan document toolbar](https://github.com/croffasia/itsaplan/blob/135bc5f52bff00567e999fe25420199f136fc4e4/apps/web/src/features/documents/components/page/DocumentToolbar.tsx) |
| Insert a block | Visible Insert menu with semantic block choices. Keep the existing command mapping. | [It’s a Plan block menu](https://github.com/croffasia/itsaplan/blob/135bc5f52bff00567e999fe25420199f136fc4e4/apps/web/src/features/documents/components/DocumentBlockMenu.tsx) |
| Edit a link | Small form anchored to the trigger. Keep Studio’s URL validation. | [It’s a Plan link form](https://github.com/croffasia/itsaplan/blob/135bc5f52bff00567e999fe25420199f136fc4e4/apps/web/src/components/common/editor/EditorLinkForm.tsx) |
| Insert an image | Focused image picker. Keep Studio’s upload flow and alt text field. | [It’s a Plan image picker](https://github.com/croffasia/itsaplan/blob/135bc5f52bff00567e999fe25420199f136fc4e4/apps/web/src/components/common/editor/EditorImagePicker.tsx) |
| See whether a draft saved | Inline save status driven by Studio’s existing autosave. | [It’s a Plan save status](https://github.com/croffasia/itsaplan/blob/135bc5f52bff00567e999fe25420199f136fc4e4/apps/web/src/features/documents/components/page/DocumentSaveStatus.tsx) |
| Recover from a draft conflict | Persistent inline message with a recovery action. | [It’s a Plan conflict banner](https://github.com/croffasia/itsaplan/blob/135bc5f52bff00567e999fe25420199f136fc4e4/apps/web/src/features/documents/components/page/DocumentConflictBanner.tsx) |
| Preview or publish | Use Studio’s existing preview and confirmation flow. Preserve the permission checks and publication result. | [AI Spanda Studio preview and publish](https://github.com/aispanda/aispanda-web/blob/078a7b07bdd7b8cfc7ac7f6f519dee85263b11fd/src/pages/studio/index.astro#L323) |

**For a close match**, inspect the linked file and follow the imports that implement the relevant part. If It’s a Plan adds its own behavior, its exact file is the source for that behavior. It’s a Plan is licensed under [AGPL-3.0](https://github.com/croffasia/itsaplan/blob/135bc5f52bff00567e999fe25420199f136fc4e4/LICENSE), so copying or adapting its code or styles needs a separate license review first. Without that approval, compose the pattern from stock components and the host’s existing behavior.

**For a gap**, check the [component inventory](reuse-existing-components.md#github-component-inventory) and the [original libraries](reuse-existing-components.md#library-choices-for-a-consistent-studio) for the missing job. Search by the task, select one matching component and keep the same Studio tokens and icon family. The inventory is a lookup for gaps or exact provenance, so a builder can leave it closed once the pattern and source are chosen.

Record the task, selected pattern and exact source in the [component spec](templates/03-component-spec.md).
