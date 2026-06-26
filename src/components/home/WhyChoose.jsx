import { whyChooseData } from "./whyChooseData";

export default function WhyChoose() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="text-center mb-16">

          <span
            className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-red-50
            text-red-700
            font-medium
            mb-5
          "
          >
            Why Choose True Legal
          </span>

          <h2
            className="
            text-4xl
            lg:text-5xl
            font-bold
            text-[#071A3D]
            mb-6
          "
          >
            Trusted By Healthcare Professionals
          </h2>

          <p
            className="
            max-w-3xl
            mx-auto
            text-gray-600
            leading-8
          "
          >
            Delivering medico-legal protection,
            professional indemnity services,
            risk management and legal support
            for doctors, hospitals and healthcare
            institutions.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {whyChooseData.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white
                rounded-3xl
                p-8
                text-center
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                overflow-hidden
              "
            >

              {/* Top Border Animation */}

              <div
                className="
                absolute
                top-0
                left-0
                h-1
                w-0
                bg-red-700
                group-hover:w-full
                transition-all
                duration-500
              "
              />

              {/* Icon */}

              <div
                className="
                w-20
                h-20
                mx-auto
                rounded-full
                bg-slate-50
                flex
                items-center
                justify-center
                mb-6
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-10 h-10"
                />
              </div>

              {/* Number */}

              <h3
                className="
                text-3xl
                font-bold
                text-red-700
                mb-3
                transition-all
                duration-300
                group-hover:scale-110
              "
              >
                {item.number}
              </h3>

              {/* Title */}

              <h4
                className="
                text-xl
                font-bold
                text-[#071A3D]
                mb-4
              "
              >
                {item.title}
              </h4>

              {/* Description */}

              <p
                className="
                text-gray-600
                leading-7
                text-sm
              "
              >
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}