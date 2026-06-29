import { Helmet } from "react-helmet-async";
import {
  FaUserMd,
  FaExclamationTriangle,
  FaHeartbeat,
  FaFileMedical,
} from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

export default function PreventMishaps() {
  return (
    <MainLayout>
      <Helmet>
        <title>
          How To Prevent Mishaps | True Path Legal Consultant
        </title>

        <meta
          name="description"
          content="Guidelines for preventing medico-legal mishaps and safeguarding professional interests."
        />
      </Helmet>

      <Breadcrumb
        title="How To Prevent A Mishaps"
        currentPage="How To Prevent A Mishaps"
      />

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-4">

          {/* Heading */}

          <div className="text-center mb-16">

            <h1 className="text-5xl font-bold text-[#071A3D] mb-5">
              How to Prevent Mishaps and Safeguard Interests
            </h1>

            <div className="w-24 h-1 bg-red-700 mx-auto rounded-full"></div>

          </div>

          {/* Section 1 */}

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-10 mb-8">

            <div className="flex items-start gap-5 flex-col md:flex-row">

              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-700 text-2xl">
                <FaUserMd />
              </div>

              <div className="flex-1">

                <h2 className="text-3xl font-bold text-[#071A3D] mb-5">
                  Practice Within Your Expertise
                </h2>

                <p className="text-slate-700 mb-4">
                  True Legal Consultant advises that professionals treat only
                  cases that align with their:
                </p>

                <ul className="space-y-3 text-slate-700">

                  <li>• Qualifications</li>

                  <li>• Infrastructure</li>

                  <li>• Competence and Skill</li>

                </ul>

                <div className="mt-6 p-5 bg-red-50 border-l-4 border-red-700 rounded-xl">

                  <strong className="text-[#071A3D]">
                    Why?
                  </strong>

                  <p className="mt-2 text-slate-700">
                    The legal standard is clear: treating outside your certified
                    qualifications, skill level, or infrastructure may lead to
                    negligence. The higher the risk of a case, the higher the
                    level of required qualifications, skill, and infrastructure.
                    Inadequate resources, except in emergencies, can be
                    considered a deficiency in service.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Section 2 */}

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-10 mb-8">

            <div className="flex items-start gap-5 flex-col md:flex-row">

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#071A3D] text-2xl">
                <FaExclamationTriangle />
              </div>

              <div className="flex-1">

                <h2 className="text-3xl font-bold text-[#071A3D] mb-5">
                  Recognize and Address Complications Promptly
                </h2>

                <p className="font-semibold mb-4 text-slate-700">
                  If complications arise, here’s how to minimize risk:
                </p>

                <div className="space-y-4 text-slate-700">

                  <div>
                    <strong>Immediate Intervention:</strong> Address
                    complications as soon as possible.
                  </div>

                  <div>
                    <strong>Refer or Transfer When Necessary:</strong> If
                    treatment is beyond your capability, refer to an
                    appropriate specialist or transfer the patient in a
                    well-equipped ambulance.
                  </div>

                  <div>
                    <strong>Accompany the Patient:</strong> Whenever possible,
                    accompany or ensure a responsible medical officer
                    accompanies the patient to a facility with adequate
                    resources.
                  </div>

                </div>

                <div className="mt-6 p-5 bg-blue-50 border-l-4 border-[#071A3D] rounded-xl">

                  <strong className="text-[#071A3D]">
                    Legal Perspective:
                  </strong>

                  <p className="mt-2 text-slate-700">
                    Your role is to reduce health risks for the patient
                    without guaranteeing a cure, which aligns with legal
                    expectations.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Section 3 */}

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-10 mb-8">

            <div className="flex items-start gap-5 flex-col md:flex-row">

              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-700 text-2xl">
                <FaHeartbeat />
              </div>

              <div className="flex-1">

                <h2 className="text-3xl font-bold text-[#071A3D] mb-5">
                  Safeguarding Medical Professionals in Cases of Patient Death
                </h2>

                <p className="text-slate-700 mb-5">
                  Certain deaths may present legal sensitivities. Here’s how to
                  handle them professionally:
                </p>

                <div className="space-y-4 text-slate-700">

                  <div>
                    <strong>Cases of Sudden or Unexpected Death:</strong>
                    {" "}
                    Document everything thoroughly and involve other doctors
                    as witnesses when possible.
                  </div>

                  <div>
                    <strong>After Procedure or Injection Deaths:</strong>
                    {" "}
                    Avoid transferring critically ill or deceased patients
                    to another facility.
                  </div>

                  <div>
                    <strong>Maintain Complete Records:</strong>
                    {" "}
                    Continue any necessary life-support measures while
                    completing documentation.
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Section 4 */}

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-10">

            <div className="flex items-start gap-5 flex-col md:flex-row">

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#071A3D] text-2xl">
                <FaFileMedical />
              </div>

              <div className="flex-1">

                <h2 className="text-3xl font-bold text-[#071A3D] mb-5">
                  Declaring Death Tactfully
                </h2>

                <div className="space-y-5 text-slate-700">

                  <div>
                    <strong>Complete Documentation First:</strong>
                    {" "}
                    Ensure your records are accurate and comprehensive.
                  </div>

                  <div>
                    <strong>Communicate with Compassion:</strong>
                    {" "}
                    Speak openly with relatives, expressing empathy, and
                    confirming the inevitability of death.
                  </div>

                  <div>
                    <strong>Present Yourself Professionally:</strong>
                    {" "}
                    Ideally, the chief doctor should deliver the news to avoid
                    miscommunication or further distress. Avoid discussions
                    about pending bills, police notification, or any other
                    administrative issues at the time of declaration.
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </MainLayout>
  );
}