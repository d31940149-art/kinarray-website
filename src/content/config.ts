import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    lang: z.enum(['en', 'zh']),
  }),
});

const glossary = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    definition: z.string(),
    relatedArticles: z.array(z.string()).optional(),
    lang: z.enum(['en', 'zh']),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    model: z.string(),
    description: z.string(),
    image: z.string().optional(),
    specs: z.object({
      range: z.string().optional(),
      accuracy: z.string().optional(),
      resolution: z.string().optional(),
      fieldOfView: z.string().optional(),
      power: z.string().optional(),
      weight: z.string().optional(),
    }).optional(),
    features: z.array(z.string()).optional(),
    lang: z.enum(['en', 'zh']),
  }),
});

export const collections = { blog, glossary, products };
