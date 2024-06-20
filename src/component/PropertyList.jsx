import React, { useEffect } from "react";
import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import "./PropertySlider.css";

import { Link } from "react-scroll";

const PropertyList = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      "#property-keen-slider",
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1,
              spacing: 32,
            },
          },
        },
      },
      []
    );

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());
  }, []);
  useEffect(() => {
    const keenSlider = new KeenSlider(
      "#property-two-keen-slider",
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1,
              spacing: 32,
            },
          },
        },
      },
      []
    );

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());
  }, []);
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl mt-4 py-7 text-center font-serif underline mb-2 text-[#076253] shadow-slate-600 text-heading">
            Hostels
          </h1>
          <p className="text-lg text-[#076253]">
            Change your plan according your needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 max-sm:max-w-sm max-sm:mx-auto">
          <div className="border rounded-md p-6">
            <h3 className="text-2xl font-semibold mb-1">Companion Bedrooms</h3>
            <p className="text-sm text-gray-500 mt-4 mb-4">
              For Individuals and Largest Teams
            </p>
            {/* <img
              src="/images/b-5.jpg"
              alt="Starter Plan"
              className="mx-auto mb-4"
              style={{ maxWidth: "100%", height: "auto" }}
            /> */}
            <div id="property-keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                {/* Review 1 content */}
                <img
                  src="/images/b-5.jpg"
                  alt="Starter Plan"
                  className="mx-auto mb-4"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="keen-slider__slide">
                {/* Review 2 content */}
                <img
                  src="/images/b-6.jpg"
                  alt="Starter Plan"
                  className="mx-auto mb-4"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/images/b-12.jpg"
                  alt="Starter Plan"
                  className="mx-auto mb-4"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/images/b-10.jpg"
                  alt="Starter Plan"
                  className="mx-auto mb-4"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>

              {/* Add more keen-slider__slide divs for additional reviews */}
            </div>
            <div className="flex items-center justify-between text-[#076253]">
              <div className="mt-6">
                <h3 className=" text-3xl font-semibold">
                  ₹3999/- <sub className="text-gray-400 text-xs">per month</sub>
                </h3>
              </div>
              {/* <p className="text-2xl">||</p> */}
              <div className="mt-6">
                <h3 className="text-3xl font-semibold">
                  ₹699/-{" "}
                  <sub className="text-gray-400 text-xs">for one day</sub>
                </h3>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-1">
                Include (with 2 sharing)
              </h4>
              <p className="text-sm text-gray-500">
                Everything you get in this plan
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Internet + Netlix Subcription
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Refrigerator
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Penatry
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Attractive Bathrooms
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Reading light
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Wardrobe{" "}
                  <span className="font-semibold ml-2 text-[#000]">
                    {" "}
                    with four sharing
                  </span>
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Bunk Beds{" "}
                  <span className="font-semibold ml-2 text-[#000]">
                    {" "}
                    with four sharing
                  </span>
                </li>
              </ul>
              <Link to="contact">
                <a href="https://wa.me/message/SKQUTRXIJNMUL1">

                <button
                  type="button"
                  className="w-full mt-6 px-2 py-2 text-sm font-semibold text-white bg-[#076253] hover:bg-green-700 rounded-md"
                >
                  Book now
                </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="border rounded-md p-6">
            <h3 className="text-2xl font-semibold mb-1">Berry Bedrooms</h3>
            <p className="text-sm text-gray-500 mt-4 mb-4">
              For Multiples and Largest Teams
            </p>
            {/* <img
              src="/images/b-2.jpg"
              alt="Starter Plan"
              className="mx-auto mb-2"
              style={{ maxWidth: "100%", height: "auto" }}
            /> */}
            <div id="property-two-keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                {/* Review 1 content */}
                <img
                  src="/images/b-2.jpg"
                  alt="Starter Plan"
                  className="mx-auto mb-4"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="keen-slider__slide">
                {/* Review 2 content */}
                <img
                  src="/images/b-11.jpg"
                  alt="Starter Plan"
                  className="mx-auto mb-4"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="keen-slider__slide">
                {/* Review 2 content */}
                <img
                  src="/images/b-6.jpg"
                  alt="Starter Plan"
                  className="mx-auto mb-4"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/images/b-17.jpg"
                  alt="Starter Plan"
                  className="mx-auto mb-4"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              

              {/* Add more keen-slider__slide divs for additional reviews */}
            </div>
            <div className="flex items-center justify-between text-[#076253]">
              <div className="mt-6">
                <h3 className="text-3xl font-semibold">
                  ₹2999/- <sub className="text-gray-400 text-xs">per month</sub>
                </h3>
              </div>
              {/* <p className="text-2xl">||</p> */}
              <div className="mt-6">
                <h3 className="text-3xl font-semibold">
                  ₹499/-{" "}
                  <sub className="text-gray-400 text-xs">for one day</sub>
                </h3>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-1">
                Include (with 4 sharing)
              </h4>
              <p className="text-sm text-gray-500">
                Everything you get in this plan
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Internet + Netlix Subcription
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Refrigerator
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Penatry
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Attractive Bathrooms
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Reading light
                </li>
                <li className="flex items-center text-sm text-[#000] font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Private Wardrobe
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-3 [#076253]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Bunk beds{" "}
                  <span className="font-bold ml-2 text-[#000]">
                    {" "}
                    with four sharing
                  </span>
                </li>
              </ul>
              <Link to="contact">
                <button
                  type="button"
                  className="w-full mt-6 px-2 py-2 text-sm font-semibold text-white bg-[#076253] hover:bg-green-700 rounded-md"
                >
                  Book now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
