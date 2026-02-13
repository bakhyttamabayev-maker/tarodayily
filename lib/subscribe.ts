const rateMap = new Map<string, number[]>();

export function isRateLimited(key: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const list = (rateMap.get(key) || []).filter((t) => now - t < windowMs);
  if (list.length >= 5) return true;
  list.push(now);
  rateMap.set(key, list);
  return false;
}
