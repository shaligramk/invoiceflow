import React from 'react';
import { Logo } from './Logo';
import { Tagline } from './Tagline';
import { Actions } from './Actions';

interface MainHeaderProps {
  onDownloadPDF: () => void;
  onPrint: () => void;
}

export function MainHeader({ onDownloadPDF, onPrint }: MainHeaderProps) {
  return (
    <header className="bg-gradient-to-b from-gray-800 to-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Logo />
            <Tagline />
          </div>
          <Actions onDownloadPDF={onDownloadPDF} onPrint={onPrint} />
        </div>
      </div>
    </header>
  );
}