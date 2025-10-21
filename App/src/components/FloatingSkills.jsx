import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaAws
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress,
  SiNextdotjs,
  SiVite,
  SiRedis
} from 'react-icons/si';

const SkillsScroll = () => {
  const frontendSkills = [
    { icon: FaReact, name: 'React', color: 'text-blue-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-400' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-400' },
    { icon: SiVite, name: 'Vite', color: 'text-purple-400' }
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-400' },
    { icon: FaPython, name: 'Python', color: 'text-yellow-300' },
    { icon: SiExpress, name: 'Express', color: 'text-gray-300' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-300' },
    { icon: SiRedis, name: 'Redis', color: 'text-red-400' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-400' },
    { icon: FaDocker, name: 'Docker', color: 'text-blue-400' },
    { icon: FaAws, name: 'AWS', color: 'text-orange-300' }
  ];

  const SkillIcon = ({ skill }) => {
    const Icon = skill.icon;
    return (
      <div className="flex flex-col items-center group mx-8">
        <div className="p-4 bg-gradient-to-br from-black/60 to-gray-900/60 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-110">
          <Icon className={`text-5xl ${skill.color} transition-all duration-300`} />
        </div>
        <span className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {skill.name}
        </span>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900/50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4">Technologies</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
      </div>
      
      <div className="relative">
        {/* Frontend Skills */}
        <div className="mb-8">
          <h3 className="text-center text-xl text-yellow-400 font-semibold mb-6">Frontend</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-slow">
              {[...frontendSkills, ...frontendSkills, ...frontendSkills].map((skill, index) => (
                <SkillIcon key={`frontend-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Gap between sections */}
        <div className="h-8"></div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-center text-xl text-orange-400 font-semibold mb-6">Backend</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-slow-reverse">
              {[...backendSkills, ...backendSkills, ...backendSkills].map((skill, index) => (
                <SkillIcon key={`backend-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsScroll;