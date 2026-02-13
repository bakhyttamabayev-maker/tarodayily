import { notFound } from "next/navigation";
import { cards } from "@/data/cards";

export function generateStaticParams() { return cards.map((c) => ({ slug: c.slug })); }

export default function CardPage({ params }: { params: { slug: string } }) {
  const card = cards.find((c) => c.slug === params.slug);
  if (!card) return notFound();
  return <article className="space-y-2 card"><h1 className="text-2xl font-bold">{card.name}</h1><p>Ключевые слова: {card.keywords.join(", ")}</p><p><b>Прямое:</b> {card.meaning.upright}</p><p><b>Перевёрнутое:</b> {card.meaning.reversed}</p></article>;
}
