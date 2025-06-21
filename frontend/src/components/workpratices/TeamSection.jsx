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

      {/* Team Members Section */}
      <div className="container mx-auto px-4 mt-16">
        <h3 className="text-2xl font-serif text-center text-gray-900 mb-12">
          Meet Our Culinary Experts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 - Head Chef */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Head Chef"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold">Marco Russo</h4>
            <p className="text-gray-600">Head Chef</p>
            <p className="text-gray-500 text-sm mt-2">
              With 15 years of culinary experience, Marco brings authentic Italian flavors to every dish.
            </p>
          </div>

          {/* Team Member 2 - Pastry Chef */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Pastry Chef"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold">Sophie Laurent</h4>
            <p className="text-gray-600">Pastry Chef</p>
            <p className="text-gray-500 text-sm mt-2">
              Trained in Paris, Sophie creates desserts that are both visually stunning and delicious.
            </p>
          </div>

          {/* Team Member 3 - Sommelier */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1560256608-43f0b6f7588e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Sommelier"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold">James Wilson</h4>
            <p className="text-gray-600">Sommelier</p>
            <p className="text-gray-500 text-sm mt-2">
              Our wine expert who can perfectly pair any dish with selections from our extensive cellar.
            </p>
          </div>

          {/* Team Member 4 - Restaurant Manager */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Restaurant Manager"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold">Elena Rodriguez</h4>
            <p className="text-gray-600">Restaurant Manager</p>
            <p className="text-gray-500 text-sm mt-2">
              Ensures every guest receives exceptional service and a memorable dining experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;