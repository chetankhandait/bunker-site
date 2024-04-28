// // export default TestComponent;
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { IoCall, IoLocation } from "react-icons/io5";

// const TestComponent = () => {
//   const SEcondd = () => {
//     window.location.href = `tel:${8817735958}`;
//   };

//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_mzaku5x",
//         "template_y2mpyhh",
//         form.current,
//         "jlAKqtJ3sfY4wDjW7"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           e.target.reset();
//           alert("Email sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div>
//       <h1 className="text-5xl py-8 text-center font-serif underline mb-8 text-[#076253] shadow-slate-600 text-heading">
//         Contact Us
//       </h1>
//       <div className="max-w-screen-lg mx-auto p-5">
//         <div className="grid grid-cols-1 md:grid-cols-12 border">
//           <div className="bg-gray-900 md:col-span-4 p-10 text-white">
//             <p className="mt-4 text-sm leading-7 font-regular uppercase">
//               Contact
//             </p>
//             <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
//               Get In <span className="text-indigo-600">Touch</span>
//             </h3>
//             <p className="mt-4 leading-7 text-gray-200">
//               Bunks City Hostels in Jabalpur Gorakhpur is a welcoming home away
//               from home for girls. Carefully crafted for comfort, it offers
//               fully equipped accommodations in a prime location, ensuring a
//               perfect stay with all essential amenities.
//             </p>

//             {/* Contact information */}
//             <div className="flex items-center mt-5">
//               <svg
//                 className="h-6 mr-2 text-indigo-600"
//                 fill="currentColor"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 489.536 489.536"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 enableBackground="new 0 0 489.536 489.536"
//               >
//                 {/* SVG Path Data */}
//               </svg>
//               <span className="text-sm flex items-center gap-3">
//                 <IoLocation />
//                 Gorakhpur,Jabalpur
//               </span>
//             </div>

//             <div className="flex items-center mt-5">
//               <svg
//                 className="h-6 mr-2 text-indigo-600"
//                 fill="currentColor"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 x="0px"
//                 y="0px"
//                 viewBox="0 0 60.002 60.002"
//                 style={{ enableBackground: "new 0 0 60.002 60.002" }}
//                 xmlSpace="preserve"
//               >
//                 {/* SVG Path Data */}
//               </svg>
//               <button
//                 className="text-lg font-medium flex items-center gap-2 "
//                 onClick={SEcondd}
//               >
//                 <IoCall />

//                 {8817735958}
//               </button>
//             </div>

//             <div className="flex items-center mt-5">
//               <svg
//                 className="h-6 mr-2 text-indigo-600"
//                 fill="currentColor"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 x="0px"
//                 y="0px"
//                 viewBox="0 0 300.988 300.988"
//                 style={{ enableBackground: "new 0 0 300.988 300.988" }}
//                 xmlSpace="preserve"
//               >
//                 {/* SVG Path Data */}
//               </svg>
//             </div>
//           </div>
//           <form className="md:col-span-8 p-10" ref={form} onSubmit={sendEmail}>
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-first-name"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                   id="grid-first-name"
//                   name="from_name"
//                   type="text"
//                   placeholder="Jane"
//                   required
//                 />
//                 <p className="text-red-500 text-xs italic">
//                   Please fill out this field.
//                 </p>
//               </div>
//               <div className="w-full md:w-1/2 px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-last-name"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-last-name"
//                   name="lastName"
//                   type="text"
//                   placeholder="Doe"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-email"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-email"
//                   name="from_email"
//                   type="email"
//                   placeholder="@.*"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-message"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   rows="10"
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-message"
//                   name="message"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex justify-between w-full px-3">
//                 <div className="md:flex md:items-center">
//                   <label className="block text-gray-500 font-bold"></label>
//                 </div>
//                 <button
//                   className=" bg-[#076253]   focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
//                   type="submit"
//                   value="Send"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestComponent;
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { IoCall, IoLocation } from "react-icons/io5";

// const TestComponent = () => {
//   const SEcondd = () => {
//     window.location.href = `tel:${8817735958}`;
//   };

