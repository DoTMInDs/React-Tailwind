import React from "react";
// import Typed from "react-typed"

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col text-center justify-center">
        <p className="uppercase text-[#00df9a] font-bold text-sm p-2">
          growing with data analytics
        </p>
        <h1 className="capitalize font-bold text-4xl md:text-7xl md:py-6 sm:text-6xl">
          grow with data
        </h1>
        <div>
          <p className="font-bold md:text-5xl sm:text-4xl text-xl">
            Fast, flexible financing for
          </p>
          <p className="text-gray-500 text-xl pt-2 p-2">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS
            platforms
          </p>
          <button className="bg-[#00df9a] text-black font-bold mx-auto w-[200px] rounded-md my-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
