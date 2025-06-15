import { useState } from "react";
import { FaSearchPlus, FaLink } from "react-icons/fa";
import { useGetAllMenuItemsQuery } from "../../redux/slices/MenuApi";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const categories = ["Desserts", "Soups", "Starters", "Main Courses"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const {
    data: menuItems = [],
    isLoading,
    isError,
  } = useGetAllMenuItemsQuery();
  console.log(menuItems);

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) =>
            item.category.toLowerCase().replace(/\s+/g, "-") ===
            activeCategory.toLowerCase().replace(/\s+/g, "-")
        );

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <p className="text-center py-10 text-red-500">Failed to load menu.</p>
    );

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

      {filteredItems.length === 0 ? (
        <p className="text-center text-gray-500">
          No items found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item._id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
                <h5 className="text-lg font-semibold">{item.title}</h5>
                <button className="mt-2 mb-4 px-3 py-1 bg-amber-500 text-black font-semibold rounded shadow hover:bg-amber-800 transition">
                  Rs: {item.price}
                </button>
                <div className="flex space-x-4">
                  <Link to="/reservation">
                    <FaSearchPlus className="text-xl cursor-pointer hover:text-amber-300" />
                  </Link>
                  <Link to="/reservation">
                    <FaLink className="text-xl cursor-pointer hover:text-amber-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
