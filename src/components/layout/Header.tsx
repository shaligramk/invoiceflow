import React from 'react';
import { FileText } from 'lucide-react';

interface HeaderProps {
  onDownloadPDF: () => void;
  onPrint: () => void;
}

export function Header({ onDownloadPDF, onPrint }: HeaderProps) {
  return (
    <header className="bg-gradient-to-b from-gray-800 to-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <FileText className="h-8 w-8 sm:h-10 sm:w-10" />
              <h1 className="text-2xl sm:text-4xl font-bold">InvoiceFlow</h1>
            </div>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl" style={{ fontDisplay: 'swap' }}>
                Free online invoice generator for freelancers and small businesses. Create professional invoices easily.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={onDownloadPDF}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              aria-label="Download invoice as PDF"
            >
              Download PDF
            </button>
            <button
              onClick={onPrint}
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md shadow-sm text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              aria-label="Print invoice"
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}