import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export const CartItems = () => {
  const { cartItems, removefromCart, updateQuantity } = useContext(AppContext);

  return (
    <div className="h-full overflow-y-auto ">
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-2">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-600 transition"
            >
              {/* Item Header */}
              <div className="flex justify-between items-center mb-2">
                <h6 className="text-base font-semibold text-white">
                  {item.name}
                </h6>
                <p className="text-base font-medium text-green-600">
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Quantity & Remove Controls */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                    onClick={() =>
                      updateQuantity(item.itemId, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    <FaMinus size={10} />
                  </button>

                  <span className="text-base font-medium text-white min-w-[30px] text-center">{item.quantity}</span>

                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-lg transition"
                    onClick={() =>
                      updateQuantity(item.itemId, item.quantity + 1)
                    }
                  >
                    <FaPlus size={10} />
                  </button>
                </div>

                <button
                  className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-lg transition"
                  onClick={() => removefromCart(item.itemId)}
                >
                  <FaTrash size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
