import React from "react";

const Dinners = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center"
   style={{
  backgroundImage:
    "url('https://matchthemes.com/demohtml/caverta/images/blog/blog9.jpg')",
}}

    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white">
        <p className="text-sm uppercase tracking-widest mb-2">
          — Now Booking —
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light">
          Private Dinners & Happy Hours
        </h2>
      </div>
    </section>
  );
};

export default Dinners;
