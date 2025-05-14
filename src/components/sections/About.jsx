// import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "Tailwindcss", "HTML", "CSS"];

  const backendSkills = ["Express", "Node.js", "Mongoose", "MongoDB", "APIs"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      {/* <RevealOnScroll> */}
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a passionate Junior Web Developer with expertise in the MERN
              stack (MongoDB, Express.js, React, Node.js) and a strong foundation
              in front-end and back-end development. Experienced in building
              interactive, user-friendly applications, creating RESTful APIs, and
              implementing CRUD functionality. Adept at problem-solving,
              collaboration, and continuously learning new technologies to enhance
              software performance and user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Full Stack Web Development
                  </strong> - Persevere Bootcamp(2024-2025)
                </li>
                <li>
                  Relevent Skills: HTML, CSS, JavaScript, Problem Solving, P2P Collaberation with Slack, GitHub...
                </li>
                  
                <li>
                  <strong>
                  High School Diploma - 
                  </strong>
                  <br></br>
                   Sparta High School(2003-2005)
                  </li>
                <li>
                  Relevent Skills: Math, History, Science, English, Physical Education.
                  </li>
                </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🛠️ Work Experience</h3>
              <div className="space-y-4 text-gray-300">
              <div className="flex flex-wrap gap-2 mb-4">
                  <h4 className="font-semibold"> {" "} Water Jet Operator at Durable Products Inc. (2023-Present)</h4>
                  <p>Responsible for the cutting of Volvo semi truck floor mats with the use of a computer programmed water jet.
                    Receive work orders detailing the type of mats needed as well as the quantity.
                    Set up the environment for cutting each mat required by changing the cutting tables required for each mat.
                    Prioritize company principles QUALITY and PRODUCTION to complete all required cuts according to each
                    order received.
                    After quality is verified by me personally send the finished product to the shipping department for wrapping
                    and shipping</p>
                    </div>
                  <div>
                    <h4 className="font-semibold"> {" "}Receiving Associate at Flowers Bakery (2021-2023){" "}</h4>
                    <p>Responsible for inspecting and verifying both incoming and outgoing orders according to strick regulations for
                      the food industry.
                      Inventory and store each received items according to their designated location. Rotate stock according to date
                      received to ensure product freshness.
                      With the use of a building intercom listen and respond to live ingredient and packaging requests. Deliver
                      accordingly at the same time future planning for needed items according to shift time and products being baked.
                      Work close and foster relationships with many crew members on both the production lines and other receiving
                      associates by being accurate as well as prompt responding to requests.
                      Call in trailers to each location they are best utilized to pull each ingredient or packaging items.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};
