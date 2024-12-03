import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider1 from "../assets/slider1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full">
            <img
              src={slider1}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Winter Clothing Donation Campaign"
            />
            <div className="absolute inset-0 bg-slate-800 bg-opacity-70 flex flex-col items-center justify-center text-center p-5">
              <h2
                data-aos="fade-up"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryColor"
              >
                Warm Hearts, Warm Clothes
              </h2>
              <p
                data-aos="fade-up"
                className="max-w-md mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white"
              >
                Join us in making this winter a bit warmer for those in need.
                Your donation matters.
              </p>
              <Link
                to="/donation-campaign"
                className="mt-6 btn bg-primaryColor hover:!bg-accentColor text-white px-6 py-2"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full">
            <img
              src={slider2}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Donate Winter Clothes"
            />
            <div className="absolute inset-0 bg-slate-800 bg-opacity-70 flex flex-col items-center justify-center text-center p-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryColor">
                Spread the Warmth
              </h2>
              <p className="max-w-md mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white">
                Help us collect and distribute winter clothes to those in need.
                Together, we can make a difference.
              </p>
              <Link
                to="/donation-campaign"
                className="mt-6 btn bg-primaryColor hover:!bg-accentColor text-white px-6 py-2"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full">
            <img
              src={slider3}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Helping Hands in Winter"
            />
            <div className="absolute inset-0 bg-slate-800 bg-opacity-70 flex flex-col items-center justify-center text-center p-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryColor">
                Be a Winter Warrior
              </h2>
              <p className="max-w-md mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white">
                Your generosity can make winter easier for families in need.
                Donate and make a difference today.
              </p>
              <Link
                to="/donation-campaign"
                className="mt-6 btn bg-primaryColor hover:!bg-accentColor text-white px-6 py-2"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
