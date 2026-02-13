export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id || !(window as { gtag?: (...args: unknown[]) => void }).gtag) {
    return;
  }
  (window as { gtag: (...args: unknown[]) => void }).gtag("event", name, params);
}
