export function formatCurrency(val: number | string): string {
  return new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
    compactDisplay: 'short',
  }).format(+val);
}
