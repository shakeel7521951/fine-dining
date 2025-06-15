import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {
  useCreateMenuMutation,
  useDeleteMenuMutation,
  useGetAllMenuItemsQuery,
  useUpdateMenuMutation,
} from "../../redux/slices/MenuApi";

const Menus = () => {
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const { data: products = [], refetch, isLoading } = useGetAllMenuItemsQuery();
  const [createMenu] = useCreateMenuMutation();
  const [updateMenu] = useUpdateMenuMutation();
  const [deleteMenu] = useDeleteMenuMutation();

  const toggleModal = (product = null) => {
    setSelectedProduct(product);
    if (product) {
      setName(product.title);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category || "");
    } else {
      setName("");
      setPrice("");
      setImage("");
      setCategory("");
    }
    setModal(!modal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: name,
      price: Number(price),
      category,
      image,
    };

    try {
      if (selectedProduct) {
        await updateMenu({ id: selectedProduct._id, updatedData: payload });
      } else {
        await createMenu(payload);
      }
      refetch();
      toggleModal();
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMenu(id);
      refetch();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <>
      <div className="w-full md:w-[75%] sm:absolute sm:right-0 top-0">
        <div className="border-0 border-l-2 py-2 border-yellow-500 bg-gray-800 flex justify-between items-center px-4">
          <h1 className="font-bold sm:text-3xl text-white text-xl sm:text-start w-[70%] text-center">
            Product Menu
          </h1>
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
                <th className="border p-2 text-start">Category</th>
                <th className="border p-2 text-start">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!isLoading &&
                products.map((p) => (
                  <tr key={p._id}>
                    <td className="border p-2">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-10 h-10 object-cover rounded-3xl"
                      />
                    </td>
                    <td className="border p-2">{p.title}</td>
                    <td className="border p-2">${p.price}</td>
                    <td className="border p-2 capitalize">{p.category}</td>
                    <td className="border">
                      <div className="flex justify-evenly items-center">
                        <span
                          className="text-xl cursor-pointer text-blue-600"
                          onClick={() => toggleModal(p)}
                        >
                          <LuPencilLine />
                        </span>
                        <span
                          className="text-xl cursor-pointer text-red-600"
                          onClick={() => handleDelete(p._id)}
                        >
                          <MdDeleteSweep />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              {!isLoading && products.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4">
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

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="starters">Starters</option>
                  <option value="main-courses">Main Courses</option>
                  <option value="desserts">Desserts</option>
                  <option value="beverages">Beverages</option>
                </select>
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
