"use client";

import { motion } from "framer-motion";
import { FaWordpress, FaShopify, FaGlobe, FaLaptopCode } from "react-icons/fa";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const services = [
  {
    id: 1,
    icon: <FaWordpress className="text-[#21759B] text-5xl sm:text-6xl" />,
    title: "WordPress Development",
    desc: "Tailored WordPress websites crafted for speed, SEO, and stunning design made to perform and impress.",
  },
  {
    id: 2,
    icon: <FaShopify className="text-[#7AB55C] text-5xl sm:text-6xl" />,
    title: "Shopify Development",
    desc: "Custom Shopify stores built to increase conversions, boost sales, and grow your brand with ease.",
  },
  {
    id: 3,
    icon: <FaGlobe className="text-[#014F86] text-5xl sm:text-6xl" />,
    title: "E-Commerce Solutions",
    desc: "Complete online store setup — from strategy to checkout, designed for performance and scalability.",
  },
  {
    id: 4,
    icon: <FaLaptopCode className="text-[#008080] text-5xl sm:text-6xl" />,
    title: "Custom Business Websites",
    desc: "Modern, responsive websites that reflect your brand and deliver exceptional user experiences.",
  },
] as const;

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

export default function FeaturedServices() {
  return (
    <section
      className="pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative z-10"
      id="featured-services"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-2"
          variants={itemVariants}
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Services
            </span>
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4 mt-6 mb-10 sm:mb-20 sm:mt-10">
            Expert solutions crafted to build, scale, and transform your digital
            presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-y-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`w-full sm:w-1/2 flex ${
                i % 2 === 0 ? "justify-end sm:pr-3" : "justify-start sm:pl-3"
              } justify-center`}
            >
              <CardContainer containerClassName="!py-0">
                <CardBody className="bg-transparent rounded-xl border dark:hover:shadow-lg dark:hover:shadow-[#06B2CF]/[0.1] border-[#06B2CF]/[0.3] transition-all duration-300 p-8 sm:p-10 lg:p-12 flex flex-col items-center text-center w-full max-w-[520px] lg:max-w-[560px] h-auto">
                  {/* Icon */}
                  <CardItem translateZ={40} className="mb-6">
                    {service.icon}
                  </CardItem>

                  {/* Title */}
                  <CardItem translateZ={60}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                  </CardItem>

                  {/* Description */}
                  <CardItem translateZ={40}>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                      {service.desc}
                    </p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
