export const Projects = () => {
  const projects = [
    {
      title: "Emoji Blush",
      description: "Interactive emoji application with modern UI design. Features emoji search, categories, and responsive design for all devices.",
      image: "🌟",
      tech: ["React", "CSS3", "JavaScript", "Vercel"],
      liveUrl: "https://emoji-blush.vercel.app/",
      githubUrl: "https://github.com/fishrifle"
    },
    {
      title: "Blackjack Game",
      description: "Classic blackjack card game with sleek design and smooth gameplay. Features dealer AI, card animations, and score tracking.",
      image: "🃏",
      tech: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
      liveUrl: "https://blackjack-game-three-sage.vercel.app/",
      githubUrl: "https://github.com/fishrifle"
    },
    {
      title: "Donation Platform",
      description: "Modern donation platform with secure payment processing and user-friendly interface for charitable contributions.",
      image: "💝",
      tech: ["React", "Next.js", "Payment API", "Vercel"],
      liveUrl: "https://donation-kja6-ac3flrkqw-jesse-davis-projects.vercel.app/",
      githubUrl: "https://github.com/fishrifle"
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
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
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