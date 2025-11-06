import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { deleteUser } from "../Service/UserService";
import toast from "react-hot-toast";

export const UserList = ({ users, setUsers }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const deleteByUserId = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== id));
      toast.success("user deleted");
    } catch (error) {
      toast.error("Error deleting user");
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

      <div className="flex flex-col gap-4 p-6 pb-6">
        {filteredUsers.map((user, index) => (
          <div key={index} className="col-span-12">
            <div className="p-3 bg-gradient-to-b from-black via-gray-800 to-black">
              <div className="flex items-center">
                <div className="flex-grow">
                  <h5 className="mb-1 text-white"> {user.name}</h5>
                  <p className="mb-o text-white">{user.email}</p>
                </div>
                <div>
                  <button
                    className="bg-red-600 text-white text-xs py-1 px-2 rounded-sm hover:bg-red-700 focus:outline-none"
                    onClick={() => deleteByUserId(user.userId)}
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
