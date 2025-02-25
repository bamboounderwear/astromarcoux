import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    features: z.array(z.string())
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string().default('https://placehold.co/600x400'),
    imageAlt: z.string().default('Blog post thumbnail')
  })
});

export const collections = {
  projects,
  blog
};