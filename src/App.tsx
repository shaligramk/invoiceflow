import React, { useState, useEffect } from 'react';
import { usePDF } from 'react-to-pdf';
import { FileDown, Printer, FileText } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import type { InvoiceData } from './types/invoice';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Header from './components/Header';
import { translations } from './i18n/translations';

const initialData: InvoiceData = {
  invoiceNumber: '001',
  date: new Date(),
  dueDate: new Date(),
  logo: '',
  currency: 'USD',
  tax: {
    amount: 0,
    isPercentage: true
  },
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

function App() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(initialData);
  const [language, setLanguage] = useState<keyof typeof translations>('en');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const { toPDF, targetRef } = usePDF({
    filename: `invoice-${invoiceData.invoiceNumber}.pdf`,
    page: { margin: 20 },
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handlePrint = () => {
    window.print();
  };

  const MainContent = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header
        language={language}
        isDarkMode={isDarkMode}
        onLanguageChange={setLanguage}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
      />
      <header className="bg-gradient-to-b from-gray-800 to-gray-900 text-white sticky top-16 z-50">
        <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 sm:h-10 sm:w-10" />
                <h1 className="text-2xl sm:text-4xl font-bold">InvoiceFlow</h1>
              </div>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                Free online invoice generator for freelancers and small businesses. Create professional invoices in seconds.
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => toPDF()}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                aria-label="Download invoice as PDF"
              >
                <FileDown className="h-4 w-4 mr-2" />
                Download PDF
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md shadow-sm text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                aria-label="Print invoice"
              >
                <Printer className="h-4 w-4 mr-2" />
                Print
              </button>
            </div>
          </div>
        </div>
      </header>

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
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <div className="overflow-auto max-h-[calc(100vh-8rem)]" ref={targetRef}>
                  <InvoicePreview data={invoiceData} />
                </div>
              </div>
            </div>

            {/* Mobile Preview Toggle */}
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
                <FileText className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Preview Panel */}
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
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">About InvoiceFlow</h3>
              <p className="text-gray-400 text-sm">
                Free online invoice generator for freelancers and small businesses.
                Create professional invoices in seconds.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Multiple Currency Support</li>
                <li>Custom Logo Upload</li>
                <li>Instant PDF Download</li>
                <li>Professional Templates</li>
                <li>No Registration Required</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Support the Project</h3>
              <p className="text-gray-400 text-sm mb-4">
                If you find InvoiceFlow helpful, consider supporting the project by buying me a coffee!
              </p>
              <a
                href="https://buymeacoffee.com/shawnshaligram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                ☕️ Buy me a coffee
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} InvoiceFlow. All rights reserved.
              <span className="mx-2">·</span>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="mx-2">·</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;