import Link from "next/link";
import { cards } from "@/data/cards";

export default function CardsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Справочник карт</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        {cards.map((card) => <Link key={card.slug} href={`/cards/${card.slug}`} className="card"><h2 className="font-semibold">{card.name}</h2><p>{card.arcana === "major" ? "Старший" : "Младший"} аркан</p></Link>)}
      </div>
    </div>
  );
}
