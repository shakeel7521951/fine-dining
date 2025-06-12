
const Footer = () => {
  return (
    <footer className="bg-black text-white py-26 px-6 md:px-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-15 text-sm text-gray-300">
        {/* Brand Info */}
        <div>
          <h2 className="text-white text-2xl font-serif font-semibold tracking-wider">CAVERTA</h2>
          <p className="italic text-gray-400 mb-4">fine dining</p>
          <p>
            For a truly memorable dining experience reserve in advance a table
            as soon as you can. Come and taste our remarkable food and wine.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wide mb-4">Address</h3>
          <p>58 Ralph Ave</p>
          <p>New York, New York 1111</p>
          <p className="mt-2">P: +1 800 000 111</p>
          <p>E: contact@example.com</p>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wide mb-4">Hours</h3>
          <p>Monday – Sunday</p>
          <p>Lunch: 12PM – 2PM</p>
          <p>Dinner: 6PM – 10PM</p>
          <p className="mt-2">Happy Hours: 4PM – 6PM</p>
        </div>

        {/* More Info */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wide mb-4">More Info</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Get in Touch</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
