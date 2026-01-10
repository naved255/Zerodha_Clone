import React from 'react'

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto mt-40 mb-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="images/education.svg"
            alt="Education"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-3xl font-semibold mb-6">
            Free and open market education
          </h1>

          <div className="mb-6">
            <p className="text-gray-500 mb-2">
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              Varsity →
            </a>
          </div>

          <div className="mb-6">
            <p className="text-gray-500 mb-2">
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              Varsity →
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education
