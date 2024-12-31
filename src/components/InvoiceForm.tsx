import React, { useRef } from 'react';
import { format } from 'date-fns';
import { Plus, Trash2, Upload, Download } from 'lucide-react';
import type { InvoiceData, InvoiceItem } from '../types/invoice';

interface Props {
  data: InvoiceData;
  onChange: (data: InvoiceData) => void;
  onDownloadPDF: () => void;
}

export default function InvoiceForm({ data, onChange, onDownloadPDF }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...data.items];
    newItems[index] = { ...newItems[index], [field]: value };
    onChange({ ...data, items: newItems });
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...data, logo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addItem = () => {
    onChange({
      ...data,
      items: [...data.items, { description: '', quantity: 1, rate: 0 }],
    });
  };

  const removeItem = (index: number) => {
    const newItems = data.items.filter((_, i) => i !== index);
    onChange({ ...data, items: newItems });
  };

  const inputClasses = "mt-1 h-14 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border px-4 text-base";
  const textareaClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-4 text-base";

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Logo</label>
          <div className="mt-1 flex items-center space-x-4">
            {data.logo && (
              <img src={data.logo} alt="Preview" className="h-12 w-12 object-contain" />
            )}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Logo
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
          <input
            type="text"
            value={data.invoiceNumber}
            onChange={(e) => onChange({ ...data, invoiceNumber: e.target.value })}
            placeholder="e.g., INV-001"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            value={format(data.date, 'yyyy-MM-dd')}
            onChange={(e) => onChange({ ...data, date: new Date(e.target.value) })}
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            value={format(data.dueDate, 'yyyy-MM-dd')}
            onChange={(e) => onChange({ ...data, dueDate: new Date(e.target.value) })}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Currency</label>
        <select
          value={data.currency}
          onChange={(e) => onChange({ ...data, currency: e.target.value })}
          className={inputClasses}
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name} ({currency.symbol})
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Bill From</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={data.billFrom.name}
              onChange={(e) => onChange({ ...data, billFrom: { ...data.billFrom, name: e.target.value } })}
              placeholder="Your Company Name"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={data.billFrom.email}
              onChange={(e) => onChange({ ...data, billFrom: { ...data.billFrom, email: e.target.value } })}
              placeholder="your@email.com"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              value={data.billFrom.address}
              onChange={(e) => onChange({ ...data, billFrom: { ...data.billFrom, address: e.target.value } })}
              placeholder="Street Address&#10;City, State ZIP&#10;Country"
              rows={3}
              className={textareaClasses}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Bill To</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={data.billTo.name}
              onChange={(e) => onChange({ ...data, billTo: { ...data.billTo, name: e.target.value } })}
              placeholder="Client/Company Name"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={data.billTo.email}
              onChange={(e) => onChange({ ...data, billTo: { ...data.billTo, email: e.target.value } })}
              placeholder="client@email.com"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              value={data.billTo.address}
              onChange={(e) => onChange({ ...data, billTo: { ...data.billTo, address: e.target.value } })}
              placeholder="Street Address&#10;City, State ZIP&#10;Country"
              rows={3}
              className={textareaClasses}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Items</h3>
          <button
            type="button"
            onClick={addItem}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </button>
        </div>

        <div className="space-y-4">
          {data.items.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1 w-full sm:w-auto">
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                  placeholder="Item description"
                  className={`${inputClasses} min-w-0 sm:min-w-[300px]`}
                />
              </div>
              <div className="w-full sm:w-32">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', parseFloat(e.target.value))}
                  placeholder="Quantity"
                  min="0"
                  step="1"
                  className={inputClasses}
                />
              </div>
              <div className="w-full sm:w-40">
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) => handleItemChange(index, 'rate', parseFloat(e.target.value))}
                  placeholder="Rate"
                  min="0"
                  step="0.01"
                  className={inputClasses}
                />
              </div>
              <div className="w-full sm:w-32 pt-4 text-lg font-medium">
                {currencies.find(c => c.code === data.currency)?.symbol}
                {(item.quantity * item.rate).toFixed(2)}
              </div>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="p-2 text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          value={data.notes}
          onChange={(e) => onChange({ ...data, notes: e.target.value })}
          rows={4}
          className={textareaClasses}
          placeholder="Payment terms, bank details, additional notes..."
        />
      </div>

      <div className="pt-8 border-t border-gray-200">
        <button
          onClick={onDownloadPDF}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors sm:w-auto"
        >
          <Download className="h-5 w-5 mr-2" />
          Download PDF
        </button>
      </div>
    </div>
  );
}

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
  { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar' },
  { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar' },
  { code: 'SEK', symbol: 'kr', name: 'Swedish Krona' },
  { code: 'KRW', symbol: '₩', name: 'South Korean Won' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone' },
  { code: 'MXN', symbol: '$', name: 'Mexican Peso' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'RUB', symbol: '₽', name: 'Russian Ruble' },
  { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
];