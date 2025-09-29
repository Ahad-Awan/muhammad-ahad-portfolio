"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  livePreviewUrl: string;
  technologies: string[];
}

export function ProjectCard({ title, description, imageUrl, livePreviewUrl, technologies }: ProjectCardProps) {
  return (
    <div className="w-full" style={{margin: '0', padding: '0'}}>
      <CardContainer 
        className="inter-var !mb-0 !mt-0 sm:mb-auto sm:mt-auto" 
        containerClassName="!py-8 sm:!py-4 md:!py-8 lg:!py-12"
        
      >
      <CardBody className="relative group/card dark:hover:shadow-lg dark:hover:shadow-[#06B2CF]/[0.1] border-[#06B2CF]/[0.3] w-full max-w-md h-auto rounded-xl p-4 sm:p-6 border">
        <CardItem translateZ="100" className="w-full mb-4">
          <img
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-44 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mb-1 sm:mb-2"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300 mb-3 sm:mb-4"
        >
          {description}
        </CardItem>
        
        {/* Technologies Pills */}
        <CardItem translateZ={30} className="mb-4 sm:mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardItem>
        
        <div className="flex justify-end items-center">
          <CardItem
            translateZ={20}
            as={motion.a}
            href={livePreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow-sm shadow-blue-500/25 transition-all duration-300 relative overflow-hidden cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              Live Preview
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
  );
}
