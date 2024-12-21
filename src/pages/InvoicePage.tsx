import React, { useState } from 'react';
import { usePDF } from 'react-to-pdf';
import type { InvoiceData } from '../types/invoice';
import InvoiceForm from '../components/InvoiceForm';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const initialData: InvoiceData = {
  invoiceNumber: '001',
  date: new Date(),
  dueDate: new Date(),
  logo: '',
  currency: 'USD',
  billFrom: {
    name: '',
    email: '',
    address: '',
  },
  billTo: {
    name: '',
    email: '',
    address: '',
  },
  items: [
    {
      description: '',
      quantity: 1,
      rate: 0,
    },
  ],
  notes: '',
};

export default function InvoicePage() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(initialData);
  const { toPDF, targetRef } = usePDF({
    filename: `invoice-${invoiceData.invoiceNumber}.pdf`,
    page: { margin: 20 },
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onDownloadPDF={() => toPDF()} onPrint={handlePrint} />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg w-full max-w-4xl">
          <InvoiceForm data={invoiceData} onChange={setInvoiceData} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
