"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiWordpress, 
  SiReact, 
  SiJavascript, 
  SiPhp, 
  SiWoocommerce,
  SiElementor,
  SiHtml5,
  SiCss3,
  SiShopify
} from "react-icons/si";

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
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeOut
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeOut
    },
  },
};

const skills = [
  {
    name: "WordPress",
    icon: <SiWordpress className="w-12 h-12 sm:w-16 sm:h-16" />,
    color: "text-[#21759B]"
  },
  {
    name: "React",
    icon: <SiReact className="w-12 h-12 sm:w-16 sm:h-16" />,
    color: "text-[#61DAFB]" // Official React blue
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-12 h-12 sm:w-16 sm:h-16" />,
    color: "text-[#F7DF1E]" // Official JavaScript yellow
  },
  {
    name: "PHP",
    icon: <SiPhp className="w-12 h-12 sm:w-16 sm:h-16" />,
    color: "text-[#777BB4]" // Official PHP purple
  },
  {
    name: "WooCommerce",
    icon: <SiWoocommerce className="w-12 h-12 sm:w-16 sm:h-16" />,
    color: "text-[#96588A]" // Official WooCommerce purple
  },
  {
    name: "Elementor",
    icon: <SiElementor className="w-12 h-12 sm:w-16 sm:h-16" />,
    color: "text-[#9146FF]" // Official Elementor pink
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="w-12 h-12 sm:w-16 sm:h-16" />,
    color: "text-[#E34F26]" // Official HTML5 orange
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="w-12 h-12 sm:w-16 sm:h-16" />,
    color: "text-[#1572B6]" // Official CSS3 blue
  },
  {
    name: "Shopify",
    icon: <SiShopify className="w-12 h-12 sm:w-16 sm:h-16" />,
    color: "text-[#7AB55C]" // Official Shopify green
  },
];

export function SkillsExpertise() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 relative z-10" id="skills-expertise">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xs sm:text-base lg:text-xl text-gray-300 max-w-2xl mx-auto px-4 mt-6 mb-10 sm:mb-20 sm:mt-10">
            Technologies and tools I use to bring ideas into reality.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 mt-12 sm:mt-16 lg:mt-30"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center group cursor-pointer"
              variants={skillItemVariants}
              custom={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`${skill.color} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg`}
                whileHover={{ 
                  rotate: 360,
                  transition: {
                    duration: 0.4,
                    ease: "linear"
                  }
                }}
              >
                {skill.icon}
              </motion.div>
              <motion.span
                className="text-gray-300 font-medium text-sm sm:text-base md:text-lg mt-3 sm:mt-4 group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
