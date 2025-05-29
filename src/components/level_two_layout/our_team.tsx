"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OurTeam() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Team members data 
  const teamMembers = [
    {
      id: 1,
      name: "Isha Sahu",
      role: "Frontend Developer & UI/UX Designer",
      image: "/team/isha.jpg",
      social: {
        twitter: "https://x.com/IshaSahu_21",
        linkedin: "https://www.linkedin.com/in/ishasahu07/",
        email: "mailto:ishasahu.2004@gmail.com",
      },
    },
    {
      id: 2,
      name: "Aayushi Sharma",
      role: "ML & Backend Developer",
      image: "/team/aayushi.jpg",
      social: {
        twitter: "https://x.com/Aayushi45495966",
        linkedin: "https://www.linkedin.com/in/aayushi-sharma-b22726254/",
        email: "mailto:aayushisharma19799908@gmail.com",
      },
    },
    {
      id: 3,
      name: "Chanchal Choudhary",
      role: "Research & Documentation",
      image: "/team/chanchal.png",
      social: {
        twitter: "https://x.com/chanchal_128",
        linkedin: "http://www.linkedin.com/in/chanchal-choudhary-885b10250",
        email: "mailto:choudharychanchal1432@gmail.com",
      },
    },
    {
      id: 4,
      name: "Astha Swami",
      role: "Project Coordinator & Report Manager",
      image: "/team/astha.png",
      social: {
        twitter: "https://x.com/astha58298",
        linkedin: "https://www.linkedin.com/in/astha-swami04",
        email: "mailto:asthaswami48@gmail.com",
      },
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-blue-100 text-[#3466FF] px-4 py-2 rounded-full text-sm font-medium border border-blue-200 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span>Minds Behind Project</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="text-gray-900">Meet Our </span>
            <motion.span
            className="bg-clip-text text-transparent"
              style={{
                  backgroundImage:
                    "linear-gradient(to right, #0a1b4b, #3466ff)",
                }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Team
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A diverse group of students passionate about truth, technology, and
            making the world more informed
          </motion.p>
        </motion.div>

        {/* Team Grid  */}
        <div className="flex flex-col gap-14 items-center md:grid grid-cols-1 lg:grid-cols-2 md:gap-12 max-w-full md:max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={member.id}>
              <motion.div
                className="rounded-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex flex-col sm:flex-row space-x-6 gap-5">
                  {/* Member Image */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="w-72 h-64 bg-gray-200">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  {/* Member Info */}
                  <div className="flex flex-col md:justify-center md:items-center md:mt-10">
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        className="text-2xl font-semibold text-[#3466FF] mb-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        className="text-[#021241] text-base mb-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                      >
                        {member.role}
                      </motion.p>

                      {/* Social Media Icons */}
                      <motion.div
                        className="flex space-x-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                      >
                        {/* Twitter/X */}
                        <motion.a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-[#fffcfd] rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-[#fffcfd] rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#3466FF] hover:text-white transition-colors duration-200"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                          href={member.social.email}
                          className="w-10 h-10 bg-[#fffcfd] rounded-lg flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors duration-200"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
