"use client";
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="pt-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div 
          className="inline-flex items-center space-x-2 border border-blue-200 bg-[#e8eeff]  text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </motion.svg>
          <span>ML-Powered Verification</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #15285F, #3466ff)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Detect and Stop Fake News
          <br />
          Before It Spreads
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {"Don't Let Fake News Fool You — "}
          <span className="text-blue-600 font-semibold">Detect It Now</span>
        </motion.p>

        {/* Warning Banner */}
        <motion.div 
          className="mt-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="bg-yellow-100 border border-[#FFDC51] rounded-lg py-4 px-6 md:px-24 flex items-center md:space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#924032] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </motion.svg>
            <p className="text-[#924032] text-sm sm:text-base">
              {
                "Don't let misinformation shape your worldview. Verify before you share."
              }
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}