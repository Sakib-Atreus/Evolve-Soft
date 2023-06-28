import React from "react";

const NoData = () => {
  return (
    <div className="min-h-[calc(100vh-200px)]  flex justify-center items-center">
      <h1 className="animate-text bg-gradient-to-r from-pink-500 via-purple-500 lg:text-5xl text-3xl to-green-400 bg-clip-text text-transparent font-black ">
        You Haven't Applied To Any Job Yet!
      </h1>
    </div>
  );
};

export default NoData;
