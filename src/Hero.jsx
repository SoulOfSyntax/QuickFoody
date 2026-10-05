import React from "react";
import background from "./assets/bgHero.jpg";

const Hero = () => {
  return (
    <div className="h-screen w-full pt-36 flex p-5 gap-4">
      <div className="flex flex-col gap-4 pt-10">
        <h1 className="text-4xl font-semibold text-red-600 text font-mono">
          Taste Something Amazing
        </h1>

        <h2 className="text-7xl font-semibold font-sans">
          Your cravings, our specialty.
        </h2>

        <p className="pt-6 text-xl ">
          Explore delicious meals, fresh ingredients, and irresistible flavors
          all in one place.
        </p>
      </div>
      <div className="w-1/2 m-4">
        <img src={background} className="rounded-md"/>
      </div>
    </div>
  );
};

export default Hero;
