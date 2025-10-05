export const UserForm = () => {
  return (
    <div className="mx-2 mt-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 mx-auto">
        <form className="space-y-4">
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
              placeholder="Billium"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="YourName@example.com"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password "
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password "
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="*******"
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
