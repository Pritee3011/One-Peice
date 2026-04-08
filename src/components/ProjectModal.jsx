import { useEffect } from 'react';

const TECH_COLORS = {
  Python: { bg: 'bg-amber/10', border: 'border-amber/20', text: 'text-amber' },
  React: { bg: 'bg-accent/10', border: 'border-accent/20', text: 'text-accent-glow' },
  'Next.js': { bg: 'bg-bright/10', border: 'border-bright/20', text: 'text-bright' },
  'Node.js': { bg: 'bg-emerald/10', border: 'border-emerald/20', text: 'text-emerald' },
  TypeScript: { bg: 'bg-accent/10', border: 'border-accent/20', text: 'text-accent-glow' },
  Solidity: { bg: 'bg-purple/10', border: 'border-purple/20', text: 'text-purple' },
  default: { bg: 'bg-dim/10', border: 'border-dim/20', text: 'text-dim' },
};

const Section = ({ icon, title, children }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-accent text-lg">{icon}</span>
      <h4 className="font-display font-semibold text-bright text-xs uppercase tracking-widest">{title}</h4>
    </div>
    <div className="pl-7">{children}</div>
  </div>
);

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-void/80 backdrop-blur-sm animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-card border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl animate-fade-up flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-start justify-between bg-gradient-to-r from-accent/5 to-transparent">
          <div>
            <span className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-accent/10 text-accent border border-accent/20 uppercase mb-2">
              {project.difficulty}
            </span>
            <h2 className="font-display font-bold text-bright text-3xl">{project.name}</h2>
            <p className="font-mono text-dim text-xs mt-1">{project.tagline}</p>
          </div>
          <button onClick={onClose} className="text-dim hover:text-bright p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-8 space-y-2">
          
          <Section icon="📋" title="Description">
            <p className="text-dim text-sm leading-relaxed">{project.description}</p>
          </Section>

          <Section icon="🎯" title="Problem Statement">
            <p className="text-dim text-sm leading-relaxed italic border-l-2 border-accent/30 pl-4">
              {project.problemStatement}
            </p>
          </Section>


          {project.featuresLink && (
  <Section icon="✨" title="Implementation Tasks">
    <div className="rounded-xl border border-white/10 overflow-hidden bg-void h-[400px]">
      <iframe 
        src={project.featuresLink} 
        className="w-full h-full border-none"
        title="Project Features"
      />
    </div>
    <div className="mt-4 flex justify-end">
      <a 
        href={project.featuresLink} 
        target="_blank" 
        className="text-xs text-accent hover:underline font-mono"
      >
        Open in full screen ↗
      </a>
    </div>
  </Section>
)}
          <Section icon="⚙️" title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => {
                const color = TECH_COLORS[tech] || TECH_COLORS.default;
                return (
                  <span key={tech} className={`tech-tag ${color.bg} ${color.border} ${color.text} text-[11px] px-3 py-1`}>
                    {tech}
                  </span>
                );
              })}
            </div>
          </Section>

          <Section icon="🤝" title="Contribution Guidelines">
            <div className="bg-void/50 border border-white/5 rounded-lg p-4 font-mono text-[12px] text-dim leading-normal">
              {project.contributionGuidelines}
            </div>
          </Section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-void/30 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 btn-primary flex items-center justify-center gap-2 py-3 font-bold"
          >
            Go to Repository
          </a>
          <button onClick={onClose} className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-dim transition-all">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}