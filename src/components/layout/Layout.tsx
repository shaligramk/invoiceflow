import React from 'react';
import { SimpleHeader } from './Header/SimpleHeader';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SimpleHeader />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}