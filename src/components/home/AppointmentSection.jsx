import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserMd,
  FaShieldAlt,
  FaUsers,
  FaGavel,
} from "react-icons/fa";

import { useState } from "react";
import toast from "react-hot-toast";

import { COMPANY, SOCIAL_LINKS } from "../../utils/constants";
import { createAppointment } from "../../api/appointmentApi";

const stats = [
  {
    icon: FaUserMd,
    value: "20K+",
    title: "Doctors Protected",
  },
  {
    icon: FaUsers,
    value: "12,000+",
    title: "Happy Clients",
  },
  {
    icon: FaShieldAlt,
    value: "90%",
    title: "Legal Protection",
  },
  {
    icon: FaGavel,
    value: "98%",
    title: "Winning Ratio",
  },
];

const initialForm = {
  full_name: "",
  phone_number: "",
  select_service: "",
  doctor_name: "",
  appointment_date: "",
  appointment_time: "",
};

export default function AppointmentSection() {
  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let fieldValue = value;

    if (name === "phone_number") {
      fieldValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const err = {};

    if (!form.full_name.trim()) {
      err.full_name = "Full name is required.";
    }

    if (!form.phone_number.trim()) {
      err.phone_number = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(form.phone_number)) {
      err.phone_number = "Enter valid 10 digit mobile number.";
    }

    if (!form.select_service) {
      err.select_service = "Please select service.";
    }

    if (!form.appointment_date) {
      err.appointment_date = "Appointment date is required.";
    }

    if (!form.appointment_time) {
      err.appointment_time = "Appointment time is required.";
    }

    const today = new Date().toISOString().split("T")[0];

    if (form.appointment_date && form.appointment_date < today) {
      err.appointment_date = "Past date is not allowed.";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      ...form,
      full_name: form.full_name.trim(),
      doctor_name: form.doctor_name.trim(),
    };

    try {
      setLoading(true);

      const res = await createAppointment(payload);

      toast.success(res.data.message || "Appointment booked successfully.");

      setForm(initialForm);

      setErrors({});
    } catch (error) {
      if (!error.response) {
        toast.error("Unable to connect to server.");

        return;
      }

      if (error.response.status === 422 && error.response.data?.errors) {
        const apiErrors = {};

        Object.entries(error.response.data.errors).forEach(([key, value]) => {
          apiErrors[key] = value[0];
        });

        setErrors(apiErrors);

        toast.error("Please correct the highlighted fields.");
      } else {
        toast.error(error.response?.data?.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-700 font-semibold text-sm mb-5">
            Book Appointment
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#071A3D] mb-5">
            Connect With Our Legal Experts
          </h2>

          <p className="text-gray-600 leading-8">
            Schedule a consultation with our medico-legal experts and get
            comprehensive support for professional indemnity, risk management
            and healthcare legal compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT */}

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden h-full rounded-[32px] bg-gradient-to-br from-[#071A3D] via-[#0A2455] to-[#0D2C66] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>

              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                          <Icon className="text-white" />
                        </div>

                        <h4 className="text-3xl font-bold">{item.value}</h4>

                        <p className="text-white/70 text-sm mt-2">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 space-y-4 mb-8">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-4 hover:text-red-300 transition"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                      <FaPhoneAlt />
                    </div>

                    {COMPANY.phone}
                  </a>

                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-4 hover:text-red-300 transition"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                      <FaEnvelope />
                    </div>

                    {COMPANY.email}
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                      <FaMapMarkerAlt />
                    </div>

                    {COMPANY.office_address}
                  </div>
                </div>

                <div className="flex gap-3">
                  {[
                    {
                      icon: FaFacebookF,
                      link: SOCIAL_LINKS.facebook,
                    },
                    {
                      icon: FaInstagram,
                      link: SOCIAL_LINKS.instagram,
                    },
                    {
                      icon: FaLinkedinIn,
                      link: SOCIAL_LINKS.linkedin,
                    },
                    {
                      icon: FaYoutube,
                      link: SOCIAL_LINKS.youtube,
                    },
                  ].map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 hover:-translate-y-1 transition-all"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* FORM STARTS HERE */}

          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <h3 className="text-3xl font-bold text-[#071A3D] mb-3">
                Schedule Appointment
              </h3>

              <p className="text-gray-600 mb-8">
                Fill out the form and our team will contact you shortly.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name & Phone */}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-[#071A3D] mb-2"
                    >
                      Full Name <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="fullName"
                      name="full_name"
                      value={form.full_name}
                      onChange={handleChange}
                      autoComplete="name"
                      type="text"
                      placeholder="Enter your full name"
                      className={`w-full h-14 px-5 rounded-xl bg-slate-50 outline-none transition border ${
                        errors.full_name
                          ? "border-red-500"
                          : "border-slate-200 focus:border-red-700"
                      }`}
                    />

                    {errors.full_name && (
                      <p className="text-red-600 text-sm mt-2">
                        {errors.full_name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#071A3D] mb-2"
                    >
                      Phone Number <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone_number"
                      value={form.phone_number}
                      onChange={handleChange}
                      autoComplete="tel"
                      type="tel"
                      maxLength={10}
                      placeholder="Enter phone number"
                      className={`w-full h-14 px-5 rounded-xl bg-slate-50 outline-none transition border ${
                        errors.phone_number
                          ? "border-red-500"
                          : "border-slate-200 focus:border-red-700"
                      }`}
                    />

                    {errors.phone_number && (
                      <p className="text-red-600 text-sm mt-2">
                        {errors.phone_number}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service */}

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-[#071A3D] mb-2"
                  >
                    Select Service <span className="text-red-600">*</span>
                  </label>

                  <select
                    id="service"
                    name="select_service"
                    value={form.select_service}
                    onChange={handleChange}
                    className={`w-full h-14 px-5 rounded-xl bg-slate-50 outline-none transition border ${
                      errors.select_service
                        ? "border-red-500"
                        : "border-slate-200 focus:border-red-700"
                    }`}
                  >
                    <option value="">Choose Service</option>

                    <option value="Legal Advisory">Legal Advisory</option>

                    <option value="Risk Management">Risk Management</option>

                    <option value="Professional Indemnity">
                      Professional Indemnity
                    </option>

                    <option value="Claims Assistance">Claims Assistance</option>
                  </select>

                  {errors.select_service && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.select_service}
                    </p>
                  )}
                </div>

                {/* Doctor */}

                <div>
                  <label
                    htmlFor="doctorName"
                    className="block text-sm font-semibold text-[#071A3D] mb-2"
                  >
                    Doctor Name
                  </label>

                  <input
                    id="doctorName"
                    name="doctor_name"
                    value={form.doctor_name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter doctor name"
                    className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:border-red-700 outline-none"
                  />
                </div>

                {/* Date Time */}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="appointmentDate"
                      className="block text-sm font-semibold text-[#071A3D] mb-2"
                    >
                      Appointment Date <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="appointmentDate"
                      name="appointment_date"
                      value={form.appointment_date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      type="date"
                      className={`w-full h-14 px-5 rounded-xl bg-slate-50 outline-none transition border ${
                        errors.appointment_date
                          ? "border-red-500"
                          : "border-slate-200 focus:border-red-700"
                      }`}
                    />

                    {errors.appointment_date && (
                      <p className="text-red-600 text-sm mt-2">
                        {errors.appointment_date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="appointmentTime"
                      className="block text-sm font-semibold text-[#071A3D] mb-2"
                    >
                      Appointment Time <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="appointmentTime"
                      name="appointment_time"
                      value={form.appointment_time}
                      onChange={handleChange}
                      type="time"
                      className={`w-full h-14 px-5 rounded-xl bg-slate-50 outline-none transition border ${
                        errors.appointment_time
                          ? "border-red-500"
                          : "border-slate-200 focus:border-red-700"
                      }`}
                    />

                    {errors.appointment_time && (
                      <p className="text-red-600 text-sm mt-2">
                        {errors.appointment_time}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-xl bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          opacity=".25"
                        />
                        <path
                          d="M22 12a10 10 0 00-10-10"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Appointment Request"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
