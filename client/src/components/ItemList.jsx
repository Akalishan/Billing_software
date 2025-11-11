import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { FaTrash,FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";

export const ItemList = () => {
  const { itemsData, setItemsData } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = itemsData.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const removeItem = async (itemId) => {
    try {
      const response = await deleteItem(itemId);
      if (response.status === 204) {
        const updatedItems = itemsData.filter((item) => item.itemId !== itemId);
        setItemsData(updatedItems);
        toast.success("Item deleted");
      } else {
        toast.error("unable to delete Item");
      }
    } catch (error) {
      toast.error("unable to delete Item");
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
        {filteredItems.map((item, index) => {
          <div className="col-span-12" key={index}>
            <div className="p-3 bg-blend-darken">
              <div className="flex items-center ">
                <div className="mr-[50px]">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-[60px] h-[60px] rounded-[10px] border-[3px] border-white"
                  />
                </div>
                <div className="flex-grow">
                  <h6 className="mb-1 text-white ">{item.name}</h6>
                  <p className="mb-0 text-white">
                    Category:{item.categoryName}
                  </p>
                  <span className="inline-block rounded-full bg-yellow-500 text-white px-3 py-1 text-sm font-medium">
                    &#8377;{item.price};
                  </span>
                </div>
                <div>
                  <button
                    class="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700 focus:outline-none"
                    onClick={() => removeItem(item, itemId)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};
