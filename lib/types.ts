export type Theme = "love" | "career" | "money" | "daily";
export type Level = "beginner" | "intermediate";
export type Layout = "single" | "three" | "celtic";

export type Reading = {
  slug: string;
  title: string;
  description: string;
  time: string;
  minutes: number;
  level: Level;
  themes: Theme[];
  layouts: Layout[];
};

export type TarotCard = {
  slug: string;
  name: string;
  arcana: "major" | "minor";
  keywords: string[];
  meaning: { upright: string; reversed: string };
};
