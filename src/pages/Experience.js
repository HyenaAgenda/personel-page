import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

function getDuration(start, end = new Date()) {
  const startDate = new Date(start);
  const endDate = end instanceof Date ? end : new Date(end);
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();
  if (days < 0) {
    months--;
    days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  let result = '';
  if (years > 0) result += `${years} year${years > 1 ? 's' : ''} `;
  if (months > 0) result += `${months} month${months > 1 ? 's' : ''} `;
  if (years === 0 && months === 0) result += `${days} day${days > 1 ? 's' : ''}`;
  return result.trim();
}

export default function Experience() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 bg-background">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8">Experience</h2>
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <div className="bg-gray1 rounded-2xl shadow-xl p-8 flex gap-4 items-start border-l-4 border-accent">
          <BriefcaseIcon className="h-10 w-10 text-accent flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-accent">British Army, UK, AI/ML Engineer and AI Project Lead</h3>
            <div className="text-base mb-1 text-text/80">April 2024 - Present</div>
            <div className="text-sm mb-2 text-accent">{getDuration('2024-04-01')}</div>
            <div className="text-text text-lg">Working within Army HQ and other areas, I have been part of developing AI systems and leading future AI projects within the Royal Engineers.</div>
          </div>
        </div>
        <div className="bg-gray1 rounded-2xl shadow-xl p-8 flex gap-4 items-start border-l-4 border-accent">
          <BriefcaseIcon className="h-10 w-10 text-accent flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-accent">British Army, UK, Digital Communications Technician</h3>
            <div className="text-base mb-1 text-text/80">October 2020 - April 2024</div>
            <div className="text-sm mb-2 text-accent">{getDuration('2020-10-01', '2024-04-01')}</div>
            <div className="text-text text-lg">Working with digital systems and RF focused systems that operate over VHF, HF and UHF to produce complex communication networks.</div>
          </div>
        </div>
      </div>
    </section>
  );
} 