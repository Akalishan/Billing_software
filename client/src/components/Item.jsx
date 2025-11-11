import React, { useContext } from "react";
import { ShoppingCart, Plus } from "lucide-react";
import { AppContext } from "../context/AppContext";

export const Item = (itemId, itemPrice, itemImage, itemName) => {
  const {addTocart}=useContext(AppContext);
  const handleAddToCart=()=>{
    addTocart({
      name:itemName,
      price:itemPrice,
      quantity:1,
      itemId:itemId 
    })
  }
  return (
    <div className="p-3 bg-blend-darken rounded shadow-sm h-100 flex items-center">
      <div className="relative m-[15px]">
        <img src={itemImage} alt={itemName} />
      </div>
      <div className="flex-grow ms-2">
        <h6 className="mb-1 text-sm">{itemName}</h6>
        <p className="mb-0 font-bold text-sm">{itemPrice}</p>
      </div>
      <div className="flex flex-col justify-between items-center ms-3 h-full">
        <ShoppingCart className="text-yellow-400 w-6 h-6" />
        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white p-2 rounded text-sm hover:bg-green-700 focus:outline-none"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
