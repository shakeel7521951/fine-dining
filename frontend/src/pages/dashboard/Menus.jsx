import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Menus = () => {
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Form States
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // Sample Products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tomato Bruschetta",
      price: "5500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSen-_ufDbDWk-6FRJJKKPtTKS8P45tWFiPOQ&s",
    },
    {
      id: 2,
      name: "Baked Potato Skins",
      price: "650",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NyZyft-OVzNOgpdzhmxJbL2BkRF1Lr49yA&s",
    },
  ]);

  const toggleModal = (product = null) => {
    setSelectedProduct(product);
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
    } else {
      setName("");
      setPrice("");
      setImage("");
    }
    setModal(!modal);
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      const updated = products.map((p) =>
        p.id === selectedProduct.id ? { ...p, name, price, image } : p
      );
      setProducts(updated);
    } else {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        image,
      };
      setProducts([...products, newProduct]);
    }
    toggleModal();
  };

  return (
    <>
      <div className="w-full md:w-[75%] sm:absolute sm:right-0 top-0">
        <div className="border-0 border-l-2 py-2 border-yellow-500 bg-gray-800 flex justify-between items-center px-4">
          <h1 className="font-bold sm:text-3xl text-white  text-xl sm:text-start w-[70%] text-center">Product Menu</h1>
          <button
            onClick={() => toggleModal()}
            className="bg-yellow-500 px-4 text-xs text-md text-nowrap py-1 rounded text-black font-semibold hover:bg-yellow-400"
          >
            + Add Product
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border mt-2">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-start">Image</th>
                <th className="border p-2 text-start">Name</th>
                <th className="border p-2 text-start">Price</th>
                <th className="border p-2 text-start">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td className="border p-2 rounded-full">
                    <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-3xl" />
                  </td>
                  <td className="border p-2">{p.name}</td>
                  <td className="border p-2">${p.price}</td>
                  <td className=" border ">
                    <div className=" items-center flex justify-evenly">
                      <span
                        className="text-xl cursor-pointer text-blue-600"
                        onClick={() => toggleModal(p)}
                      >
                        <LuPencilLine />
                      </span>
                      <span
                        className="text-xl cursor-pointer text-red-600"
                        onClick={() => deleteProduct(p.id)}
                      >
                        <MdDeleteSweep />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
            <button
              onClick={() => toggleModal()}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              <IoClose />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              {selectedProduct ? "Update Product" : "Add Product"}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Enter product name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Enter image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-900 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
