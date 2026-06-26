import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import testimonials from "../home/testimonials";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>

            <span
              className="
                inline-flex
                items-center
                px-5
                py-3
                rounded-full
                bg-red-50
                text-red-700
                font-semibold
                mb-5
              "
            >
              Our Testimonials
            </span>

            <h2
              className="
                text-3xl
                lg:text-4xl
                font-bold
                text-[#071A3D]
                leading-tight
              "
            >
              What Our Clients 
              Say About Us
            </h2>

          </div>

          {/* Custom Buttons */}

          <div className="flex gap-4">

            <button
              className="
                testimonial-prev
                w-12
                h-12
                rounded-full
                border-2
                border-[#071A3D]
                flex
                items-center
                justify-center
                text-[#071A3D]
                hover:bg-[#071A3D]
                hover:text-white
                transition-all
              "
            >
              <FaArrowLeft />
            </button>

            <button
              className="
                testimonial-next
                w-12
                h-12
                rounded-full
                bg-red-700
                text-white
                flex
                items-center
                justify-center
                hover:bg-red-800
                transition-all
              "
            >
              <FaArrowRight />
            </button>

          </div>

        </div>

        {/* Slider */}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>

              <div
                className="
                  group
                  h-full
                  bg-white
                  border
                  border-slate-200
                  rounded-[30px]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                "
              >

                {/* Quote */}

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#071A3D]
                    flex
                    items-center
                    justify-center
                    text-white
                    text-2xl
                    mb-6
                    group-hover:bg-red-700
                    transition-all
                  "
                >
                  <FaQuoteLeft />
                </div>

                {/* Rating */}

                <div className="flex gap-1 mb-6">

                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400"
                    />
                  ))}

                </div>

                {/* Review */}

                <p
                  className="
                    text-gray-600
                    leading-9
                    text-md
                    min-h-[140px]
                  "
                >
                  {item.review}
                </p>

                {/* Divider */}

                <div className="border-t border-slate-200 my-3"></div>

                {/* User */}

                <div>

                  <h4
                    className="
                      text-2xl
                      font-bold
                      text-[#071A3D]
                      mb-1
                    "
                  >
                    {item.name}
                  </h4>

                  <p className="text-red-600 font-medium">
                    {item.designation}
                  </p>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}