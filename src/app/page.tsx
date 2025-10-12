"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { SkillsExpertise } from "@/components/SkillsExpertise";
import StatsSection from "@/components/StatsSection.tsx";
import ServicesSection from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/Contact";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const, // ✅ Fix: use a single string, not an array
  },
};




  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white relative z-10">
        <div className="animate-pulse">
          <div className="h-20 w-96 bg-gray-700 rounded mb-4"></div>
          <div className="h-8 w-80 bg-gray-700 rounded mb-4"></div>
          <div className="h-6 w-72 bg-gray-700 rounded mb-8"></div>
          <div className="flex gap-4">
            <div className="h-12 w-40 bg-gray-700 rounded-full"></div>
            <div className="h-12 w-40 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center p-8 pt-22 sm:pt-32 text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating WordPress Icons */}
        <motion.div
          className="absolute top-25 left-10 md:left-20 text-blue-400 opacity-30 hidden sm:block"
          animate={floatingAnimation}
        >
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.031-.661.854-.078.899 0 0 .554.075 1.141.105l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.924-.066-.896 0 0-1.755.131-2.88.131-.206 0-.438-.016-.672-.023C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.211 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-60 right-10 md:right-20 text-blue-400 opacity-30 hidden sm:block"
          animate={floatingAnimation}
        >
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.031-.661.854-.078.899 0 0 .554.075 1.141.105l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.924-.066-.896 0 0-1.755.131-2.88.131-.206 0-.438-.016-.672-.023C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.211 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
          </svg>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="mb-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex justify-center gap-4 mt-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-2">
                Hello I&apos;m
              </span>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-2">
                WordPress Expert
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Muhammad Ahad
            </span>
          </motion.h1>

          <motion.div className="space-y-4 mb-8" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
              Crafting Exceptional WordPress Experiences
            </h2>

            <p className="text-base lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into powerful WordPress websites with custom
              themes, plugins, and performance optimization. Delivering premium
              solutions that drive results and exceed expectations.
            </p>
          </motion.div>

          {/* Skills Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={itemVariants}
          >
            {[
              "Custom Themes",
              "Plugin Development",
              "WooCommerce",
              "Performance Optimization",
              "SEO Expert",
              "Responsive Design",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1 bg-gray-800/50 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.3 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex gap-6 items-center flex-col sm:flex-row justify-center"
            variants={itemVariants}
          >
            <motion.button
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-sm shadow-blue-500/25 transition-all duration-300 relative overflow-hidden cursor-pointer"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const workSection =
                  document.getElementById("featured-projects");
                workSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="group px-8 py-4 rounded-full border-2 border-emerald-400 text-emerald-400 font-semibold transition-all duration-300 relative overflow-hidden backdrop-blur-sm cursor-pointer"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open("https://www.fiverr.com/your-username", "_blank", "noopener,noreferrer");
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Let&apos;s Work Together
              </span>
              <div className="absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Text Hover Effect Section - Desktop Only */}
        <motion.div
          className="hidden lg:flex h-[15rem] items-center justify-center w-full px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <TextHoverEffect text="WORDPRESS EXPERT" />
        </motion.div>
      </motion.div>

      {/* Responsive Spacer - Small gap on mobile/tablet, no gap on desktop */}
      <div className="h-8 lg:h-0"></div>

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Skills & Expertise Section */}
      <SkillsExpertise />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
