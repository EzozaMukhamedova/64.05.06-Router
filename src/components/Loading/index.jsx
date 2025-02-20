import React from "react";

export default function Loading() {
  return (
    <div>
      <div className="flex items-center mx-auto w-[500px] h-[300px] justify-center border-gray-200 rounded-lg   dark:border-gray-700">
        <div className="px-4 py-2 text-[16px] font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-500 dark:text-blue-200">
          loading...
        </div>
      </div>
      {/* <div className="w-[238px] h-[425px] flex justify-center items-center">
        <div className="loading_container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div> */}
    </div>
  );
}
