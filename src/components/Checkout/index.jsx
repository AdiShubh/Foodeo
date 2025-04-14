import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import handleSubmit from "../../Utils/handleSubmit";
import OrderSummary from "../OrderSummary/OrderSummary";

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
    <div className=" flex w-[90%] mx-auto p-6 gap-4 rounded-lg">
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
          //console.log(values);
        }}
      >
        {({ values }) => (
          <Form className="  p-16 rounded-xl w-[70%] mx-auto mb-10 bg-white shadow-md ">
            <div className="text-5xl from-neutral-400 text-center ">
              Checkout
            </div>
            <div className="mb-4 mt-7  ">
              <label className="block text-2xl my-1 text-gray-700">
                Shipping Address
              </label>
              <div className="flex ">
                <Field
                  name="address"
                  as="textarea"
                  type="text"
                  placeholder="Enter Shipping Address"
                  className="w-full p-3   rounded-md border border-gray-300 min-h-12"
                />
              </div>
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500"
              />
            </div>
            <label className="block text-2xl my-1 text-gray-700">
              Order Data
            </label>
            <div className="flex mb-4 gap-2">
              <div className="w-1/2">
                <Field
                  name="firstName"
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full p-3 border border-gray-300 mt-1 rounded-md"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2">
                <Field
                  name="lastName"
                  placeholder="Enter Last Name"
                  type="text"
                  className="w-full p-3 border border-gray-300 mt-1 rounded-md"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="flex mb-4 gap-2">
              <div className="w-1/2">
                <Field
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full p-3 border border-gray-300 mt-1 rounded-md"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2">
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-3 border border-gray-300 mt-1 rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="my-4 ">
              <label className="block text-2xl mb-2 text-gray-700  rounded-md">
                Payment Method
              </label>
              <div className="flex flex-wrap justify-between  gap-3 w-full text-xl">
                <label className="bg-gray-200 text-gray-600 w-[48%] p-2 rounded-md   ">
                  <Field
                    type="radio"
                    name="payment"
                    value="COD"
                    className="mr-2 my-2 "
                  />
                  Cash on Delivery
                </label>

                <label className="bg-gray-200 text-gray-600 w-[48%] p-2 rounded-md ">
                  <Field
                    type="radio"
                    name="payment"
                    value="Card"
                    className="mr-2 my-2"
                  />
                  Card Payment
                </label>
              </div>
              <ErrorMessage
                name="payment"
                component="div"
                className="text-red-500 "
              />
            </div>

            <button
              type="submit"
              className=" w-full  p-2 my-2 bg-red-500 text-white text-2xl rounded-lg"
            >
              {values.payment === "COD"
                ? "Place Order Now"
                : "Make Payment to place your Order"}
            </button>
          </Form>
        )}
      </Formik>
      <div className="w-[30%]">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutForm;
