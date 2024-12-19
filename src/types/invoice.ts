export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  date: Date;
  dueDate: Date;
  logo: string;
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
  items: InvoiceItem[];
  notes: string;
}