import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaSlack, FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiMongoose, SiGithub, SiClickup,
} from "react-icons/si";

export  const About = () => {
  const frontendSkills = [
    { icon: <FaReact />, label: "React" },
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiTailwindcss />, label: "TailwindCSS" },
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaJsSquare />, label: "JavaScript" },
  ];

  const backendSkills = [
    { icon: <SiExpress />, label: "Express" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiMongoose />, label: "Mongoose" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <FaJsSquare />, label: "APIs" },
  ];

  const collaborationSkills = [
    { icon: <SiClickup />, label: "ClickUp" },
    { icon: <SiGithub />, label: "GitHub" },
    { icon: <FaGitAlt />, label: "GitFlow" },
    { icon: <FaSlack />, label: "Slack" },
  ];

  const education = [
    "High School Diploma",
    "Certificate: Front-End Developer",
    "Certificate: Full-Stack Developer",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-10 text-lg text-center leading-relaxed">
            I'm a passionate Junior Web Developer with expertise in the MERN stack and modern web technologies. I love building clean, user-friendly UIs and interactive apps. I thrive in collaborative environments and constantly push to learn new tools and patterns that improve performance and user experience.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Skill Sections */}
            {[["Frontend", frontendSkills], ["Backend", backendSkills], ["Collaboration", collaborationSkills]].map(([title, skills]) => (
              <div key={title} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
                <div className="flex flex-wrap gap-4">
                  {skills.map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                      <span className="text-xl">{icon}</span>
                      <span className="text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
              <ul className="text-blue-400 list-disc list-inside space-y-2">
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-white">🛠️ Work Experience</h3>
              <div className="space-y-6 text-gray-300 text-sm">
                <div>
                  <p className="font-semibold text-white">Software Developer @ Banyan Labs (2025–Present)</p>
                  <p>Leading multiple teams to develop client web apps that support justice-involved individuals. Using React, Next.js, Tailwind, TypeScript.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Water Jet Operator @ Durable Products Inc. (2023–2025)</p>
                  <p>Cutting Volvo semi truck mats with precision tooling, verifying quality, and prioritizing production and consistency.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Receiving Associate @ Flowers Bakery (2021–2023)</p>
                  <p>Handled live inventory for a fast-paced food production line using internal tracking, rotation systems, and coordinated logistics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
