import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#EDF2FF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Newsify</h2>
        </div>

        {/* Main Navigation Links */}
        <div className="mb-8">
          <nav className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Detection
            </Link>
            <Link href="/faq" className="hover:text-gray-900 transition-colors">
              FAQ
            </Link>
            <Link href="/" className="hover:text-gray-900 transition-colors">
              How It Works
            </Link>
          </nav>
        </div>

        <div className="mb-10">
          <nav className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            A student project initiative built with purpose
          </nav>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-gray-500 text-sm">© 2025 Newsify - Copyright.</p>
        </div>
      </div>
    </footer>
  )
}
