"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "../components/ui/button"
import {
  ExternalLink,
  Menu,
  X,
  Brush,
  Code,
  Laptop,
  Mail,
  Palette,
  FileImage,
  Sparkles,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import { cn } from "../lib/utils"

// Import components
import dynamic from 'next/dynamic';

// Dynamically import SkillsSection with SSR disabled
const SkillsSection = dynamic(
  () => import('../components/SkillsSection'),
  { ssr: false }
);

// Define the Skill interface
export interface Skill {
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

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const [isSkillsInView, setIsSkillsInView] = useState(false);

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "education", "portfolio", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "portfolio", label: "Work" },
    { id: "contact", label: "Contact" },
  ];
  
  // Set up intersection observer for skills section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSkillsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );
    
    const currentRef = skillsSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Skills data
  const skills = [
    {
      id: 1,
      icon: <Palette className="h-12 w-12" />,
      name: "Graphic Design",
      category: "Visual Communication",
      description: "Crafting compelling visual concepts using Photoshop, Illustrator, and other design tools to create engaging and memorable designs.",
      color: "from-[#D81B60] to-[#C2185B]",
      bgColor: "bg-gradient-to-br from-[#D81B60]/90 to-[#C2185B]",
      mockupImage: "/placeholder.svg?height=600&width=300",
      mockupContent: "Design Projects",
      proficiency: 85
    },
    {
      id: 2,
      icon: <FileImage className="h-12 w-12" />,
      name: "Video Editing",
      category: "Content Creation",
      description: "Producing polished video content with CapCut and Premiere Pro, from basic edits to engaging visual storytelling.",
      color: "from-[#1E88E5] to-[#1976D2]",
      bgColor: "bg-gradient-to-br from-[#1E88E5]/90 to-[#1976D2]",
      mockupImage: "/placeholder.svg?height=600&width=300",
      mockupContent: "Video Projects",
      proficiency: 60
    },
    {
      id: 3,
      icon: <FileImage className="h-12 w-12" />,
      name: "Photo Editing",
      category: "Image Enhancement",
      description: "Transforming photos with precision using Photoshop, from basic touch-ups to advanced compositing and creative effects.",
      color: "from-[#5E35B1] to-[#512DA8]",
      bgColor: "bg-gradient-to-br from-[#5E35B1]/90 to-[#512DA8]",
      mockupImage: "/placeholder.svg?height=600&width=300",
      mockupContent: "Photo Projects",
      proficiency: 85
    },
    {
      id: 4,
      icon: <Code className="h-12 w-12" />,
      name: "Web Development",
      category: "Frontend Development",
      description: "Building responsive and dynamic web applications using HTML, CSS, JavaScript, and Next.js, enhanced with AI tools for efficient development.",
      color: "from-[#3949AB] to-[#303F9F]",
      bgColor: "bg-gradient-to-br from-[#3949AB]/90 to-[#303F9F]",
      mockupImage: "/placeholder.svg?height=600&width=300",
      mockupContent: "Web Projects",
      proficiency: 60
    },
    {
      id: 5,
      icon: <Laptop className="h-12 w-12" />,
      name: "Microsoft Office",
      category: "Productivity & Analytics",
      description: "Leveraging Excel, Google Sheets, and automation tools for data analysis, reporting, and creating efficient mini-databases.",
      color: "from-[#1E88E5] to-[#1976D2]",
      bgColor: "bg-gradient-to-br from-[#1E88E5]/90 to-[#1976D2]",
      mockupImage: "/placeholder.svg?height=600&width=300",
      mockupContent: "Analytics Projects",
      proficiency: 70
    },
    {
      id: 6,
      icon: <Sparkles className="h-12 w-12" />,
      name: "AI Tools",
      category: "Creative & Development",
      description: "Exploring and utilizing AI tools like ComfyUI, Stable Diffusion, Midjourney, and innovative GitHub projects to streamline workflows and enhance productivity.",
      color: "from-[#039BE5] to-[#0288D1]",
      bgColor: "bg-gradient-to-br from-[#039BE5]/90 to-[#0288D1]",
      mockupImage: "/placeholder.svg?height=600&width=300",
      mockupContent: "AI Projects",
      proficiency: 80
    },
  ];

  return (
    <div key="root" className="min-h-screen bg-[#050A1B] text-white overflow-hidden">
      {/* Background gradient orbs */}
      <div key="gradient-orbs" className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-300px] right-[-300px] w-[800px] h-[800px] rounded-full bg-[#1A4DB3] opacity-20 blur-[150px]" />
        <div className="absolute bottom-[-300px] left-[-300px] w-[800px] h-[800px] rounded-full bg-[#1A4DB3] opacity-20 blur-[150px]" />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#1A4DB3] opacity-10 blur-[100px]" />
      </div>

      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-all duration-300",
          scrollY > 50 ? "bg-[#050A1B]/80 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="max-w-[85rem] w-full mx-auto">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                Jay Hew
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * navItems.indexOf(item) }}
                  >
                    <Link
                      href={`#${item.id}`}
                      className={cn(
                        "text-sm font-medium relative px-1 py-2 transition-colors",
                        activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white",
                      )}
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:hidden z-50 relative"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <motion.nav
        className={cn(
          "fixed inset-0 z-40 bg-[#050A1B]/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="space-y-8 text-center">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05 * navItems.indexOf(item) }}
            >
              <Link
                href={`#${item.id}`}
                className={cn(
                  "text-2xl font-medium transition-colors",
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
                onClick={() => {
                  setActiveSection(item.id)
                  setMenuOpen(false)
                }}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
          <div className="container mx-auto px-6 z-10">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-10 md:mb-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-sm uppercase tracking-widest text-[#3B82F6] mb-4">Welcome to my portfolio</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-gray-200">Think. Make. Explore.</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  A creative space where design meets development, curiosity drives innovation, and every project is a chance to explore new possibilities.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#skills"
                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white px-6 py-3 text-base font-medium transition-colors"
                  >
                    My Skills
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10 px-6 py-3 text-base font-medium transition-colors"
                  >
                    Contact Me
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="md:w-1/2 flex justify-center px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full max-w-md">
                  {/* Profile Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src="/me.png" 
                      alt="Jay Hew" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center"
            >
              <h2 className="text-sm uppercase tracking-widest text-[#3B82F6] mb-4">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-200">The Story Behind</span>{" "}
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  My Work
                </span>
              </h3>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12 px-4 md:px-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative">
                  <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img 
                      src="/about me.jpg" 
                      alt="About Me" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#3B82F6]/30 rounded-lg z-10 hidden md:block"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#8B5CF6]/30 rounded-lg z-10 hidden md:block"></div>
                </div>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="space-y-6">
                  <p className="text-xl text-gray-300">
                    I'm a passionate graphic designer with expertise in digital design, branding, and web development.
                    With a strong foundation in design principles and technical skills, I create visually compelling
                    solutions that communicate effectively.
                  </p>
                  <p className="text-lg text-gray-400">
                    My approach combines traditional design techniques with modern digital tools, including AI-assisted
                    workflows to deliver high-quality results efficiently.
                  </p>
                  <p className="text-lg text-gray-400">
                    I'm constantly exploring new design trends and technologies to expand my creative toolkit and bring
                    fresh perspectives to every project.
                  </p>

                  <div className="pt-4">
                    <h4 className="text-xl font-bold mb-4">My Design Philosophy</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                        <span>User-Centered Design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                        <span>Creative Problem Solving</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#EC4899] rounded-full"></div>
                        <span>Attention to Detail</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                        <span>Continuous Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section with 3D Carousel */}
        <section id="skills" className="relative py-20 md:py-32 overflow-hidden bg-[#111] w-full min-h-screen flex items-center">
          <div className="w-full px-0 mx-auto relative z-10" ref={skillsSectionRef}>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
              <SkillsSection skills={skills} isInView={isSkillsInView} />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full filter blur-3xl"></div>
          </div>
        </section>
        {/* Tools I Use Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="text-gray-200">Tools I</span>{" "}
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                Work With
              </span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Photoshop", category: "Adobe Creative Suite" },
              { name: "Illustrator", category: "Adobe Creative Suite" },
              { name: "Capcut", category: "Video Editing" },
              { name: "HTML/CSS", category: "Web Development" },
              { name: "JavaScript", category: "Web Development" },
              { name: "Premier Pro", category: "Video Editing" },
              { name: "ComfyUI", category: "AI Tools" },
              { name: "Microsoft Office", category: "Productivity" },
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-[#0A1128]/50 backdrop-blur-sm border border-[#1E3A8A]/20 rounded-lg p-4 hover:border-[#3B82F6]/30 transition-all duration-300"
              >
                <p className="text-lg font-semibold text-white">{tool.name}</p>
                <p className="text-sm text-gray-400 mt-1">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center"
            >
              <h2 className="text-sm uppercase tracking-widest text-[#3B82F6] mb-4">My Background</h2>
              <h3 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-200">Education &</span>{" "}
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Qualifications
                </span>
              </h3>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]"></div>

                {/* Timeline items */}
                {[
                  {
                    year: "2018 - 2020",
                    title: "Diploma in E-commerce",
                    institution: "Institution Name",
                    description:
                      "Studied e-commerce principles, digital marketing, web development, and online business strategies. Gained practical experience in creating and managing online stores and digital marketing campaigns.",
                  },
                  {
                    year: "2020 - Present",
                    title: "Professional Certifications",
                    institution: "Various Platforms",
                    description:
                      "Continuously expanding skills through professional development courses in graphic design, digital marketing, and emerging technologies.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center mb-12 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] z-10">
                      <div className="absolute inset-1 rounded-full bg-[#050A1B]"></div>
                    </div>

                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div
                        className={`p-6 bg-[#0A1128]/80 backdrop-blur-sm rounded-lg border border-[#1E3A8A]/30 hover:border-[#3B82F6]/30 transition-colors duration-300 ${
                          index % 2 === 0 ? "md:ml-auto md:mr-6" : "md:mr-auto md:ml-6"
                        }`}
                      >
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#3B82F6]/20 text-[#3B82F6] rounded-full mb-3">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400 mb-2">{item.institution}</p>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center"
            >
              <h2 className="text-sm uppercase tracking-widest text-[#3B82F6] mb-4">Featured Projects</h2>
              <h3 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-200">My Creative</span>{" "}
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  className="group relative overflow-hidden rounded-lg bg-[#0A1128]/80 backdrop-blur-sm border border-[#1E3A8A]/30 hover:border-[#3B82F6]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0A1128]">
                      <span className="text-gray-400">Portfolio Image {item}</span>
                      {/* Replace with your portfolio images */}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A1B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">
                      Project Title {item}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Brief project description showcasing your skills and creativity.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs bg-[#3B82F6]/20 text-[#3B82F6] rounded-full">Design</span>
                      <span className="px-2 py-1 text-xs bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full">Branding</span>
                      <span className="px-2 py-1 text-xs bg-[#EC4899]/20 text-[#EC4899] rounded-full">
                        Illustration
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-[#3B82F6] hover:text-[#3B82F6] hover:bg-[#3B82F6]/10 p-0 h-auto"
                    >
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center"
            >
              <h2 className="text-sm uppercase tracking-widest text-[#3B82F6] mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-200">Let's Start a</span>{" "}
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Conversation
                </span>
              </h3>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12">
                <motion.div
                  className="md:w-2/5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="bg-[#0A1128]/80 backdrop-blur-sm rounded-lg border border-[#1E3A8A]/30 p-8 h-full">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#3B82F6]/20 flex items-center justify-center mr-4">
                          <Mail className="h-5 w-5 text-[#3B82F6]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">Email</h4>
                          <p className="text-gray-400">jayhew@dbrandmaker.com.my</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#25D366]/20 flex items-center justify-center mr-4">
                          <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.498 14.382v3.3a1 1 0 0 1-1.038 1 12.86 12.86 0 0 1-6.34-2.28A12.4 12.4 0 0 1 5.3 13.8a12.86 12.86 0 0 1-2.28-6.34 1 1 0 0 1 1-1.04h3.3a1 1 0 0 1 1.02.8c.13.65.32 1.29.56 1.9a1 1 0 0 1-.45 1.22l-1.48.74a10.08 10.08 0 0 0 3.84 3.84l.74-1.48a1 1 0 0 1 1.22-.45c.62.24 1.25.43 1.9.56a1 1 0 0 1 .796 1.036z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">WhatsApp</h4>
                          <a href="https://wa.me/60143668832" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
                            0143668832
                          </a>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-[#1E3A8A]/30">
                        <p className="text-gray-300">
                          Feel free to reach out for collaborations, project inquiries, or just to say hello. I'm always
                          open to discussing new projects and creative ideas.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="md:w-3/5"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="bg-[#0A1128]/80 backdrop-blur-sm rounded-lg border border-[#1E3A8A]/30 p-8">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                      Send a Message
                    </h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full p-3 bg-[#050A1B] border border-[#1E3A8A]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full p-3 bg-[#050A1B] border border-[#1E3A8A]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full p-3 bg-[#050A1B] border border-[#1E3A8A]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                          placeholder="Project Inquiry"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full p-3 bg-[#050A1B] border border-[#1E3A8A]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                          placeholder="Hello, I'd like to talk about..."
                        ></textarea>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white border-0">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 relative z-10 border-t border-[#1E3A8A]/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 md:mb-0"
            >
              <div className="flex items-center">
                <span className="text-lg font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                  Jay Hew
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-gray-500 text-sm">
                Designed with <span className="text-[#EC4899]">♥</span> by{" "}
                <span className="text-[#3B82F6]">Jay Hew</span>
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Define interface for SkillCard props
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
  scrollYProgress: any; // You might want to import the proper type from framer-motion
}

// SkillCard component has been moved to components/SkillCard.tsx
