import lawyers from "../home/lawyers";

export default function InHouseLawyers() {
  return (
    <section className="py-12 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-red-50
              text-red-700
              font-semibold
              mb-5
            "
          >
            Legal Experts
          </span>

          <h2
            className="
              text-4xl
              lg:text-5xl
              font-bold
              text-[#071A3D]
              mb-5
            "
          >
            Meet Our In-House Lawyers
          </h2>

          <p className="text-gray-600 leading-8">
            Experienced legal professionals dedicated to protecting
            healthcare practitioners, hospitals and medical institutions.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {lawyers.map((lawyer, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-[30px]
                overflow-hidden
                border
                border-slate-200
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="
                    w-full
                    h-[360px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#071A3D]
                    mb-2
                  "
                >
                  {lawyer.name}
                </h3>

                <div
                  className="
                    text-red-700
                    font-semibold
                    mb-4
                  "
                >
                  {lawyer.designation}
                </div>

                <div
                  className="
                    w-16
                    h-1
                    bg-red-700
                    rounded-full
                    mb-5
                  "
                />

                <p className="text-gray-600 leading-8">
                  {lawyer.qualification}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}