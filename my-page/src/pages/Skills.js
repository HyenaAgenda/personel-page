import React from 'react';
import { CpuChipIcon, CodeBracketIcon, ChartBarIcon, WifiIcon, ClipboardDocumentCheckIcon, RectangleStackIcon } from '@heroicons/react/24/solid';

const skills = [
  { name: 'AI/ML Engineering', icon: CpuChipIcon },
  { name: 'Python Coding', icon: CodeBracketIcon },
  { name: 'Data Analysis', icon: ChartBarIcon },
  { name: 'Radio Communication & Networking', icon: WifiIcon },
  { name: 'Project Management', icon: ClipboardDocumentCheckIcon },
  { name: 'Full Stack Development', icon: RectangleStackIcon },
];

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 bg-background">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8">Skills</h2>
      <div className="w-full max-w-3xl bg-gray1 rounded-2xl shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(({ name, icon: Icon }) => (
            <div key={name} className="flex items-center gap-4 bg-background rounded-xl p-4 shadow hover:shadow-lg transition">
              <Icon className="h-8 w-8 text-accent" />
              <span className="text-lg font-semibold text-text">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 