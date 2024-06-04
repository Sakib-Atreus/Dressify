import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Testimonials.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import p1 from "../../assets/Profile/profile1.png";
import p2 from "../../assets/Profile/profile2.png";
import p3 from "../../assets/Profile/profile3.png";
import p4 from "../../assets/Profile/profile4.jpg";
import p5 from "../../assets/Profile/profile5.jpg";
import p6 from "../../assets/Profile/profile6.jpg";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  useEffect(() => {
    const slider = instanceRef.current;
    if (slider) {
      const interval = setInterval(() => {
        slider.next();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [instanceRef]);

  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-40 first-letter:text-pink-700">Testimonials</h2>
      <div className="wrapper mb-48">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell number-slide1">
              <div className="card w-96 number-slide1">
                <div className="card-body items-left text-left">
                  <div className="text-[#FFAF00] flex gap-1 text-xl mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-white text-sm mb-6">
                    I recently purchased the Classic Tailored Suit from the Dressify, and I must say, it has exceeded all my expectations.
                    From the moment I unpacked it, I could tell this was a premium product.
                  </p>
                  <div className="flex gap-2">
                    <img className="w-20 h-20 rounded-full" src={p1} alt="" />
                    <h4 className="text-[#262626] text-3xl font-bold mt-6">
                      Henry
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel__cell number-slide2">
              <div className="card w-96 number-slide2">
              <div className="card-body items-left text-left">
                  <div className="text-[#FFAF00] flex gap-1 text-xl mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-white text-sm mb-6">
                    I recently purchased the Classic Tailored Suit from the Dressify, and I must say, it has exceeded all my expectations.
                    From the moment I unpacked it, I could tell this was a premium product.
                  </p>
                  <div className="flex gap-2">
                    <img className="w-16 h-16 rounded-full" src={p2} alt="" />
                    <h4 className="text-[#262626] text-3xl font-bold mt-6">
                      Jack
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel__cell number-slide3">
              <div className="card w-96 number-slide3">
              <div className="card-body items-left text-left">
                  <div className="text-[#FFAF00] flex gap-1 text-xl mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-black text-sm mb-6">
                    I recently purchased the Classic Tailored Suit from the Dressify, and I must say, it has exceeded all my expectations.
                    From the moment I unpacked it, I could tell this was a premium product.
                  </p>
                  <div className="flex gap-2">
                    <img className="w-20 h-20 rounded-full" src={p3} alt="" />
                    <h4 className="text-[#262626] text-3xl font-bold mt-6">
                      Alina
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel__cell number-slide4">
              <div className="card w-96 number-slide4">
              <div className="card-body items-left text-left">
                  <div className="text-[#FFAF00] flex gap-1 text-xl mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-black text-sm mb-6">
                    I recently purchased the Classic Tailored Suit from the Dressify, and I must say, it has exceeded all my expectations.
                    From the moment I unpacked it, I could tell this was a premium product.
                  </p>
                  <div className="flex gap-2">
                    <img className="w-16 h-20 rounded-full" src={p4} alt="" />
                    <h4 className="text-[#262626] text-3xl font-bold mt-6">
                      Luna
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel__cell number-slide5">
              <div className="card w-96 number-slide5">
              <div className="card-body items-left text-left">
                  <div className="text-[#FFAF00] flex gap-1 text-xl mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-white text-sm mb-6">
                    I recently purchased the Classic Tailored Suit from the Dressify, and I must say, it has exceeded all my expectations.
                    From the moment I unpacked it, I could tell this was a premium product.
                  </p>
                  <div className="flex gap-2">
                    <img className="w-20 h-20 rounded-full" src={p5} alt="" />
                    <h4 className="text-[#262626] text-3xl font-bold mt-6">
                      Shopia
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel__cell number-slide6">
              <div className="card w-96 number-slide6">
              <div className="card-body items-left text-left">
                  <div className="text-[#FFAF00] flex gap-1 text-xl mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-white text-sm mb-6">
                    I recently purchased the Classic Tailored Suit from the Dressify, and I must say, it has exceeded all my expectations.
                    From the moment I unpacked it, I could tell this was a premium product.
                  </p>
                  <div className="flex gap-2">
                    <img className="w-20 h-20 rounded-full" src={p6} alt="" />
                    <h4 className="text-[#262626] text-3xl font-bold mt-6">
                      Sonia
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
