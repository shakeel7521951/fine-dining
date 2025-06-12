import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  { name: "Tomato Bruschetta", role: "Tomatoes, Olive Oil, Cheese", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-1.jpg" },
  { name: "Baked Potato Skins", role: "Potatoes, Oil, Garlic", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-2.jpg" },
  { name: "Avocado & Mango Salsa", role: "Avocado, Mango, Tomatoes", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-3.jpg" },
  { name: "Marinated Grilled Shrimp", role: "Fresh Shrimp, Olive Oil, Tomato Sauce", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-4.jpg" }, 
  { name: "Garlic Baked Cheese", role: "Finnish Squeaky Cheese, Eggplant Conserva, Black Pepper", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-3.jpg" },
  { name: "Jambon Iberico", role: "Smoked Tomato Aioli, Idizabal Cheese, Spiced Pine Nuts", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-4.jpg" },
  { name: "Braised Pork Chops", role: "4 bone-in pork chops, olive oil, garlic, onion", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-5.jpg" },
  { name: "Prime Rib", role: "Rib, rosemary, black pepper, red wine", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-6.jpg" },
   { name: "Dr. Adil Haider", role: "Heart Specialist", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-3.jpg" },
  { name: "Dr. Asima Yousaf", role: "Oncology and Internal Medicine", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-4.jpg" },
  { name: "Dr. Minahaj Siraj", role: "ICU", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-5.jpg" },
  { name: "Dr. Samena Jmali", role: "Cardiology", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-7.jpg" },
  { name: "Dr. Javed Akram", role: "Radiation Oncology", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-8.jpg" },
  { name: "Double Chocolate Cupcakes", role: "Chocolate, eggs, vanilla, milk", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-15.jpg" },
   { name: "Pumpkin Cookies Cream Cheese", role: "Pumpkin, sugar, butter, eggs", image: "https://matchthemes.com/demohtml/caverta/images/menu/food-14.jpg" }
];

const Foods = () => { 
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center text-gray-500 mb-10">
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};


const TeamMemberCard = ({ member }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-[250px] text-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-28 h-28 rounded-full object-cover mx-auto"
      />
      {hover && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3 p-2 bg-opacity-70 rounded-full">
          <FaTwitter className="text-white bg-blue-500 rounded-full p-2 w-8 h-8" />
          <FaFacebook className="text-white bg-blue-600 rounded-full p-2 w-8 h-8" />
          <FaLinkedin className="text-white bg-blue-700 rounded-full p-2 w-8 h-8" />
        </div>
      )}
      <h6 className="text-gray-900 font-semibold mt-4">{member.name}</h6>
      <p className="text-gray-500">{member.role}</p>
      <p className="text-gray-500 text-sm px-2">
        Labore ipsam sit consequatur laudantium aut quod dolores exercitationem ut
      </p>
    </div>
  );
};


export default Foods;
