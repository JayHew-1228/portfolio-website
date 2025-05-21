'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

interface Skill {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  mockupImage: string;
  mockupContent: string;
  proficiency: number;
}

interface SkillsSectionProps {
  skills: Skill[];
  isInView: boolean;
}

const SkillsSection = ({ skills, isInView }: SkillsSectionProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section ref={sectionRef} className="py-16 bg-gray-900 min-h-[800px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">My Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Loading skills...</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-3xl md:text-4xl font-bold text-white mb-3">
              My Skills
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: isInView ? index * 0.1 : 0,
                ease: "easeOut" 
              }}
            >
              <div className="h-full">
                <TiltCard
                  title={skill.name}
                  description={skill.description}
                  icon={skill.icon}
                  proficiency={skill.proficiency}
                  className="h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
