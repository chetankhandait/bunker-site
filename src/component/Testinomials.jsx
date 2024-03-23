import React from "react";
import Fade from "./Slider";

const Testimonial = () => {
  return (
    <div className="flex w-full   bg-yellow-400">
      <div className=" ">
        <div>
          <h1>Testinomial</h1>
        </div>
        <div>Client Stories</div>

      <div className="flex justify-start w-2/3 ">
         <div className="bg-violet-500  ">

          <Fade />
         </div>
         
      <img src="src/assets/img.webp" className="w-1/3" />
      </div>

      </div>
    </div>
  );
};

export default Testimonial;
