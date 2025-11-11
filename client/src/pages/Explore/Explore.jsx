import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { DisplayCategory } from "../../components/DisplayCategory";
import { DisplayItems } from "../../components/DisplayItems";
import { CustomerForm } from "../../components/CustomerForm";
import { CartItems } from "../../components/CartItems";
import { CartSummary } from "../../components/CartSummary";

export const Explore = () => {
  const { categories } = useContext(AppContext);
  const [selectedCategory, setCategorySelected] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <div className="bg-[#2C3335] min-h-screen p-5 box-border">
      <div className="flex gap-5  h-[calc(100vh-2.5rem)] text-white">
        {/* Left Column */}
        <div className="flex-[0.7] border border-gray-600 rounded-lg p-4 h-full flex flex-col bg-[#3a4144]">
          {/* First Row */}
          <div className="flex-[0.3] overflow-y-auto mb-4">
            <DisplayCategory
              selectedCategory={selectedCategory}
              categories={categories}
            />
          </div>

          {/* Horizontal Line */}
          <hr className="border-t border-gray-600" />

          {/* Second Row */}
          <div className="flex-[0.7] overflow-y-auto mt-4">
            <DisplayItems selectedCategory={selectedCategory} />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-[0.3] border border-gray-600 rounded-lg p-4 h-full flex flex-col bg-[#3a4144]">
          {/* Customer Form */}
          <div className="flex-shrink-0 mb-3">
            <CustomerForm
              customerName={customerName}
              setCustomerName={setCustomerName}
              mobileNumber={mobileNumber}
              setMobileNumber={setMobileNumber}
            />
          </div>

          <hr className="border-t border-gray-600 mb-3" />

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto">
            <CartItems />
          </div>

          {/* Cart Summary */}
          <div className="flex-shrink-0 border-t border-gray-600">
            <CartSummary
              customerName={customerName}
              setCustomerName={setCustomerName}
              mobileNumber={mobileNumber}
              setMobileNumber={setMobileNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
