import React, { useState } from "react";

const ProfileCard = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <h1 className="text-5xl py-7 text-center font-serif underline mb-8 text-[#076253] shadow-slate-600 text-heading">
        About Us
      </h1>
      <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover mt-12 ">
        <div
          className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0"
          id="about"
        >
          {/* Main Col */}
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              {/* Image for mobile view */}
              <div
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/logo.jpg')`,
                }}
              ></div>
              <h1 className="text-3xl font-bold pt-8 lg:pt-0">Bunker-Hostel</h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-green-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>{" "}
                Dance Choreographer
              </p>
              {/* Other content */}
              <p className="pt-6 text-sm">
                Explore our girls’ hostel in Jabalpur, offering comfortable
                living with bunk beds in both 4-sharing and 2-sharing rooms. Our
                prime location ensures easy access, and fully furnished rooms
                create a cozy, aesthetic vibe. Unwind in our chill area equipped
                with a Netflix subscription for your entertainment. Experience a
                delightful blend of convenience and comfort at our hostel.
              </p>
              {/* Theme toggle button */}
              <div className="pt-6">
                <a
                  className="inline-flex items-center cursor-pointer justify-center rounded-xl bg-[#076253] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  "
                  href="https://www.instagram.com/p/C28EE2DBscS/"
                  target="_blank"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          {/* Img Col */}
          <div className="w-full lg:w-2/5">
            <img
              src="/images/logo.jpg"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
