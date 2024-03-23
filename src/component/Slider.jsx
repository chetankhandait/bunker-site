import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Fade() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };

  return (
    <div className="bg-green-700  h-60 text-white   "> {/* Adjusted width to occupy 2/3 of the screen */}
      <Slider {...settings}>
        <div>
          <div className="slider-text">Text for Slide 1</div>
        </div>
        <div>
          <div className="slider-text">Text for Slide 2</div>
        </div>
        <div>
          <div className="slider-text">Text for Slide 3</div>
        </div>
        <div>
          <div className="slider-text">Text for Slide 4</div>
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
