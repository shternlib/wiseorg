"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const docOrder = [
  "overview", "glossary", "meta-model", "syntax", "canvas",
  "lifecycle", "visual", "ai-protocol", "pm-modes", "patterns", "quick-start", "ig-prompt",
];

const docTitleKeys: Record<string, string> = {
  overview: "overview",
  glossary: "glossary",
  "meta-model": "metaModel",
  syntax: "syntax",
  canvas: "canvas",
  lifecycle: "lifecycle",
  visual: "visual",
  "ai-protocol": "aiProtocol",
  "pm-modes": "pmModes",
  patterns: "patterns",
  "quick-start": "quickStart",
  "ig-prompt": "igPrompt",
};

interface DocContentProps {
  title: string;
  content: string;
  slug: string;
}

export function DocContent({ title, content, slug }: DocContentProps) {
  const t = useTranslations("docs");
  const currentIndex = docOrder.indexOf(slug);
  const nextSlug = currentIndex >= 0 && currentIndex < docOrder.length - 1 ? docOrder[currentIndex + 1] : null;

  return (
    <article className="max-w-3xl pb-16">
      <div className="mb-8">
        <Badge variant="outline" className="mb-4 border-brand-violet/50 text-brand-violet">
          v1.5
        </Badge>
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="gradient-text">{title}</span>
        </h1>
      </div>
      <div
        className="prose-intenture space-y-6 text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: renderContent(content) }}
      />
      {nextSlug && (
        <div className="mt-12 border-t border-border/50 pt-6">
          <Link
            href={`/docs/${nextSlug}`}
            className="group flex items-center gap-2 text-brand-violet hover:text-brand-violet/80 transition-colors"
          >
            <span className="text-sm text-muted-foreground">{t("next")}:</span>
            <span className="font-medium">{t(docTitleKeys[nextSlug])}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </article>
  );
}

function renderContent(content: string): string {
  let html = content;

  // Preserve HTML blocks (SVGs, download buttons, etc.) from markdown processing
  const preserved: string[] = [];
  html = html.replace(/<div\b[^>]*>[\s\S]*?<\/div>/g, (match) => {
    preserved.push(match);
    return `<div data-preserved="${preserved.length - 1}"></div>`;
  });

  // Code blocks - preserve BEFORE markdown processing
  const preservedCode: string[] = [];
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_match, _lang, code) => {
    const rendered = `<pre class="code-block overflow-x-auto p-4 text-sm font-mono text-brand-teal my-4"><code>${escapeHtml(code.trim())}</code></pre>`;
    preservedCode.push(rendered);
    return `<div data-code="${preservedCode.length - 1}"></div>`;
  });

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3 class="mt-8 mb-3 text-lg font-semibold text-foreground">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="mt-10 mb-4 text-xl font-bold text-foreground border-b border-border/50 pb-2">$1</h2>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="rounded bg-secondary px-1.5 py-0.5 text-sm font-mono text-brand-teal">$1</code>');

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');

  // Tables
  html = html.replace(/^\|(.+)\|$/gm, (match) => {
    return match;
  });

  // Process tables
  const tableRegex = /(\|.+\|\n)+/g;
  html = html.replace(tableRegex, (tableBlock) => {
    const rows = tableBlock.trim().split('\n');
    if (rows.length < 2) return tableBlock;

    let table = '<div class="overflow-x-auto my-6"><table class="w-full text-sm">';

    // Header
    const headerCells = rows[0].split('|').filter(c => c.trim());
    table += '<thead><tr class="border-b border-border">';
    headerCells.forEach(cell => {
      table += `<th class="px-4 py-2.5 text-left font-semibold text-foreground">${cell.trim()}</th>`;
    });
    table += '</tr></thead>';

    // Body (skip separator row)
    table += '<tbody>';
    for (let i = 2; i < rows.length; i++) {
      const cells = rows[i].split('|').filter(c => c.trim());
      table += `<tr class="border-b border-border/30">`;
      cells.forEach(cell => {
        table += `<td class="px-4 py-2.5">${cell.trim()}</td>`;
      });
      table += '</tr>';
    }
    table += '</tbody></table></div>';
    return table;
  });

  // Lists
  html = html.replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-muted-foreground">$1</li>');
  // Wrap consecutive li elements
  html = html.replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="my-3 space-y-1">$1</ul>');

  // Numbered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal text-muted-foreground">$1</li>');

  // Paragraphs - wrap remaining text lines
  html = html.replace(/^(?!<[a-z])((?!^\s*$).+)$/gm, (match) => {
    if (match.startsWith('<')) return match;
    return `<p class="leading-relaxed">${match}</p>`;
  });

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-violet hover:text-brand-violet/80 underline underline-offset-2">$1</a>');

  // Checkmarks
  html = html.replace(/✅/g, '<span class="text-semantic-success">✅</span>');

  // Restore preserved HTML blocks
  preserved.forEach((block, i) => {
    html = html.replace(`<div data-preserved="${i}"></div>`, block);
  });

  // Restore preserved code blocks
  preservedCode.forEach((block, i) => {
    html = html.replace(`<div data-code="${i}"></div>`, block);
  });

  return html;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
