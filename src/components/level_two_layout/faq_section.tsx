"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What does this project do?",
      answer:
        "It analyzes news content to detect whether the news is fake or real using a trained detection model.",
    },
    {
      question: "Is this tool free to use?",
      answer:
        "Yes, it is completely free as a student project designed to help users identify fake news easily.",
    },
    {
      question: "Can this tool improve media literacy?",
      answer:
        "Yes, by detecting fake news, it educates users on misinformation, fostering smarter and more informed news consumption habits.",
    },
    {
      question: "Does it work on mobile devices?",
      answer:
        "Absolutely! The tool is fully responsive and works smoothly on all modern smartphones and tablets.",
    },
    {
      question: "Is technical knowledge required to use the tool?",
      answer:
        "No, the tool is designed to be user-friendly and accessible for users without technical expertise.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#EDF2FF] py-12 md:pt-16 md:pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-blue-100 text-[#3466FF] px-4 py-2 rounded-full text-sm font-medium border border-blue-200 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent pb-1"
            style={{
              backgroundImage: "linear-gradient(to right, #0a1b4b, #3466ff)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know
          </motion.h2>

          <motion.p
            className="text-base text-[#706E87] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Learn how our system detects misinformation and helps you verify
            content authenticity.
          </motion.p>
        </motion.div>

        {/* FAQ's */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.button
                className="w-full px-6 py-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-[#3466FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="px-6 pb-5"
                    >
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