//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_mzaku5x",
//         "template_y2mpyhh",
//         form.current,
//         "jlAKqtJ3sfY4wDjW7"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           e.target.reset();
//           alert("Email sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div>
//       <h1 className="text-5xl py-8 text-center font-serif underline mb-8 text-[#076253] shadow-slate-600 text-heading">
//         Contact Us
//       </h1>
//       <div className="max-w-screen-lg mx-auto p-5">
//         <div className="grid grid-cols-1 md:grid-cols-12 border">
{
  /* <div className="bg-gray-900 md:col-span-4 p-10 text-white">
  <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
  <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
    Get In <span className="text-indigo-600">Touch</span>
  </h3>
  <p className="mt-4 leading-7 text-gray-200">
    Bunks City Hostels in Jabalpur Gorakhpur is a welcoming home away from home
    for girls. Carefully crafted for comfort, it offers fully equipped
    accommodations in a prime location, ensuring a perfect stay with all
    essential amenities.
  </p>

  {/* Contact information */
}
//   <div className="flex items-center mt-5">
//     <svg
//       className="h-6 mr-2 text-indigo-600"
//       fill="currentColor"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 489.536 489.536"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       enableBackground="new 0 0 489.536 489.536"
//     >
//       {/* SVG Path Data */}
//     </svg>
//     <span className="text-sm flex items-center gap-3">
//       <IoLocation />
//       Gorakhpur,Jabalpur
//     </span>
//   </div>

//   <div className="flex items-center mt-5">
//     <svg
//       className="h-6 mr-2 text-indigo-600"
//       fill="currentColor"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       x="0px"
//       y="0px"
//       viewBox="0 0 60.002 60.002"
//       style={{ enableBackground: "new 0 0 60.002 60.002" }}
//       xmlSpace="preserve"
//     >
//       {/* SVG Path Data */}
//     </svg>
//     <button
//       className="text-lg font-medium flex items-center gap-2 "
//       onClick={SEcondd}
//     >
//       <IoCall />

//       {8817735958}
//     </button>
//   </div>

//   <div className="flex items-center mt-5">
//     <svg
//       className="h-6 mr-2 text-indigo-600"
//       fill="currentColor"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       x="0px"
//       y="0px"
//       viewBox="0 0 300.988 300.988"
//       style={{ enableBackground: "new 0 0 300.988 300.988" }}
//       xmlSpace="preserve"
//     >
//       {/* SVG Path Data */}
//     </svg>
//   </div>
// </div>; */}
//           <form className="md:col-span-8 p-10" ref={form} onSubmit={sendEmail}>
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-first-name"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                   id="grid-first-name"
//                   name="from_name"
//                   type="text"
//                   placeholder="Jane"
//                   required
//                 />
//                 <p className="text-red-500 text-xs italic">
//                   Please fill out this field.
//                 </p>
//               </div>
//               <div className="w-full md:w-1/2 px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-bedroom-type"
//                 >
//                   Bedroom Type
//                 </label>
//                 <div className="relative">
//                   <select
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pl-10 pr-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                     id="grid-bedroom-type"
//                     name="bedroomType"
//                     required
//                   >
//                     <option value="">Select Bedroom Type</option>
//                     <option value="Companion Bedrooms">
//                       Companion Bedrooms
//                     </option>
//                     <option value="Berry Bedrooms">Berry Bedrooms</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
//                     <svg
//                       className="h-6 w-6 text-gray-700"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       {/* SVG Path Data */}
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-email"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-email"
//                   name="from_email"
//                   type="email"
//                   placeholder="@.*"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-message"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   rows="10"
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-message"
//                   name="message"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex justify-between w-full px-3">
//                 <div className="md:flex md:items-center">
//                   <label className="block text-gray-500 font-bold"></label>
//                 </div>
//                 <button
//                   className=" bg-[#076253]   focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
//                   type="submit"
//                   value="Send"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestComponent;
// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { IoCall, IoLocation } from "react-icons/io5";

// const TestComponent = () => {
//   const SEcondd = () => {
//     window.location.href = `tel:${8817735958}`;
//   };

