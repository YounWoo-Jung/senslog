import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).min(1).max(5),
    series: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
