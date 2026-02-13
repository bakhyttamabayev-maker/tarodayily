"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Layout } from "@/lib/types";
import { combineReading, drawCards, PickedCard } from "@/lib/readings";
import { trackEvent } from "@/lib/analytics";
import { Disclaimer } from "@/components/Disclaimer";

export function ReadingExperience({ slug, layouts }: { slug: string; layouts: Layout[] }) {
  const [layout, setLayout] = useState<Layout>(layouts[0]);
  const [cards, setCards] = useState<PickedCard[]>([]);
  const [error, setError] = useState<string>("");

  const summary = useMemo(() => cards.length ? combineReading(layout, cards) : "", [cards, layout]);

  const start = () => {
    try {
      const draw = drawCards(layout);
      setCards(draw);
      setError("");
      trackEvent("reading_start", { slug, layout });
      const stored = JSON.parse(localStorage.getItem("readingHistory") || "[]") as string[];
      stored.unshift(`${new Date().toISOString()}|${slug}|${layout}`);
      localStorage.setItem("readingHistory", JSON.stringify(stored.slice(0, 10)));
    } catch {
      setError("Не удалось загрузить карты");
    }
  };

  const share = async () => {
    trackEvent("share_click", { slug });
    const text = summary;
    await navigator.clipboard.writeText(text);
  };

  return (
    <section className="space-y-4">
      <div className="flex gap-2">
        {layouts.map((item) => (
          <button key={item} onClick={() => setLayout(item)} className={`rounded border px-3 py-1 ${item === layout ? "bg-slate-100 dark:bg-slate-800" : ""}`}>
            {item === "single" ? "1 карта" : item === "three" ? "3 карты" : "Кельтский крест"}
          </button>
        ))}
      </div>
      <button className="btn" onClick={start}>Начать расклад</button>
      {error && <p className="text-red-500">{error}</p>}
      {!!cards.length && (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {cards.map(({ card, reversed, position }) => (
              <article key={position} className="card">
                <p className="text-xs text-slate-500">{position}</p>
                <p className="font-semibold">{card.name}{reversed ? " (перев.)" : ""}</p>
                <p>{reversed ? card.meaning.reversed : card.meaning.upright}</p>
                <Link className="link text-sm" href={`/cards/${card.slug}`}>Подробнее о карте</Link>
              </article>
            ))}
          </div>
          <article className="card">
            <h3 className="font-semibold">Общий вывод</h3>
            <p>{summary}</p>
            <div className="mt-3 flex gap-2">
              <button className="btn" onClick={share}>Скопировать текст</button>
              <button className="rounded border px-4 py-2" onClick={() => setCards([])}>Сделать другой расклад</button>
            </div>
          </article>
          <Disclaimer />
        </div>
      )}
    </section>
  );
}