//   const form = useRef();
//   const [selectedBedroom, setSelectedBedroom] = useState("");
//   const [pricing, setPricing] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_mzaku5x",
//         "template_y2mpyhh",
//         form.current,
//         "jlAKqtJ3sfY4wDjW7"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           e.target.reset();
//           alert("Email sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   const handleBedroomChange = (e) => {
//     const selectedOption = e.target.value;
//     setSelectedBedroom(selectedOption);

//     if (selectedOption === "Berry Bedrooms") {
//       setPricing("3999");
//     } else if (selectedOption === "Companion Bedrooms") {
//       setPricing("4999");
//     } else {
//       setPricing("");
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-5xl py-8 text-center font-serif underline mb-8 text-[#076253] shadow-slate-600 text-heading">
//         Contact Us
//       </h1>
//       <div className="max-w-screen-lg mx-auto p-5">
//         <div className="grid grid-cols-1 md:grid-cols-12 border">
//           <div className="bg-gray-900 md:col-span-4 p-10 text-white">
//             {/* Contact information */}
//             <div className="flex items-center mt-5">
//               <svg
//                 className="h-6 mr-2 text-indigo-600"
//                 fill="currentColor"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 489.536 489.536"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 enableBackground="new 0 0 489.536 489.536"
//               >
//                 {/* SVG Path Data */}
//               </svg>
//               <span className="text-sm flex items-center gap-3">
//                 <IoLocation />
//                 Gorakhpur, Jabalpur
//               </span>
//             </div>

//             <div className="flex items-center mt-5">
//               <svg
//                 className="h-6 mr-2 text-indigo-600"
//                 fill="currentColor"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 x="0px"
//                 y="0px"
//                 viewBox="0 0 60.002 60.002"
//                 style={{ enableBackground: "new 0 0 60.002 60.002" }}
//                 xmlSpace="preserve"
//               >
//                 {/* SVG Path Data */}
//               </svg>
//               <button
//                 className="text-lg font-medium flex items-center gap-2 "
//                 onClick={SEcondd}
//               >
//                 <IoCall />
//                 {8817735958}
//               </button>
//             </div>

//             <div className="flex items-center mt-5">
//               <svg
//                 className="h-6 mr-2 text-indigo-600"
//                 fill="currentColor"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 x="0px"
//                 y="0px"
//                 viewBox="0 0 300.988 300.988"
//                 style={{ enableBackground: "new 0 0 300.988 300.988" }}
//                 xmlSpace="preserve"
//               >
//                 {/* SVG Path Data */}
//               </svg>
//             </div>
//           </div>
//           <form className="md:col-span-8 p-10" ref={form} onSubmit={sendEmail}>
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full md:w-1/2 px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-last-name"
//                 >
//                   Last Name
//                 </label>
//                 <div className="relative">
//                   <select
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pl-10 pr-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                     id="grid-bedroom-type"
//                     name="bedroomType"
//                     onChange={handleBedroomChange}
//                     value={selectedBedroom}
//                     required
//                   >
//                     <option value="">Select Bedroom Type</option>
//                     <option value="Companion Bedrooms">
//                       Companion Bedrooms
//                     </option>
//                     <option value="Berry Bedrooms">Berry Bedrooms</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
//                     <svg
//                       className="h-6 w-6 text-gray-700"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       {/* SVG Path Data */}
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-pricing"
//                 >
//                   Pricing
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-pricing"
//                   name="pricing"
//                   type="text"
//                   value={pricing}
//                   readOnly
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-first-name"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                   id="grid-first-name"
//                   name="from_name"
//                   type="text"
//                   placeholder="Jane"
//                   required
//                 />
//                 <p className="text-red-500 text-xs italic">
//                   Please fill out this field.
//                 </p>
//               </div>
//               <div className="w-full md:w-1/2 px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-email"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-email"
//                   name="from_email"
//                   type="email"
//                   placeholder="@.*"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-message"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   rows="10"
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-message"
//                   name="message"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex justify-between w-full px-3">
//                 <div className="md:flex md:items-center">
//                   <label className="block text-gray-500 font-bold"></label>
//                 </div>
//                 <button
//                   className=" bg-[#076253]   focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
//                   type="submit"
//                   value="Send"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestComponent;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoCall, IoLocation } from "react-icons/io5";

const TestComponent = () => {
  const SEcondd = () => {
    window.location.href = `tel:${8817735958}`;
  };

  const form = useRef();
  const [selectedBedroom, setSelectedBedroom] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [pricing, setPricing] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mzaku5x",
        "template_y2mpyhh",
        form.current,
        "jlAKqtJ3sfY4wDjW7"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleBedroomChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedBedroom(selectedOption);
    calculatePricing(selectedOption, selectedDuration);
  };

  const handleDurationChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedDuration(selectedOption);
    calculatePricing(selectedBedroom, selectedOption);
  };

  const calculatePricing = (bedroom, duration) => {
    if (bedroom === "Berry Bedrooms") {
      if (duration === "Day") {
        setPricing("₹699");
      } else if (duration === "Month") {
        setPricing("₹3999");
      }
    } else if (bedroom === "Companion Bedrooms") {
      if (duration === "Day") {
        setPricing("₹799");
      } else if (duration === "Month") {
        setPricing("₹4999");
      }
    } else {
      setPricing("");
    }
  };

  return (
    <div>
      <h1 className="text-5xl py-8 text-center font-serif underline mb-8 text-[#076253] shadow-slate-600 text-heading">
        Contact Us
      </h1>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
          <div className="bg-gray-900 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Bunks City Hostels in Jabalpur Gorakhpur is a welcoming home away
              from home for girls. Carefully crafted for comfort, it offers
              fully equipped accommodations in a prime location, ensuring a
              perfect stay with all essential amenities.
            </p>

            {/* Contact information */}
            <div className="flex items-center mt-5">
              <svg
                className="h-6 mr-2 text-indigo-600"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 489.536 489.536"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                enableBackground="new 0 0 489.536 489.536"
              >
                {/* SVG Path Data */}
              </svg>
              <span className="text-sm flex items-center gap-3">
                <IoLocation />
                Gorakhpur,Jabalpur
              </span>
            </div>

            <div className="flex items-center mt-5">
              <svg
                className="h-6 mr-2 text-indigo-600"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 60.002 60.002"
                style={{ enableBackground: "new 0 0 60.002 60.002" }}
                xmlSpace="preserve"
              >
                {/* SVG Path Data */}
              </svg>
              <button
                className="text-lg font-medium flex items-center gap-2 "
                onClick={SEcondd}
              >
                <IoCall />

                {8817735958}
              </button>
            </div>

            <div className="flex items-center mt-5">
              <svg
                className="h-6 mr-2 text-indigo-600"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300.988 300.988"
                style={{ enableBackground: "new 0 0 300.988 300.988" }}
                xmlSpace="preserve"
              >
                {/* SVG Path Data */}
              </svg>
            </div>
          </div>
          <form className="md:col-span-8 p-10" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  name="from_name"
                  type="text"
                  placeholder="Jane"
                  required
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  name="from_email"
                  type="email"
                  placeholder="@.*"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-duration"
                >
                  Duration
                </label>
                <div className="relative">
                  <select
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pl-10 pr-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-duration"
                    name="duration"
                    onChange={handleDurationChange}
                    value={selectedDuration}
                    required
                  >
                    <option value="">Select Duration</option>
                    <option value="Day">For a Day</option>
                    <option value="Month">For a Month</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      className="h-6 w-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      className="h-6 w-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path Data */}
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Bedroom Type
                </label>
                <div className="relative">
                  <select
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pl-10 pr-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-bedroom-type"
                    name="bedroomType"
                    onChange={handleBedroomChange}
                    value={selectedBedroom}
                    required
                  >
                    <option value="">Select Bedroom Type</option>
                    <option value="Companion Bedrooms">
                      Companion Bedrooms
                    </option>
                    <option value="Berry Bedrooms">Berry Bedrooms</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      className="h-6 w-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      className="h-6 w-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path Data */}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-pricing"
                >
                  Pricing
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-pricing"
                  name="pricing"
                  type="text"
                  value={pricing}
                  readOnly
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-message"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label className="block text-gray-500 font-bold"></label>
                </div>
                <button
                  className=" bg-[#076253]   focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                  value="Send"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
