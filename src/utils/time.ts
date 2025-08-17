export function toTime(s?: string | null): number {
  if (!s) return 0;
  const n = Date.parse(s);
  return Number.isNaN(n) ? 0 : n;
}
