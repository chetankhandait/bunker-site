 
import React from "react";
// import Image1 from "/images/b-1.jpg";
// import Image2 from "/images/b-2.jpg";
// import Image3 from "/images/b-3.jpg";
// import Image4 from "/images/b-4.jpg";
// import Image5 from "/images/b-5.jpg";
// import Image6 from "/images/b-6.jpg";
// import Image7 from "/images/b-11.jpg";
// import Image8 from "/images/b-8.jpg";
// import Image9 from "/images/b-9.jpg";
// import Image10 from "/images/b-10.jpg";
// import Image11 from "/images/IMG_1694.jpg";
function Gallery() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl text-center font-serif underline mb-8 text-[#076253] shadow-slate-600 text-heading">
        Image Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b-1.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b-14.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b-3.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b-2.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b-15.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b-5.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b-12.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b-7.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b-8.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b-9.jpg" alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/b-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/b-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
