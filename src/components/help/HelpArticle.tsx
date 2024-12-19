import React from 'react';

interface HelpArticleProps {
  title: string;
  children: React.ReactNode;
}

export function HelpArticle({ title, children }: HelpArticleProps) {
  return (
    <article className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="prose prose-gray max-w-none">{children}</div>
    </article>
  );
}