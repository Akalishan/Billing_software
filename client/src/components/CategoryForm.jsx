import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

export const CategoryForm = () => {
  const { setCategories, categories } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    bgColor: "#2c2c2c",
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please upload an image");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("category", JSON.stringify(data));
    formData.append("file", image);
    try {
      const response = await addCategory(formData);
      if (response.status === 201) {
        setCategories([...categories, response.data]);
        toast.success("Category added successfully");
        setData({
          name: "",
          description: "",
          bgColor: "#2c2c2c",
        });
        setImage(false);
      }
    } catch (error) {
      toast.error("Failed to add category");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
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
                className="w-32"
              />
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="hidden w-full "
              onChange={(e) => setImage(e.target.files[0])}
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
              placeholder="Category Name"
              onChange={onChangeHandler}
              value={data.name}
            />
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
          <div className="mb-3">
            <label
              htmlFor="bgColor"
              className="block text-sm font-medium text-gray-700"
            >
              Background Color
            </label>
            <input
              type="color"
              name="bgColor"
              id="bgColor"
              className="block w-20 h-10 p-0 border-0 rounded-2xl cursor-pointer"
              placeholder="#FFFFFF"
              onChange={onChangeHandler}
              value={data.bgColor}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 font-medium"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
