import React from "react";
import { NavLink } from "react-router-dom";

const LeftImage = ({ src = [], title, para, links = [] }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        
        {/* Image Section */}
        <div className="w-full lg:w-7/12">
          <img
            src={`/images/${src[0]}`}
            alt={title}
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-5/12 flex flex-col gap-5 text-center lg:text-left">
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {title}
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {para}
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className="text-blue-600 font-medium hover:underline underline-offset-4"
              >
                {item.data}
              </NavLink>
            ))}
          </div>

          {/* Secondary Images */}
          {src.length > 1 && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              {src.slice(1).map((item, index) => (
                <img
                  key={index}
                  src={`/images/${item}`}
                  alt="product"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeftImage;

