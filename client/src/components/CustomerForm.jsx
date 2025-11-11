import React from "react";

export const CustomerForm = ({
  customerName,
  setCustomerName,
  mobileNumber,
  setMobileNumber,
}) => {
  return (
    <div className="p-3 bg-white rounded-lg shadow-md">
      {/* Customer Name Field */}
      <div className="mb-2">
        <label
          htmlFor="customerName"
          className="block text-gray-700 font-medium text-sm mb-1"
        >
          Customer Name
        </label>
        <input
          type="text"
          id="customerName"
          placeholder="Enter customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Mobile Number Field */}
      <div className="mb-4">
        <label
          htmlFor="mobileNumber"
          className="block text-gray-700 font-medium text-sm mb-1"
        >
           Mobile Number
        </label>
        <input
          type="text"
          id="mobileNumber"
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};
