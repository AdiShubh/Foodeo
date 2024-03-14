import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="h-screen flex justify-center bg-gray-200">
          <div>
            <div className=" flex  flex-col gap-8 text-xl border-2 border-orange-500 p-8 mt-8 rounded-lg ">
              <p className="text-center text-2xl text-orange-700 font-semibold">
                404 Page Not Found.
              </p>
              <p>
                Hey there, The page you are trying to access does not exists.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
