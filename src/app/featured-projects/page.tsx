"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";

// Extended project data with all 32 projects
const allProjectsData = [
  {
    id: 1,
    title: "E-Commerce WordPress Site",
    description: "A fully functional e-commerce website built with WooCommerce, featuring custom product pages, payment integration, and responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
    livePreviewUrl: "https://example.com/project1",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "MySQL"]
  },
  {
    id: 2,
    title: "Corporate Business Website",
    description: "Modern corporate website with custom WordPress theme, advanced SEO optimization, and interactive elements for enhanced user experience.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3",
    livePreviewUrl: "https://example.com/project2",
    technologies: ["WordPress", "Custom Theme", "SEO", "Responsive Design"]
  },
  {
    id: 3,
    title: "Portfolio & Blog Platform",
    description: "Creative portfolio website with integrated blog functionality, custom post types, and optimized performance for fast loading times.",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2569&auto=format&fit=crop&ixlib=rb-4.0.3",
    livePreviewUrl: "https://example.com/project3",
    technologies: ["WordPress", "Custom Post Types", "Performance", "Blog"]
  },
  {
    id: 4,
    title: "Restaurant Management System",
    description: "Complete restaurant website with online ordering, table reservations, menu management, and integrated payment processing.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project4",
    technologies: ["WordPress", "WooCommerce", "Booking System", "Payment Gateway"]
  },
  {
    id: 5,
    title: "Real Estate Listing Platform",
    description: "Comprehensive real estate website with property listings, advanced search filters, and agent management system.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project5",
    technologies: ["WordPress", "Custom Fields", "Search Engine", "Google Maps"]
  },
  {
    id: 6,
    title: "Educational Course Platform",
    description: "Online learning platform with course management, student progress tracking, and interactive learning modules.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project6",
    technologies: ["WordPress", "LearnDash", "User Management", "Certificates"]
  },
  {
    id: 7,
    title: "Healthcare Clinic Website",
    description: "Medical practice website with appointment booking, patient portal, and healthcare service information.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project7",
    technologies: ["WordPress", "Booking System", "HIPAA Compliance", "Patient Portal"]
  },
  {
    id: 8,
    title: "Fashion Brand Showcase",
    description: "Luxury fashion brand website with stunning visuals, collection galleries, and integrated e-commerce functionality.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project8",
    technologies: ["WordPress", "WooCommerce", "Image Optimization", "Social Integration"]
  },
  {
    id: 9,
    title: "Travel Agency Portal",
    description: "Complete travel booking platform with destination guides, tour packages, and integrated booking system.",
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project9",
    technologies: ["WordPress", "Booking Engine", "Payment Gateway", "Multi-language"]
  },
  {
    id: 10,
    title: "Tech Startup Landing Page",
    description: "Modern startup website with product showcase, team profiles, investor information, and contact forms.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project10",
    technologies: ["WordPress", "Custom Theme", "Animation", "Contact Forms"]
  },
  {
    id: 11,
    title: "Fitness Center Website",
    description: "Gym and fitness center website with class schedules, trainer profiles, membership management, and online booking.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project11",
    technologies: ["WordPress", "Membership Plugin", "Booking System", "Payment Gateway"]
  },
  {
    id: 12,
    title: "Photography Portfolio",
    description: "Professional photographer portfolio with gallery management, client proofing, and booking system.",
    imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project12",
    technologies: ["WordPress", "Gallery Plugin", "Client Portal", "Lightbox"]
  },
  {
    id: 13,
    title: "Law Firm Corporate Site",
    description: "Professional law firm website with attorney profiles, practice areas, case studies, and consultation booking.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project13",
    technologies: ["WordPress", "Custom Post Types", "Contact Forms", "SSL Security"]
  },
  {
    id: 14,
    title: "Music Artist Website",
    description: "Artist promotion website with music streaming, event calendar, merchandise store, and fan engagement features.",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project14",
    technologies: ["WordPress", "Audio Player", "Event Calendar", "Social Media"]
  },
  {
    id: 15,
    title: "Non-Profit Organization",
    description: "Charity organization website with donation system, volunteer management, and impact tracking features.",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1973&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project15",
    technologies: ["WordPress", "Donation Plugin", "Volunteer System", "Impact Metrics"]
  },
  {
    id: 16,
    title: "Automotive Dealership",
    description: "Car dealership website with vehicle inventory, financing calculator, and appointment scheduling system.",
    imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project16",
    technologies: ["WordPress", "Inventory Management", "Calculator", "Lead Forms"]
  },
  {
    id: 17,
    title: "Wedding Planning Service",
    description: "Wedding planner website with service packages, photo galleries, testimonials, and booking system.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project17",
    technologies: ["WordPress", "Gallery Management", "Booking System", "Testimonials"]
  },
  {
    id: 18,
    title: "Construction Company",
    description: "Construction business website with project showcases, service areas, and quote request functionality.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project18",
    technologies: ["WordPress", "Project Showcase", "Quote Forms", "Service Areas"]
  },
  {
    id: 19,
    title: "Food Delivery Platform",
    description: "Restaurant delivery service with menu management, order tracking, and delivery zone configuration.",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1981&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project19",
    technologies: ["WordPress", "WooCommerce", "Order Tracking", "Delivery Zones"]
  },
  {
    id: 20,
    title: "Digital Marketing Agency",
    description: "Marketing agency website with service portfolios, case studies, and client testimonials.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2515&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project20",
    technologies: ["WordPress", "Case Studies", "Portfolio", "Analytics"]
  },
  {
    id: 21,
    title: "Pet Care Services",
    description: "Pet care business website with service booking, pet profiles, and care tracking system.",
    imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project21",
    technologies: ["WordPress", "Booking System", "Pet Profiles", "Care Tracking"]
  },
  {
    id: 22,
    title: "Interior Design Studio",
    description: "Design studio website with project galleries, design process, and consultation booking system.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1958&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project22",
    technologies: ["WordPress", "Portfolio Gallery", "Booking System", "Before/After"]
  },
  {
    id: 23,
    title: "Software Development Company",
    description: "Tech company website with service offerings, technology stack, and project case studies.",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project23",
    technologies: ["WordPress", "Tech Stack", "Case Studies", "Team Profiles"]
  },
  {
    id: 24,
    title: "Beauty Salon Website",
    description: "Beauty salon with service menus, staff profiles, appointment booking, and beauty tips blog.",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project24",
    technologies: ["WordPress", "Booking System", "Service Menu", "Beauty Blog"]
  },
  {
    id: 25,
    title: "Financial Advisory Firm",
    description: "Financial services website with advisor profiles, service descriptions, and consultation scheduling.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project25",
    technologies: ["WordPress", "Advisor Profiles", "Financial Tools", "Secure Forms"]
  },
  {
    id: 26,
    title: "Event Management Company",
    description: "Event planning website with service packages, event galleries, and planning consultation forms.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project26",
    technologies: ["WordPress", "Event Gallery", "Package Display", "Planning Forms"]
  },
  {
    id: 27,
    title: "Dental Practice Website",
    description: "Dental clinic website with services, staff profiles, appointment booking, and patient education resources.",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project27",
    technologies: ["WordPress", "Appointment Booking", "Patient Portal", "Education Resources"]
  },
  {
    id: 28,
    title: "Accounting Services Website",
    description: "CPA firm website with service descriptions, tax resources, and client portal for document sharing.",
    imageUrl: "https://images.unsplash.com/photo-1554224154-26032fced8bd?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project28",
    technologies: ["WordPress", "Client Portal", "Document Sharing", "Tax Resources"]
  },
  {
    id: 29,
    title: "Consulting Firm Portal",
    description: "Business consulting website with expertise areas, client success stories, and consultation booking.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project29",
    technologies: ["WordPress", "Success Stories", "Expertise Areas", "Consultation Forms"]
  },
  {
    id: 30,
    title: "Bakery & Cafe Website",
    description: "Local bakery website with menu displays, online ordering, catering services, and location information.",
    imageUrl: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2002&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project30",
    technologies: ["WordPress", "Online Ordering", "Menu Display", "Location Info"]
  },
  {
    id: 31,
    title: "Gaming Community Platform",
    description: "Gaming community website with forums, tournament management, player profiles, and news updates.",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project31",
    technologies: ["WordPress", "Forum Integration", "Tournament System", "Player Profiles"]
  },
  {
    id: 32,
    title: "Agricultural Business Site",
    description: "Farm and agriculture business website with product catalogs, farming techniques, and equipment sales.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
    livePreviewUrl: "https://example.com/project32",
    technologies: ["WordPress", "Product Catalog", "Farming Resources", "Equipment Sales"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: "easeOut",
    },
  },
};

export default function FeaturedProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Navbar */}
      <Navbar />

      {/* Home Icon in Top-Left */}
      <div className="fixed top-3 left-4 sm:top-6 sm:left-6 z-50">
        <motion.div
          className="group relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={() => (window.location.href = "/")}
            className="p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-600/30 hover:bg-gray-700/80 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </motion.button>

          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg border border-gray-600/30 whitespace-nowrap">
              Back to Home
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pt-16 sm:pt-20 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            variants={itemVariants}
          >
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-8 mt-8 sm:mt-10 lg:mt-14">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1>
            <p className="text-xs sm:text-base lg:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Explore my latest work and creative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 gap-y-4 justify-items-center"
            variants={containerVariants}
          >
            {allProjectsData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
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
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}