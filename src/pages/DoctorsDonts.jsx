import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../components/layout/MainLayout";

const dontsList = [
  "Do not ignore or disrespect court orders.",

  "Never neglect your duties as a healthcare provider.",

  "Only provide documents when legally requested; do not volunteer extra records.",

  "Avoid giving out information beyond what is required.",

  "Avoid vague or non-specific terminology when documenting or communicating.",

  "Do not panic in the face of crises; stay calm and focused.",

  "Do not act in a rude or dismissive manner with patients or their families.",

  "Communicate openly, rather than avoiding difficult conversations.",

  "Do not hesitate to seek advice from seniors or colleagues, especially in complex cases.",
];

export default function DoctorsDonts() {
  return (
    <MainLayout>
      <Helmet>
        <title>
          Don'ts For Medical Professionals | True Path Legal Consultant
        </title>

        <meta
          name="description"
          content="Important medico-legal mistakes healthcare professionals should avoid to minimize legal risks and maintain professional standards."
        />
      </Helmet>

      <Breadcrumb
        title="Don'ts"
        currentPage="Don'ts"
      />

      <section className="relative py-20 overflow-hidden bg-slate-50">

        {/* Background Blur */}

        <div className="absolute top-0 left-0 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">

          {/* Heading */}

          <div className="text-center mb-14">

            <h1 className="text-5xl font-bold text-[#071A3D] mb-4">
              DON'Ts
            </h1>

            <p className="text-lg text-slate-500">
              Common mistakes healthcare professionals should avoid
            </p>

          </div>

          {/* List */}

          <div className="space-y-5">

            {dontsList.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-slate-200
                  shadow-md
                  px-5
                  py-5
                  flex
                  items-center
                  gap-4
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                {/* Number */}

                <div
                  className="
                    w-8
                    h-8
                    min-w-[32px]
                    rounded-full
                    bg-[#B0172B]
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-sm
                  "
                >
                  {index + 1}
                </div>

                {/* Content */}

                <p className="text-slate-700 text-lg leading-relaxed">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>
    </MainLayout>
  );
}