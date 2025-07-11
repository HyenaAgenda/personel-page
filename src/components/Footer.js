import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray2 bg-background py-4 flex items-center justify-center px-8 text-sm text-text/60 mt-8">
      <span>&copy; {new Date().getFullYear()} Horizon Innovation. All rights reserved.</span>
    </footer>
  );
} 