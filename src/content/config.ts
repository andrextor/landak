
import { defineCollection } from 'astro:content';
import { productsSchema } from '../schemas/products';

const products = defineCollection({
    type: 'data',
    schema: productsSchema
});

export const collections = { products };