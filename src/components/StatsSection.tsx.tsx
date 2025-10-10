"use client";

import { useEffect, useState } from "react";
import {
  FaBolt,
  FaPuzzlePiece,
  FaHeart,
  FaPaintBrush,
  FaBullseye,
} from "react-icons/fa";

export default function StatsSection() {
  // ✅ Animated numbers state
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [tech, setTech] = useState(0);

  useEffect(() => {
    // Simple counter animation
    const duration = 2000;
    const steps = 60;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      setYears(Math.min(Math.floor((3 * frame) / steps), 3));
      setProjects(Math.min(Math.floor((12 * frame) / steps), 12));
      setClients(Math.min(Math.floor((8 * frame) / steps), 8));
      setTech(Math.min(Math.floor((10 * frame) / steps), 10));

      if (frame >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-white px-6 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: What Drives Me */}
        <div className="bg-[#171717] p-8 rounded-2xl border dark:hover:shadow-lg dark:hover:shadow-[#06B2CF]/[0.1] border-[#06B2CF]/[0.3] shadow-xl">
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">
            What Drives Me
          </h2>
          <p className="text-gray-300 text-base sm:text-lg text-center mb-8">
            The qualities that define my approach to development
          </p>

          <div className="space-y-6">
            {/* Problem Solver */}
            <div className="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-purple-600/20 hover:scale-[1.02]">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-700 to-purple-800 group-hover:scale-110 transition-transform duration-300">
                <FaPuzzlePiece className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                  Problem Solver
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Breaking down complex challenges into elegant solutions
                </p>
              </div>
            </div>

            {/* Fast Learner */}
            <div className="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-pink-500/20 hover:scale-[1.02]">
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-pink-600 group-hover:scale-110 transition-transform duration-300">
                <FaBolt className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                  Fast Learner
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Always adapting to new technologies and industry trends
                </p>
              </div>
            </div>

            {/* Team Player */}
            <div className="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-600/20 hover:to-orange-500/20 hover:scale-[1.02]">
              <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-orange-600 group-hover:scale-110 transition-transform duration-300">
                <FaHeart className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-pink-400 transition-colors">
                  Team Player
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Collaborative mindset with strong communication skills
                </p>
              </div>
            </div>

            {/* Creative Coder */}
            <div className="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-pink-500/20 hover:scale-[1.02]">
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                <FaPaintBrush className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-indigo-400 transition-colors">
                  Creative Coder
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Blending technical expertise with innovative thinking
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: By The Numbers */}
        <div className="p-8 rounded-2xl border dark:hover:shadow-lg dark:hover:shadow-[#06B2CF]/[0.1] border-[#06B2CF]/[0.3] shadow-xl">
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">
            By The Numbers
          </h2>
          <p className="text-gray-300 text-base sm:text-lg text-center mb-8">
            Milestones that showcase my journey and growth
          </p>

          <div className="grid grid-cols-2 gap-10 mb-8">
            <div className="rounded-xl border dark:hover:shadow-lg dark:hover:shadow-[#06B2CF]/[0.1] border-[#06B2CF]/[0.3] p-6 text-center transform transition-all duration-300 hover:scale-110 hover:border-cyan-400/50">
              <p className="text-3xl font-bold text-cyan-400">{years}+</p>
              <p className="text-gray-400 text-sm mt-1">Years Experience</p>
            </div>

            <div className="rounded-xl border dark:hover:shadow-lg dark:hover:shadow-[#06B2CF]/[0.1] border-[#06B2CF]/[0.3] p-6 text-center transform transition-all duration-300 hover:scale-110 hover:border-pink-400/50">
              <p className="text-3xl font-bold text-pink-400">{projects}+</p>
              <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
            </div>

            <div className="rounded-xl border dark:hover:shadow-lg dark:hover:shadow-[#06B2CF]/[0.1] border-[#06B2CF]/[0.3] p-6 text-center transform transition-all duration-300 hover:scale-110 hover:border-green-400/50">
              <p className="text-3xl font-bold text-green-400">{clients}+</p>
              <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
            </div>

            <div className="rounded-xl border dark:hover:shadow-lg dark:hover:shadow-[#06B2CF]/[0.1] border-[#06B2CF]/[0.3] p-6 text-center transform transition-all duration-300 hover:scale-110 hover:border-orange-400/50">
              <p className="text-3xl font-bold text-orange-400">{tech}+</p>
              <p className="text-gray-400 text-sm mt-1">Technologies</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-xl">
            <FaBullseye className="text-xl text-white" />
            <p className="text-sm text-white">
              Currently focused on building scalable web applications and learn new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
