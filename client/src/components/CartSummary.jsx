import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ReceiptPopup } from "./ReceiptPopup";

export const CartSummary = ({
  customerName,
  mobileNumber,
  setMobileNumber,
  setCustomerName,
}) => {
  const { cartItems } = useContext(AppContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = totalAmount * 0.01;
  const grandTotal = totalAmount + tax;

  return (
    <div className="pt-3">
      <div className="mb-3">
        <div className="flex justify-between mb-2">
          <span className="text-base font-medium text-gray-300">Item:</span>
          <span className="text-base font-semibold text-white">
            {totalAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-base font-medium text-gray-300">Tax (1%):</span>
          <span className="text-base font-semibold text-white">{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-3 border-t border-gray-300 pt-2">
          <span className="text-lg font-bold text-white">Total:</span>
          <span className="text-lg font-bold text-green-400">
            {grandTotal.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex gap-2 mb-2">
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition">
          Cash
        </button>
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition">
          UPI
        </button>
      </div>

      
      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition">
          Place Order
        </button>
      
    </div>
  );
};
