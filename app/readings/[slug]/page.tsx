import { notFound } from "next/navigation";
import { readings } from "@/data/readings";
import { ReadingExperience } from "@/components/ReadingExperience";

export function generateStaticParams() { return readings.map((r) => ({ slug: r.slug })); }

export default function ReadingPage({ params }: { params: { slug: string } }) {
  const reading = readings.find((r) => r.slug === params.slug);
  if (!reading) return notFound();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{reading.title}</h1>
      <p>{reading.description}</p>
      <ReadingExperience slug={reading.slug} layouts={reading.layouts} />
    </div>
  );
}
