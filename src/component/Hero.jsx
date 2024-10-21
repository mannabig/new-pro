import React from "react";
import woman from "../assets/woman-png.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-blue-200 h-[600px] bg-hero bg-none bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] loading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block ">
          <img className="h-[505px] " src={woman} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
