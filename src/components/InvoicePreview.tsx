import React from 'react';
import { format } from 'date-fns';
import type { InvoiceData } from '../types/invoice';

interface Props {
  data: InvoiceData;
}

const currencies = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CAD: 'C$',
  AUD: 'A$',
  CHF: 'Fr',
  CNY: '¥',
  HKD: 'HK$',
  NZD: 'NZ$',
  SEK: 'kr',
  KRW: '₩',
  SGD: 'S$',
  NOK: 'kr',
  MXN: '$',
  INR: '₹',
  RUB: '₽',
  ZAR: 'R',
};

export default function InvoicePreview({ data }: Props) {
  const total = data.items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
  const currencySymbol = currencies[data.currency as keyof typeof currencies];

  return (
    <div className="bg-white p-8 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
          <p className="text-gray-600 mt-1">#{data.invoiceNumber}</p>
        </div>
        {data.logo && (
          <img src={data.logo} alt="Company Logo" className="h-16 object-contain" />
        )}
      </div>
      <div className="text-right mt-4">
        <p className="text-gray-600">Date: {format(data.date, 'MMM dd, yyyy')}</p>
        <p className="text-gray-600">Due: {format(data.dueDate, 'MMM dd, yyyy')}</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">From:</h2>
          <div className="mt-2">
            <p className="font-medium">{data.billFrom.name}</p>
            <p className="text-gray-600">{data.billFrom.email}</p>
            <p className="text-gray-600 whitespace-pre-line">{data.billFrom.address}</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">To:</h2>
          <div className="mt-2">
            <p className="font-medium">{data.billTo.name}</p>
            <p className="text-gray-600">{data.billTo.email}</p>
            <p className="text-gray-600 whitespace-pre-line">{data.billTo.address}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2">Description</th>
              <th className="text-right py-3 px-2">Quantity</th>
              <th className="text-right py-3 px-2">Rate</th>
              <th className="text-right py-3 px-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-2">{item.description}</td>
                <td className="text-right py-3 px-2">{item.quantity}</td>
                <td className="text-right py-3 px-2">{currencySymbol}{item.rate.toFixed(2)}</td>
                <td className="text-right py-3 px-2">{currencySymbol}{(item.quantity * item.rate).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="text-right py-3 px-2 font-semibold">Total:</td>
              <td className="text-right py-3 px-2 font-semibold">{currencySymbol}{total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {data.notes && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">Notes:</h2>
          <p className="mt-2 text-gray-600 whitespace-pre-line">{data.notes}</p>
        </div>
      )}
    </div>
  );
}