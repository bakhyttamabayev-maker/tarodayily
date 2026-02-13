import Link from "next/link";
import { readings } from "@/data/readings";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="card space-y-4">
        <h1 className="text-3xl font-bold">Получите расклад на сегодня за 30 секунд</h1>
        <div className="flex flex-wrap gap-2">
          {[
            ["Расклад дня", "/readings/daily-energy"],
            ["Любовь", "/readings/love-checkin"],
            ["Карьера", "/readings/career-path"],
            ["Финансы", "/readings/money-flow"]
          ].map(([label, href]) => <Link key={label} href={href} className="btn">{label}</Link>)}
        </div>
      </section>
      <section>
        <h2 className="mb-3 text-2xl font-semibold">Как это работает</h2>
        <div className="grid gap-4 sm:grid-cols-3">{["Выберите расклад", "Вытяните карту(ы)", "Получите мягкую интерпретацию"].map((s) => <article key={s} className="card">{s}</article>)}</div>
      </section>
      <section><h2 className="mb-3 text-2xl font-semibold">Популярные расклады</h2><div className="grid gap-3 sm:grid-cols-2">{readings.map((r) => <article key={r.slug} className="card"><h3 className="font-semibold">{r.title}</h3><p>{r.description}</p></article>)}</div></section>
      <section><h2 className="mb-3 text-2xl font-semibold">Отзывы</h2><div className="grid gap-3 sm:grid-cols-2"><article className="card">«Помогает навести порядок в мыслях» — Мария</article><article className="card">«Удобно и спокойно по тону» — Илья</article></div></section>
      <section><h2 className="mb-3 text-2xl font-semibold">FAQ</h2><div className="space-y-2"><article className="card"><h3 className="font-medium">Это точный прогноз?</h3><p>Нет, это инструмент для рефлексии.</p></article><article className="card"><h3 className="font-medium">Сколько времени нужно?</h3><p>Обычно 2-7 минут.</p></article></div></section>
    </div>
  );
}
