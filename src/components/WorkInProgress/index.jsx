import React from "react";

const WorkInProgress = () => {
  return (
    <>
      <div className="h-[50vh] flex justify-center bg-gray-200 ">
        <div>
          <div className=" flex  flex-col gap-8 sm:w-[70%] sm:mx-auto text-xl border-2 border-orange-500 md:p-8  mt-8 rounded-lg ">
            <p className="text-center text-2xl text-orange-700 font-semibold">
              Work in Progress.
            </p>
            <p>
              Hey there, Currently this page is not fully implemented. Please
              visit after some time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkInProgress;
