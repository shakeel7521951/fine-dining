import React, { useState } from "react";
import { FaSearchPlus, FaLink } from "react-icons/fa";

const categories = ["Desserts", "Soups", "Starters", "Main Courses"];

const Drs = [
  {
    id: 1,
    category: "Main Courses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSen-_ufDbDWk-6FRJJKKPtTKS8P45tWFiPOQ&s",
    title: "Tomato Bruschetta",
    price: "Rs: 5500",
  },
  {
    id: 2,
    category: "Desserts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NyZyft-OVzNOgpdzhmxJbL2BkRF1Lr49yA&s",
    title: "Baked Potato Skins",
    price: "Rs: 6500",
  },
  {
    id: 3,
    category: "Starters",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7XHJ1qAE_t1_Fht_9lY1ICOU8a8sFw3XRw&s",
    title: "Marinated Grilled Shrimp",
    price: "Rs: 4900",
  },
  {
    id: 4,
    category: "Soups",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUu2lZOy29bmN_QPL6NZgSoOMRV2z2n4gJgw&s",
    title: "Braised Pork Chops, Cheese, Fresh Shrimp",
    price: "Rs: 3500",
  },
  {
    id: 5,
    category: "Main Courses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ihkcs_1MVuZWsRFf0dgHag9pdB6PeN-FJw&s",
    title: "Prime Rib",
    price: "Rs: 11500",
  },
  {
    id: 6,
    category: "Soups",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7HAfWwGRvmj-pEgj_QaWFYl9kQ4GoYeEBQ&s",
    title: "Cream of Asparagus Soup",
    price: "Rs: 14500",
  },
  {
    id: 7,
    category: "Desserts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS01896AADLXRRVSvQFTMm8rZNIFnODm2RsA&s",
    title: "Double Chocolate Cupcakes",
    price: "Rs: 4600",
  },
  {
    id: 8,
    category: "Starters",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2DEuWR_uIGByjzp5uzLVIvY3dqXyvtTfiHA&s",
    title: "Sriracha Beef Skewers",
    price: "Rs: 8900",
  },
  {
    id: 9,
    category: "Soups",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpH3Hf4s3Uhi7Cjcm-h_QCnuKASlgQJ7egA&s",
    title: "Creamy Chicken Soup",
    price: "Rs: 4200",
  },
  {
    id: 10,
    category: "Desserts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyu7-YGit6MV5H3WRI3506x_RA1TxWpnwy1g&s",
    title: "Desserts",
    price: "Rs: 3900",
  },
  {
    id: 11,
    category: "Starters",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07i5QECh7mjeJQZ8Tq0rR5slp6YI3E0gteg&s",
    title: "Italian Sausage Tortellini",
    price: "Rs: 2900",
  },
  {
    id: 12,
    category: "Main Courses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdTnXQ_aHCQ4Z-2cGRFicUr-mUQUOtrqo0w&s",
    title: "Terrific Turkey Chili",
    price: "Rs: 4500",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? Drs
      : Drs.filter((item) => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Caverta Menu
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            activeCategory === "All"
              ? "bg-amber-500 text-white"
              : "bg-white text-amber-500 border-amber-500"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              activeCategory === cat
                ? "bg-amber-500 text-white"
                : "bg-white text-amber-500 border-amber-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
              <h5 className="text-lg font-semibold">{item.title}</h5>
              <button className="mt-2 mb-4 px-3 py-1 bg-amber-500 text-black text-bold rounded shadow hover:bg-amber-800 transition">
                {item.price}
              </button>
              <div className="flex space-x-4">
                <FaSearchPlus className="text-xl cursor-pointer hover:text-amber-300" />
                <FaLink className="text-xl cursor-pointer hover:text-amber-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
