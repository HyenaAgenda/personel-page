import React from 'react';

const currentProjects = [
  {
    name: 'Project Phoenix',
    status: 'In Progress',
    description: 'I planned and created an AI system within my Division. I created the business case and project documents, developed the full front and backend using React, Redis, Quadrant, Docker, and mentored two individuals in front-end and back-end development.',
    accent: 'accent',
  },
];

const pastProjects = [
  {
    name: 'Project Black Opal',
    status: 'Completed',
    description: 'I worked alongside six SMEs on a project using data and analytics to create a complex AI system. I focused on backend services feeding LLM data (geo, AIS, Flight, handheld device, sensor data). I also planned and delivered the demonstration of sensor-based capabilities related to the wider system.',
    accent: 'gray1',
  },
  {
    name: 'CO2 Based Occupancy Detection System',
    status: 'Completed',
    description: 'I created a ML model and used it to develop a system with a sensor small enough to fit in my hand that can be deployed and detect how many people are in a room over a period of time.',
    accent: 'gray1',
  },
];

const CARD_HEIGHT = 'min-h-[380px]'; // Adjust as needed for your content

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 bg-background gap-16">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8">Projects</h2>
      <div className="w-full max-w-5xl">
        <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6">Current Projects</h3>
        <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-x-12 w-full justify-start mb-12">
          {currentProjects.map((project, idx) => (
            <div key={idx} className={`flex flex-col justify-between flex-1 min-w-[260px] max-w-[340px] ${CARD_HEIGHT} bg-gray1 rounded-xl shadow-lg p-8 border-t-4 border-${project.accent} transition-transform hover:scale-105`}>
              <div>
                <h4 className={`text-xl md:text-2xl font-bold mb-2 text-white`}>{project.name}</h4>
                <span className={`inline-block mb-4 px-3 py-1 rounded-full bg-${project.accent}/20 text-${project.accent} text-xs font-semibold`}>{project.status}</span>
                <p className="text-text text-lg font-medium">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6">Past Projects</h3>
        <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-x-12 w-full justify-start">
          {pastProjects.map((project, idx) => (
            <div key={idx} className={`flex flex-col justify-between flex-1 min-w-[260px] max-w-[340px] ${CARD_HEIGHT} bg-gray1 rounded-xl shadow-lg p-8 border-t-4 border-${project.accent} transition-transform hover:scale-105`}>
              <div>
                <h4 className={`text-xl md:text-2xl font-bold mb-2 text-white`}>{project.name}</h4>
                <span className={`inline-block mb-4 px-3 py-1 rounded-full bg-${project.accent}/20 text-white text-xs font-semibold`}>{project.status}</span>
                <p className="text-white text-lg font-medium">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 