// import React from "react";

// const TestComponent = () => {
//   return (
//     <div>
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
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s.
//             </p>

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
//               <span className="text-sm">
//                 House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
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
//               <span className="text-sm">+93 749 99 65 50</span>
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
//               <span className="text-sm">24/7</span>
//             </div>
//           </div>
//           <form className="md:col-span-8 p-10">
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
//                   type="text"
//                   placeholder="Jane"
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
//                   type="text"
//                   placeholder="Doe"
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
//                   type="email"
//                   placeholder="@.*"
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
//                 ></textarea>
//               </div>
//               <div className="flex justify-between w-full px-3">
//                 <div className="md:flex md:items-center">
//                   <label className="block text-gray-500 font-bold">
//                     <input className="mr-2 leading-tight" type="checkbox" />
//                     <span className="text-sm">Send me your newsletter!</span>
//                   </label>
//                 </div>
//                 <button
//                   className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
//                   type="submit"
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
// import React, { useState } from "react";
// import axios from "axios";

// const TestComponent = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//     subscribe: false, // Added a field for newsletter subscription
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const fieldValue = type === "checkbox" ? checked : value;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: fieldValue,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://sheet.best/api/sheets/39c52c57-1f42-4620-a356-2ec4fa04c529",
//         formData
//       );
//       console.log(response.data); // Response from Google Apps Script
//       // Optionally, reset form fields here
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         message: "",
//         subscribe: false,
//       });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
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
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s.
//             </p>

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
//               <span className="text-sm">
//                 House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
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
//               <span className="text-sm">+93 749 99 65 50</span>
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
//               <span className="text-sm">24/7</span>
//             </div>
//           </div>
//           <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
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
//                   type="text"
//                   placeholder="Jane"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
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
//                   type="text"
//                   placeholder="Doe"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
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
//                   type="email"
//                   placeholder="@.*"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
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
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-
//                   500"
//                   id="grid-message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//               <div className="flex justify-between w-full px-3">
//                 <div className="md:flex md:items-center">
//                   <label className="block text-gray-500 font-bold">
//                     <input
//                       className="mr-2 leading-tight"
//                       type="checkbox"
//                       name="subscribe"
//                       checked={formData.subscribe}
//                       onChange={handleChange}
//                     />
//                     <span className="text-sm">Send me your newsletter!</span>
//                   </label>
//                 </div>
//                 <button
//                   className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
//                   type="submit"
//                   onClick={handleSubmit}
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
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const TestComponent = () => {
  const form = useRef();
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
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
              <span className="text-sm">
                House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
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
              <span className="text-sm">+93 749 99 65 50</span>
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
              <span className="text-sm">24/7</span>
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
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
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
                  <label className="block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
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
