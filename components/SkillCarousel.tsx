'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Parallax, Mousewheel } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/parallax';
import 'swiper/css/mousewheel';

type Skill = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
};

const skills: Skill[] = [
  {
    id: 1,
    name: 'Web Development',
    category: 'Frontend & Backend',
    description: 'Building responsive and interactive web applications using modern frameworks and technologies.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'UI/UX Design',
    category: 'Design & Prototyping',
    description: 'Creating intuitive and beautiful user interfaces with a focus on user experience.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Mobile Development',
    category: 'iOS & Android',
    description: 'Building cross-platform mobile applications with React Native and Flutter.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function SkillCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full h-full relative py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900"></div>
      </div>
      
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={40}
        loop={true}
        speed={1000}
        mousewheel={true}
        parallax={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay, Parallax, Mousewheel]}
        className="w-full h-full px-4"
      >
        {skills.map((skill) => (
          <SwiperSlide 
            key={skill.id} 
            className="relative w-[300px] h-[400px] transition-transform duration-300"
            data-swiper-parallax="20%"
          >
            <div className="w-full h-full bg-gray-800/80 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 flex flex-col transform transition-all duration-300 hover:scale-105">
              <div className="w-full h-40 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  {skill.icon}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-blue-300 mb-4">{skill.category}</p>
                <p className="text-gray-300 text-sm mb-6 flex-1">{skill.description}</p>
                <div className="w-full">
                  <div className="text-xs text-gray-400 mb-2">Proficiency</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000" 
                      style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
