import { notFound } from "next/navigation";
import { DocContent } from "@/components/docs/doc-content";
import { docsEn } from "@/content/docs/en";
import { docsRu } from "@/content/docs/ru";

const docsMap: Record<string, Record<string, { title: string; content: string }>> = {
  en: docsEn,
  ru: docsRu,
};

export default async function DocPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const docs = docsMap[locale] || docsMap.en;
  const doc = docs[slug];

  if (!doc) {
    notFound();
  }

  return <DocContent title={doc.title} content={doc.content} slug={slug} />;
}
