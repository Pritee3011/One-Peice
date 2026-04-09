import { useEffect, useRef } from 'react';

const FloatingParticle = ({ style }) => (
  <div
    className="absolute w-1 h-1 rounded-full bg-accent/40"
    style={style}
  />
);

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="font-display font-bold text-2xl text-bright">{value}</div>
    <div className="font-mono text-xs text-dim uppercase tracking-wider mt-1">{label}</div>
  </div>
);

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw lines between nearby particles
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        style={{ backgroundSize: '40px 40px' }}
      />

      {/* Hero gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="section-tag">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald mr-2 animate-pulse" />
            Open Source Event 2026
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <span className="text-bright">Commit</span>
          <span className="text-gradient">Verse</span>
        </h1>

        {/* Tagline */}
        <div
          className="font-mono text-accent/80 text-sm md:text-base tracking-widest uppercase mb-8 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Contribute. Collaborate. Create.
        </div>

        {/* Subtitle */}
        <p
          className="text-dim text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          Choose an open-source project and make your first meaningful contribution. 
          10 projects. Infinite possibilities.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <a href="#projects" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2 justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Explore Projects
          </a>
          <a
            href="https://github.com/commitverse2026"
            // target="_blank"
            // rel="noreferrer"
            className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2 justify-center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 pt-10 border-t border-border/50 grid grid-cols-3 gap-8 max-w-sm mx-auto animate-fade-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <StatItem value="10" label="Projects" />
          <StatItem value="∞" label="Contributions" />
          <StatItem value="100%" label="Open Source" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
