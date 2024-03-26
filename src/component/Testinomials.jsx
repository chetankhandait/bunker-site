import React, { useEffect } from "react";
import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import "./Slider.css";
const CustomerReviews = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      "#keen-slider",
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
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
    <div className="flex flex-col w-full bg-[#02312f] text-white lg:flex-row   ">
      <section
        className="w-full bg-[#02312f] text-white lg:w-2/3 "
        id="testimonials"
      >
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight   sm:text-5xl">
              Read trusted reviews from our customers
            </h2>

            <div className="mt-8 flex gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-white p-3   transition hover:bg-[#076253] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-white p-3 text-white transition hover:bg-[#076253] hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-5 mt-8  lg:col-span-1 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                {/* Review 1 content */}
                "As a commercial developer, we have worked with numerous design
                firms over the years. NextSpace stands out for their innovative
                designs, and ability to meet deadlines."
              </div>
              <div className="keen-slider__slide">
                {/* Review 2 content */}
                "We specialize in transforming visions into reality. Explore our
                portfolio of innovative architectural and interior design
                projects crafted with precision."
              </div>
              {/* Add more keen-slider__slide divs for additional reviews */}
            </div>
          </div>
        </div>
      </section>
      <img
        src="src/assets/img.webp"
        alt=""
        class="w-full p-5  rounded-md object-cover   lg:w-1/3  h-full block lg:p-0 lg:rounded-none"
      />
    </div>
  );
};

export default CustomerReviews;
