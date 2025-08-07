export const Resume = () => {
  return (
    <section id="resume" className="min-h-screen py-20 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">Technical Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl">
            Full Stack Developer specializing in modern web technologies and enterprise applications
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Jesse Davis</h3>
          <p className="text-gray-300 mb-2">📧 jdavis.prsvr@gmail.com</p>
          <p className="text-gray-300 mb-2">🌐 jldavistech.com</p>
          <p className="text-gray-300">💻 github.com/fishrifle</p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-yellow-400 mb-8">Featured Projects</h3>
          
          {/* Pokemon Card Battle */}
          <div className="mb-8 p-6 bg-gradient-to-br from-black/60 to-gray-900/60 rounded-xl border border-yellow-400/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-white">⚡ Pokemon Card Battle Game</h4>
              <div className="flex gap-2 text-sm">
                <a href="https://pokemon-card-battle.vercel.app/" target="_blank" rel="noopener noreferrer" 
                   className="text-yellow-400 hover:text-orange-400">Live Demo</a>
                <span className="text-gray-500">•</span>
                <a href="https://github.com/fishrifle/pokemon-card-battle" target="_blank" rel="noopener noreferrer"
                   className="text-yellow-400 hover:text-orange-400">GitHub</a>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Interactive Pokemon card battle game featuring real-time combat mechanics, card animations, 
              and responsive design. Demonstrates advanced JavaScript game logic and React state management.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "CSS3", "Game Logic", "Vercel"].map(tech => (
                <span key={tech} className="px-3 py-1 text-xs bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 rounded-full border border-yellow-400/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Donation Platform */}
          <div className="mb-8 p-6 bg-gradient-to-br from-black/60 to-gray-900/60 rounded-xl border border-yellow-400/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-white">💝 Complete Donation Platform</h4>
              <div className="flex gap-2 text-sm">
                <a href="https://donation-one-phi.vercel.app/" target="_blank" rel="noopener noreferrer" 
                   className="text-yellow-400 hover:text-orange-400">Live Demo</a>
                <span className="text-gray-500">•</span>
                <a href="https://github.com/fishrifle/Donation" target="_blank" rel="noopener noreferrer"
                   className="text-yellow-400 hover:text-orange-400">GitHub</a>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Full-stack donation platform with secure payment processing, user management, and analytics dashboard. 
              Built for charitable organizations requiring enterprise-grade donation management.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "Stripe", "Supabase", "Clerk Auth"].map(tech => (
                <span key={tech} className="px-3 py-1 text-xs bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 rounded-full border border-yellow-400/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Widget Admin */}
          <div className="mb-8 p-6 bg-gradient-to-br from-black/60 to-gray-900/60 rounded-xl border border-yellow-400/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-white">🛡️ Widget Admin Dashboard</h4>
              <div className="flex gap-2 text-sm">
                <span className="text-gray-500">In Development</span>
                <span className="text-gray-500">•</span>
                <a href="https://github.com/fishrifle/Widget-Admin" target="_blank" rel="noopener noreferrer"
                   className="text-yellow-400 hover:text-orange-400">GitHub</a>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Enterprise-grade admin dashboard for managing customizable donation widgets. Features complete user management, 
              widget customization, and deployment system with advanced authentication and database integration.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Supabase", "Clerk", "Stripe Connect"].map(tech => (
                <span key={tech} className="px-3 py-1 text-xs bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 rounded-full border border-yellow-400/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-gradient-to-br from-black/40 to-gray-900/40 rounded-lg border border-yellow-400/10">
              <h4 className="text-lg font-semibold text-orange-400 mb-3">Frontend</h4>
              <p className="text-gray-300 text-sm">React, Next.js, JavaScript, TypeScript, CSS3, TailwindCSS, Responsive Design</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-black/40 to-gray-900/40 rounded-lg border border-yellow-400/10">
              <h4 className="text-lg font-semibold text-orange-400 mb-3">Backend</h4>
              <p className="text-gray-300 text-sm">Node.js, API Development, Database Design, Authentication Systems</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-black/40 to-gray-900/40 rounded-lg border border-yellow-400/10">
              <h4 className="text-lg font-semibold text-orange-400 mb-3">Services & APIs</h4>
              <p className="text-gray-300 text-sm">Stripe Payments, Stripe Connect, Supabase, Clerk Authentication</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-black/40 to-gray-900/40 rounded-lg border border-yellow-400/10">
              <h4 className="text-lg font-semibold text-orange-400 mb-3">Tools & Deployment</h4>
              <p className="text-gray-300 text-sm">Git, GitHub, Vercel, Modern CI/CD Workflow, PostgreSQL</p>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">Professional Summary</h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Experienced Full Stack Developer with expertise in modern web technologies and complex system architecture. 
            Proven ability to build scalable applications from concept to deployment, with particular strength in payment systems, 
            authentication, and user management. Demonstrated experience with enterprise-grade applications and multi-tenant architectures.
          </p>
        </div>
      </div>
    </section>
  );
};