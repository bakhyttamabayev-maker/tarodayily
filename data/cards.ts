import { TarotCard } from "@/lib/types";

export const cards: TarotCard[] = [
  { slug: "the-fool", name: "Шут", arcana: "major", keywords: ["начало", "свобода"], meaning: { upright: "Открытость новому и смелый старт.", reversed: "Импульсивность и нехватка структуры." } },
  { slug: "the-magician", name: "Маг", arcana: "major", keywords: ["инициатива", "влияние"], meaning: { upright: "Сила намерения и способность действовать.", reversed: "Распыление энергии и сомнения." } },
  { slug: "the-empress", name: "Императрица", arcana: "major", keywords: ["забота", "рост"], meaning: { upright: "Поддержка, развитие и плодородие идей.", reversed: "Избыточная опека или застой." } },
  { slug: "the-chariot", name: "Колесница", arcana: "major", keywords: ["прорыв", "дисциплина"], meaning: { upright: "Движение вперёд через фокус и волю.", reversed: "Потеря контроля или конфликт целей." } },
  { slug: "two-of-cups", name: "Двойка Кубков", arcana: "minor", keywords: ["партнёрство", "диалог"], meaning: { upright: "Согласие и взаимный обмен.", reversed: "Недосказанность и дистанция." } },
  { slug: "ten-of-pentacles", name: "Десятка Пентаклей", arcana: "minor", keywords: ["стабильность", "ресурсы"], meaning: { upright: "Надёжная база и долгий результат.", reversed: "Краткосрочное мышление и тревога о будущем." } }
];
