import { useEffect, useState } from "react";
import { UserForm } from "../../components/UserForm";
import { UserList } from "../../components/UserList";
import toast from "react-hot-toast";

export const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setloading(true);
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        toast.error("unable to fetch users");
      } finally {
        setloading(false);
      }
    }
    fetchUsers();
  },[]);

  return (
    <div className="pt-2 bg-[#2C3335] min-h-screen box-border">
      <div className="flex w-full h-[calc(100vh-5rem)] bg-[#2C3335] p-5 box-border overflow-hidden">
        {/* Left Column */}
        <div className="w-[70%] bg-gray-800 border border-gray-300 rounded-lg p-8 mr-5 box-border h-full overflow-y-auto">
          <UserForm  setUsers={setUsers}/>
        </div>

        {/* Right Column */}
        <div className="w-[30%] bg-gray-700 border border-gray-300 rounded-lg p-8 box-border h-full overflow-y-auto">
          <UserList users={setUsers} />
        </div>
      </div>
    </div>
  );
};
