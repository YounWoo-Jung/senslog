---
title: "Markdown Tips for Technical Writing"
date: 2026-02-08
tags: ["markdown", "writing"]
description: "Essential Markdown patterns for writing clear, maintainable technical documentation."
---

Good technical writing is a skill worth investing in. Here are some Markdown tips I use daily.

## Use Headings for Structure

Don't skip heading levels. Go `h2 → h3 → h4` in order. This matters for:

- Accessibility (screen readers)
- SEO (search engines parse heading hierarchy)
- Table of contents generation

## Code Blocks with Language Tags

Always specify the language for syntax highlighting:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

## Tables for Structured Data

| Feature | Supported |
|---------|-----------|
| Code blocks | ✅ |
| Tables | ✅ |
| Images | ✅ |
| Math | With plugins |

## Blockquotes for Callouts

> **Note**: Blockquotes are great for highlighting important information
> that readers shouldn't miss.

## Links and References

Use descriptive link text instead of "click here":

- ✅ Learn more about [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- ❌ Click [here](https://docs.astro.build) for docs
