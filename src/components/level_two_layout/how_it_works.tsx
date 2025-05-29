"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="relative pt-18 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Blue bg */}
      <div
        className="absolute inset-0 bg-[#D6E4FF]"
        style={{ height: "70%" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* How It Works */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#EAF0FF] text-[#3466FF] px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
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
            <span>How It Works</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-semibold">
            <span className="text-[#021241]">Behind the </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #15285F, #3466ff)",
              }}
            >
              Detection
            </span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#706E87] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            From preprocessing the input to model prediction, discover the
            step-by-step magic behind detecting fake news with machine learning.
          </p>
        </motion.div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {/* Step 01 */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative flex flex-col justify-around"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Icon */}
            <div className="flex items-baseline justify-between">
              <div className="mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#3466FF]"
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
                </div>
              </div>

              {/* Large Number */}
              <div className="mb-6">
                <span className="text-6xl sm:text-8xl font-semibold text-[#3466FF] leading-none">
                  01
                </span>
              </div>
            </div>

            {/* Title and Description */}
            <div>
              <h3
                className="sm:text-2xl font-semibold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0a1b4b, #3466ff)",
                }}
              >
                Submit
              </h3>
              <p className="text-[#706E87] text-base">
                Paste your content to begin verification instantly.
              </p>
            </div>
          </motion.div>
          {/* Step 02 */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative flex flex-col justify-around"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Icon */}
            <div className="flex items-baseline justify-between">
              <div className="mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#3466FF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              </div>

              {/* Large Number */}
              <div className="mb-6">
                <span className="text-6xl sm:text-8xl font-semibold text-[#3466FF] leading-none">
                  02
                </span>
              </div>
            </div>

            {/* Title and Description */}
            <div>
              <h3
                className="sm:text-2xl font-semibold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0a1b4b, #3466ff)",
                }}
              >
                Analyze
              </h3>
              <p className="text-[#706E87] text-base">
                Our ML model thoroughly analyzes the submitted content.
              </p>
            </div>
          </motion.div>
          {/* Step 03  */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative flex flex-col justify-around"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Icon */}
            <div className="flex items-baseline justify-between">
              <div className="mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#3466FF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Large Number */}
              <div className="mb-6">
                <span className="text-6xl sm:text-8xl font-semibold text-[#3466FF] leading-none">
                  03
                </span>
              </div>
            </div>

            {/* Title and Description */}
            <div>
              <h3
                className="sm:text-2xl font-semibold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0a1b4b, #3466ff)",
                }}
              >
                Result
              </h3>
              <p className="text-[#706E87] text-base">
                Receive an instant and accurate verification result.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
