 

import React from "react";

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 text-center md:text-left">
            — Behind the scenes —
          </p>
          <h2 className="text-4xl font-serif text-center md:text-left text-gray-900 mt-2 mb-6">
            The Team
          </h2>
          <p className="text-gray-700 text-center md:text-left leading-relaxed">
            For a truly memorable dining experience, cuisine and atmosphere are
            paired as thoughtfully as food and wine. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco. Quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et
            dolorum fuga. Nam libero.
          </p>
          <div className="mt-8 text-center md:text-left">
            <button className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 font-semibold tracking-widest uppercase text-sm">
              Find More
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://matchthemes.com/demohtml/caverta/images/home/home-team-1.jpg"  
            alt="Team 1"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <img
            src="https://matchthemes.com/demohtml/caverta/images/home/home-team-2.jpg" 
            alt="Team 2"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
