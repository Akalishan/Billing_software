import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Explore = () => {
    const {categories}=useContext(AppContext); 
    console.log(categories);
  return (
    <div className="pt-[5rem] bg-[#2C3335] min-h-screen box-border">
      <div className="flex gap-5 p-5 h-[calc(100vh-5rem)] bg-[#2C3335] box-border text-white">
        {/* Left Column */}
        <div className="flex-[0.7] border border-gray-300 rounded-lg p-4 h-full flex flex-col">
          {/* First Row */}
          <div className="flex-[0.3] overflow-y-auto">categories</div>

          {/* Horizontal Line */}
          <hr className="my-5 border-t border-gray-300" />

          {/* Second Row */}
          <div className="flex-[0.7] overflow-y-auto">items</div>
        </div>

        {/* Right Column */}
        <div className="flex-[0.3] border border-gray-300 rounded-lg p-4 h-full flex flex-col">
          {/* Customer Form */}
          <div className="h-[15%]">customer form</div>

          <hr className="my-3 border-t border-gray-300" />

          {/* Cart Items */}
          <div className="h-[55%] overflow-y-auto">cart items</div>

          {/* Cart Summary */}
          <div className="h-[30%] border-t border-gray-300">cart summary</div>
        </div>
      </div>
    </div>
  );
};
