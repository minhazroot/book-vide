
import React from "react";
import Image from "next/image";
import banar from "../../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="mx-4 md:mx-10 lg:mx-16 my-10">
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-gray-100 rounded-3xl overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-12 md:px-12 lg:px-16 lg:py-16">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
              Discover Your Next Favorite Book
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Books to Freshen Up Your
              <span className="text-green-600"> Bookshelf.</span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore a world of knowledge, imagination, and inspiration.
              Find your next favorite book and make every page count.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="btn bg-green-600 hover:bg-green-700 text-white border-none rounded-xl px-8">
                View The List
              </button>

              <button className="btn btn-outline border-green-600 text-green-700 hover:bg-green-600 hover:text-white rounded-xl px-8">
                Explore Books
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-green-200/40 rounded-3xl blur-2xl"></div>

              <Image
                src={banar}
                alt="Beautiful book collection"
                priority
                className="relative w-full h-[280px] md:h-[380px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

