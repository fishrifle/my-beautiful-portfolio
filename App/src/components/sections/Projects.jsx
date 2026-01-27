export const Projects = () => {
  const projects = [
    {
      title: "Pokemon Card Battle Arena",
      description: "A modern, interactive Pokemon card battle game featuring 300 unique Pokemon cards, strategic dual-dice combat, 3D CSS animations, type-specific particle effects, and a Web Audio API-powered soundtrack.",
      image: "🎮",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Web Audio API"],
      highlights: [
        "300 unique Gen 1 & 2 Pokemon with authentic stats",
        "Dual dice combat with type effectiveness & critical hits",
        "3D animations, particle effects & dynamic lighting",
        "Persistent battle statistics & progress tracking",
      ],
      liveLabel: "Play Now",
      liveUrl: "https://pokemon-card-battle.vercel.app/",
      githubUrl: "https://github.com/fishrifle/pokemon-card-battle"
    },
    {
      title: "PassItOn Donation Widget",
      description: "An embeddable donation widget built for nonprofit organization Persevere. Features Stripe payment processing, recurring subscriptions, configurable presets, and a webhook-driven dashboard integration for real-time donation tracking.",
      image: "💝",
      tech: ["Next.js", "TypeScript", "Stripe", "Framer Motion"],
      highlights: [
        "Stripe credit card & ACH bank payment processing",
        "One-time, monthly & yearly recurring donations",
        "Embeddable iframe widget for third-party sites",
        "Webhook system with real-time dashboard integration",
      ],
      liveLabel: "Live Demo",
      liveUrl: "https://donation-one-phi.vercel.app/",
      githubUrl: "https://github.com/fishrifle/Donation"
    },
    {
      title: "Mood Tracker",
      description: "A modern mood tracking application for logging daily emotions and analyzing patterns over time. Features an intuitive emoji interface, history timeline, statistics dashboard with animated progress bars, and full dark/light theme support.",
      image: "😊",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "React Context"],
      highlights: [
        "5 emotional states with intuitive emoji interface",
        "Statistics dashboard with animated progress bars",
        "Dark/light theme with smooth transitions",
        "Full keyboard navigation & screen reader support",
      ],
      liveLabel: "Try It",
      liveUrl: "https://emoji-blush.vercel.app/tracker",
      githubUrl: "https://github.com/fishrifle/emoji-blush"
    },
    {
      title: "Becoming Her",
      description: "A compassionate community platform supporting transgender women through their transition journey. Features HRT tracking, wellness resources, AI companion support, photo documentation, and holistic guidance tools.",
      image: "🌸",
      tech: ["Next.js", "React", "AI Integration", "Vercel"],
      highlights: [
        "HRT tracking & wellness resource library",
        "AI companion support for guided journeys",
        "Inclusive design with community-centered UX",
        "Yoga, makeup tutorials & affirmation tools",
      ],
      liveLabel: "Explore",
      liveUrl: "https://becomingher-ik3k.vercel.app/",
      githubUrl: "https://github.com/fishrifle/becomingher"
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto reveal">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-blue-400/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-500">{project.image}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  {project.title}
                </h3>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-300 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-5">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-blue-400 mt-0.5 shrink-0">&#9654;</span>
                      {highlight}
                    </div>
                  ))}
                </div>

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

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/30"
                  >
                    {project.liveLabel}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    View Code
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