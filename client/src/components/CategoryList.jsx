import { useContext, useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import { deleteCategory } from "../Service/CategoryService";
import toast from "react-hot-toast";

export const CategoryList = () => {
  const { categories, setCategories } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const deleteCategoryID = async (categoryId) => {
    try {
      const response = await deleteCategory(categoryId);
      if (response.status === 204) {
        const updatedCategories = categories.filter(
          (category) => category.categoryId !== categoryId
        );
        setCategories(updatedCategories);
        toast.success("category deleted");
      } else {
        toast.error("unable to delete the category");
      }
    } catch (error) {
      console.error(error);
      toast.error("unable to delete the category");
    }
  };

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden">
      {/* Search Bar */}
      <div className="flex mb-4 px-6 pt-6">
        <input
          type="text"
          name="keyword"
          id="keyword"
          placeholder="Search by keyword"
          className="flex-grow px-4 py-2 rounded-l-md border border-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-950"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-r-md hover:bg-yellow-500 transition">
          <FaSearch />
        </button>
      </div>

      {/* Category Cards */}
      <div className="flex flex-col gap-4 p-6 pb-6">
        {filteredCategories.map((category, index) => (
          <div
            key={index}
            className="rounded-lg p-4 text-white flex items-center justify-between shadow-md"
            style={{
              backgroundColor: category.bgcolor || "#6B7280",
            }}
          >
            {/* Image */}
            <div className="mr-4">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-16 h-16 rounded-xl border-2 border-white object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-grow">
              <h5 className="text-lg font-semibold mb-1">{category.name}</h5>
              <p className="text-sm opacity-90">{category.items} Items</p>
            </div>

            {/* Delete Button */}
            <button
              className="text-red-500 hover:text-red-700 text-xl p-2 transition"
              onClick={() => deleteCategoryID(category.categoryId)}
            >
              <FaTrash />
            </button>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <p className="text-gray-400 text-center mt-6">No categories found.</p>
        )}
      </div>
    </div>
  );
};
