import React from "react";
import banar from "../../../assets/hero_img.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="  bg-gray-300  m-15 rounded-3xl ">
    <div className="flex justify-around items-center p-10  ">
          <div className="">
        <h1 className="text-6xl text-black ">
          Books to freshen up <br></br> your bookshelf
        </h1>
        <button className="btn btn-active btn-success mt-5">View The List</button>
      </div>
      <div className="">
        <Image className="shadow-xl/30 rounded-3xl" src={banar} alt="Hero image"></Image>
      </div>
    </div>
    </div>
  );
};

export default Banner;
