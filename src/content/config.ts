import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('Mirage Studio'),
  tags: z.array(z.string()),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  coverImage: z.string().optional()
});

const blog = defineCollection({
  type: 'content',
  schema: blogSchema
});

const drafts = defineCollection({
  type: 'content',
  schema: blogSchema
});

export const collections = { blog, drafts };

