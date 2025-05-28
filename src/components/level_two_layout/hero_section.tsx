export default function HeroSection() {
  return (
    <section className="pt-16 pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* ML-Powered Badge */}
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>ML-Powered Verification</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight">
          Stop Fake News in
          <br />
          its Tracks Now!
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          {"Don't Let Fake News Fool You — "}
          <span className="text-blue-600 font-semibold">Detect It Now</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-medium min-w-[200px] transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Start Fact Checking
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-full text-lg font-medium min-w-[200px] transition-colors duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
            How it works
          </button>
        </div>

        {/* Warning Banner */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-yellow-800 text-sm sm:text-base">
              {"Don't let misinformation shape your worldview. Verify before you share."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}