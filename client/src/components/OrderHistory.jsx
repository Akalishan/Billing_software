import { useState, useEffect } from "react";
import { latestOrders } from "../Service/OrderService";

export const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await latestOrders();
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // format items
  const formatItems = (items) => {
    return items.map((item) => `${item.name} (x${item.quantity})`).join(", ");
  };

  // format date
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <div className="text-center py-4 text-white">Loading Orders...</div>;
  }

  if (orders.length === 0) {
    return <div className="text-center py-4 text-white">No orders found.</div>;
  }

  return (
    <div className="p-5 min-h-[calc(100vh-5rem)] bg-[#2c3350] text-white">
      <h2 className="text-2xl font-semibold mb-4">All Orders</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 font-semibold">Order ID</th>
              <th className="p-3 font-semibold">Customer</th>
              <th className="p-3 font-semibold">Items</th>
              <th className="p-3 font-semibold">Total</th>
              <th className="p-3 font-semibold">Payment</th>
              <th className="p-3 font-semibold">Status</th>
              <th className="p-3 font-semibold">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.orderId}
                className="border-b border-gray-700 hover:bg-gray-700/40"
              >
                <td className="p-3">{order.orderId}</td>

                <td className="p-3">
                  {order.customerName}
                  <br />
                  <span className="text-gray-400 text-sm">
                    {order.phoneNumber}
                  </span>
                </td>

                <td className="p-3">{formatItems(order.items)}</td>

                <td className="p-3 font-medium">{order.grandTotal}</td>

                <td className="p-3">{order.paymentMethod}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      order.paymentDetails?.status === "COMPLETED"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-400 text-black"
                    }`}
                  >
                    {order.paymentDetails?.status || "Pending"}
                  </span>
                </td>

                <td className="p-3">{formatDate(order.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
