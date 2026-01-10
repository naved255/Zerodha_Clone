import React from 'react'

const Stats = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Content */}
        <div className="lg:col-span-6">
          <h1 className="text-3xl font-semibold">
            Trust with confidence
          </h1>

          <div className="mt-8 space-y-6 lg:w-2/3">

            <div>
              <h2 className="text-lg font-semibold">
                Customer-first always
              </h2>
              <p className="text-gray-500 mt-1">
                That's why 13+ crore customers trust Zerodha with
                ₹3.5+ lakh crores worth of equity investments.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                No spam or gimmicks
              </h2>
              <p className="text-gray-500 mt-1">
                No gimmicks, spam, gamification, or annoying push notifications.
                High quality apps that you use at your pace.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                The Zerodha universe
              </h2>
              <p className="text-gray-500 mt-1">
                Not just an app, but a whole ecosystem. Our investments in
                30+ fintech startups offer tailored services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Do better with money
              </h2>
              <p className="text-gray-500 mt-1">
                With initiatives like Nudge and Kill Switch, we actively help
                you do better with your money.
              </p>
            </div>

          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:col-span-6 text-center">
          <img
            src="images/ecosystem.png"
            alt="ecosystem"
            className="mx-auto w-full max-w-md"
          />

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              Explore our products →
            </a>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              Try Kite demo →
            </a>
          </div>

          
        </div>

      </div>
    </div>
  )
}

export default Stats
