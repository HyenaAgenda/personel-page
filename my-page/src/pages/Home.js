import React from 'react';
import NetworkBackground from '../components/NetworkBackground';


export default function Home() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <helmet>
        <title>Owen Evason - AI/ML Engineer & Full Stack Developer</title>
      </helmet>
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      {/* Animated Network Background */}
      <NetworkBackground />
      <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left gap-8 p-8">
        <img
          src="/AJM_0039.JPG"
          alt="Owen Evason"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-accent mb-4 md:mb-0"
        />
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-accent drop-shadow-lg">Owen Evason</h1>
          <div className="text-xl md:text-2xl text-text font-semibold mb-2">AI/ML Engineer and Full Stack Developer</div>
          <p className="max-w-2xl text-xl md:text-2xl text-text font-medium">
            This portfolio highlights the expertise, experience, and achievements of Owen Evason. Explore a proven track record in artificial intelligence, software engineering, and technology innovation across diverse domains.
          </p>
        </div>
      </div>
    </div>
  );
} 