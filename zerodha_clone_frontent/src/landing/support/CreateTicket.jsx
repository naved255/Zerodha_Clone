import React from "react";

const CreateTicket = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Support Portal
          </h1>

          <button className="self-start sm:self-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-lg transition">
            My ticket
          </button>
        </div>

        {/* Search Box */}
        <div className="flex items-center bg-white rounded-md shadow-sm overflow-hidden">
          <span className="px-4 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              viewBox="0 -960 960 960"
              width="22"
              fill="currentColor"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Eg. How do I open my account, How do I activate F&O..."
            className="w-full py-3 pr-4 text-base outline-none placeholder-gray-400"
          />
        </div>

      </div>
    </section>
  );
};

export default CreateTicket;
