import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-gradient-to-b from-gray-800 to-gray-900 text-white sticky top-0 z-50">
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
          <nav className="flex gap-4">
            <Link
              to="/"
              className="text-sm sm:text-base font-medium hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm sm:text-base font-medium hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/help"
              className="text-sm sm:text-base font-medium hover:text-gray-300 transition-colors"
            >
              Help Center
            </Link>
            <Link
              to="/contact"
              className="text-sm sm:text-base font-medium hover:text-gray-300 transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
