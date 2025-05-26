"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-[#021241]">
                Newsify
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/about"
                className="text-[#021241] hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/how-it-works"
                className="text-[#021241] hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/faq"
                className="text-[#021241] hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.72032 3.72015C3.86094 3.5797 4.05157 3.50081 4.25032 3.50081C4.44907 3.50081 4.63969 3.5797 4.78032 3.72015L8.00032 6.94015L11.2203 3.72015C11.289 3.64646 11.3718 3.58736 11.4638 3.54637C11.5558 3.50538 11.6551 3.48334 11.7558 3.48156C11.8565 3.47978 11.9565 3.49831 12.0499 3.53603C12.1433 3.57375 12.2281 3.62989 12.2993 3.70111C12.3706 3.77233 12.4267 3.85717 12.4644 3.95055C12.5021 4.04394 12.5207 4.14397 12.5189 4.24467C12.5171 4.34538 12.4951 4.44469 12.4541 4.53669C12.4131 4.62869 12.354 4.71149 12.2803 4.78015L9.06032 8.00015L12.2803 11.2202C12.354 11.2889 12.4131 11.3717 12.4541 11.4637C12.4951 11.5557 12.5171 11.655 12.5189 11.7557C12.5207 11.8564 12.5021 11.9564 12.4644 12.0498C12.4267 12.1432 12.3706 12.228 12.2993 12.2992C12.2281 12.3705 12.1433 12.4266 12.0499 12.4643C11.9565 12.502 11.8565 12.5206 11.7558 12.5188C11.6551 12.517 11.5558 12.495 11.4638 12.454C11.3718 12.413 11.289 12.3539 11.2203 12.2802L8.00032 9.06015L4.78032 12.2802C4.63814 12.4127 4.45009 12.4848 4.25579 12.4814C4.06149 12.4779 3.87611 12.3992 3.73869 12.2618C3.60128 12.1244 3.52257 11.939 3.51914 11.7447C3.51571 11.5504 3.58784 11.3624 3.72032 11.2202L6.94032 8.00015L3.72032 4.78015C3.57987 4.63953 3.50098 4.4489 3.50098 4.25015C3.50098 4.0514 3.57987 3.86078 3.72032 3.72015Z"
                    fill="#1F2328"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 2.75C1 2.55109 1.07902 2.36032 1.21967 2.21967C1.36032 2.07902 1.55109 2 1.75 2H14.25C14.4489 2 14.6397 2.07902 14.7803 2.21967C14.921 2.36032 15 2.55109 15 2.75C15 2.94891 14.921 3.13968 14.7803 3.28033C14.6397 3.42098 14.4489 3.5 14.25 3.5H1.75C1.55109 3.5 1.36032 3.42098 1.21967 3.28033C1.07902 3.13968 1 2.94891 1 2.75ZM1 7.75C1 7.55109 1.07902 7.36032 1.21967 7.21967C1.36032 7.07902 1.55109 7 1.75 7H14.25C14.4489 7 14.6397 7.07902 14.7803 7.21967C14.921 7.36032 15 7.55109 15 7.75C15 7.94891 14.921 8.13968 14.7803 8.28033C14.6397 8.42098 14.4489 8.5 14.25 8.5H1.75C1.55109 8.5 1.36032 8.42098 1.21967 8.28033C1.07902 8.13968 1 7.94891 1 7.75ZM1.75 12C1.55109 12 1.36032 12.079 1.21967 12.2197C1.07902 12.3603 1 12.5511 1 12.75C1 12.9489 1.07902 13.1397 1.21967 13.2803C1.36032 13.421 1.55109 13.5 1.75 13.5H14.25C14.4489 13.5 14.6397 13.421 14.7803 13.2803C14.921 13.1397 15 12.9489 15 12.75C15 12.5511 14.921 12.3603 14.7803 12.2197C14.6397 12.079 14.4489 12 14.25 12H1.75Z"
                    fill="#1F2328"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
