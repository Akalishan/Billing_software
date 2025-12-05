import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ReceiptPopup } from "./ReceiptPopup";
import toast from "react-hot-toast";
import { createRazorpayOrder, verifyPayment } from "../Service/PaymentService";
import { Currency, Key } from "lucide-react";
import { AppConstant } from "../util/constants";

export const CartSummary = ({
  customerName,
  mobileNumber,
  setMobileNumber,
  setCustomerName,
}) => {
  const { cartItems, clearCart } = useContext(AppContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = totalAmount * 0.01;
  const grandTotal = totalAmount + tax;

  const clearAll = () => {
    setCustomerName("");
    setMobileNumber("");
    clearCart();
  };

  const placeOrder = () => {
    setShowPopup(true);
    clearAll();
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const loadRazorPayScript = () => {
    return new promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      };
    });
  };

  const deleteOrderOnFailure = async (orderId) => {
    try {
      await deleteOrder(orderId);
    } catch (error) {
      console.error("Failed to delete order after payment failure:", error);
      toast.error("Failed to delete order after payment failure");
    }
  };

  const completePayment = async (paymentMode) => {
    if (!customerName || !mobileNumber) {
      toast.error("Please enter customer details");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    const orderData = {
      customerName,
      phoneNumber: mobileNumber,
      cartItems,
      subTotal: totalAmount,
      tax,
      grandTotal,
      paymentMethod: paymentMode.toUpperCase(),
    };
    setIsProcessing(true);
    try {
      const response = await createOrder(orderData);
      const savedData = response.data;
      if (response.status === 201 && paymentMode === "cash") {
        toast.success("cash recevied");
        setOrderDetails(savedData);
      } else if (response.status === 201 && paymentMode === "upi") {
        const razorpayLoaded = await loadRazorPayScript();
        if (!razorpayLoaded) {
          toast.error("unable to load razorpay");
          await deleteOrderOnFailure(savedData.orderId);
          return;
        }
        //create razorpay order
        const razorpayResponse = await createRazorpayOrder({
          amount: grandTotal,
          Currency: "INR",
        });
        const options = {
          Key: AppConstant.RAZORPAY_KEY_ID,
          amount: razorpayResponse.data.amount,
          Currency: razorpayResponse.data.Currency,
          order_id: razorpayResponse.data.id,
          name: "My Retail Shop",
          description: "Order payment",
          handler: async function (response) {
            await verifyPaymentHandler(response, savedData);
          },
          prefill: {
            name: customerName,
            contact: mobileNumber,
          },
          theme: {
            color: "#3399cc",
          },
          modal: {
            ondismiss: async () => {
              await deleteOrderOnFailure(savedData.orderId);
              toast.error("payment cancelled");
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on("payment failed", async (response) => {
          await deleteOrderOnFailure(savedData.orderId);
          toast.error("paymeent failed");
          console.error(response.error.description);
        });
        rzp.open();
      }
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const verifyPaymentHandler = async (response, savedOrder) => {
    const paymentData = {
      razorpayOrderId: response.razorpay_order_id,
      razorpayPaymentId: response.razorpay_payment_id,
      razorpaySignature: response.razorpay_signature,
      orderId: savedOrder.orderId,
    };
    try {
      const paymentResponse = await verifyPayment(paymentData);
      if (paymentResponse.status === 200) {
        toast.success("Payment successful");
        setOrderDetails({
          ...savedOrder,
          paymentDetails: {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          },
        });
      } else {
        toast.error("payment processing failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Payment failed");
    }
  };

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
          <span className="text-base font-semibold text-white">
            {tax.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between mb-3 border-t border-gray-300 pt-2">
          <span className="text-lg font-bold text-white">Total:</span>
          <span className="text-lg font-bold text-green-400">
            {grandTotal.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex gap-2 mb-2">
        <button
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
          onClick={() => completePayment("cash")}
          disabled={isProcessing}
        >
          {isProcessing ? "processin.." : "cash"}
        </button>
        <button
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
          onClick={() => completePayment("upi")}
          disabled={isProcessing}
        >
          {isProcessing ? "processin.." : "UPI"}
        </button>
      </div>

      <button
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition"
        onClick={placeOrder}
        disabled={isProcessing || !orderDetails}
      >
        Place Order
      </button>
      {showPopup && (
        <ReceiptPopup
          orderDetails={{
            ...orderDetails,
            razorpayOrderId: orderDetails.paymentDetails?.razorpayOrderId,
            razorpayPaymentId: orderDetails.paymentDetails?.razorpayPaymentId,
          }}
          onClose={() => setShowPopup(false)}
          onPrint={handlePrintReceipt}
        />
      )}
    </div>
  );
};
