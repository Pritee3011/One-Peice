export default function Footer() {
  return (
    <footer className="border-t border-border bg-void/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-accent" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-display font-bold text-bright">
                Commit<span className="text-accent">Verse</span>
              </span>
            </div>
            <p className="text-dim text-sm leading-relaxed max-w-xs">
              An open-source event bringing developers together to contribute, collaborate, and create meaningful software.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-4">Navigation</h4>
            <div className="flex flex-col gap-2.5">
              {['Home', 'Projects', 'Our Team', 'Contact'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="text-dim hover:text-bright text-sm transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/commitverse2026"
                // target="_blank"
                // rel="noreferrer"
                className="flex items-center gap-2.5 text-dim hover:text-bright text-sm transition-colors group"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
                GitHub
              </a>
              
              <a
                href="mailto:commitverse2026@gmail.com"
                className="flex items-center gap-2.5 text-dim hover:text-bright text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                commitverse2026@gmail.com

              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="glow-line mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-dim text-xs font-mono">
          <span>© 2025 CommitVerse. Open Source & Proudly Built.</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            <span>Made with ❤️ </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
