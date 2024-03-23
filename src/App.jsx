import React from "react";
import Gallery from "./component/Gallery";
import Hero from "./component/Hero";
import PropertyList from "./component/PropertyList";
import Footer from "./component/Footer";
import Testimonial from "./component/Testinomials";
import CustomerReviews from "./component/Testinomials";

const App = () => {
  return (
    <div>
      <Hero />
      <PropertyList />
      <Gallery />
      <CustomerReviews />
      <Footer />
      {/* <CarouselComponent/> */}
    </div>
  );
};

export default App;
