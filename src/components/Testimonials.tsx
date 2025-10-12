"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Working with this team was an absolute pleasure. They built my website beyond expectations — fast, modern, and beautiful!",
      name: "Sarah Johnson",
      designation: "Founder, Island Escapes",
      src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "Their attention to detail and commitment to quality is unmatched. My online store’s conversion rate skyrocketed!",
      name: "Mark Thompson",
      designation: "CEO, FitGear Co.",
      src: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "Highly professional and easy to work with. The animations and smooth design really set my brand apart!",
      name: "Emma Brown",
      designation: "Travel Blogger",
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20" id="reviews">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-2"
          variants={itemVariants}
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xs sm:text-base lg:text-xl text-gray-300 max-w-2xl mx-auto px-4 mt-6 mb-10 sm:mb-30 sm:mt-10">
            Real feedback from real people we’ve worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -60, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover shadow-lg"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-semibold text-[#014F86] dark:text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400">
                {testimonials[active].designation}
              </p>

              <motion.p className="mt-6 text-lg text-gray-700 dark:text-neutral-300 leading-relaxed">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.015 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            {/* Controls */}
            <div className="flex gap-4 mt-10">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-transparent border dark:hover:shadow-lg dark:hover:shadow-[#06B2CF]/[0.1] border-[#06B2CF]/[0.3] transition-all"
              >
                <IconArrowLeft className="h-5 w-5  text-white transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-transparent border dark:hover:shadow-lg dark:hover:shadow-[#06B2CF]/[0.1] border-[#06B2CF]/[0.3] transition-all"
              >
                <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
