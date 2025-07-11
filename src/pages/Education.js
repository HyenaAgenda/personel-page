import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

export default function Education() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 bg-background">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8">Education</h2>
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <div className="bg-gray1 rounded-2xl shadow-xl p-8 flex gap-4 items-start border-l-4 border-accent">
          <AcademicCapIcon className="h-10 w-10 text-accent flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-accent">OSWB Academy, Wolverhampton - GCSE</h3>
            <div className="text-base mb-1 text-text/80">June 2015 - March 2020</div>
            <div className="text-text text-lg">GCSEs including Engineering, Sport, History, Biology, Computer Science, Physics, English Language, English Literature, Mathematics.</div>
          </div>
        </div>
        <div className="bg-gray1 rounded-2xl shadow-xl p-8 flex gap-4 items-start border-l-4 border-accent">
          <AcademicCapIcon className="h-10 w-10 text-accent flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-accent">Unified Communications Technician - L3Ap</h3>
            <div className="text-base mb-1 text-text/80">September 2022 - February 2025</div>
            <div className="text-text text-lg">Delivered through military training, with a focus on networking, systems architecture, and RF communications. (D)</div>
          </div>
        </div>
      </div>
    </section>
  );
} 