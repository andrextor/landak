import { z } from 'astro:content';

export const productSchema = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    image_path: z.string().optional(),
    amount: z.string(),
    available: z.boolean(),
})