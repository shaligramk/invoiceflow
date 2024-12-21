import React from 'react';
import { Layout } from '../components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About InvoiceFlow</h1>
        
        <div className="prose prose-gray">
          <p className="lead">
            InvoiceFlow is a free, professional invoice generator designed to help freelancers and small businesses create beautiful invoices instantly.
          </p>

          <h2>Our Mission</h2>
          <p>
            We believe that creating professional invoices shouldn't be complicated or expensive. Our mission is to provide a simple, yet powerful tool that helps businesses get paid faster with professional-looking invoices.
          </p>

          <h2>Why Choose InvoiceFlow?</h2>
          <ul>
            <li>100% Free - No hidden fees or subscriptions</li>
            <li>No account required - Start creating invoices immediately</li>
            <li>Professional templates - Make a great impression</li>
            <li>Secure & Private - We don't store your data</li>
            <li>Multiple currency support - Work with clients worldwide</li>
          </ul>

          <h2>Our Values</h2>
          <p>
            We're committed to providing a reliable, secure, and user-friendly platform that puts our users' needs first. Our core values include:
          </p>
          <ul>
            <li>Simplicity in design and functionality</li>
            <li>Transparency in our operations</li>
            <li>Privacy and security of user data</li>
            <li>Continuous improvement based on user feedback</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}