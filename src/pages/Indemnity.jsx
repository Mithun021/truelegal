import { Helmet } from "react-helmet-async";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaUserMd,
  FaFileContract,
} from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

export default function Indemnity() {
  return (
    <MainLayout>
      <Helmet>
        <title>Professional Liability Insurance | True Legal Consultant</title>
        <meta
          name="description"
          content="Professional Liability Insurance (PLI) guidance and medico-legal protection for healthcare professionals."
        />
      </Helmet>

      <Breadcrumb title="Indemnity" />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Hero */}

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 text-red-700 font-semibold text-sm mb-5">
              <FaShieldAlt />
              Professional Protection
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#071A3D] mb-5">
              Professional Liability Insurance (PLI)
            </h1>

            <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
              A Necessity for Medical Professionals and Clinics
            </p>
          </div>

          {/* Intro */}

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 lg:p-10 mb-10">
            <p className="text-gray-700 leading-9">
              Medical professionals require dedicated insurance coverage that
              safeguards both their practice and clinic. Professional Liability
              Insurance (PLI) is essential, offering protection against claims
              of negligence, malpractice, and errors, often initiated by
              patients or their caregivers. Unlike general liability insurance,
              which does not cover claims related to professional services, PLI
              is specifically designed for healthcare providers to protect
              against risks associated with patient care and professional
              practices.
            </p>
          </div>

          {/* Importance */}

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-12">
            <div className="bg-[#071A3D] text-white px-8 py-5">
              <h2 className="text-2xl font-bold">
                Why is Professional Liability Insurance Important?
              </h2>
            </div>

            <div className="p-8">
              <p className="text-gray-700 mb-8">
                PLI is critical as it provides:
              </p>

              <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-red-700 text-xl mb-5">
                    <FaBalanceScale />
                  </div>

                  <h3 className="font-bold text-[#071A3D] mb-3">
                    Protection Against Negligence Claims
                  </h3>

                  <p className="text-gray-600 text-sm leading-7">
                    Covers legal and settlement costs if a patient alleges harm
                    due to negligence.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-red-700 text-xl mb-5">
                    <FaFileContract />
                  </div>

                  <h3 className="font-bold text-[#071A3D] mb-3">
                    Coverage for Malpractice and Errors
                  </h3>

                  <p className="text-gray-600 text-sm leading-7">
                    Shields against claims of malpractice or professional
                    errors, also known as medical malpractice insurance or
                    errors and omissions insurance.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-red-700 text-xl mb-5">
                    <FaUserMd />
                  </div>

                  <h3 className="font-bold text-[#071A3D] mb-3">
                    Peace of Mind for Practitioners
                  </h3>

                  <p className="text-gray-600 text-sm leading-7">
                    Allows healthcare professionals to focus on patient care
                    without constant worry about potential litigation.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Guidance */}

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-12">
            <div className="bg-[#071A3D] text-white px-8 py-5">
              <h2 className="text-2xl font-bold">
                Finding the Right Medical Professional Liability Insurance Plan
              </h2>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-9">
                At True Legal Consultant, we specialize in helping healthcare
                providers secure the right PLI plan to suit their unique needs.
                Our team of experienced consultants guides you step-by-step,
                ensuring you understand the options available and find the best
                plan to protect your practice.
              </p>
            </div>
          </div>

          {/* Solutions */}

          <div className="grid lg:grid-cols-3 gap-6 mb-14">

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-7">
              <h3 className="font-bold text-xl text-[#071A3D] mb-4">
                Comprehensive Guidance
              </h3>

              <p className="text-gray-600 leading-8">
                We assess your requirements and recommend plans from top
                insurance providers.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-7">
              <h3 className="font-bold text-xl text-[#071A3D] mb-4">
                Tailored Solutions
              </h3>

              <p className="text-gray-600 leading-8">
                Whether you’re a solo practitioner or part of a larger clinic,
                we help find coverage that matches your practice scale and risk
                profile.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-7">
              <h3 className="font-bold text-xl text-[#071A3D] mb-4">
                Litigation Support
              </h3>

              <p className="text-gray-600 leading-8">
                We provide ongoing support to manage any legal issues that may
                arise, enabling you to practice confidently.
              </p>
            </div>

          </div>

          {/* CTA */}

          <div className="bg-gradient-to-r from-[#071A3D] to-[#0D5BC2] rounded-3xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need Customized Advice?
            </h2>

            <p className="max-w-3xl mx-auto text-white/90 leading-8 mb-8">
              For customized advice on Medical Professional Liability
              Insurance, contact True Legal Consultant today and let our
              experts guide you to the best coverage. Protect your practice and
              focus on what you do best—caring for your patients.
            </p>

            <a
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-xl
                bg-red-700
                hover:bg-red-800
                font-semibold
                transition-all
              "
            >
              Contact Us Today
            </a>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}