const TECH_COLORS = {
  Python: { bg: 'bg-amber/10', border: 'border-amber/20', text: 'text-amber' },
  React: { bg: 'bg-accent/10', border: 'border-accent/20', text: 'text-accent-glow' },
  'Next.js': { bg: 'bg-bright/10', border: 'border-bright/20', text: 'text-bright' },
  'Node.js': { bg: 'bg-emerald/10', border: 'border-emerald/20', text: 'text-emerald' },
  TypeScript: { bg: 'bg-accent/10', border: 'border-accent/20', text: 'text-accent-glow' },
  Rust: { bg: 'bg-rose/10', border: 'border-rose/20', text: 'text-rose' },
  Go: { bg: 'bg-accent/10', border: 'border-accent/20', text: 'text-accent-glow' },
  Solidity: { bg: 'bg-purple/10', border: 'border-purple/20', text: 'text-purple' },
  'Vue.js': { bg: 'bg-emerald/10', border: 'border-emerald/20', text: 'text-emerald' },
  default: { bg: 'bg-dim/10', border: 'border-dim/20', text: 'text-dim' },
};

const DIFFICULTY_CONFIG = {
  Finance: { bg: 'bg-emerald/10', text: 'text-emerald', border: 'border-emerald/20', dot: 'bg-emerald' },
  Culture: { bg: 'bg-amber/10', text: 'text-amber', border: 'border-amber/20', dot: 'bg-amber' },
  Employment: { bg: 'bg-rose/10', text: 'text-rose', border: 'border-rose/20', dot: 'bg-rose' },
};

const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
  </svg>
);

const StarIcon = () => (
  <svg className="w-3 h-3 fill-amber" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function ProjectCard({ project, onViewDetails }) {
  const diff = DIFFICULTY_CONFIG[project.difficulty] || DIFFICULTY_CONFIG.Intermediate;

  return (
    <div className="card-base group relative overflow-hidden flex flex-col p-6 h-full">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
      {project.features && (
  <div className="flex flex-wrap gap-1.5 mb-4">
    {project.features.map(f => (
      <span key={f} className="text-xs bg-accent/10 border border-accent/20 text-accent-glow px-2.5 py-1 rounded-md font-mono">
        ✦ {f}
      </span>
    ))}
  </div>
)}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display font-bold text-bright text-lg group-hover:text-accent-glow transition-colors duration-200">
            {project.name}
          </h3>
          <p className="font-mono text-xs text-dim mt-0.5">{project.tagline}</p>
        </div>
        <div className="flex items-center gap-1.5 text-dim text-xs font-mono ml-3 shrink-0">
          <StarIcon />
          <span>{project.stars}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-dim text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.slice(0, 4).map(tech => {
          const color = TECH_COLORS[tech] || TECH_COLORS.default;
          return (
            <span
              key={tech}
              className={`tech-tag ${color.bg} ${color.border} ${color.text}`}
            >
              {tech}
            </span>
          );
        })}
        {project.techStack.length > 4 && (
          <span className="tech-tag bg-muted/20 border-muted/30 text-muted">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Difficulty + separator */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`difficulty-badge border ${diff.bg} ${diff.text} ${diff.border} flex items-center gap-1.5`}>
          <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`} />
          {project.difficulty}
        </span>
        <div className="flex-1 glow-line" />
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
        
          onClick={() => onViewDetails(project)}
          className="flex-1 btn-primary text-xs py-2.5 flex items-center justify-center gap-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          View Details
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary text-xs py-2.5 px-4 flex items-center gap-1.5"
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </div>
  );
}
