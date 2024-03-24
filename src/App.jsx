import React from "react";
// import Gallery from "./component/Gallery";
import Hero from "./component/Hero";
import PropertyList from "./component/PropertyList";
import Footer from "./component/Footer";
import Testimonial from "./component/Testinomials";
import CustomerReviews from "./component/Testinomials";
import ProfileCard from "./component/AboutUs";
import ContactForm from "./component/ContactForm";

const App = () => {
  return (
    <div>
      <Hero />
      <PropertyList />
      {/* <Gallery /> */}
      <CustomerReviews />
      <ProfileCard/>
      <ContactForm/>
      <Footer />
      {/* <CarouselComponent/> */}
    </div>
  );
};

export default App;
