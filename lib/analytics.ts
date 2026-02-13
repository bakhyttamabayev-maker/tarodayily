type Gtag = (...args: unknown[]) => void;

type WindowWithGtag = Window & {
  gtag?: Gtag;
};

export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;

  const id = process.env.NEXT_PUBLIC_GA_ID;
  const gtag = (window as WindowWithGtag).gtag;

  if (!id || !gtag) {
    return;
  }

  gtag("event", name, params);
}
