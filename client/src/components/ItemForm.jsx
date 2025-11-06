import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets.js";
import toast from "react-hot-toast";
export const ItemForm = () => {
  const { categories, setItemsData, itemsData } = useContext(AppContext);
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    categoryId: "",
    price: "",
    description: "",
  });
  const onChangeHandler = (e) => {
    const value = e.target.value;
    const Name = e.target.name;
    setData((data) => ({ ...data, [Name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault;
    setLoading(true);
    const formData = new FormData();
    formData.append("item", JSON.stringify(data));
    formData.append("file", image);
    try {
      if (!image) {
        toast.error("select image");
        return;
      }
      const response = await addItem(formData);
      if (response.status === 201) {
        setItemsData([...itemsData, response.data]);
        //Todo update the category
        toast.success("Item added");
        setData({
          name: "",
          description: "",
          price: "",
          categoryId: "",
        })
        setImage(false); 
      } else {
        toast.error("unable to add item ");
      }
    } catch (error) {
      console.error(error);
      toast.error("unable to add the item");
    } finally {
      setLoading(false);
    }
  };    
  return (
    <div className="h-100vh overflow-y-auto overflow-x-hidden">
      <div className="mx-2 mt-4">
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 mx-auto">
          <form className="space-y-4" onSubmit={onSubmitHandler}>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <img
                  src={image ? URL.createObjectURL(image) : assets.upload}
                  alt="Category"
                  className="w-32 h-auto"
                />
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="hidden w-full "
                hidden
                onChange={(e) => setImage(e.target.files)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Item Name"
                onChange={onChangeHandler}
                value={data.name}
              />
            </div>
            <div className="mb">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                name="categoryId"
                id="category"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={onChangeHandler}
                value={data.categoryId}
              >
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.categoryId}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="mb-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Item Price"
                  onChange={onChangeHandler}
                  value={data.price}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                rows="5"
                name="description"
                id="description"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write content here.."
                onChange={onChangeHandler}
                value={data.description}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 font-medium"
              disabled={loading}
            >
              {loading ? "Loading.." : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
