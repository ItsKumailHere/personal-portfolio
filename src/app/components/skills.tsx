"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiPostgresql,
} from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    {
      name: "React",
      description: "JavaScript frontend library",
      icon: SiReact,
      iconColor: "text-[#61DAFB]",
      bgColor: "bg-[#61DAFB]/10",
    },
    {
      name: "TypeScript",
      description: "Typed JavaScript superset",
      icon: SiTypescript,
      iconColor: "text-[#3178C6]",
      bgColor: "bg-[#3178C6]/10",
    },
    {
      name: "TailwindCSS",
      description: "CSS framework",
      icon: SiTailwindcss,
      iconColor: "text-[#38B2AC]",
      bgColor: "bg-[#38B2AC]/10",
    },
    {
      name: "Next.js",
      description: "React framework",
      icon: SiNextdotjs,
      iconColor: "text-white",
      bgColor: "bg-white/10",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime",
      icon: SiNodedotjs,
      iconColor: "text-[#339933]",
      bgColor: "bg-[#339933]/10",
    },
    {
      name: "Git",
      description: "Version control",
      icon: SiGit,
      iconColor: "text-[#F05032]",
      bgColor: "bg-[#F05032]/10",
    },
    {
      name: "PostgreSQL",
      description: "Relational database",
      icon: SiPostgresql,
      iconColor: "text-[#336791]",
      bgColor: "bg-[#336791]/10",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto  py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1C1C1C] rounded-xl p-4 hover:bg-[#2A2A2A] transition-colors duration-200"
          >
            <div className="flex items-start justify-center space-x-4">
              <div className={`p-2 rounded-lg ${skill.bgColor}`}>
                <skill.icon className={`w-8 h-8 ${skill.iconColor}`} />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
