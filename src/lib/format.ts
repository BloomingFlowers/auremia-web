export function formatPrice(cents: number): string {
  return `$${cents.toLocaleString("en-US")}`;
}