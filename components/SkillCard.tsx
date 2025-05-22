'use client';

import { useRef } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SkillCardProps {
  skill: {
    icon: React.ReactNode;
    name: string;
    category: string;
    description: string;
    color: string;
    bgColor: string;
    mockupImage: string;
    mockupContent: string;
  };
  index: number;
  scrollYProgress: any;
}

export function SkillCard({ skill, index, scrollYProgress }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const offsetMultiplier = index % 2 === 0 ? 1 : -1;

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl p-6 h-full ${skill.bgColor} shadow-xl`}
      style={{
        y: useTransform(scrollYProgress, [0, 1], [index * 20, index * -20]),
        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 1])
      }}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm mr-4">
            {skill.icon}
          </div>
          <div>
            <motion.div
              className={`text-lg font-bold mb-1 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
              style={{
                x: useTransform(scrollYProgress, [0, 0.5, 1], [0, 10 * offsetMultiplier, 0])
              }}
            >
              {skill.category}
            </motion.div>
            <motion.h3
              className="text-2xl font-bold mb-2 text-white"
              style={{
                x: useTransform(scrollYProgress, [0, 0.5, 1], [0, 5 * offsetMultiplier, 0])
              }}
            >
              {skill.name}
            </motion.h3>
          </div>
        </div>
        
        <motion.p
          className="text-white/80 mb-6 flex-grow"
          style={{
            y: useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1])
          }}
        >
          {skill.description}
        </motion.p>
        
        <motion.div
          className="flex items-center text-white text-sm font-medium mt-auto"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Learn More <ArrowRight className="h-4 w-4 ml-1" />
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 45])
          }}
        />
      </div>
    </motion.div>
  );
}
