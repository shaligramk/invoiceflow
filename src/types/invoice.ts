export interface Contact {
  name: string;
  email: string;
  address: string;
  phone: string;
}

export interface InvoiceItem {
  description: string;
  quantity: string | number;
  rate: string | number;
}

export interface Tax {
  amount: number;
  isPercentage: boolean;
}

export interface InvoiceData {
  invoiceNumber: string;
  date: Date;
  dueDate: Date;
  logo: string;
  currency: string;
  billFrom: Contact;
  billTo: Contact;
  items: InvoiceItem[];
  notes: string;
  tax: Tax;
}