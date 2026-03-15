"use client";

import { Badge } from "@/components/ui/badge";

interface DocContentProps {
  title: string;
  content: string;
}

export function DocContent({ title, content }: DocContentProps) {
  return (
    <article className="max-w-3xl pb-16">
      <div className="mb-8">
        <Badge variant="outline" className="mb-4 border-brand-violet/50 text-brand-violet">
          v1.3
        </Badge>
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="gradient-text">{title}</span>
        </h1>
      </div>
      <div
        className="prose-intenture space-y-6 text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: renderContent(content) }}
      />
    </article>
  );
}

function renderContent(content: string): string {
  let html = content;

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3 class="mt-8 mb-3 text-lg font-semibold text-foreground">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="mt-10 mb-4 text-xl font-bold text-foreground border-b border-border/50 pb-2">$1</h2>');

  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_match, _lang, code) => {
    return `<pre class="code-block overflow-x-auto p-4 text-sm font-mono text-brand-teal my-4"><code>${escapeHtml(code.trim())}</code></pre>`;
  });

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

  return html;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
