import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import {
  FaChevronLeft,
  FaChevronRight,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import bannerData from "./bannerData";

export default function Banner() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative">

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl =
            prevRef.current;
          swiper.params.navigation.nextEl =
            nextRef.current;
        }}
        className="h-[700px]"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative h-[700px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {/* Overlay */}

              <div className="absolute inset-0 bg-[#071A3D]/35"></div>

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D]/95 via-[#071A3D]/40 to-transparent"></div>

              <div className="relative z-10 max-w-7xl mx-auto h-full px-4">

                <div className="h-full flex items-center">

                  <div className="max-w-3xl text-white">

                    {/* Badge */}

                    <div
                      className="
                      inline-flex
                      items-center
                      gap-2
                      px-5
                      py-2
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      backdrop-blur
                      mb-8
                    "
                    >
                      <FaShieldAlt />

                      <span className="font-medium">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}

                    <h1
                      className="
                      text-5xl
                      lg:text-7xl
                      font-bold
                      leading-tight
                      mb-8
                    "
                    >
                      {item.title}
                    </h1>

                    {/* Description */}

                    <p
                      className="
                      text-lg
                      text-white/90
                      leading-8
                      max-w-2xl
                      mb-10
                    "
                    >
                      {item.description}
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4">

                      <button
                        className="
                        bg-red-700
                        hover:bg-red-800
                        px-8
                        py-4
                        rounded-xl
                        font-semibold
                        transition
                      "
                      >
                        Join Membership
                      </button>

                      <button
                        className="
                        flex
                        items-center
                        gap-3
                        border
                        border-white/40
                        hover:bg-white
                        hover:text-[#071A3D]
                        px-8
                        py-4
                        rounded-xl
                        transition
                      "
                      >
                        Learn More

                        <FaArrowRight />
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}

      <div className="absolute bottom-10 right-10 z-20 flex gap-4">

        <button
          ref={prevRef}
          className="
          w-14
          h-14
          rounded-full
          border
          border-white/30
          bg-white/10
          backdrop-blur
          text-white
          hover:bg-white
          hover:text-[#071A3D]
          transition
        "
        >
          <FaChevronLeft className="mx-auto" />
        </button>

        <button
          ref={nextRef}
          className="
          w-14
          h-14
          rounded-full
          border
          border-white/30
          bg-white/10
          backdrop-blur
          text-white
          hover:bg-white
          hover:text-[#071A3D]
          transition
        "
        >
          <FaChevronRight className="mx-auto" />
        </button>

      </div>
    </section>
  );
}