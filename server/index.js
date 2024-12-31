import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { generatePDF } from './pdf.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// In-memory storage (replace with a proper database in production)
const invoices = new Map();

app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(join(__dirname, '../dist')));

// API Routes
app.post('/v1/invoices', (req, res) => {
  try {
    const id = `inv_${uuidv4()}`;
    const invoice = {
      id,
      invoiceNumber: req.body.invoiceNumber || `INV-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'draft',
      ...req.body,
      total: req.body.items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
    };

    // Generate PDF
    const pdfBuffer = generatePDF(invoice);
    invoice.pdfUrl = `/v1/invoices/${id}/pdf`;

    invoices.set(id, invoice);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/v1/invoices/:id', (req, res) => {
  const invoice = invoices.get(req.params.id);
  if (!invoice) {
    return res.status(404).json({ error: 'Invoice not found' });
  }
  res.json(invoice);
});

app.get('/v1/invoices', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const status = req.query.status;

  let filteredInvoices = Array.from(invoices.values());
  if (status) {
    filteredInvoices = filteredInvoices.filter(inv => inv.status === status);
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedInvoices = filteredInvoices.slice(start, end);

  res.json({
    data: paginatedInvoices,
    pagination: {
      page,
      limit,
      totalItems: filteredInvoices.length,
      totalPages: Math.ceil(filteredInvoices.length / limit)
    }
  });
});

app.get('/v1/invoices/:id/pdf', (req, res) => {
  const invoice = invoices.get(req.params.id);
  if (!invoice) {
    return res.status(404).json({ error: 'Invoice not found' });
  }

  const pdfBuffer = generatePDF(invoice);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="invoice-${invoice.invoiceNumber}.pdf"`);
  res.send(pdfBuffer);
});

// Serve index.html for all other routes to support client-side routing
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});