import React from "react";
import Gallery from "./component/Gallery";
import Hero from "./component/Hero";
import PropertyList from "./component/PropertyList";
import Footer from "./component/Footer";
import CustomerReviews from "./component/Testinomials";
import ProfileCard from "./component/AboutUs";
import Navbar from "./component/Navbar";
import TestComponent from "./component/TestComponent";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);
  return (
    <div className="Loader">
      {loading ? (
        // Display the preloader while loading is true
        <div
          className="flex items-center justify-center h-screen flex-col  transition-all ease-in"
          id="preloaderdiv"
        >
          <img src="/images/loader.gif" alt="" className="w-[156px]" />
          <h2 className="text-[14px] font-sans font-semibold py-1 px-3 shadow-md rounded-md text-white bg-[#076253]">
            Bunks Studio Hostel
          </h2>
        </div>
      ) : (
        <div>
          <Navbar />
          <Hero />
          <PropertyList />
          <Gallery />
          <CustomerReviews />
          <ProfileCard />
          {/* <ContactForm /> */}
          <TestComponent />
          <Footer />

          {/* <CarouselComponent/> */}
        </div>
      )}
    </div>
  );
};

export default App;
