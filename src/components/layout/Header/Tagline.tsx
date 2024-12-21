import React from 'react';

export function Tagline() {
  return (
    <p 
      className="text-gray-300 text-sm sm:text-base max-w-xl"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '0 48px'
      }}
    >
      Create professional invoices instantly with our free online generator.
      <span className="hidden sm:inline"> No sign-up required.</span>
    </p>
  );
}