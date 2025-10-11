"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope, FaTiktok } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_r5gw7te", "template_00m8zsq", form, "UarXK4uvaHrQWIL9z")
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });

          setTimeout(() => {
            setSuccess("");
          }, 5000);
        },
        (error) => {
          setLoading(false);
          setSuccess("Failed to send message. Try again.");
          console.error(error);

          setTimeout(() => {
            setSuccess("");
          }, 3000);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 sm:py-20 text-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-2 sm:px-4 mt-4 sm:mt-6 mb-6 sm:mb-10">
            Ready to start your next project? Let’s connect and make something
            amazing.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Contact Info */}
          <motion.div
            className="rounded-xl border border-[#06B2CF]/[0.3] p-6 sm:p-8 shadow-xl flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-5 sm:mb-6">
              Get in Touch
            </h3>

            <ul className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: <FaEnvelope className="text-blue-400 w-6 h-6" />,
                  href: "mailto:muhammadahad3813@gmail.com",
                  label: "muhammadahad3813@gmail.com",
                },
                {
                  icon: <FaLinkedin className="text-blue-600 w-6 h-6" />,
                  href: "https://www.linkedin.com/in/muhammad-ahad1/",
                  label: "linkedin.com/in/muhammad-ahad1",
                },
                {
                  icon: <FaGithub className="w-6 h-6" />,
                  href: "https://github.com/Ahad-Awan",
                  label: "github.com/Ahad-Awan",
                },
                {
                  icon: <FaTiktok className="w-6 h-6" />,
                  href: "https://www.tiktok.com/@yourtiktokusername",
                  label: "@yourtiktokusername",
                },
                {
                  icon: <SiFiverr className="w-6 h-6" />,
                  href: "https://www.fiverr.com/yourfiverrprofile",
                  label: "Fiverr Profile",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 px-4 py-3 sm:py-4 rounded-xl border border-transparent hover:border-[#06B2CF]/[0.3] hover:shadow-lg hover:shadow-[#06B2CF]/20 transition-all duration-300"
                >
                  {item.icon}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-lg md:text-xl hover:text-[#06B2CF] break-words"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="rounded-xl border border-[#06B2CF]/[0.3] p-6 sm:p-8 shadow-xl flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
              Ready to Launch?
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6">
              Let’s collaborate and transform your vision into something
              extraordinary.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 bg-transparent rounded-xl border border-[#06B2CF]/[0.3] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06B2CF]/[0.3]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 bg-transparent rounded-xl border border-[#06B2CF]/[0.3] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06B2CF]/[0.3]"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 sm:p-4 bg-transparent rounded-xl border border-[#06B2CF]/[0.3] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06B2CF]/[0.3]"
                required
              />

              <motion.button
                type="submit"
                disabled={loading}
                className="group w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-sm shadow-blue-500/25 transition-all duration-300 relative overflow-hidden cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? "Sending..." : "Start a Project"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              {/* Success / Error Message */}
              <AnimatePresence>
                {success && (
                  <motion.p
                    className="mt-2 text-green-400 text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {success}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
