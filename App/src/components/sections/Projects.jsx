export const Projects = () => {
  const projects = [
    {
      title: "Becoming Her - Trans Women's Wellness Platform",
      description: "Compassionate community platform supporting transgender women through their transition journey. Features HRT tracking, wellness resources, AI companion support, photo documentation, and holistic guidance including yoga, makeup tutorials, and affirmation tools. Demonstrates inclusive design and community-centered development.",
      image: "🌸",
      tech: ["Next.js", "React", "AI Integration", "Responsive Design", "Vercel"],
      liveUrl: "https://becomingher-ik3k.vercel.app/",
      githubUrl: "https://github.com/fishrifle/becomingher"
    },
    {
      title: "Full-Stack Flash Cards Learning Platform",
      description: "Interactive technical learning platform with flashcard-based study system for algorithms, system design, and full-stack development. Features progress tracking, difficulty filtering, keyboard navigation, and comprehensive study metrics across multiple CS domains.",
      image: "📚",
      tech: ["Next.js", "TypeScript", "React", "Progress Tracking", "Vercel"],
      liveUrl: "https://flash-cards-five-mu.vercel.app/",
      githubUrl: "https://github.com/fishrifle/flash-cards"
    },
    {
      title: "Modern Battleship Strategy Game",
      description: "Full-featured naval warfare strategy game with fleet deployment, turn-based combat mechanics, and multiplayer support. Features admiral customization, 15+ nations, responsive design, and advanced game state management for an immersive strategic experience.",
      image: "⚓",
      tech: ["Next.js", "React", "TypeScript", "Game Logic", "Vercel"],
      liveUrl: "https://modern-battleship-zxfi.vercel.app/",
      githubUrl: "https://github.com/fishrifle/modern_battleship"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Full-stack applications showcasing modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-blue-600/20 to-blue-400/20 text-blue-300 rounded-full border border-blue-500/30"
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
                    className="flex-1 text-center py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/30"
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
                    className="flex-1 text-center py-2 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
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