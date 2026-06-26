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

import { COMPANY, SOCIAL_LINKS } from "../../utils/constants";

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

export default function AppointmentSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-16">

            <span
            className="
            inline-flex
            items-center
            px-4
            py-2
            rounded-full
            bg-red-50
            text-red-700
            font-semibold
            text-sm
            mb-5
            "
            >
            Book Appointment
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
            Connect With Our Legal Experts
            </h2>

            <p className="text-gray-600 leading-8">
            Schedule a consultation with our medico-legal experts and
            get comprehensive support for professional indemnity,
            risk management and healthcare legal compliance.
            </p>

        </div>

        {/* Grid */}

        <div className="grid lg:grid-cols-12 gap-8">

            {/* LEFT */}

            <div className="lg:col-span-5">

            <div
                className="
                relative
                overflow-hidden
                h-full
                rounded-[32px]
                bg-gradient-to-br
                from-[#071A3D]
                via-[#0A2455]
                to-[#0D2C66]
                p-8
                text-white
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            "
            >

                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>

                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">

                {/* Stats */}

                <div className="grid grid-cols-2 gap-4 mb-8">

                    {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                        key={index}
                        className="
                        group
                        bg-white/10
                        backdrop-blur-md
                        border
                        border-white/10
                        rounded-2xl
                        p-5
                        hover:bg-white/15
                        transition-all
                        duration-300
                        "
                        >

                        <div
                            className="
                            w-12
                            h-12
                            rounded-xl
                            bg-red-600
                            flex
                            items-center
                            justify-center
                            mb-4
                            group-hover:scale-110
                            transition
                        "
                        >
                            <Icon className="text-white" />
                        </div>

                        <h4 className="text-3xl font-bold">
                            {item.value}
                        </h4>

                        <p className="text-white/70 text-sm mt-2">
                            {item.title}
                        </p>

                        </div>
                    );
                    })}

                </div>

                {/* Contact Card */}

                <div
                    className="
                    bg-white/5
                    backdrop-blur-md
                    border
                    border-white/10
                    rounded-2xl
                    p-5
                    space-y-4
                    mb-8
                "
                >

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

                {/* Social */}

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
                        className="
                        w-11
                        h-11
                        rounded-full
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        hover:bg-red-600
                        hover:-translate-y-1
                        transition-all
                        "
                        >
                        <Icon />
                        </a>
                    );
                    })}

                </div>

                </div>

            </div>

            </div>

            {/* FORM */}

            <div className="lg:col-span-7">

            <div
                className="
                bg-white
                rounded-[32px]
                p-10
                border
                border-slate-100
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
            >

                <h3 className="text-3xl font-bold text-[#071A3D] mb-3">
                Schedule Appointment
                </h3>

                <p className="text-gray-600 mb-8">
                Fill out the form and our team will contact you shortly.
                </p>

                <form className="space-y-6">

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
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-red-700 outline-none"
                        />
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
                            type="tel"
                            placeholder="Enter phone number"
                            className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-red-700 outline-none"
                        />
                        </div>

                    </div>

                    <div>
                        <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-[#071A3D] mb-2"
                        >
                        Select Service <span className="text-red-600">*</span>
                        </label>

                        <select
                        id="service"
                        className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:border-red-700 outline-none"
                        >
                        <option value="">
                            Choose Service
                        </option>

                        <option>
                            Legal Advisory
                        </option>

                        <option>
                            Risk Management
                        </option>

                        <option>
                            Professional Indemnity
                        </option>

                        <option>
                            Claims Assistance
                        </option>
                        </select>
                    </div>

                    <div>
                        <label
                        htmlFor="doctorName"
                        className="block text-sm font-semibold text-[#071A3D] mb-2"
                        >
                        Doctor Name
                        </label>

                        <input
                        id="doctorName"
                        type="text"
                        placeholder="Enter doctor name"
                        className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-red-700 outline-none"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div>
                        <label
                            htmlFor="appointmentDate"
                            className="block text-sm font-semibold text-[#071A3D] mb-2"
                        >
                            Appointment Date
                        </label>

                        <input
                            id="appointmentDate"
                            type="date"
                            className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:border-red-700 outline-none"
                        />
                        </div>

                        <div>
                        <label
                            htmlFor="appointmentTime"
                            className="block text-sm font-semibold text-[#071A3D] mb-2"
                        >
                            Appointment Time
                        </label>

                        <input
                            id="appointmentTime"
                            type="time"
                            className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:border-red-700 outline-none"
                        />
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="
                        w-full
                        h-14
                        rounded-xl
                        bg-gradient-to-r
                        from-red-700
                        to-red-600
                        text-white
                        font-semibold
                        shadow-lg
                        hover:shadow-xl
                        hover:-translate-y-1
                        transition-all
                        duration-300
                        "
                    >
                        Submit Appointment Request
                    </button>

                    </form>

            </div>

            </div>

        </div>

        </div>
    </section>
    );
}