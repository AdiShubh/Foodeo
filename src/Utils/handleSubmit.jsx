import React from "react";

const handleSubmit = (values) => {
  if (values.payment === "COD") {
    return (
      <>
        <div className="border border-green-500 rounded-md p-4 bg-green-500 text-white">
          <p>Order Placed Successfully</p>
        </div>
      </>
    );
  }
  if (values.payment === "Card") {
    return (
      <>
        <div className="border border-green-500 rounded-md p-4 bg-green-500 text-white">
          <p>Order Places Successfully</p>
        </div>
      </>
    );
  }
};

export default handleSubmit;
