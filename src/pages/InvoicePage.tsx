import React, { useState } from 'react';
import { usePDF } from 'react-to-pdf';
import type { InvoiceData } from '../types/invoice';
import InvoiceForm from '../components/InvoiceForm';
import { SimpleHeader } from '../components/layout/Header/SimpleHeader';
import { Footer } from '../components/layout/Footer';
import { FeaturedBlogSection } from '../components/blog/FeaturedBlogSection';

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
  const { toPDF } = usePDF({
    filename: `invoice-${invoiceData.invoiceNumber}.pdf`,
    page: { margin: 20 },
  });

  return (
    <div className="min-h-screen bg-primary-light flex flex-col">
      <SimpleHeader />
      
      <div className="bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-xl font-medium">
            Free online invoice generator for freelancers and small businesses.
            <br className="hidden sm:inline" />
            Create professional invoices in seconds.
          </p>
        </div>
      </div>

      <main className="flex-1">
        <div className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <InvoiceForm 
                data={invoiceData} 
                onChange={setInvoiceData} 
                onDownloadPDF={() => toPDF()}
              />
            </div>
          </div>
        </div>
        
        <FeaturedBlogSection />
      </main>

      <Footer />
    </div>
  );
}