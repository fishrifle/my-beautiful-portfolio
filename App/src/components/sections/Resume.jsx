import { FaEnvelope, FaPhone, FaGlobe, FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap, FaCode, FaDownload } from 'react-icons/fa';

export const Resume = () => {
  return (
    <section id="resume" className="min-h-screen py-20 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl font-bold gradient-text mb-6">Professional Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-xl">
            Senior Full Stack Engineer with expertise in modern web technologies and scalable applications
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-12 text-center reveal">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Jesse Davis</h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-300 text-sm">
            <a href="mailto:jdavis.prsvr@gmail.com" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"><FaEnvelope className="text-blue-400" /> jdavis.prsvr@gmail.com</a>
            <a href="tel:+19312108791" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"><FaPhone className="text-blue-400" /> (931) 210-8791</a>
            <a href="https://jldavistech.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"><FaGlobe className="text-blue-400" /> jldavistech.com</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-300 text-sm mt-2">
            <a href="https://github.com/fishrifle" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"><FaGithub className="text-blue-400" /> github.com/fishrifle</a>
            <a href="https://www.linkedin.com/in/jesse-davis-tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"><FaLinkedin className="text-blue-400" /> linkedin.com/in/jesse-davis-tech</a>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-12 reveal">
          <h3 className="text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
            <FaBriefcase /> Work Experience
          </h3>

          {/* Banyan Labs */}
          <div className="mb-8 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl border border-blue-500/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold text-blue-300">Senior Full Stack Engineer</h4>
                <p className="text-slate-400">Banyan Labs</p>
              </div>
              <span className="text-sm text-slate-400">May 2025 - Aug 2025</span>
            </div>
            <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
              <li>Designed scalable full-stack applications using SQL, Angular, and related technologies</li>
              <li>Developed and maintained both frontend and backend components ensuring seamless integration</li>
              <li>Collaborated with cross-functional teams to translate business requirements into technical solutions</li>
              <li>Optimized database queries and application performance for efficiency and scalability</li>
            </ul>
          </div>

          {/* Upwork */}
          <div className="mb-8 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl border border-blue-500/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold text-blue-300">Freelance Web Developer</h4>
                <p className="text-slate-400">Upwork</p>
              </div>
              <span className="text-sm text-slate-400">Jan 2019 - Present</span>
            </div>
            <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
              <li>Delivered full-stack projects including Three.js solar system visualizations and Pokémon Card Battle Simulator</li>
              <li>Built responsive, accessible applications with payment integrations and real-time UI features</li>
              <li>Collaborated remotely with clients to gather requirements resulting in successful long-term engagements</li>
            </ul>
          </div>

          {/* Durable Products */}
          <div className="mb-8 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl border border-blue-500/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold text-blue-300">Water Jet Operator</h4>
                <p className="text-slate-400">Durable Products</p>
              </div>
              <span className="text-sm text-slate-400">Jun 2022 - Present</span>
            </div>
            <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
              <li>Operated water jet cutting machines with precision ensuring efficiency in production</li>
              <li>Performed preventive maintenance to minimize downtime and extend equipment lifespan</li>
              <li>Maintained quality standards through inspection and measurement of finished parts</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12 reveal">
          <h3 className="text-3xl font-bold text-blue-400 mb-6 flex items-center gap-3">
            <FaCode /> Technical Skills
          </h3>
          <div className="p-6 bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-xl border border-blue-500/30">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="font-semibold text-blue-300">Frontend:</span> React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Styled Components, Accessibility
              <br/><br/>
              <span className="font-semibold text-blue-300">Backend:</span> Node.js, Express.js, PHP, Python, REST APIs, GraphQL, Performance Optimization
              <br/><br/>
              <span className="font-semibold text-blue-300">Databases:</span> MongoDB, MySQL, PostgreSQL, Supabase
              <br/><br/>
              <span className="font-semibold text-blue-300">Services & Integration:</span> Stripe, Clerk, AWS, Docker, CI/CD, Vercel
              <br/><br/>
              <span className="font-semibold text-blue-300">Tools & Methodologies:</span> Git, GitHub, Agile Leadership, Remote Collaboration, Technical Troubleshooting, Problem-solving
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12 reveal">
          <h3 className="text-3xl font-bold text-blue-400 mb-6 flex items-center gap-3">
            <FaGraduationCap /> Education
          </h3>

          <div className="mb-6 p-6 bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-xl border border-blue-500/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <div>
                <h4 className="text-lg font-bold text-blue-300">Maestro College</h4>
                <p className="text-slate-400 text-sm">Bachelor's, Computer Science, Business and AI</p>
              </div>
              <span className="text-sm text-slate-400">2024 - 2028 | GPA: 4.0</span>
            </div>
          </div>

          <div className="mb-6 p-6 bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-xl border border-blue-500/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <div>
                <h4 className="text-lg font-bold text-blue-300">Persevere</h4>
                <p className="text-slate-400 text-sm">Certificate, MERN Stack</p>
              </div>
              <span className="text-sm text-slate-400">Jan 2024 - Jan 2025 | GPA: 4.0</span>
            </div>
          </div>
        </div>

        {/* Download Resume */}
        <div className="text-center reveal">
          <a
            href="/Jesse-Davis-Resume.pdf"
            download="Jesse-Davis-Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            <FaDownload /> Download Full Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
};