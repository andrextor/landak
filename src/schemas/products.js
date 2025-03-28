import { z } from 'astro:content';
import { productSchema } from './product'

export const productsSchema = z.array(productSchema)