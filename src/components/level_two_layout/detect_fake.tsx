"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

type AnalysisResult = {
  isReal: boolean;
  confidence?: number;
  message: string;
};

export default function DetectFake() {
  const [newsContent, setNewsContent] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsContent.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    // Simulate API call - replace with actual ML model integration later
    setTimeout(() => {
      // Mock result - you can replace this with actual API call
      const mockResult: AnalysisResult = {
        isReal: Math.random() > 0.5, // Random for demo
        confidence: Math.floor(Math.random() * 30) + 70, // 70-100%
        message:
          Math.random() > 0.5
            ? "This content has been verified against trusted sources"
            : "This content shows signs of misinformation and cannot be verified",
      };

      setResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const resetAnalysis = () => {
    setResult(null);
    setNewsContent("");
  };

  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-18 md:py-22">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#021241]">
            Detect the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #0a1b4b, #3466ff)",
              }}
            >
              Truth
            </span>
          </h1>
          <p className="text-base md:text-lg text-[#706E87] max-w-3xl mx-auto leading-relaxed">
            Enter any news article and let our intelligent machine learning
            model analyze the text to uncover truth, expose misinformation, and
            keep you accurately informed.
          </p>
        </motion.div>

        {/* Input Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-text">
              Check News Content
            </h2>
            <p className="text-secondary-text">
              Paste news content to verify its authenticity using our ML model.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <textarea
                value={newsContent}
                onChange={(e) => setNewsContent(e.target.value)}
                placeholder="Paste the news content here..."
                className="w-full h-32 sm:h-40 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-secondary-text placeholder-gray-400"
                disabled={isAnalyzing}
              />
            </div>

            <button
              type="submit"
              disabled={!newsContent.trim() || isAnalyzing}
              className="w-full bg-primary hover:bg-primary-dark text-white py-4 px-6 rounded-lg font-medium text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed gap-1"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_39_2005)">
                  <path
                    d="M8.46967 4.96967C8.17678 5.26256 8.17678 5.73744 8.46967 6.03033L9.93934 7.5L8.46967 8.96967C8.17678 9.26256 8.17678 9.73744 8.46967 10.0303C8.76256 10.3232 9.23744 10.3232 9.53033 10.0303L11.5303 8.03033C11.8232 7.73744 11.8232 7.26256 11.5303 6.96967L9.53033 4.96967C9.23744 4.67678 8.76256 4.67678 8.46967 4.96967Z"
                    fill="#FFFF"
                  />
                  <path
                    d="M6.53033 6.03033C6.82322 5.73744 6.82322 5.26256 6.53033 4.96967C6.23744 4.67678 5.76256 4.67678 5.46967 4.96967L3.46967 6.96967C3.17678 7.26256 3.17678 7.73744 3.46967 8.03033L5.46967 10.0303C5.76256 10.3232 6.23744 10.3232 6.53033 10.0303C6.82322 9.73744 6.82322 9.26256 6.53033 8.96967L5.06066 7.5L6.53033 6.03033Z"
                    fill="#FFFF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2465 13.3072C10.9536 14.3652 9.30095 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.30095 14.3652 10.9536 13.3072 12.2465L15.7803 14.7197C16.0732 15.0126 16.0732 15.4874 15.7803 15.7803C15.4874 16.0732 15.0126 16.0732 14.7197 15.7803L12.2465 13.3072ZM1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5C13.5 9.08239 12.8874 10.5217 11.8865 11.5937C11.8267 11.6269 11.7704 11.6689 11.7197 11.7197C11.6689 11.7704 11.6269 11.8267 11.5937 11.8865C10.5217 12.8874 9.08239 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5Z"
                    fill="#FFFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_39_2005">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>{isAnalyzing ? "Analyzing..." : "Check News"}</span>
            </button>
          </form>
        </motion.div>

        {/* Loading */}
        {isAnalyzing && (
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-secondary-text">
              Analyzing content with our ML model...
            </p>
          </motion.div>
        )}

        {/* Result */}
        {result && !isAnalyzing && (
          <motion.div
            className={`rounded-2xl shadow-lg p-8 text-center text-white ${
              result.isReal
                ? "bg-gradient-to-br from-green-500 to-green-600"
                : "bg-gradient-to-br from-red-500 to-red-600"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              {/* Icon */}
              <div className="flex justify-center">
                {result.isReal ? (
                  <div className="bg-white/20 rounded-full p-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_39_1969)">
                        <path
                          d="M11.4812 6.25551C11.4846 6.44981 11.4125 6.63785 11.28 6.78003L7.78 10.28C7.63937 10.4205 7.44875 10.4994 7.25 10.4994C7.05125 10.4994 6.86062 10.4205 6.72 10.28L4.72 8.28003C4.58752 8.13785 4.5154 7.94981 4.51882 7.75551C4.52225 7.56121 4.60096 7.37582 4.73838 7.23841C4.87579 7.10099 5.06118 7.02228 5.25548 7.01885C5.44978 7.01543 5.63782 7.08755 5.78 7.22003L7.25 8.69003L10.22 5.72003C10.3622 5.58755 10.5502 5.51543 10.7445 5.51885C10.9388 5.52228 11.1242 5.60099 11.2616 5.73841C11.399 5.87582 11.4777 6.06121 11.4812 6.25551Z"
                          fill="#FFFF"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569ZM12.5962 12.5962C13.8152 11.3772 14.5 9.72391 14.5 8C14.5 6.27609 13.8152 4.62279 12.5962 3.40381C11.3772 2.18482 9.72391 1.5 8 1.5C6.27609 1.5 4.62279 2.18482 3.40381 3.40381C2.18482 4.62279 1.5 6.27609 1.5 8C1.5 9.72391 2.18482 11.3772 3.40381 12.5962C4.62279 13.8152 6.27609 14.5 8 14.5C9.72391 14.5 11.3772 13.8152 12.5962 12.5962Z"
                          fill="#FFFF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_39_1969">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                ) : (
                  <div className="bg-white/20 rounded-full p-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_39_2171)">
                        <path
                          d="M6.03033 4.96967C5.73744 4.67678 5.26256 4.67678 4.96967 4.96967C4.67678 5.26256 4.67678 5.73744 4.96967 6.03033L6.93934 8L4.96967 9.96967C4.67678 10.2626 4.67678 10.7374 4.96967 11.0303C5.26256 11.3232 5.73744 11.3232 6.03033 11.0303L8 9.06066L9.96967 11.0303C10.2626 11.3232 10.7374 11.3232 11.0303 11.0303C11.3232 10.7374 11.3232 10.2626 11.0303 9.96967L9.06066 8L11.0303 6.03034C11.3232 5.73744 11.3232 5.26257 11.0303 4.96968C10.7374 4.67678 10.2626 4.67678 9.96967 4.96968L8 6.93934L6.03033 4.96967Z"
                          fill="#FFFF"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.34315 2.34315C-0.781049 5.46734 -0.781049 10.5327 2.34315 13.6569C5.46734 16.781 10.5327 16.781 13.6569 13.6569C16.781 10.5327 16.781 5.46734 13.6569 2.34315C10.5327 -0.781049 5.46734 -0.781049 2.34315 2.34315ZM3.40381 12.5962C0.865398 10.0578 0.865398 5.94221 3.40381 3.40381C5.94221 0.865398 10.0578 0.865398 12.5962 3.40381C15.1346 5.94221 15.1346 10.0578 12.5962 12.5962C10.0578 15.1346 5.94221 15.1346 3.40381 12.5962Z"
                          fill="#FFFF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_39_2171">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                )}
              </div>

              {/* Result Text */}
              <div className="space-y-2">
                <h3 className="text-4xl sm:text-5xl font-bold">
                  {result.isReal ? "REAL" : "FAKE"}
                </h3>
                <p className="text-lg sm:text-xl opacity-90">
                  {result.message}
                </p>
              </div>

              {/* delete text btn */}
              <button
                onClick={resetAnalysis}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Check Another Article
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
