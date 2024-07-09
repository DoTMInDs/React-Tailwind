import React from "react";
import Person from "../assets/person.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-8" src={Person} alt="" />

        <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold text-[#00df9a] uppercase">manage Analytics dashboard</p>
        <h1 className="font-bold text-black capitalize md:text-3xl sm:text-2xl text-xl py-2">manage data Analytics centrally</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          repellat quas, rem in ratione cumque quasi iste corporis asperiores
          earum atque natus, repellendus cupiditate consectetur aspernatur
          obcaecati sapiente amet! Error.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
