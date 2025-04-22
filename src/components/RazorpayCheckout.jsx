import React, { useState } from 'react';
import logoImage from "../../public/logo.png";

const RazorpayCheckout = ({ orderDetails }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Make a request to the backend to create an order
      const response = await fetch("http://localhost:5000/api/payment/create-order", {
        method: "POST",
        body: JSON.stringify({
          amount: orderDetails.amount,
          currency: "INR",  // Set currency based on your needs
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const orderData =  response.json();

      const options = {
        key: `${import.meta.env.RAZORPAY_KEY_ID}`,  // Replace with your Razorpay Key ID
        amount: orderData.amount,  // The amount will be in paise (multiply by 100)
        currency: orderData.currency,
        order_id: orderData.id,
        name: "Foodeo",
        description: "Order Payment",
        image: "/logo.png",  // Optional logo URL
        // handler: function (response) {
        //   // You can send the payment response to the backend for verification
        //   fetch("/api/payment/verify-payment", {
        //     method: "POST",
        //     body: JSON.stringify({
        //       razorpay_payment_id: response.razorpay_payment_id,
        //       razorpay_order_id: response.razorpay_order_id,
        //       razorpay_signature: response.razorpay_signature,
        //     }),
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       // Handle success, maybe redirect to a success page
        //       console.log(data);
        //       alert("Payment successful!");
        //     })
        //     .catch((err) => {
        //       console.error(err);
        //       alert("Payment verification failed!");
        //     });
        // },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed, please try again.");
    }

    setLoading(false);
  };

  return (
    <button
      disabled={loading}
      onClick={handlePayment}
      className="btn btn-primary"
    >
      {loading ? "Processing..." : "Pay with Razorpay"}
    </button>
  );
};

export default RazorpayCheckout;
