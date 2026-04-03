/**
 * Formats a number or string into Colombian Pesos (COP) currency string
 * @param amount The value to format
 * @returns Formatted currency string
 */
export function formatCOP(amount: string | number): string {
  const numericAmount =
    typeof amount === 'string'
      ? Number.parseFloat(amount.replace(/\./g, '').replace(/[^0-9.-]+/g, ''))
      : amount;

  if (Number.isNaN(numericAmount) || numericAmount === null) {
    return 'COP 0';
  }

  return `COP ${numericAmount.toLocaleString('es-CO')}`;
}
