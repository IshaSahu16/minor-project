"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About the Project */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-[#3466FF] px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>About the Project</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="text-center mb-8  md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-semibold leading-tight">
            <motion.span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #15285F, #3466ff)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Truth-First
            </motion.span>
            <span className="text-[#021241]"> Future Using Tech</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-l-4 border-l-red-400 cursor-pointer"
            whileHover={{
              boxShadow:
                "0 10px 40px rgba(248, 113, 113, 0.15), inset 0 0 20px rgba(248, 113, 113, 0.1)",
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            style={{
              transformOrigin: "center",
            }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <motion.div
                  className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </motion.div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize access to truth by providing accurate and
                  reliable fact-checking powered by machine learning model
                  algorithms and tools.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-l-4 border-l-green-400 cursor-pointer"
            whileHover={{
              boxShadow:
                "0 10px 40px rgba(74, 222, 128, 0.15), inset 0 0 20px rgba(74, 222, 128, 0.1)",
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            style={{
              transformOrigin: "center",
            }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <motion.div
                  className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </motion.div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where every piece of information is instantly
                  verifiable, where truth is accessible to all, and where
                  misinformation cannot thrive.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Future Scope Card  */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-l-4 border-l-yellow-400 cursor-pointer"
          whileHover={{
            boxShadow:
              "0 10px 40px rgba(251, 191, 36, 0.15), inset 0 0 20px rgba(251, 191, 36, 0.1)",
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          style={{
            transformOrigin: "center",
          }}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <motion.div
                className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </motion.div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Future Scope
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The model can evolve to detect fake news across languages and
                formats, integrate with social media platforms, and utilize
                the data for enhanced accuracy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
