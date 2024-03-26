// import React from "react";

// const ContactForm = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font relative" id="contactForm">
//         <div className="text-center">
//           <h1 className="text-6xl text-green-700">Contact Us</h1>
//         </div>

//         <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//           <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//             <iframe
//               width="100%"
//               height="100%"
//               className="absolute inset-0"
//               frameBorder="0"
//               title="map"
//               marginHeight="0"
//               marginWidth="0"
//               scrolling="no"
//               src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
//               style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
//             ></iframe>
//             <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//               <div className="lg:w-1/2 px-6">
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                   ADDRESS
//                 </h2>
//                 <p className="mt-1">
//                   Photo booth tattooed prism, portland taiyaki hoodie neutra
//                   typewriter
//                 </p>
//               </div>
//               <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                   EMAIL
//                 </h2>
//                 <a
//                   href="mailto:example@email.com"
//                   className="text-red-500 leading-relaxed"
//                 >
//                   example@email.com
//                 </a>
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
//                   PHONE
//                 </h2>
//                 <p className="leading-relaxed">123-456-7890</p>
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//             <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//               Feedback
//             </h2>
//             <p className="leading-relaxed mb-5 text-gray-600">
//               Post-ironic portland shabby chic echo park, banjo fashion axe
//             </p>
//             <div className="relative mb-4">
//               <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="email"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="message"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               ></textarea>
//             </div>
//             <button className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">
//               Button
//             </button>
//             <p className="text-xs text-gray-500 mt-3">
//               Chicharrones blog helvetica normcore iceland tousled brook viral
//               artisan.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactForm;
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    _subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div
      className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12"
      id="contact"
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-green-400 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Contact Us!</h1>
            <p className="text-white-300">
              Fill up the form below to send us a message.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="_subject"
              value={formData._subject}
              onChange={handleChange}
            />

            <textarea
              className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ height: "121px" }}
            ></textarea>

            <div className="flex justify-between">
              <input
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
              />
            </div>
          </form>
          {/* <a
            href="https://veilmail.io/e/FkKh7o"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Or click here to reveal our protected email address
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
