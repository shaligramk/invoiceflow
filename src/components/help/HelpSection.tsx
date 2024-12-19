import React from 'react';

interface HelpSectionProps {
  title: string;
  children: React.ReactNode;
}

export function HelpSection({ title, children }: HelpSectionProps) {
  return (
    <section className="mb-12">
      <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
      <div className="space-y-4 text-gray-600">{children}</div>
    </section>
  );
}