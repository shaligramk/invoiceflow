export interface CreateInvoiceRequest {
  invoiceNumber?: string;
  currency: string;
  billFrom: {
    name: string;
    email: string;
    address: string;
  };
  billTo: {
    name: string;
    email: string;
    address: string;
  };
  items: Array<{
    description: string;
    quantity: number;
    rate: number;
  }>;
  notes?: string;
}

export interface InvoiceResponse {
  id: string;
  invoiceNumber: string;
  createdAt: string;
  status: 'draft' | 'sent' | 'paid';
  currency: string;
  billFrom: {
    name: string;
    email: string;
    address: string;
  };
  billTo: {
    name: string;
    email: string;
    address: string;
  };
  items: Array<{
    description: string;
    quantity: number;
    rate: number;
  }>;
  notes?: string;
  total: number;
  pdfUrl: string;
}