
import { defineCollection } from 'astro:content';
import { productsSchema } from '../schemas/products';

import { glob, file } from 'astro/loaders'; // Not available with legacy API

const products = defineCollection({
    type: 'data',
    schema: productsSchema
});

export const collections = { products };