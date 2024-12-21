import React from 'react';
import { format } from 'date-fns';
import type { InvoiceData } from '../types/invoice';
import { getCurrencySymbol } from '../utils/currency';

export default function PreviewContent({ data }: { data: InvoiceData }) {
  const total = data.items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
  const currencySymbol = getCurrencySymbol(data.currency);

  return (
    <div className="bg-white p-8 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
          <p className="text-gray-600 mt-1">#{data.invoiceNumber}</p>
        </div>
        {data.logo && (
          <img 
            src={data.logo} 
            alt="Company Logo" 
            className="h-16 object-contain"
            loading="lazy" 
          />
        )}
      </div>
      {/* Rest of the preview content remains the same */}
    </div>
  );
}