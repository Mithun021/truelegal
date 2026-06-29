import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../components/layout/MainLayout";
import {
  FaGavel,
  FaBalanceScale,
  FaShieldAlt,
  FaFileContract,
  FaUserMd,
  FaHospital,
  FaBookMedical,
  FaHandshake,
  FaLock,
  FaUsers,
  FaMoneyCheckAlt,
  FaHeadset,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { COMPANY } from "../utils/constants";
// import { COLORS } from "../utils/colors";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FaHeadset,
    title: "24×7 PAN India Support",
    desc: "Doorstep services with nationwide support available round the clock.",
  },

  {
    icon: FaGavel,
    title: "Supreme Court Legal Coverage",
    desc: "Legal representation from lower courts up to the Hon’ble Supreme Court of India.",
  },

  {
    icon: FaBalanceScale,
    title: "Medical Negligence Cases",
    desc: "Coverage for consumer, civil, criminal courts, MCI and related proceedings.",
  },

  {
    icon: FaFileContract,
    title: "Regulatory Act Protection",
    desc: "Coverage under PCPNDT, MTP, Drugs & Cosmetics and similar Acts.",
  },

  {
    icon: FaUserMd,
    title: "Expert Medico-Legal Advice",
    desc: "Direct access to experienced medico-legal consultants and specialists.",
  },

  {
    icon: FaBookMedical,
    title: "Journals & Workshops",
    desc: "Free access to medico-legal journals, bulletins and awareness workshops.",
  },

  {
    icon: FaHospital,
    title: "Pre-Litigation Guidance",
    desc: "Strategic legal advice and consultation before disputes escalate.",
  },

  {
    icon: FaMoneyCheckAlt,
    title: "Cashless Insurance Claims",
    desc: "Smooth and efficient cashless settlement support for insurance claims.",
  },

  {
    icon: FaHandshake,
    title: "Out-of-Court Settlements",
    desc: "Provision for amicable settlements through insurance support.",
  },

  {
    icon: FaLock,
    title: "Confidentiality Protection",
    desc: "Coverage for defamation, document loss and breach of confidentiality matters.",
  },

  {
    icon: FaUsers,
    title: "Largest In-House Legal Team",
    desc: "Dedicated legal professionals working exclusively for client protection.",
  },

  {
    icon: FaShieldAlt,
    title: "Affordable Membership Plans",
    desc: "Comprehensive protection at highly competitive and cost-effective pricing.",
  },
];

export default function Service(){
    return (
        <MainLayout>
            <Breadcrumb title="Services" />
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-14">
                    <span className="text-red-700 font-semibold uppercase text-sm">
                        WHAT WE COVER
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#071A3D] mt-3">
                        Complete Legal & Professional Protection
                    </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                        <div
                            key={index}
                            className="
                            group
                            bg-white
                            rounded-3xl
                            p-8
                            border
                            border-slate-200
                            hover:border-red-700
                            hover:shadow-2xl
                            hover:-translate-y-2
                            transition-all
                            duration-500
                            "
                        >
                            <div
                            className="
                                w-16
                                h-16
                                rounded-2xl
                                bg-[#071A3D]
                                text-white
                                flex
                                items-center
                                justify-center
                                mb-6
                                group-hover:bg-red-700
                                transition-all
                            "
                            >
                            <Icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-[#071A3D] mb-4">
                            {service.title}
                            </h3>

                            <p className="text-gray-600 leading-7">
                            {service.desc}
                            </p>
                        </div>
                        );
                    })}

                    </div>
                </div>
                </section>

                <section className="py-24 bg-slate-50 overflow-hidden">

                    <div className="max-w-7xl mx-auto px-4">

                        <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            bg-white
                            border
                            border-slate-200
                            shadow-2xl
                        "
                        >
                        {/* Background Shape */}

                        <div
                            className="
                            absolute
                            top-0
                            right-0
                            w-80
                            h-80
                            bg-red-100
                            rounded-full
                            blur-3xl
                            opacity-40
                            "
                        />

                        <div
                            className="
                            absolute
                            bottom-0
                            left-0
                            w-80
                            h-80
                            bg-blue-100
                            rounded-full
                            blur-3xl
                            opacity-40
                            "
                        />

                        <div className="relative z-10 p-8 lg:p-16">

                            {/* Badge */}

                            <div className="flex justify-center mb-6">

                            <div
                                className="
                                inline-flex
                                items-center
                                gap-2
                                px-5
                                py-2
                                rounded-full
                                bg-red-50
                                text-red-700
                                font-semibold
                                "
                            >
                                <FaShieldAlt />
                                Membership Protection Plan
                            </div>

                            </div>

                            {/* Heading */}

                            <h2
                            className="
                                text-center
                                text-3xl
                                lg:text-4xl
                                font-bold
                                text-[#071A3D]
                                mb-3
                            "
                            >
                            Secure Your Professional Future
                            </h2>

                            {/* Pricing */}

                            <div className="text-center mb-10">

                            <p
                                className="
                                text-md
                                lg:text-md
                                text-gray-600
                                leading-relaxed
                                "
                            >
                                ₹20,000/- (Including GST)
                                <span className="font-semibold text-[#071A3D]">
                                {" "}for 3 Years
                                </span>
                            </p>

                            <p
                                className="
                                mt-3
                                text-md
                                lg:text-md
                                font-bold
                                text-red-700
                                "
                            >
                                ₹50 Lakh Coverage
                            </p>

                            <p className="text-gray-500 mt-2">
                                Plus First Year Membership Free
                            </p>

                            </div>

                            {/* Button */}

                            <div className="flex justify-center mb-4">

                            <Link
                                to="/membership-registration"
                                className="
                                inline-flex
                                items-center
                                gap-3
                                bg-red-700
                                hover:bg-red-800
                                text-white
                                px-10
                                py-4
                                rounded-2xl
                                font-semibold
                                shadow-lg
                                hover:scale-105
                                transition-all
                                duration-300
                                "
                            >
                                Enroll Now
                                <FaArrowRight />
                            </Link>

                            </div>

                            {/* Assistance */}

                            <div className="text-center mb-8">

                            <h3
                                className="
                                text-3xl
                                font-bold
                                text-[#071A3D]
                                mb-3
                                "
                            >
                                Need Assistance?
                            </h3>

                            <p className="text-gray-500">
                                Our legal experts are available to assist you.
                            </p>

                            </div>

                            {/* Contact Cards */}

                            <div
                            className="
                                flex
                                flex-col
                                md:flex-row
                                justify-center
                                gap-5
                            "
                            >

                            <a
                                href={`tel:${COMPANY.phone}`}
                                className="
                                flex
                                items-center
                                justify-center
                                gap-3
                                bg-[#071A3D]
                                text-white
                                px-8
                                py-4
                                rounded-2xl
                                shadow-lg
                                hover:-translate-y-1
                                transition-all
                                "
                            >
                                <FaPhoneAlt className="text-red-500" />
                                {COMPANY.phone}
                            </a>

                            <a
                                href={`mailto:${COMPANY.email}`}
                                className="
                                flex
                                items-center
                                justify-center
                                gap-3
                                bg-red-700
                                text-white
                                px-8
                                py-4
                                rounded-2xl
                                shadow-lg
                                hover:-translate-y-1
                                transition-all
                                "
                            >
                                <FaEnvelope />
                                {COMPANY.email}
                            </a>

                            </div>

                        </div>

                        </div>

                    </div>

                    </section>
        </MainLayout>
    )
}