import React from 'react'
import { NavLink } from 'react-router-dom'

const RightImage = ({ src = [], title, para, links = [] }) => {
  return (
    <div className="max-w-7xl mx-auto mb-10 px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
        
        {/* Text Content */}
        <div className="w-full lg:w-4/12 pt-5 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-gray-500 text-lg">{para}</p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-5">
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className="text-blue-600 hover:underline no-underline"
              >
                {item.data}
              </NavLink>
            ))}
          </div>

          {/* Additional Images */}
          <div className="flex flex-wrap gap-4 mt-4">
            {src.slice(1).map((item, index) => (
              <img
                key={index}
                src={`/images/${item}`}
                alt="image"
                className="w-24 h-24 object-cover rounded-md shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="w-full lg:w-7/12">
          <img
            src={`/images/${src[0]}`}
            alt="image"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  )
}

export default RightImage
