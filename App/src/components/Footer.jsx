import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: FaGithub, href: 'https://github.com/fishrifle', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/jesse-davis-tech', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'https://mail.google.com/mail/?view=cm&to=jdavis.prsvr@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-blue-500/10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold gradient-text">Jesse Davis</span>
            <p className="text-slate-400 text-sm mt-2">
              Senior Full Stack Engineer building modern, scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-blue-500/20 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="text-lg" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            {currentYear} Jesse Davis. Built with <FaHeart className="text-blue-500 text-xs" /> using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
