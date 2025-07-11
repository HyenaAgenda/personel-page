import React from 'react';
import Home from './pages/Home';
import CV from './pages/Portfolio';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Awards from './pages/Awards';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const sections = [
  { name: 'Home', href: '#home' },
  { name: 'CV', href: '#cv' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Awards', href: '#awards' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function SideTab() {
  return (
    <nav className="hidden md:flex flex-col fixed top-0 left-0 h-full w-28 z-50 bg-gray1 shadow-xl justify-center items-center">
      <div className="flex flex-col gap-6 w-full items-center">
        {sections.map(section => (
          <a
            key={section.name}
            href={section.href}
            className="text-accent hover:text-white text-lg font-semibold transition-colors duration-200 px-2 py-2 rounded w-full text-center focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {section.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <SideTab />
      <main className="md:ml-28">
        <section id="home">
          <Home />
        </section>
        <section id="cv">
          <CV />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="awards">
          <Awards />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
