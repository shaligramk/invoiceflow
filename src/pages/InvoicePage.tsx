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
      
      <main className="flex-1 relative">
        <div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 relative">
            {/* Form Section */}
            <div className="mb-8 lg:mb-0">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <InvoiceForm data={invoiceData} onChange={setInvoiceData} />
              </div>
            </div>
            
            {/* Preview Section */}
            {/* Commenting out the desktop preview */}
            {/*
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <div className="overflow-auto max-h-[calc(100vh-8rem)]" ref={targetRef}>
                  <InvoicePreview data={invoiceData} />
                </div>
              </div>
            </div>
            */}

            {/* Mobile Preview Toggle */}
            {/* Commenting out the mobile preview button */}
            {/*
            <div className="fixed bottom-4 right-4 lg:hidden z-50">
              <button
                onClick={() => {
                  const preview = document.getElementById('mobile-preview');
                  if (preview) {
                    preview.classList.toggle('translate-y-full');
                    preview.classList.toggle('pointer-events-none');
                  }
                }}
                className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Preview
              </button>
            </div>
            */}

            {/* Mobile Preview Panel */}
            {/* Commenting out the mobile preview panel */}
            {/*
            <div
              id="mobile-preview"
              className="fixed inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-in-out lg:hidden z-40"
            >
              <div className="h-full overflow-auto">
                <div className="sticky top-0 bg-gray-800 p-4 flex justify-between items-center">
                  <h2 className="text-white font-semibold">Invoice Preview</h2>
                  <button
                    onClick={() => {
                      const preview = document.getElementById('mobile-preview');
                      if (preview) {
                        preview.classList.add('translate-y-full');
                        preview.classList.add('pointer-events-none');
                      }
                    }}
                    className="text-white"
                  >
                    Close
                  </button>
                </div>
                <div className="p-4">
                  <InvoicePreview data={invoiceData} />
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
