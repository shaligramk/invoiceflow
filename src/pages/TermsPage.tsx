import React from 'react';
import { Layout } from '../components/layout/Layout';

export default function TermsPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-gray">
          <p className="lead">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using InvoiceFlow, you accept and agree to be bound by these Terms and Conditions.
          </p>

          <h2>2. Service Description</h2>
          <p>
            InvoiceFlow provides a free online invoice generation service. The service is provided "as is" and we make no warranties about its availability or functionality.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You are responsible for the accuracy of the information in your invoices</li>
            <li>You agree to use the service only for lawful purposes</li>
            <li>You are responsible for maintaining copies of your invoices</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            The service, including its design, logos, and functionality, is owned by InvoiceFlow. You may not copy, modify, or reverse engineer any part of the service.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            We are not liable for any damages arising from your use of the service, including but not limited to direct, indirect, incidental, or consequential damages.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of the modified terms.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the United States.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, please contact legal@invoiceflow.com.
          </p>
        </div>
      </div>
    </Layout>
  );
}