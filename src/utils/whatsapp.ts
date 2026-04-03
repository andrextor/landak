import { CONTACT_CONFIG } from '@constants/index';
import type { WhatsAppMessageOptions } from '@models/product';

/**
 * Generates a WhatsApp URL with a pre-filled product inquiry message
 * @param options Product title and slug/reference
 * @returns WhatsApp URL string
 */
export function getWhatsAppUrl({ title, slug }: WhatsAppMessageOptions): string {
  const { number, baseUrl } = CONTACT_CONFIG.whatsapp;
  const message = `Hola, me gustaría obtener más información sobre este producto:\n ${title}\n ref: ${slug}\n ,Gracias.`;
  const encodedMessage = encodeURIComponent(message);

  return `${baseUrl}${number}?text=${encodedMessage}`;
}
