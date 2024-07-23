export default function currency(value: number) {
  return `$${(Math.round(value * 100) / 100).toFixed(2)}`;
}
