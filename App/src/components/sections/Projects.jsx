export const Projects = () => {
  const projects = [
    {
      title: "Pokemon Card Battle",
      description: "Interactive Pokemon card battle game with real-time combat mechanics. Features card animations, battle logic, and responsive design for an engaging gaming experience.",
      image: "⚡",
      tech: ["React", "JavaScript", "CSS3", "Game Logic", "Vercel"],
      liveUrl: "https://pokemon-card-battle.vercel.app/",
      githubUrl: "https://github.com/fishrifle/pokemon-card-battle"
    },
    {
      title: "Donation Platform",
      description: "Complete donation ecosystem with secure payment processing and admin dashboard. Features Stripe integration, user management, and real-time analytics for charitable organizations.",
      image: "💝",
      tech: ["Next.js", "React", "Stripe", "Supabase", "Clerk Auth"],
      liveUrl: "https://donation-one-phi.vercel.app/",
      githubUrl: "https://github.com/fishrifle/Donation"
    },
    {
      title: "Widget Admin Dashboard",
      description: "Enterprise-grade admin dashboard for managing donation widgets. Features authentication, database management, analytics, and customizable widget deployment system.",
      image: "🛡️",
      tech: ["Next.js", "TypeScript", "Supabase", "Clerk", "Stripe Connect"],
      liveUrl: "#",
      githubUrl: "https://github.com/fishrifle/Widget-Admin"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating expertise in modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black/60 to-gray-900/60 rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 rounded-full border border-yellow-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
                    onClick={(e) => {
                      // Store portfolio URL for return navigation
                      const portfolioUrl = window.location.origin + window.location.pathname;
                      sessionStorage.setItem('portfolioReturnUrl', portfolioUrl);
                    }}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};