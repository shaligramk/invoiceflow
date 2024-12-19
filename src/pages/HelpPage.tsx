import React, { useState, useEffect } from 'react';
import { HelpArticle } from '../components/help/HelpArticle';
import { HelpSection } from '../components/help/HelpSection';
import { HelpSidebar } from '../components/help/HelpSidebar';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const helpSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
  },
  {
    id: 'creating-invoices',
    title: 'Creating Invoices',
  },
  {
    id: 'customization',
    title: 'Customization',
  },
  {
    id: 'downloading-sharing',
    title: 'Downloading & Sharing',
  },
  {
    id: 'faqs',
    title: 'Frequently Asked Questions',
  },
];

export default function HelpPage() {
  const [activeSection, setActiveSection] = useState(helpSections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sections = helpSections.map((section) => ({
        id: section.id,
        offset: document.getElementById(section.id)?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Invoice Generator
          </Link>
        </div>

        <div className="flex gap-8">
          <HelpSidebar links={helpSections} activeSection={activeSection} />

          <div className="flex-1 max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Help Center</h1>

            <HelpArticle title="Getting Started" id="getting-started">
              <HelpSection title="What is InvoiceFlow?">
                <p>
                  InvoiceFlow is a free, professional invoice generator that helps
                  you create and send beautiful invoices in seconds. No sign-up
                  required – just fill in your details and download your invoice as
                  a PDF.
                </p>
              </HelpSection>

              <HelpSection title="How to Create Your First Invoice">
                <ol className="list-decimal list-inside space-y-2">
                  <li>Enter your company details in the "Bill From" section</li>
                  <li>Add your client's information in the "Bill To" section</li>
                  <li>Add items, quantities, and rates to your invoice</li>
                  <li>Customize the invoice with your logo (optional)</li>
                  <li>Download or share your invoice</li>
                </ol>
              </HelpSection>
            </HelpArticle>

            <HelpArticle title="Creating Invoices" id="creating-invoices">
              <HelpSection title="Adding Items">
                <p>
                  Click the "Add Item" button to include new items in your invoice.
                  For each item, you can specify:
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>Description of the product or service</li>
                  <li>Quantity or hours</li>
                  <li>Rate per unit</li>
                </ul>
              </HelpSection>

              <HelpSection title="Setting Due Dates">
                <p>
                  Choose a due date for your invoice to clearly communicate payment
                  terms to your client. The due date will be prominently displayed
                  on your invoice.
                </p>
              </HelpSection>
            </HelpArticle>

            <HelpArticle title="Customization" id="customization">
              <HelpSection title="Adding Your Logo">
                <p>
                  Personalize your invoice by adding your company logo. Click the
                  "Upload Logo" button and select an image file. Supported formats
                  include PNG, JPG, and SVG.
                </p>
              </HelpSection>

              <HelpSection title="Currency Options">
                <p>
                  Choose from multiple currency options to match your business
                  needs. The selected currency symbol will automatically appear in
                  your invoice.
                </p>
              </HelpSection>
            </HelpArticle>

            <HelpArticle title="Downloading & Sharing" id="downloading-sharing">
              <HelpSection title="Download Options">
                <p>
                  Download your invoice as a PDF file by clicking the "Download
                  PDF" button. The PDF format ensures your invoice looks
                  professional and consistent across all devices.
                </p>
              </HelpSection>

              <HelpSection title="Sharing Invoices">
                <p>
                  Share your invoice directly with clients via email by clicking
                  the "Email Invoice" button. You can also print the invoice using
                  the "Print" button.
                </p>
              </HelpSection>
            </HelpArticle>

            <HelpArticle title="Frequently Asked Questions" id="faqs">
              <HelpSection title="Is InvoiceFlow really free?">
                <p>
                  Yes! InvoiceFlow is completely free to use. There are no hidden
                  fees, no account required, and no limits on the number of
                  invoices you can create.
                </p>
              </HelpSection>

              <HelpSection title="Are my invoices saved?">
                <p>
                  For privacy reasons, we don't store any of your invoice data on
                  our servers. We recommend downloading your invoices and saving
                  them locally on your computer.
                </p>
              </HelpSection>

              <HelpSection title="Can I customize the invoice template?">
                <p>
                  The current template is designed to be professional and
                  universally acceptable. You can customize it with your logo,
                  choose different currencies, and add custom notes.
                </p>
              </HelpSection>
            </HelpArticle>
          </div>
        </div>
      </div>
    </div>
  );
}