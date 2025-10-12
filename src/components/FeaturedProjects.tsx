"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  livePreviewUrl: string;
  technologies: string[];
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "L'Happy Curious",
    description:
      "L'Happy Curious is a cozy restaurant and wine bar in Fontainebleau, France, offering high-quality organic meats and a refined selection of wines.",
    imageUrl: "/images/lhappycurious.png",
    livePreviewUrl: "https://www.lhappycurious.fr/",
    technologies: [
      "WordPress",
      "Elementor",
      "Hello Elementor Theme",
      "Yoast SEO",
      "Contact Form 7",
      "Restaurant website",
    ],
  },
  {
    id: 2,
    title: "Ennomark Business Website",
    description:
      "Ennomark is a full-service digital agency offering web development, graphic design, SEO, digital marketing, cinematography, and app development.",
    imageUrl: "/images/Ennomark.png",
    livePreviewUrl: "https://ennomark.co/",
    technologies: [
      "WordPress",
      "Elementor",
      "Hostinger",
      "Yoast SEO",
      "Contact Form 7",
      "Digital Agency",
    ],
  },
  {
    id: 3,
    title: "Qutiee - Smart Skincare",
    description:
      "Qutiee is a Turkish beauty brand specializing in high-quality skincare products designed to enhance natural radiance and promote healthy, glowing skin.",
    imageUrl: "/images/Qutiee.png",
    livePreviewUrl: "https://qutiee.com.tr/",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "RankMath SEO",
      "Contact Form 7",
      "E-commerce",
    ],
  },
] as Project[];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

export function FeaturedProjects() {
  return (
    <section
      className="pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative z-10"
      id="featured-projects"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-2"
          variants={itemVariants}
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xs sm:text-base lg:text-2xl text-gray-300 max-w-2xl mx-auto px-4 mt-6 mb-10 sm:mb-20 sm:mt-10">
            Explore my latest work and creative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 gap-y-4 justify-items-center"
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              custom={index}
              className="w-full"
            >
              {/* ✅ FIXED: Convert readonly → mutable */}
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                livePreviewUrl={project.livePreviewUrl}
                technologies={[...project.technologies]}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div className="flex justify-center" variants={itemVariants}>
          <motion.button
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-sm shadow-blue-500/25 transition-all duration-300 relative overflow-hidden cursor-pointer mt-14 sm:mt-20"
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/featured-projects")}
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
