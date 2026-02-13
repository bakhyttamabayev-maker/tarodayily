"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Reading } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";

export function ReadingsCatalog({ items }: { items: Reading[] }) {
  const [q, setQ] = useState("");
  const [theme, setTheme] = useState("all");
  const [level, setLevel] = useState("all");
  const [duration, setDuration] = useState("all");

  const filtered = useMemo(() => items.filter((r) =>
    r.title.toLowerCase().includes(q.toLowerCase()) &&
    (theme === "all" || r.themes.includes(theme as Reading["themes"][number])) &&
    (level === "all" || r.level === level) &&
    (duration === "all" || (duration === "short" ? r.minutes <= 5 : r.minutes > 5))
  ), [q, theme, level, duration, items]);

  return (
    <div className="space-y-4">
      <div className="grid gap-2 sm:grid-cols-4">
        <input className="rounded border p-2" placeholder="Поиск" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className="rounded border p-2" value={theme} onChange={(e) => setTheme(e.target.value)}><option value="all">Тема</option><option value="love">Любовь</option><option value="career">Карьера</option><option value="money">Финансы</option><option value="daily">День</option></select>
        <select className="rounded border p-2" value={level} onChange={(e) => setLevel(e.target.value)}><option value="all">Сложность</option><option value="beginner">Начальный</option><option value="intermediate">Средний</option></select>
        <select className="rounded border p-2" value={duration} onChange={(e) => setDuration(e.target.value)}><option value="all">Длительность</option><option value="short">до 5 мин</option><option value="long">больше 5 мин</option></select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((r) => (
          <article key={r.slug} className="card">
            <h3 className="font-semibold">{r.title}</h3>
            <p>{r.description}</p>
            <p className="text-sm text-slate-500">{r.time} · {r.level}</p>
            <Link href={`/readings/${r.slug}`} onClick={() => trackEvent("reading_select", { slug: r.slug })} className="link">Открыть</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
