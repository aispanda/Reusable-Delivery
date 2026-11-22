# Reusable UI and link preview guide

Use this guide to adapt a static page, add a branded share card, and verify what readers see in a browser and in messaging apps.

## Adapt the page

1. Write down the reader's primary task, the primary call to action, the approved copy, and the canonical URL.
2. Start with the existing page shell, components, brand assets, and type. Borrow a precedent for a specific problem, such as mobile navigation or keeping a dense figure readable. Record the source and the pattern you reused.
3. Build one representative section with real content. Check reading order, narrow phone and desktop widths, and the interaction the reader actually needs. Preserve approved wording, source links, and master artwork. Keep essential information available as readable HTML.
4. Before publishing, check overflow, legibility, keyboard focus, and the main action. Capture the relevant phone and desktop states. Compare alternatives at the same viewport and with the same content.

## Make the share card

- Start with a 1200 × 630 JPEG and place the logo and main title in the centered 630 × 630 area. Inspect both the wide card and a square crop at thumbnail size.
- Use the original brand lockup and high contrast type. Keep the decorative edges expendable.
- Export an optimized derivative. Aim for a lightweight JPEG and check quality at thumbnail size. WhatsApp documents an image under 600 KB, at least 300 px wide, and no wider than a 4:1 aspect ratio.
- Publish the image at a public HTTPS URL. Use a new filename when the artwork changes so the image can be fetched independently of the previous version.

## Copy into the static HTML head

Replace the example values. Keep one primary Open Graph image and use the same URL in the X card tags. The page URL should be canonical and free of tracking parameters. The image description should describe the artwork.

```html
<title>Page title</title>
<meta name="description" content="A short summary of the page.">
<link rel="canonical" href="https://example.com/page/">
<meta property="og:type" content="website">
<meta property="og:title" content="Page title">
<meta property="og:description" content="A short summary of the page.">
<meta property="og:url" content="https://example.com/page/">
<meta property="og:image" content="https://example.com/page/share-v1.jpg">
<meta property="og:image:secure_url" content="https://example.com/page/share-v1.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Describe the artwork and any essential text.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://example.com/page/share-v1.jpg">
<meta name="twitter:image:alt" content="Describe the artwork and any essential text.">
```

## Verify the release

| Check | Evidence to capture |
| --- | --- |
| Source and deploy | Record the source commit and deployed revision. For a separate Pages mirror, compare the deployed HTML and JPEG with the source package. |
| Public page | Fetch the exact URL people will paste. Confirm HTTP 200 and static tags near the top of the HTML. Check any slash or redirect variant that people actually share. |
| Public image | Fetch the exact URL in `og:image`. Confirm HTTP 200, JPEG MIME type, dimensions, size, and a matching hash. Repeat the fetch with the platform's documented user agent if useful. |
| App rendering | Paste the exact page URL into a new WhatsApp draft and wait for the thumbnail. Record the app, device, URL, and whether the image, title, and description rendered. Check Facebook or LinkedIn separately when accessible. A simulated crawler request establishes server behavior. |
| Release record | Record each result as passed, failed, or untested. Record an image that appears in a draft separately from an image observed in a sent message. |

### When WhatsApp shows only the title

1. In a new draft on the device that showed the issue, paste the canonical page URL and wait for the thumbnail before sending. Capture the rendered draft if the image is missing.
2. If the public page or image check fails, correct the response first. If both pass, compare with a one-time query variant such as `?share=check1` that serves the same HTML and keeps the canonical tags unchanged. If the variant renders and the original does not, that points to caching. Some clients may treat both as the same URL, so a failed variant does not rule caching out.
3. Compare with a known-good page in the same client. Record the device, app version, exact URL, and what rendered. For Facebook, use Sharing Debugger when available. Verify WhatsApp directly because a Facebook re-scrape does not establish WhatsApp rendering.
4. If the issue persists across fresh URLs, investigate redirects, crawler access, content type, and image delivery before changing the design again.

## Platform references

- [WhatsApp link preview requirements](https://developers.facebook.com/documentation/business-messaging/whatsapp/link-previews/) · [Open Graph protocol](https://ogp.me/) · [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) · [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
