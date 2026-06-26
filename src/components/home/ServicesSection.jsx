import services from "../home/services";
import { COLORS } from "../../utils/colors";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span
            className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              bg-red-50
              text-red-700
              font-semibold
              mb-5
            "
          >
            Our Services
          </span>

          <h2
            className="
              text-4xl
              lg:text-5xl
              font-bold
              mb-6
            "
            style={{
              color: COLORS.primary,
            }}
          >
            Specialized Services
          </h2>

          <p className="text-gray-600 leading-8">
            Comprehensive medico-legal solutions designed to protect
            healthcare professionals, hospitals and medical institutions.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white
                  rounded-[28px]
                  border
                  border-slate-200
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                "
              >

                {/* Top Border */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-0
                    bg-red-700
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Icon */}

                <div
                  className="
                    w-20
                    h-20
                    rounded-2xl
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                    mb-6
                    transition-all
                    duration-500
                    group-hover:bg-red-700
                    group-hover:rotate-6
                  "
                >
                  <Icon
                    className="
                      text-3xl
                      text-[#071A3D]
                      group-hover:text-white
                      transition-all
                    "
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-snug
                    mb-4
                    transition-all
                  "
                  style={{
                    color: COLORS.primary,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}

                <p className="text-gray-600 leading-8">
                  {service.description}
                </p>

                {/* Arrow */}

                {/* <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-red-700
                    font-semibold
                    opacity-0
                    translate-y-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-300
                  "
                >
                  Learn More →

                </div> */}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}