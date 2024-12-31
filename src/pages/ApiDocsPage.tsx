import React from 'react';
import { Layout } from '../components/layout/Layout';
import { EndpointExample } from '../components/docs/EndpointExample';

const CREATE_INVOICE_REQUEST = `curl -X POST https://api.invoiceflow.com/v1/invoices \\
  -H "Content-Type: application/json" \\
  -d '{
    "currency": "USD",
    "billFrom": {
      "name": "Your Company",
      "email": "you@company.com",
      "address": "123 Business St"
    },
    "billTo": {
      "name": "Client Name",
      "email": "client@example.com",
      "address": "456 Client Ave"
    },
    "items": [
      {
        "description": "Web Development",
        "quantity": 10,
        "rate": 150
      }
    ],
    "notes": "Payment due within 30 days"
  }'`;

const INVOICE_RESPONSE = `{
  "id": "inv_1234567890",
  "invoiceNumber": "INV-001",
  "createdAt": "2024-03-06T12:00:00Z",
  "status": "draft",
  "currency": "USD",
  "billFrom": {
    "name": "Your Company",
    "email": "you@company.com",
    "address": "123 Business St"
  },
  "billTo": {
    "name": "Client Name",
    "email": "client@example.com",
    "address": "456 Client Ave"
  },
  "items": [
    {
      "description": "Web Development",
      "quantity": 10,
      "rate": 150
    }
  ],
  "notes": "Payment due within 30 days",
  "total": 1500,
  "pdfUrl": "https://api.invoiceflow.com/v1/invoices/inv_1234567890/pdf"
}`;

const LIST_INVOICES_RESPONSE = `{
  "data": [
    ${INVOICE_RESPONSE}
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalItems": 1,
    "totalPages": 1
  }
}`;

export default function ApiDocsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-blue max-w-none">
          <h1>API Documentation</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
            <p className="text-blue-900">
              Base URL: <code>https://api.invoiceflow.com/v1</code>
            </p>
          </div>

          <h2>Endpoints</h2>

          <h3>Create Invoice</h3>
          <EndpointExample
            method="POST"
            path="/invoices"
            description="Create a new invoice and generate a PDF."
            request={CREATE_INVOICE_REQUEST}
            response={INVOICE_RESPONSE}
          />

          <h3>Get Invoice</h3>
          <EndpointExample
            method="GET"
            path="/invoices/:id"
            description="Retrieve an invoice by ID."
            request="curl https://api.invoiceflow.com/v1/invoices/inv_1234567890"
            response={INVOICE_RESPONSE}
          />

          <h3>List Invoices</h3>
          <EndpointExample
            method="GET"
            path="/invoices"
            description="List all invoices with pagination."
            request='curl "https://api.invoiceflow.com/v1/invoices?page=1&limit=10&status=draft"'
            response={LIST_INVOICES_RESPONSE}
            queryParams={[
              { name: 'page', description: 'Page number (default: 1)' },
              { name: 'limit', description: 'Items per page (default: 10)' },
              { name: 'status', description: 'Filter by status (draft, sent, paid)' },
            ]}
          />

          <h2>Errors</h2>
          <p>The API uses conventional HTTP response codes:</p>
          <ul>
            <li><code>200</code> - Success</li>
            <li><code>400</code> - Bad Request</li>
            <li><code>404</code> - Not Found</li>
            <li><code>500</code> - Server Error</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}