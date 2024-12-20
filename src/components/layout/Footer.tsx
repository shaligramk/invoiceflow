import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
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
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>
                <Link to="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@freepdfinvoicegenerator.com"
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} InvoiceFlow. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Scroll to Top
          </button>
        </div>
      </div>
    </footer>
  );
}