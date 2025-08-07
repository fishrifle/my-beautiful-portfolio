export const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-yellow-400 mb-6">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a full-stack developer with a passion for creating innovative web solutions. 
              With expertise in modern frameworks and technologies, I bring ideas to life through 
              clean, efficient code and intuitive user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My journey in tech has led me through various exciting projects, from responsive 
              web applications to complex backend systems. I'm always eager to learn new 
              technologies and tackle challenging problems.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-black/40 to-gray-900/40 rounded-lg border border-yellow-400/20">
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <img 
              src="fulllogo.jpg" 
              alt="Jesse Davis - Full Stack Engineer" 
              className="w-80 h-auto object-contain rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};