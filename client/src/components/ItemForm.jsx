export const ItemForm = () => {
  return (
    <div className="h-100vh overflow-y-auto overflow-x-hidden">
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
                placeholder="Item Name"
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
                name="category"
                id="category"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select a category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
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
    </div>
  );
};
