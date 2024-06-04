import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/Home/Banner/01.jpg";
import img2 from "../../assets/Home/Banner/2.jpg";
import img3 from "../../assets/Home/Banner/05.jpg";
import img4 from "../../assets/Home/Banner/4.jpg";
import img5 from "../../assets/Home/Banner/03.jpg";

const Banner = () => {
  return (
    <Carousel autoPlay ={true}interval={3000}infiniteLoop={true}>
      <div className="lg:h-[680px] md:h-[680px]">
        <img src={img1} />
      </div>
      <div className="lg:h-[680px] md:h-[680px]">
        <img src={img2} />
      </div>
      <div className="lg:h-[680px] md:h-[680px]">
        <img src={img3} />
      </div>
      <div className="lg:h-[680px] md:h-[680px]">
        <img src={img4} />
      </div>
      <div className="lg:h-[680px] md:h-[680px]">
        <img src={img5} />
      </div>
    </Carousel>
  );
};

export default Banner;