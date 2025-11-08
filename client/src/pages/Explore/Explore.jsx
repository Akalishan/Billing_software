import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { DisplayCategory } from "../../components/DisplayCategory";

export const Explore = () => {
  const { categories } = useContext(AppContext);
  const[selectedCategory,setCategorySelected]=useState(null);
  return (
    <div className="pt-2 bg-[#2C3335] min-h-screen box-border">
      <div className="flex gap-5 p-5 h-[calc(100vh-5rem)] bg-[#2C3335] box-border text-white">
        {/* Left Column */}
        <div className="flex-[0.7] border border-gray-300 rounded-lg p-4 h-full flex flex-col">
          {/* First Row */}
          <div className="flex-[0.3] overflow-y-auto">
            <DisplayCategory
            selectedCategory={selectedCategory}
            categories={categories}
            />
          </div>

          {/* Horizontal Line */}
          <hr className="my-5 border-t border-gray-300" />

          {/* Second Row */}
          <div className="flex-[0.7] overflow-y-auto">
            <DisplayItems selectedCategory={selectedCategory} />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-[0.3] border border-gray-300 rounded-lg p-4 h-full flex flex-col">
          {/* Customer Form */}
          <div className="h-[15%]">
            <CustomerForm />
          </div>

          <hr className="my-3 border-t border-gray-300" />

          {/* Cart Items */}
          <div className="h-[55%] overflow-y-auto">
            <CartItems />
          </div>

          {/* Cart Summary */}
          <div className="h-[30%] border-t border-gray-300">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};
