import { Metadata } from "next";
import { readings } from "@/data/readings";
import { ReadingsCatalog } from "@/components/ReadingsCatalog";

export const metadata: Metadata = { title: "Каталог раскладов" };

export default function ReadingsPage() {
  return <div className="space-y-4"><h1 className="text-2xl font-bold">Каталог раскладов</h1><ReadingsCatalog items={readings} /></div>;
}
