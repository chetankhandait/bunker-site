import { BsInstagram } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

import React from "react";

function Footer( ) {


  const handlePhoneClick = () => {
    window.location.href = `tel:${8871442826}`;
  };
  const SEcondd = () => {
    window.location.href = `tel:${8817735958}`;
  };
  return (
    <section className="bg-[#076253] text-white mt-8">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold  ">
            Visit Our Location
          </h2>
          <p className="mt-4 text-lg  ">
            
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium  ">
                    Our Address
                  </h3>
                  <p className="mt-1 flex items-center gap-2 ">
                    <IoLocation/>
                    Gorakhpur,Jabalpur 
                  </p>
                </div>
                
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium  ">Contact</h3>
                  <p className="mt-1  ">Email: moveacademy.info@gmail.com</p>
                  <p className="mt-1  ">Phone: 
                  
                  <button className="text-lg font-medium flex items-center gap-2 " onClick={handlePhoneClick}>
                   
                    <IoCall/>

                   {8871442826} 
                   </button>
                   <button className="text-lg font-medium flex items-center gap-2 " onClick={SEcondd}>
                   <IoCall/>
                     

                    {8817735958} 
                    </button>
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <a className="text-lg font-medium flex items-center gap-2 " href="https://www.instagram.com/p/C28EE2DBscS/">
                    <BsInstagram/>
                    Instagram </a>
                  <button className="text-lg font-medium flex items-center gap-2 " onClick={handlePhoneClick}>
                   
                    <IoCall/>

                    {8871442826} 
                    </button>
                  <a className="text-lg font-medium flex items-center gap-2 ">
                    <FaTwitter/>
                    Instagram </a>
                    <a href="https://wa.me/message/SKQUTRXIJNMUL1" className="text-lg font-medium flex items-center gap-2 " target="_blank"> 
                    <FaWhatsapp/>
                    Watsapp</a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
