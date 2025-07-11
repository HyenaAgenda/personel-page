import React from 'react';

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[40vh] p-8 bg-background">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">Contact</h2>
      <div className="text-xl md:text-2xl text-text text-center font-medium">
        For inquiries or to get in touch, please email:
        <br />
        <a href="mailto:owen.official.work@pm.me" className="text-accent underline mt-2 inline-block">owen.official.work@pm.me</a>
      </div>
    </section>
  );
} 