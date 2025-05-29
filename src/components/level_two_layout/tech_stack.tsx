"use client"

import { motion } from "framer-motion"

export default function TechStack() {
  // Tech stack logos and names
  const techStack = [
    { name: "NextJS", logo: "/tech_stack/nextjs.png" },
    { name: "TailwindCSS", logo: "/tech_stack/tailwind.png" },
    { name: "Typescript", logo: "/tech_stack/typescript.png" },
    { name: "NodeJS", logo: "/tech_stack/nodejs.png" },
    { name: "Framer", logo: "/tech_stack/framer.png" },
    { name: "Google Colab", logo: "/tech_stack/colab.png" },
    { name: "Python", logo: "/tech_stack/python.png" },
    { name: "Flask", logo: "/tech_stack/flask.png" },
    { name: "Pandas", logo: "/tech_stack/pandas.png" },
    { name: "NumPy", logo: "/tech_stack/numpy.png" },
    { name: "Matpltlin", logo: "/tech_stack/matplotlib.png" },
    { name: "Seaborn", logo: "/tech_stack/seaborn.png" },
    { name: "Scikit Learn", logo: "/tech_stack/scikitlearn.png" },
  ]

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack]

  return (
    <section className="py-3 md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* Infinite Scrolling Tech Stack */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#ebf0ff] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#ebf0ff] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-6 my-3"
              animate={{
                x: [0, -100 * techStack.length],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ width: `${100 * duplicatedTechStack.length}px` }}
            >
              {duplicatedTechStack.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center relative bg-[#f9fbff] shadow-lg shadow-blue-100/50"
                  >
                    {/* Inner container for logo */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain" />
                    </motion.div>

                    {/* Subtle glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
