import React from "react";
import { Link } from "react-router-dom";

const Dinning = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-4 py-12">
      {/* Left Image */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <img
          src="https://matchthemes.com/demohtml/caverta/images/home/welcome-1.jpg"
          alt="Left food"
          className="w-full h-auto object-cover rounded"
        />
      </div>

      {/* Center Content */}
      <div className="w-full md:w-2/4 text-center px-6">
        <p className="uppercase text-gray-400 tracking-widest mb-2">
          — Welcome —
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-6">
          Dining at Caverta
        </h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          For a truly memorable dining experience, cuisine and atmosphere are
          paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum
          fuga. Nam libero.
        </p>
        <Link to="/reservation">
          <button className="bg-blue-200 text-gray-900 px-6 py-3 font-semibold rounded hover:bg-blue-300 transition">
            Book a Table
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/4 mt-6 md:mt-0">
        <img
          src="https://matchthemes.com/demohtml/caverta/images/home/welcome-2.jpg"
          alt="Right food"
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </div>
  );
};

export default Dinning;
