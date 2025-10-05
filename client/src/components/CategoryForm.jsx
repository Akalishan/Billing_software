export const CategoryForm = () => {
  return (
    <div className="mx-2 mt-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 mx-auto">
        
          <form className="space-y-4">
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <img
                  src="https://placehold.co/48x48"
                  alt="Category"
                  className="w-32 h-auto"
                />
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="hidden w-full "
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
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 font-medium"
            >
              Save
            </button>
          </form>
        
      </div>
    </div>
  );
};
