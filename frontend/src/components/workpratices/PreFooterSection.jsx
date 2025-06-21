const PreFooterSection = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            Stay Updated with Our Special Offers
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive dining experiences, seasonal menus, and special events.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto sm:max-w-xl">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            />
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-serif text-gray-900 mb-6">
              Experience Exceptional Dining
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Reservation guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Exclusive member deals</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No spam, ever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterSection;