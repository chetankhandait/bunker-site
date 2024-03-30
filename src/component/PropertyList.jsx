// import React from "react";
// import { Link } from "react-scroll";

// const PropertyList = () => {
//   return (
//     <div>
//       <div
//         className="flex items-center text-[#02312f] my-16  flex-col justify-center sm:flex-row gap-8  "
//         id="properties"
//       >
//         <a
//           href="#"
//           className="block rounded-lg p-4 shadow-sm shadow-indigo-100  "
//         >
//           <img
//             alt=""
//             src="src/assets/b-1.jpg"
//             className="h-56 w-full rounded-md object-cover"
//           />

//           <div className="mt-2">
//             <dl>
//               <div>
//                 <dt className="sr-only">Price</dt>

//                 <dd className="text-sm text-gray-500">Starting 499₹ /day</dd>
//               </div>
//               {/* <p className="text-2xl">||</p> */}
//               <div className="mt-6">
//                 <h3 className="text-3xl font-semibold">
//                   ₹499/- <sub className="text-gray-400 text-xs">per day</sub>
//                 </h3>
//               </div>
//             </dl>

//             <div className="mt-6 flex items-center gap-8 text-xs">
//               <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                 <svg
//                   className="size-4 text-green-700"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
//                   />
//                 </svg>

//                 <div className="mt-1.5 sm:mt-0">
//                   <p className="text-gray-500">Parking</p>

//                   <p className="font-medium">2 spaces</p>
//                 </div>
//               </div>

//               <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                 <svg
//                   className="size-4 text-green-700"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                   />
//                 </svg>

//                 <div className="mt-1.5 sm:mt-0">
//                   <p className="text-gray-500">Bathroom</p>

//                   <p className="font-medium">2 rooms</p>
//                 </div>
//               </div>

//               <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                 <svg
//                   className="size-4 text-green-700"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                   />
//                 </svg>

//                 <div className="mt-1.5 sm:mt-0">
//                   <p className="text-gray-500">Bedroom</p>

//                   <p className="font-medium">4 rooms</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Link className="text-center bg-[#076253] block mt-8 pt-2 pb-2 text-white rounded-xl">
//             Book Now
//           </Link>
//         </a>
//         <a
//           href="#"
//           className="block rounded-lg p-4 shadow-sm shadow-indigo-100  "
//         >
//           <img
//             alt=""
//             src="src/assets/b-1.jpg"
//             className="h-56 w-full rounded-md object-cover"
//           />

//           <div className="mt-2">
//             <dl>
//               <div>
//                 <dt className="sr-only">Price</dt>

//                 <dd className="text-sm text-gray-500">Starting 499₹ /day</dd>
//               </div>

//               <div>
//                 <dt className="sr-only">Address</dt>

//                 <dd className="font-medium text-[#02312f]">Bevy Bedrooms</dd>
//               </div>
//             </dl>

//             <div className="mt-6 flex items-center gap-8 text-xs">
//               <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                 <svg
//                   className="size-4 text-green-700"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
//                   />
//                 </svg>

//                 <div className="mt-1.5 sm:mt-0">
//                   <p className="text-gray-500">Parking</p>

//                   <p className="font-medium">2 spaces</p>
//                 </div>
//               </div>

//               <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                 <svg
//                   className="size-4 text-green-700"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                   />
//                 </svg>

//                 <div className="mt-1.5 sm:mt-0">
//                   <p className="text-gray-500">Bathroom</p>

//                   <p className="font-medium">2 rooms</p>
//                 </div>
//               </div>

//               <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                 <svg
//                   className="size-4 text-green-700"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                   />
//                 </svg>

//                 <div className="mt-1.5 sm:mt-0">
//                   <p className="text-gray-500">Bedroom</p>

//                   <p className="font-medium">4 rooms</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Link className="text-center bg-[#076253] block mt-8 pt-2 pb-2 text-white rounded-xl">
//             Book Now
//           </Link>
//         </a>
//         <a
//           href="#"
//           className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
//         >
//           <img
//             alt=""
//             src="src/assets/b-11.jpg"
//             className="h-56 w-full rounded-md object-cover"
//           />

//           <div className="mt-2">
//             <dl>
//               <div>
//                 <dt className="sr-only">Price</dt>

//                 <dd className="text-sm text-gray-500">$240,000</dd>
//               </div>

//               <div>
//                 <dt className="sr-only">Address</dt>

//                 <dd className="font-medium">Companion Bedroom </dd>
//               </div>
//             </dl>

//             <div className="mt-6 flex items-center gap-8 text-xs">
//               <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                 <svg
//                   className="size-4 text-green-700"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
//                   />
//                 </svg>

//                 <div className="mt-1.5 sm:mt-0">
//                   <p className="text-gray-500">Parking</p>

//                   <p className="font-medium">2 spaces</p>
//                 </div>
//               </div>

//               <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                 <svg
//                   className="size-4 text-green-700"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                   />
//                 </svg>

//                 <div className="mt-1.5 sm:mt-0">
//                   <p className="text-gray-500">Bathroom</p>

//                   <p className="font-medium">2 rooms</p>
//                 </div>
//               </div>

//               <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                 <svg
//                   className="size-4 text-green-700"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                   />
//                 </svg>

//                 <div className="mt-1.5 sm:mt-0">
//                   <p className="text-gray-500">Bedroom</p>

//                   <p className="font-medium">4 rooms</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Link className="text-center bg-[#076253] block mt-8 pt-2 pb-2 text-white rounded-xl">
//             Book Now
//           </Link>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default PropertyList;
import React from "react";
import { Link } from "react-scroll";

const PropertyList = () => {
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
            <img
              src="/public/images/b-5.jpg"
              alt="Starter Plan"
              className="mx-auto mb-4"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="flex items-center justify-between text-[#076253]">
              <div className="mt-6">
                <h3 className=" text-3xl font-semibold">
                  ₹3999/- <sub className="text-gray-400 text-xs">per month</sub>
                </h3>
              </div>
              {/* <p className="text-2xl">||</p> */}
              <div className="mt-6">
                <h3 className="text-3xl font-semibold">
                  ₹499/- <sub className="text-gray-400 text-xs">per day</sub>
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
                <button
                  type="button"
                  className="w-full mt-6 px-2 py-2 text-sm font-semibold text-white bg-[#076253] hover:bg-green-700 rounded-md"
                >
                  Book now
                </button>
              </Link>
            </div>
          </div>
          <div className="border rounded-md p-6">
            <h3 className="text-2xl font-semibold mb-1">Berry Bedrooms</h3>
            <p className="text-sm text-gray-500 mt-4 mb-4">
              For Multiples and Largest Teams
            </p>
            <img
              src="/public/images/b-2.jpg"
              alt="Starter Plan"
              className="mx-auto mb-2"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="flex items-center justify-between text-[#076253]">
              <div className="mt-6">
                <h3 className="text-3xl font-semibold">
                  ₹4999/- <sub className="text-gray-400 text-xs">per month</sub>
                </h3>
              </div>
              {/* <p className="text-2xl">||</p> */}
              <div className="mt-6">
                <h3 className="text-3xl font-semibold">
                  ₹699/- <sub className="text-gray-400 text-xs">per day</sub>
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
