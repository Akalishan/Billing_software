import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { BiRupee, BiCart, BiTime } from "react-icons/bi";

export const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await fetchDashboardData();
        setData(response.data);
      } catch (error) {
        console.log("Error while fetching dashboard data", error);
        toast.error("unable to fetch the data");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-700">Loading....</h1>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-700">No Data Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Today Sales Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-4 rounded-full">
              <BiRupee className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-600 text-sm font-medium mb-1">
                Today Sales
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                ₹{data.todaySales.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Today Orders Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-4 rounded-full">
              <BiCart className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-600 text-sm font-medium mb-1">
                Today Orders
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                {data.todayOrdersCount}
              </p>
            </div>
          </div>
        </div>

        {/* Recent Orders Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <BiTime className="w-5 h-5 mr-2 text-gray-600" />
              Recent Orders
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Id
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.recentOrders.map((order) => (
                  <tr key={order.orderId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.orderId.substring(0, 8)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {order.customerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      ₹{order.grandTotal.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.paymentMethod.toLowerCase() === "cash"
                            ? "bg-green-100 text-green-800"
                            : order.paymentMethod.toLowerCase() === "card"
                            ? "bg-blue-100 text-blue-800"
                            : order.paymentMethod.toLowerCase() === "upi"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.paymentMethod}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.paymentDetails.status.toLowerCase() === "paid"
                            ? "bg-green-100 text-green-800"
                            : order.paymentDetails.status.toLowerCase() ===
                              "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.paymentDetails.status.toLowerCase() ===
                              "failed"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.paymentDetails.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};