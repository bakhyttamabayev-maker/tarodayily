import { describe, expect, it } from "vitest";
import { combineReading } from "@/lib/readings";
import { cards } from "@/data/cards";

describe("combineReading", () => {
  it("combines card meanings and includes disclaimer note", () => {
    const text = combineReading("single", [{ card: cards[0], reversed: false, position: "Фокус" }]);
    expect(text).toContain(cards[0].meaning.upright);
    expect(text).toContain("саморефлексии");
  });
});
