export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-20 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Jesse Davis</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Full Stack Engineer
          </h2>
        </div>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting modern web experiences with cutting-edge technologies.
          Passionate about creating efficient, scalable, and beautiful applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center interactive"
          >
            View My Work
          </a>
          <a
            href="./Jesse-Davis (2).pdf"
            download="Jesse-Davis-Resume.pdf"
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105 text-center interactive"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};