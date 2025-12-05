import { BsCheckCircleFill } from "react-icons/bs";
export const ReceiptPopup = ({ orderDetails, onClose, onPrint }) => {
  return (
    <div>
      <div className="text-dark">
        <div className="text-center mb-4">
          <BsCheckCircleFill className="text-green-500 text-3xl" />
        </div>
        <h3 className="text-center mb-4">Order Receipt</h3>
        <p>
          <strong>Order ID:</strong> {orderdetails.orderId}
        </p>
        <p>
          <strong>Name:</strong> {orderDetails.customerName}
        </p>
        <p>
          <strong>phone:</strong> {orderDetails.phoneNumber}
        </p>
        <hr className="my-3" />
        <h5 className="mb-3">Items Ordered</h5>
        <div>
          {orderDetails.items.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <hr className="my-3" />
        <div className="flex justify-between mb-2">
          <span>
            <strong>SubTotal:</strong>
          </span>
          <span>{orderDetails.subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>
            <strong>Tax(1%):</strong>
          </span>
          <span>{orderDetails.tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>
            <strong>GrandTotal:</strong>
          </span>
          <span>{orderDetails.grandTotal.toFixed(2)}</span>
        </div>
        <p>
          <strong>Payment Method:</strong> {orderDetails.paymentMethod}
        </p>
        {orderDetails.paymentMethod === "UPI" && (
          <>
            <p>
              <strong>Razorpay Order ID:</strong>
              {orderDetails.razorpayOrderId}
            </p>

            <p>
              <strong>Razorpay Payment ID:</strong>
              {orderDetails.razorpayPaymentId}
            </p>
          </>
        )}
        <div className="flex justify-end gap-3 mt-4">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-md"
            onClick={onPrint}
          >
            Print
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
