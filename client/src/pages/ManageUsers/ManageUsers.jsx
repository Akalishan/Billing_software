import { UserForm } from "../../components/UserForm";
import { UserList } from "../../components/UserList";

export const ManageUsers = () => {
  return (
    <div className="pt-2 bg-[#2C3335] min-h-screen box-border">
    <div className="flex w-full h-[calc(100vh-5rem)] bg-[#2C3335] p-5 box-border overflow-hidden">
        {/* Left Column */}
      <div className="w-[70%] bg-gray-800 border border-gray-300 rounded-lg p-8 mr-5 box-border h-full overflow-y-auto">
          <UserForm />
        </div>

        {/* Right Column */}
      <div className="w-[30%] bg-gray-700 border border-gray-300 rounded-lg p-8 box-border h-full overflow-y-auto">
          <UserList />
        </div>
      </div>
    </div>
  );
};
