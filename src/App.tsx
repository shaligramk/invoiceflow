import React, { useState, useEffect } from 'react';
import { usePDF } from 'react-to-pdf';
import { FileDown, Printer, FileText } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { InvoiceData } from './types/invoice';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Header from './components/Header';
import { translations } from './i18n/translations';
import './i18n/i18n';

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
      rate: '',
      quantity: '',
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

  const { i18n } = useTranslation();

  const handleLanguageChange = (newLang: keyof typeof translations) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

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

  const MainContent = () => {
    const { t } = useTranslation();
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header
            language={language}
            isDarkMode={isDarkMode}
            onLanguageChange={handleLanguageChange}
            onThemeToggle={() => setIsDarkMode(!isDarkMode)}
          />
        </div>
        <div className="h-16"></div> {/* Spacer for fixed header */}
        <header className="sticky top-16 z-40 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <FileText className="h-8 w-8 sm:h-10 sm:w-10" />
                  <h1 className="text-2xl sm:text-4xl font-bold">{t('invoiceFlow')}</h1>
                </div>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                  {t('freeOnlineInvoiceGenerator')}
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={() => toPDF()}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                  aria-label="Download invoice as PDF"
                >
                  <FileDown className="h-4 w-4 mr-2" />
                  {t('downloadPdf')}
                </button>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md shadow-sm text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                  aria-label="Print invoice"
                >
                  <Printer className="h-4 w-4 mr-2" />
                  {t('print')}
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 relative z-30">
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
                    <h2 className="text-white font-semibold">{t('invoicePreview')}</h2>
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
                      {t('close')}
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

        <footer className="relative z-30 bg-gray-900 text-white py-6 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('aboutInvoiceFlow')}</h3>
                <p className="text-gray-400 text-sm">
                  {t('freeOnlineInvoiceGeneratorDescription')}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('features')}</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>{t('multipleCurrencySupport')}</li>
                  <li>{t('customLogoUpload')}</li>
                  <li>{t('instantPdfDownload')}</li>
                  <li>{t('professionalTemplates')}</li>
                  <li>{t('noRegistrationRequired')}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('supportTheProject')}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {t('supportTheProjectDescription')}
                </p>
                <a
                  href="https://buymeacoffee.com/shawnshaligram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                >
                  ☕️ {t('buyMeACoffee')}
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} InvoiceFlow. All rights reserved.
                <span className="mx-2">·</span>
                <Link to="/privacy" className="hover:text-white transition-colors">{t('privacyPolicy')}</Link>
                <span className="mx-2">·</span>
                <Link to="/terms" className="hover:text-white transition-colors">{t('termsOfService')}</Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  };

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