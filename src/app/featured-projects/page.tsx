"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";

// Projects Array 
const allProjectsData = [
  {
    id: 1,
    title: "L’Happy Curious",
    description:
      "L’Happy Curious is a cozy restaurant and wine bar in Fontainebleau, France, offering high-quality organic meats and a refined selection of wines.",
    imageUrl: "../images/LhappyCurious.png",
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
    title: "Ennomark",
    description:
      "Ennomark is a full-service digital agency offering web development, graphic design, SEO, digital marketing, cinematography, and app development.",
    imageUrl: "../images/ennomark.png",
    livePreviewUrl: "https://ennomark.co/",
    technologies: [
      "WordPress",
      "Elementor",
      "Hostinger",
      "Yoast SEO",
      "Contact Form 7",
      "Business Website",
    ],
  },
  {
    id: 3,
    title: "Qutiee - Smart Skincare",
    description:
      "Qutiee is a Turkish beauty brand specializing in high-quality skincare products designed to enhance natural radiance and promote healthy, glowing skin.",
    imageUrl: "../images/qutiee.png",
    livePreviewUrl: "https://qutiee.com.tr/",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "RankMath SEO",
      "Contact Form 7",
      "E-Commerce",
    ],
  },
  {
    id: 4,
    title: "Bistrot des Amis",
    description:
      "Bistrot des Amis is a traditional French bistro serving authentic cuisine with local and organic ingredients, complemented by fine wines.",
    imageUrl: "../images/Bistrot Des Amis.png",
    livePreviewUrl: "https://www.bistrotdesamis-fontainebleau.fr/",
    technologies: [
      "WordPress",
      "Elementor",
      "Astra Theme",
      "Yoast SEO",
      "Restaurant Website",
    ],
  },
  {
    id: 5,
    title: "Nucta Formations",
    description:
      "Nucta Formations provides professional company formation, tax assistance, and 3PL logistics services for businesses in the USA, UK, and Canada.",
    imageUrl: "../images/nuctaformation.png",
    livePreviewUrl: "https://nuctaformations.com/",
    technologies: [
      "WordPress",
      "Elementor",
      "Site Kit",
      "Hostinger",
      "Business Website",
    ],
  },
  {
    id: 6,
    title: "Menifee Movers",
    description:
      "Menifee Movers provides reliable and stress free moving services across California. From local to long distance relocations, ensures safe packing and delivery.",
    imageUrl: "../images/menifeemovers.png",
    livePreviewUrl: "https://menifeemovers.com/",
    technologies: ["WordPress", "Elementor", "CSS", "Nginx", "Travel Website"],
  },
  {
    id: 7,
    title: "The Beauty Mark",
    description:
      "The Beauty Mark offers expert online beauty courses and high quality cosmetic products. Learn professional makeup, lash, and skincare.",
    imageUrl: "../images/thebeautymark.png",
    livePreviewUrl: "https://thebeautymark.com.au/",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "Contact Form 7",
      "Stripe",
      "E-Commerce",
    ],
  },
  {
    id: 8,
    title: "Soul Craze",
    description:
      "Soulcraze is a creative storytelling platform exploring dark poetry, psychological fiction, and emotional narratives through series like The Bloody Tulip.",
    imageUrl: "../images/soulcraze.png",
    livePreviewUrl: "https://soulcraze.rifaytech.com/",
    technologies: [
      "WordPress",
      "Elementor",
      "OceanWP Theme",
      "Hostinger",
      "Blogging Website",
    ],
  },
  {
    id: 9,
    title: "Ewago",
    description:
      "Ewago offers high quality fitness essentials like yoga mats, protein shakers, resistance bands, tummy trimmers, and more designed to power your workouts.",
    imageUrl: "../images/ewago.png",
    livePreviewUrl: "https://ewago.co/",
    technologies: ["Shopify", "Animate Css", "Cloudflare", "E-Commerce"],
  },
  {
    id: 10,
    title: "Costa Rica Horseback Riding",
    description:
      "Costa Rica Horseback Riding offers unforgettable guided tours through beaches, rainforests, and mountain trails.",
    imageUrl: "../images/costarica.png",
    livePreviewUrl: "https://costaricahorsebackriding.com/",
    technologies: [
      "WordPress",
      "Elementor",
      "RankMath SEO",
      "Contact From 7",
      "Polylang",
      "Travel Website",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const categories = [
  "All",
  "Elementor",
  "Business",
  "Travel",
  "E-Commerce",
  "Blogging",
  "Other",
];

export default function FeaturedProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjectsData);

  // MAIN filter function (keeps logic in one place)
  const matchesFilter = (
    project: (typeof allProjectsData)[number],
    filter: string
  ) => {
    const techs = (project.technologies || []).map((t) =>
      String(t).toLowerCase().trim()
    );

    if (filter === "All") return true;
    if (filter === "Elementor")
      return techs.some((t) => t.includes("elementor"));
    if (filter === "Business") return techs.some((t) => t.includes("business"));
    if (filter === "Travel") return techs.some((t) => t.includes("travel"));
    if (filter === "E-Commerce")
      return techs.some(
        (t) =>
          t.includes("e-commerce") ||
          t.includes("woocommerce") ||
          t.includes("shopify")
      );
    if (filter === "Blogging") return techs.some((t) => t.includes("blog"));
    if (filter === "Other") {
      // Other = no match with any of the above categories
      const matchesKnown =
        techs.some((t) => t.includes("elementor")) ||
        techs.some((t) => t.includes("business")) ||
        techs.some((t) => t.includes("travel")) ||
        techs.some(
          (t) =>
            t.includes("e-commerce") ||
            t.includes("woocommerce") ||
            t.includes("shopify")
        ) ||
        techs.some((t) => t.includes("blog"));
      return !matchesKnown;
    }
    return false;
  };

  // useEffect ensures React state updates and re-renders reliably on every filter change
  useEffect(() => {
    // defensive copy of array to avoid accidental mutation issues
    const source = Array.isArray(allProjectsData) ? [...allProjectsData] : [];
    const updated = source.filter((p) => matchesFilter(p, selectedFilter));
    setFilteredProjects(updated);
    // scroll-to-top of the grid (optional UX nicety) — can remove if you don't want it
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedFilter]);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />

      {/* Back Button */}
      <div className="fixed top-3 left-4 sm:top-6 sm:left-6 z-50">
        <motion.button
          onClick={() => (window.location.href = "/")}
          className="p-3 rounded-full bg-gray-800/80 border border-gray-600/30 hover:bg-gray-700/80 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6 text-gray-300 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
            />
          </svg>
        </motion.button>
      </div>

      {/* Header + Filters */}
      <div className="pt-16 sm:pt-20 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-10 mt-8 sm:mt-14" variants={itemVariants}>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-4xl sm:text-6xl bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg">
              Explore my latest work and creative solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium border transition-all duration-300 ${
                  selectedFilter === cat
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg"
                    : "bg-gray-800 text-gray-300 border border-gray-600 hover:border-purple-400"
                }`}
                aria-pressed={selectedFilter === cat}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Filtered Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
            variants={containerVariants}
          >
            <AnimatePresence mode="sync">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: 24 }}
                    layout
                    className="w-full"
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      livePreviewUrl={project.livePreviewUrl}
                      technologies={project.technologies}
                    />
                  </motion.div>
                ))
              ) : (
                // Empty state when filter finds no projects
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full w-full text-center py-12"
                >
                  <p className="text-gray-400">
                    No projects match{" "}
                    <span className="font-semibold text-white">
                      {selectedFilter}
                    </span>
                    .
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
