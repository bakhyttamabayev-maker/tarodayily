import { Reading } from "@/lib/types";

export const readings: Reading[] = [
  {
    slug: "daily-energy",
    title: "Расклад дня",
    description: "Короткий расклад для понимания главного фокуса дня.",
    time: "~2 мин",
    minutes: 2,
    level: "beginner",
    themes: ["daily"],
    layouts: ["single", "three"]
  },
  {
    slug: "love-checkin",
    title: "Любовный вектор",
    description: "Посмотрите динамику отношений и мягкий совет на сейчас.",
    time: "~5 мин",
    minutes: 5,
    level: "beginner",
    themes: ["love"],
    layouts: ["three"]
  },
  {
    slug: "career-path",
    title: "Карьерный путь",
    description: "Оцените текущую рабочую ситуацию и ближайшие шаги.",
    time: "~7 мин",
    minutes: 7,
    level: "intermediate",
    themes: ["career"],
    layouts: ["three", "celtic"]
  },
  {
    slug: "money-flow",
    title: "Финансовый фокус",
    description: "Расклад о привычках, ресурсах и возможностях в деньгах.",
    time: "~6 мин",
    minutes: 6,
    level: "intermediate",
    themes: ["money"],
    layouts: ["single", "three"]
  }
];
