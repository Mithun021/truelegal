import { Helmet } from "react-helmet-async";
import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

export default function MembershipRegistration() {
  return (
    <MainLayout>
      <Helmet>
        <title>Membership Registration Form | True Legal Consultant</title>
      </Helmet>

      <Breadcrumb title="Membership Registration Form" />

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}

          <div className="text-center mb-12">
            <span
              className="
                                inline-block
                                px-4
                                py-2
                                rounded-full
                                bg-red-50
                                text-red-700
                                font-semibold
                                text-sm
                                mb-4
                            "
            >
              Registration Portal
            </span>

            <h1
              className="
                                text-4xl
                                font-bold
                                text-[#071A3D]
                                mb-4
                            "
            >
              Membership Registration Form
            </h1>

            <p className="text-gray-600">
              Complete the registration form below.
            </p>
          </div>

          <form
            className="
                            bg-white
                            rounded-3xl
                            shadow-xl
                            border
                            border-gray-100
                            p-8
                            lg:p-10
                        "
          >
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#071A3D] mb-6">
                Insured Details
              </h2>

              <div>
                <label className="block mb-2 font-medium">Insured Type *</label>

                <select
                  className="
                                        w-full
                                        border
                                        rounded-xl
                                        px-4
                                        py-3
                                    "
                >
                  <option>Doctor - Professional Indemnity</option>

                  <option>Hospital / Nursing Home - Errors & Omissions</option>

                  <option>
                    Diagnostic Centre / Clinic - Errors & Omissions
                  </option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className="block mb-2 font-medium">
                  Name of Doctor / Medical Establishment *
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email *</label>

                <input
                  type="email"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#071A3D] mb-6">
                Residence Address *
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  placeholder="House No / Flat No / Block"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="Street / Road / Locality"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="District"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="State"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="Pincode"
                  className="border rounded-xl px-4 py-3"
                />
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#071A3D] mb-6">
                Hospital / Clinic Address *
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  placeholder="House No / Flat No / Block"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="Street / Road / Locality"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="District"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="State"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="Pincode"
                  className="border rounded-xl px-4 py-3"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className="block mb-2 font-medium">
                  Primary Mobile No *
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Alternate Mobile No
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className="block mb-2 font-medium">ID Proof *</label>

                <select className="w-full border rounded-xl px-4 py-3">
                  <option>Aadhaar</option>

                  <option>Passport</option>

                  <option>PAN</option>

                  <option>Driving License</option>

                  <option>GST Certificate (For Non-Individual)</option>

                  <option>
                    Incorporation Certificate (For Non-Individuals)
                  </option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">ID Number *</label>

                <input
                  type="text"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>
            </div>

            <div className="mb-10">
              <label className="block mb-3 font-medium">
                Insurance Cover Required *
              </label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="insurance" />
                  Yes
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="insurance" />
                  No
                </label>
              </div>
            </div>

            <div className="mb-10">

                <h2 className="text-2xl font-bold text-[#071A3D] mb-6">
                    Doctor References *
                </h2>

                <div className="bg-slate-50 p-6 rounded-2xl mb-6">
                    <h3 className="font-semibold mb-4">
                        Reference 1
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div>
                            <label className="block mb-2 font-medium">
                                Doctor's Name
                            </label>

                            <input
                                type="text"
                                className="w-full border rounded-xl px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Contact Number
                            </label>

                            <input
                                type="text"
                                className="w-full border rounded-xl px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Location
                            </label>

                            <input
                                type="text"
                                className="w-full border rounded-xl px-4 py-3"
                            />
                        </div>

                    </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl">
                    <h3 className="font-semibold mb-4">
                        Reference 2
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">

                        <input
                            type="text"
                            placeholder="Doctor's Name"
                            className="border rounded-xl px-4 py-3"
                        />

                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="border rounded-xl px-4 py-3"
                        />

                        <input
                            type="text"
                            placeholder="Location"
                            className="border rounded-xl px-4 py-3"
                        />

                    </div>
                </div>

            </div>


            <div className="mb-10">

                <h2 className="text-2xl font-bold text-[#071A3D] mb-6">
                    Representative Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label className="block mb-2 font-medium">
                            Doctor's Representative Name *
                        </label>

                        <input
                            type="text"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Email of Doctor's Representative *
                        </label>

                        <input
                            type="email"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                </div>

            </div>

            <div className="mb-10">

                <h2 className="text-2xl font-bold text-[#071A3D] mb-6">
                    Payment Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label className="block mb-2 font-medium">
                            Total Amount Paid *
                        </label>

                        <input
                            type="number"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Mode of Payment and Cheque / Ref. No. *
                        </label>

                        <input
                            type="text"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                </div>

            </div>

            <div className="mb-10">

                <h2 className="text-2xl font-bold text-[#071A3D] mb-6">
                    Document Uploads
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label className="block mb-2 font-medium">
                            Upload Registration Certificate *
                        </label>

                        <input
                            type="file"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Upload Signature *
                        </label>

                        <input
                            type="file"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                </div>

            </div>

            <div className="mb-10">

                <h2 className="text-2xl font-bold text-[#071A3D] mb-6">
                    Additional Information
                </h2>

                <div className="w-16 h-1 bg-red-700 rounded-full mb-6"></div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

                    {/* Place of Submission */}

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Place of Submission *
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Place"
                            className="
                                w-full
                                border
                                border-gray-300
                                rounded-xl
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-red-200
                                focus:border-red-700
                            "
                        />
                    </div>

                    {/* Motor Insurance Expiry Date */}

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Motor Insurance Expiry Date *
                        </label>

                        <input
                            type="date"
                            className="
                                w-full
                                border
                                border-gray-300
                                rounded-xl
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-red-200
                                focus:border-red-700
                            "
                        />
                    </div>

                    {/* Health Insurance Expiry Date */}

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Health Insurance Expiry Date *
                        </label>

                        <input
                            type="date"
                            className="
                                w-full
                                border
                                border-gray-300
                                rounded-xl
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-red-200
                                focus:border-red-700
                            "
                        />
                    </div>

                </div>

            </div>

            <div className="mb-10">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />

                <span>
                  I agree and hereby declare that the above statement and
                  particulars are true and correct.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="
                                w-full
                                bg-red-700
                                hover:bg-red-800
                                text-white
                                py-4
                                rounded-xl
                                font-semibold
                                transition
                            "
            >
              Submit Registration Form
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}
