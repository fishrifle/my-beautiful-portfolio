import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Pokemon Card Battle Simulator",
      description:
        "Full-stack MERN app to manage and battle custom Pokémon cards with dice mechanics and database persistence.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      link: "https://youtu.be/WRM6m9eVNmA",
      image: "/images/projects/pokemon.jpg",
    },
    {
      title: "Emoji Mood Tracker",
      description:
        "Emoji-based emotion tracker with history, stats, dark/light mode, and animations.",
      tech: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Context API"],
      link: "https://emoji-blush.vercel.app/",
      image: "/images/projects/emoji.jpg",
    },
    {
      title: "Jesse's Rings (E-Commerce)",
      description:
        "Online storefront for handmade rings with Stripe checkout, cart system, and filtering.",
      tech: ["React", "Tailwind", "TypeScript", "Vite", "Stripe"],
      link: "https://jessesrings.vercel.app",
      image: "/images/projects/rings.jpg",
    },
    {
      title: "Product Landing Page",
      description:
        "Responsive landing page with promotional sections and CTA design using Tailwind.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://product-page.vercel.app",
      image: "/images/projects/landing.jpg",
    },
    {
      title: "Earth (three.js)",
      description:
        "3D interactive Earth using Three.js with rotation and zoom.",
      tech: ["Three.js", "HTML", "CSS", "JavaScript"],
      link: "https://earth-threejs.vercel.app",
      image: "/images/projects/earth.jpg",
    },
    {
      title: "Blackjack",
      description:
        "Simple Blackjack game in React with scalable UI.",
      tech: ["React.js", "Node.js", "Vite", "Tailwind CSS", "TypeScript"],
      link: "https://blackjack-game-aosy37ch0-jesse-davis-projects.vercel.app",
      image: "/images/projects/blackjack.jpg",
    },
    {
      title: "Rock Paper Scissors",
      description:
        "Classic RPS game with animation and logic for fun or decision-making.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://youtu.be/pYyOBmbhsb0",
      image: "/images/projects/rps.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project ➡
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
