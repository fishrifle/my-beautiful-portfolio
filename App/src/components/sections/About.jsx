export const About = () => {
  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '25+', label: 'Technologies' },
    { number: '4.0', label: 'GPA (All Programs)' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h3 className="text-3xl font-semibold text-blue-400 mb-6">
              Senior Full Stack Engineer & Problem Solver
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Experienced Full-Stack Developer with a proven track record at Banyan Labs and as a freelance developer on Upwork since 2019.
              I specialize in building scalable applications using Next.js, React, Node.js, and modern databases, with expertise in
              payment integrations, real-time UI features, and performance optimization.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Currently pursuing a Bachelor's in Computer Science, Business and AI at Maestro College (4.0 GPA) while delivering full-stack projects
              that enhance user experience and drive business results. My work includes Three.js visualizations, accessible web applications,
              and collaborative solutions that translate requirements into technical excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-lg border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300">
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center reveal">
            <img 
              src="fulllogo.jpg" 
              alt="Jesse Davis - Full Stack Engineer" 
              className="w-80 h-auto object-contain rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};