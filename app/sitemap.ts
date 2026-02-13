import type { MetadataRoute } from 'next';
import { readings } from '@/data/readings';
import { cards } from '@/data/cards';
import { getPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com';
  const staticRoutes = ['', '/readings', '/cards', '/blog', '/subscribe', '/privacy', '/terms'];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...readings.map((r) => ({ url: `${base}/readings/${r.slug}`, lastModified: new Date() })),
    ...cards.map((c) => ({ url: `${base}/cards/${c.slug}`, lastModified: new Date() })),
    ...getPosts().map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date() }))
  ];
}
