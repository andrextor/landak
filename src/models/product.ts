/**
 * Product Domain Interface
 *
 * Manually defined to match the Zod schema and ensure
 * 100% compatibility across Astro versions and linters.
 */
export interface Product {
  slug: string;
  title: string;
  description: string;
  category: string;
  image_path?: string;
  amount: string;
  available: boolean;
  cant: string;
}

/**
 * WhatsApp Message Data
 */
export interface WhatsAppMessageOptions {
  title: string;
  slug: string;
}
