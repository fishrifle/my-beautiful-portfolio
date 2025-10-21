export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-20 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Jesse Davis</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
            Senior Full Stack Engineer
          </h2>
        </div>

        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experienced Full-Stack Developer delivering scalable web solutions with modern technologies.
          Passionate about building efficient, accessible, and user-focused applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-blue-500/50 text-center interactive"
          >
            View My Work
          </a>
          <a
            href="./Jesse-Davis-Resume.pdf"
            download="Jesse-Davis-Resume.pdf"
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 text-center interactive"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};