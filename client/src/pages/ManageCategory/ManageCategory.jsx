import { CategoryForm } from "../../components/CategoryForm";
import { CategoryList } from "../../components/CategoryList";

export const ManageCategory = () => {
  return (
    <div className="pt-2 bg-[#2C3335] min-h-screen">
      <div className="flex w-full h-[calc(100vh-5rem)] bg-[#2C3335] p-5 gap-5">
        <div className="w-[70%] bg-gray-800 border border-gray-300 rounded-lg p-8 overflow-y-auto">
          <CategoryForm />
        </div>

        <div className="w-[30%] bg-gray-700 border border-gray-300 rounded-lg overflow-hidden">
          <CategoryList />
        </div>
      </div>
    </div>
  );
};
