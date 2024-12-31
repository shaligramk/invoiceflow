import PDFDocument from 'pdfkit';

export function generatePDF(invoice) {
  const doc = new PDFDocument();
  const chunks = [];

  // Collect PDF chunks
  doc.on('data', chunk => chunks.push(chunk));
  
  // Header
  doc.fontSize(25).text('INVOICE', { align: 'right' });
  doc.fontSize(12).text(`Invoice #: ${invoice.invoiceNumber}`, { align: 'right' });
  doc.text(`Date: ${new Date(invoice.createdAt).toLocaleDateString()}`, { align: 'right' });
  
  // From/To
  doc.moveDown();
  doc.fontSize(14).text('From:', { underline: true });
  doc.fontSize(12)
    .text(invoice.billFrom.name)
    .text(invoice.billFrom.email)
    .text(invoice.billFrom.address);
  
  doc.moveDown();
  doc.fontSize(14).text('To:', { underline: true });
  doc.fontSize(12)
    .text(invoice.billTo.name)
    .text(invoice.billTo.email)
    .text(invoice.billTo.address);
  
  // Items
  doc.moveDown();
  const tableTop = doc.y;
  doc.fontSize(12);
  
  // Table headers
  doc.text('Description', 50, tableTop)
     .text('Quantity', 300, tableTop)
     .text('Rate', 400, tableTop)
     .text('Amount', 500, tableTop);
  
  let y = tableTop + 20;
  
  // Table rows
  invoice.items.forEach(item => {
    doc.text(item.description, 50, y)
       .text(item.quantity.toString(), 300, y)
       .text(item.rate.toString(), 400, y)
       .text((item.quantity * item.rate).toString(), 500, y);
    y += 20;
  });
  
  // Total
  doc.moveDown();
  doc.fontSize(14).text(`Total: ${invoice.currency} ${invoice.total}`, { align: 'right' });
  
  // Notes
  if (invoice.notes) {
    doc.moveDown();
    doc.fontSize(12).text('Notes:', { underline: true });
    doc.text(invoice.notes);
  }
  
  doc.end();
  
  // Return PDF buffer
  return Buffer.concat(chunks);
}