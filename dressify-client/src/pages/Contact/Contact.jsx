import { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="mx-auto bg-pink-100 pt-28">
      <Helmet>
        <title>Dressify | Contact</title>
      </Helmet>
      <div>
        <div ref={ref} className="">
          <div className="md:flex justify-center gap-4 mx-auto pb-8 pt-8 lg:ps-0 md:ps-0 ps-5 ">
            <motion.div
              className="text-black"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              {/* hover:from-purple-600 hover:to-blue-600 */}

              <h1 className="text-3xl text-pink-600">Address</h1>
              <div className="flex items-center gap-3 mt-5">
                <div className="text-bg-gradient-to-br from-blue-600 to-purple-600">
                  <FaPhoneAlt />
                </div>
                <p>+88 00 000 000</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <FaEnvelope />
                <p>dressify@mail.com</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <FaLocationArrow />
                <p>712, Free school street, London</p>
              </div>
              <div className="flex gap-5 text-black text-3xl mt-10 cursor-pointer">
                <FaFacebook className="hover:text-[#1877F2]" />
                <FaInstagram className="hover:text-[#bc2a8d]" />
                <FaTwitter className="hover:text-[#1DA1F2]" />
                <FaYoutube className="hover:text-[#c4302b]" />
              </div>
            </motion.div>

            <motion.div
              className="text-black"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.9, delay: 1 }}
            >
              <h1 className="text-3xl text-pink-600 lg:mt-0 md:mt-0 mt-8">
                Get in touch
              </h1>
              <form
                onSubmit={handleSubmit}
                className="mt-5 w-[360px] flex flex-col gap-2"
              >
                <input
                  className="border-2 border-black rounded w-[230px] px-2"
                  type="text"
                  name="name"
                  placeholder="Your name"
                ></input>
                <input
                  className="border-2 border-black rounded w-[230px] px-2"
                  type="email"
                  name="email"
                  placeholder="Your email"
                ></input>
                <textarea
                  className="border-2 border-black rounded w-[230px] px-2"
                  type="area"
                  name="name"
                  placeholder="Write message"
                ></textarea>
                <Link to="">
                  <button className="btn btn-outline hover:bg-white bg-gradient-to-r bg-pink-500 text-black w-3/2 mt-3 mb-3 font-bold hover:bg-gradient-to-r hover:from-black hover:via-black hover:to-black hover:text-white hover:border-2 hover:border-red-400">
                    Submit
                  </button>
                </Link>
              </form>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mapouter relative text-right w-full h-[400px] mt-8"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <div className="gmap_canvas">
            <iframe
              title="Google Map"
              className="gmap_iframe w-full h-full"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=shahbagh&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
            <a href="https://connectionsgame.org/">Connections Game</a>
          </div>
          <style>
            {`
          .mapouter {
            position: relative;
            width: 100%;
            height: 400px;
          }
          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            width: 100%;
            height: 400px;
          }
          .gmap_iframe {
            width: 100% !important;
            height: 400px !important;
          }
        `}
          </style>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
