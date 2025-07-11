import React from 'react';
import { TrophyIcon } from '@heroicons/react/24/solid';

const awards = [
  {
    title: 'Deputy Chief of General Staff Commendation',
    description: 'Awarded by the deputy chief of general staff for my work on AI projects for army HQ.',
  },
  {
    title: 'Top Student Award',
    description: 'Awarded on completion of class two DCT course.',
  },
  {
    title: "Commanding Officer's Commendation",
    description: 'Awarded by commanding officer for commitment to the regiment.',
  },
  {
    title: '25 Engr Group Commanders Commendation',
    description: 'Awarded by the commander of 25 Engineer Group for excellence and work on AI in the army.',
  },
  {
    title: '3rd Division Generals Commendation',
    description: 'Awarded for excellence and work on AI and innovation within the Royal Engineers.',
  },
];

export default function Awards() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 bg-background">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8">Awards</h2>
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {awards.map((award, idx) => (
          <div key={idx} className="bg-gray1 rounded-2xl shadow-xl p-6 flex gap-4 items-start border-l-4 border-accent">
            <TrophyIcon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-accent mb-1">{award.title}</h3>
              <div className="text-text text-base">{award.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 