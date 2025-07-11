import React, { useRef, useEffect } from 'react';

const NODE_COUNT = 100;
const LINE_DISTANCE = 160;
const SPEED = 0.6;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createNodes(width, height) {
  return Array.from({ length: NODE_COUNT }, () => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    vx: randomBetween(-SPEED, SPEED),
    vy: randomBetween(-SPEED, SPEED),
    r: randomBetween(1.5, 3.5),
  }));
}

export default function NetworkBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    nodesRef.current = createNodes(width, height);

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const a = nodesRef.current[i];
          const b = nodesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.save();
            ctx.globalAlpha = 1 - dist / LINE_DISTANCE;
            ctx.strokeStyle = '#61DAFB';
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw nodes
      for (const node of nodesRef.current) {
        ctx.save();
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = '#61DAFB';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
      }
      // Move nodes
      for (const node of nodesRef.current) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    // Handle resize
    function handleResize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      nodesRef.current = createNodes(width, height);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ display: 'block' }}
    />
  );
} 