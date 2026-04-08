import { teamMembers } from '../data/team';

const AVATAR_COLORS = [
  'from-accent to-purple',
  'from-emerald to-accent',
  'from-amber to-rose',
  'from-purple to-rose',
  'from-accent to-emerald',
  'from-rose to-amber',
];

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Team() {
  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-void to-deep/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag mb-4">The People Behind It</span>
          <h2 className="section-heading mt-4 mb-4">
            Meet the <span className="text-gradient">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="card-base p-6 text-center group">
              {/* Avatar */}
              <div className="relative inline-block mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${AVATAR_COLORS[index % AVATAR_COLORS.length]} flex items-center justify-center mx-auto`}>
                  <span className="font-display font-bold text-white text-lg">{member.avatar}</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald border-2 border-card" />
              </div>

              <h3 className="font-display font-bold text-bright text-lg mb-1 group-hover:text-accent-glow transition-colors">
                {member.name}
              </h3>
              <p className="font-mono text-dim text-xs mb-4 uppercase tracking-wide">{member.role}</p>

              <div className="glow-line mb-4" />

              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-dim hover:text-accent transition-colors text-sm font-medium"
              >
                <LinkedInIcon />
                <span className="font-mono text-xs">Connect</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
