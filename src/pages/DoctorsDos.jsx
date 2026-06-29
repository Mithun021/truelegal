import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../components/layout/MainLayout";

const dosList = [
  "Accept the changes and challenges in the medical field, updating practices as necessary.",

  "Do the right thing in all interactions, keeping integrity at the forefront.",

  "Address patients in a sensitive, empathetic manner.",

  "Pay full attention to patient concerns, looking for details, and maintain direct engagement.",

  "Clearly explain all billing and financial matters to ensure patients understand costs and expectations.",

  "Keep thorough records, including instances where treatment is refused, to avoid disputes later.",

  "Personally attend to patients and follow through on all case obligations.",

  "Acknowledge and respond promptly to legal notifications and inquiries; keep the insurance company informed.",

  "Obtain an indemnity policy and stay covered for professional liabilities.",
];

export default function DoctorsDos() {
  return (
    <MainLayout>
      <Breadcrumb
        title="Do's"
        currentPage="Do's"
      />

      <section className="relative py-20 overflow-hidden bg-slate-50">

        {/* Background Blur */}

        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">

          {/* Heading */}

          <div className="text-center mb-14">

            <h1 className="text-5xl font-bold text-[#071A3D] mb-4">
              DO's
            </h1>

            <p className="text-lg text-slate-500">
              Professional ethics and best practices for medico-legal safety
            </p>

          </div>

          {/* List */}

          <div className="space-y-5">

            {dosList.map((item, index) => (
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