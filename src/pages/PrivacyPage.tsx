import React from 'react';
import { Layout } from '../components/layout/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray">
          <p className="lead">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>Introduction</h2>
          <p>
            At InvoiceFlow, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our invoice generation service.
          </p>

          <h2>Information We Don't Collect</h2>
          <p>
            We want to be clear: we do not store any of your invoice data, company information, or client details on our servers. All invoice generation happens in your browser, and the data remains on your device.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>Anonymous usage statistics</li>
            <li>Basic technical information (browser type, device type)</li>
            <li>Error reports to improve our service</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            The limited information we collect is used solely to:
          </p>
          <ul>
            <li>Improve our service and user experience</li>
            <li>Fix technical issues</li>
            <li>Analyze general usage patterns</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            While we don't store your invoice data, we still implement security measures to protect our service and any anonymous data we collect.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@invoiceflow.com.
          </p>
        </div>
      </div>
    </Layout>
  );
}