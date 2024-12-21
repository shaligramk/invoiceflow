import React from 'react';
import { FileText } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <FileText className="h-8 w-8 sm:h-10 sm:w-10" />
      <h1 className="text-2xl sm:text-4xl font-bold">InvoiceFlow</h1>
    </div>
  );
}