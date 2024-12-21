// Lazy load the preview component since it's not immediately visible on mobile
import React, { lazy, Suspense } from 'react';
import type { InvoiceData } from '../types/invoice';

const PreviewContent = lazy(() => import('./PreviewContent'));

export default function InvoicePreview({ data }: { data: InvoiceData }) {
  return (
    <Suspense fallback={<div className="animate-pulse bg-gray-100 h-96 rounded-lg"></div>}>
      <PreviewContent data={data} />
    </Suspense>
  );
}