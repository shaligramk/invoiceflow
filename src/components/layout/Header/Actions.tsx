import React from 'react';

interface ActionsProps {
  onDownloadPDF: () => void;
  onPrint: () => void;
}

export function Actions({ onDownloadPDF, onPrint }: ActionsProps) {
  return (
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
  );
}