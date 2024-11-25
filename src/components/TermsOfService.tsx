import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using InvoiceFlow, you accept and agree to be bound by the terms and 
                provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
              <p className="text-gray-600">
                InvoiceFlow provides a free online invoice generation service. The service allows users 
                to create professional PDF invoices without requiring registration or account creation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Use of Service</h2>
              <p className="text-gray-600">
                You agree to use InvoiceFlow only for purposes that are legal, proper and in accordance 
                with these terms and any applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600">
                The service, including its original content, features, and functionality, is owned by 
                InvoiceFlow and is protected by international copyright, trademark, patent, trade secret, 
                and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Disclaimer of Warranties</h2>
              <p className="text-gray-600">
                The service is provided "as is" and "as available" without any warranties of any kind, 
                either express or implied. We do not guarantee that the service will be uninterrupted, 
                secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600">
                InvoiceFlow shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. User Data</h2>
              <p className="text-gray-600">
                We do not store your invoice data permanently. All data is temporarily processed for 
                PDF generation and then automatically deleted. You are responsible for saving and 
                maintaining your own copies of generated invoices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We will notify users of any 
                changes by updating the date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Contact Information</h2>
              <p className="text-gray-600">
                For any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:support@invoiceflow.com" className="text-blue-600 hover:text-blue-800">
                  support@invoiceflow.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Invoice Generator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
