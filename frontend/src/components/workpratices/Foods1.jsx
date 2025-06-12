import React, { useState } from "react";

const teamMembers = [
  {
    name: "Tomato Bruschetta",
    role: "Tomatoes, Olive Oil, Cheese, Fresh Shrimp",
    image: "https://matchthemes.com/demohtml/caverta/images/menu/food-1.jpg",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSen-_ufDbDWk-6FRJJKKPtTKS8P45tWFiPOQ&s",
    price: "RS:3000"
  },
  {
    name: "Baked Potato Skins",
    role: "Potatoes, Oil, Garlic, Cheese, Fresh Shrimp",
    image: "https://matchthemes.com/demohtml/caverta/images/menu/food-2.jpg",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NyZyft-OVzNOgpdzhmxJbL2BkRF1Lr49yA&s",
    price: "RS:3300"
  },
  
  {
    name: "Marinated Grilled Shrimp",
    role: "Fresh Shrimp, Olive Oil, Tomato Sauce",
    image: "https://matchthemes.com/demohtml/caverta/images/menu/food-4.jpg",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7XHJ1qAE_t1_Fht_9lY1ICOU8a8sFw3XRw&s",
    price: "RS:4200"
  },
  {
    name: "Braised Pork Chops, Cheese, Fresh Shrimp",
    role: "4 bone-in pork chops, olive oil ",
    image: "https://matchthemes.com/demohtml/caverta/images/menu/food-5.jpg",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUu2lZOy29bmN_QPL6NZgSoOMRV2z2n4gJgw&s",
    price: "RS:5200"
  },
   {
    name: "Prime Rib",
    role: "Rib, rosemary, black pepper, red wine, Fresh Shrimp",
    image: "https://matchthemes.com/demohtml/caverta/images/menu/food-6.jpg",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ihkcs_1MVuZWsRFf0dgHag9pdB6PeN-FJw&s",
    price: "RS:8900"
  },
   {
    name: "Coconut Fried Chicken",
    role: "8 chicken pieces, coconut milk, oil, black pepper",
    image: "https://matchthemes.com/demohtml/caverta/images/menu/food-7.jpg",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQyoLjVzZotKFdfoy76CUkI3voQZGm9u5yQ&s",
    price: "RS:5700"
  },
   {
    name: "Sriracha Beef Skewers",
    role: "Beef, garlic, sesame oil, vinegar, black pepper",
    image: "https://matchthemes.com/demohtml/caverta/images/menu/food-8.jpg",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2DEuWR_uIGByjzp5uzLVIvY3dqXyvtTfiHA&s",
    price: "RS:2900"
  },
  {
    name: "Charred Lamb Ribs",
    role: "Za’atar, Turkish BBQ, Sesame Yoghurt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wzciDtfg0ZT9SintjN0t7WE2Wi4B4whPbg&s",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3hLU7i9UO5zKCCfGa9J7eB_fuAQmEy7IUg&s",
    price: "RS:3000"
  },
  {
    name: "Terrific Turkey Chili",
    role: "Turkey, oregano, tomato paste, peppers",
    image: "https://matchthemes.com/demohtml/caverta/images/menu/food-9.jpg",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdTnXQ_aHCQ4Z-2cGRFicUr-mUQUOtrqo0w&s",
    price: "RS:6300"
  },
  {
    name: "Italian Sausage Tortellini",
    role: "Cheese tortellini, sausage, garlic, carrots, zucchini",
    image: "https://matchthemes.com/demohtml/caverta/images/menu/food-10.jpg",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07i5QECh7mjeJQZ8Tq0rR5slp6YI3E0gteg&s",
    price: "RS:5700"
  },
  {
    name: "Cream of Asparagus Soup",
    role: "Asparagus, potato, celery, onion, pepper",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wDloL4L-8qUpVYE7LcbMD7y46s4QWxJ-8Q&s",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7HAfWwGRvmj-pEgj_QaWFYl9kQ4GoYeEBQ&s",
    price: "RS:6000"
  },
   {
    name: "Double Chocolate Cupcakes",
    role: "Chocolate, eggs, vanilla, milk, Pumpkin",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkFbNs1OEcUVA53d2m9cnah61YFUMxNWLJA&s",
    hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS01896AADLXRRVSvQFTMm8rZNIFnODm2RsA&s",
    price: "RS:3500"
  }
];

const Foods1 = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center text-gray-500 mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-6">
            Caverta Main Courses
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
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
      className="text-center w-[250px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={hover ? member.hoverImage : member.image}
        alt={member.name}
        className="w-36 h-36 rounded-full object-cover mx-auto transition duration-300"
      />
      <h6 className="text-gray-900 font-semibold mt-4">{member.name}</h6>
      <p className="text-gray-500">{member.role}</p>
      {/* <p className="text-gray-500 text-sm mt-1"> 
        Labore ipsam sit consequatur laudantium aut quod dolores exercitationem ut
      </p> */}
      <h6 className="text-blue-400 font-bold mt-4">{member.price}</h6>
    </div>
  );
};

export default Foods1;
