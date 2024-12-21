import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { Layout } from '../components/layout/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Mail className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Email Support</h2>
            <p className="text-gray-600 mb-4">
              Have a question? Our team is here to help.
            </p>
            <a
              href="mailto:support@invoiceflow.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              support@invoiceflow.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Quick Support</h2>
            <p className="text-gray-600 mb-4">
              For immediate assistance, check our help center.
            </p>
            <a
              href="/help"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Visit Help Center
            </a>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}