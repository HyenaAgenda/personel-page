import React from 'react';

export default function Portfolio() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 bg-background">
      <h2 className="text-5xl md:text-6xl font-extrabold text-accent mb-12">Portfolio</h2>
      <div className="w-full max-w-5xl bg-gray1 rounded-xl shadow-lg p-10 flex flex-col md:flex-row gap-12">
        {/* Left: Main Content */}
        <div className="flex-1 flex flex-col gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-accent mb-3">Owen Evason</h3>
            <div className="text-xl text-text mb-3">AI/ML Engineer and Full Stack Developer</div>
            <div className="text-base text-text/80 mb-3">
              <span className="font-semibold">07950748971</span> &nbsp;|&nbsp; <span className="font-semibold">owen.official.work@pm.me</span>
            </div>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold text-accent mb-3">Experience</h4>
            <div className="mb-6">
              <div className="font-bold text-lg md:text-xl">British Army, UK, AI/ML Engineer and AI Project Lead</div>
              <div className="text-base mb-1">April 2024 - Present</div>
              <div className="text-text text-base">Working within Army HQ and other areas, part of developing AI systems and leading future AI projects within the Royal Engineers.</div>
            </div>
            <div>
              <div className="font-bold text-lg md:text-xl">British Army, UK, Digital Communications Technician</div>
              <div className="text-base mb-1">October 2020 - April 2024</div>
              <div className="text-text text-base">Working with digital systems and RF focused systems that operate over VHF, HF and UHF to produce complex communication networks.</div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold text-accent mb-3">Projects</h4>
            <div className="mb-6">
              <div className="font-bold text-lg md:text-xl">Project Black Opal — AI Decision Support System</div>
              <div className="text-text text-base">Worked alongside 6 SMEs on a project using data and analytics to create a complex AI system. Focused on backend services feeding LLM data (geo, AIS, Flight, hand held device, sensor data). Planned and delivered demonstration of sensor-based capabilities related to the wider system.</div>
            </div>
            <div>
              <div className="font-bold text-lg md:text-xl">Project Phoenix — AI Decision Support System</div>
              <div className="text-text text-base">Planned and created an AI system within the Division. Created business case and project documents, developed full front and backend using React, Redis, Quadrant, Docker, and mentored 2 individuals in front and backend development.</div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold text-accent mb-3">Education</h4>
            <div className="mb-4">
              <div className="font-bold text-lg md:text-xl">OSWB Academy, Wolverhampton - GCSE</div>
              <div className="text-base mb-1">June 2015 - March 2020</div>
              <div className="text-text text-base">GCSEs including Engineering, Sport, History, Biology, Computer Science, Physics, English Language, English Literature, Mathematics.</div>
            </div>
            <div>
              <div className="font-bold text-lg md:text-xl">Unified Communications Technician - L3Ap</div>
              <div className="text-base mb-1">September 2022 - February 2025</div>
              <div className="text-text text-base">Delivered through military training, with a focus on networking, systems architecture, and RF communications. (D)</div>
            </div>
          </div>
        </div>
        {/* Right: Skills & Awards */}
        <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-12">
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold text-accent mb-3">Skills</h4>
            <ul className="list-disc list-inside text-text text-base space-y-2">
              <li>AI/ML Engineering</li>
              <li>Python Coding</li>
              <li>Data Analysis</li>
              <li>Radio Communication & Networking</li>
              <li>Project Management</li>
              <li>Full Stack Development</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold text-accent mb-3">Awards</h4>
            <ul className="list-disc list-inside text-text text-base space-y-2">
              <li><span className="font-bold">Deputy Chief of General Staff Award for excellence</span><br />Awarded by the deputy chief of general staff for work on AI projects.</li>
              <li><span className="font-bold">Top Student Award</span><br />Awarded on completion of class two DCT course.</li>
              <li><span className="font-bold">Commanding Officer's Commendation</span><br />Awarded by commanding officer for commitment to the regiment.</li>
              <li><span className="font-bold">25 Engr Group Commanders Commendation</span><br />Awarded by the commander of 25 Engineer Group for excellence and work on AI in the army.</li>
              <li><span className="font-bold">3rd Division Generals Commendation</span><br />Awarded for excellence and work on AI and innovation within the Royal Engineers.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 