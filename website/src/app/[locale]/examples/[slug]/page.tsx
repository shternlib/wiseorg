import { notFound } from "next/navigation";
import { DocContent } from "@/components/docs/doc-content";
import { examplesEn } from "@/content/examples/en";
import { examplesRu } from "@/content/examples/ru";

const examplesMap: Record<string, Record<string, { title: string; content: string }>> = {
  en: examplesEn,
  ru: examplesRu,
};

export default async function ExamplePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const examples = examplesMap[locale] || examplesMap.en;
  const example = examples[slug];

  if (!example) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <DocContent title={example.title} content={example.content} slug={slug} />
    </div>
  );
}
