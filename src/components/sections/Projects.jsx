// import { RevealOnScroll } from "../RevealOnScroll";


export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      {/* <RevealOnScroll> */}
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Pokemon-Card-Battle-Simulator
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a full-stack web application that allows users to create
                and manage Pokémon cards using the MERN stack. Features include a
                card selection screen, interactive battle arena with dice
                mechanics, and CRUD operations for Pokémon cards. Integrated a
                backend API and database to store and retrieve data for up to 151
                unique Pokémon.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                href="https://youtu.be/WRM6m9eVNmA" 
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Blackjack</h3>
              <p className="text-gray-400 mb-4">
                Simple Blackjack game with the ability to double down not betting
                logic yet.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "Vite", "Tailwindcss", "TypeScript"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                href="https://youtu.be/UNAX9JhX4Xw"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Rock-Paper-Scissors</h3>
              <p className="text-gray-400 mb-4">
                Rock beats Scissors (crushes it) Scissors beats Paper (cuts it)
                Paper beats Rock (covers it)Rock, Paper, Scissors is a quick and
                simple hand game played between two individuals. It’s commonly
                used not only for fun or competition but also as a decision-making
                tool to resolve a tie, make a fair choice, or settle a dispute.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                href="https://youtu.be/pYyOBmbhsb0"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Earth
              </h3>
              <p className="text-gray-400 mb-4">
                Created a lifelike version of earth using threejs and other resources simple yet complex several added layers. The ability to rotate the earth zoom in out and much more
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Threejs", "HTML", "CSS", "JavaScript"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                href="https://youtu.be/JyTQ8Fz6H2Y"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};
