import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import handleSubmit from "../../Utils/handleSubmit";
import OrderSummary from "../OrderSummary/OrderSummary";
import RazorpayCheckout from "../RazorpayCheckout";

const CheckoutSchema = Yup.object().shape({
  address: Yup.string().required("Shipping address is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phoneNumber: Yup.number().required("Phone number is required").positive(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  payment: Yup.string().required("Payment method is required"),
});

const CheckoutForm = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-[90%] mx-auto p-6 gap-4 rounded-lg">
      <Formik
        initialValues={{
          address: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          payment: "",
        }}
        validationSchema={CheckoutSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values }) => (
          <Form className="p-6 md:p-10 lg:p-16 rounded-xl w-full lg:w-[70%] mb-10 bg-white shadow-md">
            <h2 className="text-3xl md:text-5xl font-semibold text-center mb-6 text-neutral-700">
              Checkout
            </h2>

            {/* Address */}
            <div className="mb-5">
              <label className="block text-xl md:text-2xl text-gray-700 mb-1">
                Shipping Address
              </label>
              <Field
                name="address"
                as="textarea"
                placeholder="Enter Shipping Address"
                className="w-full p-3 rounded-md border border-gray-300 min-h-[60px]"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Name Fields */}
            <label className="block text-xl md:text-2xl text-gray-700 mb-1">
              Order Data
            </label>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full md:w-1/2">
                <Field
                  name="firstName"
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Field
                  name="lastName"
                  placeholder="Enter Last Name"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full md:w-1/2">
                <Field
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="my-4">
              <label className="block text-xl md:text-2xl text-gray-700 mb-2">
                Payment Method
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="bg-gray-100 text-gray-700 flex-1 p-3 rounded-md">
                  <Field
                    type="radio"
                    name="payment"
                    value="COD"
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>
                <label className="bg-gray-100 text-gray-700 flex-1 p-3 rounded-md">
                  <Field
                    type="radio"
                    name="payment"
                    value="Card"
                    className="mr-2"
                  />
                  Card Payment
                </label>
              </div>
              <ErrorMessage
                name="payment"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* <button
              type="submit"
              className="w-full p-3 mt-4 bg-red-500 text-white text-xl rounded-lg"
            >
              {values.payment === "COD"
                ? "Place Order Now"
                : "Make Payment to place your Order"}
            </button> */}

            {values.payment === "Card" ? (
              <div className="mt-4">
                <RazorpayCheckout
                  orderDetails={{
                    amount: 500, // Dynamic amount
                    name: `${values.firstName} ${values.lastName}`,
                    email: values.email,
                    phone: values.phoneNumber,
                  }}
                />
              </div>
            ) : (
              <button
                type="submit"
                className="w-full p-3 mt-4 bg-red-500 text-white text-xl rounded-lg"
              >
                Place Order Now
              </button>
            )}
          </Form>
        )}
      </Formik>

      {/* Order Summary */}
      <div className="w-full lg:w-[30%] mb-6 lg:mb-0">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutForm;
