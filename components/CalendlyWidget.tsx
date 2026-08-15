'use client'; 

import { InlineWidget } from 'react-calendly';

export function CalendlyWidget() {
  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white h-[600px]">
      <InlineWidget 
        url="https://calendly.com/pahadi01/30min" 
        styles={{ height: '100%' }}
      />
    </div>
  );
}
