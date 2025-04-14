import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactUsSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  return (
    <>
      <p className="text-6xl  text-center my-8">Contact Us</p>
      <p className="text-3xl text-center text-gray-600">
        We love hearing from our customers. Feel free to share your experience
        <br />
        or ask any questions you may have.
      </p>
      <div className="w-5/6 mx-auto my-14 px-4 ">
        <div className="flex flex-col md:flex-row md:space-x-8 ">
          {/* Google Map Section */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-gray-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093203!2d144.95373631568006!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57799e396af6d6!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1636014302154!5m2!1sen!2sus"
              width="100%"
              height="100%"
              loading="lazy"
              title="Google Map"
            />
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 ">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={ContactUsSchema}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ errors, touched }) => (
                <Form className="space-y-4">
                  {/* First Name */}
                  <div>
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 border rounded-lg "
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 border rounded-lg  "
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border rounded-lg  "
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <Field
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className="w-full p-3 border rounded-lg  "
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Field
                      name="message"
                      as="textarea"
                      placeholder="Message"
                      className="w-full p-3 border rounded-lg  "
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white p-3 rounded-lg text-lg hover:bg-red-600"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
