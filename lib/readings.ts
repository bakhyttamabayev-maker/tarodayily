import { cards } from "@/data/cards";
import { Layout, TarotCard } from "@/lib/types";

export type PickedCard = { card: TarotCard; reversed: boolean; position: string };

export const positionsByLayout: Record<Layout, string[]> = {
  single: ["Фокус"],
  three: ["Прошлое", "Настоящее", "Будущее"],
  celtic: ["Ситуация", "Вызов", "Основа", "Путь", "Итог", "Совет"]
};

export function drawCards(layout: Layout): PickedCard[] {
  const pool = [...cards].sort(() => Math.random() - 0.5);
  return positionsByLayout[layout].map((position, i) => ({
    card: pool[i % pool.length],
    reversed: Math.random() > 0.5,
    position
  }));
}

export function combineReading(layout: Layout, selectedCards: PickedCard[]): string {
  const energy = selectedCards
    .map(({ card, reversed }) => reversed ? card.meaning.reversed : card.meaning.upright)
    .join(" ");
  const focus = layout === "single" ? "Сфокусируйтесь на одном аккуратном шаге." : "Соберите общую картину и выберите приоритет на ближайшие 24 часа.";
  return `${energy} ${focus} Помните: это материал для саморефлексии, а не категоричный прогноз.`;
}
